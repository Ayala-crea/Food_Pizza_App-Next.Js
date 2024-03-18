export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <nav className="flex items-center gap-8 text-gray-500 font-semibold">
        <a className="text-primary font-semibold 2xl px-4" href="">
          ST PIZZA
        </a>
        <a href={'/'}>Home</a>
        <a href={''}>Menu</a>
        <a href={''}>About</a>
        <a href={''}>Contact</a>
      </nav>
      <nav className="flex item-senter gap-4 text-gray-300 font-semibold">
        <a className="mt-2" href={'/login'}>
          Login
        </a>
        <a href={'/register'} className="bg-primary rounded-full text-white px-4 py-2">
          Register
        </a>
      </nav>
    </header>
  );
}
