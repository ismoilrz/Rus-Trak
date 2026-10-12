import { MoveRight } from "lucide-react"
import { Link } from "react-router-dom"

import pre from "../../assets/about-truck32.png"

const AboutCompany = () => {
  return (
    <section className="container flex items-center justify-between py-25 max-xl:px-[3%] max-lg:flex-col max-lg:gap-8">
        <div className="w-1/2 max-lg:w-full">
            <h2 className="text-[42px] font-[500]">О компании <span className="text-[#fec80b]">Рустрак</span></h2>
            <p className="text-[18px] mt-4">
                Наша компания занимает лидирующие позиции на рынке спецтехники: 
                каждый день мы вносим свой вклад в развитие отечественного автопрома
                и укрепление российской экономики.
            </p>
            <p className="text-[18px] py-10">
                «РусТрак» является ведущим производителем коммерческого транспорта и 
                специализированной техники. Наша работа признана и высоко оценена крупнейшими 
                отечественными корпорациями и государственными структурами: мы поставляем 
                спецтехнику для таких корпораций, как Газпром, Росатом, Россети, РСК «МИГ» и других.
            </p>
            <Link to={"/"}>
                <button className="flex items-center gap-3 px-7 py-3 rounded-[4px] text-black bg-[#fec80b] duration-200 hover:opacity-[0.7]">
                    Подробнее 
                    <MoveRight />
                </button>
            </Link>
        </div>
        <div>
            <img src={pre} alt="About Image" />
        </div>
    </section>
  )
}

export default AboutCompany