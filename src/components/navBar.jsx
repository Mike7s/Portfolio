function NavBar() {
  return (
    <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 w-[480px] h-20 shadow-md z-50 flex items-center justify-between px-4 rounded-full text-white bg-[#0F172A] mt-1">
      <ul className="flex items-center gap-8 px-10 py-3 ">
        <li>
          <a
            href="#home"
            className="flex items-center gap-1  px-4 py-2 rounded-full  font-medium hover:underline hover:text-[#38BDF8] "
          >
            Home
          </a>
        </li>
        <li>
          <a href="#chiSono" className=" font-medium hover:underline hover:text-[#38BDF8]">
            Chi sono
          </a>
        </li>
        <li>
          <a href="#progetti" className="font-medium hover:underline hover:text-[#38BDF8]">
            Progetti
          </a>
        </li>
        
        <li>
          <a href="#contatti" className="font-medium hover:underline hover:text-[#38BDF8]">
            Contatti
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
