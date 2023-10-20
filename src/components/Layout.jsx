import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <main className="p-3 max-w-2xl m-auto">
      <Header />
      <Outlet />
    </main>
  );
}
