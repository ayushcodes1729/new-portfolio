"use client"

import { useState, useEffect } from 'react';
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

export default function DarkModeToggle() {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // Initialize state synchronously during client-side render
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme');
            const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            
            return savedTheme === 'dark' || (savedTheme === null && systemPrefersDark);
        }
        return true; // Default to dark mode on initial render
    });

    useEffect(() => {
        // Ensure dark mode is set on initial load
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme === 'dark' || (savedTheme === null && systemPrefersDark)) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleDarkMode = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);

        // Update localStorage
        localStorage.setItem('theme', newMode ? 'dark' : 'light');

        // Toggle dark class on html element
        if (newMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    return (
        <button 
            onClick={toggleDarkMode}
            className="relative flex items-center justify-center p-2 rounded-full 
            text-gray-600 hover:text-black 
            dark:text-gray-300 dark:hover:text-white 
            transition-colors duration-200 group"
        >
            <span className="absolute top-[-150%] 
            bg-white/90 dark:bg-gray-800 
            opacity-0 group-hover:opacity-100 
            transition-opacity duration-300 
            rounded-lg px-3 py-2 text-xs">
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </span>
            {isDarkMode ? (
                <CiLight className="w-4 h-4 text-gray-600" />
            ) : (
                <MdDarkMode className="w-4 h-4 text-gray-600" />
            )}
        </button>
    );
}