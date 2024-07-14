"use client"

import { LayoutDashboard } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="navbar bg-neutral">
            <div className="container">
                <Link href="/"><LayoutDashboard /></Link>
            </div>
            <div className="flex-none">
                <Link href="/create" className="btn btn-primary text-white">
                    Create post
                </Link>
            </div>
        </div>
    )
}
