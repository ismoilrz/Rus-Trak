import { useDocumentTitle } from "../../shared/useDocumentTitle"
import AboutApplication from "./aboutApplication"
import AboutBanner from "./aboutBanner"
import AboutSwiper from "./aboutSwiper"
import AboutTh from "./aboutTh"

const About = () => {
  useDocumentTitle("docTitle.about")
  return (
    <div>
      <AboutBanner />
      <AboutSwiper />
      <AboutTh />
      <AboutApplication />
    </div>
  )
}

export default About