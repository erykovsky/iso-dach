import { Metadata } from "next";
import PrivacyPolicy from "./privacy-policy";
import { WebPageSchema } from "@/components/schema/webpage-schema";

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
        <>
            <WebPageSchema
                title="Polityka prywatności"
                description="Informacje o zasadach przetwarzania danych osobowych w ISO-DACH."
                url="https://iso-dach.eu/polityka-prywatnosci"
                breadcrumbs={[
                    { name: "Strona główna", url: "https://iso-dach.eu" },
                    {
                        name: "Polityka prywatności",
                        url: "https://iso-dach.eu/polityka-prywatnosci",
                    },
                ]}
            />
            <PrivacyPolicy />
        </>
    );
}
