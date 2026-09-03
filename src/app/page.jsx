'use client';

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import Services from "../components/Services";
import CoreValues from "../components/CoreValues";
import Specialists from "../components/Specialists";
import AdvancedTechnology from "../components/AdvancedTechnology";
import BookAppointment from "../components/BookAppointment";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#0c2752] flex flex-col">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <Services />
      <CoreValues />
      <Specialists />
      <AdvancedTechnology />
      <BookAppointment />
      <Footer />
    </main>
  );
}
