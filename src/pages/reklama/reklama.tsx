interface ReklamaUrlType {
  url: string;
  path: string
}

interface ReklamaType {
  id: number;
  title: string;
  to: ReklamaUrlType[];
}

const ReklamaData:ReklamaType[] = [
  {
    id: 1,
    title: "OOO РУСТРАК",
    to: [
      {
        url: "Завод-доработчик коммерческого транспорта",
        path: "https://rtrf.ru/upload/iblock/dc7/05zscdtqwo09vw8ebd2dob3xwxa9c9wt.pdf",
      }
    ]
  },
  {
    id: 2,
    title: "Автотопливозаправщики",
    to: [
      {
        url: "Листовка ГАЗ NEXT",
        path: "https://rtrf.ru/upload/iblock/a33/aq4p9vkztmdcuz4h0knxnjbyps1hm5mx.pdf"
      },
      {
        url: "Листовка ГАЗ",
        path: "https://rtrf.ru/upload/iblock/58c/kw4j96cw2tg7ydn92e81s7a9yrdpqc8s.pdf"
      },
      {
        url: "Листовка FUSO",
        path: "https://rtrf.ru/upload/iblock/f48/c0qtzrjnfix9tvmknmvrcf7abaxssyau.pdf",
      }
    ]
  },
  {
    id: 3,
    title: "Пищевые цистерны",
    to: [
      {
        url: "Листовка ГАЗ NEXT пищевая цистерна",
        path: "https://rtrf.ru/upload/iblock/06d/nnn1put7h22qmnw702hiqrci3i986p2t.pdf"
      },
      {
        url: "Листовка FUSO пищевая цистерна",
        path: "https://rtrf.ru/upload/iblock/a86/hfopgqh0pfvbej4cahrcl0lftaoixsno.pdf",
      }
    ]
  }
]

const Reklama = () => {
  return (
    <section className="container">
      <h1 className="text-[32px] font-[500]">Рекламные материалы</h1>
      <div className="mt-6 flex flex-col gap-8">
        {ReklamaData.map((rek) => (
          <div key={rek.id} className="flex flex-col gap-2">
            <h3 className="text-[24px] font-[500]">{rek.title}</h3>
            <div className="flex flex-col">
              {rek.to.map((to) => (
                <a href={to.path} className="text-lg underline">{to.url}</a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Reklama