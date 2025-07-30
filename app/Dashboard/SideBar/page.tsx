"use client"
import { Card } from "@/components/ui/card"
import { LayoutStore } from "../Store/Layout.store"
import { Bell, CalendarDays, CircleUserRound, GraduationCap, House, Landmark, Mails, UserRoundPen, X } from "lucide-react"
import Image from "next/image"


export default function Sidebar() {

    const { sideBarWidth, isSideBarExpanded ,toggleSideBar} = LayoutStore()

    const activatedLink: string = "Dashboard"

    //colour for that route group which is currently active
    const selectedTab = "bg-[var(--color-primary)] text-[var(--color-primary-foreground)] rounded-full"

    const sideLinks = [
        {
            Name: "Dashboard",
            Icon: <House />,
            isActive: "Dashboard" == activatedLink
        },
        {
            Name: "Student",
            Icon: <GraduationCap />,
            isActive: "Student" == activatedLink
        },
        {
            Name: "Student",
            Icon: <GraduationCap />,
            isActive: "Student" == activatedLink
        },
        {
            Name: "Teacher",
            Icon: <UserRoundPen />,
            isActive: "Teacher" == activatedLink
        },
        {
            Name: "Payments",
            Icon: <Landmark />,
            isActive: "Payments" == activatedLink
        },
        {
            Name: "FeedBacks",
            Icon: <Mails />,
            isActive: "FeedBacks" == activatedLink
        },
        {
            Name: "Events",
            Icon: <CalendarDays />,
            isActive: "Events" == activatedLink
        },
        {
            Name: "Nofifications",
            Icon: <Bell />,
            isActive: "Nofifications" == activatedLink
        },
        {
            Name: "Non Teaching Staff",
            Icon: <CalendarDays />,
            isActive: "CircleUserRound" == activatedLink
        }
    ]
    return (

        <Card className="size-full  max-w-[280px] transition-[width]  duration-600 overflow-x-hidden overflow-y-hidden hover:overflow-y-auto " style={{ width: sideBarWidth }} >
            <div className="flex justify-start items-center gap-2">
                <div className="w-[70px] shrink-0"><Image alt="s" width={200} height={200} src={"/smallDashboardLogo.png"} /></div>
                <div className={`${isSideBarExpanded ? "opacity-100" : "opacity-0"}`}>Akademy</div>
                <X size={40} className="sm:hidden ml-auto mr-2 cursor-pointer" onClick={()=>toggleSideBar(!isSideBarExpanded)}/>
            </div>
            <table className="whitespace-nowrap transition-all duration-1000 scroll-smooth">
                <tbody className="">
                    {sideLinks.map((link) => (
                        <tr className={`flex ${link.isActive ? selectedTab : ""}   justify-start items-center py-4 `}>
                            <td className={`w-[70px]   flex justify-center items-center `}>{link.Icon}</td>
                            <td className={`${isSideBarExpanded ? "block" : "hidden"}`}>{link.Name}</td>
                        </tr>
                    ))}
                </tbody>

            </table>

        </Card>

    )
}


