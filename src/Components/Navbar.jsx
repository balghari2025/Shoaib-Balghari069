import React, { useState, useEffect } from 'react';
import pic from '../assets/img.jpg';
import { IoMenuSharp, IoClose } from "react-icons/io5";
import { BsMoon, BsSun } from "react-icons/bs"; // Icons for dark mode
import { Link } from 'react-scroll';

function Navbar() {
    const [menu, setMenu] = useState(false);
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("theme") === "dark"
    );

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");

        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    const navItem = [
        { id: 1, text: "Home" },
        { id: 2, text: "About" },
        { id: 3, text: "Portfolio" },
        { id: 4, text: "Experience" },
        { id: 5, text: "Contact" }
    ];

    return (
        <div className='max-w-screen-2xl md:max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md fixed top-2 rounded-full z-50 bg-white bg-opacity-90   dark:bg-[#0a1531] dark:opacity-80 dark:text-white transition-colors duration-300'>
            <div className='flex justify-between items-center h-16'>
                {/* Logo Section */}
                <div className='flex items-center space-x-2'>
                    <img src={pic} className='h-12 w-12 rounded-full' alt="Profile" />
                    <h1 className='ml-2 font-semibold text-xl cursor-pointer'>
                        Shoaib <span className='text-green-800 dark:text-green-400'>Balghari</span>
                        <p className='text-sm hidden md:block dark:text-gray-300'>Web Developer</p>
                    </h1>
                </div>

                {/* Navigation Menu */}
                <div className='flex items-center space-x-5'>
                    <ul className='hidden md:flex space-x-5'>
                        {navItem.map(({ id, text }) => (
                            <li key={id} className='hover:scale-110 active:scale-90 transition-transform duration-200 cursor-pointer'>
                                <Link to={text} smooth={true} offset={-80} activeClass='active' duration={500}>
                                    {text}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Dark Mode Toggle */}
                    <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full transition-transform duration-300 hover:scale-110">
                        {darkMode ? <BsSun size={20} /> : <BsMoon size={20} />}
                    </button>

                    {/* Mobile Menu Button */}
                    <div className='md:hidden'>
                        <button onClick={() => setMenu(!menu)} className='px-3 py-2 rounded-md text-sm'>
                            {menu ? <IoClose size={25} /> : <IoMenuSharp size={25} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {menu && (
                <div className='md:hidden mt-2'>
                    <ul className='bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4'>
                        {navItem.map(({ id, text }) => (
                            <li key={id} className='hover:scale-110 active:scale-90 transition-transform duration-200 cursor-pointer p-2'>
                                <Link to={text} smooth={true} offset={-80} activeClass='active' duration={500}>
                                    {text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Navbar;
