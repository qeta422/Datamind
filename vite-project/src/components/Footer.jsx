import React from "react";
import Gdpr from "../assets/gdpr.png";
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#283D63]">
      <article className="pt-[100px] w-[1550px] mx-auto flex justify-between">
        <aside>
          <h3 className="text-[#F8F7F7] pb-[20px]">Info</h3>
          <p className="text-[#F8F7F7]">+995 599 41 30 16</p>
          <p className="text-[#F8F7F7]">Info@datamind.ge</p>
        </aside>
        <aside>
          <h3 className="text-[#F8F7F7] pb-[20px]">
            In case of any complaint regarding the personal data
          </h3>
          <p className="text-[#F8F7F7]">
            Contact us on the following email: sandrew@datamind.ge
          </p>
        </aside>
      </article>
      <article className="pt-[150px] pb-[50px] w-[1550px] mx-auto flex justify-between content-center">
        <img className="w-[150px]" src={Gdpr} alt="gdpr" />
        <div className="text-[#F8F7F7] w-[100px] flex justify-between pt-10 float-right">
          <FaFacebookF />
          <FaLinkedinIn />
          <FaYoutube />
          <FaInstagram />
        </div>
      </article>
    </footer>
  );
}
