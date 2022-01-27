import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import Carousel from "react-multi-carousel";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    paritialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30,
  },
};
const images = [
  "https://i.ibb.co/pxVjkJf/hero-1.jpg",
  "https://i.ibb.co/dgWbFRY/hero-4.jpg",
  "https://i.ibb.co/HDpMptN/hero-2.png",
  "https://i.ibb.co/1fybS1S/hero-3.jpg",
];

const Hero = ({ deviceType, infinite, autoPlay }) => {
  return (
    <Carousel
      ssr
      deviceType={deviceType}
      itemClass="image-item"
      responsive={responsive}
      showDots={true}
      arrows={false}
      slidesToSlide={0}
      infinite={infinite}
      containerClass="carousel-container"
      autoPlay={autoPlay}
      autoPlaySpeed={3000}
    >
      {images.map((image, index) => {
        return (
          <div key={index} className="hero">
            <img draggable={false} alt="text" src={image} />
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "60%",
                bottom: "40%",
                color: "white",
                transform: " translateX(-50%)",
              }}
            >
              <h1>
                Where the <b>Journey Begins</b>
              </h1>
              <h6>
                Discover your next great <b>adventure</b>, become an{" "}
                <b>explorer</b> to get started!
              </h6>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
};

export default Hero;
