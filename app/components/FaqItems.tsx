"use client";

import { useState } from "react";
import clsx from "clsx";
import SlideDown from "react-slidedown/lib/slidedown";
import "react-slidedown/lib/slidedown.css";

interface FaqItemQuestion {
  question: string;
  answer: string;
}
interface FaqItemProps {
  item: FaqItemQuestion;
  index: number;
}
const FaqItem = ({ item, index }: FaqItemProps) => {
  const [activeId, setActiveId] = useState(null);
  const active = activeId === item.id;
  return (
    <div className="relative z-2 mb-16">
      <div
        className="group relative flex cursor-pointer items-center justify-center gap-10 px-7"
        onClick={() => {
          setActiveId(activeId === item.id ? null : item.id);
        }}
      >
        <div className="flex-1">
          <div className="small-compact mb-1.5 text-p3 max-lg:hidden">
            {index < 10 ? "0" : ""}
            {index}
          </div>
          <div
            className={clsx(
              "h6 text-p4 transition-colors duration-100 max-md:min-h-20 max-md:items-center",
              active && "max-lg:text-p1",
            )}
          >
            {item.question}
          </div>
        </div>

        <div
          className={clsx(
            "faq-icon relative flex size-12 items-center justify-center rounded-full border-2 border-s2 shadow-400 transition-all duration-500 group-hover:border-s4",
            active && "before:bg-p1 after:rotate-0 after:bg-p1",
          )}
        >
          <div className="size-11/12 rounded-full shadow-300 g4" />
        </div>
      </div>

      <SlideDown>{activeId === item.id && <div>{item.answer}</div>}</SlideDown>
    </div>
  );
};
export default FaqItem;
