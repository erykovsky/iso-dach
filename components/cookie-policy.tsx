"use client";

import Link from "next/link";
import { Settings2, ShieldCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  getStoredCookieConsent,
  saveCookieConsent,
  shouldShowCookieBanner,
} from "@/lib/cookie-consent";

export const CookiePolicy = () => {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);
  const [marketingEnabled, setMarketingEnabled] = useState(false);

  useEffect(() => {
    setMounted(true);

    const consent = getStoredCookieConsent();
    if (consent) {
      setAnalyticsEnabled(consent.analytics);
      setMarketingEnabled(consent.marketing);
    }

    setIsOpen(shouldShowCookieBanner());
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const previousOverflow = document.body.style.overflow;
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = previousOverflow;
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, mounted]);

  const closeBanner = () => setIsOpen(false);

  const acceptAll = () => {
    saveCookieConsent({ analytics: true, marketing: true });
    closeBanner();
  };

  const rejectOptional = () => {
    saveCookieConsent({ analytics: false, marketing: false });
    closeBanner();
  };

  const savePreferences = () => {
    saveCookieConsent({
      analytics: analyticsEnabled,
      marketing: marketingEnabled,
    });
    closeBanner();
  };

  if (!mounted || !isOpen) return null;

  return (
    <section className="fixed inset-0 z-[120]">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
      <div className="relative flex min-h-full items-center justify-center p-4 sm:p-6">
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-consent-title"
          className="w-full max-w-2xl rounded-2xl border border-primary/15 bg-white p-5 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.8)] sm:p-6"
        >
          <div className="flex items-start gap-3">
            <div className="mt-0.5 rounded-xl bg-primary/10 p-2 text-primary">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div className="space-y-2">
              <h2 id="cookie-consent-title" className="text-lg font-semibold text-primary">
                Dbamy o Twoją prywatność
              </h2>
              <p className="text-sm text-muted-foreground">
                W naszym serwisie używamy plików cookies (tzw. ciasteczek),
                które zapisują się w przeglądarce internetowej Twojego
                urządzenia.
              </p>
              <p className="text-sm text-muted-foreground">
                Dzięki nim zapewniamy prawidłowe działanie strony, możemy
                analizować zachowanie użytkowników i lepiej dopasowywać treści.
                Możesz zarządzać cookies, przechodząc do ustawień. Zgodę możesz
                wycofać w dowolnym momencie.
              </p>
              <Link
                href="/polityka-prywatnosci"
                className="inline-flex text-sm font-medium text-primary underline-offset-4 hover:underline"
              >
                Więcej informacji w Polityce Cookies
              </Link>
            </div>
          </div>

          {showSettings && (
            <div className="mt-4 space-y-2 rounded-xl border border-primary/10 bg-primary/5 p-3">
              <div className="flex items-start justify-between gap-3 rounded-lg bg-white/70 px-3 py-2.5">
                <div>
                  <p className="text-sm font-semibold text-primary">Niezbędne</p>
                  <p className="text-xs text-muted-foreground">
                    Konieczne do poprawnego działania strony.
                  </p>
                </div>
                <span className="rounded-full border border-primary/20 bg-primary/10 px-2 py-1 text-xs font-semibold text-primary">
                  Zawsze aktywne
                </span>
              </div>

              <label className="flex items-start justify-between gap-3 rounded-lg bg-white/70 px-3 py-2.5">
                <div>
                  <p className="text-sm font-semibold text-primary">
                    Analityczne
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Pomagają nam mierzyć ruch i poprawiać działanie strony.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={analyticsEnabled}
                  onChange={(event) => setAnalyticsEnabled(event.target.checked)}
                  className="mt-1 h-4 w-4 accent-primary"
                />
              </label>

              <label className="flex items-start justify-between gap-3 rounded-lg bg-white/70 px-3 py-2.5">
                <div>
                  <p className="text-sm font-semibold text-primary">
                    Marketingowe
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Umożliwiają personalizację treści i reklam.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={marketingEnabled}
                  onChange={(event) => setMarketingEnabled(event.target.checked)}
                  className="mt-1 h-4 w-4 accent-primary"
                />
              </label>
            </div>
          )}

        <div className="mt-4 flex flex-wrap justify-end gap-2">
          {showSettings ? (
            <>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => setShowSettings(false)}
              >
                Powrót
              </Button>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={rejectOptional}
              >
                Odrzuć opcjonalne
              </Button>
              <Button type="button" size="sm" onClick={savePreferences}>
                Zapisz ustawienia
              </Button>
            </>
          ) : (
            <>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => setShowSettings(true)}
              >
                <Settings2 className="h-4 w-4" />
                Ustawienia
              </Button>
              <Button type="button" size="sm" onClick={acceptAll}>
                Akceptuj wszystkie
              </Button>
            </>
          )}
        </div>
      </div>
      </div>
    </section>
  );
};
