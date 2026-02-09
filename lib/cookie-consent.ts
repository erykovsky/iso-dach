export const COOKIE_CONSENT_STORAGE_KEY = "cookieConsent";
export const LEGACY_COOKIE_POLICY_KEY = "cookiePolicyAccepted";
export const COOKIE_CONSENT_VERSION = 1;
export const COOKIE_CONSENT_UPDATED_EVENT = "cookie-consent-updated";

export type CookieConsent = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  version: number;
  updatedAt: string;
};

type CookieConsentInput = {
  analytics: boolean;
  marketing: boolean;
};

const isBrowser = () => typeof window !== "undefined";

const toConsentRecord = (input: CookieConsentInput): CookieConsent => ({
  necessary: true,
  analytics: input.analytics,
  marketing: input.marketing,
  version: COOKIE_CONSENT_VERSION,
  updatedAt: new Date().toISOString(),
});

const isCookieConsentShape = (value: unknown): value is CookieConsent => {
  if (!value || typeof value !== "object") return false;

  const candidate = value as Partial<CookieConsent>;
  return (
    candidate.necessary === true &&
    typeof candidate.analytics === "boolean" &&
    typeof candidate.marketing === "boolean" &&
    typeof candidate.version === "number" &&
    typeof candidate.updatedAt === "string"
  );
};

export const getStoredCookieConsent = (): CookieConsent | null => {
  if (!isBrowser()) return null;

  try {
    const raw = localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (isCookieConsentShape(parsed)) {
        return parsed;
      }
    }
  } catch {
    return null;
  }

  const legacyAccepted = localStorage.getItem(LEGACY_COOKIE_POLICY_KEY);
  if (legacyAccepted === "true") {
    return {
      necessary: true,
      analytics: true,
      marketing: true,
      version: COOKIE_CONSENT_VERSION,
      updatedAt: "",
    };
  }

  return null;
};

export const isCookieConsentCurrent = (
  consent: CookieConsent | null
): boolean => {
  return Boolean(consent && consent.version === COOKIE_CONSENT_VERSION);
};

export const shouldShowCookieBanner = (): boolean => {
  return !isCookieConsentCurrent(getStoredCookieConsent());
};

export const saveCookieConsent = (input: CookieConsentInput): CookieConsent => {
  if (!isBrowser()) {
    return toConsentRecord(input);
  }

  const consent = toConsentRecord(input);
  localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, JSON.stringify(consent));
  localStorage.removeItem(LEGACY_COOKIE_POLICY_KEY);
  window.dispatchEvent(new Event(COOKIE_CONSENT_UPDATED_EVENT));

  return consent;
};
