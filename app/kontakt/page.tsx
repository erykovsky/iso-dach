import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactForm } from "./contact-form";
import { Building, Mail, Phone } from "lucide-react";

export default function KontaktPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-6 md:col-span-2">
            <h1 className="text-3xl font-bold text-[#800020]">
              Formularz kontaktowy
            </h1>
            <ContactForm />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Dane kontaktowe
            </h2>
            <Card>
              <CardHeader>
                <CardTitle>Bezpośredni kontakt</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Phone className="text-primary" />
                  <a
                    href="tel:+48660441941"
                    className="text-primary hover:text-secondary transition-colors"
                  >
                    +48 660 441 941
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="text-primary" />
                  <a
                    href="mailto:info@iso-dach.eu"
                    className="text-primary hover:text-secondary transition-colors"
                  >
                    info@iso-dach.eu
                  </a>
                </div>
              </CardContent>
            </Card>
            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Adres</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-2">
                  <Building className="text-primary mt-1 flex-shrink-0" />
                  <address className="not-italic">
                    ISO-DACH Dariusz Jagodziński
                    <br />
                    ul. Jana Pawła II 34
                    <br />
                    73-130 Dobrzany
                  </address>
                </div>
                <div>
                  <p>
                    <strong>NIP:</strong> 854-138-69-08
                  </p>
                  <p>
                    <strong>REGON:</strong> 811791710
                  </p>
                </div>
              </CardContent>
            </Card>
            <p className="mt-8 text-muted-foreground">
              Jeśli wolisz bezpośredni kontakt, możesz skorzystać z podanych
              powyżej danych. Odpowiemy na Twoje pytania tak szybko, jak to
              możliwe.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
