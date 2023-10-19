import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";

export default function Header() {
  const [username, setUsername] = useState(null);
  useEffect(() => {
    // axios
    //   .get("http://localhost:4000/profile", {
    //     withCredentials: true,
    //   })
    //   .then((res) => {
    //     res.json();
    //   })
    //   .then((userInfo) => {
    //     setUsername(userInfo.username);
    //   });

    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((res) =>
      res.json().then((userInfo) => {
        setUsername(userInfo.username);
      })
    );
  }, []);

  return (
    <header className="flex items-center justify-between my-4">
      <Link to="/" className="text-bold text-3xl text-gray-600">
        Blog
      </Link>
      <nav className="flex gap-3 text-gray-600">
        {username && (
          <>
            <Link to="/create">Create new post</Link>
            <a href="/logout">Log out</a>
          </>
        )}
        {!username && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}
