import { NavLink } from "react-router-dom";
import { Menu, X, MoonStar, Sun } from "lucide-react";
import { useState } from "react";

const Links = () => {
    return (
        <>
            <NavLink to="/" key={0}>Home</NavLink>
            <NavLink to="/about-me" key={1}>About Me</NavLink>
            <NavLink to="/resume" key={2}>Resume</NavLink>
            <NavLink to="/projects" key={3}>Projects</NavLink>
            <NavLink to="/contact-me" key={4}>Contact Me</NavLink>
        </>
    );
};

const NavLinks = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <nav className="w-1/3 flex justify-end">
                <div className="hidden w-full md:flex justify-between">
                <Links/>
            {/* add light and dark mode options */}
            <button><MoonStar/></button>
            {/* <button><Sun/></button> */}
                </div>
                <div className="md:hidden">
                    <button onClick={toggleNavbar}>
                        {isOpen? <X/>:<Menu/>}
                    </button>
                </div>
            </nav>
            {isOpen && (
                <div className="flex flex-col items-center basis-full border-t border-black">
                    <Links/>
                </div>
            )}
        </>
    );
  };
  
  export default NavLinks;