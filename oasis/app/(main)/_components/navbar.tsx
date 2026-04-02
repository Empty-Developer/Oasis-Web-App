"use client"

import { useParams } from "next/navigation"
import { useQuery } from "convex/react"
import { MenuIcon } from "lucide-react"

import { api } from "@/convex/_generated/api"
import { Id } from "@/convex/_generated/dataModel"

import { Title } from "./title"
import { Banner } from "./banner"
import { Menu } from "./menu"

interface NavbarProps {
    isCollapsed: boolean
    onResetWidth: () => void
}

export const Navbar = ({
    isCollapsed,
    onResetWidth
}: NavbarProps) => {
    const params = useParams();

    const documentId = params.documentId as Id<"documents">;

    const document = useQuery(
        api.documents.getById,
        (documentId && documentId !== ("null" as any))
            ? { documentId }
            : "skip"
    );

    if (document === undefined) {
        return (
            <nav className="bg-background dark:bg-background px-3 py-2 w-full flex items-center justify-between">
                <Title.Skeleton />
                <div className="flex items-center gap-x-2">
                    <Menu.Skeleton />
                </div>
            </nav>
        )
    }

    if (document === null) {
        return null;
    }

    return (
        <>
            <nav className="bg-background dark:bg-background px-3 py-2 w-full flex items-center gap-x-4">
                {isCollapsed && (
                    <MenuIcon
                        role="button"
                        onClick={onResetWidth}
                        className="h-6 w-6 text-muted-foreground hover:bg-neutral-300 dark:hover:bg-neutral-600 transition p-1 rounded-sm"
                    />
                )}
                <div className="flex items-center justify-between w-full">
                    <Title initialData={document} />
                    <div className="flex items-center gap-x-2">
                        <Menu documentId={document._id} />
                    </div>
                </div>
            </nav>
            {document.isArchived && (
                <Banner documentId={document._id} />
            )}
        </>
    )
}