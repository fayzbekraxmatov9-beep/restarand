import { NextResponse } from "next/server";
import { dbAll, dbRun } from "@/lib/db";

// GET /api/bookings - Barcha band qilingan stollarni olish
export async function GET() {
  try {
    const bookings = await dbAll("SELECT * FROM bookings ORDER BY created_at DESC");
    return NextResponse.json({ success: true, data: bookings });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// POST /api/bookings - Yangi stol band qilish
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, guests, date, time, roomType, comment } = body;

    if (!name || !phone || !date) {
      return NextResponse.json(
        { success: false, error: "Ism, telefon va sana kiritilishi shart!" },
        { status: 400 }
      );
    }

    const result = await dbRun(
      `INSERT INTO bookings (name, phone, guests, date, time, room_type, comment) 
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        name,
        phone,
        guests || "2",
        date,
        time || "19:00",
        roomType || "oddiy",
        comment || ""
      ]
    );

    return NextResponse.json(
      {
        success: true,
        message: "Stol muvaffaqiyatli band qilindi!",
        bookingId: result.lastID
      },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
