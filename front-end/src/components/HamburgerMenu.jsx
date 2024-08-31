import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const path = location.pathname;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const getNavLinkClass = (to) => {
    return path === to
      ? "block px-4 py-2 text-blue-800 font-bold hover:bg-gray-200"
      : "block px-4 py-2 text-gray-800 hover:bg-gray-200";
  };

  return (
    <div className="relative">
      <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 w-48 mt-2 py-2 bg-white border rounded shadow-xl">
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
      )}
    </div>
  );
};

export default HamburgerMenu;
