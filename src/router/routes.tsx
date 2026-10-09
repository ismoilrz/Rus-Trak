import Contacts from "../pages/contacts/contacts";
import Home from "../pages/home/home";
import News from "../pages/news/news";
import Repair from "../pages/repair/repair";
import Service from "../pages/service/service";
import type { RoutesType } from "../types/routesType";

export const router:RoutesType[] = [
    {
        id: 1,
        path: "/",
        element: <Home />
    },
    {
        id: 2,
        path: "/service",
        element: <Service />,
    },
    {
        id: 3,
        path: "/repair",
        element: <Repair />,
    },
    {
        id: 4,
        path: "/news",
        element: <News />,
    },
    {
        id: 5,
        path: "/contacts",
        element: <Contacts />
    }
]