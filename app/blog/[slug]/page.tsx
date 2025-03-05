import { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPost } from "./blog-post";
import { Suspense } from "react";

// Przykładowe artykuły (te same co w blog-list.tsx)
const blogPosts = [
 {
  id: 1,
  title: "Jak wybrać najlepszy materiał izolacyjny dla Twojego domu?",
  slug: "jak-wybrac-najlepszy-material-izolacyjny",
  excerpt:
   "Porównanie najpopularniejszych materiałów izolacyjnych dostępnych na rynku. Dowiedz się, który będzie najlepszy dla Twojego domu.",
  category: "porady",
  image: "/placeholder.svg?height=600&width=800",
  date: "2023-10-15",
  readTime: 8,
  content: `
      <h2>Wprowadzenie do materiałów izolacyjnych</h2>
      <p>Wybór odpowiedniego materiału izolacyjnego jest jednym z najważniejszych kroków podczas planowania ocieplenia domu. Właściwa izolacja nie tylko zapewnia komfort termiczny, ale również znacząco wpływa na koszty ogrzewania i chłodzenia budynku.</p>
      
      <p>Na rynku dostępnych jest wiele różnych materiałów izolacyjnych, każdy z nich ma swoje zalety i wady. W tym artykule przyjrzymy się najpopularniejszym opcjom i pomożemy Ci wybrać najlepsze rozwiązanie dla Twojego domu.</p>
      
      <h2>Wełna mineralna</h2>
      <p>Wełna mineralna to jeden z najpopularniejszych materiałów izolacyjnych. Występuje w dwóch głównych rodzajach: wełna szklana i wełna kamienna (skalna).</p>
      
      <h3>Zalety:</h3>
      <ul>
        <li>Doskonałe właściwości termoizolacyjne</li>
        <li>Bardzo dobra izolacja akustyczna</li>
        <li>Niepalność - wysoka odporność ogniowa</li>
        <li>Paroprzepuszczalność - pozwala "oddychać" ścianom</li>
        <li>Odporność na gryzonie i insekty</li>
      </ul>
      
      <h3>Wady:</h3>
      <ul>
        <li>Chłonie wilgoć, co może obniżyć jej właściwości izolacyjne</li>
        <li>Wymaga starannego montażu i stosowania odzieży ochronnej podczas instalacji</li>
        <li>Może osiadać z czasem, tworząc mostki termiczne</li>
      </ul>
      
      <h2>Styropian (EPS)</h2>
      <p>Styropian, znany również jako polistyren ekspandowany (EPS), to lekki, sztywny materiał izolacyjny szeroko stosowany w budownictwie.</p>
      
      <h3>Zalety:</h3>
      <ul>
        <li>Niska cena w porównaniu do innych materiałów</li>
        <li>Łatwość montażu i obróbki</li>
        <li>Niska nasiąkliwość</li>
        <li>Dobra izolacyjność termiczna</li>
        <li>Lekkość - nie obciąża konstrukcji</li>
      </ul>
      
      <h3>Wady:</h3>
      <ul>
        <li>Słaba izolacja akustyczna</li>
        <li>Palność (choć dostępne są odmiany samogasnące)</li>
        <li>Niska odporność na uszkodzenia mechaniczne</li>
        <li>Może być atakowany przez niektóre owady</li>
      </ul>
      
      <h2>Styropian grafitowy</h2>
      <p>Styropian grafitowy to udoskonalona wersja tradycyjnego styropianu, wzbogacona o dodatek grafitu, który poprawia właściwości izolacyjne.</p>
      
      <h3>Zalety:</h3>
      <ul>
        <li>Lepsza izolacyjność termiczna niż zwykły styropian (nawet o 20%)</li>
        <li>Możliwość zastosowania cieńszych warstw przy zachowaniu tych samych parametrów</li>
        <li>Wszystkie zalety zwykłego styropianu</li>
      </ul>
      
      <h3>Wady:</h3>
      <ul>
        <li>Wyższa cena niż zwykły styropian</li>
        <li>Większa wrażliwość na promienie słoneczne podczas montażu</li>
        <li>Te same wady co zwykły styropian</li>
      </ul>
      
      <h2>Pianka poliuretanowa (PUR)</h2>
      <p>Pianka poliuretanowa to nowoczesny materiał izolacyjny, który może być aplikowany w formie natrysku lub gotowych płyt.</p>
      
      <h3>Zalety:</h3>
      <ul>
        <li>Najwyższe parametry izolacyjności termicznej</li>
        <li>Doskonała szczelność - wypełnia nawet najmniejsze szczeliny</li>
        <li>Odporność na wilgoć</li>
        <li>Lekkość</li>
        <li>Trwałość - nie osiada z czasem</li>
      </ul>
      
      <h3>Wady:</h3>
      <ul>
        <li>Wysoka cena</li>
        <li>Konieczność profesjonalnego montażu w przypadku pianki natryskowej</li>
        <li>Emisja szkodliwych substancji podczas aplikacji (wymaga odpowiedniej ochrony)</li>
      </ul>
      
      <h2>Celuloza</h2>
      <p>Celuloza to ekologiczny materiał izolacyjny produkowany głównie z makulatury, stosowany często do izolacji poddaszy i stropodachów.</p>
      
      <h3>Zalety:</h3>
      <ul>
        <li>Ekologiczność - materiał z recyklingu</li>
        <li>Dobre właściwości termoizolacyjne</li>
        <li>Doskonała izolacja akustyczna</li>
        <li>Regulacja wilgotności</li>
        <li>Odporność na gryzonie i insekty (dzięki dodatkom mineralnym)</li>
      </ul>
      
      <h3>Wady:</h3>
      <ul>
        <li>Wymaga profesjonalnego montażu (wdmuchiwania)</li>
        <li>Może osiadać przy nieprawidłowej aplikacji</li>
        <li>Wrażliwość na zawilgocenie</li>
      </ul>
      
      <h2>Jak wybrać odpowiedni materiał?</h2>
      <p>Przy wyborze materiału izolacyjnego należy wziąć pod uwagę kilka kluczowych czynników:</p>
      
      <ol>
        <li><strong>Miejsce zastosowania</strong> - różne materiały sprawdzają się lepiej w różnych częściach budynku</li>
        <li><strong>Budżet</strong> - koszty materiałów i instalacji mogą się znacznie różnić</li>
        <li><strong>Parametry techniczne</strong> - współczynnik przewodzenia ciepła (lambda), odporność ogniowa, izolacyjność akustyczna</li>
        <li><strong>Warunki klimatyczne</strong> - w różnych regionach mogą sprawdzać się różne rozwiązania</li>
        <li><strong>Aspekty ekologiczne</strong> - wpływ na środowisko i zdrowie mieszkańców</li>
      </ol>
      
      <h2>Podsumowanie</h2>
      <p>Nie ma jednego uniwersalnego materiału izolacyjnego, który byłby idealny w każdej sytuacji. Często najlepszym rozwiązaniem jest kombinacja różnych materiałów w różnych częściach budynku.</p>
      
      <p>Przed podjęciem ostatecznej decyzji warto skonsultować się ze specjalistą, który pomoże dobrać optymalne rozwiązanie dla Twojego domu, uwzględniając wszystkie istotne czynniki.</p>
      
      <p>Pamiętaj, że dobra izolacja to inwestycja na lata, która zwraca się w postaci niższych rachunków za energię i większego komfortu mieszkania.</p>
    `,
 },
 {
  id: 2,
  title: "Termomodernizacja budynku - od czego zacząć?",
  slug: "termomodernizacja-budynku-od-czego-zaczac",
  excerpt:
   "Kompleksowy przewodnik po procesie termomodernizacji. Poznaj kluczowe etapy i dowiedz się, jak zaplanować cały proces.",
  category: "porady",
  image: "/placeholder.svg?height=600&width=800",
  date: "2023-09-28",
  readTime: 10,
  content: `
      <h2>Wprowadzenie do termomodernizacji</h2>
      <p>Termomodernizacja to kompleksowy proces poprawy efektywności energetycznej budynku. Obejmuje szereg działań mających na celu zmniejszenie zużycia energii potrzebnej do ogrzewania, chłodzenia i wentylacji budynku.</p>
      
      <p>W tym artykule przedstawimy krok po kroku, jak zaplanować i przeprowadzić termomodernizację, aby osiągnąć najlepsze rezultaty.</p>
      
      <h2>Dlaczego warto przeprowadzić termomodernizację?</h2>
      <p>Termomodernizacja przynosi wiele korzyści, zarówno ekonomicznych, jak i związanych z komfortem mieszkania:</p>
      
      <ul>
        <li>Zmniejszenie kosztów ogrzewania nawet o 30-60%</li>
        <li>Poprawa komfortu termicznego w budynku</li>
        <li>Ochrona środowiska poprzez redukcję emisji CO2</li>
        <li>Wzrost wartości nieruchomości</li>
        <li>Poprawa estetyki budynku</li>
        <li>Możliwość uzyskania dofinansowania</li>
      </ul>
      
      <h2>Krok 1: Audyt energetyczny</h2>
      <p>Pierwszym i najważniejszym krokiem jest przeprowadzenie audytu energetycznego. Jest to szczegółowa analiza stanu technicznego budynku i jego systemów grzewczych, która pozwala określić:</p>
      
      <ul>
        <li>Aktualne zużycie energii</li>
        <li>Miejsca największych strat ciepła</li>
        <li>Optymalne rozwiązania termomodernizacyjne</li>
        <li>Szacunkowe koszty i czas zwrotu inwestycji</li>
      </ul>
      
      <p>Audyt powinien być przeprowadzony przez certyfikowanego audytora energetycznego, który przygotuje szczegółowy raport z zaleceniami.</p>
      
      <h2>Krok 2: Plan termomodernizacji</h2>
      <p>Na podstawie audytu energetycznego należy opracować szczegółowy plan termomodernizacji, uwzględniający:</p>
      
      <ul>
        <li>Zakres prac</li>
        <li>Harmonogram realizacji</li>
        <li>Budżet</li>
        <li>Możliwości finansowania (kredyty, dotacje, ulgi podatkowe)</li>
      </ul>
      
      <p>Warto rozważyć etapowanie prac, jeśli budżet nie pozwala na jednoczesną realizację wszystkich zalecanych działań.</p>
      
      <h2>Krok 3: Wybór wykonawcy</h2>
      <p>Wybór odpowiedniego wykonawcy jest kluczowy dla powodzenia całego przedsięwzięcia. Przy wyborze warto zwrócić uwagę na:</p>
      
      <ul>
        <li>Doświadczenie w realizacji podobnych projektów</li>
        <li>Referencje i opinie klientów</li>
        <li>Certyfikaty i uprawnienia</li>
        <li>Szczegółowość oferty i kosztorysu</li>
        <li>Gwarancje na wykonane prace</li>
      </ul>
      
      <p>Zalecamy porównanie ofert od co najmniej trzech różnych wykonawców.</p>
      
      <h2>Krok 4: Realizacja prac termomodernizacyjnych</h2>
      <p>Typowy zakres prac termomodernizacyjnych obejmuje:</p>
      
      <h3>Izolacja przegród zewnętrznych:</h3>
      <ul>
        <li>Ocieplenie ścian zewnętrznych</li>
        <li>Ocieplenie dachu lub stropodachu</li>
        <li>Ocieplenie stropu nad nieogrzewaną piwnicą</li>
        <li>Ocieplenie podłogi na gruncie</li>
      </ul>
      
      <h3>Modernizacja stolarki okiennej i drzwiowej:</h3>
      <ul>
        <li>Wymiana okien na energooszczędne</li>
        <li>Wymiana drzwi zewnętrznych</li>
        <li>Likwidacja mostków termicznych</li>
      </ul>
      
      <h3>Modernizacja systemu grzewczego:</h3>
      <ul>
        <li>Wymiana źródła ciepła na bardziej efektywne</li>
        <li>Modernizacja instalacji centralnego ogrzewania</li>
        <li>Montaż zaworów termostatycznych</li>
        <li>Instalacja systemu zarządzania energią</li>
      </ul>
      
      <h3>Modernizacja systemu wentylacji:</h3>
      <ul>
        <li>Instalacja wentylacji mechanicznej z odzyskiem ciepła (rekuperacja)</li>
        <li>Uszczelnienie budynku</li>
      </ul>
      
      <h3>Wykorzystanie odnawialnych źródeł energii:</h3>
      <ul>
        <li>Montaż paneli fotowoltaicznych</li>
        <li>Instalacja pomp ciepła</li>
        <li>Kolektory słoneczne do podgrzewania wody</li>
      </ul>
      
      <h2>Krok 5: Odbiór prac i kontrola jakości</h2>
      <p>Po zakończeniu prac termomodernizacyjnych należy przeprowadzić szczegółowy odbiór techniczny, który powinien obejmować:</p>
      
      <ul>
        <li>Sprawdzenie zgodności wykonanych prac z projektem</li>
        <li>Kontrolę jakości materiałów i wykonania</li>
        <li>Testy szczelności (np. badanie termowizyjne)</li>
        <li>Sprawdzenie działania systemów grzewczych i wentylacyjnych</li>
      </ul>
      
      <p>Warto również uzyskać nowy certyfikat energetyczny budynku, który potwierdzi poprawę jego efektywności energetycznej.</p>
      
      <h2>Krok 6: Monitorowanie efektów</h2>
      <p>Po zakończeniu termomodernizacji warto monitorować zużycie energii, aby:</p>
      
      <ul>
        <li>Zweryfikować rzeczywiste oszczędności</li>
        <li>Optymalizować działanie systemów grzewczych</li>
        <li>Wykrywać ewentualne problemy</li>
      </ul>
      
      <p>Nowoczesne systemy zarządzania energią pozwalają na bieżąco śledzić parametry i zużycie energii w budynku.</p>
      
      <h2>Finansowanie termomodernizacji</h2>
      <p>Termomodernizacja to znacząca inwestycja, ale istnieje wiele możliwości jej finansowania:</p>
      
      <ul>
        <li>Programy dotacji (np. "Czyste Powietrze", "Stop Smog")</li>
        <li>Preferencyjne kredyty i pożyczki</li>
        <li>Ulga termomodernizacyjna</li>
        <li>Finansowanie przez ESCO (Energy Service Company)</li>
        <li>Środki własne</li>
      </ul>
      
      <p>Warto dokładnie przeanalizować dostępne opcje i wybrać najkorzystniejszą dla swojej sytuacji.</p>
      
      <h2>Podsumowanie</h2>
      <p>Termomodernizacja to kompleksowy proces, który wymaga starannego planowania i realizacji. Jednak korzyści, jakie przynosi - zarówno finansowe, jak i związane z komfortem mieszkania - sprawiają, że jest to inwestycja warta rozważenia.</p>
      
      <p>Kluczem do sukcesu jest odpowiednie przygotowanie, wybór sprawdzonych wykonawców i materiałów oraz kontrola jakości na każdym etapie realizacji.</p>
      
      <p>Jeśli planujesz termomodernizację swojego budynku, zachęcamy do kontaktu z naszymi specjalistami, którzy pomogą zaplanować i zrealizować cały proces.</p>
    `,
 },
 {
  id: 3,
  title: "Nowoczesne technologie w izolacji poddaszy",
  slug: "nowoczesne-technologie-w-izolacji-poddaszy",
  excerpt:
   "Przegląd najnowszych rozwiązań technologicznych stosowanych przy izolacji poddaszy. Sprawdź, jak zwiększyć efektywność energetyczną.",
  category: "technologie",
  image: "/placeholder.svg?height=600&width=800",
  date: "2023-09-12",
  readTime: 7,
  content: `<p>Treść artykułu o nowoczesnych technologiach w izolacji poddaszy...</p>`,
 },
 {
  id: 4,
  title: "Dotacje na termomodernizację w 2023 roku",
  slug: "dotacje-na-termomodernizacje-2023",
  excerpt:
   "Przegląd dostępnych programów dofinansowania termomodernizacji. Sprawdź, jak uzyskać wsparcie finansowe na ocieplenie domu.",
  category: "dotacje",
  image: "/placeholder.svg?height=600&width=800",
  date: "2023-08-30",
  readTime: 6,
  content: `<p>Treść artykułu o dotacjach na termomodernizację...</p>`,
 },
 {
  id: 5,
  title: "Kompleksowa termomodernizacja budynku wielorodzinnego w Szczecinie",
  slug: "termomodernizacja-budynku-wielorodzinnego-szczecin",
  excerpt:
   "Studium przypadku kompleksowej termomodernizacji budynku wielorodzinnego. Zobacz efekty i poznaj zastosowane rozwiązania.",
  category: "realizacje",
  image: "/placeholder.svg?height=600&width=800",
  date: "2023-08-15",
  readTime: 9,
  content: `<p>Treść artykułu o termomodernizacji budynku wielorodzinnego...</p>`,
 },
 {
  id: 6,
  title: "Jak przygotować dom na zimę? Praktyczne porady",
  slug: "jak-przygotowac-dom-na-zime",
  excerpt:
   "Zestaw praktycznych porad, jak przygotować dom na sezon zimowy. Dowiedz się, jak zmniejszyć koszty ogrzewania.",
  category: "porady",
  image: "/placeholder.svg?height=600&width=800",
  date: "2023-07-28",
  readTime: 5,
  content: `<p>Treść artykułu o przygotowaniu domu na zimę...</p>`,
 },
];

export async function generateMetadata({
 params,
}: {
 params: Promise<{ slug: string }>;
}): Promise<Metadata> {
 const { slug } = await params;
 const post = blogPosts.find((post) => post.slug === slug);

 if (!post) {
  return {
   title: "Artykuł nie znaleziony | ISO-DACH",
   description: "Przepraszamy, ale szukany artykuł nie istnieje.",
  };
 }

 return {
  title: `${post.title} | ISO-DACH Blog`,
  description: post.excerpt,
 };
}

export default async function BlogPostPage({
 params,
}: {
 params: Promise<{ slug: string }>;
}) {
 const { slug } = await params;
 const post = blogPosts.find((post) => post.slug === slug);

 if (!post) {
  notFound();
 }

 return (
  <Suspense>
   <BlogPost post={post} />
  </Suspense>
 );
}
