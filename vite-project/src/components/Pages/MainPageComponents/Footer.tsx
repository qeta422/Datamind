import React from "react";
import Gdpr from "../../../assets/gdpr.png";

import {
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#283D63]">
      <article className="pt-[100px] w-[1550px] mx-auto flex justify-between">
        <aside>
          <h3 className="text-[#F8F7F7] pb-[20px]">Info</h3>
          <div className="text-[#F8F7F7] flex items-center gap-3">
            <FaPhone className="text-sm" />
            +995 599 41 30 16
          </div>
          <div className="text-[#F8F7F7] flex items-center gap-3">
            <FaEnvelope className="text-sm" />
            Info@datamind.ge
          </div>
        </aside>
        <aside>
          <h3 className="text-[#F8F7F7] pb-[20px]">
            In case of any complaint regarding the personal data
          </h3>
          <p className="text-[#F8F7F7] float-right">
            Contact us on the following email: sandrew@datamind.ge
          </p>
        </aside>
      </article>
      <article className="pt-[150px] pb-[50px] w-[1550px] mx-auto flex justify-between content-center">
        <img className="w-[150px]" src={Gdpr} alt="gdpr" />
        <div className="text-[#F8F7F7] w-[100px] flex justify-between pt-10 float-right">
          <a
            href="https://www.facebook.com/datamind.ge"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.linkedin.com/company/datamind-ge/mycompany/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <FaInstagram />
          </a>
        </div>
      </article>
    </footer>
  );
}
