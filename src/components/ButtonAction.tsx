"use client"

import { Pencil, Trash } from "lucide-react"
import Link from "next/link"

const ButtonAction = () => {
    return (
        <div>
            <Link href="/edit/1" className="btn btn-warning mr-2">
                <Pencil className="size-4" /> Edit
            </Link>
            <button className="btn btn-error">
                <Trash className="size-4" />Delete
            </button>
        </div>
    )
}

export default ButtonAction