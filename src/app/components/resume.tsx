"use client"

import Link from "next/link"
import { FaDownload } from "react-icons/fa6"

export default function Resume() {
    return (
        <div>
            <Link href="https://drive.google.com/file/d/1tZ5Wi67ttES1rfejuwAlPwryO4TpEMYo/view?usp=drive_link" target="_" className="flex flex-col items-center gap-1 p-2 rounded-lg bg-[#232323]">
                <FaDownload />
                <span>Download CV</span>
            </Link>
        </div>
    )
}