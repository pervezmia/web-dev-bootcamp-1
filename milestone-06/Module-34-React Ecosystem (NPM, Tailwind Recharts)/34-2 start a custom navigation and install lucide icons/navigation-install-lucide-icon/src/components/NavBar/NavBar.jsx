import React, { useState } from "react";
import Link from "./Link";
import { Menu, X } from "lucide-react";

const navData = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Blog", path: "/blog" },
  { id: 5, name: "Contact", path: "/contact" },
];

const NavBar = () => {
    const [open, setOpen] = useState(false)
    const links = navData.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))
  return (
    <nav className="flex justify-between mx-10 mt-5">
      <span className="flex" onClick={() => setOpen(!open)}>
        {
            open? 
                <X className="md:hidden"></X> : 
                <Menu className="md:hidden"></Menu>
        }
        <ul className={`md:hidden absolute duration-800
            ${open? 'top-12':'-top-40'}
            bg-amber-200 text-black`}>
            {links}
        </ul>
        
        <h3 className="ml-3 hidden md:flex">My Navbar</h3>
      </span>
      <ul className="hidden md:flex">
        {
            links
        }
      </ul>
      {/* <ul className="flex">
        {navData.map((route) => (
          <li className="mr-10">
            <a href={route.path}>{route.name}</a>
          </li>
        ))}
      </ul> */}
      {/* <ul className="flex justify-between">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/About">About</a>
        </li>
        <li>
          <a href="/Blog">Blog</a>
        </li>
      </ul> */}
      <button>Sign in</button>
    </nav>
  );
};

export default NavBar;
