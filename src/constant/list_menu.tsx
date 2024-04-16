import { SideNavItemGroup } from "@/types/type";
import IconBarChart2Line from "@/components/icon/IconBarChart2Line";
import IconBarChartBoxLine from "@/components/icon/IconBarChartBoxLine";
import IconBxHome from "@/components/icon/IconBxHome"
import IconCalendarTime from "@/components/icon/IconCalendarTime";


export const SIDENAV_ITEMS: SideNavItemGroup[] = [
    {
        title: "Dashboards",
        menuList: [{
            title: 'Dashboard',
            path: '/',
            icon: <IconBxHome/>,
        }]
    },
    {
        title: "Manage",
        menuList: [
            {
                title: 'UMKM Pemasaran',
                path: '/UMKM-Pemasaran',
                icon: <IconBarChart2Line/>,
            },
            {
                title: 'UMKM Binaan',
                path: '/UMKM-Binaan',
                icon: <IconBarChartBoxLine/>,
            },
            {
                title: 'Periode Produk',
                path: '/Periode-Produk',
                icon: <IconCalendarTime/>,
            },
        ]
    }
];
