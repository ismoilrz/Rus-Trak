import { CircleCheck } from "lucide-react";
import aboutmain from "../../assets/aboutthmain.webp"

interface AboutThType {
    id: number;
    desc: string;
}

const AbotTh:AboutThType[] = [
    { id: 1, desc: "3 производственных корпуса, общей площадью более 7000 м2;" },
    { id: 2, desc: "производственная территория более 20000 м2;" },
    { id: 3, desc: "служба качества, гарантирующая выпуск высококачественной техники;" },
    { id: 4, desc: "современный парк станочного оборудования;" },
    { id: 5, desc: "ежемесячный объём выпускаемой техники - до 110 единиц." },
    { id: 6, desc: "наличие собственной конструкторско-технологической службы" },
]

const AboutTh = () => {
  return (
    <section className="container pt-35 flex justify-between items-center">
        <div>
            <h4 className="text-[28px] font-semibold">Сегодня ООО «Рустрак» - это:</h4>
            <ol className="flex flex-col gap-4 mt-8">
                {AbotTh.map((item, idx) => (
                    <div key={idx} className="flex gap-3">
                        <CircleCheck fill="#fec80b" stroke="#fff" width={'30px'} height={'30px'} />
                        <li className="text-lg">{item.desc}</li>
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