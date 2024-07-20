import { Button, Navbar, TextInput } from "flowbite-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import HamburgerMenu from "./HamburgerMenu";

const Header = () => {
  const location = useLocation();
  const path = location.pathname;
  const getNavLinkClass = (to) => {
    return path === to
      ? "block px-4 py-2 text-blue-800 font-bold hover:bg-gray-200"
      : "block px-4 py-2 text-gray-800 hover:bg-gray-200";
  };
  return (
    <>
      <Navbar className="border-b-2 flex justify-between">
        <Link
          to={"/"}
          className="self-center whitespace-nowrap text-sm sm:text-xl font-bold text-white bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-400 px-5 py-2 rounded-lg"
        >
          AsBlog
        </Link>
        <form className="md:w-72">
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
        <div className="flex gap-2 text-center">
          <Button className="w-10 h-10 mt-1 border-2 border-gray-600 items-center dark:bg-gray-500">
            <FaMoon className="text-black dark:text-white" />
          </Button>
          <Link>
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Sign In
              </span>
            </button>
          </Link>
        </div>
        <div className="md:hidden">
          <HamburgerMenu />
        </div>
      </Navbar>
    </>
  );
};

export default Header;
