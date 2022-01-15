import React, { useState } from "react";
import { SliderData } from "./SliderData";
import Left from "../icons/left-arrow.png";
import Right from "../icons/right-arrow.png";


const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="flex justify-center items-center flex-col gap-2 p-8 md:p-10 lg:p-20 xl:p-24">
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt="travel image" className="image" />
            )}
          </div>
        );
      })}
      <div className="flex h-auto w-20 gap-5 lg:w-32">
        <a className="left-arrow" onClick={prevSlide}>
          <img src={Left} alt="" />
        </a>
        <a className="right-arrow" onClick={nextSlide}>
          <img src={Right} alt="" />
        </a>
      </div>
    </section>
  );
};

export default ImageSlider;
