import AboutCompany from "./aboutCompany"
import HomeTopSlide from "./HomeTopSlide"
import CircularScrollSection from "./scrollSection/scrollSection"
import Statistics from "./statistics"

const Home = () => {
  return (
    <>
        <HomeTopSlide />
        <AboutCompany />
        <Statistics />
        <CircularScrollSection />
    </>
  )
}

export default Home