import CardApartamens from "../cardApartamens";

const OurApartamens = () => {
  return (
    <div className="flex justify-center">
      <div className="w-5/6 max-w-[1500px] py-16 px-4 flex flex-col items-center gap-20">
        <h1 className="text-2xl">Наши номера</h1>
        <div className="w-full flex justify-between">
          <CardApartamens image="/room1.png"></CardApartamens>
          <CardApartamens image="/room2.png"></CardApartamens>
          <CardApartamens image="/room3.png"></CardApartamens>
        </div>
      </div>
    </div>
  );
};

export default OurApartamens;
