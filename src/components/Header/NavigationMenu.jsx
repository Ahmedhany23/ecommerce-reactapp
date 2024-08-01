import React from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";

const navlinks = [
  { link: "Home", path: "/" },
  { link: "Contact", path: "/contact" },
  { link: "About", path: "/about" },
  { link: "Sign Up", path: "/signup" },
];

export default function NavigationMenu({ isOpen, setIsOpen }) {
  const navVariants = {
    hidden: { y: "-100%" },
    visible: {
      y: 0,
     
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 20,
        
      },
    },
    exit: { 
      y: "-100%", 
      transition: { duration: 0.3 },
    },
  };

  return (
    <>
      <nav className="hidden md:flex flex-row gap-12">
        {navlinks.map((navlink, i) => (
          <NavLink
            key={i} 
            to={navlink.path}
            className={({ isActive }) =>
              `text-text-3 text-md h-fit font-poppins font-normal hover:border-b hover:border-background-2 transition duration-200 ${
                isActive ? "border-b border-background-2 border-opacity-30" : ""
              }`
            }
          >
            {navlink.link}
          </NavLink>
        ))}
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            variants={navVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed bottom-0 left-0 right-0 w-auto min-h-full bg-background-2 z-10 px-3 py-6 md:static md:hidden"
          >
            <div className="text-text-1 text-6xl flex justify-end w-full">
              <IoClose
                className="text-right cursor-pointer"
                onClick={() => setIsOpen(false)} 
              />
            </div>
            <div className="flex flex-col gap-20 h-full mt-20">
              {navlinks.map((navlink, i) => (
                <NavLink
                  key={i} 
                  to={navlink.path}
                  onClick={() => setIsOpen(false)} 
                  className={({ isActive }) =>
                    `text-text-1 text-3xl h-fit font-poppins font-normal hover:text-text-2 transition duration-200 ${
                      isActive ? "text-text-2" : ""
                    }`
                  }
                >
                  {navlink.link}
                </NavLink>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
