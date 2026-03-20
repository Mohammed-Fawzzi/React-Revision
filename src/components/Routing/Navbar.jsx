import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/gallery", name: "Gallery" },
    { path: "/contact", name: "Contact Us" },
  ];

  const baseStyle =
    "px-3 py-2 rounded-md transition hover:bg-sky-100 hover:text-sky-700";

  const activeStyle = "bg-sky-600 text-white";

  return (
    <nav className="p-3 shadow border-b border-gray-200 bg-white">
      <div className="container flex justify-between items-center">
        <h1 className="text-2xl font-bold text-sky-600">Logo</h1>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <ul className="flex gap-2">
            {links.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `${baseStyle} ${isActive ? activeStyle : ""}`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Button */}
        <button className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-3 border-t pt-3">
          <ul className="flex flex-col gap-2">
            {links.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `${baseStyle} block ${isActive ? activeStyle : ""}`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
