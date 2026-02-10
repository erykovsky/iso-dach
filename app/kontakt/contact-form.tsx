"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useActionState, useRef } from "react";
import { Textarea } from "@/components/ui/textarea";
import {
    type ContactFormState,
    sendWycenaAction,
} from "./actions";

const initialContactFormState: ContactFormState = {
    status: "idle",
    message: "",
    name: "",
    phone: "",
    email: "",
    consentPrivacy: false,
    consentMarketing: false,
};

export const ContactForm = () => {
    const formRef = useRef<HTMLFormElement>(null);

    const [state, formAction, isPending] = useActionState(
        async (prevState: ContactFormState, formData: FormData) => {
            const result = await sendWycenaAction(prevState, formData);
            
            // Zachowaj dane formularza w stanie przy błędzie
            return {
                ...result,
                name: formData.get("name") as string,
                phone: formData.get("phone") as string,
                email: formData.get("email") as string,
                message: formData.get("message") as string,
                consentPrivacy: formData.get("consentPrivacy") === "on",
                consentMarketing: formData.get("consentMarketing") === "on",
            };
        },
        initialContactFormState,
    );

    // Reset formularza po sukcesie
    if (state.status === "success" && formRef.current) {
        formRef.current.reset();
    }

    return (
        <section className="soft-card reveal-up rounded-2xl p-4 sm:p-6">
            <p className="text-sm text-muted-foreground">Pola oznaczone * są wymagane</p>
            
            {/* Komunikat o błędzie/sukcesie */}
            {state.status !== "idle" && state.message && (
                <div className={`mt-4 rounded-lg p-3 text-sm ${
                    state.status === "success" 
                        ? "bg-green-50 text-green-800 border border-green-200" 
                        : "bg-red-50 text-red-800 border border-red-200"
                }`}>
                    {state.message}
                </div>
            )}

            <div className="mt-4 sm:mt-5">
                <form ref={formRef} action={formAction}>
                    <div className="flex flex-col gap-4 sm:gap-6">
                        {/* Honeypot - ukryte pole przed botami */}
                        <input
                            type="text"
                            name="website"
                            tabIndex={-1}
                            autoComplete="off"
                            aria-label="Nie wypełniaj tego pola"
                            className="absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0"
                            style={{ clip: 'rect(0, 0, 0, 0)', clipPath: 'inset(50%)' }}
                        />
                        <div className="grid gap-1.5 sm:gap-2">
                            <Label htmlFor="name">Imię i nazwisko *</Label>
                            <Input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Jan Kowalski"
                                className="h-9 px-3 md:h-10 md:px-3.5"
                                required
                                defaultValue={state.name || ""}
                            />
                        </div>
                        <div className="grid gap-1.5 sm:gap-2">
                            <Label htmlFor="phone">Numer telefonu *</Label>
                            <Input
                                id="phone"
                                name="phone"
                                type="tel"
                                placeholder="123 456 789"
                                className="h-9 px-3 md:h-10 md:px-3.5"
                                required
                                defaultValue={state.phone || ""}
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
                                required
                                defaultValue={state.email || ""}
                            />
                        </div>
                        <div className="grid gap-1.5 sm:gap-2">
                            <Label htmlFor="message">
                                Treść wiadomości (podaj kluczowe informacje)
                            </Label>
                            <Textarea
                                id="message"
                                name="message"
                                placeholder="Podaj najważniejsze dane: np. lokalizacja inwestycji, rodzaj ocieplenia, orientacyjna grubość izolacji, metraż ocieplenia, stan budynku i dodatkowe uwagi."
                                className="min-h-[130px] px-3 py-2 md:px-3.5 md:py-2.5"
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

                            <label
                                htmlFor="consentMarketing"
                                className="flex items-start gap-2.5 text-[13px] leading-5 text-muted-foreground sm:gap-3 sm:text-sm"
                            >
                                <input
                                    id="consentMarketing"
                                    name="consentMarketing"
                                    type="checkbox"
                                    className="mt-0.5 h-3.5 w-3.5 rounded border-primary/30 accent-primary sm:h-4 sm:w-4"
                                    defaultChecked={state.consentMarketing || false}
                                />
                                <span>
                                    Chcę otrzymywać informacje handlowe i
                                    marketingowe drogą elektroniczną
                                    (opcjonalnie).
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
