import { type AboutSliderType, type EmployeesType } from './../../types/dataType/dataType';

// Employees Img
import emp1 from "../../assets/employe1.png";
import emp2 from "../../assets/employe1.webp";
import emp3 from "../../assets/employe3.webp";
import emp4 from "../../assets/employe4.png";
import emp5 from "../../assets/employe5.png";
import emp6 from "../../assets/employe6.webp";
import emp7 from "../../assets/employe7.webp";
import emp8 from "../../assets/employe8.png";

// about img

import aboutSlide1 from "../../assets/aboutSlider1.svg";
import aboutSlide2 from "../../assets/aboutSlider2.svg";
import aboutSlide3 from "../../assets/aboutSlider3.svg";
import aboutSlide4 from "../../assets/aboutSlider4.svg";
import aboutSlide5 from "../../assets/aboutSlider5.svg";
import aboutSlide6 from "../../assets/aboutSlider6.svg";

export const Employees:EmployeesType[] = [
    {
        id: 1,
        pick: emp1,
        fullName: "Шаронов Сергей Владимирович",
        role: "Генеральный директор",
        phone: "8 (831) 225-00-55",
        job: "komdir@rtrf.ru"
    },
    {
        id: 2,
        pick: emp2,
        fullName: "Сучков Александр Алексеевич",
        role: "Коммерческий директор",
        phone: "8 (831) 225-00-55",
        job: "sale@rtrf.ru"
    },
    {
        id: 3,
        pick: emp3,
        fullName: "Савенко Екатерина Юрьевна",
        role: "Менеджер по продажам",
        phone: "88312352517 доб.214",
        job: "RK+10653@rtrf.ru"
    },
    {
        id: 4,
        pick: emp4,
        fullName: "Сергеева Юлия Юрьевна",
        role: "Менеджер по продажам",
        phone: "88312352551 доб.215",
        job: "sale4+10653@rtrf.ru"
    },
    {
        id: 5,
        pick: emp5,
        fullName: "Конев Максим Анатольевич",
        role: "Руководитель направления развития дилерской сети",
        phone: "88312250055 доб.213",
        job: "sale3@rtrf.ru"
    },
    {
        id: 6,
        pick: emp6,
        fullName: "Киселёв Иван Александрович",
        role: "Руководитель отдела по сертификации ООО «РусТрак»",
        phone: "88312250055 доб.212",
        job: "sale2@rtrf.ru"
    },
    {
        id: 7,
        pick: emp7,
        fullName: "Шалявин Дмитрий Леонидович",
        role: "Главный конструктор",
        phone: "88312250055 доб.701",
        job: "kb@rtrf.ru"
    },
    {
        id: 8,
        pick: emp8,
        fullName: "Ярилин Александр Валерьевич",
        role: "Инженер по гарантии",
        phone: "88312250055 доб.610",
        job: "kb1@rtrf.ru"
    },
]

export const AboutSliders:AboutSliderType[] = [
    {
        id: 1,
        img: aboutSlide1,
        title: "Собственная производственная база",
        desc: "позволяет максимально снизить себестоимость продукции, повышая её конкурентоспособность",
    },
    {
        id: 2,
        img: aboutSlide2,
        title: "Отдел контроля качества",
        desc: "проверяет каждую единицу спецтехники, что гарантирует длительный срок эксплуатации и безотказную работу техники.",
    },
    {
        id: 3,
        img: aboutSlide3,
        title: "Разработка надстроек шасси",
        desc: "производится на шасси мировых производителей и позволяет предлагать уникальную технику — надёжную в эксплуатации и максимально адаптированную под конкретные условия работы.",
    },
    {
        id: 4,
        img: aboutSlide4,
        title: "Наличие конструкторского бюро",
        desc: "обеспечивает возможность индивидуального подхода к каждому клиенту.",
    },
    {
        id: 5,
        img: aboutSlide5,
        title: "Собственная служба логистики",
        desc: "предельно уменьшает сроки доставки комплектующих и агрегатов.",
    },
    {
        id: 6,
        img: aboutSlide6,
        title: "Сервисная партнёрская сеть",
        desc: "гарантирует техническую помощь на всей территории РФ."
    }
]