"use client"
import { useEffect, useRef, useState } from "react";

export default function Time() {

    const time = new Date().toLocaleTimeString()
    const timeRef = useRef(time)
    const [ctime, setTime] = useState(timeRef.current);


    useEffect(() => {
        const interval = setInterval(() => {
            timeRef.current = new Date().toLocaleTimeString();
            setTime(timeRef.current)
        }, 1000);

        return () => clearInterval(interval); 
    }, []);
    return(
        <div className="p-2 rounded-lg">{ctime}</div>
    )
}