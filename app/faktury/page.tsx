"use client";

import { useState, useEffect } from "react";
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
import { PasswordProtect } from "@/components/password-protect";

interface Invoice {
  id: string;
  amount: number;
  date: string;
  vendor: string;
  category: string;
  invoiceNumber: string;
  description: string;
  fileName: string;
  fileUrl?: string; // URL do pliku w Vercel Blob
}

export default function FakturyPage() {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
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

        // Dodaj nową fakturę do listy
        const newInvoice: Invoice = {
          id: `${Date.now()}-${i}`,
          ...result.data,
          fileName: file.name,
        };

        newInvoices.push(newInvoice);
      } catch (err) {
        errors.push(
          `${file.name}: ${err instanceof Error ? err.message : "Błąd"}`
        );
      }
    }

    // Dodaj wszystkie przeanalizowane faktury
    if (newInvoices.length > 0) {
      const updated = [...invoices, ...newInvoices];

      try {
        // Zapisz faktury w Vercel Blob przez API
        const saveResponse = await fetch("/api/invoices", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ invoices: updated }),
        });

        if (!saveResponse.ok) {
          throw new Error("Błąd podczas zapisywania faktur");
        }

        // Poczekaj chwilę na propagację zmian
        await new Promise((resolve) => setTimeout(resolve, 500));

        // Pobierz świeże dane z serwera
        await loadInvoices();
      } catch (err) {
        console.error("Błąd podczas zapisywania faktur:", err);
        setError("Nie udało się zapisać faktur");
      }
    }

    // Pokaż błędy, jeśli były
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

  // Funkcja do wczytywania faktur (możemy ją wywołać w różnych miejscach)
  const loadInvoices = async () => {
    try {
      // Dodaj cache busting
      const response = await fetch(`/api/invoices?t=${Date.now()}`, {
        cache: "no-store",
      });
      const data = await response.json();
      if (data.invoices) {
        setInvoices(data.invoices);
      }
    } catch (err) {
      console.error("Błąd podczas ładowania faktur:", err);
    }
  };

  // Wczytaj faktury z Vercel Blob przy pierwszym renderowaniu
  useEffect(() => {
    loadInvoices();
  }, []);

  // Funkcja do otwierania dialogu usuwania
  const openDeleteDialog = (invoice: Invoice) => {
    setDeleteDialog({ open: true, invoice });
  };

  // Funkcja do zamykania dialogu
  const closeDeleteDialog = () => {
    setDeleteDialog({ open: false, invoice: null });
  };

  // Funkcja do usuwania faktury
  const confirmDelete = async () => {
    if (!deleteDialog.invoice) return;

    const invoice = deleteDialog.invoice;
    setDeletingId(invoice.id);
    closeDeleteDialog();

    try {
      // Wywołaj API do usunięcia
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

      // Poczekaj chwilę na propagację zmian w Vercel Blob
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Pobierz świeże dane z serwera
      await loadInvoices();
    } catch (err) {
      setError(
        `Błąd podczas usuwania: ${
          err instanceof Error ? err.message : "Nieznany błąd"
        }`
      );
    } finally {
      setDeletingId(null);
    }
  };

  // Oblicz podsumowanie według miesięcy
  const monthlyTotals = invoices.reduce((acc, invoice) => {
    const month = invoice.date.substring(0, 7); // YYYY-MM
    acc[month] = (acc[month] || 0) + invoice.amount;
    return acc;
  }, {} as Record<string, number>);

  // Oblicz podsumowanie według kategorii
  const categoryTotals = invoices.reduce((acc, invoice) => {
    acc[invoice.category] = (acc[invoice.category] || 0) + invoice.amount;
    return acc;
  }, {} as Record<string, number>);

  const totalAmount = invoices.reduce((sum, inv) => sum + inv.amount, 0);

  return (
    <>
      <PasswordProtect>
        <div className="container mx-auto py-12 px-4 min-h-screen">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold mb-2">Zarządzanie Fakturami</h1>
            <p className="text-muted-foreground mb-8">
              Uploaduj jedną lub wiele faktur jednocześnie - AI automatycznie
              wyciągnie dane i policzy koszty
            </p>

            {/* Upload Section */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Dodaj Faktury</CardTitle>
                <CardDescription>
                  Wybierz jedno lub więcej zdjęć/PDF faktur/rachunków (możesz
                  wybrać wiele plików naraz)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <input
                      type="file"
                      accept="image/jpeg,image/jpg,image/png,image/webp,application/pdf"
                      onChange={handleFileSelect}
                      multiple
                      className="block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-md file:border-0
                    file:text-sm file:font-semibold
                    file:bg-primary file:text-primary-foreground
                    hover:file:bg-primary/90
                    file:cursor-pointer cursor-pointer"
                      disabled={isAnalyzing}
                    />
                    <Button
                      onClick={handleUpload}
                      disabled={selectedFiles.length === 0 || isAnalyzing}
                      className="whitespace-nowrap"
                    >
                      {isAnalyzing ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          {progress.current}/{progress.total}
                        </>
                      ) : (
                        <>
                          <Upload className="mr-2 h-4 w-4" />
                          Analizuj
                        </>
                      )}
                    </Button>
                  </div>
                  {selectedFiles.length > 0 && !isAnalyzing && (
                    <p className="text-sm text-muted-foreground">
                      Wybrano plików: {selectedFiles.length}
                      {selectedFiles.length <= 3 && (
                        <span className="block mt-1">
                          {selectedFiles.map((f) => f.name).join(", ")}
                        </span>
                      )}
                    </p>
                  )}
                  {isAnalyzing && (
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">
                        Analizuję fakturę {progress.current} z {progress.total}
                        ...
                      </p>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all duration-300"
                          style={{
                            width: `${
                              (progress.current / progress.total) * 100
                            }%`,
                          }}
                        />
                      </div>
                    </div>
                  )}
                  {error && (
                    <p className="text-sm text-red-500 whitespace-pre-line">
                      {error}
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Statistics */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">
                    Łączne Koszty
                  </CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {totalAmount.toLocaleString("pl-PL", {
                      style: "currency",
                      currency: "PLN",
                    })}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">
                    Liczba Faktur
                  </CardTitle>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{invoices.length}</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">
                    Miesięcy
                  </CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {Object.keys(monthlyTotals).length}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Monthly Summary */}
            {Object.keys(monthlyTotals).length > 0 && (
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Podsumowanie według miesięcy</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {Object.entries(monthlyTotals)
                      .sort(([a], [b]) => b.localeCompare(a))
                      .map(([month, total]) => (
                        <div
                          key={month}
                          className="flex justify-between items-center p-3 bg-muted/50 rounded-lg"
                        >
                          <span className="font-medium">
                            {new Date(month + "-01").toLocaleDateString(
                              "pl-PL",
                              {
                                year: "numeric",
                                month: "long",
                              }
                            )}
                          </span>
                          <span className="font-bold">
                            {total.toLocaleString("pl-PL", {
                              style: "currency",
                              currency: "PLN",
                            })}
                          </span>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Category Summary */}
            {Object.keys(categoryTotals).length > 0 && (
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Podsumowanie według kategorii</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {Object.entries(categoryTotals)
                      .sort(([, a], [, b]) => b - a)
                      .map(([category, total]) => (
                        <div
                          key={category}
                          className="flex justify-between items-center p-3 bg-muted/50 rounded-lg"
                        >
                          <span className="font-medium capitalize">
                            {category}
                          </span>
                          <span className="font-bold">
                            {total.toLocaleString("pl-PL", {
                              style: "currency",
                              currency: "PLN",
                            })}
                          </span>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Invoices List */}
            <Card>
              <CardHeader>
                <CardTitle>Lista Faktur</CardTitle>
                <CardDescription>
                  {invoices.length === 0
                    ? "Brak faktur. Dodaj pierwszą fakturę powyżej."
                    : `Wyświetlanie ${invoices.length} faktur`}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {invoices
                    .sort((a, b) => b.date.localeCompare(a.date))
                    .map((invoice) => (
                      <div
                        key={invoice.id}
                        className="p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-semibold text-lg">
                              {invoice.vendor}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {invoice.description}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-lg">
                              {invoice.amount.toLocaleString("pl-PL", {
                                style: "currency",
                                currency: "PLN",
                              })}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {new Date(invoice.date).toLocaleDateString(
                                "pl-PL"
                              )}
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-2 text-sm flex-wrap items-center justify-between">
                          <div className="flex gap-2 flex-wrap items-center">
                            <span className="px-2 py-1 bg-primary/10 text-primary rounded">
                              {invoice.category}
                            </span>
                            <span className="px-2 py-1 bg-muted rounded">
                              {invoice.invoiceNumber}
                            </span>
                            <span className="px-2 py-1 bg-muted rounded text-muted-foreground">
                              {invoice.fileName}
                            </span>
                            {invoice.fileUrl && (
                              <a
                                href={invoice.fileUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 px-2 py-1 bg-blue-50 text-blue-600 rounded hover:bg-blue-100 transition-colors"
                              >
                                <ExternalLink className="h-3 w-3" />
                                Zobacz plik
                              </a>
                            )}
                          </div>
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => openDeleteDialog(invoice)}
                            disabled={deletingId === invoice.id}
                            className="min-w-[80px] text-white"
                          >
                            {deletingId === invoice.id ? (
                              <Loader2 className="h-4 w-4 animate-spin text-white" />
                            ) : (
                              <>
                                <Trash2 className="h-4 w-4 mr-1.5" />
                                <span className="text-white">Usuń</span>
                              </>
                            )}
                          </Button>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </PasswordProtect>

      {/* Dialog potwierdzający usunięcie */}
      <Dialog open={deleteDialog.open} onOpenChange={closeDeleteDialog}>
        <DialogContent className="sm:max-w-md">
          <>
            <DialogHeader>
              <DialogTitle>Usuń fakturę</DialogTitle>
              <DialogDescription>
                Czy na pewno chcesz usunąć tę fakturę? Ta operacja jest
                nieodwracalna.
              </DialogDescription>
            </DialogHeader>

            <div className="py-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Dostawca:</span>
                <span className="font-semibold">
                  {deleteDialog.invoice?.vendor}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Kwota:</span>
                <span className="font-semibold">
                  {deleteDialog.invoice?.amount.toLocaleString("pl-PL", {
                    style: "currency",
                    currency: "PLN",
                  })}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Data:</span>
                <span className="font-medium">
                  {deleteDialog.invoice &&
                    new Date(deleteDialog.invoice.date).toLocaleDateString(
                      "pl-PL"
                    )}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Numer:</span>
                <span className="font-medium">
                  {deleteDialog.invoice?.invoiceNumber}
                </span>
              </div>
            </div>

            <DialogFooter>
              <Button variant="outline" onClick={closeDeleteDialog}>
                Anuluj
              </Button>
              <Button variant="destructive" onClick={confirmDelete}>
                <Trash2 className="h-4 w-4 mr-2" />
                Usuń fakturę
              </Button>
            </DialogFooter>
          </>
        </DialogContent>
      </Dialog>
    </>
  );
}
