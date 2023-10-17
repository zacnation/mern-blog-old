export default function Header() {
  return (
    <header className="flex items-center justify-between my-4">
      <a href="" className="text-bold text-3xl text-gray-600">
        Blog
      </a>
      <nav className="flex gap-3 text-gray-600">
        <a href="">Login</a>
        <a href="">Register</a>
      </nav>
    </header>
  );
}
