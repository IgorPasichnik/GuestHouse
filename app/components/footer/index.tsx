import Link from "next/link";
import React from "react";
import "./links.css";
import { Playwrite_AU_QLD } from "next/font/google";

const playfair = Playwrite_AU_QLD({
  weight: ["400"],
});

const Footer = () => {
  return (
    <>
      <div>
        <hr className="w-5/6"></hr>
      </div>
      <footer className="h-36 flex justify-center bg-stone-200 shadow-customUpShadow">
        <nav className="w-5/6 py-2 px-4 max-w-[1500px] flex justify-between">
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="logo"
              className="w-[40px] transition-all duration-300 ease-in-out"
            />
            <h1 className={`${playfair.className} text-xl text-greenYardDark`}>
              GreenYard
            </h1>
          </div>

          <ul className="flex items-center space-x-5">
            <Link href="/" className="relative links">
              О нас
            </Link>
            <Link href="/" className="relative links">
              Номера
            </Link>
            <Link href="/" className="relative links">
              Отзывы
            </Link>
            <Link href="/" className="relative links">
              Цены
            </Link>
            <Link href="/" className="relative links">
              Контакты
            </Link>
          </ul>

          <ul className="flex items-center space-x-5">
            <Link href="https://vk.com/green_yard_crimea">
              <div className="vk" />
            </Link>

            <li>
              <Link href="https://t.me/GreenYardCrimea">
                <div className="telegram" />
              </Link>
            </li>
            <li>
              <Link href="viber://chat?number=%2B9787106813">
                <div className="viber" />
              </Link>
            </li>
            <li>
              <Link href="https://wa.me/+79787106813">
                <div className="whatsapp" />
              </Link>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
