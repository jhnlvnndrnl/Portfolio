import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

return (
    <header className="fixed top-0 z-50 left-1/2 transform -translate-x-1/2 w-full max-w-7xl">
        <nav
        className={`bg-[#000910] rounded-b-xl px-6 py-4 flex justify-between items-center
        md:border md:border-[#003A6B]`}
        >
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-40 font-semibold text-white justify-center w-full">
            <li><a href="#">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contacts</a></li>
        </ul>

        {/* Burger Button */}
        <div
            className="md:hidden text-white text-2xl cursor-pointer border border-[#003A6B] rounded-full p-2 ml-auto relative"
            onClick={toggleMenu}
        >
            {isOpen ? <FaTimes /> : <FaBars />}

            {/* Mobile Menu */}
            {isOpen && (
            <ul className="absolute right-0 top-full mt-2 bg-[#000910] border border-[#003A6B] rounded-xl px-6 py-4 flex flex-col gap-3 font-semibold text-white text-base shadow-lg min-w-[150px]">
                <li><a href="#" onClick={toggleMenu}>Home</a></li>
                <li><a href="#services" onClick={toggleMenu}>Services</a></li>
                <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
                <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
                <li><a href="#contact" onClick={toggleMenu}>Contacts</a></li>
            </ul>
            )}
        </div>
        </nav>
    </header>
    );
}
