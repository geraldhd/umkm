'use client';
import { useSideBarToggle } from "@/hooks/use-sidebar-toggle";
import classNames from "classnames";
import IconList from "./icon/IconList";

export default function Header() {

    const { toggleCollapse, invokeToggleCollapse } = useSideBarToggle();
    const sidebarToggle = () => {
        invokeToggleCollapse();
    }
    const headerStyle = classNames("bg-sidebar fixed w-full z-[99997] px-4 shadow-sm shadow-slate-500/40",
        {
            ["sm:pl-[20rem]"]: !toggleCollapse,
            ["sm:pl-[5.6rem]"]: toggleCollapse,
        });
    return (
        <header className={headerStyle}>
            <div className="h-16 flex items-center justify-between">
                <button onClick={sidebarToggle} className="order-2 sm:order-1 shrink-btn float-right bg-background text-sidebar-muted-foreground hover:bg-sidebar-muted hover:text-background ml-3 rounded-md w-[30px] h-[30px] flex items-center justify-center shadow-md shadow-black/10  transition duration-300 ease-in-out">
                    <IconList />
                </button>

            </div>
        </header>
    )
}