import { Link } from "react-router-dom";

export default function Header() {
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
