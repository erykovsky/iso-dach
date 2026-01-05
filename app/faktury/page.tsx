import type { Metadata } from "next";
import { list } from "@vercel/blob";
import { PasswordProtect } from "@/components/password-protect";
import { InvoiceManager } from "./invoice-manager";

export const metadata: Metadata = {
  title: "Faktury | ISO-DACH",
  description: "Zarządzanie fakturami i kosztami firmowymi",
};

// Wyłącz cache dla tej strony
export const dynamic = "force-dynamic";
export const revalidate = 0;

interface Invoice {
  id: string;
  amount: number;
  date: string;
  vendor: string;
  category: string;
  invoiceNumber: string;
  description: string;
  fileName: string;
  fileUrl?: string;
}

async function getInvoices(): Promise<Invoice[]> {
  try {
    // Pobierz listę plików z Vercel Blob
    const { blobs } = await list({
      prefix: "invoices/data/",
    });

    // Znajdź plik z fakturami
    const invoicesBlob = blobs.find(
      (b) => b.pathname === "invoices/data/invoices.json"
    );

    if (!invoicesBlob) {
      return [];
    }

    // Pobierz zawartość pliku
    const response = await fetch(invoicesBlob.url, {
      cache: "no-store",
    });

    if (!response.ok) {
      console.error("Błąd podczas pobierania faktur:", response.statusText);
      return [];
    }

    const invoices = await response.json();
    return Array.isArray(invoices) ? invoices : [];
  } catch (error) {
    console.error("Błąd podczas ładowania faktur:", error);
    return [];
  }
}

export default async function FakturyPage() {
  const invoices = await getInvoices();

  return (
    <PasswordProtect>
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Zarządzanie Fakturami
            </h1>
            <p className="text-gray-600 mt-2">
              Dodawaj faktury i śledź koszty firmowe w jednym miejscu
            </p>
          </div>

          <InvoiceManager initialInvoices={invoices} />
        </div>
      </div>
    </PasswordProtect>
  );
}
