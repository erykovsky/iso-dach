import { Metadata } from "next";
import PrivacyPolicy from "./privacy-policy";

export const metadata: Metadata = {
    title: "Polityka prywatności",
    description:
        "Polityka prywatności ISO-DACH. Informacje o zbieraniu, przetwarzaniu i ochronie danych osobowych Użytkowników strony internetowej ISO-DACH.",
    alternates: {
        canonical: "https://iso-dach.eu/polityka-prywatnosci",
    },
};

export default function PrivacyPolicyPage() {
    return (
        <PrivacyPolicy />
    );
}
