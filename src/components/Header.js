export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <a className="text-primary font-semibold 2xl px-4" href="">
        ST PIZZA
      </a>
      <nav className="flex items-center gap-8 text-gray-500 font-semibold">
        <a href={""}>Home</a>
        <a href={""}>Menu</a>
        <a href={""}>About</a>
        <a href={""}>Contact</a>
        <a href={""} className="bg-primary rounded-full text-white px-4 py-2">
          Login
        </a>
      </nav>
    </header>
  );
}
