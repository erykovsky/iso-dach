import { put, list, del, type PutBlobResult } from "@vercel/blob";
import { NextResponse } from "next/server";

// Wyłącz cache dla tego API route
export const dynamic = "force-dynamic";
export const revalidate = 0;

// GET - pobierz wszystkie faktury
export async function GET() {
  try {
    // Pobierz listę wszystkich faktur z blob storage
    const { blobs } = await list({
      prefix: "invoices/data/",
    });

    if (blobs.length === 0) {
      return NextResponse.json({ invoices: [] });
    }

    // Pobierz zawartość pliku z fakturami
    const invoicesBlob = blobs.find(
      (b) => b.pathname === "invoices/data/invoices.json"
    );

    if (!invoicesBlob) {
      return NextResponse.json({ invoices: [] });
    }

    // Dodaj cache busting do URL
    const urlWithCacheBust = `${invoicesBlob.url}?t=${Date.now()}`;
    const response = await fetch(urlWithCacheBust, { cache: "no-store" });
    const invoices = await response.json();

    return NextResponse.json(
      { invoices },
      {
        headers: {
          "Cache-Control": "no-store, no-cache, must-revalidate",
        },
      }
    );
  } catch (error) {
    console.error("Błąd podczas pobierania faktur:", error);
    return NextResponse.json(
      { error: "Błąd podczas pobierania faktur" },
      { status: 500 }
    );
  }
}

// POST - zapisz faktury
export async function POST(req: Request) {
  try {
    const { invoices } = await req.json();

    // Zapisz faktury jako JSON w blob storage (nadpisz jeśli istnieje)
    const blob = await put(
      "invoices/data/invoices.json",
      JSON.stringify(invoices),
      {
        access: "public",
        contentType: "application/json",
        addRandomSuffix: false,
        allowOverwrite: true,
      }
    );

    return NextResponse.json({ success: true, url: blob.url });
  } catch (error) {
    console.error("Błąd podczas zapisywania faktur:", error);
    return NextResponse.json(
      { error: "Błąd podczas zapisywania faktur" },
      { status: 500 }
    );
  }
}

// DELETE - usuń fakturę
export async function DELETE(req: Request) {
  try {
    const { id, fileUrl } = await req.json();

    // Pobierz aktualne faktury
    const { blobs } = await list({
      prefix: "invoices/data/",
    });

    const invoicesBlob = blobs.find(
      (b) => b.pathname === "invoices/data/invoices.json"
    );

    if (!invoicesBlob) {
      return NextResponse.json({ success: true });
    }

    // Dodaj cache busting do URL
    const urlWithCacheBust = `${invoicesBlob.url}?t=${Date.now()}`;
    const response = await fetch(urlWithCacheBust, { cache: "no-store" });
    const invoices = await response.json();

    // Usuń fakturę o podanym ID
    const updatedInvoices = invoices.filter((inv: any) => inv.id !== id);

    // Usuń plik faktury z Blob jeśli istnieje
    if (fileUrl) {
      try {
        await del(fileUrl);
        console.log("Usunięto plik faktury:", fileUrl);
      } catch (delError) {
        console.error("Błąd podczas usuwania pliku faktury:", delError);
      }
    }

    // Zapisz zaktualizowane faktury (nadpisz stary plik)
    await put("invoices/data/invoices.json", JSON.stringify(updatedInvoices), {
      access: "public",
      contentType: "application/json",
      addRandomSuffix: false,
      allowOverwrite: true,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Błąd podczas usuwania faktury:", error);
    return NextResponse.json(
      { error: "Błąd podczas usuwania faktury" },
      { status: 500 }
    );
  }
}
