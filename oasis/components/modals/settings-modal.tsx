"use client"

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useSettings } from "@/hooks/use-settings"
import { Label } from "@/components/ui/label"
import { ModeToggle } from "@/components/mode-toggle"
import { Globe } from "lucide-react"

export const SettingsModal = () => {
    const settings = useSettings()

    return (
        <Dialog open={settings.isOpen} onOpenChange={settings.onClose}>
            <DialogContent className="max-w-md">
                <DialogHeader className="border-b pb-3">
                    <DialogTitle className="text-lg font-medium">
                        My settings
                    </DialogTitle>
                </DialogHeader>
                <div className="flex flex-col gap-y-6 pt-4">
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col gap-y-1">
                            <Label className="text-sm font-medium">
                                Appearance
                            </Label>
                            <span className="text-[0.8rem] text-muted-foreground">
                                Customize how Oasis looks on your device
                            </span>
                        </div>
                        <ModeToggle />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col gap-y-1">
                            <Label className="text-sm font-medium flex items-center gap-x-2">
                                Language
                            </Label>
                            <span className="text-[0.8rem] text-muted-foreground">
                                Choose your preferred language
                            </span>
                        </div>
                        <Select defaultValue="en">
                            <SelectTrigger className="w-[130px] h-9 bg-secondary border-none focus:ring-0">
                                <SelectValue placeholder="Language" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="en">English</SelectItem>
                                <SelectItem value="ru">Русский</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}