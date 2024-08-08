import React, { useEffect, useRef, useMemo } from "react";
import Colleagues from "../assets/colleagues.jpg";
import Business from "../assets/business.jpg";

export default function News() {
  const articlesRef = useRef([]);

  const observer = useMemo(
    () =>
      new IntersectionObserver(
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
      ),
    []
  );

  useEffect(() => {
    articlesRef.current.forEach((article) => {
      if (article) {
        observer.observe(article);
      }
    });

    return () => {
      articlesRef.current.forEach((article) => {
        if (article) {
          observer.unobserve(article);
        }
      });
    };
  }, [observer]);

  return (
    <section className="w-[1550px] mx-auto">
      <h1 className="text-center p-[100px]">News</h1>
      <article
        ref={(el) => (articlesRef.current[0] = el)}
        className="flex justify-between rounded-3xl bg-transparent opacity-0"
      >
        <aside>
          <img
            src={Colleagues}
            alt="Colleagues"
            className="w-[2900px] object-contain"
          />
        </aside>
        <aside className="px-[70px] py-[50px]">
          <h3>The Problem</h3>
          <span>05/10/2024</span>
          <p className="w-[700px] pt-7">
            Modern enterprises struggle to store, gather, manage, and analyze
            their data. Existing solutions are limited, slow, and suffer
            bottlenecks due to antiquated designs and outdated tech. Modern
            enterprises struggle to store, gather, manage, and analyze their
            data. Existing solutions are limited, slow, and suffer bottlenecks
            due to antiquated designs and outdated tech. Modern enterprises
            struggle to store, gather, manage, and analyze their data. Existing
            solutions are limited, slow, and suffer bottlenecks due to
            antiquated designs and outdated tech.
          </p>
        </aside>
      </article>
      <article
        ref={(el) => (articlesRef.current[1] = el)}
        className="flex justify-between mt-[100px] rounded-3xl bg-transparent opacity-0"
      >
        <aside>
          <img
            src={Business}
            alt="Business"
            className="w-[2900px] object-contain"
          />
        </aside>
        <aside className="px-[70px] py-[50px]">
          <h3>The Problem</h3>
          <span>05/10/2024</span>
          <p className="w-[700px] pt-7">
            Datamind has pioneered UniStream technology, which takes disparate
            data sources and combines them into a single, unified data stream.
            This makes it much easier, faster, and less costly to access,
            analyze, and automate data within complex environments. Datamind has
            pioneered UniStream technology, which takes disparate data sources
            and combines them into a single, unified data stream. This makes it
            much easier, faster, and less costly to access, analyze, and
            automate data within complex environments. Datamind has pioneered
            UniStream technology, which takes disparate data sources and
            combines them into a single.
          </p>
        </aside>
      </article>
      <article className="flex justify-center">
        <button
          className="w-[130px] h-[40px] rounded-full mt-[80px] py-2 px-4 text-base font-medium text-[#04B7A1] border border-solid border-customGreen hover:bg-[#04B7A1] transition-colors duration-300 ease-in-out cursor-pointer hover:text-[#F8F7F7] ml-5"
          type="button"
        >
          View More
        </button>
      </article>
    </section>
  );
}
