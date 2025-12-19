# System Zarządzania Fakturami z AI

## Opis

System automatycznie analizuje faktury i rachunki za pomocą AI (OpenAI GPT-4 Vision), wyciąga najważniejsze informacje i liczy koszty według miesięcy i kategorii.

## Wymagania

1. **OpenAI API Key** - wymagany do analizy faktur

   - Zarejestruj się na: https://platform.openai.com
   - Wygeneruj klucz API: https://platform.openai.com/api-keys
   - Dodaj kredyty do konta (minimum $5)

2. **Vercel Blob Storage** - wymagany do przechowywania faktur
   - Utwórz projekt na: https://vercel.com
   - Przejdź do Storage → Create Database → Blob
   - Skopiuj `BLOB_READ_WRITE_TOKEN`

## Konfiguracja

### 1. Utwórz plik `.env.local` w głównym katalogu projektu:

```env
# OpenAI API Key (wymagany do analizy faktur z AI)
OPENAI_API_KEY=sk-twój-klucz-api

# Hasło do strony faktur (twoje prywatne hasło)
FAKTURY_PASSWORD=twoje-bezpieczne-haslo

# Vercel Blob Token (wymagany do przechowywania faktur)
BLOB_READ_WRITE_TOKEN=vercel_blob_rw_...

# Email Configuration (dla formularza kontaktowego)
EMAIL_USER=twoj-email@gmail.com
EMAIL_PASS=twoje-haslo-aplikacji
```

### 2. Wklej swój klucz API OpenAI

Zastąp `sk-twój-klucz-api` swoim prawdziwym kluczem API.

## Jak używać

### Dodawanie faktur:

1. Otwórz stronę: `http://localhost:3000/faktury`
2. **Wpisz hasło** (które ustawiłeś w `.env.local` jako `FAKTURY_PASSWORD`)
3. Kliknij "Wybierz plik" i wybierz **jedno lub więcej** zdjęć/PDF faktur
   - Możesz zaznaczyć wiele plików jednocześnie (Ctrl+klik lub Shift+klik)
   - Wszystkie faktury zostaną przeanalizowane kolejno
4. Kliknij "Analizuj"
5. Poczekaj - AI automatycznie wyciągnie z każdej faktury:
   - Kwotę
   - Datę
   - Nazwę dostawcy
   - Kategorię wydatku
   - Numer faktury
   - Opis
6. Progress bar pokaże postęp analizy (np. "3/10")

### Usuwanie faktury:

1. W liście faktur znajdź fakturę, którą chcesz usunąć
2. Kliknij czerwony przycisk "Usuń" po prawej stronie
3. Potwierdź usunięcie w oknie dialogowym
4. Faktura zostanie usunięta wraz z plikiem z Vercel Blob

**Uwaga**: Usunięcie jest trwałe i nieodwracalne!

### Obsługiwane formaty:

- **Obrazy**: JPG, JPEG, PNG, WEBP
- **Dokumenty**: PDF

### Kategorie wydatków:

- Materiały
- Paliwo
- Energia
- Ubezpieczenia
- Wynagrodzenia
- Marketing
- Oprogramowanie
- Inne

## Funkcje

✅ **Ochrona hasłem** - strona faktur zabezpieczona hasłem
✅ **Batch upload** - możliwość uploadu wielu faktur jednocześnie
✅ Automatyczna analiza faktur za pomocą AI (GPT-4 Vision)
✅ Progress bar pokazujący postęp analizy
✅ Wyciąganie danych: kwota, data, dostawca, kategoria, numer, opis
✅ **Przechowywanie w chmurze** - Vercel Blob Storage (trwałe, nie zniknie)
✅ **Archiwizacja plików** - oryginalne PDF/zdjęcia faktur są zapisywane
✅ **Podgląd faktur** - możliwość obejrzenia oryginalnego pliku
✅ **Usuwanie faktur** - możliwość usunięcia błędnie dodanych faktur
✅ Podsumowanie kosztów według miesięcy
✅ Podsumowanie kosztów według kategorii
✅ Lista wszystkich faktur z sortowaniem
✅ Obsługa błędów - pokazuje które faktury się nie przeanalizowały

## Koszty

### OpenAI GPT-4 Vision:

- ~$0.01 za analizę jednej faktury
- 100 faktur ≈ $1
- Aktualne ceny: https://openai.com/pricing

## Troubleshooting

### Błąd: "Brak klucza API"

- Sprawdź, czy plik `.env.local` istnieje w głównym katalogu
- Upewnij się, że klucz zaczyna się od `sk-`
- Zrestartuj serwer deweloperski (`pnpm dev`)

### Błąd: "Nieprawidłowy typ pliku"

- Obsługiwane: JPG, PNG, WEBP, PDF
- Sprawdź rozszerzenie pliku

### Faktura się nie analizuje

- Sprawdź, czy zdjęcie jest wyraźne
- Upewnij się, że tekst na fakturze jest czytelny
- Spróbuj zrobić lepsze zdjęcie lub skan

### Dane nie zapisują się

- Dane są przechowywane w Vercel Blob Storage
- Sprawdź, czy `BLOB_READ_WRITE_TOKEN` jest poprawnie ustawiony w `.env.local`
- Sprawdź konsole przeglądarki (F12) czy są błędy API
- Upewnij się, że masz utworzony Blob Storage na Vercel

### Nie widzę zakładki "Zobacz plik"

- Zakładka pojawia się tylko dla faktur dodanych po wdrożeniu Vercel Blob
- Stare faktury (z localStorage) nie mają zapisanych plików

## Rozwój

### Planowane funkcje:

- [ ] Export do Excel/CSV
- [ ] Przechowywanie plików faktur w chmurze (Vercel Blob)
- [ ] Baza danych zamiast localStorage
- [ ] Edycja i usuwanie faktur
- [ ] Wykresy i statystyki
- [ ] Powiadomienia o zbliżających się terminach płatności
- [ ] Multi-user support z logowaniem

## Bezpieczeństwo

⚠️ **WAŻNE**:

- NIE commituj pliku `.env.local` do Git
- NIE udostępniaj swojego klucza API OpenAI
- NIE udostępniaj hasła do strony faktur (`FAKTURY_PASSWORD`)
- Jeśli klucz API wycieknie, natychmiast go zresetuj na OpenAI
- Hasło jest przechowywane w sesji przeglądarki (ważne do zamknięcia karty)
- Używaj silnego hasła do `FAKTURY_PASSWORD`

### Jak działa zabezpieczenie:

1. Strona `/faktury` wymaga hasła
2. Hasło jest sprawdzane przez API endpoint
3. Po poprawnym wpisaniu hasła, sesja jest zapisywana w `sessionStorage`
4. Sesja wygasa po zamknięciu karty/przeglądarki
5. Hasło NIGDY nie jest zapisywane w localStorage ani ciasteczkach

## Wsparcie

W razie pytań lub problemów:

- Email: kontakt@iso-dach.pl
- GitHub Issues: [link do repo]
