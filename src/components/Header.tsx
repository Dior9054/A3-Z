
import { useState } from "react"
import Logo from "./Logo"

export default function Header() {
    const [state, setState] = useState(false)

    const data = [
        { name: "О компании" },
        { name: "Кейсы" },
        { name: "Экспертиза" },
        { name: "процессы" },
        { name: "Контакты" }
    ]

    return (
        <header className="py-[30px] px-[24px]">
            <div className="flex items-center">
                <Logo />
                <button className="bg-[#EDEDED] rounded-[6px] w-[42px] h-[42px] items-center justify-center hidden 1024px:flex ml-auto" onClick={() => setState(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M4 18L20 18" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
                        <path d="M4 12L20 12" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
                        <path d="M4 6L20 6" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </button>
                <div className={`ml-auto ${!!state ? "bg-[rgba(0,_0,_0,_0.5)] absolute top-0 left-0 w-[100%] h-[100%] z-[9]" : "1024px:hidden"}`}>
                    <div className="flex items-center gap-[125px] 1600px:gap-[56px] 1440px:gap-[20px] 1024px:bg-[white] 1024px:relative 1024px:w-[40%] 600px:w-[55%] 375px:w-[80%] 1024px:h-[100%] 1024px:flex-col 1024px:justify-center 1024px:ml-auto">
                        {
                            !!state
                            &&
                            <button className="absolute top-[10px] left-[10px] bg-[#EDEDED] rounded-[6px] w-[42px] h-[42px] flex items-center justify-center" onClick={() => setState(false)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z" fill="#0F0F0F" />
                                </svg>
                            </button>
                        }
                        <div className="flex gap-[4px] 1024px:gap-[8px] 1024px:flex-col">
                            {
                                data.map((item: { name: string }, index: number) => (
                                    <button key={index} className="text-[#2A2A3C] font-monrope font-[500] text-[16px] leading-[21px] 1600px:text-[14px] 1200px:text-[12px] bg-[#EDEDED] px-[20px] 1440px:px-[15px] h-[42px] rounded-[13px]">{item.name}</button>
                                ))
                            }
                            <button className="text-[#FFFFFF] font-monrope font-[500] text-[16px] leading-[21px] 1600px:text-[14px] 1200px:text-[12px] bg-[#F1632B] px-[24px] 1440px:px-[18px] h-[42px] rounded-[20px] bg-[url(/assets/img/button_background_fon.png)] bg-[length:157%] bg-[-45px_-16px] flex items-center gap-[2px] relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-[100%] before:h-[45px] before:bg-[#E06026] before:rounded-[20px] before:z-[-1] before:shadow-[0px_19px_14.6px_-18px_#BE4914,_0px_21px_7.5px_-20px_#BE4914] after:content-[''] after:absolute after:bottom-[-3px] after:rounded-[20px] after:left-[50%] after:w-[114px] after:h-[20px] after:bg-[#BF3F05] after:z-[-2] after:blur-[4px] after:translate-x-[-50%]">
                                обсудить проект
                                <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.04412 7.28107C7.33178 6.33598 8.66981 6.33598 8.95746 7.28107L9.68146 9.65976C9.77852 9.97864 10.0281 10.2282 10.3469 10.3253L12.7256 11.0493C13.6707 11.3369 13.6707 12.6749 12.7256 12.9626L10.3469 13.6866C10.0281 13.7836 9.77852 14.0332 9.68146 14.3521L8.95746 16.7308C8.66981 17.6759 7.33178 17.6759 7.04413 16.7308L6.32013 14.3521C6.22307 14.0332 5.97351 13.7836 5.65464 13.6866L3.27594 12.9626C2.33085 12.6749 2.33085 11.3369 3.27594 11.0493L5.65464 10.3253C5.97351 10.2282 6.22307 9.97864 6.32013 9.65976L7.04412 7.28107Z" fill="white" />
                                    <path d="M13.3856 4.84753L13.8058 6.20148L15.1598 6.62177L13.8058 7.04205L13.3856 8.396L12.9653 7.04205L11.6113 6.62177L12.9653 6.20148L13.3856 4.84753Z" fill="white" />
                                    <path d="M9.44452 0.125977L9.81076 1.30582L10.9906 1.67206L9.81076 2.0383L9.44452 3.21814L9.07828 2.0383L7.89844 1.67206L9.07828 1.30582L9.44452 0.125977Z" fill="white" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex items-center gap-[32px] 1440px:flex-col 1440px:gap-[6px] 1024px:gap-[12px] 1440px:items-end">
                            <div className="flex flex-col gap-[10px] 1440px:gap-[6px] 1024px:gap-[12px] items-end">
                                <p className="text-[#ADADAD] font-monrope font-[400] text-[12px] leading-[16px]">Ежедневно с 10:00 до 19:00</p>
                                <a href="tel:996999994746" className="flex items-center gap-[18px] 1440px:gap-[8px]">
                                    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.2463 12.9166H10.2352C9.16073 12.8394 8.12046 12.5053 7.20192 11.9425C5.49322 10.9534 3.98719 9.64985 2.76333 8.10064C1.7376 6.94992 1.00355 5.56947 0.623081 4.07564C0.463602 3.4349 0.47871 2.76314 0.666831 2.13022C0.788525 1.73186 0.985563 1.36055 1.24725 1.03647C1.49991 0.696657 1.83803 0.429784 2.22725 0.262974C2.62137 0.0781651 3.06984 0.0453451 3.48666 0.170807C3.87634 0.439757 4.20753 0.78483 4.46025 1.18522L5.428 2.48197C5.86491 3.16972 5.92792 3.43572 5.89466 3.69297C5.81154 4.02437 5.6476 4.33 5.4175 4.58256C5.2495 4.81589 5.12583 4.96172 5.03017 5.07022C4.90533 5.21431 4.889 5.23881 4.87966 5.28897C4.85575 5.42197 4.952 5.58064 5.32358 6.03564C6.00563 6.84632 6.76914 7.5848 7.60208 8.23947C7.79983 8.40631 7.96433 8.53114 8.11483 8.51364C8.17316 8.50664 8.20467 8.48447 8.40008 8.31881C8.49108 8.24181 8.60542 8.14381 8.75942 8.02306L8.81775 7.97406C9.04544 7.74296 9.33515 7.58271 9.65192 7.51264C10.0281 7.50846 10.3958 7.62409 10.7019 7.84281L11.6627 8.47514L12.4513 9.07714C12.9273 9.50064 13.2143 9.75672 13.2925 10.1721C13.3189 10.4248 13.2943 10.6802 13.22 10.9232C13.1458 11.1663 13.0234 11.3919 12.8602 11.5866C12.5713 12.0071 12.1821 12.3489 11.7279 12.5811C11.2736 12.8134 10.7686 12.9287 10.2586 12.9166H10.2463ZM3.01183 0.671307C2.81622 0.679632 2.6239 0.724547 2.44483 0.803724C2.15146 0.943475 1.89478 1.14982 1.69525 1.40631C1.44292 1.71948 1.26358 2.08495 1.17025 2.47614C1.06008 2.96103 1.06587 3.46508 1.18716 3.94731C1.54954 5.35263 2.24345 6.65063 3.21075 7.73256C4.38922 9.22511 5.83917 10.4815 7.48425 11.4356C8.32033 11.9532 9.26911 12.2612 10.2498 12.3333C10.6666 12.3466 11.08 12.2549 11.4521 12.0667C11.8242 11.8784 12.1429 11.5996 12.379 11.2559C12.6163 10.9871 12.7406 10.6371 12.7261 10.2788C12.6858 10.0676 12.5073 9.90139 12.0698 9.51231L11.3325 8.94997L10.4102 8.34447C10.0235 8.14206 9.87358 8.07556 9.72308 8.09189C9.59825 8.10647 9.47458 8.20097 9.18233 8.43197L9.1205 8.48097C8.9735 8.59764 8.86442 8.68981 8.7775 8.76331C8.62148 8.93525 8.41321 9.05106 8.18483 9.09289C8.00541 9.09562 7.82741 9.06068 7.66233 8.99035C7.49724 8.92002 7.34874 8.81584 7.22642 8.68456C6.36625 8.00784 5.57809 7.24431 4.87441 6.40606C4.47425 5.91956 4.23275 5.60047 4.30683 5.18631C4.34956 4.99697 4.44788 4.82472 4.58916 4.69164C4.6755 4.59189 4.79158 4.45831 4.94617 4.24364C5.10916 4.06251 5.23519 3.85127 5.31716 3.62181C5.32416 3.56347 5.34108 3.43397 4.94791 2.81506L3.99358 1.53056C3.79166 1.22913 3.55212 0.954697 3.28075 0.713891C3.19435 0.683847 3.10329 0.669428 3.01183 0.671307Z" fill="#2A2A3C" />
                                    </svg>
                                    <div className="flex items-center gap-[8px] 1440px:gap-[5px] text-[#2A2A3C] font-monrope font-[500] text-[18px] 1600px:text-[16px] 1200px:text-[14px] leading-[24px]">
                                        <img src="/assets/svg/plus.svg" className="w-[8px]" />
                                        996
                                        <img src="/assets/svg/braket_right.svg" className="w-[8px]" />
                                        999
                                        <img src="/assets/svg/braket_left.svg" className="w-[8px]" />
                                        99 47 46
                                    </div>
                                </a>
                            </div>
                            <button className="text-[#2A2A3C] font-monrope font-[400] text-[12px] leading-[16px] drop-shadow-[0px_0px_0.51px_#00000026] h-[35px] px-[26px] relative before:content-[''] before:absolute before:z-[-1] before:top-0 before:left-[50%] before:translate-x-[-50%] before:w-[98%] before:h-[40px] before:bg-[#E0E0E0] before:rounded-[20px] before:shadow-[0px_7.08px_1.37px_-7.08px_#000000E5,_0px_9.1px_4.5px_-6.57px_#00000040,_0px_13.15px_8.04px_-8.09px_#00000040,_0px_-14.16px_0.61px_-14.16px_#00000080_inset,_0px_-14.66px_1.87px_-14.16px_#00000080_inset,_0px_-14.42px_0.69px_-14.16px_#0000004D_inset,_-14.16px_-7.58px_1.87px_-14.16px_#AAAAAA4D_inset,_14.16px_-7.58px_1.87px_-14.16px_#CACACA4D_inset,_0px_1.37px_15.73px_0px_#8C8C8C26]">
                                <img src="/assets/svg/call_btn_fon.svg" className="absolute top-0 left-0 z-[-1]" />
                                Заказать звонок
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}