import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  if (pathnames.length === 0) return null;

  return (
    <nav className="py-4 text-sm text-gray-600">
      <div className="container flex items-center gap-2">
        <Link to="/" className="hover:text-[#fec80b] transition-colors">
          Главная
        </Link>

        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return (
            <span key={routeTo} className="flex items-center gap-2">
              <span>/</span>
              {isLast ? (
                <span className="text-black font-medium">{name}</span>
              ) : (
                <Link to={routeTo} className="hover:text-[#fec80b] transition-colors">
                  {name}
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