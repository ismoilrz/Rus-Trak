import { useTranslation } from "react-i18next";

interface ReklamaUrlType {
  urlKey: string;
  path: string;
}

interface ReklamaType {
  id: number;
  titleKey: string;
  to: ReklamaUrlType[];
}

const ReklamaData: ReklamaType[] = [
  {
    id: 1,
    titleKey: "reklama_page.item1_title",
    to: [
      {
        urlKey: "reklama_page.item1_url",
        path: "https://rtrf.ru/upload/iblock/dc7/05zscdtqwo09vw8ebd2dob3xwxa9c9wt.pdf",
      }
    ]
  },
  {
    id: 2,
    titleKey: "reklama_page.item2_title",
    to: [
      {
        urlKey: "reklama_page.item2_url1",
        path: "https://rtrf.ru/upload/iblock/a33/aq4p9vkztmdcuz4h0knxnjbyps1hm5mx.pdf"
      },
      {
        urlKey: "reklama_page.item2_url2",
        path: "https://rtrf.ru/upload/iblock/58c/kw4j96cw2tg7ydn92e81s7a9yrdpqc8s.pdf"
      },
      {
        urlKey: "reklama_page.item2_url3",
        path: "https://rtrf.ru/upload/iblock/f48/c0qtzrjnfix9tvmknmvrcf7abaxssyau.pdf",
      }
    ]
  },
  {
    id: 3,
    titleKey: "reklama_page.item3_title",
    to: [
      {
        urlKey: "reklama_page.item3_url1",
        path: "https://rtrf.ru/upload/iblock/06d/nnn1put7h22qmnw702hiqrci3i986p2t.pdf"
      },
      {
        urlKey: "reklama_page.item3_url2",
        path: "https://rtrf.ru/upload/iblock/a86/hfopgqh0pfvbej4cahrcl0lftaoixsno.pdf",
      }
    ]
  }
];

const Reklama = () => {
  const { t } = useTranslation();

  return (
    <section className="container max-xl:px-[3%]">
      <h1 className="text-[32px] font-[500] max-md:text-[26px] mt-5">{t("reklama_page.title")}</h1>
      <div className="mt-6 flex flex-col gap-8">
        {ReklamaData.map((rek) => (
          <div key={rek.id} className="flex flex-col gap-2">
            <h3 className="text-[24px] max-md:text-[22px] font-[500]">{t(rek.titleKey)}</h3>
            <div className="flex flex-col">
              {rek.to.map((to, idx) => (
                <a key={idx} href={to.path} className="text-lg max-md:text-[16px] underline">
                  {t(to.urlKey)}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reklama;