import Image from "next/image";

export default function IzolacjaStropowPiwnicPage() {
    return (
        <div className="container mx-auto py-12">
            <h1 className="text-3xl font-bold text-center mb-8">
                Izolacja Stropów Piwnic - Kompleksowe Rozwiązania
            </h1>

            {/* Hero Section */}
            <section className="mb-12">
                <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
                    <Image
                        src="/placeholder.svg?height=600&width=800&query=basement ceiling insulation"
                        alt="Izolacja stropów piwnic"
                        fill
                        className="object-cover"
                    />
                </div>
                <p className="text-gray-600 mt-4 text-center">
                    Profesjonalna izolacja stropów piwnic to klucz do komfortu
                    termicznego i oszczędności energii w Twoim domu.
                </p>
            </section>

            {/* Dlaczego Izolacja Stropów Piwnic Jest Ważna? */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    Dlaczego Izolacja Stropów Piwnic Jest Ważna?
                </h2>
                <ul className="list-disc list-inside text-gray-700">
                    <li>
                        <strong>Redukcja Strat Ciepła:</strong> Izolacja
                        minimalizuje ucieczkę ciepła przez strop piwnicy, co
                        obniża koszty ogrzewania.
                    </li>
                    <li>
                        <strong>Ochrona Przed Wilgocią:</strong> Zapobiega
                        kondensacji i rozwojowi pleśni, chroniąc konstrukcję
                        budynku.
                    </li>
                    <li>
                        <strong>Poprawa Komfortu:</strong> Zapewnia stabilną
                        temperaturę w pomieszczeniach nad piwnicą, zwiększając
                        komfort użytkowania.
                    </li>
                    <li>
                        <strong>Oszczędność Energii:</strong> Mniejsze zużycie
                        energii to korzyść dla środowiska i Twojego portfela.
                    </li>
                </ul>
            </section>

            {/* Technologie Izolacji Stropów Piwnic */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    Technologie Izolacji Stropów Piwnic
                </h2>
                <p className="text-gray-700">
                    Oferujemy różnorodne metody izolacji stropów piwnic,
                    dostosowane do specyfiki budynku i potrzeb klienta:
                </p>
                <ul className="list-disc list-inside text-gray-700">
                    <li>
                        <strong>Natrysk Pianką PUR:</strong> Szybka i skuteczna
                        metoda, zapewniająca doskonałą izolację termiczną i
                        szczelność.
                    </li>
                    <li>
                        <strong>Montaż Płyt Izolacyjnych:</strong> Tradycyjna
                        metoda z wykorzystaniem wełny mineralnej, styropianu lub
                        płyt PIR/PUR.
                    </li>
                    <li>
                        <strong>Izolacja Termoizolacyjna:</strong> Innowacyjne
                        rozwiązania termoizolacyjne, zapewniające optymalną
                        ochronę przed utratą ciepła.
                    </li>
                </ul>
            </section>

            {/* Materiały Izolacyjne, Które Stosujemy */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    Materiały Izolacyjne, Które Stosujemy
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Wełna Mineralna",
                            description:
                                "Doskonała izolacja termiczna i akustyczna, niepalna i paroprzepuszczalna. Idealna do izolacji stropów piwnic w budynkach mieszkalnych.",
                            image: "/placeholder.svg?height=300&width=400&query=mineral wool insulation",
                        },
                        {
                            title: "Płyty Styropianowe",
                            description:
                                "Lekki materiał o dobrych właściwościach izolacyjnych, łatwy w montażu i obróbce. Dostępny w różnych grubościach i gęstościach.",
                            image: "/placeholder.svg?height=300&width=400&query=styrofoam boards",
                        },
                        {
                            title: "Płyty PIR/PUR",
                            description:
                                "Nowoczesny materiał o najwyższych parametrach izolacyjnych, pozwalający na uzyskanie doskonałej izolacji przy mniejszej grubości warstwy.",
                            image: "/placeholder.svg?height=300&width=400&query=PIR insulation panels",
                        },
                    ].map((material, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-md overflow-hidden"
                        >
                            <div className="relative h-48">
                                <Image
                                    src={material.image || "/placeholder.svg"}
                                    alt={material.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">
                                    {material.title}
                                </h3>
                                <p className="text-gray-600">
                                    {material.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Jak Wygląda Proces Izolacji Stropów Piwnic? */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    Jak Wygląda Proces Izolacji Stropów Piwnic?
                </h2>
                <ol className="list-decimal list-inside text-gray-700">
                    <li>
                        <strong>Audyt i Ocena:</strong> Przeprowadzamy
                        szczegółowy audyt budynku, aby ocenić stan stropu
                        piwnicy i dobrać odpowiednią metodę izolacji.
                    </li>
                    <li>
                        <strong>Przygotowanie Powierzchni:</strong> Oczyszczamy
                        i przygotowujemy powierzchnię stropu do montażu
                        izolacji.
                    </li>
                    <li>
                        <strong>Montaż Izolacji:</strong> Wykonujemy izolację
                        stropu piwnicy zgodnie z wybraną technologią i
                        materiałami.
                    </li>
                    <li>
                        <strong>Kontrola Jakości:</strong> Sprawdzamy jakość
                        wykonanej izolacji i upewniamy się, że spełnia ona
                        wszystkie normy i standardy.
                    </li>
                </ol>
            </section>

            {/* Skontaktuj Się z Nami */}
            <section className="text-center">
                <h2 className="text-2xl font-semibold mb-4">
                    Skontaktuj Się z Nami
                </h2>
                <p className="text-gray-700 mb-4">
                    Zainteresowany izolacją stropów piwnic? Skontaktuj się z
                    nami, aby uzyskać bezpłatną wycenę i profesjonalne
                    doradztwo.
                </p>
                <a
                    href="/kontakt"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Skontaktuj się
                </a>
            </section>
        </div>
    );
}
