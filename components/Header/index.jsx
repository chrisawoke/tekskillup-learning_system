"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { LiaTimesSolid } from "react-icons/lia";
import { MdKeyboardArrowDown } from "react-icons/md";
import menuData from "./menuData";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [openIndex, setOpenIndex] = useState(-1);

  const usePathName = usePathname();
  const menuRef = useRef();

  // Sticky Navbar
    const handleStickyNavbar = () => {
      if (window.scrollY >= 80) {
        setSticky(true);
      } else {
        setSticky(false);
      }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
    const handleSubmenu = (index) => {
      if (openIndex === index) {
        setOpenIndex(-1);
      } else {
        setOpenIndex(index);
      }
    };


  //detects if outside the navbar on mobile is clicked and closes the navbar
  useEffect(() => {
    let handler = (event) => {
      if (!menuRef.current.contains(event.target)) {
        setNavbarOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });


  return (
    <header className="mx-auto max-width">
      <div
        className={`px-8 md:px-24 top-0 z-40 flex w-full items-center ${
          sticky
            ? "dark:bg-gray-dark dark:shadow-sticky-dark fixed z-[9999] bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition"
            : "absolute bg-transparent"
        }`}>

          <div className="relative flex items-center justify-between w-full">
            <div className="flex-center lg:gap-20">
              {/* logo */}
              <div className="lg:w-60 max-w-full xl:mr-12">
                <Link
                  href="/"
                  className={`header-logo block w-full ${
                    sticky ? "py-5 lg:py-2" : "py-4"
                  } `}>
                  <Image
                    src="/assets/image/Tekskillup-logo.png"
                    alt="logo"
                    width={60}
                    height={60}
                  />
                </Link>
              </div>
                {/* hamburger menu */}
                <button
                  onClick={() => setNavbarOpen((prev) => !prev)}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-0 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 md:ml-10 lg:hidden">
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[7px] rotate-45" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "opacity-0 " : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[-8px] -rotate-45" : " "
                    }`}
                  />
                </button>
                {/* nav links and dropdown */}
                {/* mobile dropdown */}
                <nav
                  id="navbarCollapse"
                  className={`absolute right-0 z-50 top-0 w-[250px] h-[100vh] lg:h-[70px] rounded border-l-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                    navbarOpen
                      ? "visibility top-0 opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }`}
                  ref={menuRef}  
                >
                    {/* toggle close icon for mobile  */}
                    <button className="absolute right-5 top-10 duration-300 lg:hidden"
                      onClick={() => setNavbarOpen((prev) => !prev)}
                    >
                      <LiaTimesSolid size={35} />
                    </button>
                  <ul className="mt-20 lg:mt-0 block lg:flex lg:space-x-12">
                    {menuData.map((menuItem, index) => (
                      <li key={index} className="group relative">
                        {menuItem.path ? (
                          <Link
                            href={menuItem.path}
                            className={`flex py-2 text-[1.3rem] lg:text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${
                              usePathName === menuItem.path
                                ? "text-primary dark:text-white"
                                : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                            }`}>
                            {menuItem.title}
                          </Link>
                        ) : (
                          <>
                            {/* link with dropdown */}
                            <p
                              onClick={() => handleSubmenu(index)}
                              className="flex cursor-pointer items-center py-2 text-[1.3rem] lg:text-base text-dark group-hover:text-primary dark:text-white/70 dark:group-hover:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6">
                              {menuItem.title}
                              <MdKeyboardArrowDown className="ml-2 lg:hidden" />
                            </p>
                            {/* dropdown */}
                            <div
                              className={`submenu relative left-0 top-full rounded-sm bg-white transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                                openIndex === index ? "block" : "hidden"
                              }`}>
                              {menuItem.submenu.map((submenuItem, index) => (
                                <Link
                                  href={submenuItem.path}
                                  key={index}
                                  className="block rounded py-2.5 text-sm text-dark hover:text-primary dark:text-white/70 dark:hover:text-white px-5 lg:px-3">
                                  {submenuItem.title}
                                </Link>
                              ))}
                            </div>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
            </div>
            {/* sign in & sign up */}
            <div className="flex items-center pr-14 lg:pr-0">
              <Link
                href="/signin"
                className="px-7 py-3 text-sm lg:text-base font-medium text-dark hover:opacity-70 dark:text-white md:block">
                Login
              </Link>
              <Link href="/signup" className="custom-btn3">
                Get Started
              </Link>
            </div>
          </div>
      </div>
    </header>
  );
};

export default Header;
