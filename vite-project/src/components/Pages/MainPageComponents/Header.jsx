import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import pixelcutExport from "../../../assets/pixelcut-export.png";
import popupImg from "../../../assets/popupimg.jpg";

const Header = () => {
  const [shadow, setShadow] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [nameFocused, setNameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

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

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  function setLocalStorageItem(key, value) {
    if (typeof key === "string" && typeof value === "string") {
      localStorage.setItem(key, value);
    } else {
      console.error("Both key and value must be strings.");
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setLocalStorageItem("contactEmail", email);
    setLocalStorageItem("name", name);

    setName("");
    setEmail("");

    closeModal();
  };

  const isHomePage = location.pathname === "/";

  const handleNavigation = (sectionId) => {
    if (isHomePage) {
      document.querySelector(sectionId).scrollIntoView({ behavior: "smooth" });
    } else {
      setLocalStorageItem("scrollToSection", sectionId);
      navigate("/");
    }
  };

  return (
    <>
      <header
        className={`w-full h-[130px] fixed top-0 z-50 bg-[#F8F7F7] transition-shadow duration-300 ${
          shadow ? "shadow-lg" : ""
        }`}
      >
        <nav className="flex w-[1550px] py-[33px] m-auto items-center justify-between">
          <aside>
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation("#home");
              }}
            >
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
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation("#home");
                  }}
                >
                  Home
                </a>
              </li>
              <li className="px-5 hover:border-b border-solid border-customGreen ">
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation("#services");
                  }}
                >
                  Services
                </a>
              </li>
              <li className="px-5 hover:border-b border-solid border-customGreen ">
                <a
                  href="#customers"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation("#customers");
                  }}
                >
                  Customers
                </a>
              </li>
              <li className="px-5 hover:border-b border-solid border-customGreen ">
                <a
                  href="#team"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation("#team");
                  }}
                >
                  Team
                </a>
              </li>
              <button
                className="w-[100px] h-[40px] rounded-lg py-2 px-4 text-base font-medium bg-[#283D63] hover:bg-[#04B7A1] transition-colors duration-300 ease-in-out cursor-pointer text-[#F8F7F7] ml-5"
                type="button"
                onClick={openModal}
              >
                Contact us
              </button>
            </ul>
          </aside>
        </nav>
      </header>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg p-6 w-[80%] max-w-[800px] flex justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-1/2">
              <h2 className="text-2xl font-semibold mb-8 mt-5">Contact Us</h2>
              <form onSubmit={handleSubmit}>
                <div className="relative mb-4">
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={`mt-1 block w-full border-transparent border-b-[1px] border-b-[#04B7A1] shadow-sm p-2 pt-6 focus:border-transparent focus:border-b-[2px] focus:border-b-customGreen focus:outline-none placeholder-transparent`}
                    onFocus={() => setNameFocused(true)}
                    onBlur={() => setNameFocused(false)}
                    placeholder="Name"
                  />
                  <label
                    htmlFor="name"
                    className={`absolute left-2 top-[18px] transition-all duration-300 ease-in-out text-gray-400 ${
                      nameFocused || name
                        ? "-translate-y-4 scale-75 text-customGreen"
                        : ""
                    }`}
                  >
                    Name
                  </label>
                </div>
                <div className="relative mb-4">
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`mt-1 block w-full border-transparent border-b-[1px] border-b-[#04B7A1] shadow-sm p-2 pt-6 focus:border-transparent focus:border-b-[2px] focus:border-b-customGreen focus:outline-none placeholder-transparent`}
                    onFocus={() => setEmailFocused(true)}
                    onBlur={() => setEmailFocused(false)}
                    placeholder="Email"
                  />
                  <label
                    htmlFor="email"
                    className={`absolute left-2 top-[18px] transition-all duration-300 ease-in-out text-gray-400 ${
                      emailFocused || email
                        ? "-translate-y-4 scale-75 text-customGreen"
                        : ""
                    }`}
                  >
                    Email
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#283D63] text-white rounded-md py-2 mt-4 hover:bg-[#04B7A1] transition-colors duration-300"
                >
                  Submit
                </button>
              </form>
            </div>
            <div>
              <img
                src={popupImg}
                alt="Contact Us Image"
                className="w-[700px] h-[300px] pl-[70px] object-cover"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
