import React from "react";
import Header from "./MainPageComponents/Header";
import Banner from "./MainPageComponents/Banner";
import ProblemCards from "./MainPageComponents/ProblemCards";
import BiReports from "./MainPageComponents/BiReports";
import Customers from "./MainPageComponents/Customers";
import News from "./MainPageComponents/News";
import TeamSlider from "./MainPageComponents/Team";
import Footer from "./MainPageComponents/Footer";

const MainPage = () => {
  return (
    <div className="min-w-full">
      <Header />
      <Banner />
      <ProblemCards />
      <BiReports />
      <Customers />
      <News />
      <TeamSlider />
      <Footer />
    </div>
  );
};

export default MainPage;
