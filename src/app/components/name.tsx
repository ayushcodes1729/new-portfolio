"use client";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState, useEffect } from "react";
import { RiNextjsFill } from "react-icons/ri";
import { FaReact, FaNodeJs, FaAws, FaGitAlt } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql, SiExpress, SiGithubactions, SiNginx } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { MdSettingsEthernet } from "react-icons/md";
import React from "react";

export default function Name() {
    const introRef = useRef(null);

    const skills: { name: keyof typeof iconMap; logo: string; position: string }[] = [
        { name: "Nextjs", logo: "RiNextjsFill", position: "top-[17%] left-[6%]" },
        { name: "ReactJS", logo: "FaReact", position: "top-[8%] left-[32%]" },
        { name: "NodeJS", logo: "FaNodeJs", position: "top-[45%] left-[3%]" },
        { name: "TypeScript", logo: "SiTypescript", position: "top-[15%] left-[45%]" },
        { name: "Tailwind CSS", logo: "SiTailwindcss", position: "top-[10%] left-[60%]" },
        { name: "MongoDB", logo: "SiMongodb", position: "top-[85%] left-[8%]" },
        { name: "PostgreSQL", logo: "SiPostgresql", position: "top-[25%] left-[75%]" },
        { name: "AWS", logo: "FaAws", position: "top-[82%] left-[85%]" },
        { name: "ExpressJS", logo: "SiExpress", position: "top-[40%] left-[80%]" },
        { name: "GitHub Actions", logo: "SiGithubactions", position: "top-[83%] left-[50%]" },
        { name: "CI/CD", logo: "MdSettingsEthernet", position: "top-[80%] left-[75%]" },
        { name: "NGINX", logo: "SiNginx", position: "top-[65%] left-[5%]" },
        { name: "Git", logo: "FaGitAlt", position: "top-[80%] left-[40%]" },
        { name: "VSCode", logo: "VscVscode", position: "top-[85%] left-[65%]" }
    ];

    const iconMap = {
        Nextjs: RiNextjsFill,
        ReactJS: FaReact,
        NodeJS: FaNodeJs,
        TypeScript: SiTypescript,
        "Tailwind CSS": SiTailwindcss,
        MongoDB: SiMongodb,
        PostgreSQL: SiPostgresql,
        AWS: FaAws,
        ExpressJS: SiExpress,
        "GitHub Actions": SiGithubactions,
        "CI/CD": MdSettingsEthernet,
        NGINX: SiNginx,
        Git: FaGitAlt,
        VSCode: VscVscode
    };

    useGSAP(() => {
        gsap.from(".intro", {
            y: 50,
            opacity: 0,
            duration: 2,
            ease: "power3.inOut",
            stagger: 0.4
        });

        gsap.from(".me", {
            opacity: 0,
            duration: 2,
            ease: "power3.inOut"
        });

        // Modify skills animation
        gsap.from(".filled-circle", {
            opacity: 0,
            duration: 3,
            delay: 1,
            ease: "power3.inOut"
        });
    });

    return (
        <div className="flex md:flex-row flex-col items-center w-full md:w-screen min-h-[60vh] overflow-hidden relative px-4 md:px-0">
            {/* Skills Overlay - Hidden on mobile */}
            {skills.map((skill, index) => (
                <div
                    key={index}
                    style={{ boxShadow: "rgba(255, 255, 255, 0.3) 0px 5px 15px", transition: "box-shadow 0.3s ease-in-out" }}
                    className={`absolute filled-circle opacity-30 hidden lg:flex items-center gap-1 px-2 py-1 rounded-full -z-[1] ${skill.position}`}>
                    {React.createElement(iconMap[skill.name])}
                    {skill.name}
                </div>
            ))}

            <div className="flex flex-col md:flex-row items-center justify-center w-full gap-8 md:gap-16">
                {/* Profile Image */}
                <div className="me md:w-[40%] w-full flex justify-center md:justify-end">
                    <Image 
                        src="/me-comp.png" 
                        alt="my-image" 
                        width={200} 
                        height={200} 
                        className="rounded-full w-40 h-40 md:w-68 md:h-68 object-cover" 
                    />
                </div>

                {/* Intro Text */}
                <div ref={introRef} className="flex flex-col md:gap-4 items-center md:items-start text-center md:text-left w-full md:w-[60%]">
                    <span className="intro text-xl md:text-3xl">Hi, I am</span>
                    <h1 className="intro text-3xl md:text-5xl font-semibold text-center md:text-left">
                        Ayush Kumar
                    </h1>
                    <span className="intro text-lg md:text-3xl text-center md:text-left">
                        I make cool <span className="text-amber-300">web apps</span> that solve real-world problems
                    </span>
                </div>
            </div>
        </div>
    );
}