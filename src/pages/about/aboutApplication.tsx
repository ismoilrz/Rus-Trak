import aboutap1 from "../../assets/aboutapplication1.webp"
import aboutap2 from '../../assets/aboutapplication2.webp'

const AboutApplication = () => {
  return (
    <section className="container pt-20 max-xl:px-[3%]">
        <div className="flex max-md:flex-col w-full justify-between max-xl:h-[600px] max-md:h-auto max-xl:gap-5">
            <div className="w-[32%] max-xl:w-1/2 max-md:w-full max-md:h-[320px] max-sm:h-auto max-sm:py-5 bg-[#fec80b] flex flex-col justify-center px-4 gap-15 max-md:gap-8 rounded-[12px]">
                <div>
                    <h5 className="text-[28px] max-md:text-[24px] max-sm:text-[20px] font-semibold">Отрасли применения выпускаемой техники:</h5>
                    <p className="text-lg max-md:text-[16px] max-sm:text-[14px] mt-3">Cтроительная, телекоммуникационная, коммунальная, дорожное хозяйство, логистика, сельское хозяйство.</p>
                </div>
                <div>
                    <h5 className="text-[28px] max-md:text-[24px] max-sm:text-[20px] font-semibold">Выпускаемая техника:</h5>
                    <p className="text-lg max-md:text-[16px] max-sm:text-[14px] mt-3">Краны-манипуляторы, автотопливозаправщики, автовышки, фургоны, самосвалы, бортовые платформы, эвакуаторы, крюковые погрузчики, мастерские, пищевые цистерны, вакуумные машины, автогидроподъёмники.</p>
                </div>
            </div>
            <div className="flex justify-between max-xl:w-1/2 max-md:w-full gap-[5%] max-xl:gap-5 max-xl:flex-col max-xl:gap-0">
                <div className="w-[50%] max-md:h-[320px] max-xl:w-full rounded-[15px] overflow-hidden">
                    <img className=" max-xl:w-full" src={aboutap1} alt="Image" />
                </div>
                <div className="w-[50%] max-md:h-[320px] max-xl:w-full rounded-[15px] overflow-hidden">
                    <img className=" max-xl:w-full" src={aboutap2} alt="Image" />
                </div>  
            </div>
        </div>

        <div className="mt-36 max-sm:mt-20 flex flex-col gap-8 max-sm:gap-4 max-sm:text-[14px] text-lg w-full">
            <p className="max-w-[65%] max-lg:max-w-[80%] max-md:max-w-[90%] max-sm:max-w-full">ООО «РусТрак» является официальным дилером на территории РФ следующих марок: Palfinger, ИНМАН, HKTC, UNIC, DongYang, FASSI, Hangil, XCMG, HIAB.</p>
            <p className="max-w-[65%] max-lg:max-w-[80%] max-md:max-w-[90%] max-sm:max-w-full">За 16 лет деятельности компания заслужила высокий уровень доверия дистрибьютеров и автопроизводителей: ИСУЗУ РУС, КАМАЗ, ГАЗ, DAEWOO, FAW, JAC, ТРАКС ВОСТОК РУС (КОМПАС), МАЗ РУС, ДАЙМЛЕР КАМАЗ РУС (FUSO), ХИНО МОТОРС, FOTON, DONG FENG, SHACHMAN, НЕФАЗ, ЗАВОД СТАРТ</p>
            <p className="max-w-[65%] max-lg:max-w-[80%] max-md:max-w-[90%] max-sm:max-w-full">Наши клиенты: Газпром, Росатом, Россети, РСК «МИГ», Роснефть и др.</p>
        </div>
    </section>
  )
}

export default AboutApplication