"use client";

import { useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import { XIcon } from "lucide-react";

export function Modal({ children }: { children: React.ReactNode }) {
 const router = useRouter();
 const closeModal = useCallback(() => {
  if (window.history.length > 1) {
   router.back();
   return;
  }

  router.push("/galeria");
 }, [router]);

 useEffect(() => {
  const handleKeyDown = (event: KeyboardEvent) => {
   if (event.key === "Escape") {
    closeModal();
   }
  };

  window.addEventListener("keydown", handleKeyDown);
  return () => window.removeEventListener("keydown", handleKeyDown);
 }, [closeModal]);

 return (
  <section
   className="fixed inset-0 z-[120] bg-black/72 backdrop-blur-[3px]"
   onClick={closeModal}
   aria-label="Podgląd zdjęcia"
  >

   <div className="relative z-10 flex min-h-full items-center justify-center p-3 sm:p-5">
    <div
     className="relative w-full max-w-5xl overflow-hidden rounded-2xl border border-primary/18 bg-white/95 shadow-[0_36px_90px_-44px_rgba(75,0,18,0.92),0_24px_60px_-40px_rgba(0,0,0,0.75)] backdrop-blur-xl"
     onClick={(event) => event.stopPropagation()}
    >
     <button
      type="button"
      onClick={closeModal}
      className="brand-focus absolute right-3 top-3 z-20 inline-flex h-9 w-9 items-center justify-center rounded-full border border-primary/20 bg-white/92 text-primary/80 transition hover:bg-white hover:text-primary sm:h-10 sm:w-10"
      aria-label="Zamknij"
     >
      <XIcon className="h-5 w-5" />
     </button>

     {children}
    </div>
   </div>
  </section>
 );
}
