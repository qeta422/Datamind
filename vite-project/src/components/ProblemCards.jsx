import React from "react";
import Problem from "../assets/problem.png";
import Solution from "../assets/solution.png";
import Result from "../assets/result.png";

export default function ProblemCards() {
  return (
    <section className="flex w-[1550px] my-[150px] mx-auto justify-between">
      <article className="rounded-3xl bg-red-500 w-[400px] h-[500px]">
        <article className="px-[50px] flex justify-between">
          <aside>
            <img src={Problem} alt="Problem" />
          </aside>
          <aside>
            <h3 className="p-9">The Problem</h3>
          </aside>
        </article>
        <div className="px-[50px] py-10">
          <p>
            Modern enterprises struggle to store, gather, manage, and analyze
            their data. Existing solutions are limited, slow, and suffer
            bottlenecks due to antiquated designs and outdated tech.
          </p>
        </div>
        <i></i>
      </article>
      <article className="rounded-3xl bg-red-500 w-[400px] h-[500px]">
        <article className="px-[50px] flex justify-between">
          <aside>
            <img src={Solution} alt="Solution" />
          </aside>
          <aside>
            <h3 className="p-9">The Solution</h3>
          </aside>
        </article>
        <div className="px-[50px] py-10">
          <p>
            Datamind has pioneered UniStream technology, which takes disparate
            data sources and combines them into a single, unified data stream.
            This makes it much easier, faster, and less costly to access,
            analyze, and automate data within complex environments.
          </p>
        </div>
        <i></i>
      </article>
      <article className="rounded-3xl bg-red-500 w-[400px] h-[500px]">
        <article className="px-[50px] flex justify-between">
          <aside>
            <img src={Result} alt="Result" />
          </aside>
          <aside>
            <h3 className="p-9">The Result</h3>
          </aside>
        </article>
        <div className="px-[50px] py-10">
          <p>
            Automate processes across your entire organization and between
            departments. Speed up internal processes & decision making with
            real-time data access. Generate internal and regulatory reports on
            the fly across all historical data from any source.
          </p>
        </div>
        <i></i>
      </article>
    </section>
  );
}
