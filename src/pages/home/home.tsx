import AboutCompany from "./aboutCompany"
import HomeCategory from "./homeCategory"
import HomeNews from "./homeNews"
import HomeProduct from "./homeProduct"
import HomeTopSlide from "./HomeTopSlide"
import CircularScrollSection from "./scrollSect"
import Statistics from "./statistics"

interface HomeProps {
  openCallModal?: () => void;
}
const Home = ({openCallModal}:HomeProps) => {
  return (
    <>
        <HomeTopSlide openCallModal={openCallModal} />
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