import { Outlet, Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <nav>
        <Link to="form">Go to Form</Link>
      </nav>
      <Outlet />
    </div>
  );
}
