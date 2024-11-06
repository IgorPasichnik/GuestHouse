"use client";

import React from "react";
import Intro from "../components/intro";

export default function Pricing() {
  return (
    <>
      <Intro height={"h-3/4 justify-between"} />
      <div className="z-10 flex py-16 justify-center shadow-customUpShadow">
        <div className="px-4 w-5/6 max-w-[1500px] flex flex-col items-center gap-10">
          <h2 className="text-3xl">Цены на проживание</h2>
          <div>
            <table className="p-2 text-xl font-light text-left border-2 border-separate border-spacing-1 border-stone-300 rounded-lg bg-stone-100 shadow-xl">
              <tr>
                <th className="p-6">Категория номера</th>
                <th className="p-6">Кол-во мест</th>
                <th className="p-6">01.06 - 30.06</th>
                <th className="p-6">01.07 - 31.08</th>
                <th className="p-6">01.09 - 30.09</th>
              </tr>
              <tr>
                <td className="p-6 bg-stone-200">Стандарт 2-х местный</td>
                <td className="p-6 bg-stone-200">2</td>
                <td className="p-6 bg-stone-200">1100,0</td>
                <td className="p-6 bg-stone-200">1200,0</td>
                <td className="p-6 bg-stone-200">1100,0</td>
              </tr>
              <tr>
                <td className="p-6 bg-stone-200">Стандарт 3-х местный</td>
                <td className="p-6 bg-stone-200">3</td>
                <td className="p-6 bg-stone-200">1100,0</td>
                <td className="p-6 bg-stone-200">1200,0</td>
                <td className="p-6 bg-stone-200">1100,0</td>
              </tr>
              <tr>
                <td className="p-6 bg-stone-200">Стандарт 4-х местный</td>
                <td className="p-6 bg-stone-200">4</td>
                <td className="p-6 bg-stone-200">1100,0</td>
                <td className="p-6 bg-stone-200">1200,0</td>
                <td className="p-6 bg-stone-200">1100,0</td>
              </tr>
            </table>
            <p className="text-base mt-4">
              Проживание + завтрак(цены указаны с человека в сутки).
            </p>
          </div>

          <div className="w-full flex flex-col justify-between text-lg gap-6">
            <h3 className="text-xl">Также предоставляем услуги:</h3>
            <div className="w-full flex flex-col gap-1">
              <p>Бесплатное покрытие WI-FI.</p>
              <p>Автостоянка.</p>
              <p>Гладильная доска.</p>
              <p>Чайник на территории.</p>
              <p>Можно заказать завтрак, обед, ужин, чай, кофе.</p>
            </div>
            <h3 className="text-xl">
              ** Скидки распространяются на детей с минимум двумя взрослыми в
              номере (два места оплачиваются по полной стоимости). Скидки
              обсуждаются в телефонном режиме, так как каждый случай
              индивидуален.
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
