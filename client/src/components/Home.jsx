import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <h1>Home Page</h1>
      <nav>
        <Link to="/form">
          <button>Go to form</button>
        </Link>
      </nav>
    </div>
  );
}
