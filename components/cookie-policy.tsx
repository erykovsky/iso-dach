"use client";

import Link from "next/link";
import { Settings2, ShieldCheck } from "lucide-react";
import { useEffect, useState, useSyncExternalStore } from "react";
import { Button } from "@/components/ui/button";
import {
  getStoredCookieConsent,
  isCookieConsentCurrent,
  saveCookieConsent,
} from "@/lib/cookie-consent";

export const CookiePolicy = () => {
  const isHydrated = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  const [isDismissed, setIsDismissed] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);
  const [marketingEnabled, setMarketingEnabled] = useState(false);

  const currentConsent = isHydrated ? getStoredCookieConsent() : null;
  const isOpen =
    isHydrated && !isDismissed && !isCookieConsentCurrent(currentConsent);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const closeBanner = () => {
    setShowSettings(false);
    setIsDismissed(true);
  };

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

  const openSettings = () => {
    const consent = getStoredCookieConsent();
    setAnalyticsEnabled(Boolean(consent?.analytics));
    setMarketingEnabled(Boolean(consent?.marketing));
    setShowSettings(true);
  };

  if (!isOpen) return null;

  return (
    <section className="fixed inset-0 z-120">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
      <div className="relative flex min-h-full items-end justify-center p-2.5 sm:items-center sm:p-6">
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-consent-title"
          className="w-full max-w-2xl max-h-[calc(100dvh-0.75rem)] overflow-y-auto rounded-2xl border border-primary/15 bg-white p-4 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.8)] sm:max-h-[calc(100dvh-3rem)] sm:p-6"
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
            <div className="mt-4 space-y-2 rounded-xl border border-primary/10 bg-primary/5 p-2.5 sm:p-3">
              <div className="flex items-start justify-between gap-2 rounded-lg bg-white/70 px-2.5 py-2 sm:gap-3 sm:px-3 sm:py-2.5">
                <div>
                  <p className="text-sm font-semibold text-primary">Niezbędne</p>
                  <p className="text-xs text-muted-foreground">
                    Konieczne do poprawnego działania strony.
                  </p>
                </div>
                <span className="shrink-0 self-start rounded-full border border-primary/20 bg-primary/10 px-2 py-1 text-[11px] leading-none font-semibold text-primary sm:self-center sm:text-xs">
                  Zawsze aktywne
                </span>
              </div>

              <label className="flex items-start justify-between gap-2 rounded-lg bg-white/70 px-2.5 py-2 sm:gap-3 sm:px-3 sm:py-2.5">
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

              <label className="flex items-start justify-between gap-2 rounded-lg bg-white/70 px-2.5 py-2 sm:gap-3 sm:px-3 sm:py-2.5">
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

        <div className="mt-4">
          {showSettings ? (
            <div className="space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <Button
                  type="button"
                  size="sm"
                  onClick={savePreferences}
                  className="w-full"
                >
                  Zapisz ustawienia
                </Button>
                <Button
                  type="button"
                  size="sm"
                  variant="outline"
                  onClick={rejectOptional}
                  className="w-full"
                >
                  Odrzuć opcjonalne
                </Button>
              </div>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => setShowSettings(false)}
                className="w-full"
              >
                Powrót
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={openSettings}
                className="w-full"
              >
                <Settings2 className="h-4 w-4" />
                Ustawienia
              </Button>
              <Button type="button" size="sm" onClick={acceptAll} className="w-full">
                Akceptuj wszystkie
              </Button>
            </div>
          )}
        </div>
      </div>
      </div>
    </section>
  );
};
