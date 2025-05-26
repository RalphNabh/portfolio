import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react"; 
import {cn} from "@/lib/utils";

// We will have a toggle for the theme so we return a button that has a sun as icon and moon for light mode to switch to dark 
export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false); //I started it as false so we start with lightmode

    useEffect(() =>{
        const storedTheme = localStorage.getItem("theme") //We save the users choice in localStorage to apply their choice we need to get from localstorage the theme chosen
        if (storedTheme === "dark"){
            setIsDarkMode(true)
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [])

    const toggleTheme = () => { //check if its dark do smt if not do smt else 
        if (isDarkMode){
            document.documentElement.classList.remove("dark"); //this switches theme to light
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else { 
            document.documentElement.classList.add("dark"); //this switches theme to dark
            localStorage.setItem("theme", "dark"); //i want to store the choice of the user if at refresh dark mode stays dark mode
            setIsDarkMode(true);
        }
     }
    

    return ( 
    <button onClick={toggleTheme} className={cn("fixed top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outlin-hidden" //cn merge from utils.jv allowed us to put a comma and write the rest of the class on the next line so it doesnt overflow
    )}> 
        
        {isDarkMode ? (
            <Sun className="h-6 w-6 text-yellow-300"/>
    ) : (
        <Moon className="h-6 w-6 text-blue-900" />
    )}
    </button> //if true then lable would be sun from luidereact the library i downloaded
    );
};