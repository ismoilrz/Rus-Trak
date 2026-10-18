import { useEffect, useState } from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import "./shared/i18n/i18n"

import AnyQuestion from "./components/anyQuestion/anyQuestion"
import Footer from "./components/footer/footer"
import Header from "./components/header/header"
import Breadcrumbs from "./components/breadCrumbs/breadCrumbs"

import CallModal from "./components/callModal/callModal"

import { router } from "./router/routes"


function App() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [callModal, setCallModal] = useState<boolean>(false);

  const openCallModal = () => setCallModal(true);
  const closeCallModal = () => setCallModal(false);

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


    useEffect(() => {
    const scrollClosed = callModal;

    if (scrollClosed) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [callModal]);

  const location = useLocation();
  const isSelectedCatalogPage = location.pathname.startsWith("/catalog/");

  return (
    <div>
      <Header openCallModal={openCallModal} isScrolled={isScrolled} />
      <main className={`${isScrolled ? "pt-[20vh]" : ""} ${isSelectedCatalogPage ? "bg-[#f5f5f5]" : "bg-white"}`}>
        <div className="container max-xl:px-[3%]"><Breadcrumbs /></div>
        <Routes>
          {router.map((rout, r) => (
            <Route key={r} path={rout.path} element={rout.element} />
          ))}
        </Routes>
      </main>

      <AnyQuestion isSelectedCatalogPage={isSelectedCatalogPage} />
      <Footer openCallModal={openCallModal} />

      <CallModal callModal={callModal} closeCallModal={closeCallModal} />

    </div>
  )
}

export default App