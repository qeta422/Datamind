import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../styles/carousel.css";
import Avatar1 from "../../../assets/avatar.png";
import Avatar2 from "../../../assets/avatar2.png";
import Avatar3 from "../../../assets/avatar3.png";
import { SamplePrevArrow, SampleNextArrow } from "./Arrows";

export default function TeamSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  };

  const teamData = [
    {
      name: "John Doe",
      role: "Developer",
      imageUrl: Avatar1,
    },
    {
      name: "Jane Smith",
      role: "Designer",
      imageUrl: Avatar2,
    },
    {
      name: "Alice Johnson",
      role: "Project Manager",
      imageUrl: Avatar3,
    },
  ];

  return (
    <div id="team" className="container mx-auto px-4 py-[250px] pb-[270px]">
      <h1 className="text-center pb-[130px]">Our Team</h1>
      <Slider {...settings}>
        {teamData.map((member, index) => (
          <div
            key={index}
            className="p-4 flex flex-col !items-center !content-center !justify-center"
          >
            <img
              src={member.imageUrl}
              alt={member.name}
              className="rounded-full w-32 h-32 mb-4 m-auto"
            />
            <h2 className="text-xl font-bold text-center">{member.name}</h2>
            <hr className="m-auto w-1/2 border-t-1 border-[#04B7A1] my-2" />
            <p className="text-gray-600 text-center">{member.role}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}
