import aboutap1 from "../../assets/aboutapplication1.webp"
import aboutap2 from '../../assets/aboutapplication2.webp'

const AboutApplication = () => {
  return (
    <section className="container">
        <div className="flex justify-between">
            <div className="w-[32%] bg-[#fec80b] flex flex-col justify-center px-4 gap-15 rounded-[12px]">
                <div>
                    <h5 className="text-[28px] font-semibold">Отрасли применения выпускаемой техники:</h5>
                    <p className="text-lg mt-3">Cтроительная, телекоммуникационная, коммунальная, дорожное хозяйство, логистика, сельское хозяйство.</p>
                </div>
                <div>
                    <h5 className="text-[28px] font-semibold">Выпускаемая техника:</h5>
                    <p className="text-lg mt-3">Краны-манипуляторы, автотопливозаправщики, автовышки, фургоны, самосвалы, бортовые платформы, эвакуаторы, крюковые погрузчики, мастерские, пищевые цистерны, вакуумные машины, автогидроподъёмники.</p>
                </div>
            </div>
            <div className="w-[32%] rounded-[15px] overflow-hidden">
                <img src={aboutap1} alt="Image" />
            </div>
            <div className="w-[32%] rounded-[15px] overflow-hidden">
                <img src={aboutap2} alt="Image" />
            </div>
        </div>

        <div className="mt-36 flex flex-col gap-8 text-lg w-full">
            <p className="max-w-[65%]">ООО «РусТрак» является официальным дилером на территории РФ следующих марок: Palfinger, ИНМАН, HKTC, UNIC, DongYang, FASSI, Hangil, XCMG, HIAB.</p>
            <p className="max-w-[65%]">За 16 лет деятельности компания заслужила высокий уровень доверия дистрибьютеров и автопроизводителей: ИСУЗУ РУС, КАМАЗ, ГАЗ, DAEWOO, FAW, JAC, ТРАКС ВОСТОК РУС (КОМПАС), МАЗ РУС, ДАЙМЛЕР КАМАЗ РУС (FUSO), ХИНО МОТОРС, FOTON, DONG FENG, SHACHMAN, НЕФАЗ, ЗАВОД СТАРТ</p>
            <p className="max-w-[65%]">Наши клиенты: Газпром, Росатом, Россети, РСК «МИГ», Роснефть и др.</p>
        </div>
    </section>
  )
}

export default AboutApplication