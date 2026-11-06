import AboutCompany from "./aboutCompany"
import HomeCategory from "./homeCategory"
import HomeNews from "./homeNews"
import HomeProduct from "./homeProduct"
import HomeTopSlide from "./HomeTopSlide"
import CircularScrollSection from "./scrollSect"
import Statistics from "./statistics"

const Home = () => {
  return (
    <>
        <HomeTopSlide />
        <HomeCategory />
        <AboutCompany />
        <Statistics />
        <CircularScrollSection />
        <HomeProduct />
        <HomeNews />
    </>
  )
}

export default Home