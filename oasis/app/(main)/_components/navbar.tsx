"use client"

import { useQuery } from "convex/react"
import { useParams } from "next/navigation"

interface NavbarProps {
    isCollapsed: boolean
    onResetWidth: () => void
}

export const Navbar = ({
    isCollapsed,
    onResetWidth
}: NavbarProps) => {
    

    return (
        <div>
            Navbar!
        </div>
    )
}