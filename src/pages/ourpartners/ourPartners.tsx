import { useTranslation } from "react-i18next";

interface PartnersType {
  id: number;
  titleKey: string;
  descKey: string;
  urlLabel: string;
  path: string;
}

const Partners1: PartnersType[] = [
  {
    id: 1,
    titleKey: "our_page.partners1.item1_title",
    descKey: "our_page.partners1.item1_desc",
    urlLabel: "https://compasstrucks.ru",
    path: "https://compasstrucks.ru/"
  },
  {
    id: 2,
    titleKey: "our_page.partners1.item2_title",
    descKey: "our_page.partners1.item2_desc",
    urlLabel: "https://nefaz.ru",
    path: "https://nefaz.ru/"
  },
  {
    id: 3,
    titleKey: "our_page.partners1.item3_title",
    descKey: "our_page.partners1.item3_desc",
    urlLabel: "https://www.palfinger.ru",
    path: "https://www.palfinger.ru/",
  },
  {
    id: 4,
    titleKey: "our_page.partners1.item4_title",
    descKey: "our_page.partners1.item4_desc",
    urlLabel: "https://kmu-rus.ru",
    path: "https://kmu-rus.ru/",
  },
  {
    id: 5,
    titleKey: "our_page.partners1.item5_title",
    descKey: "our_page.partners1.item5_desc",
    urlLabel: "http://zavod-start.ru",
    path: "https://zavod-start.ru/",
  },
  {
    id: 6,
    titleKey: "our_page.partners1.item6_title",
    descKey: "our_page.partners1.item6_desc",
    urlLabel: "https://maz.by",
    path: "https://maz.by/",
  },
  {
    id: 7,
    titleKey: "our_page.partners1.item7_title",
    descKey: "our_page.partners1.item7_desc",
    urlLabel: "https://jaccar.ru",
    path: "https://jaccar.ru/",
  },
];

const OurPartners = () => {
  const { t } = useTranslation();

  return (
    <section className="container max-xl:px-[3%] ourPartners">
      <h1 className="text-[32px] font-semibold pt-5 pb-6">{t("our_page.title")}</h1>
      <div className="flex flex-col gap-6 w-full">
        <h4 className="text-[22px] font-[500]">{t("our_page.kamaz_title")}</h4>
        <p className="text-lg max-w-[72%]">
          {t("our_page.kamaz_desc")}
        </p>
      </div>

      <div className="flex flex-col gap-6 mt-22 w-full">
        <h4 className="text-[22px] font-[500]">{t("our_page.gaz_title")}</h4>
        <p className="text-lg max-w-[72%]">
          {t("our_page.gaz_desc")}
        </p>
      </div>

      <div className="mt-24 flex flex-col gap-18">
        {Partners1.map((part, idx) => (
          <div key={idx} className="">
            <h4 className="text-[22px] font-[500]">{t(part.titleKey)}</h4>
            <p className="text-lg py-7 max-w-[65%]">{t(part.descKey)}</p>
            <a href={part.path} className="text-lg text-[#a1a1a1]">{part.urlLabel}</a>
          </div>
        ))}
      </div>

      <div className="mt-18">
        <h4 className="text-[22px] font-[500]">{t("our_page.dunfeng_title")}</h4>
        <p className="text-lg mt-7">{t("our_page.dunfeng_desc")}</p>
      </div>

      <div className="flex flex-col gap-18">
        <div className="mt-18">
          <h4 className="text-[22px] font-[500]">{t("our_page.foton_title")}</h4>
          <p className="py-7 text-lg max-w-[65%]">{t("our_page.foton_desc")}</p>
          <a className="text-lg text-[#a1a1a1]" href="https://foton-motor.ru">https://foton-motor.ru</a>
        </div>
        <div>
          <h4 className="text-[22px] font-[500]">{t("our_page.ferro_title")}</h4>
          <p className="py-7 text-lg max-w-[65%]">{t("our_page.ferro_desc")}</p>
          <a className="text-lg text-[#a1a1a1]" href="https://fassi.ru">https://fassi.ru</a>
        </div>
      </div>

      <div className="mt-18">
        <h4 className="text-[22px] font-[500]">{t("our_page.faw_title")}</h4>
        <p className="text-lg mt-7">{t("our_page.faw_desc")}</p>
      </div>

      <div className="mt-18">
        <h4 className="text-[22px] font-[500]">{t("our_page.shacman_title")}</h4>
        <p className="text-lg py-7">{t("our_page.shacman_desc")}</p>
        <a className="text-lg text-[#a1a1a1]" href="https://shacman.ru">https://shacman.ru</a>
      </div>
    </section>
  );
};

export default OurPartners;
