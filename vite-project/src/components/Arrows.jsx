import React from "react";

const SamplePrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      onClick={onClick}
      className={`arrow ${className} bg-transparent border-none p-2 w-12 h-12 flex items-center justify-center z-10`}
    >
      <i className="fas fa-chevron-left p-10 text-[#04B7A1] text-2xl"></i>
    </div>
  );
};

const SampleNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      onClick={onClick}
      className={`arrow ${className} bg-transparent border-none p-2 w-12 h-12 flex items-center justify-center z-10`}
    >
      <i className="fas fa-chevron-right p-10 text-[#04B7A1] text-2xl"></i>
    </div>
  );
};

export { SamplePrevArrow, SampleNextArrow };
