import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import MainPage from "./components/Pages/MainPage";
import NewsPage from "./components/Pages/NewsPageComponents/NewsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/NewsPage" element={<NewsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
