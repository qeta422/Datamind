import React, { useEffect, useRef } from "react";
import Header from "../MainPageComponents/Header";
import Footer from "../MainPageComponents/Footer";
import Colleagues from "../../../assets/colleagues.jpg";
import Business from "../../../assets/business.jpg";

export default function NewsPage() {
  const articlesRef = useRef([]);

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
          <article
            ref={(el) => (articlesRef.current[0] = el)}
            className="flex justify-between rounded-3xl "
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
                Modern enterprises struggle to store, gather, manage, and
                analyze their data. Existing solutions are limited, slow, and
                suffer bottlenecks due to antiquated designs and outdated tech.
              </p>
            </aside>
          </article>
          <article
            ref={(el) => (articlesRef.current[1] = el)}
            className="flex justify-between my-[100px] rounded-3xl "
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
                Datamind has pioneered UniStream technology, which takes
                disparate data sources and combines them into a single, unified
                data stream.
              </p>
            </aside>
          </article>
          <article
            ref={(el) => (articlesRef.current[2] = el)}
            className="flex justify-between rounded-3xl "
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
                Modern enterprises struggle to store, gather, manage, and
                analyze their data. Existing solutions are limited, slow, and
                suffer bottlenecks due to antiquated designs and outdated tech.
              </p>
            </aside>
          </article>
          <article
            ref={(el) => (articlesRef.current[3] = el)}
            className="flex justify-between my-[100px] rounded-3xl "
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
                Datamind has pioneered UniStream technology, which takes
                disparate data sources and combines them into a single, unified
                data stream.
              </p>
            </aside>
          </article>
        </section>
      </main>
      <Footer />
    </div>
  );
}
