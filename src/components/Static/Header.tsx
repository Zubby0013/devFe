import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="h-[70px] flex justify-center items-center gap-4 text-[12px] uppercase font-bold">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "cursor-pointer border-b-2 border-b-orange-500"
              : "cursor-pointer"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "cursor-pointer border-b-2 border-b-orange-500"
              : "cursor-pointer"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "cursor-pointer border-b-2 border-b-orange-500"
              : "cursor-pointer"
          }
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default Header;