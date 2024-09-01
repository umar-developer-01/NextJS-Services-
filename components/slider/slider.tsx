"use client";
import { useState } from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { ArrowBigLeft , ArrowBigRight } from "lucide-react";
import slidesrStyles from "./slider.module.css";

interface Slide {
  url: string | StaticImageData;
  title: string;
}

interface Slides {
  slides: Slide[];
}

export default function ImageSlider({ slides }: Slides) {
  const [imageIndex, setimageIndex] = useState<number>(0);



  return (
    <>
    
      <Image src={slides[0].url} alt={"Image"} className={slidesrStyles.imageSize} />
      <button className={`${slidesrStyles.sliderButton} ${slidesrStyles.left}`}>
        <ArrowBigLeft/>
      </button>
      <button className={`${slidesrStyles.sliderButton} ${slidesrStyles.right}`}>
        <ArrowBigRight/>
      </button>
    </>
  );
}
