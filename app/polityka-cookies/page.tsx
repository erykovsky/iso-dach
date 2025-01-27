import type { Metadata } from "next";

export const metadata: Metadata = {
 title: "Polityka Cookies | ISO-DACH",
 description: "Informacje o wykorzystaniu plików cookies na stronie ISO-DACH",
};

export default function CookiePolicyPage() {
 return (
  <div className="min-h-screen bg-gray-100 py-12">
   <div className="container mx-auto px-4">
    <h1 className="text-4xl font-bold text-burgundy mb-8">Polityka Cookies</h1>
    <div className="bg-white rounded-lg shadow-md p-8">
     <h2 className="text-2xl font-semibold text-burgundy mb-4">
      Co to są pliki cookies?
     </h2>
     <p className="mb-4">
      Pliki cookies (tzw. "ciasteczka") stanowią dane informatyczne, w
      szczególności pliki tekstowe, które przechowywane są w urządzeniu końcowym
      Użytkownika Serwisu i przeznaczone są do korzystania ze stron
      internetowych Serwisu. Cookies zazwyczaj zawierają nazwę strony
      internetowej, z której pochodzą, czas przechowywania ich na urządzeniu
      końcowym oraz unikalny numer.
     </p>

     <h2 className="text-2xl font-semibold text-burgundy mb-4 mt-8">
      Do czego używamy plików cookies?
     </h2>
     <p className="mb-4">Pliki cookies wykorzystywane są w celu:</p>
     <ul className="list-disc list-inside mb-4">
      <li>
       dostosowania zawartości stron internetowych Serwisu do preferencji
       Użytkownika oraz optymalizacji korzystania ze stron internetowych
      </li>
      <li>
       tworzenia statystyk, które pomagają zrozumieć, w jaki sposób Użytkownicy
       Serwisu korzystają ze stron internetowych, co umożliwia ulepszanie ich
       struktury i zawartości
      </li>
      <li>
       utrzymanie sesji Użytkownika Serwisu (po zalogowaniu), dzięki której
       Użytkownik nie musi na każdej podstronie Serwisu ponownie wpisywać loginu
       i hasła
      </li>
     </ul>

     <h2 className="text-2xl font-semibold text-burgundy mb-4 mt-8">
      Jak zarządzać plikami cookies?
     </h2>
     <p className="mb-4">
      W wielu przypadkach oprogramowanie służące do przeglądania stron
      internetowych (przeglądarka internetowa) domyślnie dopuszcza
      przechowywanie plików cookies w urządzeniu końcowym Użytkownika.
      Użytkownicy Serwisu mogą dokonać w każdym czasie zmiany ustawień
      dotyczących plików cookies. Ustawienia te mogą zostać zmienione w
      szczególności w taki sposób, aby blokować automatyczną obsługę plików
      cookies w ustawieniach przeglądarki internetowej bądź informować o ich
      każdorazowym zamieszczeniu w urządzeniu Użytkownika Serwisu. Szczegółowe
      informacje o możliwości i sposobach obsługi plików cookies dostępne są w
      ustawieniach oprogramowania (przeglądarki internetowej).
     </p>

     {/* <p className="mt-8 text-sm text-gray-600">
      Ostatnia aktualizacja: {new Date().toLocaleDateString()}
     </p> */}
    </div>
   </div>
  </div>
 );
}
