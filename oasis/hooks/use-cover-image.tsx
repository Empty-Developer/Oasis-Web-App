import { create } from "zustand";

type CoverImageStore = {
    isOpen: boolean
    onOpen: () => void
    onClose: () => void 
    onReplace: (url: string) => void
    url?: string
}

export const useCoverImage = create<CoverImageStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true, url: undefined }),
    onClose: () => set({ isOpen: false, url: undefined }),
    onReplace: (url: string) => set({ isOpen: true, url }),
    url: undefined
}))