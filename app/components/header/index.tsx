"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import "./links.css";

const Header = () => {
  const [isShrunk, setIsShrunk] = useState(false);

  const handleScroll = () => {
    const isScrolling = window.scrollY > window.screen.height - 200;
    setIsShrunk(isScrolling);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isShrunk]);

  return (
    <div className="h-auto w-full flex justify-center">
      <header
        className={`${
          isShrunk ? "h-[40px] text-xs" : "h-[60px] text-base"
        } z-50 flex flex-col items-center justify-center bg-stone-800 text-white fixed left-0 right-0 top-0 shadow-customDownShadow transition-all duration-300 ease-in-out`}
      >
        <nav className="w-5/6 py-2 px-4 max-w-[1500px] flex justify-between">
          <Link href="/" className={`${isShrunk ? "h-[25px]" : "h-[40px]"}`}>
            <button>
              <img
                src="/logo.png"
                alt="logo"
                className={`${
                  isShrunk ? "h-[25px]" : "h-[40px]"
                } transition-all duration-300 ease-in-out`}
              />
            </button>
          </Link>

          <ul className="flex items-center space-x-5">
            <Link href="/" className="relative linkss">
              О нас
            </Link>
            <div className={`px-2 ${isShrunk ? "separator" : "separator2"}`} />
            <Link href="/" className="relative linkss">
              Номера
            </Link>
            <div className={`px-2 ${isShrunk ? "separator" : "separator2"}`} />
            <Link href="/" className="relative linkss">
              Отзывы
            </Link>
            <div className={`px-2 ${isShrunk ? "separator" : "separator2"}`} />
            <Link href="/pricing" className="relative linkss">
              Цены
            </Link>
            <div className={`px-2 ${isShrunk ? "separator" : "separator2"}`} />
            <Link href="/contacts" className="relative linkss">
              Контакты
            </Link>
          </ul>
        </nav>

        <button
          className={`${
            isShrunk
              ? "fixed scale-50 border-white text-white hover:text-white"
              : "scale-75 border-stone-800 text-stone-800 invisible"
          } absolute flex flex-col items-center text-3xl font-light border-4 rounded-full py-2 px-14 transition-all duration-300 ease-in-out hover:bg-greenYardDark hover:border-greenYardDark `}
        >
          Забронировать
        </button>
      </header>
      {/* <button
        className={`${
          isShrunk
            ? ""
            : "scale-100 top-[80%] text-white hover:scale-105 shadow-2xl"
        } z-40 absolute flex flex-col items-center text-3xl font-light border-4 rounded-full py-2 px-14 transition-all duration-300 ease-in-out hover:bg-greenYardDark hover:border-greenYardDark `}
      >
        Забронировать
      </button> */}
    </div>
  );
};

export default Header;
