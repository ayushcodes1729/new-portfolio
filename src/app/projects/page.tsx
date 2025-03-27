"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { FaLink } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Projects() {
    const projects = [
        {
            name: "Dev4u",
            description: "A tinder for developers, where devs can connect with each other",
            thumb: "/Dev4uThumb.png",
            link: "https://app.dev4u.live/",
            github: "https://github.com/ayushcodes1729/Dev4u-web"
        },
        {
            name: "React Jobs",
            description: "A job board where recruiters can add jobs and employees can see the jobs",
            thumb: "/ReacJobsThumb.png",
            link: "https://react-jobs-steel.vercel.app/",
            github: "https://github.com/ayushcodes1729/React-jobs"
        },
        {
            name: "Isht World - Frontent UI",
            description: "Frontend of an educational courses selling website",
            thumb: "/IshtThumb.png",
            link: "https://isht-world.vercel.app/index.html",
            github: "https://github.com/ayushcodes1729/isht-world"
        },
        {
            name: "Medical Wholesale- Frontent UI",
            description: "Frontend of an educational courses selling website",
            thumb: "/MedicThumb.png",
            link: "https://doctor-portal-one.vercel.app/",
            github: "https://github.com/ayushcodes1729/doctor-portal"
        }
    ];

    useGSAP(() => {
        gsap.from(".works", {
            opacity: 0,
            x: -700,
            duration: 2.5,
            ease: "power3.inOut",
            stagger: 0.3
        });

        gsap.from(".cards",{
            y:100,
            opacity: 0,
            duration: 1.5,
            ease: "power3.inOut"
        })
    });

    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <>
            <h1 className="works text-5xl px-4 py-5 w-full font-bold">Recent Works</h1>
            <hr className="w-[95%] py-2 works" />
            <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 px-4 my-8">
                {projects.map((project, index) => (
                    <div
                        className="cards relative rounded-2xl overflow-hidden group"
                        key={index}
                        style={{ boxShadow: "rgba(255, 255, 255, 0.1) 0px 5px 15px", transition: "box-shadow 0.3s ease-in-out" }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.boxShadow = "rgba(255, 255, 255, 0.3) 0px 5px 15px";
                            setHoveredIndex(index);
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.boxShadow = "rgba(255, 255, 255, 0.1) 0px 5px 15px";
                            setHoveredIndex(null);
                        }}
                    >
                        <Image
                            src={project.thumb}
                            priority
                            width={200}
                            height={100}
                            alt="thumb"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="w-full h-full object-cover"
                        />

                        {/* Project Details */}
                        <div className={`absolute left-0 bottom-0 w-full h-full flex flex-col justify-end px-4 py-4 
                            bg-black/60 text-white
                            ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'} 
                            transition-opacity duration-500`}>
                            <span className="xl:text-3xl text-xl font-semibold text-white">{project.name}</span>
                            <p className="xl:text-xl text-base mb-2">{project.description}</p>
                            <div className="absolute top-0 right-0 w-[25%] p-2 flex justify-between gap-1">
                                <Link
                                    href={project.github}
                                    target="_blank"
                                    className="flex justify-center items-center gap-2 py-1 text-center rounded-full p-1 text-sm"
                                >
                                    <FaGithub className="text-2xl"/>
                                </Link>
                                <Link
                                    href={project.link}
                                    target="_blank"
                                    className="flex justify-center items-center gap-2 py-1 text-center rounded-full p-1 text-sm"
                                >
                                    <FaLink className="text-2xl"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}