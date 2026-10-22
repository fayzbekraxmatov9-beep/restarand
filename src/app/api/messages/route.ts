import { NextResponse } from "next/server";
import { dbAll, dbRun } from "@/lib/db";

// GET /api/messages - Xabarlarni olish
export async function GET() {
  try {
    const messages = await dbAll("SELECT * FROM messages ORDER BY created_at DESC");
    return NextResponse.json({ success: true, data: messages });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// POST /api/messages - Yangi xabar yuborish
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, message } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { success: false, error: "Ism va telefon kiritilishi shart!" },
        { status: 400 }
      );
    }

    const result = await dbRun(
      `INSERT INTO messages (name, phone, message) VALUES (?, ?, ?)`,
      [name, phone, message || ""]
    );

    return NextResponse.json(
      {
        success: true,
        message: "Xabaringiz qabul qilindi!",
        messageId: result.lastID
      },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
