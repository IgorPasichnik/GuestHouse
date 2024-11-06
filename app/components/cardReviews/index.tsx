import React, { useRef } from "react";
import "./custom.css";
import useScrollbar from "@/app/hooks/use-scrollbar";

// interface ScrollWrapper {
//   root: any;
//   hasScroll: boolean;
// }

type NameDesk = {
  key: number;
  description: string;
  name: string;
};

const CardReviews = ({ key, description, name }: NameDesk) => {
  const isMobile = matchMedia("(max-width: 768px)");
  const wrapper = useRef<HTMLDivElement>(null);
  const hasScroll = !isMobile.matches;

  useScrollbar({ root: wrapper, hasScroll });

  return (
    <div className="bg-stone-800 rounded-2xl text-white px-6 py-8 flex flex-col justify-between w-[380px] h-[300px] my-5 mx-auto border-stone-100">
      <p
        ref={wrapper}
        className="text-justify h-[200px] overflow-auto px-[10px]"
      >
        {description}
      </p>

      <div className="triangle" />
      <h3 className="font-medium text-end uppercase h-[24px]">{name}</h3>
    </div>
  );
};

export default CardReviews;
