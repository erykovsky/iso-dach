"use client";

import { useState, useEffect, useLayoutEffect } from "react";
import { createPortal } from "react-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const CookiePolicy = () => {
 const [isOpen, setIsOpen] = useState(false);
 const [currentDate, setCurrentDate] = useState<string | null>(null);
 const [mounted, setMounted] = useState(false);

 useLayoutEffect(() => {
  setCurrentDate(new Date().toLocaleDateString());
 }, []);

 useEffect(() => {
  setMounted(true);
  const hasAccepted = localStorage.getItem("cookiePolicyAccepted");
  if (!hasAccepted) {
   setIsOpen(true);
  }
  return () => setMounted(false);
 }, []);

 const handleAccept = () => {
  localStorage.setItem("cookiePolicyAccepted", "true");
  setIsOpen(false);
 };

 if (!mounted || !isOpen) return null;

 return createPortal(
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
   <div
    className="relative w-full max-w-[600px] max-h-[80vh] overflow-y-auto rounded-lg bg-background p-6 shadow-lg"
    onClick={(e) => e.stopPropagation()}
   >
    {/* Header */}
    <div className="mb-6">
     <h2 className="text-lg font-semibold leading-none tracking-tight">
      Polityka Cookies
     </h2>
     <p className="text-sm text-muted-foreground mt-2">
      Ta strona używa plików cookie, aby zapewnić najlepsze wrażenia podczas
      korzystania z naszej witryny. Aby kontynuować korzystanie ze strony,
      musisz zaakceptować naszą politykę cookies.
     </p>
    </div>

    {/* Content */}
    <Tabs defaultValue="overview" className="w-full">
     <TabsList className="grid w-full grid-cols-3">
      <TabsTrigger value="overview">Przegląd</TabsTrigger>
      <TabsTrigger value="details">Szczegóły</TabsTrigger>
      <TabsTrigger value="manage">Zarządzanie</TabsTrigger>
     </TabsList>

     <TabsContent value="overview" className="space-y-4 mt-4">
      <p>
       Pliki cookies (tzw. "ciasteczka") stanowią dane informatyczne, w
       szczególności pliki tekstowe, które przechowywane są w urządzeniu
       końcowym Użytkownika Serwisu i przeznaczone są do korzystania ze stron
       internetowych Serwisu.
      </p>
      <p>
       Korzystając z naszej strony, zgadzasz się na użycie plików cookie zgodnie
       z aktualnymi ustawieniami przeglądarki.
      </p>
     </TabsContent>

     <TabsContent value="details" className="space-y-4 mt-4">
      <h3 className="text-lg font-semibold">
       Do czego używamy plików cookies?
      </h3>
      <p>Pliki cookies wykorzystywane są w celu:</p>
      <ul className="list-disc list-inside space-y-2">
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
        Użytkownik nie musi na każdej podstronie Serwisu ponownie wpisywać
        loginu i hasła
       </li>
      </ul>
     </TabsContent>

     <TabsContent value="manage" className="space-y-4 mt-4">
      <h3 className="text-lg font-semibold">Jak zarządzać plikami cookies?</h3>
      <p>
       W wielu przypadkach oprogramowanie służące do przeglądania stron
       internetowych (przeglądarka internetowa) domyślnie dopuszcza
       przechowywanie plików cookies w urządzeniu końcowym Użytkownika.
       Użytkownicy Serwisu mogą dokonać w każdym czasie zmiany ustawień
       dotyczących plików cookies. Ustawienia te mogą zostać zmienione w
       szczególności w taki sposób, aby blokować automatyczną obsługę plików
       cookies w ustawieniach przeglądarki internetowej bądź informować o ich
       każdorazowym zamieszczeniu w urządzeniu Użytkownika Serwisu.
      </p>
      <p>
       Szczegółowe informacje o możliwości i sposobach obsługi plików cookies
       dostępne są w ustawieniach oprogramowania (przeglądarki internetowej).
      </p>
      <p className="text-sm text-muted-foreground mt-4">
       Ostatnia aktualizacja: {currentDate}
      </p>
     </TabsContent>
    </Tabs>

    {/* Footer */}
    <div className="mt-6 flex justify-end">
     <Button onClick={handleAccept} className="w-full">
      Akceptuj wszystkie cookies
     </Button>
    </div>
   </div>
  </div>,
  document.body
 );
};
