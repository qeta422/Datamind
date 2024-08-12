import React, { useEffect, useRef } from "react";
import Header from "../MainPageComponents/Header";
import Footer from "../MainPageComponents/Footer";
import Colleagues from "../../../assets/colleagues.jpg";
import Business from "../../../assets/business.jpg";

export default function NewsPage() {
  const articlesRef = useRef([]);

  useEffect(() => {
    window.scrollTo(0, 0);

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

    articlesRef.current.forEach((article) => {
      if (article) {
        observer.observe(article);
      }
    });

    return () => {
      if (articlesRef.current) {
        articlesRef.current.forEach((article) => {
          if (article) {
            observer.unobserve(article);
          }
        });
      }
    };
  }, []);

  return (
    <div className="min-w-full">
      <Header />
      <main className="content">
        <section className="w-[1550px] mx-auto">
          <h1 className="text-center p-[130px]">News</h1>
          {[
            {
              imgSrc: Colleagues,
              title: "The Problem",
              date: "05/10/2024",
              text: "Modern enterprises struggle to store, gather, manage, and analyze their data. Existing solutions are limited, slow, and suffer bottlenecks due to antiquated designs and outdated tech.",
            },
            {
              imgSrc: Business,
              title: "The Solution",
              date: "05/10/2024",
              text: "Datamind has pioneered UniStream technology, which takes disparate data sources and combines them into a single, unified data stream.",
            },
            {
              imgSrc: Colleagues,
              title: "The Problem",
              date: "05/10/2024",
              text: "Modern enterprises struggle to store, gather, manage, and analyze their data. Existing solutions are limited, slow, and suffer bottlenecks due to antiquated designs and outdated tech.",
            },
            {
              imgSrc: Business,
              title: "The Solution",
              date: "05/10/2024",
              text: "Datamind has pioneered UniStream technology, which takes disparate data sources and combines them into a single, unified data stream.",
            },
          ].map((article, index) => (
            <article
              key={index}
              ref={(el) => (articlesRef.current[index] = el)}
              className="flex justify-between py-[70px] rounded-3xl opacity-0 transition-opacity duration-1000 transform"
            >
              <aside>
                <img
                  src={article.imgSrc}
                  alt={article.title}
                  className="w-[2900px] object-contain"
                />
              </aside>
              <aside className="px-[70px] py-[50px]">
                <h3>{article.title}</h3>
                <span>{article.date}</span>
                <p className="w-[700px] pt-7">{article.text}</p>
              </aside>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
