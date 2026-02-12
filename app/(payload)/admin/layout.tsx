import type { ReactNode } from "react";
import "@payloadcms/next/css";
import "./admin.css";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="payload-admin-root" style={{ minHeight: "100vh" }}>
      <style>{`@layer payload-default, payload;`}</style>
      {children}
    </div>
  );
}
