"use client";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useEffect, useState } from "react";

export default function Name() {
    const marqueeRef = useRef(null);
    const [textCount, setTextCount] = useState(2); // Start with 2 copies
    
    useEffect(() => {
        if (marqueeRef.current) {
            const parentWidth = marqueeRef.current.parentNode.offsetWidth;
            const textWidth = marqueeRef.current.children[0].offsetWidth;
            // Ensure enough duplicates to cover at least 2x the full width
            const minRequiredCopies = Math.ceil((parentWidth * 2) / textWidth) + 1;
            setTextCount(minRequiredCopies);
        }
    }, []);
    
    useGSAP(() => {
        // Create a seamless loop by resetting position
        if (marqueeRef.current) {
            const textWidth = marqueeRef.current.children[0].offsetWidth;
            // const totalWidth = textWidth * textCount;
            
            // Animation timeline for smooth looping
            gsap.to(marqueeRef.current, {
                x: -textWidth, // Move by exactly one text element width
                duration: 8, // Adjust speed as needed
                ease: "linear",
                repeat: -1,
                onRepeat: () => {
                    // Reset position on each repeat for seamless loop
                    gsap.set(marqueeRef.current, { x: -5 });
                }
            });
        }
    });
    
    return (
        <div className="flex flex-col w-screen h-[70vh] overflow-hidden">
            <div className="px-10">
                <Image src="/me-comp.png" alt="my-image" width={100} height={100} className="rounded-full" />
            </div>
            <div className="flex flex-col items-center">
                <span className="text-2xl">Hi, I am</span>
                {/* Scrolling Container */}
                <div className="w-full overflow-hidden relative">
                    <div ref={marqueeRef} className="flex whitespace-nowrap">
                        {/* Dynamically duplicate text for smooth infinite scroll */}
                        {Array.from({ length: textCount }).map((_, index) => (
                            <h1 key={index} className="text-[9rem] font-medium leading-40">
                                - Ayush  Kumar -
                            </h1>
                        ))}
                    </div>
                </div>
                <span className="text-3xl">I make websites</span>
            </div>
        </div>
    );
}