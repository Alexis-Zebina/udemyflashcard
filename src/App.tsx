import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { CategorySelectionPage } from "./pages/CategorySelectionPage";
import { QuizPage } from "./pages/QuizPage";
import { StatsPage } from "./pages/StatsPage";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/study" element={<CategorySelectionPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/stats" element={<StatsPage />} />
      </Routes>
    </div>
  );
}

export default App;
