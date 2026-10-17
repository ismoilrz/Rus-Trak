import { type EmployeesType } from './../../types/dataType/dataType';

// Employees Img
import emp1 from "../../assets/employe1.png";
import emp2 from "../../assets/employe1.webp";
import emp3 from "../../assets/employe3.webp";
import emp4 from "../../assets/employe4.png";
import emp5 from "../../assets/employe5.png";
import emp6 from "../../assets/employe6.webp";
import emp7 from "../../assets/employe7.webp";
import emp8 from "../../assets/employe8.png";

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