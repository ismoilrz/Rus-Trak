import { Route, Routes } from "react-router-dom"
import AnyQuestion from "./components/anyQuestion/anyQuestion"
import Footer from "./components/footer/footer"
import Header from "./components/header/header"
import { router } from "./router/routes"
import { useEffect, useState } from "react"
import Breadcrumbs from "./components/breadCrumbs/breadCrumbs"

import "./shared/i18n/i18n"

function App() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
 
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Header isScrolled={isScrolled} />
      <main className={`${isScrolled ? "pt-[20vh]" : ""}`}>
        <Breadcrumbs />
        <Routes>
          {router.map((rout, r) => (
            <Route key={r} path={rout.path} element={rout.element} />
          ))}
        </Routes>
      </main>

      <AnyQuestion />
      <Footer />
    </div>
  )
}

export default App