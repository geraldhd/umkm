import { SideNavItemGroup } from "@/types/type";
import { BsHouseDoor, BsListUl } from "react-icons/bs";



export const SIDENAV_ITEMS: SideNavItemGroup[] = [

    {
        title: "Dashboards",
        menuList: [{
            title: 'Dashboard',
            path: '/',
            icon: <BsHouseDoor size={20} />,
        }]
    },
    {
        title: "Manage",
        menuList: [
            {
                title: 'UMKM Pemasaran',
                path: '/UMKM-Pemasaran',
                icon: <BsListUl size={20} />,
            },
            {
                title: 'UMKM Binaan',
                path: '/UMKM-Binaan',
                icon: <BsListUl size={20} />,
            }
        ]
    }
];