"use client"

import  Sidebar from "./Dashboard/SideBar/page";
import Header from "./Dashboard/Header/page";
import  Menu  from "./Dashboard/Menu/page";

export default function Home() {

  return (
    <div className="flex justify-between p-1 items-center h-[100dvh] relative border border-green-600">
      <div className={`transition-all duration-600 h-full overflow-y-auto absolute sm:relative  overflow-x-hidden `} >
        <Sidebar />
      </div>
      <div className="w-full  h-full px-2  ">
        <div className="h-[70px]">
          <Header />
        </div>
        <div className="h-[calc(100%-70px)] pt-2 overflow-y-auto">
          <Menu />
        </div>
      </div>
    </div>
  );
}
