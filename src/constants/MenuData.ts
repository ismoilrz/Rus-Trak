import type { MenuDataTypes } from "../types/MenuDataType";

export const MenuData:MenuDataTypes[] = [
   {
        id: 1,
        label: "menu.service",
        path: "/service",
    },
    {
        id: 2,
        label: "menu.repair",
        path: "/repair",
    },
    {
        id: 3,
        label: "menu.news",
        path: "/news",
    },
    {
        id: 4,
        label: "menu.contacts",
        path: "/contacts",
    },
]

export type MenuItem = {
    id: number;
    labelKey: string;
    path: string;
};

export const AboutMenuData: MenuItem[] = [
    { id: 1, labelKey: "about_menu.item1", path: "/about" },
    { id: 2, labelKey: "about_menu.item2", path: "/news" },
    { id: 3, labelKey: "about_menu.item3", path: "/ourpartners" },
    { id: 4, labelKey: "about_menu.item4", path: "/production" },
    { id: 5, labelKey: "about_menu.item5", path: "/supliers" },
    { id: 6, labelKey: "about_menu.item6", path: "/reviews" },
    { id: 7, labelKey: "about_menu.item7", path: "/sertificate" },
    { id: 8, labelKey: "about_menu.item8", path: "/vacancies" },
    { id: 9, labelKey: "about_menu.item9", path: "/credit" }
];

export const MediaMenuData: MenuItem[] = [
    { id: 1, labelKey: "media_menu.item1", path: '/galeriya' },
    { id: 2, labelKey: "media_menu.item2", path: "/video" },
    { id: 3, labelKey: "media_menu.item3", path: "/reklama" },
    { id: 4, labelKey: "media_menu.item4", path: "/information" }
];