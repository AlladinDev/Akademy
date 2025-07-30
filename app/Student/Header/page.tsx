import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { PlusCircle, Search } from "lucide-react";

export default function Header() {
    return (
        <Card className="flex justify-between items-center  flex-row px-4 ">
            <div className="w-full max-w-sm flex justify-start items-center cursor-pointer">
                <Button><Search /></Button>
                <Input />
            </div>

            <div>

                <Button className="flex justify-center items-center gap-2 cursor-pointer"><PlusCircle />Add Student</Button>
            </div>
        </Card>
    )
}