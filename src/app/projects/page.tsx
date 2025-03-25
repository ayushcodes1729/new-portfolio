"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { FaLink } from "react-icons/fa";



export default function Projects() {
    const projects = [
        {
            name: "Dev4u",
            description: "A tinder for developers, where devs can connect with each other",
            source: "/Dev4u - Google Chrome 2025-02-19 22-59-25.mp4",
            thumb: "/Dev4uThumb.png",
            link: "https://app.dev4u.live/",
            github: "https://github.com/ayushcodes1729/Dev4u-web"
        },
        {
            name: "React Jobs",
            description: "A job board where recruiters can add jobs and employees can see the jobs",
            source: "/React jobs - Google Chrome 2025-03-25 01-36-14.mp4",
            thumb: "/ReacJobsThumb.png",
            link: "https://react-jobs-steel.vercel.app/",
            github: "https://github.com/ayushcodes1729/React-jobs"
        },
        {
            name: "Isht World - Frontent UI",
            description: "Frontend of an educational courses selling website",
            source: "/React jobs - Google Chrome 2025-03-25 01-36-14.mp4",
            thumb: "/ReacJobsThumb.png",
            link: "https://react-jobs-steel.vercel.app/",
            github: "https://github.com/ayushcodes1729/React-jobs"
        },
        {
            name: "Medical Wholesale- Frontent UI",
            description: "Frontend of an educational courses selling website",
            source: "/React jobs - Google Chrome 2025-03-25 01-36-14.mp4",
            thumb: "/ReacJobsThumb.png",
            link: "https://react-jobs-steel.vercel.app/",
            github: "https://github.com/ayushcodes1729/React-jobs"
        },
        // ... other projects
    ];

    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const videoRefs = useRef<(HTMLVideoElement | null)[]>(projects.map(() => null))

    const videoPlay = (index: number) => {
        const video = videoRefs.current[index]
        if (video) {
            const playVideo = video.play();

            if (playVideo !== undefined) {
                playVideo.then(
                    () => {
                        console.log("Video Played successfully");
                    }
                )
                    .catch(
                        () => {
                            console.log("Video couldn't be played");
                        }
                    )
            }
        }
        else {
            console.log("Video not found");
        }
    }

    const videoPause = (index: number) => {
        const video = videoRefs.current[index]
        if (video) {
            video.pause();
        }
        else {
            console.log("Video not found");
        }
    }

    return (
        <>
            <h1 className="xl:text-5xl md:text-3xl text-2xl py-4 w-full text-center">My Works</h1>
            <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 px-4">
                {projects.map((project, index) => (
                    <div
                        className="relative rounded-2xl overflow-hidden group"
                        key={index}
                        style={{ boxShadow: "rgba(255, 255, 255, 0.1) 0px 5px 15px", transition: "box-shadow 0.3s ease-in-out" }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.boxShadow = "rgba(255, 255, 255, 0.3) 0px 5px 15px";
                            setHoveredIndex(index);
                            videoPause(index);
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.boxShadow = "rgba(255, 255, 255, 0.1) 0px 5px 15px";
                            setHoveredIndex(null);
                            videoPlay(index);
                        }}
                    >
                        <video
                            ref={(el) => {
                                videoRefs.current[index] = el
                            }}
                            src={project.source}
                            preload="metadata"
                            loop
                            muted
                            autoPlay
                            className="w-full"
                        ></video>

                        {/* Project Details */}
                        <div className={`absolute left-0 bottom-0 w-full px-4 py-4 
                            bg-black/60 text-white
                            ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'} 
                            transition-opacity duration-500`}>
                            <span className="xl:text-3xl text-xl font-semibold text-indigo-300">{project.name}</span>
                            <p className="xl:text-xl text-base mb-2">{project.description}</p>
                            <div className="flex w-full justify-between">
                                <Link
                                    href={project.github}
                                    target="_blank"
                                    className="flex justify-center items-center gap-2 py-1 border w-[40%] text-center border-white/50 
                                hover:bg-white/20 transition-colors text-sm"
                                >
                                    <FaGithub/>
                                    GitHub
                                </Link>
                                <Link
                                    href={project.link}
                                    target="_blank"
                                    className="flex justify-center items-center gap-2 py-1 border w-[40%] text-center border-white/50 
                                hover:bg-white/20 transition-colors text-sm"
                                >
                                    <FaLink/>
                                    Live Link
                                </Link>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}