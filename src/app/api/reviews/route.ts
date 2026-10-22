import { NextResponse } from "next/server";
import { dbAll, dbRun } from "@/lib/db";

// GET /api/reviews - Barcha fikrlarni olish
export async function GET() {
  try {
    const reviews = await dbAll("SELECT * FROM reviews ORDER BY created_at DESC");
    return NextResponse.json({ success: true, data: reviews });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// POST /api/reviews - Yangi fikr qoldirish
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, role, comment, rating } = body;

    if (!name || !comment) {
      return NextResponse.json(
        { success: false, error: "Ism va fikr matni kiritilishi shart!" },
        { status: 400 }
      );
    }

    const result = await dbRun(
      `INSERT INTO reviews (name, role, comment, rating) VALUES (?, ?, ?, ?)`,
      [name, role || "Mehmon", comment, Number(rating) || 5]
    );

    return NextResponse.json(
      {
        success: true,
        message: "Fikringiz uchun tashakkur!",
        reviewId: result.lastID
      },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
