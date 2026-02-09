"use client";

import { useEffect, useState } from "react";
import { GoogleTagManager } from "@next/third-parties/google";
import {
  COOKIE_CONSENT_STORAGE_KEY,
  COOKIE_CONSENT_UPDATED_EVENT,
  getStoredCookieConsent,
} from "@/lib/cookie-consent";

type GTMWithConsentProps = {
  gtmId: string;
};

export const GTMWithConsent = ({ gtmId }: GTMWithConsentProps) => {
  const [canLoadAnalytics, setCanLoadAnalytics] = useState(false);

  useEffect(() => {
    const syncConsent = () => {
      const consent = getStoredCookieConsent();
      setCanLoadAnalytics(Boolean(consent?.analytics));
    };

    const onStorage = (event: StorageEvent) => {
      if (event.key && event.key !== COOKIE_CONSENT_STORAGE_KEY) return;
      syncConsent();
    };

    syncConsent();
    window.addEventListener(COOKIE_CONSENT_UPDATED_EVENT, syncConsent);
    window.addEventListener("storage", onStorage);

    return () => {
      window.removeEventListener(COOKIE_CONSENT_UPDATED_EVENT, syncConsent);
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  if (!canLoadAnalytics) return null;

  return <GoogleTagManager gtmId={gtmId} />;
};
