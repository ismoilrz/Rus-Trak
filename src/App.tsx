import { useEffect, useState } from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import "./shared/i18n/i18n"

import AnyQuestion from "./components/anyQuestion/anyQuestion"
import Footer from "./components/footer/footer"
import Header from "./components/header/header"
import Breadcrumbs from "./components/breadCrumbs/breadCrumbs"

import CallModal from "./components/callModal/callModal"

import { getRouter } from "./router/routes" // <-- getRouter ni import qilamiz
import Loading from "./components/spinner/spinner"
import { ScrollToTop } from "./components/scrollTop/scrollTop"
import SearchCom from "./components/search/search"

function App() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [callModal, setCallModal] = useState<boolean>(false);

  const [openSearch, setOpenSearch] = useState<boolean>(false)
  const openSearchF = () => setOpenSearch(true)
  const closeSearchf = () => setOpenSearch(false)

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
  const isCatalog = location.pathname.startsWith("/catalog");
  const isNewsDetail = location.pathname.startsWith("/news/") && location.pathname.split("/").filter(Boolean).length > 1;

  const isGrayBackground = isCatalog || isNewsDetail;

  const router = getRouter(openCallModal);

  return (
    <div>
      <Header openSearchF={openSearchF} openCallModal={openCallModal} isScrolled={isScrolled} />
      <main className={`${isScrolled ? "pt-[20vh]" : ""} ${isGrayBackground ? "bg-[#f5f5f5]" : "bg-white"}`}>
        <div className="container max-xl:px-[3%]">
          <Breadcrumbs />
        </div>
        <Loading />
        <ScrollToTop />
        <Routes>
          {router.map((rout) => (
            <Route key={rout.id} path={rout.path} element={rout.element} />
          ))}
        </Routes>
      </main>

      <AnyQuestion isGrayBack={isGrayBackground} />
      <Footer openCallModal={openCallModal} />

      <SearchCom openSearch={openSearch} closeSearchF={closeSearchf} />
      <CallModal callModal={callModal} closeCallModal={closeCallModal} />
    </div>
  );
}

export default App;