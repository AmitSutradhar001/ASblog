import { Button, Navbar, TextInput } from "flowbite-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import HamburgerMenu from "./HamburgerMenu";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { toggleTheme } from "../redux/theme/themeSlice.js";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentUser } = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const location = useLocation();
  const { theme } = useSelector((state) => state.user.theme);
  const path = location.pathname;
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const getNavLinkClass = (to) => {
    return path === to
      ? "block px-4 py-2 dark:text-gray-200  text-blue-800 font-bold rounded-lg hover:bg-gray-300"
      : "block px-4 py-2 dark:text-gray-200  text-gray-800 hover:bg-gray-300 rounded-lg";
  };
  return (
    <>
      <Navbar className="border-b-2 flex justify-around px-10">
        <Link
          to={"/"}
          className="self-center whitespace-nowrap text-sm sm:text-xl font-bold text-white bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-400 px-5 py-2 rounded-tl-lg rounded-br-lg"
        >
          AsBlog
        </Link>
        <form className="lg:w-72 md:w-48">
          <TextInput
            className="hidden sm:inline"
            type="text"
            placeholder="Search..."
            rightIcon={() => (
              <AiOutlineSearch className="w-8 h-8 text-green-400 mt-1 cursor-pointer" />
            )}
          />
        </form>
        <div className="hidden md:flex">
          <NavLink to="/" className={getNavLinkClass("/")}>
            Home
          </NavLink>
          <NavLink to="/about" className={getNavLinkClass("/about")}>
            About
          </NavLink>
          <NavLink to="/projects" className={getNavLinkClass("/projects")}>
            Projects
          </NavLink>
        </div>
        <div className="flex gap-5 text-center">
          <Button
            onClick={() => dispatch(toggleTheme())}
            className="w-10 h-10 border-2 border-gray-600 items-center dark:bg-gray-500"
          >
            {theme === "light" ? (
              <FaMoon className="text-black dark:text-white" />
            ) : (
              <FaSun className="text-black dark:text-white" />
            )}
          </Button>
          {currentUser ? (
            <div className="relative cursor-pointer">
              <img
                src={currentUser.user.profilePicture}
                onClick={toggleMenu}
                className="rounded-full w-10 h-10"
              />
              {isOpen && (
                <div className="absolute right-0 w-28 mt-2 py-2 bg-white border rounded shadow-xl">
                  <NavLink to="/" className={getNavLinkClass("/profile")}>
                    Profile
                  </NavLink>
                  <NavLink to="/about" className={getNavLinkClass("/posts")}>
                    Posts
                  </NavLink>
                  <button className=" text-center py-2 text-blue-800 font-bold px-4 hover:text-green-500">
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to={"/signin"}>
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Sign In
                </span>
              </button>
            </Link>
          )}
        </div>
        <div className="md:hidden">
          <HamburgerMenu />
        </div>
      </Navbar>
    </>
  );
};

export default Header;
