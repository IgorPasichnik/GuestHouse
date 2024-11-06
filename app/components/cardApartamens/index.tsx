import React from "react";

const CardApartamens = ({ image }: any) => {
  return (
    <div className="py-8 px-10 bg-stone-100 w-[350px] h-[500px] rounded-xl hover:scale-105 hover:shadow-2xl border-2 border-stone-300 flex flex-col justify-between transition-all ease-in-out duration-500">
      <img src={image} className="rounded-xl object-cover h-[200px]" />
      <h3 className="text-xl">Name</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia,
        voluptatum atque animi id magni aliquam deserunt corrupti at pariatur
        laborum culpa.
      </p>
      <div className="flex justify-center">
        <button className="hover:border-greenYardDark hover:bg-greenYardDark hover:text-white  text-stone-700 py-2 px-6 border border-stone-400 bg-stone-300 rounded-full transition-all ease-in-out duration-500">
          Подробнее
        </button>
      </div>
    </div>
  );
};

export default CardApartamens;
