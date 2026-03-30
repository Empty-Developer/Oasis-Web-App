"use client"

import Image from "next/image"
import { useUser } from "@clerk/clerk-react"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import { useMutation } from "convex/react"
import { api } from "@/convex/_generated/api"
import { toast } from "sonner"

const DocumentsPage = () => {
    const { user } = useUser()
    const create = useMutation(api.documents.create)

    const onCreate = () => {
        const promise = create({ title: "Untitled"})

        toast.promise(promise, {
            loading: "Creating a new note...",
            success: "New note created!",
            error: "Failed to create a new note."
        })
    }

    return (
        <div className="h-full flex flex-col items-center justify-center space-y-4 bg-background">
            <Image 
                src="/image-dark.png"
                height="300"
                width="300"
                alt="Empty"
                className="dark:hidden"
            />
            <Image 
                src="/image-white.png"
                height="300"
                width="300"
                alt="Empty"
                className="hidden dark:block"
            />
            <h2 className="text-xl font-semibold text-foreground ">
                Welcome to {user?.firstName}&apos;s Oasis
            </h2>
            <Button onClick={onCreate} size="lg" className="rounded-full px-10 bg-primary text-primary-foreground hover:bg-primary/90 shadow-md transition-all active:scale-95">
                <PlusCircle className="h-4 w-4 mr-2"/>
                Create a note Oasis
            </Button>
        </div>
    )
}

export default DocumentsPage