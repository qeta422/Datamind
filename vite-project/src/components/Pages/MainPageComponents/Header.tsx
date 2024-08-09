import React, { useEffect, useState } from "react";
import pixelcutExport from "../../../assets/pixelcut-export.png";

const Header = () => {
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full h-[130px] fixed top-0 z-50 bg-[#F8F7F7] transition-shadow duration-300 ${
        shadow ? "shadow-lg" : ""
      }`}
    >
      <nav className="flex w-[1550px] py-[33px] m-auto items-center justify-between">
        <aside>
          <a href="#home">
            <img
              className="w-[150px]"
              src={pixelcutExport}
              alt="Pixelcut Export"
            />
          </a>
        </aside>
        <aside>
          <ul className="flex w-[500px] items-center justify-end">
            <li className="px-5 hover:border-b border-solid border-customGreen transition duration-500">
              <a href="#home">Home</a>
            </li>
            <li className="px-5 hover:border-b border-solid border-customGreen ">
              <a href="#services">Services</a>
            </li>
            <li className="px-5 hover:border-b border-solid border-customGreen ">
              <a href="#customers">Customers</a>
            </li>
            <li className="px-5 hover:border-b border-solid border-customGreen ">
              <a href="#team">Team</a>
            </li>
            <button
              className="w-[100px] h-[40px] rounded-lg py-2 px-4 text-base font-medium bg-[#283D63] hover:bg-[#04B7A1] transition-colors duration-300 ease-in-out cursor-pointer text-[#F8F7F7] ml-5"
              type="button"
            >
              Contact us
            </button>
          </ul>
        </aside>
      </nav>
    </header>
  );
};

export default Header;
