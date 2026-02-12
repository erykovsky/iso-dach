"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CookiePolicy } from "@/components/cookie-policy";
import { GTMWithConsent } from "@/components/gtm-with-consent";
import { Toaster } from "@/components/ui/sonner";

export function SiteLayout({
  children,
  gtmId,
  modal,
}: {
  children: React.ReactNode;
  gtmId: string | undefined;
  modal?: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      {gtmId ? <GTMWithConsent gtmId={gtmId} /> : null}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-100 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg focus:shadow-lg"
      >
        Przejdź do treści
      </a>
      <Header />
      <main id="main-content">{children}</main>
      {modal}
      <Footer />
      <CookiePolicy />
      <Toaster position="bottom-right" closeButton />
    </>
  );
}
