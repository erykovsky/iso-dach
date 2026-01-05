import { openai } from "@ai-sdk/openai";
import { generateObject } from "ai";
import { z } from "zod";
import { NextResponse } from "next/server";
import { put } from "@vercel/blob";

// Schema dla wyciągniętych danych z faktury
const invoiceSchema = z.object({
  amount: z.number().describe("Kwota brutto z faktury w PLN"),
  date: z
    .string()
    .describe(
      "Data WYSTAWIENIA faktury w formacie YYYY-MM-DD - MANDATORY: ZAWSZE użyj daty WYSTAWIENIA faktury (data wystawienia dokumentu), NIGDY nie używaj terminu płatności, daty płatności, daty sprzedaży, daty wykonania usługi ani innych dat. Szukaj pól oznaczonych jako 'Data wystawienia', 'Data', 'Data dokumentu', 'Data faktury', 'Wystawiono dnia'. Format: YYYY-MM-DD."
    ),
  vendor: z
    .string()
    .describe(
      "Nazwa SPRZEDAWCY (firmy wystawiającej fakturę) - wyciągnij z sekcji 'Sprzedawca', 'Wystawca faktury' lub z nagłówka faktury. Jeśli faktura ma sekcje 'Sprzedawca' i 'Nabywca', wybierz dane z sekcji 'Sprzedawca'. Użyj pełnej nazwy firmy, jeśli jest dostępna."
    ),
  invoiceNumber: z.string().describe("Numer faktury"),
  description: z.string().describe("Krótki opis zakupu"),
});

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "Brak pliku" }, { status: 400 });
    }

    // Sprawdź typ pliku
    const fileType = file.type;
    const validTypes = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/webp",
      "application/pdf",
    ];

    if (!validTypes.includes(fileType)) {
      return NextResponse.json(
        { error: "Nieprawidłowy typ pliku. Obsługiwane: JPG, PNG, WEBP, PDF" },
        { status: 400 }
      );
    }

    // Konwertuj plik na base64 dla OpenAI
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64 = buffer.toString("base64");
    const dataUrl = `data:${fileType};base64,${base64}`;

    console.log("Analizuję fakturę...");

    // Użyj AI do analizy faktury
    const result = await generateObject({
      model: openai.chat("gpt-4o-mini-2024-07-18"),
      schema: invoiceSchema,
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: `Przeanalizuj tę fakturę i wyciągnij z niej najważniejsze informacje. Jeśli faktura jest w języku polskim, zachowaj polskie nazwy. Kwotę podaj w PLN (jeśli jest w innej walucie, zaznacz to w opisie).

KRYTYCZNIE WAŻNE INSTRUKCJE:

1. DATA WYSTAWIENIA (date):
   - ZAWSZE użyj daty WYSTAWIENIA faktury (data wystawienia dokumentu)
   - NIGDY nie używaj: terminu płatności, daty płatności, daty wykonania usługi, daty sprzedaży towaru, daty zakupu
   - Szukaj pól oznaczonych jako: "Data wystawienia", "Data", "Data dokumentu", "Data faktury", "Wystawiono dnia"
   - Jeśli faktura ma zarówno "Data wystawienia" jak i "Termin płatności" - użyj TYLKO daty wystawienia
   - Format: YYYY-MM-DD (np. 2024-03-15)

2. SPRZEDAWCA (vendor):
   - Wyciągnij nazwę firmy z sekcji "Sprzedawca", "Wystawca faktury" lub z nagłówka faktury
   - Jeśli faktura ma wyraźnie oznaczone sekcje "Sprzedawca" i "Nabywca", wybierz dane z sekcji "Sprzedawca" (firma wystawiająca fakturę)
   - Użyj pełnej nazwy firmy, jeśli jest dostępna na fakturze
   - Jeśli nie możesz jednoznacznie zidentyfikować sprzedawcy, wpisz "Nieznany sprzedawca"`,
            },
            {
              type: "image",
              image: dataUrl,
            },
          ],
        },
      ],
    });

    console.log("Wynik analizy:", result.object);

    // Zapisz plik faktury w Vercel Blob
    let fileUrl: string | undefined;
    try {
      const timestamp = Date.now();
      const fileName = `${timestamp}-${file.name}`;
      const blob = await put(`invoices/files/${fileName}`, file, {
        access: "public",
      });
      fileUrl = blob.url;
      console.log("Plik zapisany w Blob:", fileUrl);
    } catch (blobError) {
      console.error("Błąd podczas zapisywania pliku w Blob:", blobError);
      // Kontynuuj bez zapisywania pliku
    }

    return NextResponse.json({
      success: true,
      data: {
        ...result.object,
        fileUrl, // URL do pliku w Vercel Blob
      },
    });
  } catch (error) {
    console.error("Błąd podczas analizy faktury:", error);
    return NextResponse.json(
      {
        error: "Błąd podczas analizy faktury",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
