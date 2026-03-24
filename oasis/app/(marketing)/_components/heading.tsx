"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Heading = () => {
    return (
        <div className="max-w-3xl space-y-4 ">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#3E78EC]">
                Your Ideas, Documents, & Plans. Unified. Welcome to <span className="underline">Oasis.</span>
            </h1>
            <h3 className="text-base sm:text-xl md:text-2xl font-medium">
                Oasis is the connected workspace where <br />
                better, faster work happens. 
            </h3>
            <Button className="dark:text[#FFF]">
                Enter Oasis
                <ArrowRight className="h-4 w-3 ml-2"/>
            </Button>
        </div>
    )
}