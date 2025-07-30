"use client"
import { Card } from "@/components/ui/card"
import { LayoutStore } from "../Store/Layout.store"
import { Button } from "@/components/ui/button"
import { Menu, Moon } from "lucide-react"
import { ProfileDropdown } from "./ProfileDropdown"
export default function Page() {
    const { toggleSideBar, isSideBarExpanded } = LayoutStore()
    const applyDarkMode = () => {
        const elem = document.getElementById("body")
        if (elem?.classList.contains("dark")) {
            elem.classList.remove("dark")
        } else {
            elem?.classList.add("dark")
        }
    }

    return (
        <Card className="h-full flex flex-row justify-between px-10  items-center">
            <Menu size={35} className="cursor-pointer text-[var(--color-primary)]" onClick={() => toggleSideBar(!isSideBarExpanded)} />
            <div className="flex cursor-pointer justify-between items-center gap-4">
                <Moon onClick={applyDarkMode} />
                <ProfileDropdown />
            </div>
        </Card>
    )
}