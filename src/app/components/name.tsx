"use client";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import { RiNextjsFill } from "react-icons/ri";
import { FaReact, FaNodeJs, FaAws, FaGitAlt } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql, SiFirebase, SiExpress, SiGithubactions, SiNginx } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { MdSettingsEthernet } from "react-icons/md";
import React from "react";

export default function Name() {
    const introRef = useRef(null);
    const skills = [
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
        { name: "VSCode", logo: "SiVisualstudiocode", position: "top-[85%] left-[65%]" }
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

    const skillsHighlight = (event) => {
        gsap.to(event.currentTarget, {
            opacity: 1, // Increase opacity only for the hovered element
            ease: "power3.inOut",
            duration: 0.3
        });
    };

    const skillsReset = (event) => {
        gsap.to(event.currentTarget, {
            opacity: 0.3, // Restore the original opacity when the mouse leaves
            ease: "power3.inOut",
            duration: 0.3
        });
    };

    useGSAP(() => {
        gsap.from(".intro", {
            y: 50,
            opacity: 0,
            duration: 2,
            // delay: 1,
            ease: "power3.inOut",
            stagger: 0.4
        })

        gsap.from(".me", {
            opacity: 0,
            duration: 2,
            ease: "power3.inOut"
        })
        gsap.from(".filled-circle", {
            opacity: 0,
            duration: 3,
            delay: 1,
            ease: "power3.inOut"
        })
    })

    return (
        <div className="flex items-center w-screen h-[60vh] overflow-hidden relative">
            {skills.map((skill, index) => (
                <div
                    key={index}
                    style={{ boxShadow: "rgba(255, 255, 255, 0.3) 0px 5px 15px", transition: "box-shadow 0.3s ease-in-out" }}
                    className={`absolute filled-circle opacity-30 lg:flex items-center gap-1 hidden px-2 py-1 text-white/90 rounded-full bg-white/20 border-2 border-white/90 -z-[1] ${skill.position}`}
                    onMouseEnter={skillsHighlight}
                    onMouseLeave={skillsReset} // Reset opacity when mouse leaves
                >
                    {React.createElement(iconMap[skill.name])}
                    {skill.name}
                </div>
            ))}

            <div className="me px-10 w-[40%] flex justify-end">
                <Image src="/me-comp.png" alt="my-image" width={100} height={100} className="rounded-full w-68 h-68" />
            </div>
            <div ref={introRef} className="flex flex-col gap-4 items-start w-[60%]">
                <span className="intro text-3xl">Hi, I am</span>
                <h1 className="intro text-5xl font-semibold">
                    Ayush Kumar
                </h1>
                <span className="intro text-3xl">I make cool <span className="text-amber-300">web apps</span> that solve real-world problems</span>
            </div>
        </div>
    );
}