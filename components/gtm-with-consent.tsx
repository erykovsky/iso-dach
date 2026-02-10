"use client";

import { useEffect, useState } from "react";
import { GoogleTagManager } from "@next/third-parties/google";
import {
  COOKIE_CONSENT_STORAGE_KEY,
  COOKIE_CONSENT_UPDATED_EVENT,
  getStoredCookieConsent,
  isCookieConsentCurrent,
} from "@/lib/cookie-consent";

type GTMWithConsentProps = {
  gtmId: string;
};

export const GTMWithConsent = ({ gtmId }: GTMWithConsentProps) => {
  const [canLoadTracking, setCanLoadTracking] = useState(false);

  useEffect(() => {
    const syncConsent = () => {
      const consent = getStoredCookieConsent();
      const canTrack =
        isCookieConsentCurrent(consent) &&
        Boolean(consent.analytics || consent.marketing);

      setCanLoadTracking(canTrack);
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

  if (!gtmId || !canLoadTracking) return null;

  return <GoogleTagManager gtmId={gtmId} />;
};
