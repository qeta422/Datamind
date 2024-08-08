import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/carousel.css";
import Bi1 from "../assets/bi1.png";
import Bi2 from "../assets/bi2.png";
import Bi3 from "../assets/bi3.png";
import { SamplePrevArrow, SampleNextArrow } from "./Arrows";

export default function BiReports() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  };

  const slidesData = [
    {
      title: "Slide 1 Title",
      description:
        "This is the first slide description. This is the first slide description. This is the first slide description. This is the first slide description. This is the first slide description.",
      imageUrl: Bi1,
    },
    {
      title: "Slide 2 Title",
      description:
        "This is the second slide description. This is the second slide description. This is the second slide description. This is the second slide description. This is the second slide description.",
      imageUrl: Bi2,
    },
    {
      title: "Slide 3 Title",
      description:
        "This is the third slide description. This is the third slide description. This is the third slide description. This is the third slide description.",
      imageUrl: Bi3,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-[150px]">
      <Slider {...settings}>
        {slidesData.map((slide, index) => (
          <div key={index} className="!flex content-center !justify-between">
            <div className="p-[130px]">
              <h1 className="text-3xl font-bold mb-4">{slide.title}</h1>
              <p className="text-lg">{slide.description}</p>
            </div>
            <div className="p-4">
              <img src={slide.imageUrl} alt={slide.title} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
