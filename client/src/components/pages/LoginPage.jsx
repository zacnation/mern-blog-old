import { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  async function login(e) {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/login",
        { username, password },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        setRedirect(true);
      } else {
        alert("Wrong credentials");
      }
    } catch (e) {
      alert(e);
    }
  }

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <>
      <h1 className="text-center text-3xl font-semibold pb-5">Log in</h1>
      <form action="" className="max-w-md my-0 mx-auto" onSubmit={login}>
        <input
          type="text"
          className="block w-full border rounded bg-gray-100 mb-1 px-3 py-2"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          className="block w-full border rounded bg-gray-100 mb-1 px-3 py-2"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="text-center pt-5">
          <button className="border rounded px-6 py-2 bg-gray-700 text-white">
            Log in
          </button>
        </div>
      </form>
    </>
  );
}
