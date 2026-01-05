"use client";

import { useState } from "react";
import {
  Upload,
  Calendar,
  DollarSign,
  FileText,
  Loader2,
  ExternalLink,
  Trash2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

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

interface InvoiceManagerProps {
  initialInvoices: Invoice[];
}

export function InvoiceManager({ initialInvoices }: InvoiceManagerProps) {
  const [invoices, setInvoices] = useState<Invoice[]>(initialInvoices);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState({ current: 0, total: 0 });
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [deleteDialog, setDeleteDialog] = useState<{
    open: boolean;
    invoice: Invoice | null;
  }>({ open: false, invoice: null });

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setSelectedFiles(Array.from(files));
      setError(null);
    }
  };

  const handleUpload = async () => {
    if (selectedFiles.length === 0) {
      setError("Wybierz pliki");
      return;
    }

    setIsAnalyzing(true);
    setError(null);
    setProgress({ current: 0, total: selectedFiles.length });

    const newInvoices: Invoice[] = [];
    const errors: string[] = [];

    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i];
      setProgress({ current: i + 1, total: selectedFiles.length });

      try {
        const formData = new FormData();
        formData.append("file", file);

        const response = await fetch("/api/analyze-invoice", {
          method: "POST",
          body: formData,
        });

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.error || "Błąd podczas analizy");
        }

        // result.data jest teraz tablicą (nawet dla pojedynczych plików)
        const results = Array.isArray(result.data) ? result.data : [result.data];

        // Dla każdego wyniku utwórz osobny invoice
        results.forEach((invoiceData: any, resultIndex: number) => {
          const newInvoice: Invoice = {
            id: `${Date.now()}-${i}-${resultIndex}`,
            ...invoiceData.data,
            fileName: results.length > 1 
              ? `${file.name.replace(".pdf", "")}-strona-${resultIndex + 1}.pdf`
              : file.name,
            fileUrl: invoiceData.fileUrl,
          };

          newInvoices.push(newInvoice);
        });
      } catch (err) {
        errors.push(
          `${file.name}: ${err instanceof Error ? err.message : "Błąd"}`
        );
      }
    }

    if (newInvoices.length > 0) {
      const updated = [...invoices, ...newInvoices];
      setInvoices(updated);

      // Zapisz w tle do Vercel Blob
      fetch("/api/invoices", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ invoices: updated }),
      })
        .then((res) => {
          if (res.ok) {
            // Odśwież stronę po zapisie, aby załadować świeże dane z Server Component
            setTimeout(() => window.location.reload(), 1000);
          }
        })
        .catch((err) => {
          console.error("Błąd podczas zapisywania faktur:", err);
        });
    }

    if (errors.length > 0) {
      setError(
        `Przeanalizowano ${newInvoices.length}/${
          selectedFiles.length
        } faktur. Błędy:\n${errors.join("\n")}`
      );
    }

    setSelectedFiles([]);
    setIsAnalyzing(false);
    setProgress({ current: 0, total: 0 });
  };

  const openDeleteDialog = (invoice: Invoice) => {
    setDeleteDialog({ open: true, invoice });
  };

  const closeDeleteDialog = () => {
    setDeleteDialog({ open: false, invoice: null });
  };

  const confirmDelete = async () => {
    if (!deleteDialog.invoice) return;

    const invoice = deleteDialog.invoice;
    setDeletingId(invoice.id);
    closeDeleteDialog();

    // Optymistyczny update
    const updatedInvoices = invoices.filter((inv) => inv.id !== invoice.id);
    setInvoices(updatedInvoices);

    try {
      const response = await fetch("/api/invoices", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: invoice.id,
          fileUrl: invoice.fileUrl,
        }),
      });

      if (!response.ok) {
        throw new Error("Błąd podczas usuwania faktury");
      }
    } catch (err) {
      console.error("Błąd podczas usuwania faktury:", err);
      setError(
        `Błąd podczas usuwania: ${
          err instanceof Error ? err.message : "Nieznany błąd"
        }`
      );
      // Przywróć fakturę w przypadku błędu
      setInvoices([...updatedInvoices, invoice]);
    } finally {
      setDeletingId(null);
    }
  };

  // Statystyki
  const totalAmount = invoices.reduce((sum, inv) => sum + inv.amount, 0);
  const currentMonth = new Date().toISOString().slice(0, 7);
  const monthlyAmount = invoices
    .filter((inv) => inv.date.startsWith(currentMonth))
    .reduce((sum, inv) => sum + inv.amount, 0);

  const categories = invoices.reduce((acc, inv) => {
    acc[inv.category] = (acc[inv.category] || 0) + inv.amount;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="space-y-8">
      {/* Upload Section */}
      <Card>
        <CardHeader>
          <CardTitle>Dodaj faktury</CardTitle>
          <CardDescription>
            Prześlij faktury w formacie PDF, JPG, PNG lub WEBP. Możesz wybrać
            wiele plików naraz.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png,.webp"
                onChange={handleFileSelect}
                className="flex-1"
                disabled={isAnalyzing}
                multiple
              />
              <Button
                onClick={handleUpload}
                disabled={isAnalyzing || selectedFiles.length === 0}
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analizuję...
                  </>
                ) : (
                  <>
                    <Upload className="mr-2 h-4 w-4" />
                    Dodaj ({selectedFiles.length})
                  </>
                )}
              </Button>
            </div>

            {isAnalyzing && progress.total > 0 && (
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Przetwarzanie...</span>
                  <span>
                    {progress.current} / {progress.total}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full transition-all"
                    style={{
                      width: `${(progress.current / progress.total) * 100}%`,
                    }}
                  />
                </div>
              </div>
            )}

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded">
                <pre className="whitespace-pre-wrap text-sm">{error}</pre>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">
              Wszystkie faktury
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold">
                {totalAmount.toLocaleString("pl-PL", {
                  style: "currency",
                  currency: "PLN",
                })}
              </span>
              <span className="text-sm text-gray-500">
                ({invoices.length} szt.)
              </span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">
              Bieżący miesiąc
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {monthlyAmount.toLocaleString("pl-PL", {
                style: "currency",
                currency: "PLN",
              })}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">
              Kategorie
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              {Object.entries(categories)
                .sort(([, a], [, b]) => b - a)
                .slice(0, 3)
                .map(([category, amount]) => (
                  <div key={category} className="flex justify-between text-sm">
                    <span className="capitalize">{category}</span>
                    <span className="font-medium">
                      {amount.toLocaleString("pl-PL", {
                        style: "currency",
                        currency: "PLN",
                      })}
                    </span>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Invoices List */}
      <Card>
        <CardHeader>
          <CardTitle>Lista faktur</CardTitle>
          <CardDescription>
            Wszystkie przesłane i przeanalizowane faktury
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {invoices.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                <FileText className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                <p>Brak faktur. Dodaj pierwszą fakturę powyżej.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {invoices
                  .sort(
                    (a, b) =>
                      new Date(b.date).getTime() - new Date(a.date).getTime()
                  )
                  .map((invoice) => (
                    <div
                      key={invoice.id}
                      className="border rounded-lg p-4 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start gap-3 mb-2">
                            <FileText className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                            <div className="flex-1 min-w-0">
                              <h3 className="font-semibold text-lg">
                                {invoice.vendor}
                              </h3>
                              <p className="text-sm text-gray-600 truncate">
                                {invoice.description}
                              </p>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                            <div className="flex items-center gap-2">
                              <DollarSign className="h-4 w-4 text-gray-400" />
                              <span className="font-medium">
                                {invoice.amount.toLocaleString("pl-PL", {
                                  style: "currency",
                                  currency: "PLN",
                                })}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4 text-gray-400" />
                              <span>
                                {new Date(invoice.date).toLocaleDateString(
                                  "pl-PL"
                                )}
                              </span>
                            </div>
                            <div className="col-span-2 md:col-span-1">
                              <span className="inline-block px-2 py-1 bg-primary/10 text-primary rounded text-xs capitalize">
                                {invoice.category}
                              </span>
                            </div>
                            <div className="text-gray-500 text-xs">
                              {invoice.invoiceNumber}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          {invoice.fileUrl && (
                            <Button
                              variant="outline"
                              size="sm"
                              asChild
                              className="min-w-[100px]"
                            >
                              <a
                                href={invoice.fileUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <ExternalLink className="mr-1.5 h-4 w-4" />
                                Zobacz
                              </a>
                            </Button>
                          )}
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => openDeleteDialog(invoice)}
                            disabled={deletingId === invoice.id}
                            className="min-w-[80px] text-white"
                          >
                            {deletingId === invoice.id ? (
                              <Loader2 className="mr-1.5 h-4 w-4 animate-spin" />
                            ) : (
                              <Trash2 className="mr-1.5 h-4 w-4" />
                            )}
                            <span>Usuń</span>
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Delete Dialog */}
      <Dialog open={deleteDialog.open} onOpenChange={closeDeleteDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Usuń fakturę</DialogTitle>
            <DialogDescription>
              Czy na pewno chcesz usunąć tę fakturę? Ta operacja jest
              nieodwracalna.
            </DialogDescription>
          </DialogHeader>

          {deleteDialog.invoice && (
            <div className="py-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Dostawca:</span>
                <span className="font-semibold">
                  {deleteDialog.invoice.vendor}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Kwota:</span>
                <span className="font-semibold">
                  {deleteDialog.invoice.amount.toLocaleString("pl-PL", {
                    style: "currency",
                    currency: "PLN",
                  })}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Data:</span>
                <span className="font-medium">
                  {new Date(deleteDialog.invoice.date).toLocaleDateString(
                    "pl-PL"
                  )}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Numer:</span>
                <span className="font-medium">
                  {deleteDialog.invoice.invoiceNumber}
                </span>
              </div>
            </div>
          )}

          <DialogFooter>
            <Button variant="outline" onClick={closeDeleteDialog}>
              Anuluj
            </Button>
            <Button variant="destructive" onClick={confirmDelete}>
              <Trash2 className="h-4 w-4 mr-2" />
              Usuń fakturę
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
