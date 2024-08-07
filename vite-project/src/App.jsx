import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import ProblemCards from "./components/ProblemCards";

function App() {
  return (
    <div className="min-w-full">
      <Header />
      <Banner />
      <ProblemCards />
    </div>
  );
}

export default App;
