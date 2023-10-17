import "./App.css";
import Header from "./components/Header";
import Post from "./components/Post";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route
        index
        element={
          <main className="p-3 max-w-2xl m-auto">
            <Header />
            <Post />
          </main>
        }
      />
    </Routes>
  );
}

export default App;
