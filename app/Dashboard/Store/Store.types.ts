export type ILayoutStore = {
    isSideBarExpanded: boolean,
   sideBarWidth:string,
    toggleSideBar: (shouldClose: boolean) => void
    setSideBarWidth:(width:string)=> void
}

