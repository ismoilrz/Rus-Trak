import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  if (pathnames.length === 0) return null;

  const isNewsDetail = pathnames[0] === "news" && pathnames.length > 1;
  if (isNewsDetail) return null;

  return (
    <nav className="text-sm text-gray-600 py-3">
      <div className="container flex items-center gap-2 overflow-x-auto whitespace-nowrap scrollbar-none max-md:text-[13px]">
        <Link to="/" className="hover:text-[#fec80b] transition-colors shrink-0">
          Главная
        </Link>

        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return (
            <span key={routeTo} className="flex items-center gap-2 shrink-0">
              <span className="text-gray-400">/</span>
              {isLast ? (
                <span className="text-black font-medium max-md:max-w-[180px] sm:max-w-[260px] max-md:truncate">
                  {decodeURIComponent(name)}
                </span>
              ) : (
                <Link to={routeTo} className="hover:text-[#fec80b] transition-colors">
                  {decodeURIComponent(name)}
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