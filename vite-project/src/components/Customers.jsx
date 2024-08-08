import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/carousel.css";
import logo1 from "../assets/logo1.webp";
import logo2 from "../assets/logo2.webp";
import logo3 from "../assets/logo3.webp";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo4.webp";
import logo6 from "../assets/logo5.png";

export default function Customers() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [textOpacity, setTextOpacity] = useState(1);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (oldIndex, newIndex) => {
      setTextOpacity(0); // Start fading out text
      setTimeout(() => {
        setCurrentSlide(newIndex);
        setTextOpacity(1); // Fade in new text
      }, 500); // Match this to the CSS transition duration
    },
  };

  const slidesData = [
    {
      imageUrl: logo1,
      text: "Modern enterprises struggle to store, gather, manage, and analyze their data. Existing solutions are limited, slow, and suffer bottlenecks due to antiquated designs and outdated tech. Modern enterprises struggle to store, gather, manage, and analyze their data. Existing solutions are limited, slow, and suffer bottlenecks due to antiquated designs and outdated tech.",
    },
    {
      imageUrl: logo2,
      text: "Datamind has pioneered UniStream technology, which takes disparate data sources and combines them into a single, unified data stream. This makes it much easier, faster, and less costly to access, analyze, and automate data within complex environments. Datamind has pioneered UniStream technology, which takes disparate data sources and combines them into a single, unified data stream. This makes it much easier, faster, and less costly .",
    },
    {
      imageUrl: logo3,
      text: "Automate processes across your entire organization and between departments. Speed up internal processes & decision making with real-time data access. Generate internal and regulatory reports on the fly across all historical data from any source.",
    },
    {
      imageUrl: logo4,
      text: "Modern enterprises struggle to store, gather, manage, and analyze their data. Existing solutions are limited, slow, and suffer bottlenecks due to antiquated designs and outdated tech. Modern enterprises struggle to store, gather, manage, and analyze their data. Existing solutions are limited, slow, and suffer bottlenecks due to antiquated designs and outdated tech. Automate processes across your entire organization and between departments. Speed up internal processes . ",
    },
    {
      imageUrl: logo5,
      text: "Datamind has pioneered UniStream technology, which takes disparate data sources and combines them into a single, unified data stream. This makes it much easier, faster, and less costly to access, analyze, and automate data within complex environments. Datamind has pioneered UniStream technology, which takes disparate data sources and combines them into a single, unified data stream. This makes it much easier, faster, and less costly to access, analyze.",
    },
    {
      imageUrl: logo6,
      text: "Automate processes across your entire organization and between departments. Speed up internal processes & decision making with real-time data access. Generate internal and regulatory reports on the fly across all historical data from any source. Automate processes across your entire organization and between departments. Speed up internal processes & decision making with real-time data access. Generate internal and regulatory reports on the fly across.",
    },
  ];

  return (
    <div id="customers" className="container mx-auto px-4 py-[170px]">
      <Slider {...settings}>
        {slidesData.map((slide, index) => (
          <div key={index} className="!flex !content-center !items-center px-2">
            <img
              className="w-[150px] grayscale h-[100px] object-contain"
              src={slide.imageUrl}
              alt={`slide-${index}`}
            />
          </div>
        ))}
      </Slider>
      <article className="flex w-[1550px] m-auto">
        <div className="m-auto mt-[100px] rounded-3xl bg-transparent pt-[35px] w-[600px] h-[400px] shadow-custom">
          <p
            className={`p-[50px] transition-opacity duration-500 ease-in-out ${
              textOpacity === 0 ? "opacity-0" : "opacity-100"
            }`}
          >
            {slidesData[currentSlide].text}
          </p>
        </div>
      </article>
    </div>
  );
}
