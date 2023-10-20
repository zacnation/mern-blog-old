import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../contexts/UserContext";

export default function Header() {
  const { setUserInfo, userInfo } = useContext(UserContext);
  function logout() {
    axios
      .post("http://localhost:4000/logout", {}, { withCredentials: true })
      .then(() => {
        setUserInfo(null);
      })
      .catch((error) => {
        console.error("Error logging out:", error);
      });
  }

  const username = userInfo?.username;

  useEffect(() => {
    axios
      .get("http://localhost:4000/profile", {
        withCredentials: true,
      })
      .then((response) => {
        const userInfo = response.data;
        setUserInfo(userInfo);
      })
      .catch((error) => {
        console.error("Error fetching profile:", error);
      });
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
            <a onClick={logout}>Log out</a>
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
