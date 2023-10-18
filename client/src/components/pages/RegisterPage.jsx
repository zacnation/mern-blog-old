import { useState } from "react";
import axios from "axios";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function register(e) {
    e.preventDefault();

    await axios
      .post(
        "http://localhost:4000/register",
        { username, password },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((response) => console.log(response.data))
      .catch((error) => console.error(error));
  }

  return (
    <>
      <h1 className="text-center text-3xl font-semibold pb-5">Register</h1>

      <form action="" className="max-w-md my-0 mx-auto" onSubmit={register}>
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
            Register
          </button>
        </div>
      </form>
    </>
  );
}
