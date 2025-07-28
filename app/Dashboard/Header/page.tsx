"use client"
import { Card } from "@/components/ui/card"
import { LayoutStore } from "../Store/Layout.store"
import { Button } from "@/components/ui/button"
export const Header = () => {
    const { toggleSideBar, isSideBarExpanded } = LayoutStore()
    return (
        <Card className="h-full">
            <Button className="cursor-pointer max-w-md" onClick={() => toggleSideBar(!isSideBarExpanded)}>Toggle Sidebar</Button>
        </Card>
    )
}