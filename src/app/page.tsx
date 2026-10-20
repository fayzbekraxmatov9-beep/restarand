import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import AboutPreview from "@/components/AboutPreview";
import MenuPreview from "@/components/MenuPreview";
import FeaturesPreview from "@/components/FeaturesPreview";
import BookingFormSection from "@/components/BookingFormSection";
import ReviewsPreview from "@/components/ReviewsPreview";

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 font-sans selection:bg-amber-500 selection:text-stone-950 flex flex-col">
      <Navbar />

      <main className="flex-1">
        <HeroSection />
        <AboutPreview />
        <MenuPreview />
        <FeaturesPreview />
        <BookingFormSection />
        <ReviewsPreview />
      </main>

      <Footer />
    </div>
  );
}
