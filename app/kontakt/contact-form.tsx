"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/send-wycena", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="name">Imię i Nazwisko</Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Jan Kowalski"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Adres e-mail</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="m@przykład.pl"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone">Numer telefonu</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="123 456 789"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="address">Adres inwestycji</Label>
              <Input
                id="address"
                name="address"
                type="text"
                placeholder="ul. Przykładowa 123, 00-123 Warszawa"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="projectType">Rodzaj projektu</Label>
              <Select name="projectType" required>
                <SelectTrigger>
                  <SelectValue placeholder="Wybierz rodzaj projektu" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="termomodernizacja">
                    Termomodernizacja kompleksowa
                  </SelectItem>
                  <SelectItem value="ocieplenie-scian">
                    Ocieplenie ścian zewnętrznych
                  </SelectItem>
                  <SelectItem value="izolacja-poddasza">
                    Izolacja i ocieplenie poddasza
                  </SelectItem>
                  <SelectItem value="izolacja-stropodachu">
                    Izolacja i ocieplenie stropodachu
                  </SelectItem>
                  <SelectItem value="ocieplenie-stropow-piwnic">
                    Ocieplenie stropów piwnic i garaży
                  </SelectItem>
                  <SelectItem value="naprawa-zniszczonej-izolacji">
                    Naprawa/wymiana zniszczonej izolacji
                  </SelectItem>
                  <SelectItem value="inne">Inne usługi</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" className="mr-auto" disabled={isSubmitting}>
              {isSubmitting ? "Wysyłanie..." : "Wyślij zapytanie"}
            </Button>

            {submitStatus === "success" && (
              <p className="text-green-600">
                Dziękujemy za wysłanie formularza! Skontaktujemy się wkrótce.
              </p>
            )}
            {submitStatus === "error" && (
              <p className="text-red-600">
                Wystąpił błąd podczas wysyłania formularza. Spróbuj ponownie
                później.
              </p>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
