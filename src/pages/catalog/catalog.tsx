import { Link } from "react-router-dom"
import { catalogConfig } from "../../constants/catalogData/catalogConfig"

const Catalog = () => {
  return (
    <div className="container max-xl:px-[3%] grid grid-cols-4 max-lg:grid-cols-3 max-sm:grid-cols-2 gap-8 max-xl:gap-4 pt-6 pb-10">
        {Object.values(catalogConfig).map((item, idx) => (
          <Link to={`/catalog/${item.slug}`}>
            <div key={idx} className="bg-white h-[340px] max-lg:h-[300px] max-md:h-[280px] max-sm:h-[220px] rounded-lg border border-[#e3e3e3] p-4 cursor-pointer duration-200 hover:border-[#fec80b] hover:shadow-[0px_2px_20px_#fec90b5e]">
              <h3 className="text-[24px] max-xl:text-[20px] max-md:text-[16px] max-sm:text-[10px]">{item.title}</h3>
              <span className="text-[#a1a1a1] max-md:text-[14px] max-sm:text-[10px]">{item.trak.length} моделей</span>
              <img className="mx-auto max-sm:h-[80%]" src={item.cartImg} alt="pick" />
            </div>
          </Link>
        ))}
    </div>
  )
}

export default Catalog