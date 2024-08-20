
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import Swiper_Info from "./Swiper_Info";

export default function Swiper_Component() {
    const data = [
        {
            img: "/assets/img/profile_girl.png",
            title: "Клиент научился доверять HaloLab, благодаря их значительным знаниям в области UI/UX-дизайна. Поставщик предоставил ценную обратную связь, будучи всегда готовым к общению. Более того, у них есть удовлетворительный процесс управления проектами, который делает их процесс гладким и эффективным.",
            name: "Атиф Хуссейн",
            surname: "Соучредитель компании Kinetik"
        },
        {
            img: "/assets/img/profile_girl.png",
            title: "Клиент научился доверять HaloLab, благодаря их значительным знаниям в области UI/UX-дизайна. Поставщик предоставил ценную обратную связь, будучи всегда готовым к общению. Более того, у них есть удовлетворительный процесс управления проектами, который делает их процесс гладким и эффективным.",
            name: "Атиф Хуссейн",
            surname: "Соучредитель компании Kinetik"
        },
        {
            img: "/assets/img/profile_girl.png",
            title: "Клиент научился доверять HaloLab, благодаря их значительным знаниям в области UI/UX-дизайна. Поставщик предоставил ценную обратную связь, будучи всегда готовым к общению. Более того, у них есть удовлетворительный процесс управления проектами, который делает их процесс гладким и эффективным.",
            name: "Атиф Хуссейн",
            surname: "Соучредитель компании Kinetik"
        },
        {
            img: "/assets/img/profile_girl.png",
            title: "Клиент научился доверять HaloLab, благодаря их значительным знаниям в области UI/UX-дизайна. Поставщик предоставил ценную обратную связь, будучи всегда готовым к общению. Более того, у них есть удовлетворительный процесс управления проектами, который делает их процесс гладким и эффективным.",
            name: "Атиф Хуссейн",
            surname: "Соучредитель компании Kinetik"
        },
        {
            img: "/assets/img/profile_girl.png",
            title: "Клиент научился доверять HaloLab, благодаря их значительным знаниям в области UI/UX-дизайна. Поставщик предоставил ценную обратную связь, будучи всегда готовым к общению. Более того, у них есть удовлетворительный процесс управления проектами, который делает их процесс гладким и эффективным.",
            name: "Атиф Хуссейн",
            surname: "Соучредитель компании Kinetik"
        },
        {
            img: "/assets/img/profile_girl.png",
            title: "Клиент научился доверять HaloLab, благодаря их значительным знаниям в области UI/UX-дизайна. Поставщик предоставил ценную обратную связь, будучи всегда готовым к общению. Более того, у них есть удовлетворительный процесс управления проектами, который делает их процесс гладким и эффективным.",
            name: "Атиф Хуссейн",
            surname: "Соучредитель компании Kinetik"
        },
    ]

    return (
        <Swiper
            navigation={{
                nextEl: ".next-slide-button",
                prevEl: ".prev-slide-button"
            }}
            modules={[Navigation]}
            className="mySwiper"
        >
            {
                data.map((item: any, index: number) => (
                    <SwiperSlide key={index} className="flex justify-center">
                        <Swiper_Info
                            imgSrc={item.img}
                            title={item.title}
                            name={item.name}
                            surname={item.surname}
                        />
                    </SwiperSlide>
                ))
            }
            <button className="prev-slide-button z-[1] disabled:opacity-[50%] w-[57px] 1024px:w-[40px] 1024px:h-[40px] 1024px:rounded-[15px] h-[55px] border border-solid border-[#FFFFFF33] rounded-[20px] flex items-center justify-center absolute top-[50%] translate-y-[-50%] left-0">
                <svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.5797 1.10645L1.91797 10.7681L11.5797 20.4299" stroke="white" strokeWidth="2" strokeLinejoin="round" />
                </svg>
            </button>
            <button className="next-slide-button z-[1] disabled:opacity-[50%] w-[57px] 1024px:w-[40px] 1024px:h-[40px] 1024px:rounded-[15px] h-[55px] border border-solid border-[#FFFFFF33] rounded-[20px] flex items-center justify-center absolute top-[50%] translate-y-[-50%] right-0">
                <svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.3383 1.10645L11 10.7681L1.3383 20.4299" stroke="white" strokeWidth="2" strokeLinejoin="round" />
                </svg>
            </button>
        </Swiper>
    )
}