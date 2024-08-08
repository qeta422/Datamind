import React, { useEffect, useRef } from "react";
import Problem from "../assets/problem.png";
import Solution from "../assets/solution.png";
import Result from "../assets/result.png";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function ProblemCards() {
  const cardRefs = useRef([]);

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

    cardRefs.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => {
      if (cardRefs.current) {
        cardRefs.current.forEach((card) => {
          if (card) {
            observer.unobserve(card);
          }
        });
      }
    };
  }, []);

  return (
    <section className="flex w-[1550px] my-[150px] mx-auto justify-between">
      {[
        {
          img: Problem,
          alt: "Problem",
          title: "The Problem",
          text: "Modern enterprises struggle to store, gather, manage, and analyze their data. Existing solutions are limited, slow, and suffer bottlenecks due to antiquated designs and outdated tech.",
          mt: "mt-[100px]",
        },
        {
          img: Solution,
          alt: "Solution",
          title: "The Solution",
          text: "Datamind has pioneered UniStream technology, which takes disparate data sources and combines them into a single, unified data stream. This makes it much easier, faster, and less costly to access, analyze, and automate data within complex environments.",
          mt: "mt-[50px]",
        },
        {
          img: Result,
          alt: "Result",
          title: "The Result",
          text: "Automate processes across your entire organization and between departments. Speed up internal processes & decision making with real-time data access. Generate internal and regulatory reports on the fly across all historical data from any source.",
          mt: "",
        },
      ].map((card, index) => (
        <article
          key={index}
          ref={(el) => (cardRefs.current[index] = el)}
          className="opacity-0 rounded-3xl bg-transparent pt-[35px] w-[400px] h-[500px] hover:shadow-custom transition-shadow duration-300 ease-in-out"
        >
          <article className="px-[50px] flex justify-between">
            <aside>
              <img className="w-[100px] p-0" src={card.img} alt={card.alt} />
            </aside>
            <aside>
              <h3 className="p-7">{card.title}</h3>
            </aside>
          </article>
          <div className="px-[50px] py-10">
            <p>{card.text}</p>
            <FaLongArrowAltRight
              size={25}
              className={`text-[#04B7A1] ${card.mt}`}
            />
          </div>
        </article>
      ))}
    </section>
  );
}
