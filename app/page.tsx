import React from "react";
import Header from "@/app/Sections/Header";
import Hero from "@/app/Sections/Hero";
import Features from "@/app/Sections/Features";
import Pricing from "@/app/Sections/Pricing";
import Faq from "@/app/Sections/Faq";
import Testmonials from "@/app/Sections/Testmonials";
import Download from "@/app/Sections/Download";

const Home = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Faq />
      <Testmonials />
      <Download />
    </main>
  );
};
export default Home;
