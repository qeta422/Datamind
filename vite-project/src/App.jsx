import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import ProblemCards from "./components/ProblemCards";
import BiReports from "./components/BiReports";
import Customers from "./components/Customers";
import News from "./components/News";
import Team from "./components/Team";
import Footer from "./components/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <div className="min-w-full">
      <Header />
      <Banner />
      <ProblemCards />
      <BiReports />
      <Customers />
      <News />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
