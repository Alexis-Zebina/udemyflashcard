import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <div>
      <h1>Spanish Flashcards</h1>
      <p>Welcome! Choose a mode to start.</p>
      <div>
        <Link to="/study">
          <button>Study Mode</button>
        </Link>
        <Link to="/quiz">
          <button>Quiz Mode</button>
        </Link>
        <Link to="/stats">
          <button>Stats Page</button>
        </Link>
      </div>
    </div>
  );
} 