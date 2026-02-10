export const COOKIE_CONSENT_STORAGE_KEY = "cookieConsent";
export const LEGACY_COOKIE_POLICY_KEY = "cookiePolicyAccepted";
export const COOKIE_CONSENT_VERSION = 2;
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
  if (legacyAccepted) {
    // Legacy value was binary and could incorrectly auto-enable optional cookies.
    // We remove it and force explicit consent using the current consent model.
    localStorage.removeItem(LEGACY_COOKIE_POLICY_KEY);
  }

  return null;
};

export const isCookieConsentCurrent = (
  consent: CookieConsent | null
): consent is CookieConsent => {
  return Boolean(consent && consent.version === COOKIE_CONSENT_VERSION);
};

export const shouldShowCookieBanner = (): boolean => {
  return !isCookieConsentCurrent(getStoredCookieConsent());
};

export const updateGoogleConsent = (analytics: boolean, marketing: boolean) => {
  if (!isBrowser()) return;

  const gtag = (window as Record<string, unknown>).gtag;
  if (typeof gtag === "function") {
    gtag("consent", "update", {
      ad_storage: marketing ? "granted" : "denied",
      ad_user_data: marketing ? "granted" : "denied",
      ad_personalization: marketing ? "granted" : "denied",
      analytics_storage: analytics ? "granted" : "denied",
    });
  }
};

const ANALYTICS_COOKIE_PREFIXES = [
  "_ga",
  "_gid",
  "_gat",
  "_gac_",
  "_gcl_",
  "_dc_gtm_",
  "_gtm_",
];

const MARKETING_COOKIE_PREFIXES = [
  "_fbp",
  "_fbc",
];

const deleteCookie = (name: string) => {
  const expires = "Thu, 01 Jan 1970 00:00:00 GMT";
  const hostname = window.location.hostname;
  const parts = hostname.split(".");
  const domains = new Set<string>([hostname, `.${hostname}`]);

  if (parts.length >= 2) {
    const rootDomain = parts.slice(-2).join(".");
    domains.add(rootDomain);
    domains.add(`.${rootDomain}`);
  }

  document.cookie = `${name}=; expires=${expires}; path=/; SameSite=Lax`;
  document.cookie = `${name}=; expires=${expires}; path=/; SameSite=None; Secure`;

  domains.forEach((domain) => {
    document.cookie = `${name}=; expires=${expires}; path=/; domain=${domain}; SameSite=Lax`;
    document.cookie = `${name}=; expires=${expires}; path=/; domain=${domain}; SameSite=None; Secure`;
  });
};

const clearOptionalCookies = ({
  clearAnalytics,
  clearMarketing,
}: {
  clearAnalytics: boolean;
  clearMarketing: boolean;
}) => {
  if (!isBrowser()) return;

  const prefixes = [
    ...(clearAnalytics ? ANALYTICS_COOKIE_PREFIXES : []),
    ...(clearMarketing ? MARKETING_COOKIE_PREFIXES : []),
  ];

  if (prefixes.length === 0) return;

  const cookieNames = document.cookie
    .split(";")
    .map((entry) => entry.trim().split("=")[0])
    .filter(Boolean);

  cookieNames.forEach((cookieName) => {
    if (prefixes.some((prefix) => cookieName.startsWith(prefix))) {
      deleteCookie(cookieName);
    }
  });
};

export const saveCookieConsent = (input: CookieConsentInput): CookieConsent => {
  if (!isBrowser()) {
    return toConsentRecord(input);
  }

  const consent = toConsentRecord(input);
  localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, JSON.stringify(consent));
  localStorage.removeItem(LEGACY_COOKIE_POLICY_KEY);

  clearOptionalCookies({
    clearAnalytics: !input.analytics,
    clearMarketing: !input.marketing,
  });

  // Update Google Consent Mode
  updateGoogleConsent(input.analytics, input.marketing);

  window.dispatchEvent(new Event(COOKIE_CONSENT_UPDATED_EVENT));

  return consent;
};
