"use client"
import { Card } from "@/components/ui/card"
import { LayoutStore } from "../Store/Layout.store"
import { House } from "lucide-react"
import Image from "next/image"
import "./Sidebar.css"

export default function Sidebar () {

    const {  sideBarWidth } = LayoutStore()

    return (
        <Card className="size-full transition-all duration-700 overflow-x-hidden w-0 md:w-full" style={{ width: sideBarWidth }} >
            <table className=" transition-all duration-1000">
                <tr className=" flex justify-start items-center py-4 px-2 text-center">
                    <td className="w-[100px] pr-10 block  "><Image width={100} alt="Icon" className="" height={200} src={"/dashboardLogo.png"} /></td>
                    <td className={`text-2xl`}>Akademy</td>
                </tr>

                <tr className=" flex justify-start items-center py-4">
                    <td className="w-[70px]  flex justify-center items-center "><House /></td>
                    <td className={` `}>Dashboard</td>
                </tr>
                <tr className=" flex justify-start items-center py-4">
                    <td className="w-[70px]  flex justify-center items-center "><House /></td>
                    <td className={``}>Dashboard</td>
                </tr>

                <tr className=" flex justify-start items-center py-4">
                    <td className="w-[70px]  flex justify-center items-center "><House /></td>
                    <td className={``}>Dashboard</td>
                </tr>

                <tr className=" flex justify-start items-center py-4">
                    <td className="w-[70px]  flex justify-center items-center "><House /></td>
                    <td className={``}>Dashboard</td>
                </tr>

                <tr className=" flex justify-start items-center py-4">
                    <td className="w-[70px]  flex justify-center items-center "><House /></td>
                    <td className={``}>Dashboard</td>
                </tr>

            </table>

        </Card>
    )
}