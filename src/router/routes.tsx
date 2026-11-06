import About from "../pages/about/about";
import Cart from "../pages/cart/card";
import Catalog from "../pages/catalog/catalog";
import CatalogDetail from "../pages/catalogDetail/catalogDetail";
import Contacts from "../pages/contacts/contacts";
import Credit from "../pages/credit/credit";
import Galeriya from "../pages/galeriya/galeriya";
import HeartPage from "../pages/heart/heart";
import Home from "../pages/home/home";
import Information from "../pages/information/information";
import News from "../pages/news/news";
import NewsDetail from "../pages/newsDetail/newsDetail";
import NotFound from "../pages/notFound/notFound";
import OurPartners from "../pages/ourpartners/ourPartners";
import Production from "../pages/production/production";
import Reklama from "../pages/reklama/reklama";
import Repair from "../pages/repair/repair";
import Reviews from "../pages/reviews/reviews";
import SelectedCatalog from "../pages/selectedCatalog/selectedCatalog";
import Sertificate from "../pages/sertificate/sertificate";
import Service from "../pages/service/service";
import Supliers from "../pages/supliers/supliers";
import Vacancies from "../pages/vacancies/vacancies";
import Video from "../pages/video/video";
import type { RoutesType } from "../types/routesType";

export const getRouter = (openCallModal: () => void): RoutesType[] => [
    {
        id: 1,
        path: "/",
        element: <Home openCallModal={openCallModal} /> 
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
    },
    {
        id: 6,
        path: "/about",
        element: <About />
    },
    {
        id: 7,
        path: "/ourpartners",
        element: <OurPartners />
    },
    {
        id: 8,
        path: "/production",
        element: <Production />
    },
    {
        id: 9,
        path: "/supliers",
        element: <Supliers />
    }, 
    {
        id: 10,
        path: "/reviews",
        element: <Reviews />
    },
    {
        id: 11,
        path: "/sertificate",
        element: <Sertificate />
    }, 
    { 
        id: 12,
        path: "/vacancies",
        element: <Vacancies />
    },
    {
        id: 13,
        path: "/credit",
        element: <Credit />
    },
    {
        id: 14,
        path: "/galeriya",
        element: <Galeriya />,
    },
    {
        id: 15,
        path: "/video",
        element: <Video />,
    },
    {
        id: 16,
        path: "/reklama",
        element: <Reklama />,
    },
    {
        id: 17,
        path: "/information",
        element: <Information />,
    },
    {
        id: 18,
        path: "/catalog",
        element: <Catalog />
    },
    {
        id: 19,
        path: "/catalog/:selectedcatalog",
        element: <SelectedCatalog />
    },
    {
        id: 20,
        path: "/news/:slug",
        element: <NewsDetail />
    },
    {
        id: 21,
        path: "/catalog/:selectedCatalog/:slug",
        element: <CatalogDetail />
    },
    {
        id: 22,
        path: "/cart",
        element: <Cart />
    },
    {
        id: 23,
        path: "/heart",
        element: <HeartPage />
    },
    {
        id: 24,
        path: "*",
        element: <NotFound />
    }
];