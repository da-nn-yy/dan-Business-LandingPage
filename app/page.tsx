import React from "react";
import Header from "@/app/Sections/Header";
import Hero from "@/app/Sections/Hero";
import Features from "@/app/Sections/Features";
import Pricing from "@/app/Sections/Pricing";

const Home = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Pricing />
    </main>
  );
};
export default Home;
