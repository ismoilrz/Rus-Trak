import type { SocialsType } from "../types/socialsType";

import maxMess from "../assets/max-messenger.svg"
import teleg from "../assets/telegram.svg"
import wk from "../assets/wk.svg"
import rutube from "../assets/Rutube.png"
import youtube from "../assets/YouTube.png"
import zen from "../assets/Zen.png"

export const Socials:SocialsType[] = [
    {
        id: 1,
        icon: maxMess,
        path: "https://max.ru/",
    },
    {
        id: 2,
        icon: teleg,
        path: "https://web.telegram.org/k/",
    },
    {
        id: 3,
        icon: wk,
        path: "https://vk.ru/",
    },
    {
        id: 4,
        icon: rutube,
        path: "https://rutube.ru/",
    },
    {
        id: 5,
        icon: youtube,
        path: "https://www.youtube.com/",
        isDes: true,
    },
    {
        id: 6,
        icon: zen,
        path: "https://dzen.ru/news?utm_referrer=yandex.uz"
    }
]