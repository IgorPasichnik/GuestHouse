import React from "react";

const ContactsInformation = () => {
  return (
    <div className="z-10 flex py-16 justify-center shadow-customUpShadow">
      <div className="px-4 w-5/6 max-w-[1500px] flex flex-col items-center gap-10">
        <h2 className="text-3xl">Местоположение и контактная информация</h2>
        <div className="flex w-full">
          <div className="bg-orange-100 w-3/5 h-[800px]"></div>
          <div className="pl-20 flex flex-col items-center justify-between text-lg">
            <div className="w-full flex flex-col gap-3">
              <h3 className="text-xl">Электронная почта</h3>
              <p>ya@ya.com</p>
            </div>
            <div className="w-full flex flex-col gap-3">
              <h3 className="text-xl">Телефоны</h3>
              <p>+7978-777-77-77</p>
            </div>
            <div className="w-full flex flex-col gap-3">
              <h3 className="text-xl">Адрес:</h3>
              <p>Николаевка, ...</p>
            </div>
            <div className="w-full flex flex-col gap-3">
              <h3 className="text-xl">Время работы</h3>
              <p>Круглосуточно</p>
            </div>
            <div className="w-full flex flex-col gap-3">
              <h3 className="text-xl">Наши соц. сети</h3>
              <div className="w-full flex flex-col gap-1">
                <p>Telegram</p>
                <p>Вконтакте</p>
                <p>Viber</p>
                <p>Whatsapp</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsInformation;
