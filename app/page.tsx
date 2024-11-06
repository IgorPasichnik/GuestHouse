"use client";

import AboutUs from "./components/about-us";
import Intro from "./components/intro";
import OurApartamens from "./components/ourApartamens";
import Reviews from "./components/reviews";

import "overlayscrollbars/overlayscrollbars.css";

export default function Home() {
  return (
    <div className="relative">
      <Intro height={"min-h-screen justify-around"} />
      <AboutUs />
      <OurApartamens />
      <Reviews />
    </div>
  );
}
