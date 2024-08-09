import React, { useEffect, useRef } from "react";
import mainIllustration from "../../../assets/main illustration.png";

export default function Banner() {
  const h1Ref = useRef(null);
  const pRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "animate-slideInFromBottom",
              "opacity-100"
            );
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (h1Ref.current) {
      observer.observe(h1Ref.current);
    }
    if (pRef.current) {
      observer.observe(pRef.current);
    }

    return () => {
      if (h1Ref.current) {
        observer.unobserve(h1Ref.current);
      }
      if (pRef.current) {
        observer.unobserve(pRef.current);
      }
    };
  }, []);

  return (
    <section
      id="home"
      className="flex w-[1550px] pt-[130px] m-auto justify-between"
    >
      <aside className="pt-[150px] pr-[160px]">
        <h1 ref={h1Ref} className="opacity-0">
          Your Data, AI & Analysis Partner
        </h1>
        <p ref={pRef} className="pt-3 text-xl opacity-0">
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
