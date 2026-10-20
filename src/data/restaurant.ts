export interface MenuItem {
  id: number;
  name: string;
  category: "milliy" | "kabob" | "desert" | "ichimlik";
  price: string;
  desc: string;
  badge?: string;
  image: string;
}

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "To'y Oshi (Maxsus)",
    category: "milliy",
    price: "48 000 so'm",
    desc: "Lazer guruch, barra qo'zichoq go'shti, sariq sabzi, mayiz va bedana tuxumi bilan bezatilgan shohona osh.",
    badge: "Xit Taom",
    image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Qozon Kabob",
    category: "milliy",
    price: "72 000 so'm",
    desc: "Qovurilgan tilla tusli kartoshka va og'izda eriydigan barra mol go'shti, yangi shivit va piyoz.",
    badge: "Oshpaz tavsiyasi",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Qo'y Go'shtidan Lulya Kabob",
    category: "kabob",
    price: "24 000 so'm",
    desc: "Manga'lda pista ko'mirida pishirilgan shirali lulya kabob, xushbo'y zira va rayhon bilan.",
    badge: "Mashhur",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Gijduvoncha Jigar Kabob",
    category: "kabob",
    price: "22 000 so'm",
    desc: "Yupqa dumba yog'i bilan o'ralgan barra jigar, qovurilgan pomidor va yangi piyoz.",
    image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 5,
    name: "Qaymoqli Medovik Torti",
    category: "desert",
    price: "32 000 so'm",
    desc: "Tabiiy tog' asali va muloyim smetana kremi bilan tayyorlangan nozik shirinlik.",
    badge: "Yangi",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 6,
    name: "Sharqona Chizkeyk",
    category: "desert",
    price: "36 000 so'm",
    desc: "Pista va pista sousi bilan bezatilgan klassik krem-pishloqli San-Sebastian chizkeyki.",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 7,
    name: "Tog' Giyohlari Choyi",
    category: "ichimlik",
    price: "18 000 so'm",
    desc: "Chorvoq tog' yalpizi, limon o'ti, zarchoba va tabiiy asal bilan choynakda damlangan choy.",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 8,
    name: "Mavsumiy Sitrus Limonad",
    category: "ichimlik",
    price: "28 000 so'm",
    desc: "Yangi apelsin, laym sharbati, yalpiz barglari va gazlangan muzdek tog' buloq suvi.",
    badge: "Tetaklashtiruvchi",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800&auto=format&fit=crop"
  }
];

export interface ReviewItem {
  id: number;
  name: string;
  role: string;
  comment: string;
  rating: number;
}

export const reviewsData: ReviewItem[] = [
  {
    id: 1,
    name: "Alisher Rustamov",
    role: "Doimiy Mehmon",
    comment: "Toshkentda bunday lazzatli qozon kabob va yumshoq shashlikni kam uchratasiz. Xizmat ko'rsatish tezligi va ofitsiantlarning xushmuomalaligi a'lo darajada!",
    rating: 5
  },
  {
    id: 2,
    name: "Nodira Karimova",
    role: "Oila bekasi",
    comment: "Oilamiz bilan dam olish kunlari doim shu yerda kechki ovqatlanamiz. Bolalar uchun alohida qulayliklar bor, atmosferasi esa nihoyatda tinch va samimiy.",
    rating: 5
  },
  {
    id: 3,
    name: "Jasur Bek",
    role: "Tadbirkor",
    comment: "Hamkorlarimiz bilan biznes tushliklarini shu restoranda o'tkazamiz. VIP xonalari juda qulay va ovoz o'tkazmaydi. Taomlarining sifati har safar bir xil yuqori.",
    rating: 5
  },
  {
    id: 4,
    name: "Dilnoza Shokirova",
    role: "Food Blogger",
    comment: "Har bir taomning taqdimoti va estetikasi fotosuratlar uchun ideal! Ayniqsa to'y oshi va pista chizkeykiga gap bo'lishi mumkin emas.",
    rating: 5
  },
  {
    id: 5,
    name: "Bobur Usmonov",
    role: "Mehmon",
    comment: "Restorandagi jonli musiqa va milliy cholg'u kuylari kayfiyatni ko'taradi. Mazali taomlar bilan birga haqiqiy dam olish hissi paydo bo'ladi.",
    rating: 5
  },
  {
    id: 6,
    name: "Malika Yusupova",
    role: "Tadbir tashkilotchisi",
    comment: "Tug'ilgan kun kechasini shu yerda o'tkazdik. Adminstrator va ofitsiantlar juda mas'uliyat bilan qarashdi. Hamma mehmonlar xursand bo'lib ketishdi.",
    rating: 5
  }
];
