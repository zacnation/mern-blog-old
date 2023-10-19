import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Header() {
  useEffect(() => {
    axios.get("http://localhost:4000/profile", {
      withCredentials: true,
    });
  }, []);

  return (
    <header className="flex items-center justify-between my-4">
      <Link to="/" className="text-bold text-3xl text-gray-600">
        Blog
      </Link>
      <nav className="flex gap-3 text-gray-600">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
    </header>
  );
}
