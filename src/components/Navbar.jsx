import { FaCaretDown } from "react-icons/fa";
import { MdOutlineCall } from "react-icons/md";
import { FaRegSun } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";
import { useEffect, useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const [showMenu, setShowMenu] = useState(false);
  const element = document.documentElement;
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <>
      <nav className="bg-gradient-to-l z-50 from-violet-600 via-violet-600 to-violet-900 text-primary fixed w-full top-0 left-0 p-  shadow-lg">
        <div className="container">
          <div className="flex items-center justify-between h-16 py-2">
            {/*Logo section */}
            <div className="text-2xl font-bold text-white md:text-3xl uppercase">
              <a href="">
                Imad <span className="text-primary inline-block">Johar</span>
              </a>
            </div>
            {/*Desktop menu section */}
            <div className="text-white hidden md:block">
              <ul className="flex items-center gap-10">
                <li className="group relative cursor-pointer">
                  <a href="" className="flex items-center gap-2 h-16">
                    Home{" "}
                    <span>
                      <FaCaretDown className="group-hover:rotate-180 transition-all duration-200" />
                    </span>
                  </a>
                  {/*dropdown menu */}
                  <div className="absolute -left-9 z-[99999] hidden w-36 bg-white shadow-md p-2 text-black rounded-md group-hover:block ">
                    <ul className="space-y-3">
                      <li className="p-2 hover:bg-violet-200 rounded-lg text-center">
                        <a href="#">Services</a>
                      </li>
                      <li className="p-2 hover:bg-violet-200 rounded-lg text-center">
                        <a href="#">Privacy Policy</a>
                      </li>
                      <li className="p-2 hover:bg-violet-200 rounded-lg text-center">
                        <a href="#">About Us</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="" className="h-16">
                    About us
                  </a>
                </li>
                <li>
                  <div className=" flex items-center gap-4 ">
                    {/*icon here */}
                    <div>
                      <MdOutlineCall className="text-2xl h-7 w-7 rounded-md text-white bg-primary hover:bg-primary/90" />
                    </div>
                    {/*Mobile no. */}
                    <div className="">
                      <p>Talk To Us</p>
                      <p> +212 656629707</p>
                    </div>
                  </div>
                </li>
                {/*light and dark */}
                {theme === "dark" ? (
                  <FaRegSun
                    className="text-2xl"
                    onClick={() => setTheme("light")}
                  />
                ) : (
                  <FaRegMoon
                    className="text-2xl"
                    onClick={() => setTheme("dark")}
                  />
                )}
              </ul>
            </div>
            {/*Mobile  section */}
            <div className="md:hidden flex gap-3">
              {theme === "dark" ? (
                <FaRegSun
                  className="text-2xl"
                  onClick={() => setTheme("light")}
                />
              ) : (
                <FaRegMoon
                  className="text-2xl"
                  onClick={() => setTheme("dark")}
                />
              )}
              {showMenu ? (
                <HiMenuAlt1
                  className="cursor-pointer transition-all "
                  onClick={toggleMenu}
                  size={30}
                />
              ) : (
                <HiMenuAlt3
                  className="cursor-pointer transition-all "
                  onClick={toggleMenu}
                  size={30}
                />
              )}
            </div>
          </div>
        </div>
      </nav>
      {/*mobile sidebar menu components */}
      <ResponsiveMenu showMenu={showMenu}/>
    </>
  );
};

export default Navbar;
