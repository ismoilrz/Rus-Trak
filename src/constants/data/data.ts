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
        fullName: "contacts_page.emp1_name",
        role: "contacts_page.emp1_role",
        phone: "8 (831) 225-00-55",
        job: "komdir@rtrf.ru"
    },
    {
        id: 2,
        pick: emp2,
        fullName: "contacts_page.emp2_name",
        role: "contacts_page.emp2_role",
        phone: "8 (831) 225-00-55",
        job: "sale@rtrf.ru"
    },
    {
        id: 3,
        pick: emp3,
        fullName: "contacts_page.emp3_name",
        role: "contacts_page.emp3_role",
        phone: "88312352517 доб.214",
        job: "RK+10653@rtrf.ru"
    },
    {
        id: 4,
        pick: emp4,
        fullName: "contacts_page.emp4_name",
        role: "contacts_page.emp4_role",
        phone: "88312352551 доб.215",
        job: "sale4+10653@rtrf.ru"
    },
    {
        id: 5,
        pick: emp5,
        fullName: "contacts_page.emp5_name",
        role: "contacts_page.emp5_role",
        phone: "88312250055 доб.213",
        job: "sale3@rtrf.ru"
    },
    {
        id: 6,
        pick: emp6,
        fullName: "contacts_page.emp6_name",
        role: "contacts_page.emp6_role",
        phone: "88312250055 доб.212",
        job: "sale2@rtrf.ru"
    },
    {
        id: 7,
        pick: emp7,
        fullName: "contacts_page.emp7_name",
        role: "contacts_page.emp7_role",
        phone: "88312250055 доб.701",
        job: "kb@rtrf.ru"
    },
    {
        id: 8,
        pick: emp8,
        fullName: "contacts_page.emp8_name",
        role: "contacts_page.emp8_role",
        phone: "88312250055 доб.610",
        job: "kb1@rtrf.ru"
    },
]

export const AboutSliders:AboutSliderType[] = [
    {
        id: 1,
        img: aboutSlide1,
        title: "about_page.sliders.item1_title",
        desc: "about_page.sliders.item1_desc",
    },
    {
        id: 2,
        img: aboutSlide2,
        title: "about_page.sliders.item2_title",
        desc: "about_page.sliders.item2_desc",
    },
    {
        id: 3,
        img: aboutSlide3,
        title: "about_page.sliders.item3_title",
        desc: "about_page.sliders.item3_desc",
    },
    {
        id: 4,
        img: aboutSlide4,
        title: "about_page.sliders.item4_title",
        desc: "about_page.sliders.item4_desc",
    },
    {
        id: 5,
        img: aboutSlide5,
        title: "about_page.sliders.item5_title",
        desc: "about_page.sliders.item5_desc",
    },
    {
        id: 6,
        img: aboutSlide6,
        title: "about_page.sliders.item6_title",
        desc: "about_page.sliders.item6_desc",
    }
]