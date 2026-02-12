"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { MessageCircleQuestion, PhoneCall, X } from "lucide-react";
import { usePathname } from "next/navigation";

const DISMISS_KEY = "mid_scroll_contact_cta_dismissed";

export function MidScrollContactCta() {
  const pathname = usePathname();
  const [isInViewportRange, setIsInViewportRange] = useState(false);
  const [isDismissedLocal, setIsDismissedLocal] = useState(false);

  const shouldRender = useMemo(() => {
    if (!pathname) {
      return false;
    }

    return !pathname.startsWith("/admin") && !pathname.startsWith("/api");
  }, [pathname]);

  const isDismissedInSession = useMemo(() => {
    if (!shouldRender || typeof window === "undefined") {
      return false;
    }

    try {
      return sessionStorage.getItem(DISMISS_KEY) === "1";
    } catch {
      return false;
    }
  }, [shouldRender]);

  const isDismissed = isDismissedLocal || isDismissedInSession;

  useEffect(() => {
    if (!shouldRender || isDismissed) {
      return;
    }

    const updateVisibility = () => {
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop;
      const scrollableHeight = doc.scrollHeight - window.innerHeight;

      if (scrollableHeight < 320) {
        setIsInViewportRange(false);
        return;
      }

      const progress = scrollTop / scrollableHeight;
      setIsInViewportRange(progress > 0.38 && progress < 0.92);
    };

    const frameId = window.requestAnimationFrame(updateVisibility);

    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, [shouldRender, isDismissed]);

  const dismiss = () => {
    setIsDismissedLocal(true);
    try {
      sessionStorage.setItem(DISMISS_KEY, "1");
    } catch {
      // ignore storage errors
    }
  };

  if (!shouldRender || isDismissed || !isInViewportRange) {
    return null;
  }

  return (
    <aside className="pointer-events-none fixed inset-x-0 bottom-4 z-[90] px-3 sm:bottom-5 sm:px-6">
      <div className="mx-auto flex w-full max-w-[760px] items-center gap-2 rounded-2xl border border-white/35 bg-[#800020]/95 p-2.5 text-white shadow-[0_18px_36px_-22px_rgba(0,0,0,0.55)] backdrop-blur-sm sm:gap-3 sm:p-3">
        <div className="hidden rounded-xl bg-white/12 p-2 sm:block" aria-hidden="true">
          <MessageCircleQuestion className="h-5 w-5" />
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold leading-tight sm:text-[15px]">
            Masz pytania? Skontaktuj się z nami.
          </p>
          <p className="mt-0.5 text-xs text-white/80 sm:text-[13px]">
            Szybko doradzimy i podpowiemy najlepsze rozwiązanie.
          </p>
        </div>

        <a
          href="tel:+48660441941"
          className="pointer-events-auto inline-flex shrink-0 items-center gap-1.5 rounded-xl border border-white/35 bg-white/16 px-2.5 py-2 text-xs font-semibold text-white transition hover:bg-white/24 sm:px-3 sm:text-sm"
        >
          <PhoneCall className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          Zadzwoń
        </a>

        <Link
          href="/kontakt"
          className="pointer-events-auto hidden shrink-0 rounded-xl bg-[#32CD32] px-3 py-2 text-xs font-semibold text-[#10200f] transition hover:bg-[#90EE90] sm:inline-flex sm:text-sm"
        >
          Formularz
        </Link>

        <button
          type="button"
          onClick={dismiss}
          aria-label="Zamknij podpowiedź kontaktu"
          className="pointer-events-auto inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-white/80 transition hover:bg-white/14 hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </aside>
  );
}
