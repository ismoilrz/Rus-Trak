import { CircleCheck } from "lucide-react";
import aboutmain from "../../assets/aboutthmain.webp"
import { useTranslation } from "react-i18next";

interface AboutThType {
    id: number;
    descKey: string;
};

const AbotTh: AboutThType[] = [
    { id: 1, descKey: "about_page.th.item1" },
    { id: 2, descKey: "about_page.th.item2" },
    { id: 3, descKey: "about_page.th.item3" },
    { id: 4, descKey: "about_page.th.item4" },
    { id: 5, descKey: "about_page.th.item5" },
    { id: 6, descKey: "about_page.th.item6" },
];

const AboutTh = () => {
    const { t } = useTranslation();
  return (
    <section className="container pt-35 max-sm:pt-15 flex max-lg:flex-col max-xl:px-[3%] justify-between max-lg:gap-8 items-center">
        <div className="w-1/2 max-lg:w-full">
            <h4 className="text-[28px] font-semibold">{t("about_page.th.title")}</h4>
            <ol className="flex flex-col gap-4 mt-8">
                {AbotTh.map((item, idx) => (
                    <div key={idx} className="flex gap-3 w-full">
                        <CircleCheck fill="#fec80b" stroke="#fff" width={'30px'} height={'30px'} />
                        <li className="text-lg max-w-[90%]">{t(item.descKey)}</li>
                    </div>
                ))}
            </ol>
        </div>
        <div>
            <img src={aboutmain} alt="Trak" />
        </div>
    </section>
  )
}

export default AboutTh