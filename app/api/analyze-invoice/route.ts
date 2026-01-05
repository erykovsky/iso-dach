import { openai } from "@ai-sdk/openai";
import { generateObject } from "ai";
import { z } from "zod";
import { NextResponse } from "next/server";
import { put } from "@vercel/blob";
import { PDFDocument } from "pdf-lib";

// Schema dla wyciągniętych danych z faktury
const invoiceSchema = z.object({
  amount: z.number().describe("Kwota brutto z faktury w PLN"),
  date: z
    .string()
    .describe(
      "Data WYSTAWIENIA faktury w formacie YYYY-MM-DD - MANDATORY: ZAWSZE użyj daty WYSTAWIENIA faktury (data wystawienia/dokumentu), NIGDY nie używaj terminu płatności, daty sprzedaży, daty wykonania usługi ani innych dat. Szukaj pól oznaczonych jako 'Data wystawienia', 'Data', 'Data dokumentu', 'Data sprzedaży' (ale użyj daty wystawienia, nie daty sprzedaży). Format: YYYY-MM-DD."
    ),
  vendor: z
    .string()
    .describe(
      "Nazwa SPRZEDAWCY (firmy wystawiającej fakturę) - MANDATORY: zawsze wyciągnij pełną nazwę firmy z sekcji 'Sprzedawca' lub 'Wystawca' lub z nagłówka faktury. Jeśli faktura ma sekcje 'Sprzedawca' i 'Nabywca', wybierz dane z sekcji 'Sprzedawca'. Nazwa musi być kompletna i dokładna, bez skrótów."
    ),
  category: z
    .enum([
      "materiały",
      "paliwo",
      "energia",
      "ubezpieczenia",
      "wynagrodzenia",
      "marketing",
      "oprogramowanie",
      "inne",
    ])
    .describe("Kategoria wydatku"),
  invoiceNumber: z.string().describe("Numer faktury"),
  description: z.string().describe("Krótki opis zakupu"),
});

// Funkcja pomocnicza do analizy pojedynczego pliku
async function analyzeInvoiceFile(
  file: File,
  fileBuffer: Buffer
): Promise<{
  data: z.infer<typeof invoiceSchema>;
  fileUrl?: string;
}> {
  const fileType = file.type;
  const base64 = fileBuffer.toString("base64");
  const dataUrl = `data:${fileType};base64,${base64}`;

  // Użyj AI do analizy faktury
  const result = await generateObject({
    model: openai("gpt-4o"),
    schema: invoiceSchema,
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: `Przeanalizuj tę fakturę i wyciągnij z niej najważniejsze informacje. Jeśli faktura jest w języku polskim, zachowaj polskie nazwy. Kwotę podaj w PLN (jeśli jest w innej walucie, zaznacz to w opisie). 

WAŻNE INSTRUKCJE:

1. DATA WYSTAWIENIA (date) - KRYTYCZNIE WAŻNE:
   - ZAWSZE użyj daty WYSTAWIENIA faktury (data wystawienia dokumentu)
   - NIGDY nie używaj: terminu płatności, daty płatności, daty wykonania usługi, daty sprzedaży towaru, daty zakupu
   - Szukaj pól oznaczonych jako: "Data wystawienia", "Data", "Data dokumentu", "Data faktury", "Wystawiono dnia"
   - Jeśli faktura ma zarówno "Data wystawienia" jak i "Termin płatności" - użyj TYLKO daty wystawienia
   - Format: YYYY-MM-DD (np. 2024-03-15)
   - Jeśli nie znajdziesz daty wystawienia, użyj daty z nagłówka faktury, ale NIGDY terminu płatności

2. Sprzedawca (vendor): ZAWSZE wyciągnij pełną nazwę firmy z sekcji "Sprzedawca", "Wystawca faktury" lub z nagłówka faktury. Jeśli faktura ma wyraźnie oznaczone sekcje "Sprzedawca" i "Nabywca", wybierz dane z sekcji "Sprzedawca" (firma wystawiająca fakturę). Nazwa musi być kompletna - użyj pełnej nazwy firmy, nie skrótów. Jeśli nie możesz jednoznacznie zidentyfikować sprzedawcy, wpisz "Nieznany sprzedawca".`,
          },
          {
            type: "image",
            image: dataUrl,
          },
        ],
      },
    ],
  });

  // Zapisz plik faktury w Vercel Blob
  let fileUrl: string | undefined;
  try {
    const timestamp = Date.now();
    const randomId = Math.random().toString(36).substring(7);
    const fileName = `${timestamp}-${randomId}-${file.name}`;
    const blob = await put(`invoices/files/${fileName}`, file, {
      access: "public",
    });
    fileUrl = blob.url;
  } catch (blobError) {
    console.error("Błąd podczas zapisywania pliku w Blob:", blobError);
    // Kontynuuj bez zapisywania pliku
  }

  return {
    data: result.object,
    fileUrl,
  };
}

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

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Sprawdź czy to PDF i czy ma więcej niż 1 stronę
    if (fileType === "application/pdf") {
      try {
        const pdfDoc = await PDFDocument.load(buffer);
        const pageCount = pdfDoc.getPageCount();

        console.log(`PDF ma ${pageCount} stron`);

        if (pageCount > 1) {
          // Dziel PDF na strony i analizuj każdą osobno
          console.log(`Dzielę PDF na ${pageCount} stron...`);
          const results = [];

          for (let i = 0; i < pageCount; i++) {
            console.log(`Analizuję stronę ${i + 1}/${pageCount}...`);

            // Utwórz nowy PDF z jedną stroną
            const newPdfDoc = await PDFDocument.create();
            const [copiedPage] = await newPdfDoc.copyPages(pdfDoc, [i]);
            newPdfDoc.addPage(copiedPage);

            // Zapisz jako buffer
            const pdfBytes = await newPdfDoc.save();
            const pdfBuffer = Buffer.from(pdfBytes);

            // Utwórz File z bufora
            const pageFile = new File(
              [pdfBuffer],
              `${file.name.replace(".pdf", "")}-strona-${i + 1}.pdf`,
              { type: "application/pdf" }
            );

            // Analizuj stronę
            const result = await analyzeInvoiceFile(pageFile, pdfBuffer);
            results.push(result);
          }

          return NextResponse.json({
            success: true,
            data: results, // Zwróć tablicę wyników
          });
        }
      } catch (pdfError) {
        console.error("Błąd podczas przetwarzania PDF:", pdfError);
        // Jeśli błąd, spróbuj przeanalizować cały PDF jako jeden plik
      }
    }

    // Dla obrazów lub PDF z jedną stroną - analizuj normalnie
    console.log("Analizuję fakturę...");
    const result = await analyzeInvoiceFile(file, buffer);

    return NextResponse.json({
      success: true,
      data: [result], // Zwróć jako tablicę z jednym elementem
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
