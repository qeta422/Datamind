import React from "react";
import mainIllustration from "../assets/main illustration.png";

export default function Banner() {
  return (
    <section className="flex w-[1550px] m-auto justify-between">
      <aside className="pt-[150px] pr-[160px]">
        <h1>Your Data, AI & Analysis  Partner</h1>
        <p className="pt-3 text-xl">
          Let Datamind help you along with your data transformation with our top
          quality enterprise solutions
        </p>
      </aside>
      <aside>
        <img
          className="w-[830px] pt-[190px]"
          src={mainIllustration}
          alt="main illustration"
        />
      </aside>
    </section>
  );
}
