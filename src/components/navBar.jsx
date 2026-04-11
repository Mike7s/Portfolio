function NavBar() {
  return (
    <nav
      className="
        fixed top-3 left-1/2 -translate-x-1/2
        w-[calc(100%-1rem)] max-w-[480px]
        min-h-16
        shadow-md z-50
        rounded-3xl
        text-white bg-[#0F172A]
        px-3 py-3
      "
    >
      <ul
        className="
          flex flex-wrap items-center justify-center
          gap-x-4 gap-y-2
          text-sm sm:text-base
        "
      >
        <li>
          <a
            href="#home"
            className="block rounded-full px-3 py-1.5 font-medium hover:underline hover:text-[#38BDF8]"
          >
            Home
          </a>
        </li>

        <li>
          <a
            href="#chiSono"
            className="block rounded-full px-3 py-1.5 font-medium hover:underline hover:text-[#38BDF8]"
          >
            Chi sono
          </a>
        </li>

        <li>
          <a
            href="#progetti"
            className="block rounded-full px-3 py-1.5 font-medium hover:underline hover:text-[#38BDF8]"
          >
            Progetti
          </a>
        </li>

        <li>
          <a
            href="#contatti"
            className="block rounded-full px-3 py-1.5 font-medium hover:underline hover:text-[#38BDF8]"
          >
            Contatti
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;