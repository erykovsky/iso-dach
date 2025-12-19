import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { password } = await req.json();

    // Pobierz hasło z zmiennych środowiskowych
    const correctPassword = process.env.FAKTURY_PASSWORD;

    if (!correctPassword) {
      console.error("FAKTURY_PASSWORD nie jest ustawione w .env");
      return NextResponse.json(
        { success: false, error: "Brak konfiguracji hasła" },
        { status: 500 }
      );
    }

    // Sprawdź hasło
    if (password === correctPassword) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { success: false, error: "Nieprawidłowe hasło" },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error("Błąd weryfikacji hasła:", error);
    return NextResponse.json(
      { success: false, error: "Błąd serwera" },
      { status: 500 }
    );
  }
}
