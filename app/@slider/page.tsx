import Slider1 from "../../images/image1.jpg";
import Slider2 from "../../images/image2.jpg";
import Slider3 from "../../images/image3.webp";
import Slider4 from "../../images/image4.jpg";
import ImageSlider from "../../components/slider"
import sliderModule from "./slider.module.css"

export default function Slides() {
  const slides = [
    { url: Slider1, title: "Slide1" },
    { url: Slider2, title: "Slide2" },
    { url: Slider3, title: "Slide3" },
    { url: Slider4, title: "Slide4" },
  ];

  return (
    <>
      {" "}
      <div className={sliderModule.logoContainer}>
        <div className={sliderModule.innerContainer}>
          <div className={sliderModule.slider}>
            <ImageSlider slides={slides} />
          </div>
        </div>
      </div>
      
    </>
  );
}
