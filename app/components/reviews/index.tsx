import React from "react";
import CardReviews from "../cardReviews";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./custom.css";
import { dataReviews } from "./reviews";

function SampleNextArrow(props: any) {
  const { className, onClick } = props;
  return (
    <img src="/arrow-next-48.png" onClick={onClick} className={className} />
  );
}

function SamplePrevArrow(props: any) {
  const { className, onClick } = props;
  return (
    <img src="/arrow-back-48.png" onClick={onClick} className={className} />
  );
}

const Reviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    focusOnSelect: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <div className="flex justify-center">
        <hr className="w-5/6"></hr>
      </div>
      <div className=" 0 py-16 flex flex-col items-center gap-10">
        <h2 className="text-2xl">Отзывы</h2>
        <div className="w-5/6 max-w-[1500px] px-4">
          <Slider {...settings}>
            {dataReviews.map((dataReviews) => (
              <CardReviews
                key={dataReviews.id}
                description={dataReviews.description}
                name={dataReviews.name}
              />
            ))}
          </Slider>
        </div>
        <div className="flex flex-col items-center gap-4">
          <h3>Понравилось у нас?</h3>
          <Link href="https://yandex.ru/maps/?ll=33.609383%2C44.964184&mode=poi&poi%5Bpoint%5D=33.609494%2C44.963976&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D215222773190&tab=reviews&z=19">
            <button className="hover:border-greenYardDark hover:bg-greenYardDark hover:text-white  text-stone-700 py-2 px-6 border border-stone-400 bg-stone-300 rounded-full transition-all ease-in-out duration-500">
              Оставить отзыв
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Reviews;
