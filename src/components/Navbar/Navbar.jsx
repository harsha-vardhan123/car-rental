import React,{useState} from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import ResponsiveMenu from "./ResponsiveMenu.jsx";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";

export const NavLinks = [
    {
        id: "1",
        name: "HOME",
        link: "/#",
    },
    {
        id: "2",
        name: "CARS",
        link: "/#cars",
    },
    {
        id: 3,
        name: "ABOUT",
        link: "/#about",
    },
    {
        id: 4,
        name: "BOOKING",
        link: "/#booking",
    },
]

const Navbar = ({ theme, setTheme }) => {
const [showMenu, setShowMenu] = useState(false);

const togglemenu = () =>{
    setShowMenu(!showMenu);
    
};

    return <nav className="shadow-md bg-white dark:bg-dark dark:text-white duration-300 relative z-40">
        <div className="container py-3">
            <div className="flex justify-between items-center">
                <div className="text-3xl font-bold font-serif">
                    <h1>Car Rental</h1>
                </div>
                <div className="hidden md:block">
                    <ul className="flex items-center gap-8">
                        {NavLinks.map((data) => (
                            <li key={data.id} className="py-4">
                                <a
                                    className="inline-block py-2 hover:border-b-2 hover:text-primary hover:border-primary transition-colors duration-500 text-lg font-medium" href={data.link}>{data.name}</a>
                            </li>

                        ))}
                    </ul>
                </div>
                {/* Dark Mode Icons */}
                <div>
                    {
                        theme === "dark" ? (<BiSolidSun onClick={()=> setTheme ("light")} className="text-2xl" />) : (<BiSolidMoon onClick={()=> setTheme ("dark")} className="text-2xl" />)
                    }

                </div>
                {/* Mobile hamburger menu */}
                {showMenu?(
                        <HiMenuAlt1
                        onClick={togglemenu}
                        size={30}
                        className="cursor-pointer transition-all md:hidden" />
                    ) : (
                        <HiMenuAlt3
                        onClick={togglemenu}
                        size={30}
                        className="cursor-pointer transition-all md:hidden" />
                    )
                }
            </div>
        </div>
        <ResponsiveMenu showMenu={showMenu} togglemenu={togglemenu} />

    </nav>;
};

export default Navbar;