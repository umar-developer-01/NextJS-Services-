"use client";
import { useState } from "react";
import { StaticImageData } from "next/image";
import slidesrStyles from "./slider.module.css";

interface Slide {
  url: string | StaticImageData;
  title: string;
}

interface Slides {
  slides: Slide[];
}

export default function ImageSlider({ slides }: Slides) {
  const [currentIndex, setcurrentIndex] = useState<number>(0);

  const slideStyle = {
    backgroundImage: `url(${
      typeof slides[currentIndex].url === "string"
        ? slides[currentIndex].url
        : slides[currentIndex].url.src
    })`,
  };
  // go to the next slide
  const prev = () => {
    const isFirstSlide = currentIndex === 0;
    const newSlide = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setcurrentIndex(newSlide);
  };

  // go to the previous slide
  const next = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newSlide = isLastSlide ? 0 : currentIndex + 1;
    setcurrentIndex(newSlide);
  };

  // jump to the specific slide
  const goToSlide = (index:number) =>{
     setcurrentIndex(index)
  }

  return (
    <>
      <div className={slidesrStyles.slideContainer}>
        <div className={slidesrStyles.leftArrow} onClick={prev}>
          &#10094; {/* Left arrow */}
        </div>
        <div className={slidesrStyles.rightArrow} onClick={next}>
          &#10095; {/* Right arrow */}
        </div>
        <div className={slidesrStyles.slide} style={slideStyle}></div>

        <div className={slidesrStyles.dotContainer}>
          {slides.map((slide, index) => {
            return (
              <div
                key={index}
                className={`${slidesrStyles.innerDot} ${
                  currentIndex === index ? slidesrStyles.active : ""
                }`}
                onClick={()=>goToSlide(index)}
              ></div>
            );
          })}
        </div>
      </div>
    </>
  );
}
