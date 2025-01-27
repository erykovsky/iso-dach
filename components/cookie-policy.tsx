"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export const CookiePolicy = () => {
 const [isVisible, setIsVisible] = useState(false);

 useEffect(() => {
  // Check if the user has already accepted the cookie policy
  const hasAccepted = localStorage.getItem("cookiePolicyAccepted");
  if (!hasAccepted) {
   setIsVisible(true);
  }
 }, []);

 const handleAccept = () => {
  localStorage.setItem("cookiePolicyAccepted", "true");
  setIsVisible(false);
 };

 if (!isVisible) return null;

 return (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
   <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
    <h2 className="text-2xl font-bold text-burgundy mb-4">Polityka Cookies</h2>
    <p className="text-gray-700 mb-6">
     Ta strona używa plików cookie, aby zapewnić najlepsze wrażenia podczas
     korzystania z naszej witryny. Korzystając z naszej strony, zgadzasz się na
     użycie plików cookie.
    </p>
    <div className="flex flex-col sm:flex-row justify-between items-center">
     <Link
      href="/polityka-cookies"
      className="text-burgundy hover:text-burgundy/80 transition-colors mb-4 sm:mb-0"
     >
      Dowiedz się więcej
     </Link>
     <button
      className="cursor-pointer bg-lime-500 text-white px-6 py-2 rounded-md hover:bg-lime-green/90 transition-colors"
      onClick={handleAccept}
     >
      Akceptuj
     </button>
    </div>
   </div>
  </div>
 );
};
