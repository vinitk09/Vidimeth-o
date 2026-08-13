import Footer from "../components/Footer";
import Header from "../components/Header";
import OurDivisionsContent from "./OurDivisionsContent";

export const metadata = {
  title: "Our Divisions | Vidi Meth Digital Services",
  description:
    "Explore the specialized business divisions of Vidi Meth Digital Services across education, real estate, job recruitment, financial advisory, and retail e-commerce.",
};

export default function OurDivisionsPage() {
  return (
    <main className="overflow-x-hidden no-scrollbar bg-white pt-0">
      <Header />
      <OurDivisionsContent />
      <Footer />
    </main>
  );
}
