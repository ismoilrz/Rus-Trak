import { type VideoDataType } from './../types/videoDataTypes';

import vid1 from "../assets/vid1.jpg"
import vid2 from "../assets/vid2.jpg"
import vid3 from "../assets/vid3.jpg"
import vid4 from "../assets/vid4.jpg"

export const VideoData:VideoDataType[] = [
    {
        id: 1,
        title: "Кран манипулятор HKTC на шасси Камаз Компас",
        vid: "https://www.youtube.com/watch?v=08tNWRWhfo0&t=3s",
        img: vid1
    },
    {
        id: 2,
        title: "КАМАЗ Компас 2022 | Cдвижная Штора и Крыша Тента | Обзор КАМАЗ | Грузовик с Бортом |",
        vid: "https://www.youtube.com/watch?v=rD2Jr1l0kfM",
        img: vid2
    },
    {
        id: 3,
        title: "Крано-манипуляторная установка UNIC374К на шасси FUSO Canter",
        vid: "https://www.youtube.com/watch?v=SZFOxY44O_Q",
        img: vid3
    },
    {
        id: 4,
        title: "Эвакуатор с прямой платформой на базе ISUZU с манипулятором PALFINGER",
        vid: "https://www.youtube.com/watch?v=40Pt1Oi7r-s",
        img: vid4
    }
]