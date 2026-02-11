"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useActionState, useMemo, useRef, useState } from "react";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";
import {
    type ContactFormState,
    sendWycenaAction,
} from "./actions";

const PHONE_COUNTRIES = [
    { code: "PL", label: "Polska", flag: "🇵🇱", dialCode: "+48", maxDigits: 9 },
    { code: "DE", label: "Niemcy", flag: "🇩🇪", dialCode: "+49", maxDigits: 11 },
    { code: "NL", label: "Holandia", flag: "🇳🇱", dialCode: "+31", maxDigits: 9 },
    { code: "SE", label: "Szwecja", flag: "🇸🇪", dialCode: "+46", maxDigits: 10 },
    { code: "DK", label: "Dania", flag: "🇩🇰", dialCode: "+45", maxDigits: 8 },
] as const;

const DEFAULT_PHONE_COUNTRY = PHONE_COUNTRIES[0];

const groupPhoneDigits = (value: string) =>
    value.replace(/\D/g, "").replace(/(\d{3})(?=\d)/g, "$1 ").trim();

const initialContactFormState: ContactFormState = {
    status: "idle",
    message: "",
    name: "",
    phone: "",
    email: "",
    consentPrivacy: false,
};

export const ContactForm = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [phoneCountry, setPhoneCountry] = useState<
        (typeof PHONE_COUNTRIES)[number]["code"]
    >(DEFAULT_PHONE_COUNTRY.code);
    const [phoneLocalNumber, setPhoneLocalNumber] = useState("");

    const selectedPhoneCountry = useMemo(
        () =>
            PHONE_COUNTRIES.find((country) => country.code === phoneCountry) ??
            DEFAULT_PHONE_COUNTRY,
        [phoneCountry],
    );
    const formattedPhoneForSubmit = phoneLocalNumber
        ? `${selectedPhoneCountry.dialCode} ${groupPhoneDigits(phoneLocalNumber)}`.trim()
        : "";

    const [state, formAction, isPending] = useActionState(
        async (prevState: ContactFormState, formData: FormData) => {
            const result = await sendWycenaAction(prevState, formData);

            const nextState = {
                ...result,
                name: formData.get("name") as string,
                phone: formData.get("phone") as string,
                email: formData.get("email") as string,
                message: formData.get("message") as string,
                consentPrivacy: formData.get("consentPrivacy") === "on",
            };

            if (result.status === "success") {
                formRef.current?.reset();
                setPhoneCountry(DEFAULT_PHONE_COUNTRY.code);
                setPhoneLocalNumber("");

                // Keep client state empty after successful send.
                nextState.name = "";
                nextState.phone = "";
                nextState.email = "";
                nextState.message = "";
                nextState.consentPrivacy = false;

                // Reset hidden status to avoid stale state-driven effects in future UI changes.
                nextState.status = "idle";
                nextState.message = "";

                toast.success("Wiadomość została wysłana", {
                    description: "Odezwiemy się do Ciebie niebawem.",
                });
            } else if (result.status === "error") {
                toast.error("Nie udało się wysłać wiadomości", {
                    description:
                        result.message ||
                        "Spróbuj ponownie za chwilę albo zadzwoń do nas.",
                });
            }

            return nextState;
        },
        initialContactFormState,
    );

    return (
        <section className="soft-card reveal-up rounded-2xl p-4 sm:p-6">
            <p className="text-sm text-muted-foreground">Pola oznaczone * są wymagane</p>

            <div className="mt-4 sm:mt-5">
                <form ref={formRef} action={formAction}>
                    <div className="flex flex-col gap-4 sm:gap-6">
                        <div className="grid gap-1.5 sm:gap-2">
                            <Label htmlFor="name">Imię i nazwisko *</Label>
                            <Input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Jan Kowalski"
                                className="h-9 px-3 md:h-10 md:px-3.5"
                                autoComplete="name"
                                required
                                defaultValue={state.name || ""}
                            />
                        </div>
                        <div className="grid gap-1.5 sm:gap-2">
                            <Label htmlFor="phone">Numer telefonu</Label>
                            <div className="flex h-9 overflow-hidden rounded-md border border-input bg-background md:h-10">
                                <select
                                    aria-label="Kraj numeru telefonu"
                                    className="h-full min-w-[96px] border-r border-input bg-muted/40 px-2 text-xs text-foreground outline-hidden sm:min-w-[112px] sm:px-3 sm:text-sm"
                                    value={phoneCountry}
                                    onChange={(event) => {
                                        const nextCountry =
                                            PHONE_COUNTRIES.find(
                                                (country) =>
                                                    country.code === event.target.value,
                                            ) ?? DEFAULT_PHONE_COUNTRY;
                                        setPhoneCountry(nextCountry.code);
                                        setPhoneLocalNumber((previous) =>
                                            groupPhoneDigits(previous).replace(
                                                /\D/g,
                                                "",
                                            ).slice(0, nextCountry.maxDigits),
                                        );
                                    }}
                                >
                                    {PHONE_COUNTRIES.map((country) => (
                                        <option
                                            key={country.code}
                                            value={country.code}
                                        >
                                            {country.flag} {country.dialCode}
                                        </option>
                                    ))}
                                </select>
                                <input
                                    id="phone"
                                    type="tel"
                                    placeholder="123 456 789"
                                    className="h-full w-full bg-transparent px-3 text-sm outline-hidden md:px-3.5"
                                    autoComplete="tel-national"
                                    inputMode="tel"
                                    value={groupPhoneDigits(phoneLocalNumber)}
                                    onChange={(event) => {
                                        const nextValue = event.target.value
                                            .replace(/\D/g, "")
                                            .slice(
                                                0,
                                                selectedPhoneCountry.maxDigits,
                                            );
                                        setPhoneLocalNumber(nextValue);
                                    }}
                                />
                            </div>
                            <input
                                type="hidden"
                                name="phone"
                                value={formattedPhoneForSubmit}
                            />
                        </div>
                        <div className="grid gap-1.5 sm:gap-2">
                            <Label htmlFor="email">Adres e-mail *</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="m@przykład.pl"
                                className="h-9 px-3 md:h-10 md:px-3.5"
                                autoComplete="email"
                                required
                                defaultValue={state.email || ""}
                            />
                        </div>
                        <div className="grid gap-1.5 sm:gap-2">
                            <Label htmlFor="message">
                                Treść wiadomości *
                            </Label>
                            <Textarea
                                id="message"
                                name="message"
                                placeholder="Podaj najważniejsze dane: np. lokalizacja inwestycji, rodzaj ocieplenia, orientacyjna grubość izolacji, metraż ocieplenia, stan budynku i dodatkowe uwagi."
                                className="min-h-[130px] px-3 py-2 md:px-3.5 md:py-2.5"
                                required
                                defaultValue={state.message || ""}
                            />
                        </div>
                        <div className="space-y-2.5 border-t border-primary/10 pt-3.5 sm:space-y-3 sm:pt-4">
                            <label
                                htmlFor="consentPrivacy"
                                className="flex items-start gap-2.5 text-[13px] leading-5 text-muted-foreground sm:gap-3 sm:text-sm"
                            >
                                <input
                                    id="consentPrivacy"
                                    name="consentPrivacy"
                                    type="checkbox"
                                    required
                                    className="mt-0.5 h-3.5 w-3.5 rounded border-primary/30 accent-primary sm:h-4 sm:w-4"
                                    defaultChecked={state.consentPrivacy || false}
                                />
                                <span>
                                    Wyrażam zgodę na przetwarzanie moich danych
                                    osobowych w celu obsługi zapytania, zgodnie
                                    z{" "}
                                    <a
                                        href="/polityka-prywatnosci"
                                        className="font-medium text-primary underline-offset-4 hover:underline"
                                    >
                                        Polityką prywatności
                                    </a>
                                    . *
                                </span>
                            </label>
                        </div>
                        <Button
                            type="submit"
                            className="mr-auto h-9 px-3.5 text-sm sm:h-10 sm:px-4"
                            disabled={isPending}
                        >
                            {isPending ? "Wysyłanie..." : "Wyślij zapytanie"}
                        </Button>
                    </div>
                </form>
            </div>
        </section>
    );
};
