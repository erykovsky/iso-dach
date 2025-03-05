"use client";

import { useState, useLayoutEffect } from "react";

export function PrivacyPolicy() {
 const [currentDate, setCurrentDate] = useState<string | null>(null);

 useLayoutEffect(() => {
  setCurrentDate(new Date().toLocaleDateString());
 }, []);

 return (
  <div className="min-h-screen bg-gray-100 py-12">
   <div className="container mx-auto px-4">
    <h1 className="text-4xl font-bold text-burgundy mb-8">
     Polityka Prywatności
    </h1>
    <div className="bg-white rounded-lg shadow-md p-8">
     <section className="mb-8">
      <h2 className="text-2xl font-semibold text-burgundy mb-4">
       1. Informacje ogólne
      </h2>
      <p className="mb-4">
       Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony
       danych osobowych przekazanych przez Użytkowników w związku z korzystaniem
       ze strony internetowej ISO-DACH.
      </p>
      <p className="mb-4">
       Administratorem danych osobowych zawartych na stronie jest ISO-DACH
       Dariusz Jagodziński z siedzibą przy ul. Jana Pawła II 34, 73-130
       Dobrzany, NIP: 854-138-69-08, REGON: 811791710.
      </p>
      <p>
       Administrator dokłada szczególnej staranności w celu ochrony interesów
       osób, których dane dotyczą, a w szczególności zapewnia, że zbierane przez
       niego dane są przetwarzane zgodnie z prawem, zbierane dla oznaczonych,
       zgodnych z prawem celów i niepoddawane dalszemu przetwarzaniu niezgodnemu
       z tymi celami.
      </p>
     </section>

     <section className="mb-8">
      <h2 className="text-2xl font-semibold text-burgundy mb-4">
       2. Rodzaj przetwarzanych danych
      </h2>
      <p className="mb-4">
       Administrator może przetwarzać następujące dane osobowe Użytkowników:
      </p>
      <ul className="list-disc list-inside mb-4">
       <li>Imię i nazwisko</li>
       <li>Adres e-mail</li>
       <li>Numer telefonu</li>
       <li>Adres (w przypadku zamówienia usługi)</li>
       <li>
        Inne dane podane dobrowolnie przez Użytkownika w formularzu kontaktowym
       </li>
      </ul>
      <p>
       Dodatkowo, podczas wizyty na naszej stronie internetowej, automatycznie
       zbierane są dane dotyczące wizyty Użytkownika, np. adres IP, nazwa
       domeny, typ przeglądarki, typ systemu operacyjnego, itp.
      </p>
     </section>

     <section className="mb-8">
      <h2 className="text-2xl font-semibold text-burgundy mb-4">
       3. Cel przetwarzania danych
      </h2>
      <p className="mb-4">Dane osobowe Użytkowników przetwarzane są w celu:</p>
      <ul className="list-disc list-inside mb-4">
       <li>Realizacji usług świadczonych przez Administratora</li>
       <li>Komunikacji z Użytkownikiem</li>
       <li>Przesyłania informacji handlowych (tylko za zgodą Użytkownika)</li>
       <li>Prowadzenia działań marketingowych</li>
       <li>Dostosowania zawartości strony do preferencji Użytkownika</li>
       <li>Zapewnienia bezpieczeństwa i niezawodności działania strony</li>
      </ul>
     </section>

     <section className="mb-8">
      <h2 className="text-2xl font-semibold text-burgundy mb-4">
       4. Podstawa prawna przetwarzania danych
      </h2>
      <p className="mb-4">
       Przetwarzanie danych osobowych odbywa się na podstawie:
      </p>
      <ul className="list-disc list-inside mb-4">
       <li>
        Zgody Użytkownika (art. 6 ust. 1 lit. a RODO) - np. w przypadku
        zapisania się do newslettera lub wypełnienia formularza kontaktowego
       </li>
       <li>
        Niezbędności do wykonania umowy lub podjęcia działań przed jej zawarciem
        (art. 6 ust. 1 lit. b RODO) - np. w przypadku zamówienia usługi
       </li>
       <li>
        Prawnie uzasadnionego interesu Administratora (art. 6 ust. 1 lit. f
        RODO) - np. w przypadku marketingu bezpośredniego własnych produktów lub
        usług
       </li>
      </ul>
     </section>

     <section className="mb-8">
      <h2 className="text-2xl font-semibold text-burgundy mb-4">
       5. Okres przechowywania danych
      </h2>
      <p className="mb-4">
       Dane osobowe Użytkowników przechowywane są przez okres niezbędny do
       realizacji celów, dla których zostały zebrane, a po tym czasie przez
       okres wymagany przez przepisy prawa lub do czasu przedawnienia roszczeń.
      </p>
      <p>
       W przypadku danych przetwarzanych na podstawie zgody Użytkownika, dane te
       są przechowywane do momentu wycofania zgody.
      </p>
     </section>

     <section className="mb-8">
      <h2 className="text-2xl font-semibold text-burgundy mb-4">
       6. Prawa Użytkowników
      </h2>
      <p className="mb-4">
       Użytkownikom przysługują następujące prawa związane z przetwarzaniem
       danych osobowych:
      </p>
      <ul className="list-disc list-inside mb-4">
       <li>Prawo dostępu do swoich danych</li>
       <li>Prawo do sprostowania (poprawiania) swoich danych</li>
       <li>Prawo do usunięcia danych</li>
       <li>Prawo do ograniczenia przetwarzania danych</li>
       <li>Prawo do przenoszenia danych</li>
       <li>Prawo do wniesienia sprzeciwu wobec przetwarzania danych</li>
       <li>
        Prawo do cofnięcia zgody w dowolnym momencie (bez wpływu na zgodność z
        prawem przetwarzania, którego dokonano na podstawie zgody przed jej
        cofnięciem)
       </li>
       <li>
        Prawo do wniesienia skargi do organu nadzorczego (Prezes Urzędu Ochrony
        Danych Osobowych)
       </li>
      </ul>
      <p>
       W celu realizacji powyższych praw należy skontaktować się z
       Administratorem za pośrednictwem adresu e-mail: info@iso-dach.eu lub
       pisemnie na adres siedziby Administratora.
      </p>
     </section>

     <section className="mb-8">
      <h2 className="text-2xl font-semibold text-burgundy mb-4">
       7. Odbiorcy danych
      </h2>
      <p className="mb-4">
       Dane osobowe Użytkowników mogą być przekazywane podmiotom przetwarzającym
       dane osobowe na zlecenie Administratora, m.in. dostawcom usług IT,
       agencjom marketingowym - przy czym takie podmioty przetwarzają dane na
       podstawie umowy z Administratorem i wyłącznie zgodnie z jego poleceniami.
      </p>
      <p>
       Dane osobowe Użytkowników nie będą przekazywane do państw trzecich, tj.
       poza Europejski Obszar Gospodarczy.
      </p>
     </section>

     <section className="mb-8">
      <h2 className="text-2xl font-semibold text-burgundy mb-4">
       8. Pliki cookies
      </h2>
      <p className="mb-4">
       Strona internetowa ISO-DACH wykorzystuje pliki cookies (tzw.
       "ciasteczka"), które stanowią dane informatyczne, w szczególności pliki
       tekstowe, które przechowywane są w urządzeniu końcowym Użytkownika.
      </p>
      <p className="mb-4">Pliki cookies wykorzystywane są w celu:</p>
      <ul className="list-disc list-inside mb-4">
       <li>
        dostosowania zawartości stron internetowych do preferencji Użytkownika
        oraz optymalizacji korzystania ze stron internetowych
       </li>
       <li>
        tworzenia statystyk, które pomagają zrozumieć, w jaki sposób Użytkownicy
        korzystają ze stron internetowych, co umożliwia ulepszanie ich struktury
        i zawartości
       </li>
       <li>
        utrzymania sesji Użytkownika (po zalogowaniu), dzięki której Użytkownik
        nie musi na każdej podstronie ponownie wpisywać loginu i hasła
       </li>
      </ul>
      <p className="mb-4">
       Użytkownik może w każdej chwili wyłączyć w swojej przeglądarce opcję
       przyjmowania cookies, jednak należy mieć na uwadze, że może to spowodować
       utrudnienia w korzystaniu ze strony.
      </p>
     </section>

     <section className="mb-8">
      <h2 className="text-2xl font-semibold text-burgundy mb-4">
       9. Bezpieczeństwo danych
      </h2>
      <p className="mb-4">
       Administrator stosuje odpowiednie środki techniczne i organizacyjne
       zapewniające bezpieczeństwo danych osobowych, w tym ochronę przed
       niedozwolonym lub niezgodnym z prawem przetwarzaniem oraz przypadkową
       utratą, zniszczeniem lub uszkodzeniem.
      </p>
     </section>

     <section className="mb-8">
      <h2 className="text-2xl font-semibold text-burgundy mb-4">
       10. Zmiany Polityki Prywatności
      </h2>
      <p className="mb-4">
       Administrator zastrzega sobie prawo do zmiany niniejszej Polityki
       Prywatności. Zmiany będą publikowane na tej stronie. Data ostatniej
       modyfikacji będzie zawsze widoczna na dole strony.
      </p>
     </section>

     <section>
      <h2 className="text-2xl font-semibold text-burgundy mb-4">11. Kontakt</h2>
      <p className="mb-4">
       W przypadku jakichkolwiek pytań lub wątpliwości dotyczących Polityki
       Prywatności lub przetwarzania danych osobowych, prosimy o kontakt:
      </p>
      <address className="not-italic">
       <p>ISO-DACH Dariusz Jagodziński</p>
       <p>ul. Jana Pawła II 34</p>
       <p>73-130 Dobrzany</p>
       <p>E-mail: info@iso-dach.eu</p>
       <p>Tel: +48 660 441 941</p>
      </address>
     </section>

     {currentDate && (
      <p className="mt-8 text-sm text-gray-600">
       Ostatnia aktualizacja: {currentDate}
      </p>
     )}
    </div>
   </div>
  </div>
 );
}
