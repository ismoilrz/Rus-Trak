import { useTranslation } from "react-i18next";

interface CreditType {
  id: number;
  titleKey: string;
  descKey: string;
}

const CreditData: CreditType[] = [
  {
    id: 1,
    titleKey: "credit_page.item1_title",
    descKey: "credit_page.item1_desc"
  },
  {
    id: 2,
    titleKey: "credit_page.item2_title",
    descKey: "credit_page.item2_desc"
  },
  {
    id: 3,
    titleKey: "credit_page.item3_title",
    descKey: "credit_page.item3_desc"
  }
];

const Credit = () => {
  const { t } = useTranslation();

  return (
    <section className="container max-xl:px-[3%] pt-6">
      <div className="flex flex-col gap-18">
        {CreditData.map((item) => (
          <div key={item.id} className="flex flex-col gap-7">
            <h3 className="text-[28px] max-md:text-[24px] font-[500]">{t(item.titleKey)}</h3>
            <p className="text-lg max-md:text-[16px] max-w-[75%] max-lg:max-w-full">{t(item.descKey)}</p>
          </div>
        ))}
      </div>
      <h3 className="text-[28px] max-md:text-[24px] font-[500] mt-18">{t("credit_page.leasing_types_title")}</h3>
      <div className="w-full p-7 max-md:pl-0 flex flex-col gap-7">
        <div className="flex gap-5 w-full">
          <div className="w-10 h-10 max-md:w-9 max-md:h-9 max-sm:h-8 max-md:text-[22px] bg-[#fec80b] rounded-full text-[24px] font-semibold flex items-center justify-center">1</div>
          <div className="w-full">
            <h5 className="text-[20px] max-md:text-lg font-[500]">{t("credit_page.type1_title")}</h5>
            <p className="max-w-[65%] text-lg text-[16px] max-lg:max-w-[80%] max-sm:max-w-[95%]">
              {t("credit_page.type1_desc")}
            </p>
          </div>
        </div>
        <div className="flex gap-5 w-full">
          <div className="w-10 h-10 max-md:w-9 max-md:h-9 max-sm:h-8 max-md:text-[22px] bg-[#fec80b] rounded-full text-[24px] font-semibold flex items-center justify-center">2</div>
          <div className="w-full">
            <h5 className="text-[20px] max-md:text-lg font-[500]">{t("credit_page.type2_title")}</h5>
            <p className="max-w-[65%] text-lg text-[16px] max-lg:max-w-[80%] max-sm:max-w-[95%]">
              {t("credit_page.type2_desc")}
            </p>
          </div>
        </div>
        <div className="flex gap-5 w-full">
          <div className="w-10 h-10 max-md:w-9 max-md:h-9 max-sm:h-8 max-md:text-[22px] bg-[#fec80b] rounded-full text-[24px] font-semibold flex items-center justify-center">3</div>
          <div className="w-full">
            <h5 className="text-[20px] max-md:text-lg font-[500]">{t("credit_page.type3_title")}</h5>
            <p className="max-w-[65%] text-lg text-[16px] max-lg:max-w-[80%] max-sm:max-w-[95%]">
              {t("credit_page.type3_desc")}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-11">
        <h3 className="text-[28px] max-lg:text-[24px] font-[500]">{t("credit_page.partner_title")}</h3>
        <p className="text-lg mt-6 max-w-[75%] max-lg:max-w-full">
          {t("credit_page.partner_desc")}
        </p>
      </div>
    </section>
  );
};

export default Credit;