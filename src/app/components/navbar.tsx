"use client"

import Link from "next/link"
import { ReactNode, RefObject, useEffect, useRef } from "react";
import { IconType } from "react-icons";
import { CiDark } from "react-icons/ci";
import { ImBlog } from "react-icons/im";
import { FaLinkedinIn } from "react-icons/fa6";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import DarkModeToggle from "./darkMode";

// Type for link objects
interface NavLink {
    id: string;
    href: string;
    icon: ReactNode;
}

export default function Navbar() {
    const navbarRef = useRef<HTMLUListElement | null>(null);
    const iconsRef: RefObject<{ [key: string]: HTMLSpanElement | null }> = useRef({});

    // Register plugin once
    useEffect(() => {
        if (gsap) {
            gsap.registerPlugin(useGSAP);
        }
    }, []);

    // Handle hover animations
    const handleMouseEnter = (id: string) => {
        // Get all icon keys
        const allIcons: NavLink[] = [...navLinks, ...socialLinks, { id: 'theme', href: '', icon: null }];
        const iconIndex = allIcons.findIndex(icon => icon.id === id);

        // Scale current icon
        if (iconsRef.current && iconsRef.current[id]) {
            gsap.to(iconsRef.current[id], {
                scale: 2.5,
                duration: 0.4,
                ease: "power2.out"
            });
        }

        // Scale adjacent icons
        allIcons.forEach((icon, index) => {
            if (icon.id !== id && iconsRef.current && iconsRef.current[icon.id]) {
                const distance = Math.abs(index - iconIndex);
                if (distance === 1) {
                    // Adjacent icons
                    gsap.to(iconsRef.current[icon.id], {
                        scale: 1.4,
                        duration: 0.4,
                        ease: "power2.out"
                    });
                } else {
                    // Other icons
                    gsap.to(iconsRef.current[icon.id], {
                        scale: 1,
                        duration: 0.4,
                        ease: "power2.out"
                    });
                }
            }
        });

        // Expand navbar with a fixed width instead of auto
        if (navbarRef.current) {
            gsap.to(navbarRef.current, {
                width: "430px", // Fixed width instead of auto
                paddingLeft: "1.5rem",
                paddingRight: "1.5rem",
                duration: 0.4,
                ease: "power2.out"
            });
        }
    };

    const handleMouseLeave = () => {
        // Reset all icons
        if (iconsRef.current) {
            Object.keys(iconsRef.current).forEach(key => {
                if (iconsRef.current[key]) {
                    gsap.to(iconsRef.current[key], {
                        scale: 1,
                        duration: 0.4,
                        ease: "power2.out"
                    });
                }
            });
        }

        // Reset navbar with fixed width
        if (navbarRef.current) {
            gsap.to(navbarRef.current, {
                width: "400px", // Fixed width instead of auto
                paddingLeft: "1rem",
                paddingRight: "1rem",
                duration: 0.4,
                ease: "power2.out"
            });
        }
    };

    // Store refs for each icon element
    const addIconRef = (id: string, el: HTMLSpanElement | null) => {
        if (el && iconsRef.current) {
            iconsRef.current[id] = el;
        }
    };

    const navLinks: NavLink[] = [
        {
            id: 'Home',
            href: '/',
            icon: <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path opacity="0.25" d="M20 18.8V6.63998L13.6514 2.81501L13.6514 2.815C13.0511 2.45333 12.751 2.2725 12.4304 2.20186C12.1469 2.13938 11.8531 2.13938 11.5696 2.20186C11.249 2.2725 10.9489 2.45334 10.3486 2.81501L4 6.64001V18.8C4 19.9201 4 20.4802 4.21799 20.908C4.40973 21.2843 4.71569 21.5903 5.09202 21.782C5.51984 22 6.0799 22 7.2 22H16.8C17.9201 22 18.4802 22 18.908 21.782C19.2843 21.5903 19.5903 21.2843 19.782 20.908C20 20.4802 20 19.9201 20 18.8Z" fill="currentColor"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M1.14251 9.5145C1.42665 9.98808 2.04091 10.1416 2.51449 9.85749L12 4.16619L21.4855 9.85749C21.9591 10.1416 22.5733 9.98808 22.8575 9.5145C23.1416 9.04092 22.9881 8.42666 22.5145 8.14251L13.029 2.45121C12.3956 2.07119 11.6044 2.07119 10.971 2.45121L1.4855 8.14251C1.01192 8.42666 0.858357 9.04092 1.14251 9.5145Z" fill="currentColor"></path>
                <path d="M9 16C9 14.3431 10.3431 13 12 13C13.6569 13 15 14.3431 15 16V22H9V16Z" fill="currentColor"></path>
            </svg>
        },
        {
            id: 'Projects',
            href: '/projects',
            icon: <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M8 20C8 19.4477 8.44772 19 9 19H15C15.5523 19 16 19.4477 16 20V21C16 22.6569 14.6569 24 13 24H11C9.34315 24 8 22.6569 8 21V20Z" fill="currentColor"></path>
                <path opacity="0.25" d="M20 8C20 10.5264 18.8289 12.7793 17 14.2454V15C17 16.1046 16.1046 17 15 17C10.8358 17 15.5135 17 9 17C7.89543 17 7 16.1046 7 15V14.2454C5.17107 12.7793 4 10.5264 4 8C4 3.58172 7.58172 0 12 0C16.4183 0 20 3.58172 20 8Z" fill="currentColor"></path>
                <path d="M10.7071 8.29289C10.3166 7.90237 9.68342 7.90237 9.29289 8.29289C8.90237 8.68342 8.90237 9.31658 9.29289 9.70711L11 11.4142V17H13V11.4142L14.7071 9.70711C15.0976 9.31658 15.0976 8.68342 14.7071 8.29289C14.3166 7.90237 13.6834 7.90237 13.2929 8.29289L12 9.58579L10.7071 8.29289Z" fill="currentColor"></path>
            </svg>
        },
        {
            id: 'Blog',
            href: '/blogs',
            icon: <ImBlog className="w-4 h-4" />
        }
    ];

    const socialLinks: NavLink[] = [
        {
            id: 'Twitter',
            href: 'https://x.com/ayushcodesweb',
            icon: <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path opacity="0.25" d="M20.9999 7.5C21.4999 15 15.9999 21 8.99995 21C6.58804 21 4.17613 20.6768 2.28388 19.7706C1.85051 19.5631 2.0199 18.985 2.49936 18.9532C4.82944 18.7987 6.75765 18.2423 7.99995 17C11.0001 14 11.5 13 12.2646 9.02396C12.0933 8.54804 11.9999 8.03492 11.9999 7.5C11.9999 5.01472 14.0147 3 16.4999 3C18.0181 3 19.3607 3.75182 20.1757 4.90346L21.8929 4.65815C22.3207 4.59703 22.6194 5.07087 22.3796 5.43047L20.9999 7.5Z" fill="currentColor"></path>
                <path d="M7.99998 16.9999C2.58358 15.1944 1.64928 8.49939 2.62226 5.00708C2.73651 4.59701 3.26964 4.59488 3.48453 4.96234C5.14601 7.80359 8.30518 9.38991 12.2646 9.02385C18.5 9.02385 17 19.9999 7.99998 16.9999Z" fill="currentColor"></path>
            </svg>
        },
        {
            id: 'Github',
            href: 'https://github.com/ayushcodes1729',
            icon: <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"></path>
            </svg>
        },
        {
            id: 'Email',
            href: 'https://mail.google.com/mail/?view=cm&fs=1&to=ayushtiwari0803@gmail.com',
            icon: <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path opacity="0.25" d="M1 6C1 4.34315 2.34315 3 4 3H20C21.6569 3 23 4.34315 23 6V18C23 19.6569 21.6569 21 20 21H4C2.34315 21 1 19.6569 1 18V6Z" fill="currentColor"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M5.23177 7.35981C5.58534 6.93553 6.2159 6.87821 6.64018 7.23177L11.3598 11.1648C11.7307 11.4738 12.2693 11.4738 12.6402 11.1648L17.3598 7.23177C17.7841 6.87821 18.4147 6.93553 18.7682 7.35981C19.1218 7.78409 19.0645 8.41465 18.6402 8.76822L13.9205 12.7012C12.808 13.6284 11.192 13.6284 10.0794 12.7012L5.35981 8.76822C4.93553 8.41465 4.87821 7.78409 5.23177 7.35981Z" fill="currentColor"></path>
            </svg>
        },
        {
            id: 'Linkedin',
            href: 'https://www.linkedin.com/in/ayushcodes1729/',
            icon: <FaLinkedinIn className="w-4 h-4" />
        }
    ];

    // Set up the main animation for the navbar
    useGSAP(() => {
        gsap.from(".navbar-main", {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            delay: 0.2
        });

        // Set initial fixed width
        if (navbarRef.current) {
            gsap.set(navbarRef.current, {
                width: "400px"
            });
        }
    }, []);

    return (
        <nav className="fixed bottom-8 left-0 right-0 flex justify-center sm:px-0 px-10 z-50">
            <ul
                ref={navbarRef}
                className="navbar-main not-sm:w-[80vw] sm:overflow-visible overflow-x-auto flex items-center sm:gap-2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-gray-200"
                onMouseLeave={handleMouseLeave}
            >
                <div className="flex gap-2">
                    {navLinks.map(link => (
                        <Link
                            key={link.id}
                            href={link.href}
                            className="relative flex items-center justify-center p-2 rounded-full text-gray-600 hover:text-black transition-colors duration-200 group"
                            onMouseEnter={() => handleMouseEnter(link.id)}
                        >
                            <span className="absolute top-[-150%] bg-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg px-3 py-2 text-xs">{link.id}</span>
                            <span ref={(el) => addIconRef(link.id, el)} className="inline-flex items-center justify-center">
                                {link.icon}
                            </span>
                        </Link>
                    ))}
                </div>

                <div className="h-5 w-px bg-gray-300 mx-2" />

                <div className="flex gap-2">
                    {socialLinks.map(link => (
                        <Link
                            key={link.id}
                            href={link.href}
                            target="_blank"
                            className="relative flex items-center justify-center p-2 rounded-full text-gray-600 hover:text-black transition-colors duration-200 group"
                            onMouseEnter={() => handleMouseEnter(link.id)}
                        >
                            <span className="absolute top-[-150%] bg-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg px-3 py-2 text-xs">{link.id}</span>
                            <span ref={(el) => addIconRef(link.id, el)} className="inline-flex items-center justify-center">
                                {link.icon}
                            </span>
                        </Link>
                    ))}
                </div>

                <div className="h-5 w-px bg-gray-300 mx-2" />
                <div 
                    onMouseEnter={() => handleMouseEnter('theme')}
                >
                    <DarkModeToggle />
                </div>
            </ul>
        </nav>
    );
}