import Footer from "../components/Footer";
import Header from "../components/Header";
import StatsCounterSection from "../components/StatsCounterSection";
import CareerContent from "./CareerContent";

export const metadata = {
  title: "Careers | Vidi Meth Digital Services",
  description:
    "Explore job openings and career opportunities at Vidi Meth Digital Services across digital marketing, software development, finance, and online education.",
};

export default function CareerPage() {
  return (
    <main className="overflow-x-hidden no-scrollbar bg-white pt-20">
      <Header />
      <CareerContent />
      <StatsCounterSection />
      <Footer />
    </main>
  );
}
