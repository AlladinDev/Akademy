import { create } from "zustand";
import { ILayoutStore } from "./Store.types";

export const sideBarExpandedWidth = "280px"
export const sideBarCollapsedWidth = "70px"

export const LayoutStore = create<ILayoutStore>((set) => ({
    isSideBarExpanded: true,
    sideBarWidth: sideBarExpandedWidth,

    toggleSideBar: (shouldClose) => set((state) => {
        const isSmallScreen = typeof window !== "undefined" && window.innerWidth <= 768;
        if (isSmallScreen) {
            if (shouldClose) {
                return {
                    ...state, isSideBarExpanded: shouldClose, sideBarWidth: "0px"
                }
            } else {
                return {
                    ...state, isSideBarExpanded: shouldClose, sideBarWidth: sideBarExpandedWidth
                }
            }
        } else {
            if (shouldClose) {
                return { ...state, isSideBarExpanded: shouldClose, sideBarWidth: sideBarExpandedWidth }
            }
            return { ...state, isSideBarExpanded: shouldClose, sideBarWidth: sideBarCollapsedWidth }
        }
    }),

    setSideBarWidth: (width) => set((state) => ({ ...state, sideBarWidth: width }))
}))