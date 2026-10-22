import sqlite3 from "sqlite3";
import path from "path";
import fs from "fs";

// Create data directory if not exists
const dataDir = path.join(process.cwd(), "data");
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const dbPath = path.join(dataDir, "restaurant.db");

// Initialize Database connection
export const db = new sqlite3.Database(dbPath);

// Initialize Tables
export function initDB() {
  db.serialize(() => {
    // 1. Bookings table (Stol band qilish)
    db.run(`
      CREATE TABLE IF NOT EXISTS bookings (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        phone TEXT NOT NULL,
        guests TEXT NOT NULL,
        date TEXT NOT NULL,
        time TEXT NOT NULL,
        room_type TEXT DEFAULT 'oddiy',
        comment TEXT,
        status TEXT DEFAULT 'kutilmoqda',
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // 2. Reviews table (Fikr-mulohazalar)
    db.run(`
      CREATE TABLE IF NOT EXISTS reviews (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        role TEXT DEFAULT 'Mehmon',
        comment TEXT NOT NULL,
        rating INTEGER NOT NULL DEFAULT 5,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // 3. Contact Messages table (Xabarlar)
    db.run(`
      CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        phone TEXT NOT NULL,
        message TEXT,
        status TEXT DEFAULT 'yangi',
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Seed default reviews if empty
    db.get("SELECT COUNT(*) as count FROM reviews", (err, row: any) => {
      if (!err && row && row.count === 0) {
        const stmt = db.prepare("INSERT INTO reviews (name, role, comment, rating) VALUES (?, ?, ?, ?)");
        stmt.run("Alisher Rustamov", "Doimiy Mehmon", "Toshkentda bunday lazzatli qozon kabob va yumshoq shashlikni kam uchratasiz. Xizmat ko'rsatish tezligi a'lo darajada!", 5);
        stmt.run("Nodira Karimova", "Oila bekasi", "Oilamiz bilan dam olish kunlari doim shu yerda kechki ovqatlanamiz. Bolalar uchun alohida qulayliklar bor.", 5);
        stmt.run("Jasur Bek", "Tadbirkor", "Hamkorlarimiz bilan biznes tushliklarini shu restoranda o'tkazamiz. VIP xonalari juda qulay va ovoz o'tkazmaydi.", 5);
        stmt.finalize();
      }
    });
  });
}

// Call on startup
initDB();

// Helper Promisified DB methods
export function dbAll<T = any>(query: string, params: any[] = []): Promise<T[]> {
  return new Promise((resolve, reject) => {
    db.all(query, params, (err, rows) => {
      if (err) reject(err);
      else resolve(rows as T[]);
    });
  });
}

export function dbRun(query: string, params: any[] = []): Promise<{ lastID: number; changes: number }> {
  return new Promise((resolve, reject) => {
    db.run(query, params, function (err) {
      if (err) reject(err);
      else resolve({ lastID: this.lastID, changes: this.changes });
    });
  });
}
