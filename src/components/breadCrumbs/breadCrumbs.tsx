import { Link, useLocation, matchPath } from "react-router-dom";
import { useTranslation } from "react-i18next";

const validRoutes = [
  "/",
  "/about",
  "/news",
  "/contacts",
  "/service",
  "/repair",
  "/ourpartners",
  "/production",
  "/supliers",
  "/reviews",
  "/sertificate",
  "/vacancies",
  "/credit",
  "/galeriya",
  "/video",
  "/reklama",
  "/information",
  "/catalog",
  "/catalog/:selectedcatalog",
  "/news/:slug",
  "/catalog/:selectedCatalog/:slug",
  "/cart",
  "/heart",
];

const Breadcrumbs = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const currentPath = location.pathname;

  if (currentPath === "/") return null;

  const isValidRoute = validRoutes.some((route) => {
    const match = matchPath({ path: route, end: true }, currentPath);
    return match !== null;
  });

  const pathnames = currentPath.split("/").filter((x) => x);
  const isNewsDetail = pathnames[0] === "news" && pathnames.length > 1;

  if (!isValidRoute && !isNewsDetail) {
    return null;
  }

  if (isNewsDetail) return null;

  return (
    <nav className="text-sm text-gray-600 py-3">
      <div className="container flex items-center gap-2 overflow-x-auto whitespace-nowrap scrollbar-none max-md:text-[13px]">
        <Link to="/" className="hover:text-[#fec80b] transition-colors shrink-0">
          {t("breadcrumbs.home")}
        </Link>

        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          const translationKey = `breadcrumbs.${name}`;
          const translatedName = t(translationKey);
          
          const displayName = translatedName !== translationKey ? translatedName : decodeURIComponent(name);

          return (
            <span key={routeTo} className="flex items-center gap-2 shrink-0">
              <span className="text-gray-400">/</span>
              {isLast ? (
                <span className="text-black font-medium max-md:max-w-[180px] sm:max-w-[260px] max-md:truncate">
                  {displayName}
                </span>
              ) : (
                <Link to={routeTo} className="hover:text-[#fec80b] transition-colors">
                  {displayName}
                </Link>
              )}
            </span>
          );
        })}
      </div>
    </nav>
  );
};

export default Breadcrumbs;