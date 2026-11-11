import { useTranslation } from "react-i18next";

const Information = () => {
  const { t } = useTranslation();
  return (
    <div className="container">
      <h1 className="text-[32px] font-[500] mt-5">{t("news.information")}</h1>
    </div>
  );
};

export default Information;