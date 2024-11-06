import { useState } from "react";
import bg from "../../../public/nikolaevka-foto1.jpg";
import { Playwrite_AU_QLD } from "next/font/google";

const playfair = Playwrite_AU_QLD({
  weight: ["400"],
});

const Intro = () => {
  return (
    <>
      <div
        className="z-0 py-16 bg-cover bg-no-repeat min-h-screen w-auto flex justify-center items-start"
        style={{
          backgroundImage: `url(${bg.src})`,
          textShadow: "4px 4px 60px #000000, -4px -4px 60px #000000",
        }}
      >
        <div className="flex flex-col justify-center items-center mt-48 gap-6">
          <img
            src="/logo.png"
            style={{ filter: "drop-shadow(4px 4px 60px #000000)" }}
            className="w-32 h-32"
            alt="logo"
          />
          <h1 className={`${playfair.className} text-6xl text-greenYardDark`}>
            GreenYard
          </h1>
        </div>
        {/* <div style={{ position: "sticky", zIndex: 999, top: "100px" }}>
          <div className="flex flex-col justify-center items-center mt-12 transition-all duration-300 ease-in-out">
            <button
              onClick={openModal}
              className="text-3xl text-white font-light border-4 rounded-full py-2 px-14 transition-all duration-300 ease-in-out hover:bg-greenYardDark hover:border-greenYardDark hover:scale-105 shadow-2xl"
            >
              Забронировать
            </button>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Intro;
