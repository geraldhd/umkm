

//set side menu

"use client";
import { useSideBarToggle } from '@/hooks/use-sidebar-toggle';
import { SideNavItem } from '@/types/type';
import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

export const SideBarMenuItem = ({ item }: { item: SideNavItem }) => {

    const { toggleCollapse } = useSideBarToggle();

    const pathname = usePathname();

    const inactiveLink = classNames("flex items-center min-h-[40px] h-full text-sidebar-foreground py-2 px-4 hover:text-background  hover:bg-sidebar-muted rounded-md transition duration-200",
        { ["justify-center"]: toggleCollapse }
    );

    const activeLink = classNames(" text-sidebar bg-sidebar-muted");

    return (
        <>
            <Link href={item.path} className={`${inactiveLink} ${item.path === pathname ? activeLink : ''}`}>
                    <div className='min-w-[20px]'>{item.icon}</div>
                    {!toggleCollapse && (<span className="ml-3 leading-6 font-semibold">{item.title}</span>)}
                </Link>
        </>
    );
};