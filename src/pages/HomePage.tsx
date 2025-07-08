import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <div>
      <h1>Spanish Flashcards</h1>
      <p>Welcome! Choose a mode to start.</p>
      <div className="navigation-buttons">
        <Link to="/study" className="link">
          <button className="btn-study">Study Mode</button>
        </Link>
        <Link to="/quiz" className="link">
          <button className="btn-quiz">Quiz Mode</button>
        </Link>
        <Link to="/stats" className="link">
          <button className="btn-stats">Stats Page</button>
        </Link>
      </div>
    </div>
  );
} 