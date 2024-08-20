
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from 'swiper/modules';
import { useState } from "react"
import { Link } from "react-router-dom"

import 'swiper/css';
import 'swiper/css/navigation';

export default function App() {
  const [state, setState] = useState(false)

  return (
    <>
      <div>
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
                  <button className="text-[#2A2A3C] font-monrope font-[500] text-[16px] leading-[21px] 1600px:text-[14px] 1200px:text-[12px] bg-[#EDEDED] px-[20px] 1440px:px-[15px] h-[42px] rounded-[13px]">О компании</button>
                  <button className="text-[#2A2A3C] font-monrope font-[500] text-[16px] leading-[21px] 1600px:text-[14px] 1200px:text-[12px] bg-[#EDEDED] px-[20px] 1440px:px-[15px] h-[42px] rounded-[13px]">Кейсы</button>
                  <button className="text-[#2A2A3C] font-monrope font-[500] text-[16px] leading-[21px] 1600px:text-[14px] 1200px:text-[12px] bg-[#EDEDED] px-[20px] 1440px:px-[15px] h-[42px] rounded-[13px]">Экспертиза</button>
                  <button className="text-[#2A2A3C] font-monrope font-[500] text-[16px] leading-[21px] 1600px:text-[14px] 1200px:text-[12px] bg-[#EDEDED] px-[20px] 1440px:px-[15px] h-[42px] rounded-[13px]">процессы</button>
                  <button className="text-[#2A2A3C] font-monrope font-[500] text-[16px] leading-[21px] 1600px:text-[14px] 1200px:text-[12px] bg-[#EDEDED] px-[20px] 1440px:px-[15px] h-[42px] rounded-[13px]">Контакты</button>
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
                    <div className="flex items-center gap-[18px] 1440px:gap-[8px]">
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
                    </div>
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
        <main>
          <section className="bg-[url(/assets/img/mountain.png)] 600px:h-[537px] 1600px:bg-contain 1600px:bg-no-repeat w-[100%] h-[1259px] 1024px:h-[847px] 800px:h-[630px]">
            <div className="flex items-center absolute top-[28px] left-[-41px] 425px:left-[0] 425px:top-0 w-[102%] 800px:w-[105%] 1200px:w-[103%] 425px:w-[100%] overflow-hidden z-[-1]">
              <h6 className="text-[#F9F9F9] font-monrope font-[800] text-[363px] 425px:text-[74px] 600px:text-[115px] 1600px:text-[276px] leading-[496px] tracking-[0.15em] 1200px:leading-[417px] 1200px:text-[220px] 800px:text-[148px] 800px:leading-[286px]">DIGITAL</h6>
              <div>
                <svg width="242" height="261" className="1600px:w-[150px] 800px:w-[80px] 425px:w-[40px]" viewBox="0 0 242 261" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 20.6238C0 9.57808 8.95431 0.623779 20 0.623779H253C264.046 0.623779 273 9.57809 273 20.6238V25.8699C273 36.9156 264.046 45.8699 253 45.8699H20C8.9543 45.8699 0 36.9155 0 25.8699V20.6238Z" fill="#F9F9F9" />
                  <path d="M0 127.87C0 116.824 8.95431 107.87 20 107.87H253C264.046 107.87 273 116.824 273 127.87V133.116C273 144.162 264.046 153.116 253 153.116H20C8.9543 153.116 0 144.162 0 133.116V127.87Z" fill="#F9F9F9" />
                  <path d="M0 235.116C0 224.07 8.95431 215.116 20 215.116H253C264.046 215.116 273 224.07 273 235.116V240.362C273 251.408 264.046 260.362 253 260.362H20C8.9543 260.362 0 251.408 0 240.362V235.116Z" fill="#F9F9F9" />
                </svg>
              </div>
            </div>

            <div className="w-[100%] h-[100%]">
              <div className="max-w-[367px] 800px:top-[244px] 600px:left-[30px] 800px:max-w-[145px] 800px:min-w-[145px] min-w-[367px] 1024px:max-w-[240px] 1024px:min-w-[240px] w-[100%] flex flex-col gap-[24px] 1024px:gap-[10px] absolute top-[635px] 1024px:top-[416px] left-[109px] 800px:left-[50px]">
                <p className="text-[#2A2A3C] font-monrope font-[400] text-[8px] 1024px:text-[6px] 1024px:leading-[7px] leading-[10px] max-h-[61px] h-[100%] rotate-[180deg] vertical_text">DIGITAL AGENCY DESIGN</p>
                <p className="text-[#2A2A3C] font-monrope font-[400] text-[14px] 1024px:text-[10px] 800px:text-[8px] 800px:leading-[10px] 1024px:leading-[13px] leading-[20px]">
                  Наше дизайн-агентство поможет вам создать дизайн, который будет соответствовать вашим уникальным потребностям и целям. <span className="font-[700]">Мы работаем с широким спектром клиентов,</span> от небольших предприятий до крупных корпораций, и <span className="text-[#F1632B]">у нас есть опыт создания успешных дизайнов</span> для самых разных отраслей.
                </p>
              </div>
              <div className="max-w-[673px] 800px:max-w-[180px] 800px:min-w-[180px] 1440px:max-w-[533px] min-w-[673px] 1440px:min-w-[533px] 1024px:max-w-[255px] 1024px:min-w-[255px] 1200px:max-w-[432px] 1200px:min-w-[432px] w-[100%] flex flex-col 425px:max-w-[142px] 425px:min-w-[142px] gap-[14px] 1200px:gap-[6px] absolute top-[463px] 800px:top-[280px] 600px:top-[260px] 1024px:top-[370px] 600px:right-[20px] right-[82px]">
                <p className="text-[#2A2A3C] font-monrope font-[200] text-[32px] 800px:text-[10px] 800px:leading-[11px] 1440px:text-[25px] 1440px:leading-[34px] 1200px:text-[22px] 1024px:text-[14px] 1024px:max-w-[127px] 1024px:leading-[15px] 1200px:leading-[23px] leading-[41px] max-w-[287px] 1440px:max-w-[230px] 800px:max-w-[91px] w-[100%]">для вашего бизнеса в Бишкеке!</p>
                <p className="text-[#2A2A3C] font-monrope font-[200] text-[52px] 800px:text-[14px] 800px:leading-[13px] 1440px:text-[42px] 1200px:text-[34px] 1024px:text-[20px] 1024px:leading-[19px] 1200px:leading-[30px] 1440px:leading-[45px] leading-[56px] tracking-[-0.05em]">
                  Сделаем вас <span className="text-[#F1632B]">лидерами </span><br />
                  в глазах <span className="font-[800]">платежоспособных
                    клиентов </span> с помощью сайтов
                  и маркетинговых <span className="font-[700] font-inter text-[#F1632B]">материалов
                    класса Premium</span>
                </p>
                <button className="bg-[#F1632B] 600px:w-[20px] 600px:h-[20px] w-[60px] 1024px:w-[30px] 1024px:h-[30px] 1440px:w-[55px] h-[58px] 1440px:h-[53px] rounded-[20px] 1024px:rounded-[8px] 600px:rounded-[5px] absolute bottom-[-96px] 1024px:bottom-[-40px] right-0">
                  <svg width="6" height="12" className="absolute top-[50%] 600px:w-[4px] 600px:h-[8px] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[2]" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="3.07092" cy="2.83411" r="2.37952" fill="#F1632B" />
                    <circle cx="3.07092" cy="9.59314" r="2.37952" fill="#F1632B" />
                  </svg>
                  <svg width="36" height="38" className="absolute top-[50%] left-[50%] translate-x-[-50%] 1024px:w-[20px] 600px:w-[12px] 600px:h-[14px] 1024px:h-[22px] translate-y-[-50%] z-[1]" viewBox="0 0 36 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5159 0.656494C7.88312 0.656494 0.0742188 8.4654 0.0742188 18.0982C0.0742188 27.7309 7.88312 35.5398 17.5159 35.5398H18.4665C19.2418 35.5398 20.0053 35.4892 20.7539 35.3912C20.7808 35.3877 20.8032 35.4117 20.7977 35.4383C20.7971 35.4409 20.7969 35.4436 20.7969 35.4463V35.6524C20.7969 36.8104 21.7605 37.7416 22.8922 37.4962C27.3869 36.5216 33.9997 32.7839 35.598 22.9904C35.6158 22.8813 35.5971 22.7606 35.5362 22.6683C35.438 22.5194 35.3889 22.3434 35.4304 22.1699C35.7428 20.8636 35.9082 19.5002 35.9082 18.0982C35.9082 8.4654 28.0993 0.656494 18.4665 0.656494H17.5159Z" fill="white" />
                  </svg>
                </button>
              </div>
              <div className="absolute top-[980px] 1024px:top-[681px] 800px:top-[449px] left-[50%] translate-x-[-60%] 1440px:left-[35%] 800px:left-[30%] w-[max-content]">
                <p className="max-w-[569px] 600px:max-w-[112px] 600px:min-w-[112px] 1440px:max-w-[469px] min-w-[569px] 1440px:min-w-[469px] w-[100%] 600px:text-[18px] 600px:leading-[20px] text-[#2A2A3C] font-monrope font-[800] text-[91px] 1440px:text-[75px] 1024px:text-[55px] 800px:max-w-[217px] 800px:min-w-[217px] 1024px:leading-[57px] 1024px:max-w-[342px] 1024px:min-w-[342px] 1440px:leading-[79px] leading-[95px] tracking-[-0.04em] 800px:text-[35px] 800px:leading-[34px] uppercase">Больше чем просто <span className="text-[#F1632B]">дизайн</span></p>
                <div className="absolute bottom-[80px] 600px:left-[200px] left-[400px] 1440px:left-[320px] 1024px:left-[247px] 1024px:bottom-[64px] flex gap-[111px] 1024px:gap-[50px] 800px:gap-[25px] 800px:flex-col 800px:bottom-[-17px]">
                  <div className="flex flex-col gap-[28px] 1024px:gap-[18px] 800px:gap-[5px]">
                    <div className="flex">
                      <p className="text-[#2A2A3C] font-monrope font-[400] text-[16px] 600px:max-w-[119px] 600px:min-w-[119px] 600px:text-[8px] 600px:leading-[9px] 1440px:text-[14px] 1024px:text-[12px] 1024px:leading-[15px] leading-[21px] max-w-[279px] 1440px:max-w-[234px] 1440px:min-w-[234px] 800px:max-w-[178px] 800px:min-w-[178px] w-[100%]">Хотите сайт, который будет не просто визитной карточкой, а мощным инструментом для привлечения клиентов и увеличения продаж?</p>
                      <p className="text-[#2A2A3C] font-monrope font-[400] text-[6px] 600px:text-[5px] leading-[8px] vertical_text rotate-[180deg]">A-Z <br />
                        CREATIVE STUDIO</p>
                    </div>
                    <div>
                      <p className="text-[#2A2A3C] font-monrope font-[600] text-[16px] 1440px:text-[14px] leading-[21px] mb-[12px] 1024px:mb-[5px] 600px:text-[8px] 600px:mb-[0] 600px:leading-[10px] 800px:text-[12px]">Тогда вам нужен креативный подход!</p>
                      <svg width="295" height="23" className="w-[257px] 800px:w-[220px] 600px:w-[147px]" viewBox="0 0 295 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.845703 9.08607C32.8898 4.69862 136.351 -1.44382 293.846 9.08607C293.846 9.08607 151.678 3.39296 0.845703 19.4479" stroke="#F1632B" strokeWidth="5.37074" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[12px] 1024px:gap-[5px]">
                    <h6 className="text-[#2A2A3C] font-monrope font-[800] 600px:leading-[9px] 600px:text-[25px] text-[91px] 1440px:text-[70px] 1024px:text-[50px] 800px:text-[40px] 800px:leading-[32px] leading-[90px] 1440px:leading-[42px] tracking-[-0.125em]">150<span className="text-[#F1632B] 600px:text-[16px] text-[60px] 1440px:text-[50px] 1024px:text-[30px]">%</span></h6>
                    <div className="flex flex-col gap-[10px] 600px:gap-[5px] 600px:max-w-[89px] 600px:min-w-[89px] max-w-[224px] min-w-[224px] 1024px:max-w-[167px] 1024px:min-w-[167px] w-[100%]">
                      <p className="text-[#2A2A3C] font-monrope font-[400] text-[16px] 1440px:text-[14px] 1024px:text-[12px] 1024px:leading-[14px] leading-[22px] 600px:text-[8px] 600px:leading-[8px]">В среднем увеличили доходы нашим клиенты</p>
                      <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M5.63392 0.839019H4.76353L2.59456 3.93737L2.93118 4.96597H1.8745L0.48078 6.95689H2.30123L3.17067 5.78589H5.21965L5.06831 6.95689L11.7223 6.9569L11.9605 5.61687H9.03188L12.6597 1.75232L12.8235 0.831055H7.74392L7.50569 2.17108H10.4344L6.91952 5.91524L7.0462 1.62561L5.63392 0.839019ZM5.64123 2.52382L5.38025 4.5432H4.09334L5.59269 2.52382H5.64123Z" fill="#2A2A3C" />
                        <path d="M0.46875 7.02123L8.20259 8.675L6.60453 8.01157L10.2347 8.675H12.2668L9.95849 7.66543L10.3333 8.01157L5.02619 7.18468L5.71671 7.79042L0.46875 7.02123Z" fill="#2A2A3C" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="max-w-[371px] 1440px:max-w-[303px] 1024px:max-w-[226px] w-[100%] mt-[69px] 1024px:mt-[38px]">
                  <div className="border 600px:rounded-[9px] border-dashed border-[#D2D2D2] rounded-[13px] px-[34px] 1440px:pr-[18px] 1024px:pr-[14px] h-[45px] 1024px:h-[35px] flex items-center justify-end relative">
                    <img src="/assets/img/human.png" className="w-[54px] 600px:left-[5px] 1024px:w-[40px] 1024px:h-[57px] h-[74px] absolute bottom-0 left-[34px] 1024px:left-[15px] 1440px:left-[18px] object-cover object-top rounded-[20px]" />
                    <div className="flex items-center">
                      <svg width="35" height="23" className="1024px:w-[20px] 1024px:hidden" viewBox="0 0 35 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M15.0417 0.930968C14.9815 0.897404 14.9513 0.880623 14.9187 0.868783C14.8896 0.85827 14.8591 0.850674 14.8276 0.8461C14.7921 0.840948 14.7548 0.840948 14.6803 0.840948H13.0249C12.8421 0.840948 12.7507 0.840948 12.665 0.868125C12.5891 0.89216 12.5169 0.931402 12.4532 0.98307C12.3813 1.04149 12.3253 1.12152 12.2132 1.28158L6.90038 8.87094C6.8067 9.00476 6.75986 9.07167 6.73329 9.14207C6.70976 9.20442 6.69793 9.26852 6.6984 9.33103C6.69894 9.40161 6.72099 9.46897 6.76508 9.60371L7.17284 10.8497C7.30003 11.2384 7.36363 11.4327 7.3116 11.5906C7.26617 11.7285 7.16662 11.8519 7.03633 11.9317C6.88713 12.0231 6.6667 12.0231 6.22583 12.0231H5.19698C5.01417 12.0231 4.92277 12.0231 4.83702 12.0503C4.76119 12.0743 4.6889 12.1136 4.62528 12.1652C4.55335 12.2237 4.49732 12.3037 4.38527 12.4637L1.74564 16.2344C1.47184 16.6256 1.33493 16.8211 1.32921 16.9804C1.32422 17.1194 1.37938 17.2442 1.48156 17.325C1.59861 17.4176 1.82196 17.4176 2.26867 17.4176H5.36491C5.54145 17.4176 5.62972 17.4176 5.713 17.392C5.78668 17.3694 5.8572 17.3323 5.91985 17.2834C5.99066 17.2281 6.04706 17.1522 6.15985 17.0002L7.89586 14.6621C8.00865 14.5102 8.06504 14.4343 8.13586 14.379C8.19851 14.33 8.26903 14.293 8.34271 14.2703C8.42599 14.2447 8.51426 14.2447 8.69079 14.2447H12.9714C13.2478 14.2447 13.386 14.2447 13.4843 14.2968C13.5708 14.3426 13.6359 14.4159 13.6708 14.5068C13.7103 14.6101 13.6928 14.746 13.6576 15.0179L13.4474 16.6445C13.4123 16.9163 13.3947 17.0523 13.4343 17.1555C13.4691 17.2464 13.5342 17.3198 13.6207 17.3656C13.719 17.4176 13.8572 17.4176 14.1337 17.4176H30.5522C30.8409 17.4176 30.9852 17.4176 31.1053 17.3623C31.2109 17.3137 31.3036 17.236 31.37 17.1406C31.4454 17.032 31.4707 16.8899 31.5212 16.6057L31.878 14.5987C31.9285 14.3145 31.9538 14.1724 31.9169 14.0638C31.8845 13.9683 31.8194 13.8907 31.7311 13.8421C31.6307 13.7867 31.4864 13.7867 31.1977 13.7867H25.7353C25.2047 13.7867 24.9394 13.7867 24.8186 13.6789C24.7135 13.585 24.6664 13.4423 24.6902 13.29C24.7175 13.1151 24.9137 12.9061 25.3062 12.488L33.7137 3.53197C33.7891 3.45168 33.8267 3.41153 33.8563 3.36732C33.8825 3.3281 33.9039 3.28659 33.92 3.24383C33.9381 3.19565 33.9471 3.14548 33.9649 3.04515L34.2163 1.63125C34.2668 1.34705 34.292 1.20496 34.2552 1.09641C34.2227 1.00092 34.1577 0.923295 34.0694 0.874644C33.9689 0.819336 33.8246 0.819336 33.536 0.819336H21.4218C21.1332 0.819336 20.9889 0.819336 20.8688 0.874644C20.7631 0.923295 20.6705 1.00092 20.6041 1.09641C20.5286 1.20496 20.5034 1.34705 20.4528 1.63125L20.096 3.6383C20.0455 3.92249 20.0203 4.06459 20.0571 4.17314C20.0896 4.26862 20.1546 4.34625 20.2429 4.3949C20.3434 4.45021 20.4877 4.45021 20.7763 4.45021H26.2388C26.7694 4.45021 27.0346 4.45021 27.1554 4.55807C27.2605 4.65193 27.3077 4.79469 27.2839 4.94693C27.2565 5.12188 27.0603 5.33091 26.6679 5.74895L19.8308 13.0321C19.3703 13.5227 19.14 13.7679 18.9475 13.809C18.7804 13.8447 18.6195 13.8026 18.5145 13.6956C18.3937 13.5723 18.4026 13.2691 18.4205 12.6626L18.6945 3.38564C18.699 3.23423 18.7012 3.15853 18.6821 3.09232C18.6652 3.03369 18.6362 2.98072 18.5967 2.93626C18.552 2.88605 18.4891 2.85104 18.3634 2.78101L15.0417 0.930968ZM14.8185 5.40601C14.8641 5.40601 14.8953 5.44122 14.8895 5.48601L14.3027 10.0269C14.2644 10.3233 14.2452 10.4715 14.1709 10.5853C14.1055 10.6854 14.0115 10.7674 13.9031 10.819C13.7798 10.8776 13.6291 10.8776 13.3277 10.8776H12.1078C11.6466 10.8776 11.416 10.8776 11.2981 10.7821C11.1953 10.6988 11.1415 10.5706 11.1499 10.4289C11.1595 10.2665 11.3069 10.068 11.6015 9.67116L14.7363 5.4492C14.7561 5.42254 14.7875 5.40601 14.8185 5.40601Z" fill="#E9E9E9" />
                        <path d="M0.884766 17.5919L19.3003 21.5298C19.5623 21.5859 19.7462 21.2037 19.5054 21.1037C19.2679 21.0051 19.4432 20.6286 19.7043 20.6763L27.276 22.0601C27.3023 22.0649 27.3154 22.0673 27.3288 22.069C27.3406 22.0705 27.3526 22.0715 27.3647 22.0722C27.3783 22.0729 27.3921 22.0729 27.4196 22.0729H29.775C30.1344 22.0729 30.3141 22.0729 30.3798 22.0571C30.8182 21.9513 31.0218 21.4141 30.7201 21.1589C30.6749 21.1207 30.5208 21.0532 30.2125 20.9184L27.4448 19.7079C27.3034 19.6461 27.148 19.8455 27.2582 19.9473C27.3558 20.0375 27.2431 20.2176 27.1027 20.1958L14.5582 18.2412C14.2057 18.1863 13.9261 18.6425 14.1773 18.8628C14.4272 19.0821 14.1512 19.5364 13.7993 19.4848L0.884766 17.5919Z" fill="#E9E9E9" />
                      </svg>
                      <p className="text-[#E9E9E9] font-inter font-[900] text-[11px] leading-[13px] ml-[5px] mr-[17px] 1440px:mr-[5px] 600px:text-[8px]">CREATIVITY STUDIO</p>
                      <svg width="51" height="15" className="1024px:w-[28px] 600px:w-[20px]" viewBox="0 0 51 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 7.44596H50.1582M50.1582 7.44596L43.3324 14.2718M50.1582 7.44596L43.3324 0.620117" stroke="#D2D2D2" />
                        <path d="M0 7.44596H50.1582M50.1582 7.44596L43.3324 14.2718M50.1582 7.44596L43.3324 0.620117" stroke="url(#paint0_linear_737_3580)" />
                        <defs>
                          <linearGradient id="paint0_linear_737_3580" x1="-6.59279" y1="7.44596" x2="50.1582" y2="7.44596" gradientUnits="userSpaceOnUse">
                            <stop stop-color="white" />
                            <stop offset="1" stop-color="white" stop-opacity="0" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="max-w-[220px] 600px:max-w-[124px] 600px:gap-[5px] 1024px:max-w-[156px] w-[100%] flex flex-col gap-[11px] mt-[31px] ml-[113px] 1440px:ml-[66px] 1024px:ml-[30px] 1024px:mt-[20px]">
                    <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M5.54993 0.16983H4.67955L2.51058 3.26818L2.84719 4.29678H1.79051L0.396796 6.2877H2.21724L3.08669 5.1167H5.13566L4.98432 6.2877L11.6383 6.28771L11.8766 4.94768H8.9479L12.5757 1.08313L12.7395 0.161865H7.65993L7.4217 1.50189H10.3504L6.83553 5.24605L6.96222 0.95642L5.54993 0.16983ZM5.55725 1.85463L5.29627 3.87401H4.00936L5.5087 1.85463H5.55725Z" fill="#2A2A3C" />
                      <path d="M0.384766 6.35204L8.11861 8.00581L6.52055 7.34238L10.1507 8.00581H12.1828L9.87451 6.99624L10.2494 7.34238L4.94221 6.51549L5.63273 7.12123L0.384766 6.35204Z" fill="#2A2A3C" />
                    </svg>
                    <p className="text-[#2A2A3C] font-monrope font-[400] text-[12px] leading-[16px] 1024px:text-[10px] 1024px:leading-[12px] 600px:text-[8px]">Мы собрали для вас некоторые кейсы, а также отрывки из наших проектов</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="mt-[400px] 1024px:mt-[60px] relative before:content-[''] before:absolute before:top-[1114px] 800px:before:top-[494px] 1200px:before:top-[714px] 1440px:before:top-[1015px] before:left-0 before:w-[100%] before:h-[calc(100%_-_1215px)] 800px:before:h-[calc(100%_-_627px)] 1200px:before:h-[calc(100%_-_877px)] before:bg-[#E23E3D] before:z-[-1]">
            <div className="w-[100%] h-[100%] absolute top-[-350px] 1600px:top-[-500px] 800px:top-[-782px] 1200px:top-[-677px] left-0 z-[-1] 1440px:z-[-2]">
              <svg width="100%" height="2299" viewBox="0 0 1920 2299" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_737_3625)">
                  <path
                    d="M1745.9 303.552L2084.46 342.023C2153.83 349.905 2221.03 371.085 2282.39 404.403C2484.09 513.933 2595.21 738.398 2560 965.205L2519.83 1223.98C2450.61 1669.83 2066.76 1998.69 1615.57 1998.69H88.6729C-140.761 1998.69 -318.774 1798.44 -291.892 1570.59L-164.231 488.564C-153.053 393.818 -23.5524 375.2 13.8647 462.96C18.376 473.541 24.7255 483.131 32.9485 491.174C71.5234 528.905 190.662 640.126 237.93 622.923C294.736 602.249 333.522 617.337 367.865 644.138C422.591 686.846 285.775 580.075 437.285 634.281C459.726 642.31 646.6 684.846 670.306 687.321C830.35 704.03 741.271 723.489 776.903 715.705L831.086 703.869C860.676 697.405 875.47 694.173 890.117 690.508C946.586 676.373 1001.71 657.336 1054.87 633.611C1068.66 627.458 1082.29 620.872 1109.56 607.701L1109.57 607.697L1256.96 536.505C1305.9 512.864 1349.79 479.962 1386.22 439.617C1477.14 338.898 1611.07 288.232 1745.9 303.552Z"
                    fill="#F0632C" />
                </g>
                <defs>
                  <filter id="filter0_f_737_3625" x="-594.582" y="0.859131" width="3461.04" height="2297.83"
                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_737_3625" />
                  </filter>
                </defs>
              </svg>
            </div>
            <div className="max-w-[1458px] 1440px:max-w-[1200px] 1200px:max-w-[1024px] px-[20px] 1024px:max-w-[800px] 800px:max-w-[600px] 600px:max-w-[425px] w-[100%] mx-auto">
              <div className="flex flex-wrap justify-between gap-[27px] 1024px:gap-[10px] 1600px:gap-[17px]">
                <div className="max-w-[261px] 1440px:max-w-[230px] min-w-[261px] 1440px:min-w-[230px] 1200px:max-w-[150px] 1024px:max-w-[30%] 600px:max-w-[48%] 600px:min-w-[48%] 1024px:min-w-[30%] 1200px:min-w-[150px] w-[100%] flex flex-col justify-end mb-[-250px] 1440px:mb-[-225px] 1200px:mb-[-190px] 1024px:mb-[0]">
                  <div className="bg-[#D9D9D9] rounded-[20px]  1200px:h-[420px]w-[100%] h-[310px] 1440px:h-[240px]"></div>
                  <div>
                    <h6 className="text-[#FFFFFF] font-monrope font-[700] text-[18px] leading-[24px] max-w-[275px] w-[100%] mb-[12px] mt-[24px] 1440px:text-[16px] 1200px:text-[14px] 600px:text-[12px]">Bang & Olufsen - See yourself in Sound</h6>
                    <div className="flex flex-wrap gap-[6px] mb-[32px]">
                      <button className="text-[#FFFFFF] font-monrope font-[300] text-[14px] leading-[19px] rounded-[20px] border border-solid border-[#FFFFFF40] px-[14px] h-[35px] 600px:text-[12px] 600px:h-[30px] 600px:px-[11px]">Сайт</button>
                      <button className="text-[#FFFFFF] font-monrope font-[300] text-[14px] leading-[19px] rounded-[20px] border border-solid border-[#FFFFFF40] px-[14px] h-[35px] 600px:text-[12px] 600px:h-[30px] 600px:px-[11px]">Дизайн</button>
                      <button className="text-[#FFFFFF] font-monrope font-[300] text-[14px] leading-[19px] rounded-[20px] border border-solid border-[#FFFFFF40] px-[14px] h-[35px] 600px:text-[12px] 600px:h-[30px] 600px:px-[11px]">Промышленность</button>
                    </div>
                  </div>
                </div>

                <div className="flex 600px:flex-col 600px:gap-[50px] translate-x-[-75px] 600px:translate-y-[0] 1440px:translate-x-[0] 1024px:translate-y-[220px] 800px:translate-x-0 1024px:translate-x-[-52px]">
                  <div className="relative mr-[100px] 1440px:mr-[57px] 1024px:mr-[0]">
                    <p className="text-[#F1632B] font-monrope font-[800] text-[97px] 1440px:text-[87px] leading-[96px] tracking-[-0.125em] 800px:text-[60px] 800px:leading-[40px] 800px:top-[-35px] 800px:left-[-35px] absolute top-[-80px] left-[-60px]">+</p>
                    <p className="text-[#2A2A3C] font-monrope font-[800] text-[148px] 1440px:text-[125px] 1024px:text-[80px] 800px:text-[55px] 1024px:leading-[44px] leading-[89px] 1440px:leading-[70px] tracking-[-0.125em]">30 <span className="font-[200] text-[56px] 1440px:text-[46px] 800px:text-[26px] 1024px:text-[35px] tracking-[-0.09em]">млрд</span></p>
                    <div className="max-w-[202px] 1024px:max-w-[158px] w-[100%] flex flex-col gap-[10px]">
                      <p className="text-[#2A2A3C] font-monrope font-[400] text-[16px] 1440px:text-[14px] 1024px:text-[12px] 1024px:leading-[12px] leading-[22px]">Как мы помогли нашим клиентам увеличить прибыль</p>
                      <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M5.21986 0.249664H4.34947L2.1805 3.34802L2.51712 4.37662H1.46044L0.0667179 6.36753H1.88716L2.75661 5.19653H4.80558L4.65424 6.36753L11.3083 6.36754L11.5465 5.02751H8.61782L12.2457 1.16297L12.4094 0.241699H7.32985L7.09163 1.58173H10.0203L6.50545 5.32589L6.63214 1.03625L5.21986 0.249664ZM5.22717 1.93447L4.96619 3.95384H3.67928L5.17863 1.93447H5.22717Z" fill="#2A2A3C" />
                        <path d="M0.0546875 6.43188L7.78853 8.08564L6.19047 7.42221L9.82064 8.08564H11.8527L9.54443 7.07607L9.91928 7.42221L4.61213 6.59533L5.30265 7.20107L0.0546875 6.43188Z" fill="#2A2A3C" />
                      </svg>
                    </div>
                  </div>
                  <div className="relative mt-[-165px] 800px:mt-[-127px] mr-[210px] 1440px:mr-[83px] 1024px:mr-[0] 600px:mt-[0]">
                    <p className="text-[#FA5A32] font-monrope font-[800] text-[37px] leading-[36px] tracking-[-0.125em] absolute top-[-30px] left-[-30px]">+</p>
                    <p className="text-[#2A2A3C] font-monrope font-[800] text-[76px] 800px:text-[40px] 1440px:text-[70px] 1024px:text-[50px] leading-[52px] 1440px:leading-[42px] 1024px:leading-[28px] tracking-[-0.125em]">10 <span className="font-[200] text-[32px] 1440px:text-[28px] 1024px:text-[22px] tracking-[-0.09em]">лет</span></p>
                    <div className="max-w-[202px] w-[100%] flex flex-col gap-[10px] 1024px:gap-[5px]">
                      <p className="text-[#2A2A3C] font-monrope font-[400] text-[16px] 1024px:text-[12px] leading-[22px]">Опыта работы</p>
                      <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M5.21986 0.249664H4.34947L2.1805 3.34802L2.51712 4.37662H1.46044L0.0667179 6.36753H1.88716L2.75661 5.19653H4.80558L4.65424 6.36753L11.3083 6.36754L11.5465 5.02751H8.61782L12.2457 1.16297L12.4094 0.241699H7.32985L7.09163 1.58173H10.0203L6.50545 5.32589L6.63214 1.03625L5.21986 0.249664ZM5.22717 1.93447L4.96619 3.95384H3.67928L5.17863 1.93447H5.22717Z" fill="#2A2A3C" />
                        <path d="M0.0546875 6.43188L7.78853 8.08564L6.19047 7.42221L9.82064 8.08564H11.8527L9.54443 7.07607L9.91928 7.42221L4.61213 6.59533L5.30265 7.20107L0.0546875 6.43188Z" fill="#2A2A3C" />
                      </svg>
                    </div>
                  </div>
                  <div className="relative mt-[-300px] 600px:mt-[0]">
                    <p className="text-[#F1632B] font-monrope font-[800] text-[60px] leading-[59px] tracking-[-0.125em] absolute top-[-40px] left-[-45px]">+</p>
                    <p className="text-[#2A2A3C] font-monrope font-[800] text-[91px] 800px:text-[40px] 1440px:text-[70px] 1024px:text-[50px] leading-[90px] 1440px:leading-[62px] 1024px:leading-[43px] tracking-[-0.125em]">250 <span className="font-[200] text-[56px] 1440px:text-[50px] 1024px:text-[30px] 800px:text-[22px] tracking-[-0.09em]">кейсов</span></p>
                    <div className="max-w-[224px] 1024px:max-w-[164px] w-[100%] 800px:max-w-[127px] 800px:min-w-[127px] flex flex-col gap-[10px]">
                      <p className="text-[#2A2A3C] font-monrope font-[400] text-[16px] 1440px:text-[14px] 1024px:text-[12px] 1024px:leading-[12px] leading-[22px]">Посмотрите, как мы можем вам помочь в решении задач любой сложности</p>
                      <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M5.21986 0.249664H4.34947L2.1805 3.34802L2.51712 4.37662H1.46044L0.0667179 6.36753H1.88716L2.75661 5.19653H4.80558L4.65424 6.36753L11.3083 6.36754L11.5465 5.02751H8.61782L12.2457 1.16297L12.4094 0.241699H7.32985L7.09163 1.58173H10.0203L6.50545 5.32589L6.63214 1.03625L5.21986 0.249664ZM5.22717 1.93447L4.96619 3.95384H3.67928L5.17863 1.93447H5.22717Z" fill="#2A2A3C" />
                        <path d="M0.0546875 6.43188L7.78853 8.08564L6.19047 7.42221L9.82064 8.08564H11.8527L9.54443 7.07607L9.91928 7.42221L4.61213 6.59533L5.30265 7.20107L0.0546875 6.43188Z" fill="#2A2A3C" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="max-w-[328px] min-w-[328px] 600px:max-w-[48%] 600px:min-w-[48%] 1440px:max-w-[261px] 1440px:min-w-[261px] 1200px:max-w-[160px] 1200px:min-w-[160px] w-[100%] 1024px:max-w-[49%] 1024px:min-w-[49%] flex flex-col justify-end">
                  <div className="bg-[#D9D9D9] rounded-[20px] w-[100%] h-[404px] 1440px:h-[334px] 1200px:h-[264px] 1024px:h-[420px] 600px:h-[300px]"></div>
                  <div>
                    <h6 className="text-[#FFFFFF] font-monrope font-[700] text-[18px] leading-[24px] max-w-[275px] w-[100%] mb-[12px] mt-[24px] 1440px:text-[16px] 1200px:text-[14px] 600px:text-[12px]">Bang & Olufsen - See yourself in Sound</h6>
                    <div className="flex flex-wrap gap-[6px] mb-[32px] 1024px:mb-[28px]">
                      <button className="text-[#FFFFFF] font-monrope font-[300] text-[14px] leading-[19px] rounded-[20px] border border-solid border-[#FFFFFF40] px-[14px] h-[35px] 600px:text-[12px] 600px:h-[30px] 600px:px-[11px]">Сайт</button>
                      <button className="text-[#FFFFFF] font-monrope font-[300] text-[14px] leading-[19px] rounded-[20px] border border-solid border-[#FFFFFF40] px-[14px] h-[35px] 600px:text-[12px] 600px:h-[30px] 600px:px-[11px]">Дизайн</button>
                      <button className="text-[#FFFFFF] font-monrope font-[300] text-[14px] leading-[19px] rounded-[20px] border border-solid border-[#FFFFFF40] px-[14px] h-[35px] 600px:text-[12px] 600px:h-[30px] 600px:px-[11px]">Промышленность</button>
                    </div>
                  </div>
                </div>
                <div className="max-w-[567px] min-w-[567px] 600px:max-w-[48%] 600px:min-w-[48%] 1440px:max-w-[480px] 1440px:min-w-[480px] 1200px:max-w-[445px] 1200px:min-w-[445px] w-[100%] 1024px:max-w-[49%] 1024px:min-w-[49%] flex flex-col justify-end">
                  <div className="bg-[#D9D9D9] rounded-[20px] w-[100%] h-[489px] 1440px:h-[420px] 1200px:h-[380px] 1024px:h-[420px] 600px:h-[300px] flex"></div>
                  <div>
                    <h6 className="text-[#FFFFFF] font-monrope font-[700] text-[18px] leading-[24px] max-w-[275px] w-[100%] mb-[12px] mt-[24px] 1440px:text-[16px] 1200px:text-[14px] 600px:text-[12px]">Bang & Olufsen - See yourself in Sound</h6>
                    <div className="flex flex-wrap gap-[6px] mb-[32px] 1024px:mb-[28px]">
                      <button className="text-[#FFFFFF] font-monrope font-[300] text-[14px] leading-[19px] rounded-[20px] border border-solid border-[#FFFFFF40] px-[14px] h-[35px] 600px:text-[12px] 600px:h-[30px] 600px:px-[11px]">Сайт</button>
                      <button className="text-[#FFFFFF] font-monrope font-[300] text-[14px] leading-[19px] rounded-[20px] border border-solid border-[#FFFFFF40] px-[14px] h-[35px] 600px:text-[12px] 600px:h-[30px] 600px:px-[11px]">Дизайн</button>
                      <button className="text-[#FFFFFF] font-monrope font-[300] text-[14px] leading-[19px] rounded-[20px] border border-solid border-[#FFFFFF40] px-[14px] h-[35px] 600px:text-[12px] 600px:h-[30px] 600px:px-[11px]">Промышленность</button>
                    </div>
                  </div>
                </div>
                <div className="max-w-[467px] min-w-[467px] 600px:max-w-[48%] 600px:min-w-[48%] 1440px:max-w-[380px] 1440px:min-w-[380px] 1200px:max-w-[345px] 1200px:min-w-[345px] w-[100%] 1024px:max-w-[49%] 1024px:min-w-[49%] flex flex-col justify-end">
                  <div className="bg-[#D9D9D9] rounded-[20px] w-[100%] h-[655px] 1440px:h-[585px] 1200px:h-[515px] 1024px:h-[420px] 600px:h-[300px]"></div>
                  <div>
                    <h6 className="text-[#FFFFFF] font-monrope font-[700] text-[18px] leading-[24px] max-w-[275px] w-[100%] mb-[12px] mt-[24px] 1440px:text-[16px] 1200px:text-[14px] 600px:text-[12px]">Bang & Olufsen - See yourself in Sound</h6>
                    <div className="flex flex-wrap gap-[6px] mb-[32px] 1024px:mb-[28px]">
                      <button className="text-[#FFFFFF] font-monrope font-[300] text-[14px] leading-[19px] rounded-[20px] border border-solid border-[#FFFFFF40] px-[14px] h-[35px] 600px:text-[12px] 600px:h-[30px] 600px:px-[11px]">Сайт</button>
                      <button className="text-[#FFFFFF] font-monrope font-[300] text-[14px] leading-[19px] rounded-[20px] border border-solid border-[#FFFFFF40] px-[14px] h-[35px] 600px:text-[12px] 600px:h-[30px] 600px:px-[11px]">Дизайн</button>
                      <button className="text-[#FFFFFF] font-monrope font-[300] text-[14px] leading-[19px] rounded-[20px] border border-solid border-[#FFFFFF40] px-[14px] h-[35px] 600px:text-[12px] 600px:h-[30px] 600px:px-[11px]">Промышленность</button>
                    </div>
                  </div>
                </div>

                <div className="max-w-[567px] min-w-[567px] 600px:max-w-[48%] 600px:min-w-[48%] 1440px:max-w-[480px] 1440px:min-w-[480px] 1200px:max-w-[445px] 1200px:min-w-[445px] 1024px:max-w-[49%] 1024px:min-w-[49%] w-[100%]">
                  <div className="bg-[#D9D9D9] rounded-[20px] w-[100%] h-[590px] 1440px:h-[520px] 1200px:h-[420px] 1024px:h-[420px] 600px:h-[300px]"></div>
                  <div>
                    <h6 className="text-[#FFFFFF] font-monrope font-[700] text-[18px] leading-[24px] max-w-[275px] w-[100%] mb-[12px] mt-[24px] 1440px:text-[16px] 1200px:text-[14px] 600px:text-[12px]">Bang & Olufsen - See yourself in Sound</h6>
                    <div className="flex flex-wrap gap-[6px] mb-[64px] 1024px:mb-[28px]">
                      <button className="text-[#FFFFFF] font-monrope font-[300] text-[14px] leading-[19px] rounded-[20px] border border-solid border-[#FFFFFF40] px-[14px] h-[35px] 600px:text-[12px] 600px:h-[30px] 600px:px-[11px]">Сайт</button>
                      <button className="text-[#FFFFFF] font-monrope font-[300] text-[14px] leading-[19px] rounded-[20px] border border-solid border-[#FFFFFF40] px-[14px] h-[35px] 600px:text-[12px] 600px:h-[30px] 600px:px-[11px]">Дизайн</button>
                      <button className="text-[#FFFFFF] font-monrope font-[300] text-[14px] leading-[19px] rounded-[20px] border border-solid border-[#FFFFFF40] px-[14px] h-[35px] 600px:text-[12px] 600px:h-[30px] 600px:px-[11px]">Промышленность</button>
                    </div>
                  </div>
                </div>
                <div className="max-w-[328px] min-w-[328px] 600px:max-w-[48%] 600px:min-w-[48%] 1440px:max-w-[261px] 1440px:min-w-[261px] 1200px:max-w-[160px] 1200px:min-w-[160px] 1024px:max-w-[49%] 1024px:min-w-[49%] w-[100%]">
                  <div className="bg-[#D9D9D9] rounded-[20px] w-[100%] h-[590px] 1440px:h-[520px] 1200px:h-[420px] 1024px:h-[420px] 600px:h-[300px]"></div>
                  <div>
                    <h6 className="text-[#FFFFFF] font-monrope font-[700] text-[18px] leading-[24px] max-w-[275px] w-[100%] mb-[12px] mt-[24px] 1440px:text-[16px] 1200px:text-[14px] 600px:text-[12px]">Bang & Olufsen - See yourself in Sound</h6>
                    <div className="flex flex-wrap gap-[6px] mb-[64px] 1024px:mb-[28px]">
                      <button className="text-[#FFFFFF] font-monrope font-[300] text-[14px] leading-[19px] rounded-[20px] border border-solid border-[#FFFFFF40] px-[14px] h-[35px] 600px:text-[12px] 600px:h-[30px] 600px:px-[11px]">Сайт</button>
                      <button className="text-[#FFFFFF] font-monrope font-[300] text-[14px] leading-[19px] rounded-[20px] border border-solid border-[#FFFFFF40] px-[14px] h-[35px] 600px:text-[12px] 600px:h-[30px] 600px:px-[11px]">Дизайн</button>
                      <button className="text-[#FFFFFF] font-monrope font-[300] text-[14px] leading-[19px] rounded-[20px] border border-solid border-[#FFFFFF40] px-[14px] h-[35px] 600px:text-[12px] 600px:h-[30px] 600px:px-[11px]">Промышленность</button>
                    </div>
                  </div>
                </div>
                <div className="max-w-[467px] min-w-[467px] 600px:max-w-[48%] 600px:min-w-[48%] 1440px:max-w-[380px] 1440px:min-w-[380px] 1200px:max-w-[345px] 1200px:min-w-[345px] 1024px:max-w-[49%] 1024px:min-w-[49%] w-[100%]">
                  <div className="bg-[#D9D9D9] rounded-[20px] w-[100%] h-[590px] 1440px:h-[520px] 1200px:h-[420px] 1024px:h-[420px] 600px:h-[300px]"></div>
                  <div>
                    <h6 className="text-[#FFFFFF] font-monrope font-[700] text-[18px] leading-[24px] max-w-[275px] w-[100%] mb-[12px] mt-[24px] 1440px:text-[16px] 1200px:text-[14px] 600px:text-[12px]">Bang & Olufsen - See yourself in Sound</h6>
                    <div className="flex flex-wrap gap-[6px] mb-[64px] 1024px:mb-[28px]">
                      <button className="text-[#FFFFFF] font-monrope font-[300] text-[14px] leading-[19px] rounded-[20px] border border-solid border-[#FFFFFF40] px-[14px] h-[35px] 600px:text-[12px] 600px:h-[30px] 600px:px-[11px]">Сайт</button>
                      <button className="text-[#FFFFFF] font-monrope font-[300] text-[14px] leading-[19px] rounded-[20px] border border-solid border-[#FFFFFF40] px-[14px] h-[35px] 600px:text-[12px] 600px:h-[30px] 600px:px-[11px]">Дизайн</button>
                      <button className="text-[#FFFFFF] font-monrope font-[300] text-[14px] leading-[19px] rounded-[20px] border border-solid border-[#FFFFFF40] px-[14px] h-[35px] 600px:text-[12px] 600px:h-[30px] 600px:px-[11px]">Промышленность</button>
                    </div>
                  </div>
                </div>

              </div>
              <div>
                <div className="border border-solid border-[#FF96954A] rounded-[20px] p-[10px] 600px:p-[5px]">
                  <button className="w-[100%] h-[100px] 1200px:h-[80px] 1024px:h-[60px] 600px:h-[55px] 1024px:text-[14px] relative rounded-[20px] after:content-[''] after:absolute after:top-0 after:left-0 after:w-[100%] after:h-[100%] after:z-[-1] after:border after:border-solid after:border-[#FFFFFF] after:rounded-[20px] after:opacity-[50%] before:content-[''] overflow-hidden before:absolute before:top-0 before:left-0 before:w-[100%] before:h-[100%] before:bg-[url(/assets/img/button_fon.png)] before:bg-[length:50%] before:z-[-1] before:mix-blend-plus-lighter before:opacity-[39%] flex items-center gap-[23px] justify-center">
                    <svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.4668 0.136606H8.71817L4.36065 6.36127L5.03693 8.42776H2.91403L0.114013 12.4276H3.77134L5.51807 10.075H9.63451L9.33047 12.4276L22.6985 12.4276L23.1771 9.73543H17.2934L24.5818 1.97146L24.9109 0.120605H14.7058L14.2272 2.81276H20.111L13.0496 10.3349L13.3041 1.71689L10.4668 0.136606ZM10.4815 3.52142L9.95717 7.57839H7.37174L10.384 3.52142H10.4815Z" fill="white" />
                      <path d="M0.0898438 12.5568L15.6273 15.8793L12.4168 14.5464L19.7099 15.8793H23.7924L19.155 13.851L19.9081 14.5464L9.24586 12.8852L10.6331 14.1022L0.0898438 12.5568Z" fill="white" />
                    </svg>
                    <p className="text-[#FFFFFF] font-monrope font-[800] text-[24px] 1200px:text-[20px] leading-[32px] 600px:text-[14px]">Посмотреть все работы</p>
                    <svg width="26" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.910369 8.00016H23.9102M23.9102 8.00016L17.0843 14.826M23.9102 8.00016L17.0843 1.17432" stroke="white" stroke-width="2" />
                    </svg>
                  </button>
                </div>
                <div className="mt-[132px] 1024px:mt-[64px]">
                  <h6 className="max-w-[798px] 1024px:max-w-[317px] w-[100%] text-[#FFFFFF] font-monrope font-[800] text-[40px] 1024px:text-[16px] 1024px:leading-[21px] leading-[44px] tracking-[-0.04em]">12 лет создаем умные сайты с современным дизайном! <span className="text-[#FFA1A1]">Наша команда разрабатывает уникальные веб-решения, улучшающие визуальное восприятие</span> и увеличивающие конверсию вашего бизнеса.</h6>
                  <div className="flex items-start gap-[179px] 1024px:gap-[70px] mt-[100px] 1024px:mt-[30px]">
                    <div className="w-[564px] 1024px:w-[325px] h-[88px] relative flex items-center justify-end">
                      <svg width="100%" height="90" className="absolute z-[-1] top-0 left-0" viewBox="0 0 565 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M38.2526 1.26562H526.158C534.331 1.26562 540.409 1.26673 545.165 1.92461C549.903 2.57991 553.269 3.88038 556.043 6.44249C558.822 9.01043 560.369 12.105 561.368 16.4378C562.372 20.7933 562.815 26.3545 563.408 33.8417C563.718 37.7447 563.91 41.5541 563.91 44.9888C563.91 48.4235 563.718 52.2328 563.408 56.1359C562.815 63.6231 562.372 69.1842 561.368 73.5397C560.369 77.8725 558.822 80.9671 556.043 83.535C553.269 86.0972 549.903 87.3976 545.165 88.0529C540.409 88.7108 534.331 88.7119 526.158 88.7119H38.2526C30.0794 88.7119 24.0007 88.7108 19.2448 88.0529C14.5076 87.3976 11.1408 86.0972 8.36747 83.535C5.58787 80.9671 4.04137 77.8725 3.0422 73.5397C2.0378 69.1842 1.59562 63.6231 1.00199 56.1359C0.692525 52.2328 0.5 48.4235 0.5 44.9888C0.5 41.5541 0.692525 37.7448 1.00199 33.8417C1.59562 26.3545 2.0378 20.7933 3.0422 16.4378C4.04137 12.105 5.58787 9.01043 8.36747 6.44249C11.1408 3.88038 14.5076 2.57991 19.2448 1.92461C24.0006 1.26673 30.0794 1.26562 38.2526 1.26562Z" stroke="#FFA1A1" />
                      </svg>
                      <img src="/assets/img/partners.png" className="absolute bottom-0 600px:w-[35%] 600px:left-[9px] 600px:bottom-[26px] 1024px:bottom-[17px] left-[24px] 1024px:left-[14px] 1024px:w-[40%]" />
                      <div className="flex items-center gap-[10px] 600px:gap-[5px] justify-end mr-[42px] 1024px:mr-[25px]">
                        <svg width="23" height="20" className="1024px:w-[17px] 600px:w-[8px]" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M2.47624 8.54176C8.34968 5.92276 12.2637 4.19645 14.2231 3.36114C19.8169 0.978389 20.9794 0.564952 21.7387 0.551452C21.9044 0.548077 22.2762 0.590264 22.5184 0.791077C22.7215 0.959827 22.7778 1.18933 22.8044 1.34964C22.8309 1.50995 22.8653 1.87614 22.8387 2.16133C22.5356 5.42326 21.2231 13.3376 20.5575 16.9894C20.2731 18.5351 19.7184 19.0532 19.1794 19.1055C18.0106 19.2152 17.1215 18.3124 15.9887 17.553C14.2153 16.3633 13.2137 15.6225 11.4934 14.4615C9.50436 13.1183 10.7934 12.3808 11.9278 11.176C12.2247 10.8604 17.3778 6.06114 17.4778 5.62408C17.4903 5.57008 17.5012 5.36758 17.3841 5.26126C17.2669 5.15326 17.0919 5.19039 16.9669 5.21908C16.7887 5.26126 13.9575 7.17658 8.46999 10.9701C7.66686 11.5354 6.93874 11.8105 6.28561 11.797C5.56686 11.7801 4.18405 11.3785 3.15436 11.0376C1.89343 10.6157 0.891864 10.3963 0.977802 9.68252C1.02468 9.31126 1.52468 8.93158 2.4778 8.54176H2.47624Z" fill="white" />
                        </svg>
                        <p className="text-[#FFFFFF] font-inter font-[400] text-[16px] 1024px:text-[12px] leading-[19px] 600px:text-[8px]">Написать в телеграм</p>
                      </div>
                    </div>
                    <p className="max-w-[287px] 1024px:max-w-[175px] 600px:max-w-[122px] 1024px:translate-y-[50px] w-[100%] text-[#FFFFFF] font-monrope font-[300] 600px:text-[8px] 600px:leading-[10px] text-[20px] 1024px:text-[14px] 1024px:leading-[19px] leading-[28px] tracking-[-0.04em]">Создаем сайты, которые выделяют ваш бизнес <span className="text-[#FFA1A1]">среди конкурентов и становятся выгодной инвестицией в будущее!</span></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[100%] relative">
              <img src="/assets/img/mini_mountain.png" className=" ml-auto w-[90%] h-[414px] 600px:h-[180px] mix-blend-multiply 800px:w-[100%] 800px:h-[265px]" />
              <svg width="100%" height="1600" className="absolute top-[-200px] left-0 1024px:top-[-331px] 1200px:top-[-420px] 800px:top-[-660px]" viewBox="0 0 1920 1600" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_737_3724)">
                  <path d="M225.82 546.482L-229.557 652.76C-249.414 657.394 -268.666 664.318 -286.927 673.391C-460.52 759.647 -484.72 997.489 -332.057 1116.94L-198.676 1221.3C-127.205 1277.23 -37.6862 1304.96 52.8831 1299.23L1980.79 1177.35C2183.05 1164.57 2314.3 958.568 2240.42 769.853L2081.34 363.471C2050.27 284.093 1940.29 277.958 1900.58 353.387C1894.4 365.129 1886.01 375.479 1875.55 383.637C1836.83 413.813 1736.45 488.235 1690.26 486.592C1605.27 483.567 1565.64 516.692 1522.08 551.066C1489.35 576.889 1571.16 512.332 1423.68 567.163C1276.21 621.993 1265.04 622.483 1242.7 623.463L1087.19 630.284C1038.22 632.432 1013.73 633.506 989.241 633.38C974.359 633.304 959.481 632.896 944.617 632.155C920.16 630.937 895.768 628.52 846.983 623.688L674.44 606.595C625.604 601.757 577.736 589.821 532.346 571.165C435.227 531.246 328.075 522.617 225.82 546.482Z" fill="#FF8252" />
                </g>
                <defs>
                  <filter id="filter0_f_737_3724" x="-733.215" y="0.217285" width="3294.45" height="1599.75" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_737_3724" />
                  </filter>
                </defs>
              </svg>
              <div className="">
                <img src="/assets/svg/building.svg" className="absolute top-[300px] 800px:h-[443px] left-[50%] translate-x-[-50%] max-w-[95%] 1024px:max-w-[143%] 1024px:min-w-[143%] 800px:max-w-[186%] 800px:min-w-[186%] w-[100%] 600px:top-[30px]" />
                <p className="text-[#FFFFFF] font-monrope font-[700] text-[18px] 1024px:text-[14px] 600px:text-[9px] leading-[24px] absolute top-[250px] 1024px:top-[260px] 600px:top-[50px] z-[1] left-[24%] 1024px:left-[12%] 600px:left-[5%]">Эффективный маркетинг</p>
                <p className="text-[#FFFFFF] font-monrope font-[700] text-[18px] 1024px:text-[14px] 600px:text-[9px] leading-[24px] absolute top-[330px] 600px:top-[88px] 1024px:top-[315px] z-[1] left-[47%] 1024px:left-[37%]">Стильный дизайн</p>
                <p className="text-[#FFFFFF] font-monrope font-[700] text-[18px] 1024px:text-[14px] 600px:text-[9px] leading-[24px] absolute top-[280px] 600px:top-[55px] z-[1] right-[18%] 1024px:right-[4%]">Опытные программисты</p>
              </div>
              <svg width="100%" height="1469" className="absolute top-[157px] 800px:top-[-7px] 1440px:top-[8px] 1024px:top-[30px] 1200px:top-[-136px] left-0 600px:top-[-360px]" viewBox="0 0 1920 1469" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_737_3988)">
                  <path d="M1480.31 301.051L1940.52 327.711C1968.32 329.322 1995.87 333.881 2022.71 341.311C2235.84 400.315 2358.44 623.375 2294.03 834.931L2284.31 866.856C2229.72 1046.14 2064.34 1168.66 1876.93 1168.66H-175.266C-366.698 1168.66 -508.326 990.51 -465.166 804.006L-376.453 420.663C-357.529 338.892 -253.269 313.982 -199.425 378.367C-190.867 388.601 -180.461 397.03 -168.49 402.92C-125 424.321 -14.3528 475.632 30.7777 467.259C178.62 439.827 204.406 535.892 347.477 539.315L768.848 492.388L1052.96 422.423C1100.04 410.829 1145.32 392.862 1187.54 369.018C1276.58 318.732 1378.22 295.137 1480.31 301.051Z" fill="#E13E3D" />
                </g>
                <defs>
                  <filter id="filter0_f_737_3988" x="-772.957" y="0.159668" width="3384.15" height="1468.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_737_3988" />
                  </filter>
                </defs>
              </svg>
              <div className="flex items-start 800px:items-center justify-between mt-[400px] 1200px:mt-[136px] pl-[230px] 1600px:pl-[150px] 1440px:pl-[60px] 800px:pb-[155px] overflow-hidden relative z-[2] 600px:gap-[26px] 600px:pl-[26px]">
                <div className="max-w-[46%] min-w-[46%] 1024px:max-w-[210px] 1024px:min-w-[210px] 1440px:max-w-[37%] 1440px:min-w-[37%] w-[100%] mt-[50px] 800px:mt-[0]">
                  <svg width="25" height="17" viewBox="0 0 25 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.377 0.625864H8.62832L4.27081 6.85053L4.94708 8.91702H2.82418L0.0241693 12.9168H3.68149L5.42823 10.5642H9.54467L9.24063 12.9168L22.6087 12.9168L23.0873 10.2247H17.2035L24.492 2.46072L24.821 0.609863H14.616L14.1374 3.30201H20.0211L12.9598 10.8241L13.2143 2.20614L10.377 0.625864ZM10.3916 4.01068L9.86733 8.06765H7.2819L10.2941 4.01068H10.3916Z" fill="white" />
                    <path d="M0 13.0461L15.5375 16.3685L12.3269 15.0357L19.62 16.3685H23.7026L19.0651 14.3403L19.8182 15.0357L9.15602 13.3745L10.5433 14.5914L0 13.0461Z" fill="white" />
                  </svg>
                  <div className="text-[#FFFFFF] font-monrope font-[800] text-[56px] leading-[58px] tracking-[-0.04em] uppercase my-[18px] 1024px:my-[12px] 1600px:text-[46px] 1440px:text-[30px] 1024px:leading-[20px] 1024px:text-[14px] 1440px:leading-[38px]">Мы помогли сотням партнеров,
                    <div className="inline-flex [&>*:nth-child(2)]:translate-x-[-23px] 1024px:[&>*:nth-child(2)]:translate-x-[-7px] 1024px:[&>*:nth-child(3)]:translate-x-[-14px] 1440px:[&>*:nth-child(2)]:translate-x-[-15px] [&>*:nth-child(3)]:translate-x-[-46px] 1440px:[&>*:nth-child(3)]:translate-x-[-30px]">
                      <img src="/assets/img/profile_girl.png" className="w-[62px] 1024px:w-[22px] 1024px:h-[22px] 1440px:w-[38px] 1440px:h-[38px] h-[62px] border-[3px] 1024px:border-[2px] border-solid border-[#E13F3E] rounded-[50%] shadow-[-6px_11px_28px_0px_#841F1F8A,_-22px_46px_51px_0px_#841F1F78,_-50px_103px_69px_0px_#841F1F47,_-89px_183px_81px_0px_#841F1F14,_-140px_285px_89px_0px_#841F1F03]" />
                      <img src="/assets/img/profile_girl.png" className="w-[62px] 1024px:w-[22px] 1024px:h-[22px] 1440px:w-[38px] 1440px:h-[38px] h-[62px] border-[3px] 1024px:border-[2px] border-solid border-[#E13F3E] rounded-[50%] shadow-[-6px_11px_28px_0px_#841F1F8A,_-22px_46px_51px_0px_#841F1F78,_-50px_103px_69px_0px_#841F1F47,_-89px_183px_81px_0px_#841F1F14,_-140px_285px_89px_0px_#841F1F03]" />
                      <img src="/assets/img/profile_girl.png" className="w-[62px] 1024px:w-[22px] 1024px:h-[22px] 1440px:w-[38px] 1440px:h-[38px] h-[62px] border-[3px] 1024px:border-[2px] border-solid border-[#E13F3E] rounded-[50%] shadow-[-6px_11px_28px_0px_#841F1F8A,_-22px_46px_51px_0px_#841F1F78,_-50px_103px_69px_0px_#841F1F47,_-89px_183px_81px_0px_#841F1F14,_-140px_285px_89px_0px_#841F1F03]" />
                    </div> <br />
                    <span className="text-[#FFA1A1]">от стартапов до крупных предприятий,</span>  достичь своих целей.</div>
                  <p className="text-[#FFFFFF] font-monrope font-[200] text-[29px] leading-[30px] tracking-[-0.04em] 1024px:text-[14px] 1024px:leading-[17px] 1024px:max-w-[63%] 1440px:text-[24px]">И звездные отзывы - это наша награда!</p>
                </div>
                <div className="relative flex flex-col translate-x-[21px] 1440px:translate-x-[121px] 1024px:translate-x-[14px] gap-[18px] 600px:gap-[10px] z-[99] pb-[155px] 800px:pb-[0]">
                  <div className="flex flex-col gap-[18px] 600px:gap-[10px]">
                    <div className="flex 800px:ml-[-150px] 600px:h-[45px] 600px:rounded-[15px] 1440px:h-[60px] items-center bg-[#FFFFFF] shadow-[-3px_9px_21px_0px_#942E2E8A,_-13px_37px_39px_0px_#942E2E78,_-30px_82px_53px_0px_#942E2E47,_-54px_146px_62px_0px_#942E2E14,_-84px_229px_68px_0px_#942E2E03] w-[max-content] rounded-[20px] h-[79px] pr-[32px] 1440px:pr-[15px]  pl-[15px]">
                      <img src="/assets/img/photo.png" className="w-[43px] 600px:w-[23px] 600px:h-[23px] 1440px:w-[33px] 1440px:h-[33px] h-[43px]" />
                      <div className="flex flex-col gap-[4px] 1440px:gap-[1px] ml-[12px] mr-[27px] 1440px:ml-[8px] 1440px:mr-[17px]">
                        <p className="text-[#3C5864] font-monrope font-[700] text-[16px] 600px:text-[10px] 600px:leading-[10px] 1440px:text-[14px] 1440px:leading-[18px] leading-[21px]">Атиф Хуссейн</p>
                        <p className="text-[#B9C3C7] font-monrope font-[700] text-[12px] 600px:text-[8px] 600px:leading-[10px] 1440px:text-[10px] leading-[16px]">Соучредитель  Kinetik</p>
                      </div>
                      <svg width="65" height="15" className="600px:w-[40px]" viewBox="0 0 65 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.898438 6.28418C0.898438 5.18986 1.78556 4.30273 2.87988 4.30273C3.9742 4.30273 4.86133 5.18986 4.86133 6.28418V8.26465C4.86133 9.35897 3.9742 10.2461 2.87988 10.2461C1.78556 10.2461 0.898438 9.35897 0.898438 8.26465V6.28418Z" fill="black" />
                        <path d="M12.8594 2.39063C12.8594 1.2963 13.7465 0.40918 14.8408 0.40918C15.9351 0.40918 16.8223 1.2963 16.8223 2.39062V12.1582C16.8223 13.2525 15.9351 14.1396 14.8408 14.1396C13.7465 14.1396 12.8594 13.2525 12.8594 12.1582V2.39063Z" fill="black" />
                        <path d="M24.8242 6.28418C24.8242 5.18986 25.7113 4.30273 26.8057 4.30273C27.9 4.30273 28.7871 5.18986 28.7871 6.28418V8.26465C28.7871 9.35897 27.9 10.2461 26.8057 10.2461C25.7113 10.2461 24.8242 9.35897 24.8242 8.26465V6.28418Z" fill="black" />
                        <path d="M36.7891 6.28418C36.7891 5.18986 37.6762 4.30273 38.7705 4.30273C39.8648 4.30273 40.752 5.18986 40.752 6.28418V8.26465C40.752 9.35897 39.8648 10.2461 38.7705 10.2461C37.6762 10.2461 36.7891 9.35897 36.7891 8.26465V6.28418Z" fill="black" />
                        <path d="M48.75 4.98828C48.75 3.89396 49.6371 3.00684 50.7314 3.00684C51.8258 3.00684 52.7129 3.89396 52.7129 4.98828V9.56055C52.7129 10.6549 51.8258 11.542 50.7314 11.542C49.6371 11.542 48.75 10.6549 48.75 9.56055V4.98828Z" fill="black" />
                        <path d="M60.7109 6.96777C60.7109 5.87345 61.5981 4.98633 62.6924 4.98633C63.7867 4.98633 64.6738 5.87345 64.6738 6.96777V7.58105C64.6738 8.67538 63.7867 9.5625 62.6924 9.5625C61.5981 9.5625 60.7109 8.67538 60.7109 7.58105V6.96777Z" fill="black" />
                      </svg>
                      <button className="w-[32px] 600px:w-[22px] 600px:h-[22px] h-[32px] bg-[#FF4800] rounded-[50%] flex items-center justify-center ml-[25px] 1440px:ml-[18px]">
                        <svg width="12" height="13" className="600px:w-[35%]" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0.875 2.37904C0.875 1.20401 1.82755 0.251465 3.00258 0.251465C4.17761 0.251465 5.13016 1.20401 5.13016 2.37904V10.5339C5.13016 11.709 4.17761 12.6615 3.00258 12.6615C1.82755 12.6615 0.875 11.709 0.875 10.5339V2.37904Z" fill="white" />
                          <path d="M7.59766 2.37906C7.59766 1.20402 8.55021 0.251465 9.72525 0.251465C10.9003 0.251465 11.8528 1.20402 11.8528 2.37906V10.5339C11.8528 11.7089 10.9003 12.6615 9.72525 12.6615C8.55021 12.6615 7.59766 11.7089 7.59766 10.5339V2.37906Z" fill="white" />
                        </svg>
                      </button>
                    </div>
                    <div className="ml-[-94px] 800px:ml-[-80px] 600px:h-[45px] 600px:rounded-[15px] 1024px:ml-[-40px] flex  1440px:h-[60px] items-center bg-[#FFFFFF] relative z-[-1] shadow-[-3px_9px_21px_0px_#942E2E8A,_-13px_37px_39px_0px_#942E2E78,_-30px_82px_53px_0px_#942E2E47,_-54px_146px_62px_0px_#942E2E14,_-84px_229px_68px_0px_#942E2E03] w-[max-content] rounded-[20px] h-[79px]  1440px:pr-[15px] pr-[32px] pl-[15px]">
                      <img src="/assets/img/photo.png" className="w-[43px] 600px:w-[23px] 600px:h-[23px] 1440px:w-[33px] 1440px:h-[33px] h-[43px]" />
                      <div className="flex flex-col gap-[4px] 1440px:gap-[1px] ml-[12px] mr-[27px] 1440px:ml-[8px] 1440px:mr-[17px]">
                        <p className="text-[#3C5864] font-monrope font-[700] text-[16px] 600px:text-[10px] 600px:leading-[10px] 1440px:text-[14px] 1440px:leading-[18px] leading-[21px]">Атиф Хуссейн</p>
                        <p className="text-[#B9C3C7] font-monrope font-[700] text-[12px] 600px:text-[8px] 600px:leading-[10px] 1440px:text-[10px] leading-[16px]">Соучредитель  Kinetik</p>
                      </div>
                      <svg width="65" height="15" className="600px:w-[40px]" viewBox="0 0 65 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.898438 6.28418C0.898438 5.18986 1.78556 4.30273 2.87988 4.30273C3.9742 4.30273 4.86133 5.18986 4.86133 6.28418V8.26465C4.86133 9.35897 3.9742 10.2461 2.87988 10.2461C1.78556 10.2461 0.898438 9.35897 0.898438 8.26465V6.28418Z" fill="black" />
                        <path d="M12.8594 2.39063C12.8594 1.2963 13.7465 0.40918 14.8408 0.40918C15.9351 0.40918 16.8223 1.2963 16.8223 2.39062V12.1582C16.8223 13.2525 15.9351 14.1396 14.8408 14.1396C13.7465 14.1396 12.8594 13.2525 12.8594 12.1582V2.39063Z" fill="black" />
                        <path d="M24.8242 6.28418C24.8242 5.18986 25.7113 4.30273 26.8057 4.30273C27.9 4.30273 28.7871 5.18986 28.7871 6.28418V8.26465C28.7871 9.35897 27.9 10.2461 26.8057 10.2461C25.7113 10.2461 24.8242 9.35897 24.8242 8.26465V6.28418Z" fill="black" />
                        <path d="M36.7891 6.28418C36.7891 5.18986 37.6762 4.30273 38.7705 4.30273C39.8648 4.30273 40.752 5.18986 40.752 6.28418V8.26465C40.752 9.35897 39.8648 10.2461 38.7705 10.2461C37.6762 10.2461 36.7891 9.35897 36.7891 8.26465V6.28418Z" fill="black" />
                        <path d="M48.75 4.98828C48.75 3.89396 49.6371 3.00684 50.7314 3.00684C51.8258 3.00684 52.7129 3.89396 52.7129 4.98828V9.56055C52.7129 10.6549 51.8258 11.542 50.7314 11.542C49.6371 11.542 48.75 10.6549 48.75 9.56055V4.98828Z" fill="black" />
                        <path d="M60.7109 6.96777C60.7109 5.87345 61.5981 4.98633 62.6924 4.98633C63.7867 4.98633 64.6738 5.87345 64.6738 6.96777V7.58105C64.6738 8.67538 63.7867 9.5625 62.6924 9.5625C61.5981 9.5625 60.7109 8.67538 60.7109 7.58105V6.96777Z" fill="black" />
                      </svg>
                      <button className="w-[32px] 600px:w-[22px] 600px:h-[22px] h-[32px] bg-[#FF4800] rounded-[50%] flex items-center justify-center ml-[25px] 1440px:ml-[18px]">
                        <svg width="12" height="13" className="600px:w-[35%]" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0.875 2.37904C0.875 1.20401 1.82755 0.251465 3.00258 0.251465C4.17761 0.251465 5.13016 1.20401 5.13016 2.37904V10.5339C5.13016 11.709 4.17761 12.6615 3.00258 12.6615C1.82755 12.6615 0.875 11.709 0.875 10.5339V2.37904Z" fill="white" />
                          <path d="M7.59766 2.37906C7.59766 1.20402 8.55021 0.251465 9.72525 0.251465C10.9003 0.251465 11.8528 1.20402 11.8528 2.37906V10.5339C11.8528 11.7089 10.9003 12.6615 9.72525 12.6615C8.55021 12.6615 7.59766 11.7089 7.59766 10.5339V2.37906Z" fill="white" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="ml-[-244px] 800px:ml-[0] 1024px:ml-[-90px] flex gap-[18px] 600px:gap-[10px] 1024px:flex-col relative z-[-2]">
                    <div className="flex 800px:ml-[-50px] 600px:h-[45px] 600px:rounded-[15px] 1440px:h-[60px] items-center bg-[#FFFFFF] shadow-[-3px_9px_21px_0px_#942E2E8A,_-13px_37px_39px_0px_#942E2E78,_-30px_82px_53px_0px_#942E2E47,_-54px_146px_62px_0px_#942E2E14,_-84px_229px_68px_0px_#942E2E03] w-[max-content] rounded-[20px] h-[79px] pr-[32px] 1440px:pr-[15px]  pl-[15px]">
                      <img src="/assets/img/photo.png" className="w-[43px] 600px:w-[23px] 600px:h-[23px] 1440px:w-[33px] 1440px:h-[33px] h-[43px]" />
                      <div className="flex flex-col gap-[4px] 1440px:gap-[1px] ml-[12px] mr-[27px] 1440px:ml-[8px] 1440px:mr-[17px]">
                        <p className="text-[#3C5864] font-monrope font-[700] text-[16px] 600px:text-[10px] 600px:leading-[10px] 1440px:text-[14px] 1440px:leading-[18px] leading-[21px]">Атиф Хуссейн</p>
                        <p className="text-[#B9C3C7] font-monrope font-[700] text-[12px] 600px:text-[8px] 600px:leading-[10px] 1440px:text-[10px] leading-[16px]">Соучредитель  Kinetik</p>
                      </div>
                      <svg width="65" height="15" className="600px:w-[40px]" viewBox="0 0 65 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.898438 6.28418C0.898438 5.18986 1.78556 4.30273 2.87988 4.30273C3.9742 4.30273 4.86133 5.18986 4.86133 6.28418V8.26465C4.86133 9.35897 3.9742 10.2461 2.87988 10.2461C1.78556 10.2461 0.898438 9.35897 0.898438 8.26465V6.28418Z" fill="black" />
                        <path d="M12.8594 2.39063C12.8594 1.2963 13.7465 0.40918 14.8408 0.40918C15.9351 0.40918 16.8223 1.2963 16.8223 2.39062V12.1582C16.8223 13.2525 15.9351 14.1396 14.8408 14.1396C13.7465 14.1396 12.8594 13.2525 12.8594 12.1582V2.39063Z" fill="black" />
                        <path d="M24.8242 6.28418C24.8242 5.18986 25.7113 4.30273 26.8057 4.30273C27.9 4.30273 28.7871 5.18986 28.7871 6.28418V8.26465C28.7871 9.35897 27.9 10.2461 26.8057 10.2461C25.7113 10.2461 24.8242 9.35897 24.8242 8.26465V6.28418Z" fill="black" />
                        <path d="M36.7891 6.28418C36.7891 5.18986 37.6762 4.30273 38.7705 4.30273C39.8648 4.30273 40.752 5.18986 40.752 6.28418V8.26465C40.752 9.35897 39.8648 10.2461 38.7705 10.2461C37.6762 10.2461 36.7891 9.35897 36.7891 8.26465V6.28418Z" fill="black" />
                        <path d="M48.75 4.98828C48.75 3.89396 49.6371 3.00684 50.7314 3.00684C51.8258 3.00684 52.7129 3.89396 52.7129 4.98828V9.56055C52.7129 10.6549 51.8258 11.542 50.7314 11.542C49.6371 11.542 48.75 10.6549 48.75 9.56055V4.98828Z" fill="black" />
                        <path d="M60.7109 6.96777C60.7109 5.87345 61.5981 4.98633 62.6924 4.98633C63.7867 4.98633 64.6738 5.87345 64.6738 6.96777V7.58105C64.6738 8.67538 63.7867 9.5625 62.6924 9.5625C61.5981 9.5625 60.7109 8.67538 60.7109 7.58105V6.96777Z" fill="black" />
                      </svg>
                      <button className="w-[32px] 600px:w-[22px] 600px:h-[22px] h-[32px] bg-[#FF4800] rounded-[50%] flex items-center justify-center ml-[25px] 1440px:ml-[18px]">
                        <svg width="12" height="13" className="600px:w-[35%]" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0.875 2.37904C0.875 1.20401 1.82755 0.251465 3.00258 0.251465C4.17761 0.251465 5.13016 1.20401 5.13016 2.37904V10.5339C5.13016 11.709 4.17761 12.6615 3.00258 12.6615C1.82755 12.6615 0.875 11.709 0.875 10.5339V2.37904Z" fill="white" />
                          <path d="M7.59766 2.37906C7.59766 1.20402 8.55021 0.251465 9.72525 0.251465C10.9003 0.251465 11.8528 1.20402 11.8528 2.37906V10.5339C11.8528 11.7089 10.9003 12.6615 9.72525 12.6615C8.55021 12.6615 7.59766 11.7089 7.59766 10.5339V2.37906Z" fill="white" />
                        </svg>
                      </button>
                    </div>
                    <div className="flex 800px:ml-[-50px] 600px:h-[45px] 600px:rounded-[15px] 1024px:z-[-1] 1440px:h-[60px] items-center bg-[#FFFFFF] shadow-[-3px_9px_21px_0px_#942E2E8A,_-13px_37px_39px_0px_#942E2E78,_-30px_82px_53px_0px_#942E2E47,_-54px_146px_62px_0px_#942E2E14,_-84px_229px_68px_0px_#942E2E03] w-[max-content] rounded-[20px] h-[79px] pr-[32px] 1440px:pr-[15px]  pl-[15px]">
                      <img src="/assets/img/photo.png" className="w-[43px] 600px:w-[23px] 600px:h-[23px] 1440px:w-[33px] 1440px:h-[33px] h-[43px]" />
                      <div className="flex flex-col gap-[4px] 1440px:gap-[1px] ml-[12px] mr-[27px] 1440px:ml-[8px] 1440px:mr-[17px]">
                        <p className="text-[#3C5864] font-monrope font-[700] text-[16px] 600px:text-[10px] 600px:leading-[10px] 1440px:text-[14px] 1440px:leading-[18px] leading-[21px]">Атиф Хуссейн</p>
                        <p className="text-[#B9C3C7] font-monrope font-[700] text-[12px] 600px:text-[8px] 600px:leading-[10px] 1440px:text-[10px] leading-[16px]">Соучредитель  Kinetik</p>
                      </div>
                      <svg width="65" height="15" className="600px:w-[40px]" viewBox="0 0 65 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.898438 6.28418C0.898438 5.18986 1.78556 4.30273 2.87988 4.30273C3.9742 4.30273 4.86133 5.18986 4.86133 6.28418V8.26465C4.86133 9.35897 3.9742 10.2461 2.87988 10.2461C1.78556 10.2461 0.898438 9.35897 0.898438 8.26465V6.28418Z" fill="black" />
                        <path d="M12.8594 2.39063C12.8594 1.2963 13.7465 0.40918 14.8408 0.40918C15.9351 0.40918 16.8223 1.2963 16.8223 2.39062V12.1582C16.8223 13.2525 15.9351 14.1396 14.8408 14.1396C13.7465 14.1396 12.8594 13.2525 12.8594 12.1582V2.39063Z" fill="black" />
                        <path d="M24.8242 6.28418C24.8242 5.18986 25.7113 4.30273 26.8057 4.30273C27.9 4.30273 28.7871 5.18986 28.7871 6.28418V8.26465C28.7871 9.35897 27.9 10.2461 26.8057 10.2461C25.7113 10.2461 24.8242 9.35897 24.8242 8.26465V6.28418Z" fill="black" />
                        <path d="M36.7891 6.28418C36.7891 5.18986 37.6762 4.30273 38.7705 4.30273C39.8648 4.30273 40.752 5.18986 40.752 6.28418V8.26465C40.752 9.35897 39.8648 10.2461 38.7705 10.2461C37.6762 10.2461 36.7891 9.35897 36.7891 8.26465V6.28418Z" fill="black" />
                        <path d="M48.75 4.98828C48.75 3.89396 49.6371 3.00684 50.7314 3.00684C51.8258 3.00684 52.7129 3.89396 52.7129 4.98828V9.56055C52.7129 10.6549 51.8258 11.542 50.7314 11.542C49.6371 11.542 48.75 10.6549 48.75 9.56055V4.98828Z" fill="black" />
                        <path d="M60.7109 6.96777C60.7109 5.87345 61.5981 4.98633 62.6924 4.98633C63.7867 4.98633 64.6738 5.87345 64.6738 6.96777V7.58105C64.6738 8.67538 63.7867 9.5625 62.6924 9.5625C61.5981 9.5625 60.7109 8.67538 60.7109 7.58105V6.96777Z" fill="black" />
                      </svg>
                      <button className="w-[32px] 600px:w-[22px] 600px:h-[22px] h-[32px] bg-[#FF4800] rounded-[50%] flex items-center justify-center ml-[25px] 1440px:ml-[18px]">
                        <svg width="12" height="13" className="600px:w-[35%]" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0.875 2.37904C0.875 1.20401 1.82755 0.251465 3.00258 0.251465C4.17761 0.251465 5.13016 1.20401 5.13016 2.37904V10.5339C5.13016 11.709 4.17761 12.6615 3.00258 12.6615C1.82755 12.6615 0.875 11.709 0.875 10.5339V2.37904Z" fill="white" />
                          <path d="M7.59766 2.37906C7.59766 1.20402 8.55021 0.251465 9.72525 0.251465C10.9003 0.251465 11.8528 1.20402 11.8528 2.37906V10.5339C11.8528 11.7089 10.9003 12.6615 9.72525 12.6615C8.55021 12.6615 7.59766 11.7089 7.59766 10.5339V2.37906Z" fill="white" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[18px] 600px:gap-[10px]">
                    <div className="ml-[-94px] 600px:h-[45px] 600px:rounded-[15px] 800px:ml-[-80px] 1024px:ml-[-40px] flex  1440px:h-[60px] items-center bg-[#FFFFFF] relative z-[-3] shadow-[-3px_9px_21px_0px_#942E2E8A,_-13px_37px_39px_0px_#942E2E78,_-30px_82px_53px_0px_#942E2E47,_-54px_146px_62px_0px_#942E2E14,_-84px_229px_68px_0px_#942E2E03] w-[max-content] rounded-[20px] h-[79px]  1440px:pr-[15px] pr-[32px] pl-[15px]">
                      <img src="/assets/img/photo.png" className="w-[43px] 600px:w-[23px] 600px:h-[23px] 1440px:w-[33px] 1440px:h-[33px] h-[43px]" />
                      <div className="flex flex-col gap-[4px] 1440px:gap-[1px] ml-[12px] mr-[27px] 1440px:ml-[8px] 1440px:mr-[17px]">
                        <p className="text-[#3C5864] font-monrope font-[700] text-[16px] 600px:text-[10px] 600px:leading-[10px] 1440px:text-[14px] 1440px:leading-[18px] leading-[21px]">Атиф Хуссейн</p>
                        <p className="text-[#B9C3C7] font-monrope font-[700] text-[12px] 600px:text-[8px] 600px:leading-[10px] 1440px:text-[10px] leading-[16px]">Соучредитель  Kinetik</p>
                      </div>
                      <svg width="65" height="15" className="600px:w-[40px]" viewBox="0 0 65 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.898438 6.28418C0.898438 5.18986 1.78556 4.30273 2.87988 4.30273C3.9742 4.30273 4.86133 5.18986 4.86133 6.28418V8.26465C4.86133 9.35897 3.9742 10.2461 2.87988 10.2461C1.78556 10.2461 0.898438 9.35897 0.898438 8.26465V6.28418Z" fill="black" />
                        <path d="M12.8594 2.39063C12.8594 1.2963 13.7465 0.40918 14.8408 0.40918C15.9351 0.40918 16.8223 1.2963 16.8223 2.39062V12.1582C16.8223 13.2525 15.9351 14.1396 14.8408 14.1396C13.7465 14.1396 12.8594 13.2525 12.8594 12.1582V2.39063Z" fill="black" />
                        <path d="M24.8242 6.28418C24.8242 5.18986 25.7113 4.30273 26.8057 4.30273C27.9 4.30273 28.7871 5.18986 28.7871 6.28418V8.26465C28.7871 9.35897 27.9 10.2461 26.8057 10.2461C25.7113 10.2461 24.8242 9.35897 24.8242 8.26465V6.28418Z" fill="black" />
                        <path d="M36.7891 6.28418C36.7891 5.18986 37.6762 4.30273 38.7705 4.30273C39.8648 4.30273 40.752 5.18986 40.752 6.28418V8.26465C40.752 9.35897 39.8648 10.2461 38.7705 10.2461C37.6762 10.2461 36.7891 9.35897 36.7891 8.26465V6.28418Z" fill="black" />
                        <path d="M48.75 4.98828C48.75 3.89396 49.6371 3.00684 50.7314 3.00684C51.8258 3.00684 52.7129 3.89396 52.7129 4.98828V9.56055C52.7129 10.6549 51.8258 11.542 50.7314 11.542C49.6371 11.542 48.75 10.6549 48.75 9.56055V4.98828Z" fill="black" />
                        <path d="M60.7109 6.96777C60.7109 5.87345 61.5981 4.98633 62.6924 4.98633C63.7867 4.98633 64.6738 5.87345 64.6738 6.96777V7.58105C64.6738 8.67538 63.7867 9.5625 62.6924 9.5625C61.5981 9.5625 60.7109 8.67538 60.7109 7.58105V6.96777Z" fill="black" />
                      </svg>
                      <button className="w-[32px] 600px:w-[22px] 600px:h-[22px] h-[32px] bg-[#FF4800] rounded-[50%] flex items-center justify-center ml-[25px] 1440px:ml-[18px]">
                        <svg width="12" height="13" className="600px:w-[35%]" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0.875 2.37904C0.875 1.20401 1.82755 0.251465 3.00258 0.251465C4.17761 0.251465 5.13016 1.20401 5.13016 2.37904V10.5339C5.13016 11.709 4.17761 12.6615 3.00258 12.6615C1.82755 12.6615 0.875 11.709 0.875 10.5339V2.37904Z" fill="white" />
                          <path d="M7.59766 2.37906C7.59766 1.20402 8.55021 0.251465 9.72525 0.251465C10.9003 0.251465 11.8528 1.20402 11.8528 2.37906V10.5339C11.8528 11.7089 10.9003 12.6615 9.72525 12.6615C8.55021 12.6615 7.59766 11.7089 7.59766 10.5339V2.37906Z" fill="white" />
                        </svg>
                      </button>
                    </div>
                    <div className="flex 600px:h-[45px] 600px:rounded-[15px] 800px:ml-[-150px] 1440px:h-[60px] items-center bg-[#FFFFFF] relative z-[-4] shadow-[-3px_9px_21px_0px_#942E2E8A,_-13px_37px_39px_0px_#942E2E78,_-30px_82px_53px_0px_#942E2E47,_-54px_146px_62px_0px_#942E2E14,_-84px_229px_68px_0px_#942E2E03] w-[max-content] rounded-[20px] h-[79px] pr-[32px] 1440px:pr-[15px] pl-[15px]">
                      <img src="/assets/img/photo.png" className="w-[43px] 600px:w-[23px] 600px:h-[23px] 1440px:w-[33px] 1440px:h-[33px] h-[43px]" />
                      <div className="flex flex-col gap-[4px] 1440px:gap-[1px] ml-[12px] mr-[27px] 1440px:ml-[8px] 1440px:mr-[17px]">
                        <p className="text-[#3C5864] font-monrope font-[700] text-[16px] 600px:text-[10px] 600px:leading-[10px] 1440px:text-[14px] 1440px:leading-[18px] leading-[21px]">Атиф Хуссейн</p>
                        <p className="text-[#B9C3C7] font-monrope font-[700] text-[12px] 600px:text-[8px] 600px:leading-[10px] 1440px:text-[10px] leading-[16px]">Соучредитель  Kinetik</p>
                      </div>
                      <svg width="65" height="15" className="600px:w-[40px]" viewBox="0 0 65 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.898438 6.28418C0.898438 5.18986 1.78556 4.30273 2.87988 4.30273C3.9742 4.30273 4.86133 5.18986 4.86133 6.28418V8.26465C4.86133 9.35897 3.9742 10.2461 2.87988 10.2461C1.78556 10.2461 0.898438 9.35897 0.898438 8.26465V6.28418Z" fill="black" />
                        <path d="M12.8594 2.39063C12.8594 1.2963 13.7465 0.40918 14.8408 0.40918C15.9351 0.40918 16.8223 1.2963 16.8223 2.39062V12.1582C16.8223 13.2525 15.9351 14.1396 14.8408 14.1396C13.7465 14.1396 12.8594 13.2525 12.8594 12.1582V2.39063Z" fill="black" />
                        <path d="M24.8242 6.28418C24.8242 5.18986 25.7113 4.30273 26.8057 4.30273C27.9 4.30273 28.7871 5.18986 28.7871 6.28418V8.26465C28.7871 9.35897 27.9 10.2461 26.8057 10.2461C25.7113 10.2461 24.8242 9.35897 24.8242 8.26465V6.28418Z" fill="black" />
                        <path d="M36.7891 6.28418C36.7891 5.18986 37.6762 4.30273 38.7705 4.30273C39.8648 4.30273 40.752 5.18986 40.752 6.28418V8.26465C40.752 9.35897 39.8648 10.2461 38.7705 10.2461C37.6762 10.2461 36.7891 9.35897 36.7891 8.26465V6.28418Z" fill="black" />
                        <path d="M48.75 4.98828C48.75 3.89396 49.6371 3.00684 50.7314 3.00684C51.8258 3.00684 52.7129 3.89396 52.7129 4.98828V9.56055C52.7129 10.6549 51.8258 11.542 50.7314 11.542C49.6371 11.542 48.75 10.6549 48.75 9.56055V4.98828Z" fill="black" />
                        <path d="M60.7109 6.96777C60.7109 5.87345 61.5981 4.98633 62.6924 4.98633C63.7867 4.98633 64.6738 5.87345 64.6738 6.96777V7.58105C64.6738 8.67538 63.7867 9.5625 62.6924 9.5625C61.5981 9.5625 60.7109 8.67538 60.7109 7.58105V6.96777Z" fill="black" />
                      </svg>
                      <button className="w-[32px] 600px:w-[22px] 600px:h-[22px] h-[32px] bg-[#FF4800] rounded-[50%] flex items-center justify-center ml-[25px] 1440px:ml-[18px]">
                        <svg width="12" height="13" className="600px:w-[35%]" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0.875 2.37904C0.875 1.20401 1.82755 0.251465 3.00258 0.251465C4.17761 0.251465 5.13016 1.20401 5.13016 2.37904V10.5339C5.13016 11.709 4.17761 12.6615 3.00258 12.6615C1.82755 12.6615 0.875 11.709 0.875 10.5339V2.37904Z" fill="white" />
                          <path d="M7.59766 2.37906C7.59766 1.20402 8.55021 0.251465 9.72525 0.251465C10.9003 0.251465 11.8528 1.20402 11.8528 2.37906V10.5339C11.8528 11.7089 10.9003 12.6615 9.72525 12.6615C8.55021 12.6615 7.59766 11.7089 7.59766 10.5339V2.37906Z" fill="white" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-[230px] 800px:px-[50px] 600px:px-[15px] 800px:translate-y-[-50px] 600px:translate-y-[-100px] 1440px:px-[130px] relative z-[2]">
                <Swiper
                  navigation={{
                    nextEl: ".next-slide-button",
                    prevEl: ".prev-slide-button"
                  }}
                  modules={[Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide className="flex justify-center">
                    <div className="flex items-center flex-col gap-[26px] 1024px:gap-[11px] max-w-[806px] 1024px:max-w-[384px] 1024px:min-w-[384px] 1200px:max-w-[575px] 1200px:min-w-[575px] min-w-[806px] w-[100%] 600px:max-w-[273px] 600px:min-w-[273px]">
                      <img src="/assets/img/profile_girl.png" className="w-[108px] 1200px:w-[90px] 1200px:h-[90px] h-[108px] rounded-[50%] border-[4.13px] 1024px:w-[60px] 1024px:h-[60px] border-solid border-[#E13F3E] shadow-[-6px_11px_28px_0px_#841F1F8A,_-22px_46px_51px_0px_#841F1F78,_-50px_103px_69px_0px_#841F1F47,_-89px_183px_81px_0px_#841F1F14,_-140px_285px_89px_0px_#841F1F03]" />
                      <p className="text-[#FFA1A1] text-center font-monrope font-[800] text-[24px] 1200px:text-[18px] uppercase 1024px:text-[12px] 1024px:leading-[15px] 1200px:leading-[24px] leading-[34px] tracking-[-0.04em] 800px:text-[10px] 600px:text-[8px]">Клиент научился доверять HaloLab, благодаря их значительным знаниям в области UI/UX-дизайна. Поставщик предоставил ценную обратную связь, будучи всегда готовым к общению. Более того, у них есть удовлетворительный процесс управления проектами, который делает их процесс гладким и эффективным.</p>
                      <div className="flex items-center flex-col gap-[10px] 1024px:gap-[0]">
                        <p className="text-[#FFFFFF] font-monrope font-[700] text-[16px] 1024px:text-[12px] leading-[21px] 600px:text-[10px] 600px:leading-[10px]">Атиф Хуссейн</p>
                        <p className="text-[#FFA1A1] font-monrope font-[700] text-[12px] 1024px:text-[10px] leading-[18px] 600px:text-[8px] 600px:leading-[8px]">Соучредитель компании Kinetik</p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="flex justify-center">
                    <div className="flex items-center flex-col gap-[26px] 1024px:gap-[11px] max-w-[806px] 1024px:max-w-[384px] 1024px:min-w-[384px] 1200px:max-w-[575px] 1200px:min-w-[575px] min-w-[806px] w-[100%] 600px:max-w-[273px] 600px:min-w-[273px]">
                      <img src="/assets/img/profile_girl.png" className="w-[108px] 1200px:w-[90px] 1200px:h-[90px] h-[108px] rounded-[50%] border-[4.13px] 1024px:w-[60px] 1024px:h-[60px] border-solid border-[#E13F3E] shadow-[-6px_11px_28px_0px_#841F1F8A,_-22px_46px_51px_0px_#841F1F78,_-50px_103px_69px_0px_#841F1F47,_-89px_183px_81px_0px_#841F1F14,_-140px_285px_89px_0px_#841F1F03]" />
                      <p className="text-[#FFA1A1] text-center font-monrope font-[800] text-[24px] 1200px:text-[18px] uppercase 1024px:text-[12px] 1024px:leading-[15px] 1200px:leading-[24px] leading-[34px] tracking-[-0.04em] 800px:text-[10px] 600px:text-[8px]">Клиент научился доверять HaloLab, благодаря их значительным знаниям в области UI/UX-дизайна. Поставщик предоставил ценную обратную связь, будучи всегда готовым к общению. Более того, у них есть удовлетворительный процесс управления проектами, который делает их процесс гладким и эффективным.</p>
                      <div className="flex items-center flex-col gap-[10px] 1024px:gap-[0]">
                        <p className="text-[#FFFFFF] font-monrope font-[700] text-[16px] 1024px:text-[12px] leading-[21px] 600px:text-[10px] 600px:leading-[10px]">Атиф Хуссейн</p>
                        <p className="text-[#FFA1A1] font-monrope font-[700] text-[12px] 1024px:text-[10px] leading-[18px] 600px:text-[8px] 600px:leading-[8px]">Соучредитель компании Kinetik</p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="flex justify-center">
                    <div className="flex items-center flex-col gap-[26px] 1024px:gap-[11px] max-w-[806px] 1024px:max-w-[384px] 1024px:min-w-[384px] 1200px:max-w-[575px] 1200px:min-w-[575px] min-w-[806px] w-[100%] 600px:max-w-[273px] 600px:min-w-[273px]">
                      <img src="/assets/img/profile_girl.png" className="w-[108px] 1200px:w-[90px] 1200px:h-[90px] h-[108px] rounded-[50%] border-[4.13px] 1024px:w-[60px] 1024px:h-[60px] border-solid border-[#E13F3E] shadow-[-6px_11px_28px_0px_#841F1F8A,_-22px_46px_51px_0px_#841F1F78,_-50px_103px_69px_0px_#841F1F47,_-89px_183px_81px_0px_#841F1F14,_-140px_285px_89px_0px_#841F1F03]" />
                      <p className="text-[#FFA1A1] text-center font-monrope font-[800] text-[24px] 1200px:text-[18px] uppercase 1024px:text-[12px] 1024px:leading-[15px] 1200px:leading-[24px] leading-[34px] tracking-[-0.04em] 800px:text-[10px] 600px:text-[8px]">Клиент научился доверять HaloLab, благодаря их значительным знаниям в области UI/UX-дизайна. Поставщик предоставил ценную обратную связь, будучи всегда готовым к общению. Более того, у них есть удовлетворительный процесс управления проектами, который делает их процесс гладким и эффективным.</p>
                      <div className="flex items-center flex-col gap-[10px] 1024px:gap-[0]">
                        <p className="text-[#FFFFFF] font-monrope font-[700] text-[16px] 1024px:text-[12px] leading-[21px] 600px:text-[10px] 600px:leading-[10px]">Атиф Хуссейн</p>
                        <p className="text-[#FFA1A1] font-monrope font-[700] text-[12px] 1024px:text-[10px] leading-[18px] 600px:text-[8px] 600px:leading-[8px]">Соучредитель компании Kinetik</p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="flex justify-center">
                    <div className="flex items-center flex-col gap-[26px] 1024px:gap-[11px] max-w-[806px] 1024px:max-w-[384px] 1024px:min-w-[384px] 1200px:max-w-[575px] 1200px:min-w-[575px] min-w-[806px] w-[100%] 600px:max-w-[273px] 600px:min-w-[273px]">
                      <img src="/assets/img/profile_girl.png" className="w-[108px] 1200px:w-[90px] 1200px:h-[90px] h-[108px] rounded-[50%] border-[4.13px] 1024px:w-[60px] 1024px:h-[60px] border-solid border-[#E13F3E] shadow-[-6px_11px_28px_0px_#841F1F8A,_-22px_46px_51px_0px_#841F1F78,_-50px_103px_69px_0px_#841F1F47,_-89px_183px_81px_0px_#841F1F14,_-140px_285px_89px_0px_#841F1F03]" />
                      <p className="text-[#FFA1A1] text-center font-monrope font-[800] text-[24px] 1200px:text-[18px] uppercase 1024px:text-[12px] 1024px:leading-[15px] 1200px:leading-[24px] leading-[34px] tracking-[-0.04em] 800px:text-[10px] 600px:text-[8px]">Клиент научился доверять HaloLab, благодаря их значительным знаниям в области UI/UX-дизайна. Поставщик предоставил ценную обратную связь, будучи всегда готовым к общению. Более того, у них есть удовлетворительный процесс управления проектами, который делает их процесс гладким и эффективным.</p>
                      <div className="flex items-center flex-col gap-[10px] 1024px:gap-[0]">
                        <p className="text-[#FFFFFF] font-monrope font-[700] text-[16px] 1024px:text-[12px] leading-[21px] 600px:text-[10px] 600px:leading-[10px]">Атиф Хуссейн</p>
                        <p className="text-[#FFA1A1] font-monrope font-[700] text-[12px] 1024px:text-[10px] leading-[18px] 600px:text-[8px] 600px:leading-[8px]">Соучредитель компании Kinetik</p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <button className="prev-slide-button z-[1] disabled:opacity-[50%] w-[57px] 1024px:w-[40px] 1024px:h-[40px] 1024px:rounded-[15px] h-[55px] border border-solid border-[#FFFFFF33] rounded-[20px] flex items-center justify-center absolute top-[50%] translate-y-[-50%] left-0">
                    <svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.5797 1.10645L1.91797 10.7681L11.5797 20.4299" stroke="white" stroke-width="2" stroke-linejoin="round" />
                    </svg>
                  </button>
                  <button className="next-slide-button z-[1] disabled:opacity-[50%] w-[57px] 1024px:w-[40px] 1024px:h-[40px] 1024px:rounded-[15px] h-[55px] border border-solid border-[#FFFFFF33] rounded-[20px] flex items-center justify-center absolute top-[50%] translate-y-[-50%] right-0">
                    <svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.3383 1.10645L11 10.7681L1.3383 20.4299" stroke="white" stroke-width="2" stroke-linejoin="round" />
                    </svg>
                  </button>
                </Swiper>
              </div>
              <svg width="100%" height="891" className="absolute bottom-[-300px] z-[1] left-0" viewBox="0 0 1920 891" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_748_4695)">
                  <path d="M105.664 138.8C89.1006 134.395 64.8435 159.334 39.6118 186.018C-18.697 247.683 -47.8513 278.516 -51.5498 283.562C-55.2483 288.609 -61.6367 300.097 -74.4133 323.074L-258.058 653.333C-270.487 675.685 -260.699 700.015 -235.782 705.779C-206.736 712.499 -176.94 718.008 -144.317 722.312C-103.951 727.639 -56.0396 721.349 -18.0007 727.479C31.3186 735.427 134.593 606.667 164 621.62C216.314 648.222 439.547 635.432 500.277 659.926C616.667 706.87 775.339 648.719 944 659.926C1124.87 671.945 1313.79 767.402 1493.72 750.455C1611.59 739.353 1722.55 718.47 1821.32 693.197C1857.77 683.87 2058.82 752.519 2087.22 739.736C2125.11 722.678 2152.61 700.903 2173.24 680.532C2208.26 645.947 2222.62 512.119 2216.93 475.953C2214.58 460.983 2210.38 445.21 2173.24 435.896C2145.36 428.905 2118.61 278.132 2087.22 273.62C2000.99 261.228 1735.03 259.587 1657.77 240.089C1634.85 234.303 1613.36 228.248 1592.15 221.671C1573.17 215.786 1545.36 205.169 1516.67 207.326C1499.52 208.614 1481.65 214.212 1465.15 216.322C1438.28 219.758 1394.43 206.564 1365.13 207.326C1296.73 209.104 1218.17 237.76 1151.33 232.065C1113.25 228.821 1093.11 222.326 1077.72 209.939C1062.49 197.688 1049.04 298.063 1021.33 288.695C969.052 271.024 888.062 248.654 810.689 253.318C789.039 254.623 780.186 257.748 760.877 261.099C730.541 266.363 713.604 268.576 679.273 271.736C595.522 279.444 512.669 278.911 428 273.62C385.086 270.939 348.861 267.754 322.595 254.291C297.091 241.219 283.016 225.617 263.432 211.438C247.059 199.584 234.221 191.76 213.279 180.681C182.917 164.617 149.233 150.39 105.664 138.8Z" fill="#E23E3D" />
                </g>
                <defs>
                  <filter id="filter0_f_748_4695" x="-401.339" y="0.391998" width="2757.38" height="889.973" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="68" result="effect1_foregroundBlur_748_4695" />
                  </filter>
                </defs>
              </svg>
              <svg width="100%" height="1300" className="absolute z-[-2] bottom-[-620px] left-0 600px:bottom-[-576px]" viewBox="0 0 1920 1300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_748_4696)">
                  <path d="M2074.41 979.494L2193.34 957.806C2300.86 938.202 2354.62 928.4 2377.76 888.354C2400.9 848.308 2382.55 796.837 2345.86 693.895L2253.1 433.69C2230.21 369.495 2218.77 337.397 2192.86 319.121C2166.94 300.846 2132.86 300.846 2064.71 300.846H-274.825C-394.891 300.846 -454.924 300.846 -484.942 340.08C-514.961 379.314 -499.263 437.258 -467.865 553.146L-366.015 929.074L-366.015 929.075C-363.217 939.403 -361.817 944.568 -360.584 948.069C-337.036 1014.89 -253.381 1036.71 -200.197 989.898C-197.41 987.446 -193.667 983.622 -186.18 975.975C-185.598 975.38 -185.306 975.083 -184.85 974.629C-177.259 967.072 -166.958 959.815 -157.287 955.211C-156.707 954.935 -156.562 954.868 -156.273 954.735L-156.272 954.735C-111.344 934.051 10.9692 880.448 56.9301 887.732C204.773 911.164 230.558 829.108 373.629 826.184L795 866.268L1182.61 911.679C1199.26 913.629 1207.58 914.604 1215.59 916.933C1223.6 919.262 1231.14 922.902 1246.24 930.183L1370.11 989.937C1392.93 1000.95 1404.35 1006.45 1416.63 1008.94C1428.92 1011.43 1441.58 1010.81 1466.89 1009.56L2074.41 979.494Z" fill="#F0632C" />
                </g>
                <defs>
                  <filter id="filter0_f_748_4696" x="-801.01" y="0.845703" width="3489.02" height="1314.03" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_748_4696" />
                  </filter>
                </defs>
              </svg>
            </div>
            <div className="w-[100%] h-[100%] absolute top-0 1440px:top-[-500px] 1200px:top-[-707px] 800px:top-[-828px] left-0 z-[-1]">
              <svg width="100%" height="2460" viewBox="0 0 1920 2460" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_737_3626)">
                  <path
                    d="M1739.01 535.534C1769.37 490.605 1803.05 450.814 1846.62 418.398C1919.16 364.433 1987.95 438.509 2005.58 527.181L2217.51 1593.17C2224.52 1628.44 2213.76 1661.69 2183.58 1681.22C2154.53 1700.02 2124.74 1715.43 2092.11 1727.46C2051.75 1742.36 2003.84 1724.77 1965.8 1741.92C1916.48 1764.14 1876.03 1827.43 1846.62 1869.25C1794.31 1943.65 1511.57 1736.82 1450.84 1805.33C1334.45 1936.63 1175.78 1997.2 1007.12 2028.55C826.246 2062.17 634.008 2076.8 454.081 2029.4C336.209 1998.35 225.243 1939.94 126.474 1869.25C90.0271 1843.17 -111.026 1811.95 -139.419 1776.2C-177.31 1728.49 -204.815 1667.58 -225.444 1610.61C-260.08 1514.95 -254.214 1410.63 -248.584 1310.5L-248.395 1307.14C-246.043 1265.27 -241.839 1221.16 -204.703 1195.11C-176.826 1175.55 -141.915 1161.49 -110.518 1148.87C-24.2876 1114.2 241.666 1109.62 318.924 1055.08C341.848 1038.9 363.337 1021.96 384.547 1003.57C403.525 987.109 431.334 957.414 460.031 963.446C477.177 967.05 495.043 982.707 511.544 988.607C538.419 998.217 556.364 1001.61 585.667 1003.74C654.071 1008.71 728.96 1004.2 795.798 988.267C833.875 979.193 854.015 961.027 869.412 926.384C884.641 892.118 903.24 863.842 930.955 837.64C983.233 788.216 1064.22 725.649 1141.6 738.695C1163.25 742.345 1172.1 751.083 1191.41 760.456C1221.74 775.18 1238.68 781.37 1273.01 790.207C1356.76 811.767 1439.62 810.276 1524.28 795.478C1567.2 787.977 1603.42 779.07 1629.69 741.415C1655.19 704.853 1669.27 661.218 1688.85 621.559C1705.23 588.404 1718.06 566.523 1739.01 535.534Z"
                    fill="#E23E3D" />
                </g>
                <defs>
                  <filter id="filter0_f_737_3626" x="-652.869" y="0.09375" width="3272.44" height="2459.53"
                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="200" result="effect1_foregroundBlur_737_3626" />
                  </filter>
                </defs>
              </svg>
            </div>
          </section>

          <section className="mt-[250px] 1440px:mt-[150px] 800px:mt-[80px] 600px:mt-[10px]">
            <div className="relative max-w-[1600px] 1600px:max-w-[1440px] 1600px:min-w-[1440px] min-w-[1600px] w-[100%] 1200px:max-w-[1024px] 600px:max-w-[100%] 600px:min-w-[100%] 800px:max-w-[100%] 800px:min-w-[100%]">
              <div className="flex mx-auto max-w-[540px] 1440px:max-w-[384px] w-[100%] gap-[10px] 1600px:translate-x-[14%] 1440px:translate-x-[-42%] 1200px:translate-x-[-84%] 1200px:max-w-[292px] 1024px:max-w-[182px] 1024px:translate-x-[-183%] 800px:translate-x-[43%] 600px:translate-x-0">
                <div className="flex flex-col gap-[19px] 1200px:gap-[10px] 1024px:gap-[5px]">
                  <svg width="34" height="22" className="1200px:w-[24px] 1024px:w-[16px]" viewBox="0 0 34 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.157 0.512999C14.0967 0.479436 14.0666 0.462654 14.0339 0.450815C14.0049 0.440301 13.9744 0.432705 13.9428 0.428131C13.9073 0.422979 13.8701 0.422979 13.7956 0.422979H12.1402C11.9574 0.422979 11.866 0.422979 11.7802 0.450156C11.7044 0.474191 11.6321 0.513434 11.5685 0.565101C11.4965 0.623521 11.4405 0.703552 11.3285 0.863615L6.01561 8.45297C5.92193 8.58679 5.87509 8.6537 5.84852 8.7241C5.825 8.78645 5.81316 8.85055 5.81364 8.91306C5.81417 8.98364 5.83622 9.05101 5.88031 9.18574L6.28807 10.4317C6.41526 10.8204 6.47886 11.0147 6.42684 11.1726C6.38141 11.3105 6.28186 11.4339 6.15157 11.5137C6.00236 11.6051 5.78193 11.6051 5.34107 11.6051H4.31221C4.12941 11.6051 4.038 11.6051 3.95226 11.6323C3.87643 11.6564 3.80414 11.6956 3.74052 11.7473C3.66858 11.8057 3.61256 11.8857 3.50051 12.0458L0.860876 15.8165C0.587069 16.2076 0.450166 16.4032 0.444447 16.5624C0.439455 16.7014 0.49461 16.8262 0.596797 16.9071C0.713846 16.9997 0.937198 16.9997 1.3839 16.9997H4.48015C4.65668 16.9997 4.74495 16.9997 4.82823 16.9741C4.90191 16.9514 4.97243 16.9144 5.03508 16.8654C5.1059 16.8101 5.16229 16.7342 5.27508 16.5823L7.01109 14.2442C7.12388 14.0922 7.18028 14.0163 7.25109 13.961C7.31374 13.9121 7.38426 13.875 7.45794 13.8524C7.54122 13.8268 7.62949 13.8268 7.80603 13.8268H12.0866C12.3631 13.8268 12.5013 13.8268 12.5996 13.8788C12.6861 13.9246 12.7511 13.998 12.786 14.0889C12.8256 14.1921 12.808 14.3281 12.7729 14.5999L12.5627 16.2265C12.5275 16.4984 12.51 16.6343 12.5495 16.7376C12.5844 16.8285 12.6494 16.9018 12.736 16.9476C12.8343 16.9997 12.9725 16.9997 13.2489 16.9997H29.6675C29.9561 16.9997 30.1004 16.9997 30.2205 16.9443C30.3262 16.8957 30.4188 16.8181 30.4852 16.7226C30.5607 16.614 30.5859 16.4719 30.6364 16.1877L30.9933 14.1807C31.0438 13.8965 31.069 13.7544 31.0322 13.6458C30.9997 13.5504 30.9347 13.4727 30.8463 13.4241C30.7459 13.3688 30.6016 13.3688 30.3129 13.3688H24.8505C24.3199 13.3688 24.0547 13.3688 23.9339 13.2609C23.8288 13.1671 23.7816 13.0243 23.8054 12.8721C23.8328 12.6971 24.029 12.4881 24.4214 12.07L32.8289 3.11401C32.9043 3.03371 32.942 2.99356 32.9715 2.94935C32.9977 2.91013 33.0192 2.86862 33.0353 2.82587C33.0534 2.77768 33.0623 2.72751 33.0801 2.62718L33.3315 1.21328C33.382 0.929084 33.4073 0.786986 33.3704 0.678438C33.338 0.582956 33.2729 0.505326 33.1846 0.456676C33.0842 0.401367 32.9398 0.401367 32.6512 0.401367H20.5371C20.2484 0.401367 20.1041 0.401367 19.984 0.456676C19.8784 0.505326 19.7857 0.582956 19.7193 0.678438C19.6439 0.786986 19.6186 0.929085 19.5681 1.21328L19.2113 3.22033C19.1607 3.50453 19.1355 3.64662 19.1724 3.75517C19.2048 3.85065 19.2698 3.92828 19.3582 3.97693C19.4586 4.03224 19.6029 4.03224 19.8916 4.03224H25.354C25.8846 4.03224 26.1499 4.03224 26.2706 4.1401C26.3757 4.23397 26.4229 4.37672 26.3991 4.52896C26.3718 4.70391 26.1755 4.91294 25.7831 5.33098L18.946 12.6142C18.4855 13.1047 18.2553 13.35 18.0627 13.3911C17.8956 13.4267 17.7347 13.3846 17.6298 13.2776C17.5089 13.1544 17.5178 12.8511 17.5358 12.2446L17.8097 2.96767C17.8142 2.81627 17.8164 2.74056 17.7974 2.67435C17.7805 2.61572 17.7515 2.56276 17.7119 2.51829C17.6672 2.46808 17.6044 2.43307 17.4786 2.36304L14.157 0.512999ZM13.9338 4.98804C13.9793 4.98804 14.0106 5.02325 14.0048 5.06804L13.4179 9.60897C13.3796 9.90533 13.3604 10.0535 13.2861 10.1673C13.2207 10.2674 13.1267 10.3494 13.0183 10.401C12.895 10.4596 12.7443 10.4596 12.443 10.4596H11.223C10.7618 10.4596 10.5312 10.4596 10.4133 10.3642C10.3105 10.2809 10.2567 10.1527 10.2651 10.0109C10.2748 9.84853 10.4221 9.65008 10.7168 9.25319L13.8515 5.03123C13.8713 5.00457 13.9028 4.98804 13.9338 4.98804Z" fill="#F1632B" />
                    <path d="M0 17.174L18.4156 21.1119C18.6776 21.1679 18.8614 20.7857 18.6206 20.6857C18.3832 20.5872 18.5584 20.2106 18.8195 20.2584L26.3912 21.6421C26.4175 21.6469 26.4306 21.6493 26.444 21.651C26.4558 21.6525 26.4678 21.6536 26.4799 21.6542C26.4935 21.6549 26.5073 21.6549 26.5349 21.6549H28.8903C29.2497 21.6549 29.4294 21.6549 29.4951 21.6391C29.9335 21.5334 30.137 20.9961 29.8354 20.7409C29.7902 20.7027 29.636 20.6353 29.3277 20.5004L26.56 19.2899C26.4186 19.2281 26.2632 19.4276 26.3734 19.5294C26.4711 19.6195 26.3583 19.7997 26.218 19.7778L13.6734 17.8233C13.321 17.7684 13.0414 18.2246 13.2925 18.4448C13.5425 18.6641 13.2664 19.1184 12.9145 19.0669L0 17.174Z" fill="#F1632B" />
                  </svg>
                  <p className="font-[200] font-monrope uppercase text-[56px] 1440px:text-[40px] 1440px:leading-[45px] leading-[58px] 1200px:text-[28px] 1200px:leading-[30px] tracking-[-0.04em] 1024px:text-[18px] 1024px:leading-[20px]"><span className="text-[#F1632B]">Навыки</span>, гарантирующие <span className="font-[800] text-[#2A2A3C]">успех на рынке</span></p>
                </div>
                <p className="vertical_text rotate-[180deg] font-monrope font-[400] text-[6px]">A-Z <br /> CREATIVE STUDIO</p>
              </div>
              <div className="flex justify-start gap-[32px] 1024px:gap-[20px] 800px:flex-col 800px:gap-[0]">
                <img src="/assets/img/frame.png" className="max-w-[800px] min-w-[800px] 1440px:max-w-[550px] 1440px:min-w-[550px] 1440px:h-[723px] w-[100%] h-[1056px] object-cover 1200px:max-w-[462px] 1200px:min-w-[462px] 1200px:h-[605px] 1024px:max-w-[391px] 1024px:min-w-[391px] 1024px:h-[522px] 600px:h-[387px] 600px:max-w-[294px] 600px:min-w-[294px]" />
                <div className="mt-[43px] 800px:flex 800px:flex-col 800px:items-center 600px:mt-[22px]">
                  <p className="text-[#2A2A3C] font-monrope font-[200] text-[20px] leading-[32px] max-w-[424px] w-[100%] mb-[40px] 1440px:text-[16px] 1440px:leading-[21px] 1440px:max-w-[333px] 1200px:text-[12px] 1200px:leading-[13px] 1200px:max-w-[238px] 1200px:mb-[20px] 800px:text-center">Мы проведём анализ вашего бизнеса и исследования для создания и поддержания эффективного продукта. При необходимости обновим существующую айдентику или разработаем брендинг с нуля.</p>
                  <div className="flex flex-wrap gap-[5px] max-w-[713px] 1440px:max-w-[552px] w-[100%] 1200px:max-w-[319px] 800px:justify-center">
                    <button className="border border-solid border-[#DEDEE2] rounded-[20px] h-[50px] px-[24px] 1200px:h-[36px] 1200px:px-[10px] text-[#2A2A3C] font-monrope font-[400] text-[16px] leading-[21px] 1200px:text-[12px] flex items-center gap-[10px] 1440px:h-[46px] 1440px:px-[15px] 1024px:text-[10px] 1024px:gap-[5px]">
                      <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="1200px:w-[16px] 1024px:w-[14px]">
                        <path d="M11.4982 0.97168L12.9887 3.9198C13.6244 5.1771 14.0872 6.51441 14.3646 7.89547L14.4291 8.21677L22.0211 8.63061L20.2814 10.2401C19.4744 10.9867 18.5909 11.6464 17.6456 12.208L16.114 13.118L18.0023 21.0161L16.1886 20.0636C15.2323 19.5613 14.3306 18.9616 13.4979 18.2739L11.4982 16.6225L4.9972 21.0161L5.32454 18.4529C5.47986 17.2369 5.77769 16.0432 6.2119 14.8967L6.88555 13.118L0.978516 8.63061L2.79468 8.29768C4.10916 8.05676 5.44908 7.98489 6.78181 8.08389L8.57047 8.21677L9.66004 6.19604C10.2339 5.13173 10.6823 4.00461 10.9963 2.83718L11.4982 0.97168Z" stroke="#D9D9D9" stroke-width="1.85414" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      Брендинг
                    </button>
                    <button className="border border-solid border-[#DEDEE2] rounded-[20px] h-[50px] px-[24px] 1200px:h-[36px] 1200px:px-[10px] text-[#2A2A3C] font-monrope font-[400] text-[16px] leading-[21px] 1200px:text-[12px] flex items-center gap-[10px] 1440px:h-[46px] 1440px:px-[15px] 1024px:text-[10px] 1024px:gap-[5px]">
                      <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="1200px:w-[16px] 1024px:w-[14px]">
                        <path d="M11.4982 0.97168L12.9887 3.9198C13.6244 5.1771 14.0872 6.51441 14.3646 7.89547L14.4291 8.21677L22.0211 8.63061L20.2814 10.2401C19.4744 10.9867 18.5909 11.6464 17.6456 12.208L16.114 13.118L18.0023 21.0161L16.1886 20.0636C15.2323 19.5613 14.3306 18.9616 13.4979 18.2739L11.4982 16.6225L4.9972 21.0161L5.32454 18.4529C5.47986 17.2369 5.77769 16.0432 6.2119 14.8967L6.88555 13.118L0.978516 8.63061L2.79468 8.29768C4.10916 8.05676 5.44908 7.98489 6.78181 8.08389L8.57047 8.21677L9.66004 6.19604C10.2339 5.13173 10.6823 4.00461 10.9963 2.83718L11.4982 0.97168Z" stroke="#D9D9D9" stroke-width="1.85414" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      Брендинг
                    </button>
                    <button className="border border-solid border-[#DEDEE2] rounded-[20px] h-[50px] px-[24px] 1200px:h-[36px] 1200px:px-[10px] text-[#2A2A3C] font-monrope font-[400] text-[16px] leading-[21px] 1200px:text-[12px] flex items-center gap-[10px] 1440px:h-[46px] 1440px:px-[15px] 1024px:text-[10px] 1024px:gap-[5px]">
                      <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="1200px:w-[16px] 1024px:w-[14px]">
                        <path d="M11.4982 0.97168L12.9887 3.9198C13.6244 5.1771 14.0872 6.51441 14.3646 7.89547L14.4291 8.21677L22.0211 8.63061L20.2814 10.2401C19.4744 10.9867 18.5909 11.6464 17.6456 12.208L16.114 13.118L18.0023 21.0161L16.1886 20.0636C15.2323 19.5613 14.3306 18.9616 13.4979 18.2739L11.4982 16.6225L4.9972 21.0161L5.32454 18.4529C5.47986 17.2369 5.77769 16.0432 6.2119 14.8967L6.88555 13.118L0.978516 8.63061L2.79468 8.29768C4.10916 8.05676 5.44908 7.98489 6.78181 8.08389L8.57047 8.21677L9.66004 6.19604C10.2339 5.13173 10.6823 4.00461 10.9963 2.83718L11.4982 0.97168Z" stroke="#D9D9D9" stroke-width="1.85414" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      Брендинг
                    </button>
                    <button className="border border-solid border-[#DEDEE2] rounded-[20px] h-[50px] px-[24px] 1200px:h-[36px] 1200px:px-[10px] text-[#2A2A3C] font-monrope font-[400] text-[16px] leading-[21px] 1200px:text-[12px] flex items-center gap-[10px] 1440px:h-[46px] 1440px:px-[15px] 1024px:text-[10px] 1024px:gap-[5px]">
                      <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="1200px:w-[16px] 1024px:w-[14px]">
                        <path d="M11.4982 0.97168L12.9887 3.9198C13.6244 5.1771 14.0872 6.51441 14.3646 7.89547L14.4291 8.21677L22.0211 8.63061L20.2814 10.2401C19.4744 10.9867 18.5909 11.6464 17.6456 12.208L16.114 13.118L18.0023 21.0161L16.1886 20.0636C15.2323 19.5613 14.3306 18.9616 13.4979 18.2739L11.4982 16.6225L4.9972 21.0161L5.32454 18.4529C5.47986 17.2369 5.77769 16.0432 6.2119 14.8967L6.88555 13.118L0.978516 8.63061L2.79468 8.29768C4.10916 8.05676 5.44908 7.98489 6.78181 8.08389L8.57047 8.21677L9.66004 6.19604C10.2339 5.13173 10.6823 4.00461 10.9963 2.83718L11.4982 0.97168Z" stroke="#D9D9D9" stroke-width="1.85414" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      Брендинг
                    </button>
                    <button className="border border-solid border-[#DEDEE2] rounded-[20px] h-[50px] px-[24px] 1200px:h-[36px] 1200px:px-[10px] text-[#2A2A3C] font-monrope font-[400] text-[16px] leading-[21px] 1200px:text-[12px] flex items-center gap-[10px] 1440px:h-[46px] 1440px:px-[15px] 1024px:text-[10px] 1024px:gap-[5px]">
                      <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="1200px:w-[16px] 1024px:w-[14px]">
                        <path d="M11.4982 0.97168L12.9887 3.9198C13.6244 5.1771 14.0872 6.51441 14.3646 7.89547L14.4291 8.21677L22.0211 8.63061L20.2814 10.2401C19.4744 10.9867 18.5909 11.6464 17.6456 12.208L16.114 13.118L18.0023 21.0161L16.1886 20.0636C15.2323 19.5613 14.3306 18.9616 13.4979 18.2739L11.4982 16.6225L4.9972 21.0161L5.32454 18.4529C5.47986 17.2369 5.77769 16.0432 6.2119 14.8967L6.88555 13.118L0.978516 8.63061L2.79468 8.29768C4.10916 8.05676 5.44908 7.98489 6.78181 8.08389L8.57047 8.21677L9.66004 6.19604C10.2339 5.13173 10.6823 4.00461 10.9963 2.83718L11.4982 0.97168Z" stroke="#D9D9D9" stroke-width="1.85414" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      Брендинг
                    </button>
                    <button className="border border-solid border-[#DEDEE2] rounded-[20px] h-[50px] px-[24px] 1200px:h-[36px] 1200px:px-[10px] text-[#2A2A3C] font-monrope font-[400] text-[16px] leading-[21px] 1200px:text-[12px] flex items-center gap-[10px] 1440px:h-[46px] 1440px:px-[15px] 1024px:text-[10px] 1024px:gap-[5px]">
                      <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="1200px:w-[16px] 1024px:w-[14px]">
                        <path d="M11.4982 0.97168L12.9887 3.9198C13.6244 5.1771 14.0872 6.51441 14.3646 7.89547L14.4291 8.21677L22.0211 8.63061L20.2814 10.2401C19.4744 10.9867 18.5909 11.6464 17.6456 12.208L16.114 13.118L18.0023 21.0161L16.1886 20.0636C15.2323 19.5613 14.3306 18.9616 13.4979 18.2739L11.4982 16.6225L4.9972 21.0161L5.32454 18.4529C5.47986 17.2369 5.77769 16.0432 6.2119 14.8967L6.88555 13.118L0.978516 8.63061L2.79468 8.29768C4.10916 8.05676 5.44908 7.98489 6.78181 8.08389L8.57047 8.21677L9.66004 6.19604C10.2339 5.13173 10.6823 4.00461 10.9963 2.83718L11.4982 0.97168Z" stroke="#D9D9D9" stroke-width="1.85414" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      Брендинг
                    </button>
                    <button className="border border-solid border-[#DEDEE2] rounded-[20px] h-[50px] px-[24px] 1200px:h-[36px] 1200px:px-[10px] text-[#2A2A3C] font-monrope font-[400] text-[16px] leading-[21px] 1200px:text-[12px] flex items-center gap-[10px] 1440px:h-[46px] 1440px:px-[15px] 1024px:text-[10px] 1024px:gap-[5px]">
                      <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="1200px:w-[16px] 1024px:w-[14px]">
                        <path d="M11.4982 0.97168L12.9887 3.9198C13.6244 5.1771 14.0872 6.51441 14.3646 7.89547L14.4291 8.21677L22.0211 8.63061L20.2814 10.2401C19.4744 10.9867 18.5909 11.6464 17.6456 12.208L16.114 13.118L18.0023 21.0161L16.1886 20.0636C15.2323 19.5613 14.3306 18.9616 13.4979 18.2739L11.4982 16.6225L4.9972 21.0161L5.32454 18.4529C5.47986 17.2369 5.77769 16.0432 6.2119 14.8967L6.88555 13.118L0.978516 8.63061L2.79468 8.29768C4.10916 8.05676 5.44908 7.98489 6.78181 8.08389L8.57047 8.21677L9.66004 6.19604C10.2339 5.13173 10.6823 4.00461 10.9963 2.83718L11.4982 0.97168Z" stroke="#D9D9D9" stroke-width="1.85414" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      Брендинг
                    </button>
                    <button className="border border-solid border-[#DEDEE2] rounded-[20px] h-[50px] px-[24px] 1200px:h-[36px] 1200px:px-[10px] text-[#2A2A3C] font-monrope font-[400] text-[16px] leading-[21px] 1200px:text-[12px] flex items-center gap-[10px] 1440px:h-[46px] 1440px:px-[15px] 1024px:text-[10px] 1024px:gap-[5px]">
                      <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="1200px:w-[16px] 1024px:w-[14px]">
                        <path d="M11.4982 0.97168L12.9887 3.9198C13.6244 5.1771 14.0872 6.51441 14.3646 7.89547L14.4291 8.21677L22.0211 8.63061L20.2814 10.2401C19.4744 10.9867 18.5909 11.6464 17.6456 12.208L16.114 13.118L18.0023 21.0161L16.1886 20.0636C15.2323 19.5613 14.3306 18.9616 13.4979 18.2739L11.4982 16.6225L4.9972 21.0161L5.32454 18.4529C5.47986 17.2369 5.77769 16.0432 6.2119 14.8967L6.88555 13.118L0.978516 8.63061L2.79468 8.29768C4.10916 8.05676 5.44908 7.98489 6.78181 8.08389L8.57047 8.21677L9.66004 6.19604C10.2339 5.13173 10.6823 4.00461 10.9963 2.83718L11.4982 0.97168Z" stroke="#D9D9D9" stroke-width="1.85414" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      Брендинг
                    </button>
                    <button className="border border-solid border-[#DEDEE2] rounded-[20px] h-[50px] px-[24px] 1200px:h-[36px] 1200px:px-[10px] text-[#2A2A3C] font-monrope font-[400] text-[16px] leading-[21px] 1200px:text-[12px] flex items-center gap-[10px] 1440px:h-[46px] 1440px:px-[15px] 1024px:text-[10px] 1024px:gap-[5px]">
                      <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="1200px:w-[16px] 1024px:w-[14px]">
                        <path d="M11.4982 0.97168L12.9887 3.9198C13.6244 5.1771 14.0872 6.51441 14.3646 7.89547L14.4291 8.21677L22.0211 8.63061L20.2814 10.2401C19.4744 10.9867 18.5909 11.6464 17.6456 12.208L16.114 13.118L18.0023 21.0161L16.1886 20.0636C15.2323 19.5613 14.3306 18.9616 13.4979 18.2739L11.4982 16.6225L4.9972 21.0161L5.32454 18.4529C5.47986 17.2369 5.77769 16.0432 6.2119 14.8967L6.88555 13.118L0.978516 8.63061L2.79468 8.29768C4.10916 8.05676 5.44908 7.98489 6.78181 8.08389L8.57047 8.21677L9.66004 6.19604C10.2339 5.13173 10.6823 4.00461 10.9963 2.83718L11.4982 0.97168Z" stroke="#D9D9D9" stroke-width="1.85414" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      Брендинг
                    </button>
                    <button className="border border-solid border-[#DEDEE2] rounded-[20px] h-[50px] px-[24px] 1200px:h-[36px] 1200px:px-[10px] text-[#2A2A3C] font-monrope font-[400] text-[16px] leading-[21px] 1200px:text-[12px] flex items-center gap-[10px] 1440px:h-[46px] 1440px:px-[15px] 1024px:text-[10px] 1024px:gap-[5px]">
                      <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="1200px:w-[16px] 1024px:w-[14px]">
                        <path d="M11.4982 0.97168L12.9887 3.9198C13.6244 5.1771 14.0872 6.51441 14.3646 7.89547L14.4291 8.21677L22.0211 8.63061L20.2814 10.2401C19.4744 10.9867 18.5909 11.6464 17.6456 12.208L16.114 13.118L18.0023 21.0161L16.1886 20.0636C15.2323 19.5613 14.3306 18.9616 13.4979 18.2739L11.4982 16.6225L4.9972 21.0161L5.32454 18.4529C5.47986 17.2369 5.77769 16.0432 6.2119 14.8967L6.88555 13.118L0.978516 8.63061L2.79468 8.29768C4.10916 8.05676 5.44908 7.98489 6.78181 8.08389L8.57047 8.21677L9.66004 6.19604C10.2339 5.13173 10.6823 4.00461 10.9963 2.83718L11.4982 0.97168Z" stroke="#D9D9D9" stroke-width="1.85414" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      Брендинг
                    </button>
                    <button className="border border-solid border-[#DEDEE2] rounded-[20px] h-[50px] px-[24px] 1200px:h-[36px] 1200px:px-[10px] text-[#2A2A3C] font-monrope font-[400] text-[16px] leading-[21px] 1200px:text-[12px] flex items-center gap-[10px] 1440px:h-[46px] 1440px:px-[15px] 1024px:text-[10px] 1024px:gap-[5px]">
                      <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="1200px:w-[16px] 1024px:w-[14px]">
                        <path d="M11.4982 0.97168L12.9887 3.9198C13.6244 5.1771 14.0872 6.51441 14.3646 7.89547L14.4291 8.21677L22.0211 8.63061L20.2814 10.2401C19.4744 10.9867 18.5909 11.6464 17.6456 12.208L16.114 13.118L18.0023 21.0161L16.1886 20.0636C15.2323 19.5613 14.3306 18.9616 13.4979 18.2739L11.4982 16.6225L4.9972 21.0161L5.32454 18.4529C5.47986 17.2369 5.77769 16.0432 6.2119 14.8967L6.88555 13.118L0.978516 8.63061L2.79468 8.29768C4.10916 8.05676 5.44908 7.98489 6.78181 8.08389L8.57047 8.21677L9.66004 6.19604C10.2339 5.13173 10.6823 4.00461 10.9963 2.83718L11.4982 0.97168Z" stroke="#D9D9D9" stroke-width="1.85414" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      Брендинг
                    </button>
                    <button className="border border-solid border-[#DEDEE2] rounded-[20px] h-[50px] px-[24px] 1200px:h-[36px] 1200px:px-[10px] text-[#2A2A3C] font-monrope font-[400] text-[16px] leading-[21px] 1200px:text-[12px] flex items-center gap-[10px] 1440px:h-[46px] 1440px:px-[15px] 1024px:text-[10px] 1024px:gap-[5px]">
                      <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="1200px:w-[16px] 1024px:w-[14px]">
                        <path d="M11.4982 0.97168L12.9887 3.9198C13.6244 5.1771 14.0872 6.51441 14.3646 7.89547L14.4291 8.21677L22.0211 8.63061L20.2814 10.2401C19.4744 10.9867 18.5909 11.6464 17.6456 12.208L16.114 13.118L18.0023 21.0161L16.1886 20.0636C15.2323 19.5613 14.3306 18.9616 13.4979 18.2739L11.4982 16.6225L4.9972 21.0161L5.32454 18.4529C5.47986 17.2369 5.77769 16.0432 6.2119 14.8967L6.88555 13.118L0.978516 8.63061L2.79468 8.29768C4.10916 8.05676 5.44908 7.98489 6.78181 8.08389L8.57047 8.21677L9.66004 6.19604C10.2339 5.13173 10.6823 4.00461 10.9963 2.83718L11.4982 0.97168Z" stroke="#D9D9D9" stroke-width="1.85414" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      Брендинг
                    </button>
                    <button className="border border-solid border-[#DEDEE2] rounded-[20px] h-[50px] px-[24px] 1200px:h-[36px] 1200px:px-[10px] text-[#2A2A3C] font-monrope font-[400] text-[16px] leading-[21px] 1200px:text-[12px] flex items-center gap-[10px] 1440px:h-[46px] 1440px:px-[15px] 1024px:text-[10px] 1024px:gap-[5px]">
                      <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="1200px:w-[16px] 1024px:w-[14px]">
                        <path d="M11.4982 0.97168L12.9887 3.9198C13.6244 5.1771 14.0872 6.51441 14.3646 7.89547L14.4291 8.21677L22.0211 8.63061L20.2814 10.2401C19.4744 10.9867 18.5909 11.6464 17.6456 12.208L16.114 13.118L18.0023 21.0161L16.1886 20.0636C15.2323 19.5613 14.3306 18.9616 13.4979 18.2739L11.4982 16.6225L4.9972 21.0161L5.32454 18.4529C5.47986 17.2369 5.77769 16.0432 6.2119 14.8967L6.88555 13.118L0.978516 8.63061L2.79468 8.29768C4.10916 8.05676 5.44908 7.98489 6.78181 8.08389L8.57047 8.21677L9.66004 6.19604C10.2339 5.13173 10.6823 4.00461 10.9963 2.83718L11.4982 0.97168Z" stroke="#D9D9D9" stroke-width="1.85414" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      Брендинг
                    </button>
                  </div>
                </div>
              </div>
              <div className="max-w-[375px] flex w-[100%] gap-[10px] absolute bottom-[0] left-[52%] 1600px:left-[58%] 1200px:left-[34%] 1200px:bottom-[55px] 1440px:left-[40%] 1440px:max-w-[243px] 1200px:max-w-[165px] 1024px:max-w-[114px] 1024px:left-[29%] 800px:static 800px:max-w-[max-content] 800px:mx-auto">
                <div className="flex flex-col gap-[19px] 1200px:gap-[10px] 1024px:gap-[5px]">
                  <svg width="34" height="22" className="1200px:w-[16px]" viewBox="0 0 34 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.157 0.512999C14.0967 0.479436 14.0666 0.462654 14.0339 0.450815C14.0049 0.440301 13.9744 0.432705 13.9428 0.428131C13.9073 0.422979 13.8701 0.422979 13.7956 0.422979H12.1402C11.9574 0.422979 11.866 0.422979 11.7802 0.450156C11.7044 0.474191 11.6321 0.513434 11.5685 0.565101C11.4965 0.623521 11.4405 0.703552 11.3285 0.863615L6.01561 8.45297C5.92193 8.58679 5.87509 8.6537 5.84852 8.7241C5.825 8.78645 5.81316 8.85055 5.81364 8.91306C5.81417 8.98364 5.83622 9.05101 5.88031 9.18574L6.28807 10.4317C6.41526 10.8204 6.47886 11.0147 6.42684 11.1726C6.38141 11.3105 6.28186 11.4339 6.15157 11.5137C6.00236 11.6051 5.78193 11.6051 5.34107 11.6051H4.31221C4.12941 11.6051 4.038 11.6051 3.95226 11.6323C3.87643 11.6564 3.80414 11.6956 3.74052 11.7473C3.66858 11.8057 3.61256 11.8857 3.50051 12.0458L0.860876 15.8165C0.587069 16.2076 0.450166 16.4032 0.444447 16.5624C0.439455 16.7014 0.49461 16.8262 0.596797 16.9071C0.713846 16.9997 0.937198 16.9997 1.3839 16.9997H4.48015C4.65668 16.9997 4.74495 16.9997 4.82823 16.9741C4.90191 16.9514 4.97243 16.9144 5.03508 16.8654C5.1059 16.8101 5.16229 16.7342 5.27508 16.5823L7.01109 14.2442C7.12388 14.0922 7.18028 14.0163 7.25109 13.961C7.31374 13.9121 7.38426 13.875 7.45794 13.8524C7.54122 13.8268 7.62949 13.8268 7.80603 13.8268H12.0866C12.3631 13.8268 12.5013 13.8268 12.5996 13.8788C12.6861 13.9246 12.7511 13.998 12.786 14.0889C12.8256 14.1921 12.808 14.3281 12.7729 14.5999L12.5627 16.2265C12.5275 16.4984 12.51 16.6343 12.5495 16.7376C12.5844 16.8285 12.6494 16.9018 12.736 16.9476C12.8343 16.9997 12.9725 16.9997 13.2489 16.9997H29.6675C29.9561 16.9997 30.1004 16.9997 30.2205 16.9443C30.3262 16.8957 30.4188 16.8181 30.4852 16.7226C30.5607 16.614 30.5859 16.4719 30.6364 16.1877L30.9933 14.1807C31.0438 13.8965 31.069 13.7544 31.0322 13.6458C30.9997 13.5504 30.9347 13.4727 30.8463 13.4241C30.7459 13.3688 30.6016 13.3688 30.3129 13.3688H24.8505C24.3199 13.3688 24.0547 13.3688 23.9339 13.2609C23.8288 13.1671 23.7816 13.0243 23.8054 12.8721C23.8328 12.6971 24.029 12.4881 24.4214 12.07L32.8289 3.11401C32.9043 3.03371 32.942 2.99356 32.9715 2.94935C32.9977 2.91013 33.0192 2.86862 33.0353 2.82587C33.0534 2.77768 33.0623 2.72751 33.0801 2.62718L33.3315 1.21328C33.382 0.929084 33.4073 0.786986 33.3704 0.678438C33.338 0.582956 33.2729 0.505326 33.1846 0.456676C33.0842 0.401367 32.9398 0.401367 32.6512 0.401367H20.5371C20.2484 0.401367 20.1041 0.401367 19.984 0.456676C19.8784 0.505326 19.7857 0.582956 19.7193 0.678438C19.6439 0.786986 19.6186 0.929085 19.5681 1.21328L19.2113 3.22033C19.1607 3.50453 19.1355 3.64662 19.1724 3.75517C19.2048 3.85065 19.2698 3.92828 19.3582 3.97693C19.4586 4.03224 19.6029 4.03224 19.8916 4.03224H25.354C25.8846 4.03224 26.1499 4.03224 26.2706 4.1401C26.3757 4.23397 26.4229 4.37672 26.3991 4.52896C26.3718 4.70391 26.1755 4.91294 25.7831 5.33098L18.946 12.6142C18.4855 13.1047 18.2553 13.35 18.0627 13.3911C17.8956 13.4267 17.7347 13.3846 17.6298 13.2776C17.5089 13.1544 17.5178 12.8511 17.5358 12.2446L17.8097 2.96767C17.8142 2.81627 17.8164 2.74056 17.7974 2.67435C17.7805 2.61572 17.7515 2.56276 17.7119 2.51829C17.6672 2.46808 17.6044 2.43307 17.4786 2.36304L14.157 0.512999ZM13.9338 4.98804C13.9793 4.98804 14.0106 5.02325 14.0048 5.06804L13.4179 9.60897C13.3796 9.90533 13.3604 10.0535 13.2861 10.1673C13.2207 10.2674 13.1267 10.3494 13.0183 10.401C12.895 10.4596 12.7443 10.4596 12.443 10.4596H11.223C10.7618 10.4596 10.5312 10.4596 10.4133 10.3642C10.3105 10.2809 10.2567 10.1527 10.2651 10.0109C10.2748 9.84853 10.4221 9.65008 10.7168 9.25319L13.8515 5.03123C13.8713 5.00457 13.9028 4.98804 13.9338 4.98804Z" fill="#F1632B" />
                    <path d="M0 17.174L18.4156 21.1119C18.6776 21.1679 18.8614 20.7857 18.6206 20.6857C18.3832 20.5872 18.5584 20.2106 18.8195 20.2584L26.3912 21.6421C26.4175 21.6469 26.4306 21.6493 26.444 21.651C26.4558 21.6525 26.4678 21.6536 26.4799 21.6542C26.4935 21.6549 26.5073 21.6549 26.5349 21.6549H28.8903C29.2497 21.6549 29.4294 21.6549 29.4951 21.6391C29.9335 21.5334 30.137 20.9961 29.8354 20.7409C29.7902 20.7027 29.636 20.6353 29.3277 20.5004L26.56 19.2899C26.4186 19.2281 26.2632 19.4276 26.3734 19.5294C26.4711 19.6195 26.3583 19.7997 26.218 19.7778L13.6734 17.8233C13.321 17.7684 13.0414 18.2246 13.2925 18.4448C13.5425 18.6641 13.2664 19.1184 12.9145 19.0669L0 17.174Z" fill="#F1632B" />
                  </svg>
                  <div className="font-[200] relative font-monrope uppercase text-[56px] leading-[58px] tracking-[-0.04em] 1440px:text-[40px] 1440px:leading-[42px] 1200px:text-[25px] 1200px:leading-[28px] 1024px:text-[14px] 1024px:leading-[16px]"><span className="text-[#F1632B]">Наши клиенты</span><span className="font-[800] block text-[#2A2A3C]">ПО ВСЕМУ МИРУ</span> <span className="font-[400] text-[16px] leading-[23px] normal-case tracking-[-0.01em] block max-w-[229px] w-[100%] absolute bottom-0 left-0 translate-y-[115%] 1440px:text-[12px] 1440px:max-w-[170px] 1440px:leading-[16px] 1200px:text-[9px] 1200px:leading-[11px] 800px:static 800px:translate-y-0">Мы  гордимся работой с компаниями, которые задает правила игры на своих рынках</span></div>
                </div>
                <p className="vertical_text rotate-[180deg] font-monrope font-[400] text-[6px]">A-Z <br /> CREATIVE STUDIO</p>
              </div>
            </div>
            <div>
              <div className="relative max-w-[1600px] 1600px:max-w-[1440px] mx-auto w-[100%] h-[813px] 1440px:max-w-[1200px] 1200px:max-w-[1024px] 1024px:max-w-[800px] 1024px:h-[686px] 800px:max-w-[600px] 600px:max-w-[425px] 600px:h-[400px]">
                <img src="/assets/img/map.png" className="w-[100%] h-[100%] 1600px:object-contain absolute top-0 left-0 600px:top-[-56px]" />
                <img src="/assets/svg/dotes.svg" className="w-[1168px] h-[512px] absolute top-0 left-[50%] translate-x-[-53%] translate-y-[122px] 1024px:translate-y-[70px] 1440px:max-w-[942px] 1200px:max-w-[794px] 1024px:max-w-[598px] 800px:max-w-[453px] 600px:max-w-[317px] 600px:translate-y-[62px] 600px:h-[164px]" />
                <Fuck left="left-[283px] 800px:left-[238px] 1200px:left-[260px]" top="top-[193px] 800px:top-[200px] 1200px:top-[170px] 600px:top-[273px] 600px:top-[74px]" />
                <Fuck left="left-[220px] 600px:left-[194px] 800px:left-[186px]" top="top-[300px] 800px:top-[288px] 600px:top-[100px]" />
                <Fuck left="left-[340px] 600px:left-[146px] 800px:left-[196px] 1440px:left-[274px] 1200px:left-[233px]" top="top-[430px] 600px:top-[389px] 600px:top-[76px]" />
                <Fuck left="left-[320px] 600px:left-[90px] 1024px:left-[118px]" top="top-[320px] 600px:top-[50px]" />
                <Fuck left="left-[420px] 600px:left-[196px] 800px:left-[158px] 1024px:left-[202px] 1200px:left-[261px] 1440px:left-[283px]" top="top-[320px] 1440px:top-[347px] 600px:top-[146px]" />
                <Fuck left="left-[480px] 600px:left-[336px] 1440px:left-[370px]" top="top-[280px] 1200px:top-[240px] 600px:top-[267px] 600px:top-[77px]" />
                <Fuck left="left-[850px] 600px:left-[50px] 1024px:left-[414px]" top="top-[280px] 600px:top-[100px]" />
                <Fuck left="left-[930px] 600px:left-[288px]" top="top-[200px] 1200px:top-[226px] 600px:top-[324px] 600px:top-[71px]" />
                <Fuck left="left-[1090px] 600px:left-[350px] 800px:left-[510px] 1024px:left-[694px] 1200px:left-[886px] 1440px:left-[980px]" top="top-[450px] 600px:top-[105px] 800px:top-[390px] 1200px:top-[490px]" />
                <Fuck left="left-[1070px] 800px:left-[316px] 1024px:left-[652px] 1440px:left-[1036px] 1200px:left-[857px]" top="top-[320px] 1200px:top-[370px] 600px:top-[136px]" />
                <Fuck left="left-[1070px] 1200px:left-[984px]" top="top-[250px]" />
                <Fuck left="left-[1100px] 800px:left-[583px] 1024px:left-[700px] 1200px:left-[818px] 1440px:left-[1041px]" top="top-[170px] 800px:top-[242px] 1200px:top-[209px]" />
                <Fuck left="left-[1180px] 1440px:left-[1139px]" top="top-[270px] 1440px:top-[219px]" />
                <Fuck left="right-[290px]" top="top-[250px] 1600px:top-[215px] 800px:top-[208px] 600px:top-[50px]" />
              </div>
              <div className="flex items-center gap-[118px] justify-center translate-y-[-100px] 1200px:translate-y-[-183px] 1600px:gap-[80px] 1200px:gap-[25px] 600px:gap-[11px]">
                <div className="relative">
                  <p className="text-[#F1632B] font-monrope font-[800] text-[60px] leading-[59px] tracking-[-0.125em] 1440px:text-[40px] 1440px:leading-[32px] 1024px:text-[30px] 1024px:translate-x-[-19%] translate-x-[-30%] 600px:text-[14px] 600px:leading-[11px]">+</p>
                  <p className="text-[#F1632B] font-monrope font-[800] text-[91px] leading-[90px] tracking-[-0.125em] 1440px:text-[60px] 1440px:leading-[50px] 1024px:text-[40px] 1024px:leading-[34px] 600px:text-[22px] 600px:leading-[18px]">256</p>
                  <div>
                    <p className="text-[#2A2A3C] font-monrope font-[400] text-[16px] leading-[22px] mb-[10px] mt-[12px] 1440px:text-[12px] 1440px:leading-[10px] 1024px:text-[9px] 1024px:mt-[6px] 1024px:mb-[4px] 600px:text-[6px] 600px:mt-[1px]">Всего проектов</p>
                    <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M5.63392 0.824371H4.76353L2.59456 3.92272L2.93118 4.95133H1.8745L0.48078 6.94224H2.30123L3.17067 5.77124H5.21965L5.06831 6.94224L11.7223 6.94225L11.9605 5.60222H9.03188L12.6597 1.73768L12.8235 0.816406H7.74392L7.50569 2.15643H10.4344L6.91952 5.9006L7.0462 1.61096L5.63392 0.824371ZM5.64123 2.50917L5.38025 4.52855H4.09334L5.59269 2.50917H5.64123Z" fill="#2A2A3C" />
                      <path d="M0.46875 7.00658L8.20259 8.66035L6.60453 7.99692L10.2347 8.66035H12.2668L9.95849 7.65078L10.3333 7.99692L5.02619 7.17004L5.71671 7.77577L0.46875 7.00658Z" fill="#2A2A3C" />
                    </svg>
                  </div>
                </div>
                <div className="rounded-[20px] relative max-w-[336px] flex items-center w-[100%] h-[70px] before:content-[''] before:absolute before:top-0 before:left-0 before:w-[100%] before:h-[100%] before:bg-[#F84A20] before:rounded-[20px] before:z-[-1] before:shadow-[7.22px_7.22px_28.89px_0px_#FFFFFF4D_inset,-7.22px_-7.22px_28.89px_0px_#FFFFFF4D_inset,0px_0.72px_0px_0px_#E07258] after:content-[''] after:absolute after:top-[4px] after:left-0 after:w-[100%] after:h-[100%] after:bg-[#B96652] after:shadow-[0px_10.11px_1.95px_-10.11px_#050505E5,0px_13px_6.43px_-9.39px_#05050540,0px_18.78px_11.48px_-11.55px_#05050540,0px_-20.22px_0.87px_-20.22px_#05050580_inset,0px_-20.94px_2.67px_-20.22px_#0505053D_inset,-20.22px_-10.83px_2.67px_-20.22px_#D98774_inset,20.22px_-10.83px_2.67px_-20.22px_#D98774_inset] after:z-[-2] after:rounded-[20px] 1024px:max-w-[247px] 1024px:h-[55px] 600px:max-w-[174px] 600px:before:rounded-[12px] 600px:after:rounded-[12px] 600px:h-[45px]">
                  <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[calc(100%_-_8px)] h-[calc(100%_-_8px)] opacity-[30%] mix-blend-overlay border-[0.67px] border-solid border-[#000000] rounded-[20px] z-[-1] 600px:rounded-[12px]"></div>
                  <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[calc(100%_-_8px)] h-[calc(100%_-_8px)] opacity-[30%] mix-blend-overlay border-[0.67px] border-solid border-[#FFFFFF] rounded-[20px] z-[-1] 600px:rounded-[12px]"></div>
                  <img src="/assets/img/button_fon.png" className="opacity-[7%] object-cover border-[0.67px] border-solid border-[#FFFFFF] mix-blend-plus-lighter absolute w-[calc(100%_-_18px)] m-[9px] h-[calc(100%_-_18px)] top-0 left-0 rounded-[20px] z-[-1] 600px:rounded-[12px]" />
                  <img src="/assets/img/human.png" className="w-[91px] mb-[39px] ml-[13px] h-[87px] rounded-[20px] object-cover object-top 1024px:w-[65px] 600px:w-[42px] 600px:h-[50px] 600px:mb-[21px]" />
                  <p className=" drop-shadow-[0px_0.67px_0px_#00000026] font-monrope font-[500] text-[16px] leading-[19px] text-[#FFFFFF] mr-[11px] ml-[8px] 1024px:text-[12px] 600px:text-[8px] 600px:leading-[9px] 600px:ml-[3px] 600px:mr-[8px]">Написать в телеграм</p>
                  <svg width="10" height="10" className="600px:w-[7px] self-start mt-[20px] 600px:mt-[12px]" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_737_3905)">
                      <path d="M4.88672 5.13439V1.37207H7.57409" stroke="white" stroke-width="0.501642" />
                      <path d="M6.35555 3.62891H9.49081V8.64533H0.962891V3.62891H3.59651" stroke="white" stroke-width="0.501642" />
                      <path d="M6.7243 0.307926L7.78844 1.37207L6.7243 2.43621" stroke="white" stroke-width="0.501642" />
                    </g>
                    <defs>
                      <filter id="filter0_d_737_3905" x="0.712891" y="0.130859" width="9.0293" height="9.4353" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="0.669677" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_737_3905" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_737_3905" result="shape" />
                      </filter>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-[100%] relative h-[1620px] 1440px:h-[1376px] 1200px:translate-y-[-100px] 1024px:h-[936px] 800px:h-[807px] 600px:h-[515px]">
              <div className="max-w-[415px] left-[231px] w-[100%] relative z-[1] flex flex-col gap-[12px] 1024px:gap-[8px] 600px:gap-[3px] 600px:max-w-[121px] 1440px:left-[160px] 1024px:max-w-[186px] 1024px:left-[60px] 800px:left-[23px]">
                <svg width="34" height="22" className="1024px:w-[24px] 600px:w-[10px] 600px:h-[10px]" viewBox="0 0 34 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.157 0.731749C14.0967 0.698186 14.0666 0.681404 14.0339 0.669565C14.0049 0.659051 13.9744 0.651455 13.9428 0.646881C13.9073 0.641729 13.8701 0.641729 13.7956 0.641729H12.1402C11.9574 0.641729 11.866 0.641729 11.7802 0.668906C11.7044 0.692941 11.6321 0.732184 11.5685 0.783851C11.4965 0.842271 11.4405 0.922302 11.3285 1.08237L6.01561 8.67172C5.92193 8.80554 5.87509 8.87245 5.84852 8.94285C5.825 9.0052 5.81316 9.0693 5.81364 9.13181C5.81417 9.20239 5.83622 9.26976 5.88031 9.40449L6.28807 10.6505C6.41526 11.0391 6.47886 11.2335 6.42684 11.3914C6.38141 11.5293 6.28186 11.6526 6.15157 11.7325C6.00236 11.8239 5.78193 11.8239 5.34107 11.8239H4.31221C4.12941 11.8239 4.038 11.8239 3.95226 11.8511C3.87643 11.8751 3.80414 11.9143 3.74052 11.966C3.66858 12.0244 3.61256 12.1045 3.50051 12.2645L0.860876 16.0352C0.587069 16.4263 0.450166 16.6219 0.444447 16.7812C0.439455 16.9202 0.49461 17.045 0.596797 17.1258C0.713846 17.2184 0.937198 17.2184 1.3839 17.2184H4.48015C4.65668 17.2184 4.74495 17.2184 4.82823 17.1928C4.90191 17.1702 4.97243 17.1331 5.03508 17.0842C5.1059 17.0289 5.16229 16.9529 5.27508 16.801L7.01109 14.4629C7.12388 14.311 7.18028 14.235 7.25109 14.1797C7.31374 14.1308 7.38426 14.0938 7.45794 14.0711C7.54122 14.0455 7.62949 14.0455 7.80603 14.0455H12.0866C12.3631 14.0455 12.5013 14.0455 12.5996 14.0976C12.6861 14.1434 12.7511 14.2167 12.786 14.3076C12.8256 14.4109 12.808 14.5468 12.7729 14.8187L12.5627 16.4452C12.5275 16.7171 12.51 16.853 12.5495 16.9563C12.5844 17.0472 12.6494 17.1205 12.736 17.1664C12.8343 17.2184 12.9725 17.2184 13.2489 17.2184H29.6675C29.9561 17.2184 30.1004 17.2184 30.2205 17.1631C30.3262 17.1144 30.4188 17.0368 30.4852 16.9413C30.5607 16.8328 30.5859 16.6907 30.6364 16.4065L30.9933 14.3994C31.0438 14.1152 31.069 13.9731 31.0322 13.8646C30.9997 13.7691 30.9347 13.6915 30.8463 13.6428C30.7459 13.5875 30.6016 13.5875 30.3129 13.5875H24.8505C24.3199 13.5875 24.0547 13.5875 23.9339 13.4797C23.8288 13.3858 23.7816 13.2431 23.8054 13.0908C23.8328 12.9159 24.029 12.7068 24.4214 12.2888L32.8289 3.33276C32.9043 3.25246 32.942 3.21231 32.9715 3.1681C32.9977 3.12888 33.0192 3.08737 33.0353 3.04462C33.0534 2.99643 33.0623 2.94626 33.0801 2.84593L33.3315 1.43203C33.382 1.14783 33.4073 1.00574 33.3704 0.897188C33.338 0.801706 33.2729 0.724076 33.1846 0.675426C33.0842 0.620117 32.9398 0.620117 32.6512 0.620117H20.5371C20.2484 0.620117 20.1041 0.620117 19.984 0.675426C19.8784 0.724076 19.7857 0.801706 19.7193 0.897188C19.6439 1.00574 19.6186 1.14783 19.5681 1.43203L19.2113 3.43908C19.1607 3.72328 19.1355 3.86537 19.1724 3.97392C19.2048 4.0694 19.2698 4.14703 19.3582 4.19568C19.4586 4.25099 19.6029 4.25099 19.8916 4.25099H25.354C25.8846 4.25099 26.1499 4.25099 26.2706 4.35885C26.3757 4.45272 26.4229 4.59547 26.3991 4.74771C26.3718 4.92266 26.1755 5.13169 25.7831 5.54973L18.946 12.8329C18.4855 13.3234 18.2553 13.5687 18.0627 13.6098C17.8956 13.6455 17.7347 13.6033 17.6298 13.4964C17.5089 13.3731 17.5178 13.0699 17.5358 12.4633L17.8097 3.18642C17.8142 3.03502 17.8164 2.95931 17.7974 2.8931C17.7805 2.83447 17.7515 2.78151 17.7119 2.73704C17.6672 2.68683 17.6044 2.65182 17.4786 2.58179L14.157 0.731749ZM13.9338 5.20679C13.9793 5.20679 14.0106 5.242 14.0048 5.28679L13.4179 9.82772C13.3796 10.1241 13.3604 10.2723 13.2861 10.3861C13.2207 10.4861 13.1267 10.5682 13.0183 10.6197C12.895 10.6784 12.7443 10.6784 12.443 10.6784H11.223C10.7618 10.6784 10.5312 10.6784 10.4133 10.5829C10.3105 10.4996 10.2567 10.3714 10.2651 10.2297C10.2748 10.0673 10.4221 9.86883 10.7168 9.47194L13.8515 5.24998C13.8713 5.22332 13.9028 5.20679 13.9338 5.20679Z" fill="#F1632B" />
                  <path d="M0 17.3927L18.4156 21.3306C18.6776 21.3866 18.8614 21.0045 18.6206 20.9045C18.3832 20.8059 18.5584 20.4294 18.8195 20.4771L26.3912 21.8609C26.4175 21.8657 26.4306 21.8681 26.444 21.8698C26.4558 21.8713 26.4678 21.8723 26.4799 21.873C26.4935 21.8737 26.5073 21.8737 26.5349 21.8737H28.8903C29.2497 21.8737 29.4294 21.8737 29.4951 21.8578C29.9335 21.7521 30.137 21.2149 29.8354 20.9597C29.7902 20.9214 29.636 20.854 29.3277 20.7192L26.56 19.5087C26.4186 19.4468 26.2632 19.6463 26.3734 19.7481C26.4711 19.8383 26.3583 20.0184 26.218 19.9965L13.6734 18.042C13.321 17.9871 13.0414 18.4433 13.2925 18.6636C13.5425 18.8829 13.2664 19.3372 12.9145 19.2856L0 17.3927Z" fill="#F1632B" />
                </svg>
                <div>
                  <p className="font-[800] font-monrope text-[44px] leading-[52px] tracking-[-0.04em] text-[#F1632B] 1440px:text-[30px] uppercase 1440px:leading-[34px] 1024px:text-[20px] 1024px:leading-[21px] 600px:text-[12px] 600px:leading-[12px]">9 <span className="font-[200]">преимуществ</span> <span className="text-[#2A2A3C]">созданных нами Проектов</span></p>
                  <svg width="28" height="28" className="1024px:w-[14px] absolute 600px:w-[6px] 600px:left-[28px] 600px:h-[6px] 600px:bottom-[-15px] 1440px:w-[20px] bottom-[-45px] 1024px:bottom-[-35px] left-[65px]" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.5223 27.726V17.2974H0.09375V10.9679H10.5223V0.599609H16.8518V10.9679H27.2201V17.2974H16.8518V27.726H10.5223Z" fill="#F1632B" />
                  </svg>
                  <svg width="28" height="28" className="1024px:w-[14px] absolute 600px:w-[6px] 600px:left-[28px] 600px:h-[6px] 600px:bottom-[-30px] 1440px:w-[20px] bottom-[-90px] left-[65px] 1024px:bottom-[-60px]" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.5223 27.726V17.2974H0.09375V10.9679H10.5223V0.599609H16.8518V10.9679H27.2201V17.2974H16.8518V27.726H10.5223Z" fill="#F1632B" />
                  </svg>
                </div>
              </div>
              <img src="/assets/img/hous_1.png" className="absolute top-[0] left-[0] z-[-2]" />
              <img src="/assets/img/hous_1.png" className="absolute top-[0] left-[0] z-[-2]" />
              <div className="absolute top-[0] left-[55%] translate-x-[-50%] w-[1396px] h-[703px] 1440px:w-[1035px] 1440px:h-[618px] 1024px:w-[596px] 1024px:h-[310px] 600px:w-[350px] 600px:translate-x-[-60%] 600px:h-[181px] 600px:top-[28px]">
                <div className="absolute top-[58%] left-[60%] flex flex-col gap-[37px] 800px:gap-[17px] 800px:top-[70%] 600px:top-[60%]">
                  <svg width="94" height="94" className="1440px:w-[78px] 1200px:w-[58px] 1200px:h-[58px] 1024px:w-[48px] 1024px:h-[48px] 800px:w-[28px] 800px:h-[28px] 600px:w-[18px] 600px:h-[18px]" viewBox="0 0 94 94" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M35.9712 93.4424V57.7818H0.310547V36.1381H35.9712V0.683594H57.6149V36.1381H93.0694V57.7818H57.6149V93.4424H35.9712Z" fill="#F1632B" />
                  </svg>
                  <svg width="98" height="98" className="1440px:w-[78px] 1200px:w-[58px] 1200px:h-[58px] 1024px:w-[48px] 1024px:h-[48px] 800px:w-[28px] 800px:h-[28px] 600px:w-[18px] 600px:h-[18px]" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M36.9712 95.2012V96.2012H37.9712H59.6149H60.6149V95.2012V60.5406H95.0694H96.0694V59.5406V37.8969V36.8969H95.0694H60.6149V2.44238V1.44238H59.6149H37.9712H36.9712V2.44238V36.8969H2.31055H1.31055V37.8969V59.5406V60.5406H2.31055H36.9712V95.2012Z" stroke="#F1632B" stroke-width="2" />
                  </svg>
                </div>
                <img src="/assets/img/line.png" className="w-[100%] h-[100%] 1440px:object-contain" />
                <img src="/assets/img/line_tail.png" className="absolute top-[150px] right-[-60px] z-[-1] 1440px:w-[256px] 1440px:top-[165px] 1024px:w-[155px] 1024px:top-[85px] 600px:right-[-29px] 600px:top-[50px] 600px:w-[84px]" />
              </div>
              <div className="max-w-[1447px] min-w-[1447px] 1440px:max-w-[1200px] 1440px:min-w-[1200px] w-[100%] grid grid-cols-7 gap-[30px] 800px:gap-[15px] absolute top-[140px] z-[-1] left-[50%] translate-x-[-50%] 1024px:top-[16px] 1024px:max-w-[800px] 1024px:min-w-[800px] 800px:max-w-[550px] 800px:min-w-[550px] 800px:grid-cols-3 800px:top-[56px] 600px:max-w-[380px] 600px:min-w-[380px] 600px:gap-[5px]">
                <div className="max-w-[266px] min-w-[266px] 600px:rounded-[9px] w-[100%] h-[178px] rounded-[20px] border border-solid border-[#F1632B] p-[16px] flex flex-col justify-between col-[6_/_6] 1440px:max-w-[200px] 1440px:min-w-[200px] 1440px:h-[130px] 1024px:max-w-[170px] 1024px:min-w-[170px] 1024px:h-[95px] 1024px:rounded-[12px] 800px:col-[3_/_3] 800px:max-w-[100%] 800px:min-w-[100%] 600px:p-[8px] 600px:h-[65px]">
                  <div className="flex justify-between">
                    <p className="text-[#F1632B] font-[400] font-monrope text-[12px] leading-[18px] 600px:text-[8px]">01</p>
                    <p className="text-[#F1632B] font-monrope font-[400] text-[6px] leading-[8px] vertical_text rotate-[180deg]">A-Z <br />CREATIVE STUDIO</p>
                  </div>
                  <div className="flex flex-col gap-[16px] 1440px:gap-[10px] 1024px:gap-[0] 1024px:mt-[-17px] 600px:mt-[-24px]">
                    <svg width="25" height="16" className="1024px:w-[18px] 600px:w-[12px] 600px:h-[12px]" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1446 0.129983C11.1013 0.105876 11.0797 0.0938231 11.0562 0.0853198C11.0354 0.0777683 11.0135 0.0723129 10.9908 0.0690273C10.9653 0.0653274 10.9386 0.0653274 10.8851 0.0653274H9.69609C9.56479 0.0653274 9.49914 0.0653274 9.43756 0.0848466C9.38309 0.10211 9.33117 0.130295 9.28547 0.167404C9.23381 0.209364 9.19357 0.266845 9.11309 0.381809L5.2972 5.83277C5.22992 5.92888 5.19627 5.97694 5.17719 6.02751C5.16029 6.07229 5.15179 6.11832 5.15213 6.16322C5.15252 6.21391 5.16835 6.2623 5.20002 6.35907L5.49289 7.25399C5.58425 7.53314 5.62992 7.67272 5.59256 7.78614C5.55993 7.88518 5.48843 7.97377 5.39485 8.03111C5.28768 8.09677 5.12936 8.09677 4.81272 8.09677H4.07376C3.94246 8.09677 3.87681 8.09677 3.81522 8.11629C3.76076 8.13356 3.70884 8.16174 3.66314 8.19885C3.61148 8.24081 3.57124 8.29829 3.49076 8.41325L1.59488 11.1215C1.39822 11.4024 1.29989 11.5429 1.29578 11.6573C1.2922 11.7571 1.33181 11.8467 1.4052 11.9048C1.48927 11.9713 1.64969 11.9713 1.97053 11.9713H4.19437C4.32117 11.9713 4.38456 11.9713 4.44438 11.9529C4.4973 11.9367 4.54795 11.9101 4.59295 11.8749C4.64381 11.8352 4.68432 11.7806 4.76533 11.6715L6.01219 9.99221C6.0932 9.88311 6.13371 9.82855 6.18457 9.78883C6.22957 9.75369 6.28022 9.72709 6.33314 9.71082C6.39295 9.69244 6.45635 9.69244 6.58314 9.69244H9.65762C9.85617 9.69244 9.95544 9.69244 10.026 9.72982C10.0882 9.76273 10.1349 9.81539 10.1599 9.88068C10.1884 9.95486 10.1758 10.0525 10.1505 10.2477L9.99953 11.416C9.9743 11.6113 9.96168 11.7089 9.99011 11.7831C10.0151 11.8484 10.0619 11.901 10.124 11.9339C10.1946 11.9713 10.2939 11.9713 10.4924 11.9713H22.2848C22.4922 11.9713 22.5958 11.9713 22.6821 11.9316C22.7579 11.8966 22.8245 11.8409 22.8722 11.7723C22.9264 11.6943 22.9445 11.5923 22.9808 11.3882L23.2371 9.94663C23.2734 9.74251 23.2915 9.64045 23.265 9.56249C23.2417 9.49391 23.195 9.43815 23.1316 9.40321C23.0594 9.36348 22.9558 9.36348 22.7485 9.36348H18.8251C18.4441 9.36348 18.2535 9.36349 18.1668 9.28602C18.0913 9.2186 18.0574 9.11607 18.0745 9.00672C18.0941 8.88107 18.2351 8.73094 18.5169 8.43068L24.5555 1.99812C24.6097 1.94045 24.6367 1.91161 24.6579 1.87986C24.6768 1.85169 24.6922 1.82188 24.7037 1.79117C24.7167 1.75656 24.7231 1.72053 24.736 1.64847L24.9165 0.632951C24.9528 0.428831 24.9709 0.326771 24.9444 0.248807C24.9211 0.180228 24.8744 0.124472 24.811 0.0895292C24.7389 0.0498047 24.6352 0.0498047 24.4279 0.0498047H15.7271C15.5197 0.0498047 15.4161 0.0498047 15.3298 0.0895292C15.254 0.124472 15.1874 0.180228 15.1397 0.248807C15.0855 0.326771 15.0674 0.428831 15.0311 0.632952L14.7748 2.07449C14.7385 2.27861 14.7204 2.38067 14.7469 2.45863C14.7702 2.52721 14.8169 2.58297 14.8803 2.61791C14.9525 2.65764 15.0561 2.65764 15.2634 2.65764H19.1868C19.5678 2.65764 19.7584 2.65764 19.8451 2.7351C19.9206 2.80252 19.9545 2.90505 19.9374 3.0144C19.9178 3.14005 19.7768 3.29018 19.495 3.59044L14.5843 8.82149C14.2536 9.17381 14.0882 9.34997 13.9499 9.3795C13.8298 9.40512 13.7143 9.37484 13.6389 9.29801C13.5521 9.20948 13.5585 8.99167 13.5714 8.55605L13.7682 1.89302C13.7714 1.78427 13.773 1.7299 13.7593 1.68235C13.7472 1.64024 13.7263 1.60219 13.6979 1.57026C13.6658 1.5342 13.6207 1.50905 13.5304 1.45875L11.1446 0.129983ZM10.9843 3.34413C11.017 3.34413 11.0395 3.36942 11.0353 3.40159L10.6138 6.66305C10.5863 6.8759 10.5725 6.98233 10.5191 7.06408C10.4722 7.13595 10.4047 7.19487 10.3268 7.2319C10.2382 7.27403 10.13 7.27403 9.91357 7.27403H9.03737C8.7061 7.27403 8.54046 7.27403 8.45581 7.20546C8.38195 7.14563 8.34331 7.05355 8.34935 6.95176C8.35628 6.83511 8.4621 6.69258 8.67376 6.40752L10.9252 3.37514C10.9394 3.356 10.9621 3.34413 10.9843 3.34413Z" fill="#E2E2E2" />
                      <path d="M0.976562 12.0965L14.2033 14.9249C14.3915 14.9651 14.5236 14.6906 14.3506 14.6188C14.18 14.548 14.3059 14.2776 14.4934 14.3118L19.9317 15.3057C19.9506 15.3092 19.96 15.3109 19.9696 15.3121C19.9781 15.3132 19.9868 15.3139 19.9954 15.3144C20.0052 15.3149 20.0151 15.3149 20.0349 15.3149H21.7266C21.9848 15.3149 22.1138 15.3149 22.161 15.3035C22.4759 15.2276 22.6221 14.8417 22.4054 14.6584C22.373 14.631 22.2623 14.5825 22.0408 14.4857L20.0529 13.6163C19.9514 13.5719 19.8398 13.7151 19.919 13.7883C19.9891 13.853 19.9081 13.9824 19.8073 13.9667L10.7973 12.5629C10.5442 12.5234 10.3434 12.8511 10.5237 13.0093C10.7033 13.1668 10.505 13.4931 10.2523 13.4561L0.976562 12.0965Z" fill="#E2E2E2" />
                    </svg>
                    <p className="text-[#F1632B] font-monrope font-[700] text-[28px] leading-[38px] 600px:text-[10px] 600px:leading-[14px] 1440px:text-[22px] 1440px:leading-[27px] 1024px:text-[16px] 1024px:leading-[17px]">Гибкость</p>
                  </div>
                </div>
                <div className="max-w-[266px] 1200px:translate-y-[-70px] 1200px:translate-x-[-18%] min-w-[266px] 1440px:max-w-[210px] 1440px:min-w-[210px] 1440px:h-[117px] w-[100%] h-[146px] rounded-[20px] border border-solid border-[#F1632B] p-[16px] flex flex-col justify-between col-[1_/_1] row-[6_/_6] 1024px:row-[5_/_5] 1200px:col-[4_/_4] 1440px:translate-x-[12px] 1440px:translate-y-[21px] 1200px:max-w-[335px] 1200px:min-w-[335px] 1024px:max-w-[222px] 1024px:min-w-[222px] 1024px:translate-x-[-26%] 1024px:rounded-[12px] 800px:col-[2_/_2] 800px:max-w-[100%] 800px:min-w-[100%] 800px:translate-y-[50px] 800px:translate-x-0 800px:row-[8_/_8] 800px:h-[95px] 600px:p-[8px] 600px:rounded-[9px] 600px:h-[65px]">
                  <div className="flex justify-between">
                    <p className="text-[#F1632B] font-[400] font-monrope text-[12px] leading-[18px] 600px:text-[8px]">02</p>
                    <p className="text-[#F1632B] font-monrope font-[400] text-[6px] leading-[8px] vertical_text rotate-[180deg]">A-Z <br />CREATIVE STUDIO</p>
                  </div>
                  <div className="flex flex-col gap-[2px] 600px:gap-[0] 800px:mt-[-14px] 600px:mt-[-24px]">
                    <svg width="25" height="16" className="1024px:w-[18px] 600px:w-[12px] 600px:h-[12px]" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1446 0.129983C11.1013 0.105876 11.0797 0.0938231 11.0562 0.0853198C11.0354 0.0777683 11.0135 0.0723129 10.9908 0.0690273C10.9653 0.0653274 10.9386 0.0653274 10.8851 0.0653274H9.69609C9.56479 0.0653274 9.49914 0.0653274 9.43756 0.0848466C9.38309 0.10211 9.33117 0.130295 9.28547 0.167404C9.23381 0.209364 9.19357 0.266845 9.11309 0.381809L5.2972 5.83277C5.22992 5.92888 5.19627 5.97694 5.17719 6.02751C5.16029 6.07229 5.15179 6.11832 5.15213 6.16322C5.15252 6.21391 5.16835 6.2623 5.20002 6.35907L5.49289 7.25399C5.58425 7.53314 5.62992 7.67272 5.59256 7.78614C5.55993 7.88518 5.48843 7.97377 5.39485 8.03111C5.28768 8.09677 5.12936 8.09677 4.81272 8.09677H4.07376C3.94246 8.09677 3.87681 8.09677 3.81522 8.11629C3.76076 8.13356 3.70884 8.16174 3.66314 8.19885C3.61148 8.24081 3.57124 8.29829 3.49076 8.41325L1.59488 11.1215C1.39822 11.4024 1.29989 11.5429 1.29578 11.6573C1.2922 11.7571 1.33181 11.8467 1.4052 11.9048C1.48927 11.9713 1.64969 11.9713 1.97053 11.9713H4.19437C4.32117 11.9713 4.38456 11.9713 4.44438 11.9529C4.4973 11.9367 4.54795 11.9101 4.59295 11.8749C4.64381 11.8352 4.68432 11.7806 4.76533 11.6715L6.01219 9.99221C6.0932 9.88311 6.13371 9.82855 6.18457 9.78883C6.22957 9.75369 6.28022 9.72709 6.33314 9.71082C6.39295 9.69244 6.45635 9.69244 6.58314 9.69244H9.65762C9.85617 9.69244 9.95544 9.69244 10.026 9.72982C10.0882 9.76273 10.1349 9.81539 10.1599 9.88068C10.1884 9.95486 10.1758 10.0525 10.1505 10.2477L9.99953 11.416C9.9743 11.6113 9.96168 11.7089 9.99011 11.7831C10.0151 11.8484 10.0619 11.901 10.124 11.9339C10.1946 11.9713 10.2939 11.9713 10.4924 11.9713H22.2848C22.4922 11.9713 22.5958 11.9713 22.6821 11.9316C22.7579 11.8966 22.8245 11.8409 22.8722 11.7723C22.9264 11.6943 22.9445 11.5923 22.9808 11.3882L23.2371 9.94663C23.2734 9.74251 23.2915 9.64045 23.265 9.56249C23.2417 9.49391 23.195 9.43815 23.1316 9.40321C23.0594 9.36348 22.9558 9.36348 22.7485 9.36348H18.8251C18.4441 9.36348 18.2535 9.36349 18.1668 9.28602C18.0913 9.2186 18.0574 9.11607 18.0745 9.00672C18.0941 8.88107 18.2351 8.73094 18.5169 8.43068L24.5555 1.99812C24.6097 1.94045 24.6367 1.91161 24.6579 1.87986C24.6768 1.85169 24.6922 1.82188 24.7037 1.79117C24.7167 1.75656 24.7231 1.72053 24.736 1.64847L24.9165 0.632951C24.9528 0.428831 24.9709 0.326771 24.9444 0.248807C24.9211 0.180228 24.8744 0.124472 24.811 0.0895292C24.7389 0.0498047 24.6352 0.0498047 24.4279 0.0498047H15.7271C15.5197 0.0498047 15.4161 0.0498047 15.3298 0.0895292C15.254 0.124472 15.1874 0.180228 15.1397 0.248807C15.0855 0.326771 15.0674 0.428831 15.0311 0.632952L14.7748 2.07449C14.7385 2.27861 14.7204 2.38067 14.7469 2.45863C14.7702 2.52721 14.8169 2.58297 14.8803 2.61791C14.9525 2.65764 15.0561 2.65764 15.2634 2.65764H19.1868C19.5678 2.65764 19.7584 2.65764 19.8451 2.7351C19.9206 2.80252 19.9545 2.90505 19.9374 3.0144C19.9178 3.14005 19.7768 3.29018 19.495 3.59044L14.5843 8.82149C14.2536 9.17381 14.0882 9.34997 13.9499 9.3795C13.8298 9.40512 13.7143 9.37484 13.6389 9.29801C13.5521 9.20948 13.5585 8.99167 13.5714 8.55605L13.7682 1.89302C13.7714 1.78427 13.773 1.7299 13.7593 1.68235C13.7472 1.64024 13.7263 1.60219 13.6979 1.57026C13.6658 1.5342 13.6207 1.50905 13.5304 1.45875L11.1446 0.129983ZM10.9843 3.34413C11.017 3.34413 11.0395 3.36942 11.0353 3.40159L10.6138 6.66305C10.5863 6.8759 10.5725 6.98233 10.5191 7.06408C10.4722 7.13595 10.4047 7.19487 10.3268 7.2319C10.2382 7.27403 10.13 7.27403 9.91357 7.27403H9.03737C8.7061 7.27403 8.54046 7.27403 8.45581 7.20546C8.38195 7.14563 8.34331 7.05355 8.34935 6.95176C8.35628 6.83511 8.4621 6.69258 8.67376 6.40752L10.9252 3.37514C10.9394 3.356 10.9621 3.34413 10.9843 3.34413Z" fill="#E2E2E2" />
                      <path d="M0.976562 12.0965L14.2033 14.9249C14.3915 14.9651 14.5236 14.6906 14.3506 14.6188C14.18 14.548 14.3059 14.2776 14.4934 14.3118L19.9317 15.3057C19.9506 15.3092 19.96 15.3109 19.9696 15.3121C19.9781 15.3132 19.9868 15.3139 19.9954 15.3144C20.0052 15.3149 20.0151 15.3149 20.0349 15.3149H21.7266C21.9848 15.3149 22.1138 15.3149 22.161 15.3035C22.4759 15.2276 22.6221 14.8417 22.4054 14.6584C22.373 14.631 22.2623 14.5825 22.0408 14.4857L20.0529 13.6163C19.9514 13.5719 19.8398 13.7151 19.919 13.7883C19.9891 13.853 19.9081 13.9824 19.8073 13.9667L10.7973 12.5629C10.5442 12.5234 10.3434 12.8511 10.5237 13.0093C10.7033 13.1668 10.505 13.4931 10.2523 13.4561L0.976562 12.0965Z" fill="#E2E2E2" />
                    </svg>
                    <p className="text-[#F1632B] font-monrope font-[700] text-[28px] leading-[38px] 1440px:text-[22px] 1440px:leading-[26px] 1024px:text-[15px] 1024px:leading-[20px] 600px:text-[10px] 600px:leading-[14px]">Адаптивность</p>
                  </div>
                </div>
                <div className="max-w-[266px] 1440px:max-w-[210px] 1440px:min-w-[210px] 1440px:h-[240px] relative overflow-hidden min-w-[266px] w-[100%] h-[263px] rounded-[20px] bg-[linear-gradient(0deg,_#F1632B,_#F1632B),_linear-gradient(181.93deg,_#E13E3E_-11.13%,_#F1632B_367.38%)] p-[16px] pb-[23px] pl-[23px] flex flex-col justify-between col-[2_/_2] row-[5_/_5] translate-x-[30%] translate-y-[70%] 1024px:max-w-[160px] 1024px:translate-x-0 1024px:min-w-[160px] 1024px:h-[203px] 1024px:rounded-[12px] 1024px:row-[2_/_2] 800px:translate-y-0 800px:row-[8_/_8] 800px:col-[1_/_1] 800px:max-w-[100%] 800px:min-w-[100%] 800px:h-[190px] 600px:p-[8px] 600px:rounded-[9px] 600px:h-[130px]">
                  <div className="flex justify-between relative z-[1]">
                    <p className="text-[#FFFFFF] font-[400] font-monrope text-[12px] leading-[18px] 600px:text-[8px]">02</p>
                    <p className="text-[#FFFFFF] font-monrope font-[400] text-[6px] leading-[8px] vertical_text rotate-[180deg]">A-Z <br />CREATIVE STUDIO</p>
                  </div>
                  <div className="flex flex-col relative z-[1] gap-[16px] 1440px:gap-[10px] 1024px:gap-[3px] 600px:gap-[0]">
                    <svg width="25" height="16" className="1024px:w-[18px] 600px:w-[12px] 600px:h-[12px]" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1446 0.129983C11.1013 0.105876 11.0797 0.0938231 11.0562 0.0853198C11.0354 0.0777683 11.0135 0.0723129 10.9908 0.0690273C10.9653 0.0653274 10.9386 0.0653274 10.8851 0.0653274H9.69609C9.56479 0.0653274 9.49914 0.0653274 9.43756 0.0848466C9.38309 0.10211 9.33117 0.130295 9.28547 0.167404C9.23381 0.209364 9.19357 0.266845 9.11309 0.381809L5.2972 5.83277C5.22992 5.92888 5.19627 5.97694 5.17719 6.02751C5.16029 6.07229 5.15179 6.11832 5.15213 6.16322C5.15252 6.21391 5.16835 6.2623 5.20002 6.35907L5.49289 7.25399C5.58425 7.53314 5.62992 7.67272 5.59256 7.78614C5.55993 7.88518 5.48843 7.97377 5.39485 8.03111C5.28768 8.09677 5.12936 8.09677 4.81272 8.09677H4.07376C3.94246 8.09677 3.87681 8.09677 3.81522 8.11629C3.76076 8.13356 3.70884 8.16174 3.66314 8.19885C3.61148 8.24081 3.57124 8.29829 3.49076 8.41325L1.59488 11.1215C1.39822 11.4024 1.29989 11.5429 1.29578 11.6573C1.2922 11.7571 1.33181 11.8467 1.4052 11.9048C1.48927 11.9713 1.64969 11.9713 1.97053 11.9713H4.19437C4.32117 11.9713 4.38456 11.9713 4.44438 11.9529C4.4973 11.9367 4.54795 11.9101 4.59295 11.8749C4.64381 11.8352 4.68432 11.7806 4.76533 11.6715L6.01219 9.99221C6.0932 9.88311 6.13371 9.82855 6.18457 9.78883C6.22957 9.75369 6.28022 9.72709 6.33314 9.71082C6.39295 9.69244 6.45635 9.69244 6.58314 9.69244H9.65762C9.85617 9.69244 9.95544 9.69244 10.026 9.72982C10.0882 9.76273 10.1349 9.81539 10.1599 9.88068C10.1884 9.95486 10.1758 10.0525 10.1505 10.2477L9.99953 11.416C9.9743 11.6113 9.96168 11.7089 9.99011 11.7831C10.0151 11.8484 10.0619 11.901 10.124 11.9339C10.1946 11.9713 10.2939 11.9713 10.4924 11.9713H22.2848C22.4922 11.9713 22.5958 11.9713 22.6821 11.9316C22.7579 11.8966 22.8245 11.8409 22.8722 11.7723C22.9264 11.6943 22.9445 11.5923 22.9808 11.3882L23.2371 9.94663C23.2734 9.74251 23.2915 9.64045 23.265 9.56249C23.2417 9.49391 23.195 9.43815 23.1316 9.40321C23.0594 9.36348 22.9558 9.36348 22.7485 9.36348H18.8251C18.4441 9.36348 18.2535 9.36349 18.1668 9.28602C18.0913 9.2186 18.0574 9.11607 18.0745 9.00672C18.0941 8.88107 18.2351 8.73094 18.5169 8.43068L24.5555 1.99812C24.6097 1.94045 24.6367 1.91161 24.6579 1.87986C24.6768 1.85169 24.6922 1.82188 24.7037 1.79117C24.7167 1.75656 24.7231 1.72053 24.736 1.64847L24.9165 0.632951C24.9528 0.428831 24.9709 0.326771 24.9444 0.248807C24.9211 0.180228 24.8744 0.124472 24.811 0.0895292C24.7389 0.0498047 24.6352 0.0498047 24.4279 0.0498047H15.7271C15.5197 0.0498047 15.4161 0.0498047 15.3298 0.0895292C15.254 0.124472 15.1874 0.180228 15.1397 0.248807C15.0855 0.326771 15.0674 0.428831 15.0311 0.632952L14.7748 2.07449C14.7385 2.27861 14.7204 2.38067 14.7469 2.45863C14.7702 2.52721 14.8169 2.58297 14.8803 2.61791C14.9525 2.65764 15.0561 2.65764 15.2634 2.65764H19.1868C19.5678 2.65764 19.7584 2.65764 19.8451 2.7351C19.9206 2.80252 19.9545 2.90505 19.9374 3.0144C19.9178 3.14005 19.7768 3.29018 19.495 3.59044L14.5843 8.82149C14.2536 9.17381 14.0882 9.34997 13.9499 9.3795C13.8298 9.40512 13.7143 9.37484 13.6389 9.29801C13.5521 9.20948 13.5585 8.99167 13.5714 8.55605L13.7682 1.89302C13.7714 1.78427 13.773 1.7299 13.7593 1.68235C13.7472 1.64024 13.7263 1.60219 13.6979 1.57026C13.6658 1.5342 13.6207 1.50905 13.5304 1.45875L11.1446 0.129983ZM10.9843 3.34413C11.017 3.34413 11.0395 3.36942 11.0353 3.40159L10.6138 6.66305C10.5863 6.8759 10.5725 6.98233 10.5191 7.06408C10.4722 7.13595 10.4047 7.19487 10.3268 7.2319C10.2382 7.27403 10.13 7.27403 9.91357 7.27403H9.03737C8.7061 7.27403 8.54046 7.27403 8.45581 7.20546C8.38195 7.14563 8.34331 7.05355 8.34935 6.95176C8.35628 6.83511 8.4621 6.69258 8.67376 6.40752L10.9252 3.37514C10.9394 3.356 10.9621 3.34413 10.9843 3.34413Z" fill="#BE2F25" />
                      <path d="M0.976562 12.0965L14.2033 14.9249C14.3915 14.9651 14.5236 14.6906 14.3506 14.6188C14.18 14.548 14.3059 14.2776 14.4934 14.3118L19.9317 15.3057C19.9506 15.3092 19.96 15.3109 19.9696 15.3121C19.9781 15.3132 19.9868 15.3139 19.9954 15.3144C20.0052 15.3149 20.0151 15.3149 20.0349 15.3149H21.7266C21.9848 15.3149 22.1138 15.3149 22.161 15.3035C22.4759 15.2276 22.6221 14.8417 22.4054 14.6584C22.373 14.631 22.2623 14.5825 22.0408 14.4857L20.0529 13.6163C19.9514 13.5719 19.8398 13.7151 19.919 13.7883C19.9891 13.853 19.9081 13.9824 19.8073 13.9667L10.7973 12.5629C10.5442 12.5234 10.3434 12.8511 10.5237 13.0093C10.7033 13.1668 10.505 13.4931 10.2523 13.4561L0.976562 12.0965Z" fill="#BE2F25" />
                    </svg>
                    <p className="text-[#FFFFFF] font-monrope font-[700] text-[28px] leading-[30px] 1440px:text-[19px] 1440px:leading-[19px] 1024px:text-[16px] 600px:text-[10px] 600px:leading-[11px] 600px:w-[47%]">Высокое качество</p>
                  </div>
                  <img src="/assets/svg/alfa.svg" className="absolute top-[0] right-0 w-[100%] h-[100%]" />
                  <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-[20px] mix-blend-overlay opacity-[10%] w-[calc(100%_-_20px)] h-[calc(100%_-_20px)] bg-[#FFFFFF]"></div>
                  <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[calc(100%_-_20px)] 600px:w-[calc(100%_-_10px)] h-[calc(100%_-_20px)] 600px:h-[calc(100%_-_10px)] rounded-[20px] border border-solid border-[#E38A679C] 1024px:rounded-[12px] 600px:rounded-[9px]"></div>
                  <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[calc(100%_-_17px)] 600px:w-[calc(100%_-_8px)] h-[calc(100%_-_17px)] 600px:h-[calc(100%_-_8px)] rounded-[20px] border border-solid border-[#C2412FB8] 1024px:rounded-[12px] 600px:rounded-[9px]"></div>
                </div>
                <div className="max-w-[415px] min-w-[415px] 1440px:translate-x-[41%] 1440px:translate-y-[10px] 1440px:max-w-[315px] 1440px:min-w-[315px] 1440px:h-[135px] w-[100%] translate-x-[34%] h-[176px] rounded-[20px] border border-solid border-[#F1632B] p-[16px] flex flex-col justify-between col-[1_/_1] row-[7_/_7] 1024px:row-[6_/_6] 1024px:translate-x-[31%] 1024px:translate-y-[-80px] 1024px:max-w-[210px] 1024px:min-w-[210px] 1024px:h-[112px] 1024px:rounded-[12px] 800px:min-w-[100%] 800px:max-w-[100%] 800px:translate-x-0 800px:h-[95px] 800px:translate-y-[-41%] 800px:row-[9_/_9] 800px:col-[1_/_1] 600px:h-[65px] 600px:rounded-[9px] 600px:p-[8px] 600px:translate-y-[-20px]">
                  <div className="flex justify-between">
                    <p className="text-[#F1632B] font-[400] font-monrope text-[12px] leading-[18px] 600px:text-[8px]">05</p>
                    <p className="text-[#F1632B] font-monrope font-[400] text-[6px] leading-[8px] vertical_text rotate-[180deg]">A-Z <br />CREATIVE STUDIO</p>
                  </div>
                  <div className="flex flex-col gap-[2px] 1024px:gap-[8px] 1440px:mt-[-10px] 800px:mt-[-30px] 600px:gap-[0] 600px:mt-[-33px]">
                    <svg width="25" height="16" className="1024px:w-[18px] 600px:w-[12px] 600px:h-[12px]" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1446 0.129983C11.1013 0.105876 11.0797 0.0938231 11.0562 0.0853198C11.0354 0.0777683 11.0135 0.0723129 10.9908 0.0690273C10.9653 0.0653274 10.9386 0.0653274 10.8851 0.0653274H9.69609C9.56479 0.0653274 9.49914 0.0653274 9.43756 0.0848466C9.38309 0.10211 9.33117 0.130295 9.28547 0.167404C9.23381 0.209364 9.19357 0.266845 9.11309 0.381809L5.2972 5.83277C5.22992 5.92888 5.19627 5.97694 5.17719 6.02751C5.16029 6.07229 5.15179 6.11832 5.15213 6.16322C5.15252 6.21391 5.16835 6.2623 5.20002 6.35907L5.49289 7.25399C5.58425 7.53314 5.62992 7.67272 5.59256 7.78614C5.55993 7.88518 5.48843 7.97377 5.39485 8.03111C5.28768 8.09677 5.12936 8.09677 4.81272 8.09677H4.07376C3.94246 8.09677 3.87681 8.09677 3.81522 8.11629C3.76076 8.13356 3.70884 8.16174 3.66314 8.19885C3.61148 8.24081 3.57124 8.29829 3.49076 8.41325L1.59488 11.1215C1.39822 11.4024 1.29989 11.5429 1.29578 11.6573C1.2922 11.7571 1.33181 11.8467 1.4052 11.9048C1.48927 11.9713 1.64969 11.9713 1.97053 11.9713H4.19437C4.32117 11.9713 4.38456 11.9713 4.44438 11.9529C4.4973 11.9367 4.54795 11.9101 4.59295 11.8749C4.64381 11.8352 4.68432 11.7806 4.76533 11.6715L6.01219 9.99221C6.0932 9.88311 6.13371 9.82855 6.18457 9.78883C6.22957 9.75369 6.28022 9.72709 6.33314 9.71082C6.39295 9.69244 6.45635 9.69244 6.58314 9.69244H9.65762C9.85617 9.69244 9.95544 9.69244 10.026 9.72982C10.0882 9.76273 10.1349 9.81539 10.1599 9.88068C10.1884 9.95486 10.1758 10.0525 10.1505 10.2477L9.99953 11.416C9.9743 11.6113 9.96168 11.7089 9.99011 11.7831C10.0151 11.8484 10.0619 11.901 10.124 11.9339C10.1946 11.9713 10.2939 11.9713 10.4924 11.9713H22.2848C22.4922 11.9713 22.5958 11.9713 22.6821 11.9316C22.7579 11.8966 22.8245 11.8409 22.8722 11.7723C22.9264 11.6943 22.9445 11.5923 22.9808 11.3882L23.2371 9.94663C23.2734 9.74251 23.2915 9.64045 23.265 9.56249C23.2417 9.49391 23.195 9.43815 23.1316 9.40321C23.0594 9.36348 22.9558 9.36348 22.7485 9.36348H18.8251C18.4441 9.36348 18.2535 9.36349 18.1668 9.28602C18.0913 9.2186 18.0574 9.11607 18.0745 9.00672C18.0941 8.88107 18.2351 8.73094 18.5169 8.43068L24.5555 1.99812C24.6097 1.94045 24.6367 1.91161 24.6579 1.87986C24.6768 1.85169 24.6922 1.82188 24.7037 1.79117C24.7167 1.75656 24.7231 1.72053 24.736 1.64847L24.9165 0.632951C24.9528 0.428831 24.9709 0.326771 24.9444 0.248807C24.9211 0.180228 24.8744 0.124472 24.811 0.0895292C24.7389 0.0498047 24.6352 0.0498047 24.4279 0.0498047H15.7271C15.5197 0.0498047 15.4161 0.0498047 15.3298 0.0895292C15.254 0.124472 15.1874 0.180228 15.1397 0.248807C15.0855 0.326771 15.0674 0.428831 15.0311 0.632952L14.7748 2.07449C14.7385 2.27861 14.7204 2.38067 14.7469 2.45863C14.7702 2.52721 14.8169 2.58297 14.8803 2.61791C14.9525 2.65764 15.0561 2.65764 15.2634 2.65764H19.1868C19.5678 2.65764 19.7584 2.65764 19.8451 2.7351C19.9206 2.80252 19.9545 2.90505 19.9374 3.0144C19.9178 3.14005 19.7768 3.29018 19.495 3.59044L14.5843 8.82149C14.2536 9.17381 14.0882 9.34997 13.9499 9.3795C13.8298 9.40512 13.7143 9.37484 13.6389 9.29801C13.5521 9.20948 13.5585 8.99167 13.5714 8.55605L13.7682 1.89302C13.7714 1.78427 13.773 1.7299 13.7593 1.68235C13.7472 1.64024 13.7263 1.60219 13.6979 1.57026C13.6658 1.5342 13.6207 1.50905 13.5304 1.45875L11.1446 0.129983ZM10.9843 3.34413C11.017 3.34413 11.0395 3.36942 11.0353 3.40159L10.6138 6.66305C10.5863 6.8759 10.5725 6.98233 10.5191 7.06408C10.4722 7.13595 10.4047 7.19487 10.3268 7.2319C10.2382 7.27403 10.13 7.27403 9.91357 7.27403H9.03737C8.7061 7.27403 8.54046 7.27403 8.45581 7.20546C8.38195 7.14563 8.34331 7.05355 8.34935 6.95176C8.35628 6.83511 8.4621 6.69258 8.67376 6.40752L10.9252 3.37514C10.9394 3.356 10.9621 3.34413 10.9843 3.34413Z" fill="#E2E2E2" />
                      <path d="M0.976562 12.0965L14.2033 14.9249C14.3915 14.9651 14.5236 14.6906 14.3506 14.6188C14.18 14.548 14.3059 14.2776 14.4934 14.3118L19.9317 15.3057C19.9506 15.3092 19.96 15.3109 19.9696 15.3121C19.9781 15.3132 19.9868 15.3139 19.9954 15.3144C20.0052 15.3149 20.0151 15.3149 20.0349 15.3149H21.7266C21.9848 15.3149 22.1138 15.3149 22.161 15.3035C22.4759 15.2276 22.6221 14.8417 22.4054 14.6584C22.373 14.631 22.2623 14.5825 22.0408 14.4857L20.0529 13.6163C19.9514 13.5719 19.8398 13.7151 19.919 13.7883C19.9891 13.853 19.9081 13.9824 19.8073 13.9667L10.7973 12.5629C10.5442 12.5234 10.3434 12.8511 10.5237 13.0093C10.7033 13.1668 10.505 13.4931 10.2523 13.4561L0.976562 12.0965Z" fill="#E2E2E2" />
                    </svg>
                    <p className="text-[#F1632B] font-monrope font-[800] text-[40px] leading-[43px] 1440px:text-[22px] 1440px:leading-[27px] 1024px:text-[17px] 1024px:leading-[20px] 1024px:mt-[-10px] 600px:text-[10px] 600px:mt-[0] 600px:leading-[11px]">Команда <span className="font-[200] text-[32px] 1024px:text-[15px] 600px:text-[8px] 1440px:text-[18px] block">профессионалов</span></p>
                  </div>
                </div>
                <div className="max-w-[267px] 1440px:max-w-[210px] 1440px:min-w-[210px] 1440px:h-[390px] translate-y-[-7%] relative overflow-hidden min-w-[267px] w-[100%] h-[488px] rounded-[20px] bg-[linear-gradient(0deg,_#F1632B,_#F1632B),_linear-gradient(181.93deg,_#E13E3E_-11.13%,_#F1632B_367.38%)] p-[16px] pb-[23px] pl-[23px] flex flex-col justify-between col-[2_/_2] row-[8_/_8] 1024px:row-[7_/_7] translate-x-[30%] 1024px:max-w-[160px] 1024px:min-w-[160px] 1024px:translate-x-0 1024px:h-[290px] 1024px:translate-y-[-33%] 1024px:rounded-[12px] 800px:col-[1_/_1] 800px:row-[10_/_10] 800px:translate-y-[-27%] 800px:max-w-[100%] 800px:min-w-[100%] 800px:h-[230px] 600px:p-[8px] 600px:rounded-[9px] 600px:h-[150px] 600px:translate-y-[-20px]">
                  <div className="flex justify-between relative z-[1]">
                    <p className="text-[#FFFFFF] font-[400] font-monrope text-[12px] leading-[18px] 600px:text-[8px]">07</p>
                    <p className="text-[#FFFFFF] font-monrope font-[400] text-[6px] leading-[8px] vertical_text rotate-[180deg]">A-Z <br />CREATIVE STUDIO</p>
                  </div>
                  <div className="flex flex-col relative z-[1] gap-[16px] 1440px:gap-[10px] 1440px:w-[80%] 600px:gap-[0]">
                    <svg width="25" height="16" className="1024px:w-[18px] 600px:w-[12px] 600px:h-[12px]" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1446 0.129983C11.1013 0.105876 11.0797 0.0938231 11.0562 0.0853198C11.0354 0.0777683 11.0135 0.0723129 10.9908 0.0690273C10.9653 0.0653274 10.9386 0.0653274 10.8851 0.0653274H9.69609C9.56479 0.0653274 9.49914 0.0653274 9.43756 0.0848466C9.38309 0.10211 9.33117 0.130295 9.28547 0.167404C9.23381 0.209364 9.19357 0.266845 9.11309 0.381809L5.2972 5.83277C5.22992 5.92888 5.19627 5.97694 5.17719 6.02751C5.16029 6.07229 5.15179 6.11832 5.15213 6.16322C5.15252 6.21391 5.16835 6.2623 5.20002 6.35907L5.49289 7.25399C5.58425 7.53314 5.62992 7.67272 5.59256 7.78614C5.55993 7.88518 5.48843 7.97377 5.39485 8.03111C5.28768 8.09677 5.12936 8.09677 4.81272 8.09677H4.07376C3.94246 8.09677 3.87681 8.09677 3.81522 8.11629C3.76076 8.13356 3.70884 8.16174 3.66314 8.19885C3.61148 8.24081 3.57124 8.29829 3.49076 8.41325L1.59488 11.1215C1.39822 11.4024 1.29989 11.5429 1.29578 11.6573C1.2922 11.7571 1.33181 11.8467 1.4052 11.9048C1.48927 11.9713 1.64969 11.9713 1.97053 11.9713H4.19437C4.32117 11.9713 4.38456 11.9713 4.44438 11.9529C4.4973 11.9367 4.54795 11.9101 4.59295 11.8749C4.64381 11.8352 4.68432 11.7806 4.76533 11.6715L6.01219 9.99221C6.0932 9.88311 6.13371 9.82855 6.18457 9.78883C6.22957 9.75369 6.28022 9.72709 6.33314 9.71082C6.39295 9.69244 6.45635 9.69244 6.58314 9.69244H9.65762C9.85617 9.69244 9.95544 9.69244 10.026 9.72982C10.0882 9.76273 10.1349 9.81539 10.1599 9.88068C10.1884 9.95486 10.1758 10.0525 10.1505 10.2477L9.99953 11.416C9.9743 11.6113 9.96168 11.7089 9.99011 11.7831C10.0151 11.8484 10.0619 11.901 10.124 11.9339C10.1946 11.9713 10.2939 11.9713 10.4924 11.9713H22.2848C22.4922 11.9713 22.5958 11.9713 22.6821 11.9316C22.7579 11.8966 22.8245 11.8409 22.8722 11.7723C22.9264 11.6943 22.9445 11.5923 22.9808 11.3882L23.2371 9.94663C23.2734 9.74251 23.2915 9.64045 23.265 9.56249C23.2417 9.49391 23.195 9.43815 23.1316 9.40321C23.0594 9.36348 22.9558 9.36348 22.7485 9.36348H18.8251C18.4441 9.36348 18.2535 9.36349 18.1668 9.28602C18.0913 9.2186 18.0574 9.11607 18.0745 9.00672C18.0941 8.88107 18.2351 8.73094 18.5169 8.43068L24.5555 1.99812C24.6097 1.94045 24.6367 1.91161 24.6579 1.87986C24.6768 1.85169 24.6922 1.82188 24.7037 1.79117C24.7167 1.75656 24.7231 1.72053 24.736 1.64847L24.9165 0.632951C24.9528 0.428831 24.9709 0.326771 24.9444 0.248807C24.9211 0.180228 24.8744 0.124472 24.811 0.0895292C24.7389 0.0498047 24.6352 0.0498047 24.4279 0.0498047H15.7271C15.5197 0.0498047 15.4161 0.0498047 15.3298 0.0895292C15.254 0.124472 15.1874 0.180228 15.1397 0.248807C15.0855 0.326771 15.0674 0.428831 15.0311 0.632952L14.7748 2.07449C14.7385 2.27861 14.7204 2.38067 14.7469 2.45863C14.7702 2.52721 14.8169 2.58297 14.8803 2.61791C14.9525 2.65764 15.0561 2.65764 15.2634 2.65764H19.1868C19.5678 2.65764 19.7584 2.65764 19.8451 2.7351C19.9206 2.80252 19.9545 2.90505 19.9374 3.0144C19.9178 3.14005 19.7768 3.29018 19.495 3.59044L14.5843 8.82149C14.2536 9.17381 14.0882 9.34997 13.9499 9.3795C13.8298 9.40512 13.7143 9.37484 13.6389 9.29801C13.5521 9.20948 13.5585 8.99167 13.5714 8.55605L13.7682 1.89302C13.7714 1.78427 13.773 1.7299 13.7593 1.68235C13.7472 1.64024 13.7263 1.60219 13.6979 1.57026C13.6658 1.5342 13.6207 1.50905 13.5304 1.45875L11.1446 0.129983ZM10.9843 3.34413C11.017 3.34413 11.0395 3.36942 11.0353 3.40159L10.6138 6.66305C10.5863 6.8759 10.5725 6.98233 10.5191 7.06408C10.4722 7.13595 10.4047 7.19487 10.3268 7.2319C10.2382 7.27403 10.13 7.27403 9.91357 7.27403H9.03737C8.7061 7.27403 8.54046 7.27403 8.45581 7.20546C8.38195 7.14563 8.34331 7.05355 8.34935 6.95176C8.35628 6.83511 8.4621 6.69258 8.67376 6.40752L10.9252 3.37514C10.9394 3.356 10.9621 3.34413 10.9843 3.34413Z" fill="#BE2F25" />
                      <path d="M0.976562 12.0965L14.2033 14.9249C14.3915 14.9651 14.5236 14.6906 14.3506 14.6188C14.18 14.548 14.3059 14.2776 14.4934 14.3118L19.9317 15.3057C19.9506 15.3092 19.96 15.3109 19.9696 15.3121C19.9781 15.3132 19.9868 15.3139 19.9954 15.3144C20.0052 15.3149 20.0151 15.3149 20.0349 15.3149H21.7266C21.9848 15.3149 22.1138 15.3149 22.161 15.3035C22.4759 15.2276 22.6221 14.8417 22.4054 14.6584C22.373 14.631 22.2623 14.5825 22.0408 14.4857L20.0529 13.6163C19.9514 13.5719 19.8398 13.7151 19.919 13.7883C19.9891 13.853 19.9081 13.9824 19.8073 13.9667L10.7973 12.5629C10.5442 12.5234 10.3434 12.8511 10.5237 13.0093C10.7033 13.1668 10.505 13.4931 10.2523 13.4561L0.976562 12.0965Z" fill="#BE2F25" />
                    </svg>
                    <p className="text-[#FFFFFF] font-monrope font-[700] text-[28px] leading-[30px] 1440px:text-[18px] 1440px:leading-[21px] 1024px:text-[16px] 1024px:leading-[17px] 600px:text-[10px] 600px:leading-[11px] 600px:w-[80%]">Без <span className="font-[200]">программных ошибок</span></p>
                  </div>
                  <img src="/assets/svg/alfa.svg" className="absolute top-[0] object-cover object-right right-0 w-[100%] h-[100%]" />
                  <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-[20px] mix-blend-overlay opacity-[10%] w-[calc(100%_-_20px)] h-[calc(100%_-_20px)] bg-[#FFFFFF]"></div>
                  <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[calc(100%_-_20px)] 600px:w-[calc(100%_-_10px)] h-[calc(100%_-_20px)] 600px:h-[calc(100%_-_10px)] rounded-[20px] border border-solid border-[#E38A679C] 1024px:rounded-[12px] 600px:rounded-[9px]"></div>
                  <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[calc(100%_-_17px)] 600px:w-[calc(100%_-_8px)] h-[calc(100%_-_17px)] 600px:h-[calc(100%_-_8px)] rounded-[20px] border border-solid border-[#C2412FB8] 1024px:rounded-[12px] 600px:rounded-[9px]"></div>
                  <div className="absolute z-[2] translate-x-[60%] 1440px:top-[47px] top-[78px] right-0 1024px:translate-x-[48%] 800px:translate-x-[69%]">
                    <img src="/assets/img/laptop.png" className="800px:w-[75%] 600px:w-[65%] z-[3] relative translate-x-[60px] 800px:translate-x-[30px]" />
                    <img src="/assets/img/laptop.png" className="800px:w-[75%] 600px:w-[65%] translate-y-[-60%] translate-x-[30px] 800px:translate-x-[15px] z-[2] relative" />
                    <img src="/assets/img/laptop.png" className="800px:w-[75%] 600px:w-[65%] translate-y-[-120%] z-[1] relative" />
                  </div>
                </div>
                <div className="max-w-[416px] min-w-[416px] 1440px:translate-x-[-18%] 1440px:max-w-[335px] 1440px:min-w-[335px] 1440px:h-[159px] translate-y-[-50%] translate-x-[-11%] w-[100%] h-[214px] rounded-[20px] border border-solid border-[#F1632B] p-[16px] flex flex-col justify-between col-[4_/_4] row-[7_/_7] 1024px:row-[6_/_6] 1024px:max-w-[222px] 1024px:min-w-[222px] 1024px:h-[118px] 1024px:translate-x-[-26%] 1024px:translate-y-[-70%] 1024px:rounded-[12px] 800px:translate-y-[-91%] 800px:max-w-[100%] 800px:min-w-[100%] 800px:col-[2_/_2] 800px:translate-x-0 800px:row-[9_/_9] 800px:h-[95px] 600px:translate-y-[-35px] 600px:h-[65px] 600px:p-[8px] 600px:rounded-[9px]">
                  <div className="flex justify-between">
                    <p className="text-[#F1632B] font-[400] font-monrope text-[12px] leading-[18px] 600px:text-[8px]">04</p>
                    <p className="text-[#F1632B] font-monrope font-[400] text-[6px] leading-[8px] vertical_text rotate-[180deg]">A-Z <br />CREATIVE STUDIO</p>
                  </div>
                  <div className="flex flex-col gap-[2px] 800px:mt-[-15px] 600px:gap-[0] 600px:mt-[-32px]">
                    <svg width="25" height="16" className="1024px:w-[18px] 600px:w-[12px] 600px:h-[12px]" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1446 0.129983C11.1013 0.105876 11.0797 0.0938231 11.0562 0.0853198C11.0354 0.0777683 11.0135 0.0723129 10.9908 0.0690273C10.9653 0.0653274 10.9386 0.0653274 10.8851 0.0653274H9.69609C9.56479 0.0653274 9.49914 0.0653274 9.43756 0.0848466C9.38309 0.10211 9.33117 0.130295 9.28547 0.167404C9.23381 0.209364 9.19357 0.266845 9.11309 0.381809L5.2972 5.83277C5.22992 5.92888 5.19627 5.97694 5.17719 6.02751C5.16029 6.07229 5.15179 6.11832 5.15213 6.16322C5.15252 6.21391 5.16835 6.2623 5.20002 6.35907L5.49289 7.25399C5.58425 7.53314 5.62992 7.67272 5.59256 7.78614C5.55993 7.88518 5.48843 7.97377 5.39485 8.03111C5.28768 8.09677 5.12936 8.09677 4.81272 8.09677H4.07376C3.94246 8.09677 3.87681 8.09677 3.81522 8.11629C3.76076 8.13356 3.70884 8.16174 3.66314 8.19885C3.61148 8.24081 3.57124 8.29829 3.49076 8.41325L1.59488 11.1215C1.39822 11.4024 1.29989 11.5429 1.29578 11.6573C1.2922 11.7571 1.33181 11.8467 1.4052 11.9048C1.48927 11.9713 1.64969 11.9713 1.97053 11.9713H4.19437C4.32117 11.9713 4.38456 11.9713 4.44438 11.9529C4.4973 11.9367 4.54795 11.9101 4.59295 11.8749C4.64381 11.8352 4.68432 11.7806 4.76533 11.6715L6.01219 9.99221C6.0932 9.88311 6.13371 9.82855 6.18457 9.78883C6.22957 9.75369 6.28022 9.72709 6.33314 9.71082C6.39295 9.69244 6.45635 9.69244 6.58314 9.69244H9.65762C9.85617 9.69244 9.95544 9.69244 10.026 9.72982C10.0882 9.76273 10.1349 9.81539 10.1599 9.88068C10.1884 9.95486 10.1758 10.0525 10.1505 10.2477L9.99953 11.416C9.9743 11.6113 9.96168 11.7089 9.99011 11.7831C10.0151 11.8484 10.0619 11.901 10.124 11.9339C10.1946 11.9713 10.2939 11.9713 10.4924 11.9713H22.2848C22.4922 11.9713 22.5958 11.9713 22.6821 11.9316C22.7579 11.8966 22.8245 11.8409 22.8722 11.7723C22.9264 11.6943 22.9445 11.5923 22.9808 11.3882L23.2371 9.94663C23.2734 9.74251 23.2915 9.64045 23.265 9.56249C23.2417 9.49391 23.195 9.43815 23.1316 9.40321C23.0594 9.36348 22.9558 9.36348 22.7485 9.36348H18.8251C18.4441 9.36348 18.2535 9.36349 18.1668 9.28602C18.0913 9.2186 18.0574 9.11607 18.0745 9.00672C18.0941 8.88107 18.2351 8.73094 18.5169 8.43068L24.5555 1.99812C24.6097 1.94045 24.6367 1.91161 24.6579 1.87986C24.6768 1.85169 24.6922 1.82188 24.7037 1.79117C24.7167 1.75656 24.7231 1.72053 24.736 1.64847L24.9165 0.632951C24.9528 0.428831 24.9709 0.326771 24.9444 0.248807C24.9211 0.180228 24.8744 0.124472 24.811 0.0895292C24.7389 0.0498047 24.6352 0.0498047 24.4279 0.0498047H15.7271C15.5197 0.0498047 15.4161 0.0498047 15.3298 0.0895292C15.254 0.124472 15.1874 0.180228 15.1397 0.248807C15.0855 0.326771 15.0674 0.428831 15.0311 0.632952L14.7748 2.07449C14.7385 2.27861 14.7204 2.38067 14.7469 2.45863C14.7702 2.52721 14.8169 2.58297 14.8803 2.61791C14.9525 2.65764 15.0561 2.65764 15.2634 2.65764H19.1868C19.5678 2.65764 19.7584 2.65764 19.8451 2.7351C19.9206 2.80252 19.9545 2.90505 19.9374 3.0144C19.9178 3.14005 19.7768 3.29018 19.495 3.59044L14.5843 8.82149C14.2536 9.17381 14.0882 9.34997 13.9499 9.3795C13.8298 9.40512 13.7143 9.37484 13.6389 9.29801C13.5521 9.20948 13.5585 8.99167 13.5714 8.55605L13.7682 1.89302C13.7714 1.78427 13.773 1.7299 13.7593 1.68235C13.7472 1.64024 13.7263 1.60219 13.6979 1.57026C13.6658 1.5342 13.6207 1.50905 13.5304 1.45875L11.1446 0.129983ZM10.9843 3.34413C11.017 3.34413 11.0395 3.36942 11.0353 3.40159L10.6138 6.66305C10.5863 6.8759 10.5725 6.98233 10.5191 7.06408C10.4722 7.13595 10.4047 7.19487 10.3268 7.2319C10.2382 7.27403 10.13 7.27403 9.91357 7.27403H9.03737C8.7061 7.27403 8.54046 7.27403 8.45581 7.20546C8.38195 7.14563 8.34331 7.05355 8.34935 6.95176C8.35628 6.83511 8.4621 6.69258 8.67376 6.40752L10.9252 3.37514C10.9394 3.356 10.9621 3.34413 10.9843 3.34413Z" fill="#E2E2E2" />
                      <path d="M0.976562 12.0965L14.2033 14.9249C14.3915 14.9651 14.5236 14.6906 14.3506 14.6188C14.18 14.548 14.3059 14.2776 14.4934 14.3118L19.9317 15.3057C19.9506 15.3092 19.96 15.3109 19.9696 15.3121C19.9781 15.3132 19.9868 15.3139 19.9954 15.3144C20.0052 15.3149 20.0151 15.3149 20.0349 15.3149H21.7266C21.9848 15.3149 22.1138 15.3149 22.161 15.3035C22.4759 15.2276 22.6221 14.8417 22.4054 14.6584C22.373 14.631 22.2623 14.5825 22.0408 14.4857L20.0529 13.6163C19.9514 13.5719 19.8398 13.7151 19.919 13.7883C19.9891 13.853 19.9081 13.9824 19.8073 13.9667L10.7973 12.5629C10.5442 12.5234 10.3434 12.8511 10.5237 13.0093C10.7033 13.1668 10.505 13.4931 10.2523 13.4561L0.976562 12.0965Z" fill="#E2E2E2" />
                    </svg>
                    <p className="text-[#F1632B] font-monrope font-[800] text-[28px] leading-[43px] 1440px:text-[20px] 1440px:leading-[27px] 1024px:text-[17px] 800px:text-[14px] 800px:leading-[18px] 600px:text-[10px] 600px:leading-[10px] 600px:w-[80%]">Авторский подход</p>
                  </div>
                </div>
                <div className="max-w-[416px] 1440px:translate-x-[-18%] 1440px:max-w-[335px] 1440px:min-w-[335px] 1440px:h-[310px] relative overflow-hidden min-w-[416px] w-[100%] h-[379px] rounded-[20px] bg-[linear-gradient(0deg,_#F1632B,_#F1632B),_linear-gradient(181.93deg,_#E13E3E_-11.13%,_#F1632B_367.38%)] p-[16px] pb-[23px] pl-[23px] flex flex-col justify-between translate-x-[-11%] translate-y-[-28%] col-[4_/_4] row-[8_/_8] 1024px:row-[7_/_7] 1024px:translate-y-[-43%] 1024px:translate-x-[-26%] 1024px:h-[219px] 1024px:max-w-[222px] 1024px:min-w-[222px] 1024px:rounded-[12px] 800px:col-[2_/_2] 800px:max-w-[100%] 800px:min-w-[100%] 800px:translate-x-0 800px:row-[10_/_10] 800px:translate-y-[-51%] 600px:h-[150px] 600px:translate-y-[-35px] 600px:p-[8px] 600px:rounded-[9px]">
                  <div className="flex justify-between relative z-[1]">
                    <p className="text-[#FFFFFF] font-[400] font-monrope text-[12px] leading-[18px] 600px:text-[8px]">08</p>
                    <p className="text-[#FFFFFF] font-monrope font-[400] text-[6px] leading-[8px] vertical_text rotate-[180deg]">A-Z <br />CREATIVE STUDIO</p>
                  </div>
                  <div className="flex flex-col relative z-[1] gap-[16px] 600px:gap-[0]">
                    <svg width="25" height="16" className="1024px:w-[18px] 600px:w-[12px] 600px:h-[12px]" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1446 0.129983C11.1013 0.105876 11.0797 0.0938231 11.0562 0.0853198C11.0354 0.0777683 11.0135 0.0723129 10.9908 0.0690273C10.9653 0.0653274 10.9386 0.0653274 10.8851 0.0653274H9.69609C9.56479 0.0653274 9.49914 0.0653274 9.43756 0.0848466C9.38309 0.10211 9.33117 0.130295 9.28547 0.167404C9.23381 0.209364 9.19357 0.266845 9.11309 0.381809L5.2972 5.83277C5.22992 5.92888 5.19627 5.97694 5.17719 6.02751C5.16029 6.07229 5.15179 6.11832 5.15213 6.16322C5.15252 6.21391 5.16835 6.2623 5.20002 6.35907L5.49289 7.25399C5.58425 7.53314 5.62992 7.67272 5.59256 7.78614C5.55993 7.88518 5.48843 7.97377 5.39485 8.03111C5.28768 8.09677 5.12936 8.09677 4.81272 8.09677H4.07376C3.94246 8.09677 3.87681 8.09677 3.81522 8.11629C3.76076 8.13356 3.70884 8.16174 3.66314 8.19885C3.61148 8.24081 3.57124 8.29829 3.49076 8.41325L1.59488 11.1215C1.39822 11.4024 1.29989 11.5429 1.29578 11.6573C1.2922 11.7571 1.33181 11.8467 1.4052 11.9048C1.48927 11.9713 1.64969 11.9713 1.97053 11.9713H4.19437C4.32117 11.9713 4.38456 11.9713 4.44438 11.9529C4.4973 11.9367 4.54795 11.9101 4.59295 11.8749C4.64381 11.8352 4.68432 11.7806 4.76533 11.6715L6.01219 9.99221C6.0932 9.88311 6.13371 9.82855 6.18457 9.78883C6.22957 9.75369 6.28022 9.72709 6.33314 9.71082C6.39295 9.69244 6.45635 9.69244 6.58314 9.69244H9.65762C9.85617 9.69244 9.95544 9.69244 10.026 9.72982C10.0882 9.76273 10.1349 9.81539 10.1599 9.88068C10.1884 9.95486 10.1758 10.0525 10.1505 10.2477L9.99953 11.416C9.9743 11.6113 9.96168 11.7089 9.99011 11.7831C10.0151 11.8484 10.0619 11.901 10.124 11.9339C10.1946 11.9713 10.2939 11.9713 10.4924 11.9713H22.2848C22.4922 11.9713 22.5958 11.9713 22.6821 11.9316C22.7579 11.8966 22.8245 11.8409 22.8722 11.7723C22.9264 11.6943 22.9445 11.5923 22.9808 11.3882L23.2371 9.94663C23.2734 9.74251 23.2915 9.64045 23.265 9.56249C23.2417 9.49391 23.195 9.43815 23.1316 9.40321C23.0594 9.36348 22.9558 9.36348 22.7485 9.36348H18.8251C18.4441 9.36348 18.2535 9.36349 18.1668 9.28602C18.0913 9.2186 18.0574 9.11607 18.0745 9.00672C18.0941 8.88107 18.2351 8.73094 18.5169 8.43068L24.5555 1.99812C24.6097 1.94045 24.6367 1.91161 24.6579 1.87986C24.6768 1.85169 24.6922 1.82188 24.7037 1.79117C24.7167 1.75656 24.7231 1.72053 24.736 1.64847L24.9165 0.632951C24.9528 0.428831 24.9709 0.326771 24.9444 0.248807C24.9211 0.180228 24.8744 0.124472 24.811 0.0895292C24.7389 0.0498047 24.6352 0.0498047 24.4279 0.0498047H15.7271C15.5197 0.0498047 15.4161 0.0498047 15.3298 0.0895292C15.254 0.124472 15.1874 0.180228 15.1397 0.248807C15.0855 0.326771 15.0674 0.428831 15.0311 0.632952L14.7748 2.07449C14.7385 2.27861 14.7204 2.38067 14.7469 2.45863C14.7702 2.52721 14.8169 2.58297 14.8803 2.61791C14.9525 2.65764 15.0561 2.65764 15.2634 2.65764H19.1868C19.5678 2.65764 19.7584 2.65764 19.8451 2.7351C19.9206 2.80252 19.9545 2.90505 19.9374 3.0144C19.9178 3.14005 19.7768 3.29018 19.495 3.59044L14.5843 8.82149C14.2536 9.17381 14.0882 9.34997 13.9499 9.3795C13.8298 9.40512 13.7143 9.37484 13.6389 9.29801C13.5521 9.20948 13.5585 8.99167 13.5714 8.55605L13.7682 1.89302C13.7714 1.78427 13.773 1.7299 13.7593 1.68235C13.7472 1.64024 13.7263 1.60219 13.6979 1.57026C13.6658 1.5342 13.6207 1.50905 13.5304 1.45875L11.1446 0.129983ZM10.9843 3.34413C11.017 3.34413 11.0395 3.36942 11.0353 3.40159L10.6138 6.66305C10.5863 6.8759 10.5725 6.98233 10.5191 7.06408C10.4722 7.13595 10.4047 7.19487 10.3268 7.2319C10.2382 7.27403 10.13 7.27403 9.91357 7.27403H9.03737C8.7061 7.27403 8.54046 7.27403 8.45581 7.20546C8.38195 7.14563 8.34331 7.05355 8.34935 6.95176C8.35628 6.83511 8.4621 6.69258 8.67376 6.40752L10.9252 3.37514C10.9394 3.356 10.9621 3.34413 10.9843 3.34413Z" fill="#BE2F25" />
                      <path d="M0.976562 12.0965L14.2033 14.9249C14.3915 14.9651 14.5236 14.6906 14.3506 14.6188C14.18 14.548 14.3059 14.2776 14.4934 14.3118L19.9317 15.3057C19.9506 15.3092 19.96 15.3109 19.9696 15.3121C19.9781 15.3132 19.9868 15.3139 19.9954 15.3144C20.0052 15.3149 20.0151 15.3149 20.0349 15.3149H21.7266C21.9848 15.3149 22.1138 15.3149 22.161 15.3035C22.4759 15.2276 22.6221 14.8417 22.4054 14.6584C22.373 14.631 22.2623 14.5825 22.0408 14.4857L20.0529 13.6163C19.9514 13.5719 19.8398 13.7151 19.919 13.7883C19.9891 13.853 19.9081 13.9824 19.8073 13.9667L10.7973 12.5629C10.5442 12.5234 10.3434 12.8511 10.5237 13.0093C10.7033 13.1668 10.505 13.4931 10.2523 13.4561L0.976562 12.0965Z" fill="#BE2F25" />
                    </svg>
                    <p className="text-[#FFFFFF] font-monrope font-[700] text-[32px] leading-[39px] 1440px:text-[23px] 1440px:leading-[23px] 1024px:text-[16px] 1024px:leading-[17px] 800px:text-[12px] 800px:leading-[14px] 600px:text-[10px] 600px:leading-[11px]">Ультрасовременный стиль</p>
                  </div>
                  <img src="/assets/svg/alfa.svg" className="absolute top-[0] object-cover object-left right-0 w-[100%] h-[100%]" />
                  <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-[20px] mix-blend-overlay opacity-[10%] w-[calc(100%_-_20px)] h-[calc(100%_-_20px)] bg-[#FFFFFF]"></div>
                  <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[calc(100%_-_20px)] 600px:w-[calc(100%_-_10px)] h-[calc(100%_-_20px)] 600px:h-[calc(100%_-_10px)] rounded-[20px] border border-solid border-[#E38A679C] 1024px:rounded-[12px] 600px:rounded-[9px]"></div>
                  <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[calc(100%_-_17px)] 600px:w-[calc(100%_-_8px)] h-[calc(100%_-_17px)] 600px:h-[calc(100%_-_8px)] rounded-[20px] border border-solid border-[#C2412FB8] 1024px:rounded-[12px] 600px:rounded-[9px]"></div>
                </div>
                <div className="max-w-[267px] 1440px:translate-x-[-55px] 1440px:max-w-[250px] 1440px:h-[398px] translate-y-[-85%] translate-x-[-25px] relative overflow-hidden min-w-[267px] w-[100%] h-[488px] rounded-[20px] bg-[linear-gradient(0deg,_#F1632B,_#F1632B),_linear-gradient(181.93deg,_#E13E3E_-11.13%,_#F1632B_367.38%)] p-[16px] pb-[23px] pl-[23px] flex flex-col justify-between col-[6_/_6] row-[8_/_8] 1024px:row-[7_/_7] 1024px:rounded-[12px] 1024px:max-w-[222px] 1024px:min-w-[222px] 1024px:h-[300px] 1024px:translate-y-[-103%] 800px:row-[8_/_8] 800px:h-[230px] 800px:translate-x-0 800px:translate-y-[50px] 800px:max-w-[100%] 800px:min-w-[100%] 800px:col-[3_/_3] 600px:rounded-[9px] 600px:p-[8px] 600px:h-[150px] 600px:translate-y-[35px]">
                  <div className="flex justify-between relative z-[1]">
                    <p className="text-[#FFFFFF] font-[400] font-monrope text-[12px] leading-[18px] 600px:text-[8px]">06</p>
                    <p className="text-[#FFFFFF] font-monrope font-[400] text-[6px] leading-[8px] vertical_text rotate-[180deg]">A-Z <br />CREATIVE STUDIO</p>
                  </div>
                  <div className="flex flex-col relative z-[1] gap-[16px] 600px:gap-[0]">
                    <svg width="25" height="16" className="1024px:w-[18px] 600px:w-[12px] 600px:h-[12px]" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1446 0.129983C11.1013 0.105876 11.0797 0.0938231 11.0562 0.0853198C11.0354 0.0777683 11.0135 0.0723129 10.9908 0.0690273C10.9653 0.0653274 10.9386 0.0653274 10.8851 0.0653274H9.69609C9.56479 0.0653274 9.49914 0.0653274 9.43756 0.0848466C9.38309 0.10211 9.33117 0.130295 9.28547 0.167404C9.23381 0.209364 9.19357 0.266845 9.11309 0.381809L5.2972 5.83277C5.22992 5.92888 5.19627 5.97694 5.17719 6.02751C5.16029 6.07229 5.15179 6.11832 5.15213 6.16322C5.15252 6.21391 5.16835 6.2623 5.20002 6.35907L5.49289 7.25399C5.58425 7.53314 5.62992 7.67272 5.59256 7.78614C5.55993 7.88518 5.48843 7.97377 5.39485 8.03111C5.28768 8.09677 5.12936 8.09677 4.81272 8.09677H4.07376C3.94246 8.09677 3.87681 8.09677 3.81522 8.11629C3.76076 8.13356 3.70884 8.16174 3.66314 8.19885C3.61148 8.24081 3.57124 8.29829 3.49076 8.41325L1.59488 11.1215C1.39822 11.4024 1.29989 11.5429 1.29578 11.6573C1.2922 11.7571 1.33181 11.8467 1.4052 11.9048C1.48927 11.9713 1.64969 11.9713 1.97053 11.9713H4.19437C4.32117 11.9713 4.38456 11.9713 4.44438 11.9529C4.4973 11.9367 4.54795 11.9101 4.59295 11.8749C4.64381 11.8352 4.68432 11.7806 4.76533 11.6715L6.01219 9.99221C6.0932 9.88311 6.13371 9.82855 6.18457 9.78883C6.22957 9.75369 6.28022 9.72709 6.33314 9.71082C6.39295 9.69244 6.45635 9.69244 6.58314 9.69244H9.65762C9.85617 9.69244 9.95544 9.69244 10.026 9.72982C10.0882 9.76273 10.1349 9.81539 10.1599 9.88068C10.1884 9.95486 10.1758 10.0525 10.1505 10.2477L9.99953 11.416C9.9743 11.6113 9.96168 11.7089 9.99011 11.7831C10.0151 11.8484 10.0619 11.901 10.124 11.9339C10.1946 11.9713 10.2939 11.9713 10.4924 11.9713H22.2848C22.4922 11.9713 22.5958 11.9713 22.6821 11.9316C22.7579 11.8966 22.8245 11.8409 22.8722 11.7723C22.9264 11.6943 22.9445 11.5923 22.9808 11.3882L23.2371 9.94663C23.2734 9.74251 23.2915 9.64045 23.265 9.56249C23.2417 9.49391 23.195 9.43815 23.1316 9.40321C23.0594 9.36348 22.9558 9.36348 22.7485 9.36348H18.8251C18.4441 9.36348 18.2535 9.36349 18.1668 9.28602C18.0913 9.2186 18.0574 9.11607 18.0745 9.00672C18.0941 8.88107 18.2351 8.73094 18.5169 8.43068L24.5555 1.99812C24.6097 1.94045 24.6367 1.91161 24.6579 1.87986C24.6768 1.85169 24.6922 1.82188 24.7037 1.79117C24.7167 1.75656 24.7231 1.72053 24.736 1.64847L24.9165 0.632951C24.9528 0.428831 24.9709 0.326771 24.9444 0.248807C24.9211 0.180228 24.8744 0.124472 24.811 0.0895292C24.7389 0.0498047 24.6352 0.0498047 24.4279 0.0498047H15.7271C15.5197 0.0498047 15.4161 0.0498047 15.3298 0.0895292C15.254 0.124472 15.1874 0.180228 15.1397 0.248807C15.0855 0.326771 15.0674 0.428831 15.0311 0.632952L14.7748 2.07449C14.7385 2.27861 14.7204 2.38067 14.7469 2.45863C14.7702 2.52721 14.8169 2.58297 14.8803 2.61791C14.9525 2.65764 15.0561 2.65764 15.2634 2.65764H19.1868C19.5678 2.65764 19.7584 2.65764 19.8451 2.7351C19.9206 2.80252 19.9545 2.90505 19.9374 3.0144C19.9178 3.14005 19.7768 3.29018 19.495 3.59044L14.5843 8.82149C14.2536 9.17381 14.0882 9.34997 13.9499 9.3795C13.8298 9.40512 13.7143 9.37484 13.6389 9.29801C13.5521 9.20948 13.5585 8.99167 13.5714 8.55605L13.7682 1.89302C13.7714 1.78427 13.773 1.7299 13.7593 1.68235C13.7472 1.64024 13.7263 1.60219 13.6979 1.57026C13.6658 1.5342 13.6207 1.50905 13.5304 1.45875L11.1446 0.129983ZM10.9843 3.34413C11.017 3.34413 11.0395 3.36942 11.0353 3.40159L10.6138 6.66305C10.5863 6.8759 10.5725 6.98233 10.5191 7.06408C10.4722 7.13595 10.4047 7.19487 10.3268 7.2319C10.2382 7.27403 10.13 7.27403 9.91357 7.27403H9.03737C8.7061 7.27403 8.54046 7.27403 8.45581 7.20546C8.38195 7.14563 8.34331 7.05355 8.34935 6.95176C8.35628 6.83511 8.4621 6.69258 8.67376 6.40752L10.9252 3.37514C10.9394 3.356 10.9621 3.34413 10.9843 3.34413Z" fill="#BE2F25" />
                      <path d="M0.976562 12.0965L14.2033 14.9249C14.3915 14.9651 14.5236 14.6906 14.3506 14.6188C14.18 14.548 14.3059 14.2776 14.4934 14.3118L19.9317 15.3057C19.9506 15.3092 19.96 15.3109 19.9696 15.3121C19.9781 15.3132 19.9868 15.3139 19.9954 15.3144C20.0052 15.3149 20.0151 15.3149 20.0349 15.3149H21.7266C21.9848 15.3149 22.1138 15.3149 22.161 15.3035C22.4759 15.2276 22.6221 14.8417 22.4054 14.6584C22.373 14.631 22.2623 14.5825 22.0408 14.4857L20.0529 13.6163C19.9514 13.5719 19.8398 13.7151 19.919 13.7883C19.9891 13.853 19.9081 13.9824 19.8073 13.9667L10.7973 12.5629C10.5442 12.5234 10.3434 12.8511 10.5237 13.0093C10.7033 13.1668 10.505 13.4931 10.2523 13.4561L0.976562 12.0965Z" fill="#BE2F25" />
                    </svg>
                    <p className="text-[#FFFFFF] font-monrope font-[700] text-[28px] leading-[30px] 1440px:text-[22px] 1440px:leading-[26px] 1440px:w-[65%] 1024px:text-[16px] 1024px:leading-[18px] 600px:text-[10px] 600px:leading-[10px]">Бизнес и маркетинг</p>
                  </div>
                  <img src="/assets/svg/alfa.svg" className="absolute top-[0] object-cover object-left right-0 w-[100%] h-[100%]" />
                  <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-[20px] mix-blend-overlay opacity-[10%] w-[calc(100%_-_20px)] h-[calc(100%_-_20px)] bg-[#FFFFFF]"></div>
                  <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[calc(100%_-_20px)] 600px:w-[calc(100%_-_10px)] h-[calc(100%_-_20px)] 600px:h-[calc(100%_-_10px)] rounded-[20px] border border-solid border-[#E38A679C] 1024px:rounded-[12px] 600px:rounded-[9px]"></div>
                  <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[calc(100%_-_17px)] 600px:w-[calc(100%_-_8px)] h-[calc(100%_-_17px)] 600px:h-[calc(100%_-_8px)] rounded-[20px] border border-solid border-[#C2412FB8] 1024px:rounded-[12px] 600px:rounded-[9px]"></div>
                  <img src="/assets/img/laptop_line.png" className="absolute top-[107px] right-0 1440px:w-[66%] 1024px:w-[55%] 1024px:top-[80px] 600px:w-[40%] 600px:top-[62px]" />
                </div>

                <div className="max-w-[416px] 1440px:translate-x-[-55px] 1440px:max-w-[250px] 1440px:min-w-[250px] 1440px:h-[180px] min-w-[416px] translate-x-[-5%] translate-y-[45%] w-[100%] h-[234px] rounded-[20px] border border-solid border-[#F1632B] p-[16px] flex flex-col justify-between col-[6_/_6] row-[8_/_8] 1024px:row-[7_/_7] 1024px:rounded-[12px] 1024px:h-[118px] 1024px:translate-y-[11%] 800px:col-[3_/_3] 800px:row-[9_/_9] 800px:translate-y-[41%] 800px:max-w-[100%] 800px:min-w-[100%] 800px:translate-x-0 600px:h-[65px] 600px:rounded-[9px] 600px:p-[8px] 600px:translate-y-[35px]">
                  <div className="flex justify-between">
                    <p className="text-[#F1632B] font-[400] font-monrope text-[12px] leading-[18px] 600px:text-[8px]">09</p>
                    <p className="text-[#F1632B] font-monrope font-[400] text-[6px] leading-[8px] vertical_text rotate-[180deg]">A-Z <br />CREATIVE STUDIO</p>
                  </div>
                  <div className="flex flex-col gap-[2px] 1024px:mt-[-10px] 600px:gap-[0] 600px:mt-[-30px]">
                    <svg width="25" height="16" className="1024px:w-[18px] 600px:w-[12px] 600px:h-[12px]" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1446 0.129983C11.1013 0.105876 11.0797 0.0938231 11.0562 0.0853198C11.0354 0.0777683 11.0135 0.0723129 10.9908 0.0690273C10.9653 0.0653274 10.9386 0.0653274 10.8851 0.0653274H9.69609C9.56479 0.0653274 9.49914 0.0653274 9.43756 0.0848466C9.38309 0.10211 9.33117 0.130295 9.28547 0.167404C9.23381 0.209364 9.19357 0.266845 9.11309 0.381809L5.2972 5.83277C5.22992 5.92888 5.19627 5.97694 5.17719 6.02751C5.16029 6.07229 5.15179 6.11832 5.15213 6.16322C5.15252 6.21391 5.16835 6.2623 5.20002 6.35907L5.49289 7.25399C5.58425 7.53314 5.62992 7.67272 5.59256 7.78614C5.55993 7.88518 5.48843 7.97377 5.39485 8.03111C5.28768 8.09677 5.12936 8.09677 4.81272 8.09677H4.07376C3.94246 8.09677 3.87681 8.09677 3.81522 8.11629C3.76076 8.13356 3.70884 8.16174 3.66314 8.19885C3.61148 8.24081 3.57124 8.29829 3.49076 8.41325L1.59488 11.1215C1.39822 11.4024 1.29989 11.5429 1.29578 11.6573C1.2922 11.7571 1.33181 11.8467 1.4052 11.9048C1.48927 11.9713 1.64969 11.9713 1.97053 11.9713H4.19437C4.32117 11.9713 4.38456 11.9713 4.44438 11.9529C4.4973 11.9367 4.54795 11.9101 4.59295 11.8749C4.64381 11.8352 4.68432 11.7806 4.76533 11.6715L6.01219 9.99221C6.0932 9.88311 6.13371 9.82855 6.18457 9.78883C6.22957 9.75369 6.28022 9.72709 6.33314 9.71082C6.39295 9.69244 6.45635 9.69244 6.58314 9.69244H9.65762C9.85617 9.69244 9.95544 9.69244 10.026 9.72982C10.0882 9.76273 10.1349 9.81539 10.1599 9.88068C10.1884 9.95486 10.1758 10.0525 10.1505 10.2477L9.99953 11.416C9.9743 11.6113 9.96168 11.7089 9.99011 11.7831C10.0151 11.8484 10.0619 11.901 10.124 11.9339C10.1946 11.9713 10.2939 11.9713 10.4924 11.9713H22.2848C22.4922 11.9713 22.5958 11.9713 22.6821 11.9316C22.7579 11.8966 22.8245 11.8409 22.8722 11.7723C22.9264 11.6943 22.9445 11.5923 22.9808 11.3882L23.2371 9.94663C23.2734 9.74251 23.2915 9.64045 23.265 9.56249C23.2417 9.49391 23.195 9.43815 23.1316 9.40321C23.0594 9.36348 22.9558 9.36348 22.7485 9.36348H18.8251C18.4441 9.36348 18.2535 9.36349 18.1668 9.28602C18.0913 9.2186 18.0574 9.11607 18.0745 9.00672C18.0941 8.88107 18.2351 8.73094 18.5169 8.43068L24.5555 1.99812C24.6097 1.94045 24.6367 1.91161 24.6579 1.87986C24.6768 1.85169 24.6922 1.82188 24.7037 1.79117C24.7167 1.75656 24.7231 1.72053 24.736 1.64847L24.9165 0.632951C24.9528 0.428831 24.9709 0.326771 24.9444 0.248807C24.9211 0.180228 24.8744 0.124472 24.811 0.0895292C24.7389 0.0498047 24.6352 0.0498047 24.4279 0.0498047H15.7271C15.5197 0.0498047 15.4161 0.0498047 15.3298 0.0895292C15.254 0.124472 15.1874 0.180228 15.1397 0.248807C15.0855 0.326771 15.0674 0.428831 15.0311 0.632952L14.7748 2.07449C14.7385 2.27861 14.7204 2.38067 14.7469 2.45863C14.7702 2.52721 14.8169 2.58297 14.8803 2.61791C14.9525 2.65764 15.0561 2.65764 15.2634 2.65764H19.1868C19.5678 2.65764 19.7584 2.65764 19.8451 2.7351C19.9206 2.80252 19.9545 2.90505 19.9374 3.0144C19.9178 3.14005 19.7768 3.29018 19.495 3.59044L14.5843 8.82149C14.2536 9.17381 14.0882 9.34997 13.9499 9.3795C13.8298 9.40512 13.7143 9.37484 13.6389 9.29801C13.5521 9.20948 13.5585 8.99167 13.5714 8.55605L13.7682 1.89302C13.7714 1.78427 13.773 1.7299 13.7593 1.68235C13.7472 1.64024 13.7263 1.60219 13.6979 1.57026C13.6658 1.5342 13.6207 1.50905 13.5304 1.45875L11.1446 0.129983ZM10.9843 3.34413C11.017 3.34413 11.0395 3.36942 11.0353 3.40159L10.6138 6.66305C10.5863 6.8759 10.5725 6.98233 10.5191 7.06408C10.4722 7.13595 10.4047 7.19487 10.3268 7.2319C10.2382 7.27403 10.13 7.27403 9.91357 7.27403H9.03737C8.7061 7.27403 8.54046 7.27403 8.45581 7.20546C8.38195 7.14563 8.34331 7.05355 8.34935 6.95176C8.35628 6.83511 8.4621 6.69258 8.67376 6.40752L10.9252 3.37514C10.9394 3.356 10.9621 3.34413 10.9843 3.34413Z" fill="#E2E2E2" />
                      <path d="M0.976562 12.0965L14.2033 14.9249C14.3915 14.9651 14.5236 14.6906 14.3506 14.6188C14.18 14.548 14.3059 14.2776 14.4934 14.3118L19.9317 15.3057C19.9506 15.3092 19.96 15.3109 19.9696 15.3121C19.9781 15.3132 19.9868 15.3139 19.9954 15.3144C20.0052 15.3149 20.0151 15.3149 20.0349 15.3149H21.7266C21.9848 15.3149 22.1138 15.3149 22.161 15.3035C22.4759 15.2276 22.6221 14.8417 22.4054 14.6584C22.373 14.631 22.2623 14.5825 22.0408 14.4857L20.0529 13.6163C19.9514 13.5719 19.8398 13.7151 19.919 13.7883C19.9891 13.853 19.9081 13.9824 19.8073 13.9667L10.7973 12.5629C10.5442 12.5234 10.3434 12.8511 10.5237 13.0093C10.7033 13.1668 10.505 13.4931 10.2523 13.4561L0.976562 12.0965Z" fill="#E2E2E2" />
                    </svg>
                    <p className="text-[#F1632B] font-monrope font-[800] text-[28px] leading-[30px] 1440px:text-[22px] 1440px:leading-[22px] 1024px:text-[17px] 1024px:leading-[18px] 600px:text-[10px] 600px:leading-[10px]">Сверхскорость <span className="block font-[200]">при работе</span> </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-[137px] 1440px:mt-[60px] max-w-[1289px] w-[100%] 1200px:max-w-[1024px] relative mx-auto 1200px:mt-[0] 1024px:max-w-[800px] 800px:mt-[-100px] 800px:max-w-[600px] 600px:max-w-[375px]">
              <img src="/assets/img/peaples.png" className="w-[100%] h-[750px] 1200px:object-cover 1024px:object-contain 1024px:h-[502px] 600px:h-[230px]" />
              <div className="absolute bottom-[-150px] right-[0] 1200px:bottom-0 1024px:right-[68px] 1024px:bottom-[10px] 800px:right-[9px] 600px:bottom-[-50px] 600px:right-[-9px]">
                <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.16517 0.817535H4.29478L2.12581 3.91589L2.46243 4.94449H1.40575L0.0120304 6.9354H1.83248L2.70192 5.7644H4.7509L4.59956 6.9354L11.2536 6.93541L11.4918 5.59539H8.56313L12.191 1.73084L12.3548 0.80957H7.27517L7.03694 2.1496H9.9656L6.45077 5.89376L6.57745 1.60413L5.16517 0.817535ZM5.17248 2.50234L4.9115 4.52171H3.62459L5.12394 2.50234H5.17248Z" fill="#F1632B" />
                  <path d="M0 6.99975L7.73384 8.65351L6.13578 7.99008L9.76595 8.65351H11.7981L9.48974 7.64395L9.8646 7.99008L4.55744 7.1632L5.24796 7.76894L0 6.99975Z" fill="#F1632B" />
                </svg>
                <p className="mt-[6px] mb-[60px] font-[800] text-[44px] leading-[44px] font-monrope tracking-[-0.04em] uppercase max-w-[712px] w-[100%] 1440px:max-w-[506px] 1440px:mb-[28px] 1440px:text-[30px] 1440px:leading-[35px] 1024px:text-[18px] 1024px:leading-[23px] 1024px:max-w-[331px] 600px:text-[8px] 600px:leading-[10px] 600px:max-w-[147px] 600px:mb-[10px]">К каждому клиенту применяется <span className="text-[#F1632B]">индивидуальный подход</span> И ПРОФЕССИОНАЛЬНОЕ <span className="text-[#F1632B]">ИСПОЛНЕНИЕ</span> <span className="text-[#B1B6B8]">Среди широкого разнообразия всех проектов</span> </p>
                <div className="rounded-[20px] relative max-w-[336px] flex items-center w-[100%] h-[70px] before:content-[''] before:absolute before:top-0 before:left-0 before:w-[100%] before:h-[100%] before:bg-[#F84A20] before:rounded-[20px] before:z-[-1] before:shadow-[7.22px_7.22px_28.89px_0px_#FFFFFF4D_inset,-7.22px_-7.22px_28.89px_0px_#FFFFFF4D_inset,0px_0.72px_0px_0px_#E07258] after:content-[''] after:absolute after:top-[4px] after:left-0 after:w-[100%] after:h-[100%] after:bg-[#B96652] after:shadow-[0px_10.11px_1.95px_-10.11px_#050505E5,0px_13px_6.43px_-9.39px_#05050540,0px_18.78px_11.48px_-11.55px_#05050540,0px_-20.22px_0.87px_-20.22px_#05050580_inset,0px_-20.94px_2.67px_-20.22px_#0505053D_inset,-20.22px_-10.83px_2.67px_-20.22px_#D98774_inset,20.22px_-10.83px_2.67px_-20.22px_#D98774_inset] after:z-[-2] after:rounded-[20px] 1024px:max-w-[247px] 1024px:h-[55px] 600px:max-w-[174px] 600px:before:rounded-[12px] 600px:after:rounded-[12px] 600px:h-[45px] 600px:min-w-[174px]">
                  <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[calc(100%_-_8px)] h-[calc(100%_-_8px)] opacity-[30%] mix-blend-overlay border-[0.67px] border-solid border-[#000000] rounded-[20px] z-[-1] 600px:rounded-[12px]"></div>
                  <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[calc(100%_-_8px)] h-[calc(100%_-_8px)] opacity-[30%] mix-blend-overlay border-[0.67px] border-solid border-[#FFFFFF] rounded-[20px] z-[-1] 600px:rounded-[12px]"></div>
                  <img src="/assets/img/button_fon.png" className="opacity-[7%] object-cover border-[0.67px] border-solid border-[#FFFFFF] mix-blend-plus-lighter absolute w-[calc(100%_-_18px)] m-[9px] h-[calc(100%_-_18px)] top-0 left-0 rounded-[20px] z-[-1] 600px:rounded-[12px]" />
                  <img src="/assets/img/paper.png" className="w-[91px] mb-[39px] ml-[13px] h-[87px] rounded-[20px] object-cover object-top 1024px:w-[65px] 1024px:h-[61px] 1024px:mb-[10px] 600px:w-[42px] 600px:h-[37px] 600px:mb-[6px] 600px:ml-[9px]" />
                  <p className=" drop-shadow-[0px_0.67px_0px_#00000026] font-monrope font-[500] text-[16px] leading-[19px] text-[#FFFFFF] mr-[11px] ml-[8px] 1024px:text-[12px] 600px:text-[8px] 600px:leading-[9px] 600px:ml-[3px] 600px:mr-[8px]">Написать в телеграм</p>
                  <svg width="10" height="10" className="600px:w-[7px] self-start mt-[20px] 600px:mt-[12px]" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_737_3905)">
                      <path d="M4.88672 5.13439V1.37207H7.57409" stroke="white" stroke-width="0.501642" />
                      <path d="M6.35555 3.62891H9.49081V8.64533H0.962891V3.62891H3.59651" stroke="white" stroke-width="0.501642" />
                      <path d="M6.7243 0.307926L7.78844 1.37207L6.7243 2.43621" stroke="white" stroke-width="0.501642" />
                    </g>
                    <defs>
                      <filter id="filter0_d_737_3905" x="0.712891" y="0.130859" width="9.0293" height="9.4353" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="0.669677" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_737_3905" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_737_3905" result="shape" />
                      </filter>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex relative 1440px:gap-[65px] justify-center mt-[450px] max-w-[1600px] min-w-[1600px] w-[100%] 1600px:max-w-[1440px] 1600px:min-w-[1440px] 1440px:max-w-[1200px] 1440px:min-w-[1200px] 1200px:mt-[120px] 1200px:max-w-[1024px] 1200px:min-w-[1024px] 1024px:max-w-[800px] 1024px:justify-start 800px:max-w-[600px] 800px:min-w-[600px] 800px:flex-col 800px:mx-auto 800px:gap-[22px] 600px:max-w-[375px] 600px:min-w-[375px] 600px:gap-[0]">
              <svg width="1540" height="1103" className="absolute 800px:h-[489px] 800px:w-[569px] top-[-100px] left-[-100px] z-[-1] 1024px:w-[772px] 1024px:h-[626px] 1200px:w-[1023px] 1200px:h-[822px] 600px:w-[326px]" viewBox="0 0 1540 1103" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M540.246 1.73905H419.214L117.606 437.028L164.415 581.537H17.4774L-176.327 861.242H76.8165L197.717 696.728H482.639L461.595 861.242L1386.87 861.244L1420 672.982H1012.75L1517.23 130.05L1540 0.620117H833.653L800.526 188.882H1207.77L719.016 714.901L736.632 112.248L540.246 1.73905ZM541.263 238.438L504.972 522.141H326.02L534.513 238.438H541.263Z" fill="#F8F8F8" />
                <path d="M-178 870.282L897.435 1102.62L675.215 1009.41L1180.01 1102.62H1462.59L1141.6 960.786L1193.73 1009.41L455.739 893.245L551.76 978.346L-178 870.282Z" fill="#F8F8F8" />
              </svg>
              <div className="1440px:w-[32%] 1200px:w-[50%] 1024px:w-[40%] 800px:w-[67%] 800px:mx-auto 800px:h-[337px] relative">
                <div className="flex flex-col gap-[10px] absolute top-[50%] right-[40px] 1440px:right-[-10px]">
                  <p className="text-[#ACACAC] font-[400] font-monrope text-[16px] leading-[24px] tracking-[-0.04em] max-w-[70px] w-[100%] 1440px:text-[14px] 1440px:leading-[18px] 600px:text-[10px] 600px:leading-[12px]">Закиров Ахрорбек</p>
                  <img src="/assets/img/signature.png" className="w-[63px] 1440px:w-[43px] 1440px:h-[56px] h-[76px] 600px:w-[23px] 600px:h-[36px]" />
                </div>
                <img src="/assets/img/boss.png" className="w-[100%] h-[100%] 800px:object-cover 800px:object-top" />
              </div>
              <div>
                <p className="font-[800] translate-x-[-150px] 1024px:text-[18px] 1024px:leading-[22px] 1024px:max-w-[275px] 1440px:text-[30px] 1440px:leading-[38px] 1440px:max-w-[519px] uppercase text-[44px] leading-[53px] tracking-[-0.04em] text-[#2A2A3C] max-w-[672px] w-[100%] 1200px:max-w-[367px] 1200px:text-[24px] 1200px:leading-[29px] 1024px:translate-x-[-90px] 800px:text-center 800px:mx-auto 800px:translate-x-0 600px:text-[12px] 600px:leading-[13px]"><span className="text-[#F1632B]">Креативный директор</span> маркетингового агентства a-z CREATIVITY STUDIO
                  <span className="inline-flex ml-[20px] 1024px:ml-[10px] 600px:ml-[5px]">
                    <svg width="39" height="26" className="1024px:w-[28px] 1024px:h-[20px] 600px:h-[13px] 600px:w-[21px]" viewBox="0 0 39 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M16.3048 0.0595637H13.5572L6.7105 9.93455L7.7731 13.2129H4.4375L0.037976 19.5583H5.78454L8.52909 15.8261H14.9971L14.5193 19.5583L35.5239 19.5583L36.2759 15.2874H27.031L38.483 2.97042L39 0.0341797H22.9654L22.2134 4.30508H31.4582L20.363 16.2384L20.7629 2.56656L16.3048 0.0595637ZM16.3279 5.42932L15.504 11.8654H11.4417L16.1746 5.42932H16.3279Z" fill="#F1632B" />
                      <path d="M0 19.7633L24.4133 25.0342L19.3687 22.9197L30.828 25.0342H37.2427L29.9561 21.8165L31.1394 22.9197L14.3864 20.2843L16.5661 22.2149L0 19.7633Z" fill="#F1632B" />
                    </svg>
                  </span>
                </p>
                <p className="font-[800] text-[44px] 1440px:text-[30px] 1024px:text-[18px] 1024px:leading-[22px] 1024px:max-w-[276px] 1440px:leading-[38px] 1440px:max-w-[577px] uppercase text-[#2A2A3C] leading-[53px] tracking-[-0.04em] max-w-[756px] w-[100%] 1200px:max-w-[440px] 1200px:text-[24px] 1200px:leading-[29px] 800px:mx-auto 800px:text-center 800px:max-w-[332px] 600px:text-[12px] 600px:leading-[13px]"><span className="text-[#ACACAC]">Наша команда специалистов разработает сайтЫ, которые обеспечиВАЮТ</span> высокий уровень конверсии и поможет превратить посетителей в клиентов.</p>
                <div className="mt-[36px] 1440px:mt-[16px] 1024px:mt-[5px]">
                  <div className="flex items-center gap-[30px] 800px:gap-[10px] 800px:max-w-[50%] 800px:mx-auto">
                    <p className="text-[#ACACAC] font-[400] whitespace-nowrap font-monrope text-[16px] leading-[24px] tracking-[-0.04em] 1024px:text-[12px] 600px:text-[10px] 600px:leading-[13px]">О нас</p>
                    <div className="bg-[#ACACAC] w-[100%] h-[1px]"></div>
                  </div>
                  <div className="flex gap-[32px] mt-[36px] 1440px:mt-[16px] 1024px:mt-[5px] 1024px:flex-col 1024px:gap-[10px] 600px:gap-[5px] 1024px:w-[300px] 800px:mx-auto 800px:max-w-[328px]">
                    <p className="max-w-[266px] w-[100%] text-[#2A2A3C] font-[400] font-monrope 1024px:text-[10px] 1024px:leading-[15px] 800px:text-center text-[18px] leading-[26px] tracking-[-0.04em] 1440px:text-[14px] 1440px:leading-[20px] 1024px:max-w-[100%] 600px:text-[8px] 600px:leading-[9px] 1440px:max-w-[214px]">Мы придаем большое значение созданию уникального и привлекательного дизайна, который поможет вашей компании выделиться на рынке и запомниться потенциальным клиентам.</p>
                    <p className="max-w-[415px] w-[100%] text-[#2A2A3C] font-[400] font-monrope 1024px:text-[10px] 1024px:leading-[15px] 800px:text-center text-[18px] leading-[26px] tracking-[-0.04em] 1440px:text-[14px] 1440px:leading-[20px] 1024px:max-w-[100%] 600px:text-[8px] 600px:leading-[9px] 1440px:max-w-[357px] 1200px:max-w-[200px]">Сайт будет не только функциональным, но и эстетически привлекательным – каждая деталь будет продумана с учетом ваших индивидуальных потребностей и бизнес-целей.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex [&>div:first-child>div:first-child]:rounded-l-[64px] 600px:[&>div:first-child>div:first-child]:rounded-l-[20px] 1024px:[&>div:first-child>div:first-child]:rounded-l-[44px] [&>div:last-child>div:first-child]:rounded-r-[64px] 600px:[&>div:last-child>div:first-child]:rounded-r-[20px] 1024px:[&>div:last-child>div:first-child]:rounded-r-[44px] items-center justify-center gap-[6px] gap-y-[32px] max-w-[calc(100%_-_164px)] min-w-[calc(100%_-_164px)] mx-auto flex-wrap 1440px:mt-[100px] 1200px:mt-[0] 1024px:mt-[-63px] 800px:mt-[20px] 600px:mt-[30px] 600px:gap-y-[16px] 425px:min-w-[calc(100%_-_120px)] 425px:min-w-[calc(100%_-_120px)]">
              <Employes imgSrc={"/assets/img/Rahimov_nabi.jpg"} title="Фатима Закирова" subTitle="Менеджер проектов" />
              <Employes imgSrc={"/assets/img/Rahimov_nabi.jpg"} title="Фатима Закирова" subTitle="Менеджер проектов" />
              <Employes imgSrc={"/assets/img/Rahimov_nabi.jpg"} title="Фатима Закирова" subTitle="Менеджер проектов" />
              <Employes imgSrc={"/assets/img/Rahimov_nabi.jpg"} title="Фатима Закирова" subTitle="Менеджер проектов" />
              <Employes imgSrc={"/assets/img/Rahimov_nabi.jpg"} title="Фатима Закирова" subTitle="Менеджер проектов" />
              <Employes imgSrc={"/assets/img/Rahimov_nabi.jpg"} title="Фатима Закирова" subTitle="Менеджер проектов" />
              <Employes imgSrc={"/assets/img/Rahimov_nabi.jpg"} title="Фатима Закирова" subTitle="Менеджер проектов" />
            </div>
          </section>

          <section className="bg-[#E23E3D] overflow-hidden mt-[100px] 600px:mt-[50px]">
            <section className="relative mb-[-360px] 1600px:mb-[-483px] translate-y-[-200px] 1440px:translate-y-[-290px] 1440px:mb-[-575px]">
              <img src="/assets/img/sun_fon.png" className="absolute top-[0] left-[0] w-[100%] h-[2207px]" />
              <h6 className="text-[#F9F9F908] font-monrope font-[800] text-[339px] leading-[268px] tracking-[-0.03em] z-[1] absolute top-[50%] left-[0] 1440px:text-[222px] 800px:text-[165px] 800px:leading-[165px]">CREATIVITY STUD  IO</h6>
              <h6 className="text-[#F9F9F908] font-monrope font-[800] text-[517px] leading-[707px] tracking-[-0.03em] z-[1] absolute top-[20%] left-[0] 1440px:text-[318px] 800px:text-[165px] 800px:leading-[165px] 800px:top-[33%]">DIGITAL</h6>
              <div className="max-w-[1600px] w-[100%] mx-auto 1600px:max-w-[1440px] 1440px:max-w-[1200px] 1024px:max-w-[800px] 800px:max-w-[600px] 600px:max-w-[425px]">
                <div className="relative w-[100%] h-[2207px] 800px:h-[1996px]">
                  <img src="/assets/img/sun.png" className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[1] 1440px:max-w-[800px] 1440px:w-[100%] 800px:max-w-[425px] 600px:max-w-[375px]" />
                  <img src="/assets/img/planet_1.png" className="z-[3] absolute bottom-[700px] left-[0] max-w-[369px] min-w-[369px] w-[100%] 1600px:left-[-75px] 1440px:max-w-[269px] 1440px:min-w-[269px] 1440px:left-[-32px] 1200px:left-[-68px] 1024px:left-[-199px] 1024px:bottom-[675px] 600px:max-w-[150px] 600px:min-w-[150px] 600px:left-[-45px]" />

                  <div className="flex flex-col gap-[17px] absolute bottom-[400px] right-[250px] 1440px:right-[190px] 1200px:gap-[10px] 1024px:right-[360px] 800px:right-[0] 800px:bottom-[513px] 600px:right-[50%] 600px:bottom-[740px] 600px:z-[2]">
                    <svg width="43" height="44" className="1200px:w-[25px]" viewBox="0 0 43 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.343 43.1318V26.7888H0V16.8696H16.343V0.621094H26.2622V16.8696H42.5107V26.7888H26.2622V43.1318H16.343Z" fill="white" />
                    </svg>
                    <svg width="45" height="46" className="1200px:w-[25px]" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.843 44.1318V44.6318H17.343H27.2622H27.7622V44.1318V28.2888H43.5107H44.0107V27.7888V17.8696V17.3696H43.5107H27.7622V1.62109V1.12109H27.2622H17.343H16.843V1.62109V17.3696H1H0.5V17.8696V27.7888V28.2888H1H16.843V44.1318Z" stroke="white" />
                    </svg>
                  </div>

                  <div className="absolute top-[1000px] left-[350px] z-[1] 1200px:left-[147px] 1024px:left-[4px]">
                    <button className="w-[21px] h-[21px] rounded-[50%] bg-[#FFFFFF] flex items-center justify-center">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.92695 0.228516L4.92695 9.45352M9.53945 4.84101L0.314453 4.84102" stroke="#2A2A3C" />
                      </svg>
                    </button>
                    <div className="w-[33px] h-[33px] rounded-[50%] border border-solid border-[#FFFFFF] opacity-[40%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></div>
                    <div className="w-[54px] h-[54px] rounded-[50%] border border-solid border-[#FFFFFF] opacity-[30%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></div>
                    <div className="w-[94px] h-[94px] rounded-[50%] border border-solid border-[#FFFFFF] opacity-[10%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></div>
                  </div>

                  <div className="z-[3] absolute top-[600px] right-[200px] 1024px:top-[606px] 1024px:right-[50px] 600px:top-[700px] 600px:right-[0]">
                    <img src="/assets/img/planet_3.png" className="w-[154px] h-[156px] 600px:w-[120px] 600px:h-[120px]" />
                    <div className="absolute bottom-[20px] right-[20px]">
                      <button className="w-[21px] 600px:w-[15px] 600px:h-[15px] h-[21px] rounded-[50%] bg-[#FFFFFF] flex items-center justify-center">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4.92695 0.228516L4.92695 9.45352M9.53945 4.84101L0.314453 4.84102" stroke="#2A2A3C" />
                        </svg>
                      </button>
                      <div className="w-[33px] 600px:w-[22px] h-[33px] 600px:h-[22px] rounded-[50%] border border-solid border-[#FFFFFF] opacity-[40%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></div>
                      <div className="w-[54px] 600px:w-[44px] h-[54px] 600px:h-[44px] rounded-[50%] border border-solid border-[#FFFFFF] opacity-[30%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></div>
                      <div className="w-[94px] 600px:w-[66px] h-[94px] 600px:h-[66px] rounded-[50%] border border-solid border-[#FFFFFF] opacity-[10%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></div>
                    </div>
                  </div>
                  <div className="z-[3] absolute bottom-[700px] right-[100px] 1024px:right-[0] 600px:bottom-[780px]">
                    <img src="/assets/img/planet_2.png" className="w-[187px] h-[188px] 1440px:w-[130px] 1440px:h-[130px] 600px:w-[80px] 600px:h-[80px]" />
                    <div className="absolute bottom-[20px] right-[20px]">
                      <button className="w-[21px] 600px:w-[15px] 600px:h-[15px] h-[21px] rounded-[50%] bg-[#FFFFFF] flex items-center justify-center">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4.92695 0.228516L4.92695 9.45352M9.53945 4.84101L0.314453 4.84102" stroke="#2A2A3C" />
                        </svg>
                      </button>
                      <div className="w-[33px] 600px:w-[22px] h-[33px] 600px:h-[22px] rounded-[50%] border border-solid border-[#FFFFFF] opacity-[40%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></div>
                      <div className="w-[54px] 600px:w-[44px] h-[54px] 600px:h-[44px] rounded-[50%] border border-solid border-[#FFFFFF] opacity-[30%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></div>
                      <div className="w-[94px] 600px:w-[66px] h-[94px] 600px:h-[66px] rounded-[50%] border border-solid border-[#FFFFFF] opacity-[10%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></div>
                    </div>
                  </div>

                  <div className="absolute top-[400px] left-[100px]">
                    <p className="text-[#FFFFFF] font-[800] font-monrope text-[56px] leading-[58px] tracking-[-0.04em] uppercase max-w-[410px] w-[100%] mb-[23px] 1440px:mb-[11px] 1440px:text-[40px] 1440px:leading-[46px] 1440px:max-w-[194px] 1024px:text-[28px] 1024px:leading-[32px]">как у нас <span className="font-[200]">устроена работа</span></p>
                    <p className="text-[#FFFFFF] font-monrope font-[400] text-[18px] leading-[23px] tracking-[-0.01em] max-w-[289px] w-[100%] mb-[48px] 1440px:text-[16px] 1440px:max-w-[256px] 1024px:text-[14px] 1024px:leading-[19px] 1024px:mb-[20px]">Дизайн и код — это полдела. Вторая половина — коммуникация и процессы</p>
                    <button className="max-w-[311px] min-w-[311px] w-[100%] h-[54px] relative flex items-center justify-center gap-[8px] 1440px:max-w-[245px] 1440px:min-w-[245px]">
                      <svg width="312" height="55" className="absolute top-[0] left-[0] w-[100%] h-[100%]" viewBox="0 0 312 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.16991 16.8757C1.56995 13.0742 1.86569 10.275 2.41092 8.10263C2.95105 5.95057 3.72521 4.46248 5.05541 3.26491C6.38122 2.0713 7.99662 1.45481 10.316 1.14172C12.653 0.826253 15.6457 0.825195 19.7025 0.825195H291.751C295.807 0.825195 298.8 0.826253 301.137 1.14172C303.456 1.45481 305.072 2.0713 306.398 3.26491C307.728 4.46247 308.502 5.95056 309.042 8.10262C309.587 10.275 309.883 13.0742 310.283 16.8757C310.674 20.5863 310.953 24.3777 310.953 27.6237C310.953 30.8696 310.674 34.661 310.283 38.3717C309.883 42.1731 309.587 44.9723 309.042 47.1447C308.502 49.2968 307.728 50.7849 306.398 51.9824C305.072 53.176 303.456 53.7925 301.137 54.1056C298.8 54.4211 295.807 54.4221 291.751 54.4221H19.7025C15.6457 54.4221 12.653 54.4211 10.316 54.1056C7.99662 53.7925 6.38122 53.176 5.05541 51.9824C3.72521 50.7849 2.95105 49.2968 2.41092 47.1447C1.86569 44.9723 1.56995 42.1731 1.16991 38.3716C0.779429 34.661 0.5 30.8696 0.5 27.6237C0.5 24.3777 0.779429 20.5863 1.16991 16.8757Z" stroke="#FF9862" />
                      </svg>
                      <img src="/assets/img/human.png" className="w-[66px] h-[79px] object-cover object-top rounded-[20px] mb-[27px] relative z-[1] 1440px:w-[50px] 1440px:h-[59px] 1440px:mb-[17px]" />
                      <svg width="23" height="19" className="1440px:w-[18px]" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.06608 8.17702C7.93952 5.55802 11.8536 3.83171 13.813 2.99639C19.4067 0.613643 20.5692 0.200206 21.3286 0.186706C21.4942 0.183331 21.8661 0.225518 22.1083 0.426331C22.3114 0.595081 22.3676 0.824581 22.3942 0.984893C22.4208 1.14521 22.4551 1.51139 22.4286 1.79658C22.1255 5.05852 20.813 12.9729 20.1473 16.6246C19.863 18.1704 19.3083 18.6885 18.7692 18.7408C17.6005 18.8505 16.7114 17.9476 15.5786 17.1883C13.8051 15.9986 12.8036 15.2578 11.0833 14.0968C9.09421 12.7535 10.3833 12.0161 11.5176 10.8112C11.8145 10.4956 16.9676 5.69639 17.0676 5.25933C17.0801 5.20533 17.0911 5.00283 16.9739 4.89652C16.8567 4.78852 16.6817 4.82564 16.5567 4.85433C16.3786 4.89652 13.5473 6.81183 8.05983 10.6053C7.25671 11.1706 6.52858 11.4457 5.87546 11.4322C5.15671 11.4153 3.7739 11.0137 2.74421 10.6728C1.48327 10.251 0.481708 10.0316 0.567646 9.31777C0.614521 8.94652 1.11452 8.56683 2.06765 8.17702H2.06608Z" fill="white" />
                      </svg>
                      <p className="text-[#FFFFFF] font-inter font-[400] text-[16px] leading-[19px] 1440px:text-[12px]">Написать в телеграм</p>
                    </button>
                    <svg width="28" height="28" className="mt-[47px] 1024px:mt-[29px] 800px:w-[18px]" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.4286 27.3832V16.9546H0V10.6251H10.4286V0.256836H16.7581V10.6251H27.1264V16.9546H16.7581V27.3832H10.4286Z" fill="white" />
                    </svg>
                    <svg width="28" height="28" className="mt-[32px] 800px:w-[18px] 800px:mt-[18px]" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.4286 27.3832V16.9546H0V10.6251H10.4286V0.256836H16.7581V10.6251H27.1264V16.9546H16.7581V27.3832H10.4286Z" fill="white" />
                    </svg>
                  </div>

                  <div className="absolute top-[1150px] left-[300px] w-[368px] rounded-[20px] z-[99] p-[28px] 1440px:w-[331px] 1440px:left-[186px] 1200px:left-[142px] 1024px:left-[67px] 1024px:top-[1402px] 800px:p-[10px] 800px:w-[268px] 800px:left-[15px] 800px:top-[1238px] 600px:left-[0] 600px:max-w-[223px] 425px:max-w-[50%]">
                    <img src="/assets/img/card_fon.png" className="w-[100%] h-[100%] absolute top-[0] left-[0] z-[-1]" />
                    <div className="mb-[20px] 425px:mb-[10px]">
                      <p className="text-[#FFFFFF] font-monrope font-[400] text-[12px] leading-[18px] mb-[17px]">03</p>
                      <p className="vertical_text rotate-[180deg] text-[#FFFFFF] font-[400] font-monrope text-[6px] leading-[6px] absolute top-[28px] right-[28px] 800px:top-[10px] 800px:right-[10px]">A-Z <br /> CREATIVE STUDIO</p>
                      <div className="relative max-w-[234px] min-w-[234px] w-[100%] h-[70px] flex items-center pl-[19px] pr-[27px] ml-auto mb-[16px] mr-[25px] 800px:pr-[69px] 800px:mr-[0] 800px:ml-[59px] 800px:h-[53px] 600px:ml-[11px] 425px:max-w-[167px] 425px:pr-[51px] 425px:pl-[7px] 425px:ml-[31px] 425px:min-w-[167px] 425px:h-[38px] 425px:mb-[10px]">
                        <p className="text-[#3A3F51] font-inter font-[400] text-[12px] leading-[14px] 800px:text-[8px] 800px:leading-[9px] 425px:text-[7px]">Привет, A-Z creative studio! Не успеваем сегодня выйти на созвон</p>
                        <img src="/assets/svg/white_message.svg" className="absolute top-[0] left-[0] z-[-1] 800px:w-[79%]" />
                      </div>
                      <div className="relative max-w-[312px] w-[100%] min-w-[312px] h-[73px] pl-[36px] flex items-center pr-[20px] 1440px:pl-[27px] 1440px:pr-[40px] 1440px:pb-[5px] 425px:pl-[19px] 800px:max-w-[100%] 800px:min-w-[100%] 800px:pb-[12px] 800px:pr-[8px] 600px:pb-[22px] 425px:pb-[0] 425px:h-[39px]">
                        <p className="text-[#FFFFFF] font-inter font-[400] text-[12px] leading-[14px] 800px:text-[8px] 800px:leading-[12px] 425px:text-[7px] 425px:leading-[9px]">Добрый день! Ничего страшного, наш дизайнер записал для вас видео, в котором рассказал про новые макеты</p>
                        <img src="/assets/svg/message.svg" className="absolute top-[0] left-[0] z-[-1] 1440px:w-[88%] 800px:w-[100%]" />
                      </div>
                    </div>
                    <div>
                      <svg width="21" height="13" viewBox="0 0 21 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.05995 0.296732C9.02524 0.277396 9.00788 0.267728 8.98905 0.260908C8.97232 0.254851 8.95476 0.250475 8.93658 0.24784C8.91612 0.244872 8.89466 0.244872 8.85175 0.244872H7.8981C7.79279 0.244872 7.74013 0.244872 7.69073 0.260528C7.64705 0.274375 7.6054 0.296982 7.56875 0.326747C7.52731 0.360402 7.49503 0.406507 7.43048 0.498717L4.36982 4.87085C4.31585 4.94794 4.28886 4.98649 4.27356 5.02705C4.26 5.06297 4.25319 5.09989 4.25346 5.1359C4.25377 5.17656 4.26647 5.21537 4.29187 5.29299L4.52678 6.01079C4.60005 6.23469 4.63669 6.34665 4.60672 6.43762C4.58055 6.51706 4.5232 6.58812 4.44814 6.63411C4.36218 6.68678 4.2352 6.68678 3.98122 6.68678H3.38851C3.2832 6.68678 3.23054 6.68678 3.18114 6.70243C3.13746 6.71628 3.09581 6.73889 3.05916 6.76865C3.01772 6.80231 2.98545 6.84841 2.92089 6.94062L1.40024 9.11287C1.2425 9.33819 1.16363 9.45085 1.16034 9.54259C1.15746 9.62269 1.18924 9.69457 1.2481 9.74114C1.31553 9.79449 1.44421 9.79449 1.70155 9.79449H3.48525C3.58695 9.79449 3.6378 9.79449 3.68578 9.77974C3.72823 9.76669 3.76885 9.74536 3.80494 9.71717C3.84574 9.68531 3.87823 9.64155 3.94321 9.55404L4.9433 8.20708C5.00828 8.11957 5.04076 8.07581 5.08156 8.04395C5.11765 8.01576 5.15828 7.99443 5.20072 7.98138C5.2487 7.96663 5.29955 7.96663 5.40125 7.96663H7.86725C8.0265 7.96663 8.10612 7.96663 8.16275 7.99662C8.21259 8.02302 8.25007 8.06525 8.27015 8.11762C8.29295 8.17712 8.28283 8.25542 8.26259 8.41204L8.14149 9.34908C8.12124 9.5057 8.11112 9.584 8.13393 9.6435C8.154 9.69587 8.19148 9.73811 8.24132 9.7645C8.29795 9.79449 8.37758 9.79449 8.53683 9.79449H17.9954C18.1616 9.79449 18.2448 9.79449 18.314 9.76263C18.3748 9.7346 18.4282 9.68988 18.4664 9.63487C18.5099 9.57234 18.5245 9.49048 18.5536 9.32675L18.7591 8.17052C18.7882 8.0068 18.8028 7.92494 18.7815 7.8624C18.7629 7.8074 18.7254 7.76267 18.6745 7.73465C18.6166 7.70279 18.5335 7.70279 18.3672 7.70279H15.2204C14.9147 7.70279 14.7619 7.70279 14.6923 7.64065C14.6318 7.58658 14.6046 7.50434 14.6183 7.41663C14.6341 7.31584 14.7471 7.19543 14.9732 6.9546L19.8166 1.79514C19.86 1.74888 19.8818 1.72575 19.8988 1.70029C19.9139 1.67769 19.9262 1.65378 19.9355 1.62915C19.9459 1.60139 19.9511 1.57249 19.9614 1.51468L20.1062 0.700155C20.1353 0.536433 20.1498 0.454572 20.1286 0.392039C20.1099 0.337033 20.0724 0.292311 20.0215 0.264284C19.9637 0.232422 19.8805 0.232422 19.7142 0.232422H12.7354C12.5692 0.232422 12.486 0.232422 12.4168 0.264284C12.356 0.292311 12.3026 0.337033 12.2644 0.392039C12.2209 0.454572 12.2063 0.536433 12.1772 0.700155L11.9717 1.85639C11.9426 2.02011 11.928 2.10197 11.9493 2.16451C11.9679 2.21951 12.0054 2.26423 12.0563 2.29226C12.1142 2.32412 12.1973 2.32412 12.3636 2.32412H15.5104C15.8161 2.32412 15.9689 2.32412 16.0385 2.38626C16.099 2.44033 16.1262 2.52257 16.1125 2.61028C16.0967 2.71107 15.9837 2.83148 15.7576 3.07231L11.8189 7.26806C11.5536 7.55065 11.4209 7.69194 11.31 7.71563C11.2137 7.73618 11.121 7.71189 11.0606 7.65027C10.9909 7.57926 10.9961 7.40456 11.0064 7.05516L11.1643 1.71084C11.1668 1.62361 11.1681 1.58 11.1571 1.54186C11.1474 1.50808 11.1307 1.47757 11.1079 1.45196C11.0822 1.42303 11.0459 1.40286 10.9735 1.36252L9.05995 0.296732ZM8.93136 2.87475C8.9576 2.87475 8.9756 2.89503 8.97227 2.92084L8.63418 5.53681C8.61212 5.70753 8.60108 5.7929 8.55825 5.85847C8.5206 5.91611 8.46643 5.96337 8.40398 5.99308C8.33294 6.02687 8.24614 6.02687 8.07253 6.02687H7.36975C7.10404 6.02687 6.97119 6.02687 6.90329 5.97187C6.84405 5.92388 6.81305 5.85002 6.8179 5.76838C6.82346 5.67481 6.90834 5.56049 7.0781 5.33185L8.88397 2.89963C8.89538 2.88427 8.91351 2.87475 8.93136 2.87475Z" fill="white" fill-opacity="0.42" />
                        <path d="M0.904297 9.89491L11.5133 12.1635C11.6642 12.1958 11.7701 11.9756 11.6314 11.918C11.4946 11.8612 11.5956 11.6443 11.746 11.6718L16.108 12.469C16.1231 12.4717 16.1307 12.4731 16.1383 12.4741C16.1452 12.4749 16.1521 12.4756 16.1591 12.4759C16.1669 12.4763 16.1748 12.4763 16.1907 12.4763H17.5476C17.7547 12.4763 17.8582 12.4763 17.896 12.4672C18.1486 12.4063 18.2659 12.0968 18.0921 11.9498C18.066 11.9278 17.9772 11.8889 17.7996 11.8112L16.2052 11.1139C16.1237 11.0783 16.0342 11.1932 16.0977 11.2518C16.154 11.3038 16.089 11.4075 16.0082 11.3949L8.78139 10.269C8.57833 10.2373 8.41727 10.5001 8.56194 10.627C8.70595 10.7534 8.54693 11.0151 8.34419 10.9854L0.904297 9.89491Z" fill="white" fill-opacity="0.42" />
                      </svg>
                      <p className="text-[#FFFFFF] font-inter font-[600] text-[20px] leading-[21px] my-[14px] 1440px:text-[16px] 1200px:text-[14px]">Мы всегда на связи</p>
                      <p className="text-[#FFFFFFAD] font-monrope font-[400] text-[14px] leading-[18px] tracking-[-0.01em] 1200px:text-[11px]">Вы можете задавать вопросы через Телеграм, и мы оперативно и конкретно на них отвечаем. Также мы готовы провести звонок в удобное для вас время. А если у вас совсем нет времени, мы можем подготовить видео, где расскажем всё необходимое.</p>
                    </div>
                  </div>


                  <div className="absolute top-[1400px] right-[380px] w-[446px] rounded-[20px] z-[99] p-[28px] 1600px:right-[306px] 1440px:max-w-[325px] 1440px:right-[263px] 1200px:right-[221px] 1024px:right-[70px] 1024px:max-w-[280px] 800px:p-[10px] 800px:max-w-[224px] 800px:top-[1238px] 600px:right-[0] 600px:max-w-[197px] 425px:max-w-[50%]">
                    <img src="/assets/img/card_fon.png" className="w-[100%] h-[100%] absolute top-[0] left-[0] z-[-1]" />
                    <div className="mb-[20px]">
                      <p className="text-[#FFFFFF] font-monrope font-[400] text-[12px] leading-[18px] mb-[17px]">04</p>
                      <p className="vertical_text rotate-[180deg] text-[#FFFFFF] font-[400] font-monrope text-[6px] leading-[6px] absolute top-[28px] right-[28px] 800px:right-[10px] 800px:top-[10px]">A-Z <br /> CREATIVE STUDIO</p>
                      <img src="/assets/svg/drow.svg" className="1440px:w-[92%]" />
                    </div>
                    <div className="800px:[&_br]:hidden">
                      <svg width="21" height="13" viewBox="0 0 21 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.05995 0.296732C9.02524 0.277396 9.00788 0.267728 8.98905 0.260908C8.97232 0.254851 8.95476 0.250475 8.93658 0.24784C8.91612 0.244872 8.89466 0.244872 8.85175 0.244872H7.8981C7.79279 0.244872 7.74013 0.244872 7.69073 0.260528C7.64705 0.274375 7.6054 0.296982 7.56875 0.326747C7.52731 0.360402 7.49503 0.406507 7.43048 0.498717L4.36982 4.87085C4.31585 4.94794 4.28886 4.98649 4.27356 5.02705C4.26 5.06297 4.25319 5.09989 4.25346 5.1359C4.25377 5.17656 4.26647 5.21537 4.29187 5.29299L4.52678 6.01079C4.60005 6.23469 4.63669 6.34665 4.60672 6.43762C4.58055 6.51706 4.5232 6.58812 4.44814 6.63411C4.36218 6.68678 4.2352 6.68678 3.98122 6.68678H3.38851C3.2832 6.68678 3.23054 6.68678 3.18114 6.70243C3.13746 6.71628 3.09581 6.73889 3.05916 6.76865C3.01772 6.80231 2.98545 6.84841 2.92089 6.94062L1.40024 9.11287C1.2425 9.33819 1.16363 9.45085 1.16034 9.54259C1.15746 9.62269 1.18924 9.69457 1.2481 9.74114C1.31553 9.79449 1.44421 9.79449 1.70155 9.79449H3.48525C3.58695 9.79449 3.6378 9.79449 3.68578 9.77974C3.72823 9.76669 3.76885 9.74536 3.80494 9.71717C3.84574 9.68531 3.87823 9.64155 3.94321 9.55404L4.9433 8.20708C5.00828 8.11957 5.04076 8.07581 5.08156 8.04395C5.11765 8.01576 5.15828 7.99443 5.20072 7.98138C5.2487 7.96663 5.29955 7.96663 5.40125 7.96663H7.86725C8.0265 7.96663 8.10612 7.96663 8.16275 7.99662C8.21259 8.02302 8.25007 8.06525 8.27015 8.11762C8.29295 8.17712 8.28283 8.25542 8.26259 8.41204L8.14149 9.34908C8.12124 9.5057 8.11112 9.584 8.13393 9.6435C8.154 9.69587 8.19148 9.73811 8.24132 9.7645C8.29795 9.79449 8.37758 9.79449 8.53683 9.79449H17.9954C18.1616 9.79449 18.2448 9.79449 18.314 9.76263C18.3748 9.7346 18.4282 9.68988 18.4664 9.63487C18.5099 9.57234 18.5245 9.49048 18.5536 9.32675L18.7591 8.17052C18.7882 8.0068 18.8028 7.92494 18.7815 7.8624C18.7629 7.8074 18.7254 7.76267 18.6745 7.73465C18.6166 7.70279 18.5335 7.70279 18.3672 7.70279H15.2204C14.9147 7.70279 14.7619 7.70279 14.6923 7.64065C14.6318 7.58658 14.6046 7.50434 14.6183 7.41663C14.6341 7.31584 14.7471 7.19543 14.9732 6.9546L19.8166 1.79514C19.86 1.74888 19.8818 1.72575 19.8988 1.70029C19.9139 1.67769 19.9262 1.65378 19.9355 1.62915C19.9459 1.60139 19.9511 1.57249 19.9614 1.51468L20.1062 0.700155C20.1353 0.536433 20.1498 0.454572 20.1286 0.392039C20.1099 0.337033 20.0724 0.292311 20.0215 0.264284C19.9637 0.232422 19.8805 0.232422 19.7142 0.232422H12.7354C12.5692 0.232422 12.486 0.232422 12.4168 0.264284C12.356 0.292311 12.3026 0.337033 12.2644 0.392039C12.2209 0.454572 12.2063 0.536433 12.1772 0.700155L11.9717 1.85639C11.9426 2.02011 11.928 2.10197 11.9493 2.16451C11.9679 2.21951 12.0054 2.26423 12.0563 2.29226C12.1142 2.32412 12.1973 2.32412 12.3636 2.32412H15.5104C15.8161 2.32412 15.9689 2.32412 16.0385 2.38626C16.099 2.44033 16.1262 2.52257 16.1125 2.61028C16.0967 2.71107 15.9837 2.83148 15.7576 3.07231L11.8189 7.26806C11.5536 7.55065 11.4209 7.69194 11.31 7.71563C11.2137 7.73618 11.121 7.71189 11.0606 7.65027C10.9909 7.57926 10.9961 7.40456 11.0064 7.05516L11.1643 1.71084C11.1668 1.62361 11.1681 1.58 11.1571 1.54186C11.1474 1.50808 11.1307 1.47757 11.1079 1.45196C11.0822 1.42303 11.0459 1.40286 10.9735 1.36252L9.05995 0.296732ZM8.93136 2.87475C8.9576 2.87475 8.9756 2.89503 8.97227 2.92084L8.63418 5.53681C8.61212 5.70753 8.60108 5.7929 8.55825 5.85847C8.5206 5.91611 8.46643 5.96337 8.40398 5.99308C8.33294 6.02687 8.24614 6.02687 8.07253 6.02687H7.36975C7.10404 6.02687 6.97119 6.02687 6.90329 5.97187C6.84405 5.92388 6.81305 5.85002 6.8179 5.76838C6.82346 5.67481 6.90834 5.56049 7.0781 5.33185L8.88397 2.89963C8.89538 2.88427 8.91351 2.87475 8.93136 2.87475Z" fill="white" fill-opacity="0.42" />
                        <path d="M0.904297 9.89491L11.5133 12.1635C11.6642 12.1958 11.7701 11.9756 11.6314 11.918C11.4946 11.8612 11.5956 11.6443 11.746 11.6718L16.108 12.469C16.1231 12.4717 16.1307 12.4731 16.1383 12.4741C16.1452 12.4749 16.1521 12.4756 16.1591 12.4759C16.1669 12.4763 16.1748 12.4763 16.1907 12.4763H17.5476C17.7547 12.4763 17.8582 12.4763 17.896 12.4672C18.1486 12.4063 18.2659 12.0968 18.0921 11.9498C18.066 11.9278 17.9772 11.8889 17.7996 11.8112L16.2052 11.1139C16.1237 11.0783 16.0342 11.1932 16.0977 11.2518C16.154 11.3038 16.089 11.4075 16.0082 11.3949L8.78139 10.269C8.57833 10.2373 8.41727 10.5001 8.56194 10.627C8.70595 10.7534 8.54693 11.0151 8.34419 10.9854L0.904297 9.89491Z" fill="white" fill-opacity="0.42" />
                      </svg>
                      <p className="text-[#FFFFFF] font-inter font-[600] text-[20px] leading-[21px] my-[14px] max-w-[80%] 1440px:text-[16px] 1200px:text-[14px] 600px:max-w-[100%]">Разработка с полной прозрачностью</p>
                      <p className="text-[#FFFFFFAD] font-monrope font-[400] text-[14px] leading-[18px] tracking-[-0.01em] 1200px:text-[11px]">Вы всегда можете узнать текущую стадию проекта и оставшееся время до завершения. <br /><br /> Доступны записи, отчеты встреч и открытый канбан с задачами.</p>
                    </div>
                  </div>


                  <div className="absolute top-[800px] right-[100px] w-[469px] rounded-[20px] z-[99] p-[28px] 1600px:right-[63px] 1440px:w-[364px] 1200px:w-[320px] 1024px:right-[70px] 800px:p-[10px] 800px:w-[251px] 600px:right-[0] 600px:max-w-[198px] 425px:max-w-[50%]">
                    <img src="/assets/img/card_fon.png" className="w-[100%] h-[100%] absolute top-[0] left-[0] z-[-1]" />
                    <div className="mb-[20px]">
                      <p className="text-[#FFFFFF] font-monrope font-[400] text-[12px] leading-[18px] mb-[17px]">04</p>
                      <p className="vertical_text rotate-[180deg] text-[#FFFFFF] font-[400] font-monrope text-[6px] leading-[6px] absolute top-[28px] right-[28px] 800px:top-[10px] 800px:right-[10px]">A-Z <br /> CREATIVE STUDIO</p>
                      <div className="flex flex-col gap-[5px]">
                        <div className="bg-[#EDEDED] flex items-center 800px:h-[40px] justify-center gap-[10px] rounded-[20px] max-w-[232px] w-[100%] h-[48px] 800px:max-w-[90%]">
                          <p className="text-[19px] 800px:text-[14px] 800px:leading-[16px] leading-[22px]">🧠</p>
                          <p className="text-[#353F4E] font-monrope font-[400] text-[12px] 800px:text-[10px] leading-[13px]">Аналитика и проектирование</p>
                        </div>
                        <div className="bg-[#EDEDED] flex items-center 800px:h-[40px] justify-center gap-[10px] rounded-[20px] max-w-[232px] w-[100%] h-[48px] ml-[88px] 1440px:ml-[40px] 1200px:ml-[20px] 800px:ml-[0] 800px:max-w-[90%]">
                          <p className="text-[19px] 800px:text-[14px] 800px:leading-[16px] leading-[22px]">🎨</p>
                          <p className="text-[#353F4E] font-monrope font-[400] text-[12px] 800px:leading-[10px] leading-[13px]">Дизайн макетов</p>
                        </div>
                        <div className="bg-[#EDEDED] flex items-center justify-center 800px:h-[40px] gap-[10px] rounded-[20px] max-w-[232px] w-[100%] h-[48px] ml-[172px] 1440px:ml-[76px] 1200px:ml-[46px] 800px:ml-[0] 800px:max-w-[90%]">
                          <p className="text-[19px] 800px:text-[14px] 800px:leading-[16px] leading-[22px]">⚙️</p>
                          <p className="text-[#353F4E] font-monrope font-[400] text-[12px] 800px:text-[10px] leading-[13px]">Разработка продукта</p>
                        </div>
                        <div className="bg-[linear-gradient(0deg,_#FF8543,_#FF8543),_linear-gradient(125.85deg,_#FFBF67_-1.8%,_rgba(255,_191,_103,_0)_54.65%),_linear-gradient(152.95deg,_rgba(252,_74,_0,_0)_12.87%,_#FC4A00_88.77%),_linear-gradient(101.66deg,_rgba(244,_88,_0,_0)_69.1%,_#F45800_96.44%)] 800px:h-[40px] flex items-center justify-center gap-[10px] rounded-[20px] max-w-[139px] w-[100%] h-[48px] ml-[172px] 1440px:ml-[76px] 800px:ml-[0] 800px:w-[100%] 800px:max-w-[90%] 1200px:ml-[46px] shadow-[0px_0px_21.16px_0px_#FFD57E_inset,_0px_0px_2.82px_0px_#FFECCF_inset]">
                          <p className="text-[19px] 800px:text-[14px] 800px:leading-[16px] leading-[22px]">🏁</p>
                          <p className="text-[#FFFFFF] font-monrope font-[400] text-[12px] 800px:text-[10px] leading-[13px]">Релиз MVP</p>
                        </div>
                      </div>
                    </div>
                    <div className="800px:[&_br]:hidden">
                      <svg width="21" height="13" viewBox="0 0 21 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.05995 0.296732C9.02524 0.277396 9.00788 0.267728 8.98905 0.260908C8.97232 0.254851 8.95476 0.250475 8.93658 0.24784C8.91612 0.244872 8.89466 0.244872 8.85175 0.244872H7.8981C7.79279 0.244872 7.74013 0.244872 7.69073 0.260528C7.64705 0.274375 7.6054 0.296982 7.56875 0.326747C7.52731 0.360402 7.49503 0.406507 7.43048 0.498717L4.36982 4.87085C4.31585 4.94794 4.28886 4.98649 4.27356 5.02705C4.26 5.06297 4.25319 5.09989 4.25346 5.1359C4.25377 5.17656 4.26647 5.21537 4.29187 5.29299L4.52678 6.01079C4.60005 6.23469 4.63669 6.34665 4.60672 6.43762C4.58055 6.51706 4.5232 6.58812 4.44814 6.63411C4.36218 6.68678 4.2352 6.68678 3.98122 6.68678H3.38851C3.2832 6.68678 3.23054 6.68678 3.18114 6.70243C3.13746 6.71628 3.09581 6.73889 3.05916 6.76865C3.01772 6.80231 2.98545 6.84841 2.92089 6.94062L1.40024 9.11287C1.2425 9.33819 1.16363 9.45085 1.16034 9.54259C1.15746 9.62269 1.18924 9.69457 1.2481 9.74114C1.31553 9.79449 1.44421 9.79449 1.70155 9.79449H3.48525C3.58695 9.79449 3.6378 9.79449 3.68578 9.77974C3.72823 9.76669 3.76885 9.74536 3.80494 9.71717C3.84574 9.68531 3.87823 9.64155 3.94321 9.55404L4.9433 8.20708C5.00828 8.11957 5.04076 8.07581 5.08156 8.04395C5.11765 8.01576 5.15828 7.99443 5.20072 7.98138C5.2487 7.96663 5.29955 7.96663 5.40125 7.96663H7.86725C8.0265 7.96663 8.10612 7.96663 8.16275 7.99662C8.21259 8.02302 8.25007 8.06525 8.27015 8.11762C8.29295 8.17712 8.28283 8.25542 8.26259 8.41204L8.14149 9.34908C8.12124 9.5057 8.11112 9.584 8.13393 9.6435C8.154 9.69587 8.19148 9.73811 8.24132 9.7645C8.29795 9.79449 8.37758 9.79449 8.53683 9.79449H17.9954C18.1616 9.79449 18.2448 9.79449 18.314 9.76263C18.3748 9.7346 18.4282 9.68988 18.4664 9.63487C18.5099 9.57234 18.5245 9.49048 18.5536 9.32675L18.7591 8.17052C18.7882 8.0068 18.8028 7.92494 18.7815 7.8624C18.7629 7.8074 18.7254 7.76267 18.6745 7.73465C18.6166 7.70279 18.5335 7.70279 18.3672 7.70279H15.2204C14.9147 7.70279 14.7619 7.70279 14.6923 7.64065C14.6318 7.58658 14.6046 7.50434 14.6183 7.41663C14.6341 7.31584 14.7471 7.19543 14.9732 6.9546L19.8166 1.79514C19.86 1.74888 19.8818 1.72575 19.8988 1.70029C19.9139 1.67769 19.9262 1.65378 19.9355 1.62915C19.9459 1.60139 19.9511 1.57249 19.9614 1.51468L20.1062 0.700155C20.1353 0.536433 20.1498 0.454572 20.1286 0.392039C20.1099 0.337033 20.0724 0.292311 20.0215 0.264284C19.9637 0.232422 19.8805 0.232422 19.7142 0.232422H12.7354C12.5692 0.232422 12.486 0.232422 12.4168 0.264284C12.356 0.292311 12.3026 0.337033 12.2644 0.392039C12.2209 0.454572 12.2063 0.536433 12.1772 0.700155L11.9717 1.85639C11.9426 2.02011 11.928 2.10197 11.9493 2.16451C11.9679 2.21951 12.0054 2.26423 12.0563 2.29226C12.1142 2.32412 12.1973 2.32412 12.3636 2.32412H15.5104C15.8161 2.32412 15.9689 2.32412 16.0385 2.38626C16.099 2.44033 16.1262 2.52257 16.1125 2.61028C16.0967 2.71107 15.9837 2.83148 15.7576 3.07231L11.8189 7.26806C11.5536 7.55065 11.4209 7.69194 11.31 7.71563C11.2137 7.73618 11.121 7.71189 11.0606 7.65027C10.9909 7.57926 10.9961 7.40456 11.0064 7.05516L11.1643 1.71084C11.1668 1.62361 11.1681 1.58 11.1571 1.54186C11.1474 1.50808 11.1307 1.47757 11.1079 1.45196C11.0822 1.42303 11.0459 1.40286 10.9735 1.36252L9.05995 0.296732ZM8.93136 2.87475C8.9576 2.87475 8.9756 2.89503 8.97227 2.92084L8.63418 5.53681C8.61212 5.70753 8.60108 5.7929 8.55825 5.85847C8.5206 5.91611 8.46643 5.96337 8.40398 5.99308C8.33294 6.02687 8.24614 6.02687 8.07253 6.02687H7.36975C7.10404 6.02687 6.97119 6.02687 6.90329 5.97187C6.84405 5.92388 6.81305 5.85002 6.8179 5.76838C6.82346 5.67481 6.90834 5.56049 7.0781 5.33185L8.88397 2.89963C8.89538 2.88427 8.91351 2.87475 8.93136 2.87475Z" fill="white" fill-opacity="0.42" />
                        <path d="M0.904297 9.89491L11.5133 12.1635C11.6642 12.1958 11.7701 11.9756 11.6314 11.918C11.4946 11.8612 11.5956 11.6443 11.746 11.6718L16.108 12.469C16.1231 12.4717 16.1307 12.4731 16.1383 12.4741C16.1452 12.4749 16.1521 12.4756 16.1591 12.4759C16.1669 12.4763 16.1748 12.4763 16.1907 12.4763H17.5476C17.7547 12.4763 17.8582 12.4763 17.896 12.4672C18.1486 12.4063 18.2659 12.0968 18.0921 11.9498C18.066 11.9278 17.9772 11.8889 17.7996 11.8112L16.2052 11.1139C16.1237 11.0783 16.0342 11.1932 16.0977 11.2518C16.154 11.3038 16.089 11.4075 16.0082 11.3949L8.78139 10.269C8.57833 10.2373 8.41727 10.5001 8.56194 10.627C8.70595 10.7534 8.54693 11.0151 8.34419 10.9854L0.904297 9.89491Z" fill="white" fill-opacity="0.42" />
                      </svg>
                      <p className="text-[#FFFFFF] font-inter font-[600] text-[20px] leading-[21px] my-[14px] max-w-[80%] 1440px:text-[16px] 1200px:text-[14px] 600px:max-w-[100%]">Разработка с полной прозрачностью</p>
                      <p className="text-[#FFFFFFAD] font-monrope font-[400] text-[14px] leading-[18px] tracking-[-0.01em] 1200px:text-[11px]">Вы всегда можете узнать текущую стадию проекта и оставшееся время до завершения. <br /><br /> Доступны записи, отчеты встреч и открытый канбан с задачами.</p>
                    </div>
                  </div>

                  <div className="absolute top-[560px] left-[550px] w-[376px] rounded-[20px] z-[99] p-[28px] 1600px:left-[461px] 1440px:w-[310px] 1440px:top-[452px] 1440px:left-[418px] 1200px:left-[377px] 1024px:left-[67px] 1024px:top-[800px] 800px:max-w-[243px] 800px:p-[10px] 800px:left-[15px] 600px:left-[0] 600px:max-w-[210px] 425px:max-w-[50%]">
                    <img src="/assets/img/card_fon.png" className="w-[100%] h-[100%] absolute top-[0] left-[0] z-[-1]" />
                    <div className="mb-[20px]">
                      <p className="text-[#FFFFFF] font-monrope font-[400] text-[12px] leading-[18px] mb-[17px]">03</p>
                      <p className="vertical_text rotate-[180deg] text-[#FFFFFF] font-[400] font-monrope text-[6px] leading-[6px] absolute top-[28px] right-[28px] 800px:top-[10px] 800px:right-[10px]">A-Z <br /> CREATIVE STUDIO</p>
                      <img src="/assets/svg/week.svg" className="relative left-[50%] translate-x-[-50%] 800px:w-[80%]" />
                    </div>
                    <div>
                      <svg width="21" height="13" viewBox="0 0 21 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.05995 0.296732C9.02524 0.277396 9.00788 0.267728 8.98905 0.260908C8.97232 0.254851 8.95476 0.250475 8.93658 0.24784C8.91612 0.244872 8.89466 0.244872 8.85175 0.244872H7.8981C7.79279 0.244872 7.74013 0.244872 7.69073 0.260528C7.64705 0.274375 7.6054 0.296982 7.56875 0.326747C7.52731 0.360402 7.49503 0.406507 7.43048 0.498717L4.36982 4.87085C4.31585 4.94794 4.28886 4.98649 4.27356 5.02705C4.26 5.06297 4.25319 5.09989 4.25346 5.1359C4.25377 5.17656 4.26647 5.21537 4.29187 5.29299L4.52678 6.01079C4.60005 6.23469 4.63669 6.34665 4.60672 6.43762C4.58055 6.51706 4.5232 6.58812 4.44814 6.63411C4.36218 6.68678 4.2352 6.68678 3.98122 6.68678H3.38851C3.2832 6.68678 3.23054 6.68678 3.18114 6.70243C3.13746 6.71628 3.09581 6.73889 3.05916 6.76865C3.01772 6.80231 2.98545 6.84841 2.92089 6.94062L1.40024 9.11287C1.2425 9.33819 1.16363 9.45085 1.16034 9.54259C1.15746 9.62269 1.18924 9.69457 1.2481 9.74114C1.31553 9.79449 1.44421 9.79449 1.70155 9.79449H3.48525C3.58695 9.79449 3.6378 9.79449 3.68578 9.77974C3.72823 9.76669 3.76885 9.74536 3.80494 9.71717C3.84574 9.68531 3.87823 9.64155 3.94321 9.55404L4.9433 8.20708C5.00828 8.11957 5.04076 8.07581 5.08156 8.04395C5.11765 8.01576 5.15828 7.99443 5.20072 7.98138C5.2487 7.96663 5.29955 7.96663 5.40125 7.96663H7.86725C8.0265 7.96663 8.10612 7.96663 8.16275 7.99662C8.21259 8.02302 8.25007 8.06525 8.27015 8.11762C8.29295 8.17712 8.28283 8.25542 8.26259 8.41204L8.14149 9.34908C8.12124 9.5057 8.11112 9.584 8.13393 9.6435C8.154 9.69587 8.19148 9.73811 8.24132 9.7645C8.29795 9.79449 8.37758 9.79449 8.53683 9.79449H17.9954C18.1616 9.79449 18.2448 9.79449 18.314 9.76263C18.3748 9.7346 18.4282 9.68988 18.4664 9.63487C18.5099 9.57234 18.5245 9.49048 18.5536 9.32675L18.7591 8.17052C18.7882 8.0068 18.8028 7.92494 18.7815 7.8624C18.7629 7.8074 18.7254 7.76267 18.6745 7.73465C18.6166 7.70279 18.5335 7.70279 18.3672 7.70279H15.2204C14.9147 7.70279 14.7619 7.70279 14.6923 7.64065C14.6318 7.58658 14.6046 7.50434 14.6183 7.41663C14.6341 7.31584 14.7471 7.19543 14.9732 6.9546L19.8166 1.79514C19.86 1.74888 19.8818 1.72575 19.8988 1.70029C19.9139 1.67769 19.9262 1.65378 19.9355 1.62915C19.9459 1.60139 19.9511 1.57249 19.9614 1.51468L20.1062 0.700155C20.1353 0.536433 20.1498 0.454572 20.1286 0.392039C20.1099 0.337033 20.0724 0.292311 20.0215 0.264284C19.9637 0.232422 19.8805 0.232422 19.7142 0.232422H12.7354C12.5692 0.232422 12.486 0.232422 12.4168 0.264284C12.356 0.292311 12.3026 0.337033 12.2644 0.392039C12.2209 0.454572 12.2063 0.536433 12.1772 0.700155L11.9717 1.85639C11.9426 2.02011 11.928 2.10197 11.9493 2.16451C11.9679 2.21951 12.0054 2.26423 12.0563 2.29226C12.1142 2.32412 12.1973 2.32412 12.3636 2.32412H15.5104C15.8161 2.32412 15.9689 2.32412 16.0385 2.38626C16.099 2.44033 16.1262 2.52257 16.1125 2.61028C16.0967 2.71107 15.9837 2.83148 15.7576 3.07231L11.8189 7.26806C11.5536 7.55065 11.4209 7.69194 11.31 7.71563C11.2137 7.73618 11.121 7.71189 11.0606 7.65027C10.9909 7.57926 10.9961 7.40456 11.0064 7.05516L11.1643 1.71084C11.1668 1.62361 11.1681 1.58 11.1571 1.54186C11.1474 1.50808 11.1307 1.47757 11.1079 1.45196C11.0822 1.42303 11.0459 1.40286 10.9735 1.36252L9.05995 0.296732ZM8.93136 2.87475C8.9576 2.87475 8.9756 2.89503 8.97227 2.92084L8.63418 5.53681C8.61212 5.70753 8.60108 5.7929 8.55825 5.85847C8.5206 5.91611 8.46643 5.96337 8.40398 5.99308C8.33294 6.02687 8.24614 6.02687 8.07253 6.02687H7.36975C7.10404 6.02687 6.97119 6.02687 6.90329 5.97187C6.84405 5.92388 6.81305 5.85002 6.8179 5.76838C6.82346 5.67481 6.90834 5.56049 7.0781 5.33185L8.88397 2.89963C8.89538 2.88427 8.91351 2.87475 8.93136 2.87475Z" fill="white" fill-opacity="0.42" />
                        <path d="M0.904297 9.89491L11.5133 12.1635C11.6642 12.1958 11.7701 11.9756 11.6314 11.918C11.4946 11.8612 11.5956 11.6443 11.746 11.6718L16.108 12.469C16.1231 12.4717 16.1307 12.4731 16.1383 12.4741C16.1452 12.4749 16.1521 12.4756 16.1591 12.4759C16.1669 12.4763 16.1748 12.4763 16.1907 12.4763H17.5476C17.7547 12.4763 17.8582 12.4763 17.896 12.4672C18.1486 12.4063 18.2659 12.0968 18.0921 11.9498C18.066 11.9278 17.9772 11.8889 17.7996 11.8112L16.2052 11.1139C16.1237 11.0783 16.0342 11.1932 16.0977 11.2518C16.154 11.3038 16.089 11.4075 16.0082 11.3949L8.78139 10.269C8.57833 10.2373 8.41727 10.5001 8.56194 10.627C8.70595 10.7534 8.54693 11.0151 8.34419 10.9854L0.904297 9.89491Z" fill="white" fill-opacity="0.42" />
                      </svg>
                      <p className="text-[#FFFFFF] font-inter font-[600] text-[20px] leading-[21px] my-[14px] 1440px:text-[16px] 1200px:text-[14px]">Мы всегда на связи</p>
                      <p className="text-[#FFFFFFAD] font-monrope font-[400] text-[14px] leading-[18px] tracking-[-0.01em] 1200px:text-[11px]">Вы можете задавать вопросы через Телеграм, и мы оперативно и конкретно на них отвечаем. Также мы готовы провести звонок в удобное для вас время. А если у вас совсем нет времени, мы можем подготовить видео, где расскажем всё необходимое.</p>
                    </div>
                  </div>



                </div>
              </div>
            </section>

            <section>
              <div>
                <div className="flex gap-[230px] pl-[231px] mb-[-286px] 1600px:gap-[100px] 1440px:pl-[80px] 1440px:mb-[-231px] 1200px:mb-[-145px] 1200px:gap-[158px] 1024px:mb-[0] 1024px:gap-[100px] 800px:gap-[22px] 800px:flex-col 800px:items-center 800px:pl-[0] 600px:max-w-[425px] 600px:mx-auto">
                  <div className="800px:flex 800px:flex-col 800px:items-center">
                    <img src="/assets/img/profile_girl.png" className="relative z-[1] shadow-[-6px_11px_28px_0px_#841F1F8A,_-22px_46px_51px_0px_#841F1F78,_-50px_103px_69px_0px_#841F1F47,_-89px_183px_81px_0px_#841F1F14,_-140px_285px_89px_0px_#841F1F03] border-[4px] border-solid border-[#F14B4A] rounded-[50%] w-[82px] h-[82px] mb-[28px]" />
                    <p className="text-[#FFFFFF] relative z-[1] font-monrope font-[400] text-[14px] leading-[21px] max-w-[187px] w-[100%] mb-[24px]">Это Фатима, наш менеджер. Она с радостью ответит на все ваши вопросы</p>
                    <button className="relative max-w-[264px] min-w-[264px] w-[100%] h-[54px] flex items-center justify-center gap-[10px] 1200px:max-w-[222px] 1200px:min-w-[222px]">
                      <svg width="265" height="56" className="absolute top-[0] left-[0] w-[100%]" viewBox="0 0 265 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.16991 17.4001C1.56995 13.5986 1.86569 10.7995 2.41092 8.62705C2.95105 6.47498 3.72521 4.98689 5.05541 3.78933C6.38122 2.59571 7.99662 1.97922 10.316 1.66613C12.653 1.35067 15.6457 1.34961 19.7025 1.34961H245.105C249.161 1.34961 252.154 1.35067 254.491 1.66613C256.81 1.97922 258.426 2.59571 259.752 3.78932C261.082 4.98689 261.856 6.47497 262.396 8.62703C262.941 10.7994 263.237 13.5986 263.637 17.4001C264.028 21.1107 264.307 24.9021 264.307 28.1481C264.307 31.394 264.028 35.1854 263.637 38.8961C263.237 42.6976 262.941 45.4967 262.396 47.6691C261.856 49.8212 261.082 51.3093 259.752 52.5068C258.426 53.7004 256.81 54.3169 254.491 54.63C252.154 54.9455 249.161 54.9465 245.105 54.9465H19.7026C15.6457 54.9465 12.653 54.9455 10.316 54.63C7.99662 54.3169 6.38122 53.7004 5.05541 52.5068C3.72521 51.3093 2.95105 49.8212 2.41092 47.6691C1.86569 45.4967 1.56995 42.6975 1.16991 38.896C0.779429 35.1854 0.5 31.394 0.5 28.1481C0.5 24.9021 0.779429 21.1107 1.16991 17.4001Z" stroke="#FF9862" />
                      </svg>
                      <svg width="23" height="20" className="relative z-[1] 1200px:w-[16px]" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.47038 8.70143C8.34382 6.08243 12.2579 4.35612 14.2173 3.52081C19.811 1.13806 20.9735 0.72462 21.7329 0.71112C21.8985 0.707745 22.2704 0.749932 22.5126 0.950745C22.7157 1.11949 22.7719 1.34899 22.7985 1.50931C22.8251 1.66962 22.8594 2.03581 22.8329 2.32099C22.5298 5.58293 21.2173 13.4973 20.5516 17.1491C20.2673 18.6948 19.7126 19.2129 19.1735 19.2652C18.0048 19.3749 17.1157 18.4721 15.9829 17.7127C14.2094 16.523 13.2079 15.7822 11.4876 14.6212C9.4985 13.2779 10.7876 12.5405 11.9219 11.3356C12.2188 11.0201 17.3719 6.22081 17.4719 5.78375C17.4844 5.72975 17.4954 5.52725 17.3782 5.42093C17.261 5.31293 17.086 5.35006 16.961 5.37874C16.7829 5.42093 13.9516 7.33624 8.46413 11.1297C7.661 11.6951 6.93288 11.9701 6.27975 11.9566C5.561 11.9397 4.17819 11.5381 3.1485 11.1972C1.88757 10.7754 0.886005 10.556 0.971942 9.84218C1.01882 9.47093 1.51882 9.09125 2.47194 8.70143H2.47038Z" fill="white" />
                      </svg>
                      <span className="text-[#FFFFFF] font-inter font-[400] text-[16px] leading-[19px] relative z-[1] 1200px:text-[13px]">Написать в телеграм</span>
                    </button>
                  </div>
                  <div className="relative w-[max-content] 600px:w-[100%] 600px:flex 600px:flex-col 600px:items-center 600px:text-center">
                    <svg width="35" height="23" className="1200px:w-[20px]" viewBox="0 0 35 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M15.1062 0.994444C15.0459 0.960881 15.0158 0.944099 14.9831 0.93226C14.9541 0.921746 14.9236 0.914151 14.892 0.909576C14.8565 0.904425 14.8193 0.904425 14.7448 0.904425H13.0894C12.9066 0.904425 12.8152 0.904425 12.7294 0.931601C12.6536 0.955636 12.5813 0.994879 12.5177 1.04655C12.4458 1.10497 12.3897 1.185 12.2777 1.34506L6.96483 8.93442C6.87115 9.06824 6.82431 9.13515 6.79774 9.20555C6.77422 9.2679 6.76238 9.33199 6.76286 9.3945C6.76339 9.46508 6.78544 9.53245 6.82953 9.66719L7.23729 10.9132C7.36448 11.3018 7.42808 11.4962 7.37605 11.6541C7.33063 11.792 7.23108 11.9153 7.10079 11.9952C6.95158 12.0866 6.73115 12.0866 6.29029 12.0866H5.26143C5.07863 12.0866 4.98722 12.0866 4.90148 12.1138C4.82564 12.1378 4.75335 12.177 4.68973 12.2287C4.6178 12.2871 4.56178 12.3672 4.44973 12.5272L1.81009 16.2979C1.53629 16.689 1.39938 16.8846 1.39367 17.0439C1.38867 17.1829 1.44383 17.3077 1.54602 17.3885C1.66306 17.4811 1.88642 17.4811 2.33312 17.4811H5.42937C5.6059 17.4811 5.69417 17.4811 5.77745 17.4555C5.85113 17.4328 5.92165 17.3958 5.9843 17.3469C6.05512 17.2916 6.11151 17.2156 6.2243 17.0637L7.96031 14.7256C8.0731 14.5737 8.12949 14.4977 8.20031 14.4424C8.26296 14.3935 8.33348 14.3565 8.40716 14.3338C8.49044 14.3082 8.57871 14.3082 8.75525 14.3082H13.0358C13.3123 14.3082 13.4505 14.3082 13.5488 14.3603C13.6353 14.4061 13.7004 14.4794 13.7352 14.5703C13.7748 14.6736 13.7572 14.8095 13.7221 15.0814L13.5119 16.7079C13.4767 16.9798 13.4592 17.1157 13.4988 17.219C13.5336 17.3099 13.5987 17.3832 13.6852 17.429C13.7835 17.4811 13.9217 17.4811 14.1981 17.4811H30.6167C30.9053 17.4811 31.0497 17.4811 31.1697 17.4258C31.2754 17.3771 31.368 17.2995 31.4344 17.204C31.5099 17.0955 31.5351 16.9534 31.5857 16.6692L31.9425 14.6621C31.993 14.3779 32.0183 14.2358 31.9814 14.1273C31.9489 14.0318 31.8839 13.9542 31.7956 13.9055C31.6951 13.8502 31.5508 13.8502 31.2622 13.8502H25.7997C25.2692 13.8502 25.0039 13.8502 24.8831 13.7424C24.778 13.6485 24.7308 13.5057 24.7546 13.3535C24.782 13.1786 24.9782 12.9695 25.3706 12.5515L33.7781 3.59545C33.8535 3.51515 33.8912 3.47501 33.9207 3.4308C33.947 3.39157 33.9684 3.35007 33.9845 3.30731C34.0026 3.25913 34.0115 3.20896 34.0294 3.10862L34.2807 1.69473C34.3312 1.41053 34.3565 1.26843 34.3196 1.15988C34.2872 1.0644 34.2221 0.986771 34.1338 0.938121C34.0334 0.882812 33.8891 0.882812 33.6004 0.882812H21.4863C21.1976 0.882812 21.0533 0.882812 20.9332 0.938121C20.8276 0.986771 20.7349 1.0644 20.6686 1.15988C20.5931 1.26843 20.5678 1.41053 20.5173 1.69473L20.1605 3.70177C20.11 3.98597 20.0847 4.12807 20.1216 4.23662C20.154 4.3321 20.2191 4.40973 20.3074 4.45838C20.4078 4.51369 20.5521 4.51369 20.8408 4.51369H26.3032C26.8338 4.51369 27.0991 4.51369 27.2199 4.62155C27.325 4.71541 27.3721 4.85816 27.3483 5.01041C27.321 5.18536 27.1248 5.39438 26.7323 5.81243L19.8952 13.0956C19.4347 13.5861 19.2045 13.8314 19.0119 13.8725C18.8448 13.9082 18.6839 13.866 18.579 13.7591C18.4581 13.6358 18.4671 13.3326 18.485 12.726L18.7589 3.44912C18.7634 3.29771 18.7657 3.22201 18.7466 3.1558C18.7297 3.09717 18.7007 3.0442 18.6611 2.99974C18.6164 2.94953 18.5536 2.91451 18.4278 2.84449L15.1062 0.994444ZM14.883 5.46949C14.9285 5.46949 14.9598 5.5047 14.954 5.54949L14.3671 10.0904C14.3288 10.3868 14.3097 10.5349 14.2353 10.6488C14.17 10.7488 14.0759 10.8309 13.9675 10.8824C13.8442 10.9411 13.6935 10.9411 13.3922 10.9411H12.1723C11.711 10.9411 11.4804 10.9411 11.3626 10.8456C11.2597 10.7623 11.2059 10.6341 11.2143 10.4924C11.224 10.33 11.3713 10.1315 11.666 9.73464L14.8007 5.51267C14.8205 5.48602 14.852 5.46949 14.883 5.46949Z" fill="white" />
                      <path d="M0.949219 17.6554L19.3648 21.5933C19.6268 21.6493 19.8107 21.2672 19.5698 21.1672C19.3324 21.0686 19.5076 20.6921 19.7687 20.7398L27.3405 22.1236C27.3667 22.1284 27.3799 22.1308 27.3932 22.1325C27.4051 22.134 27.4171 22.135 27.4292 22.1357C27.4428 22.1364 27.4565 22.1364 27.4841 22.1364H29.8395C30.1989 22.1364 30.3786 22.1364 30.4443 22.1205C30.8827 22.0148 31.0862 21.4776 30.7846 21.2224C30.7394 21.1841 30.5852 21.1167 30.2769 20.9819L27.5092 19.7714C27.3678 19.7095 27.2124 19.909 27.3227 20.0108C27.4203 20.101 27.3076 20.2811 27.1672 20.2592L14.6226 18.3047C14.2702 18.2498 13.9906 18.706 14.2417 18.9263C14.4917 19.1456 14.2157 19.5999 13.8637 19.5483L0.949219 17.6554Z" fill="white" />
                    </svg>
                    <p className="text-[#FFFFFF] font-monrope font-[800] text-[91px] leading-[95px] tracking-[-0.04em] uppercase max-w-[573px] w-[100%] mt-[7px] 1440px:text-[66px] 1440px:leading-[69px] 1200px:text-[34px] 1200px:leading-[42px] 1200px:max-w-[218px] 600px:max-w-[100%]">давайте прикинем стоимость и сроки</p>
                    <p className="text-[#FFFFFF] font-monrope font-[200] text-[24px] leading-[32px] max-w-[428px] w-[100%] absolute bottom-[-45px] right-[-265px] 1440px:text-[18px] 1440px:leading-[22px] 1440px:right-[-36px] 1440px:bottom-[-26px] 1440px:max-w-[309px] 1200px:text-[12px] 1200px:leading-[19px] 1200px:right-[-160px] 1200px:bottom-[10px] 800px:bottom-[-42px] 600px:static">Мы познакомимся, зададим вопросы, расскажем всё о наших процессах и дадим предварительную оценку вашего проекта</p>
                  </div>
                </div>
                <div className="flex items-center max-w-[1600px] 1600px:max-w-[1440px] mx-auto 1440px:max-w-[1200px] 1200px:max-w-[1024px] 1200px:mb-[30px] 1200px:flex-col 1024px:max-w-[800px]">
                  <div className="w-[55%] 1024px:w-[50%]">
                    <img src="/assets/img/human_on_line.png" className="w-[1026px] max-w-[1026px] min-w-[1026px] h-[1063px] relative z-[2] object-cover translate-y-[200px] translate-x-[-50px] 1600px:translate-x-[-110px] 1440px:max-w-[768px] 1440px:min-w-[768px] 1440px:w-[768px] 1440px:h-[924px] 1200px:max-w-[492px] 1200px:min-w-[492px] 1200px:w-[492px] 1200px:h-[592px] 1440px:translate-x-[0] 1200px:translate-y-[150px] 1024px:translate-y-[0] 1024px:object-contain 1024px:translate-x-[-13%] 1024px:h-[509px] 800px:translate-x-[-25%] 600px:translate-x-[-36%] 600px:translate-y-[94px]" />
                  </div>
                  <div className="w-[45%] pl-[50px] 1200px:pl-[0] 1024px:w-[50%] 1024px:flex 1024px:justify-center 600px:w-[100%] 600px:px-[42px]">
                    <div className="border-[2px] mt-[200px] border-solid flex flex-col gap-[40px] border-[#FFFFFF29] px-[40px] py-[48px] w-[415px] rounded-[20px] relative before:content-[''] before:z-[0] before:h-[101.8%] before:absolute before:top-[50%] before:rounded-[20px] before:left-[50%] before:translate-x-[-50%] before:translate-y-[-50%] before:border-[2px] before:border-solid before:border-[#C03332B2] 1200px:before:w-[102%] before:w-[418px] 1200px:gap-[20px] 1200px:px-[20px] 1200px:py-[25px] 1200px:w-[360px] 1024px:mt-[0] 1024px:w-[320px] 600px:w-[100%]">
                      <div className="relative z-[1]">
                        <p className="text-[#FFFFFF] font-[400] text-[16px] font-monrope leading-[21px] 1200px:text-[12px]">Как вас зовут ?</p>
                        <input type="text" className="1200px:text-[12px] bg-[transparent] w-[100%] border-b-[1px] border-solid border-b-[#F5ADAD] outline-none text-[white] font-[400] text-[16px] font-monrope" />
                      </div>
                      <div className="relative z-[1]">
                        <p className="text-[#FFFFFF] font-[400] text-[16px] font-monrope leading-[21px] 1200px:text-[12px]">Почта, телефон или месенджер</p>
                        <input type="text" className="1200px:text-[12px] bg-[transparent] w-[100%] border-b-[1px] border-solid border-b-[#F5ADAD] outline-none text-[white] font-[400] text-[16px] font-monrope" />
                      </div>
                      <div className="relative z-[1]">
                        <p className="text-[#FFFFFF] font-[400] text-[16px] font-monrope leading-[21px] 1200px:text-[12px]">Кратко опишите задачу</p>
                        <textarea className="1200px:text-[12px] bg-[transparent] w-[100%] h-[70px] 1200px:h-[50px] border-b-[1px] border-solid border-b-[#F5ADAD] outline-none text-[white] font-[400] text-[16px] font-monrope"></textarea>
                      </div>
                      <div className="relative z-[9]">
                        <div className="rounded-[20px] relative max-w-[336px] flex items-center w-[100%] h-[70px] before:content-[''] before:absolute before:top-0 before:left-0 before:w-[100%] before:h-[100%] before:bg-[#F84A20] before:rounded-[20px] before:z-[-1] before:shadow-[7.22px_7.22px_28.89px_0px_#FFFFFF4D_inset,-7.22px_-7.22px_28.89px_0px_#FFFFFF4D_inset,0px_0.72px_0px_0px_#E07258] after:content-[''] after:absolute after:top-[4px] after:left-0 after:w-[100%] after:h-[100%] after:bg-[#B96652] after:shadow-[0px_10.11px_1.95px_-10.11px_#050505E5,0px_13px_6.43px_-9.39px_#05050540,0px_18.78px_11.48px_-11.55px_#05050540,0px_-20.22px_0.87px_-20.22px_#05050580_inset,0px_-20.94px_2.67px_-20.22px_#0505053D_inset,-20.22px_-10.83px_2.67px_-20.22px_#D98774_inset,20.22px_-10.83px_2.67px_-20.22px_#D98774_inset] after:z-[-2] after:rounded-[20px] 1024px:max-w-[247px] 1024px:h-[55px] 600px:max-w-[174px] 600px:before:rounded-[12px] 600px:after:rounded-[12px] 600px:h-[45px] 600px:min-w-[174px] 600px:mx-auto">
                          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[calc(100%_-_8px)] h-[calc(100%_-_8px)] opacity-[30%] mix-blend-overlay border-[0.67px] border-solid border-[#000000] rounded-[20px] z-[-1] 600px:rounded-[12px]"></div>
                          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[calc(100%_-_8px)] h-[calc(100%_-_8px)] opacity-[30%] mix-blend-overlay border-[0.67px] border-solid border-[#FFFFFF] rounded-[20px] z-[-1] 600px:rounded-[12px]"></div>
                          <img src="/assets/img/button_fon.png" className="opacity-[7%] object-cover border-[0.67px] border-solid border-[#FFFFFF] mix-blend-plus-lighter absolute w-[calc(100%_-_18px)] m-[9px] h-[calc(100%_-_18px)] top-0 left-0 rounded-[20px] z-[-1] 600px:rounded-[12px]" />
                          <img src="/assets/img/paper.png" className="w-[91px] mb-[39px] ml-[13px] h-[87px] rounded-[20px] object-cover object-top 1024px:w-[65px] 1024px:h-[61px] 1024px:mb-[10px] 600px:w-[42px] 600px:h-[37px] 600px:mb-[6px] 600px:ml-[9px] 1200px:w-[76px] 1200px:h-[65px] 1200px:mb-[6px]" />
                          <p className=" drop-shadow-[0px_0.67px_0px_#00000026] font-monrope font-[500] text-[16px] leading-[19px] text-[#FFFFFF] mr-[11px] ml-[8px] 1024px:text-[12px] 600px:text-[8px] 600px:leading-[9px] 600px:ml-[3px] 600px:mr-[8px] 1200px:text-[13px]">Написать в телеграм</p>
                          <svg width="10" height="10" className="600px:w-[7px] self-start mt-[20px] 600px:mt-[12px]" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_d_737_3905)">
                              <path d="M4.88672 5.13439V1.37207H7.57409" stroke="white" stroke-width="0.501642" />
                              <path d="M6.35555 3.62891H9.49081V8.64533H0.962891V3.62891H3.59651" stroke="white" stroke-width="0.501642" />
                              <path d="M6.7243 0.307926L7.78844 1.37207L6.7243 2.43621" stroke="white" stroke-width="0.501642" />
                            </g>
                            <defs>
                              <filter id="filter0_d_737_3905" x="0.712891" y="0.130859" width="9.0293" height="9.4353" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="0.669677" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_737_3905" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_737_3905" result="shape" />
                              </filter>
                            </defs>
                          </svg>
                        </div>
                        <p className="text-[#FFFFFF] font-monrope font-[400] text-[14px] leading-[19px] text-center mt-[17px] 600px:text-[12px]">Нажимая на кнопку, вы соглашаетесь <a href="#" className="underline">с политикой конфиденциальности</a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <footer className="px-[82px] 800px:px-[42px] relative">
              <div className="bg-[#FFFFFF] rounded-[76px] 600px:rounded-[46px] flex 800px:flex-col px-[150px] 1200px:px-[100px] 1024px:px-[40px] pt-[114px] 1024px:pt-[80px] pb-[82px] 1024px:pb-[50px] 800px:gap-[20px] relative z-[1] overflow-hidden">
                <h5 className="text-[#00000008] font-monrope font-[800] text-[490px] 1600px:text-[400px] 600px:hidden 1440px:top-auto 1440px:bottom-[-40%] 1440px:text-[345px] 1200px:text-[266px] 1024px:text-[230px] leading-[669px] h-[669px] tracking-[-0.03em] absolute left-[23px] top-[-0.14px] z-[1]">DIGITAL</h5>
                <Logo logoMove="mt-[-43px]" />
                <div className="flex gap-[75px] 1600px:gap-[20px] 1440px:flex-wrap 1440px:justify-end 1440px:gap-y-[0] 800px:gap-[15px] 800px:justify-around ml-auto z-[2]">
                  <FooterBlock
                    title={<>A-Z <br /> CREATIVE STUDIO</>}
                    links={[
                      { href: "/", text: "О компании" },
                      { href: "/", text: "Кейсы" },
                      { href: "/", text: 'Экспертиза' },
                      { href: "/", text: "Процессы" },
                      { href: "/", text: "Контакты" },
                    ]}
                  />
                  <FooterBlock
                    title={<>Экспертиза</>}
                    links={[
                      { href: "/", text: "Продукты" },
                      { href: "/", text: "недвижимость" },
                      { href: "/", text: 'e-commerce' },
                      { href: "/", text: "приложения" },
                      { href: "/", text: "no-code" },
                      { href: "/", text: "стартапы" }
                    ]}
                  />
                  <FooterBlock
                    title={<>Соцсети</>}
                    links={[
                      { href: "/", text: "Телеграмм" },
                      { href: "/", text: "беханс" },
                      { href: "/", text: 'ютуб' },
                      { href: "/", text: "дрибл" },
                      { href: "/", text: "вконтакте" },
                    ]}
                  />
                  <FooterBlock
                    title={<>Соцсети</>}
                    content={
                      <>
                        <h6 className="text-[#2A2A3C] font-monrope font-[500] text-[32px] leading-[43px] 600px:text-[18px] 600px:gap-[5px] flex items-center gap-[10px] 1200px:text-[26px] 1200px:leading-[32px]">
                          <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.74064 15.4364V15.9364H6.24064H9.42137H9.92137V15.4364V10.6958H14.6317H15.1317V10.1958V7.01503V6.51503H14.6317H9.92137V1.80469V1.30469H9.42137H6.24064H5.74064V1.80469V6.51503H1H0.5V7.01503V10.1958V10.6958H1H5.74064V15.4364Z" stroke="#ACACAC" />
                          </svg>
                          7
                          <svg width="11" height="33" viewBox="0 0 11 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.98462 31.9041L6.28597 32.2574L6.66055 31.983L9.54363 29.8706L9.9721 29.5567L9.63288 29.148C8.49426 27.776 7.6101 26.4173 6.97441 25.0724C6.33476 23.7095 5.8822 22.3367 5.61458 20.9533C5.35414 19.5482 5.21892 18.1045 5.20942 16.6218C5.21892 15.139 5.35418 13.7001 5.61459 12.3046C5.88225 10.9115 6.33481 9.53895 6.9741 8.18624L6.97466 8.18505C7.61037 6.83071 8.49447 5.46743 9.63288 4.09574L9.9721 3.68701L9.54363 3.37309L6.66055 1.26073L6.28597 0.986288L5.98462 1.33959C4.85085 2.66884 3.88105 4.17582 3.07397 5.85804L3.07344 5.85916C2.27688 7.52998 1.67017 9.28744 1.25302 11.1307L1.25301 11.1307L1.25247 11.1331C0.845377 12.9747 0.660217 14.8046 0.698212 16.6218C0.660217 18.4391 0.845377 20.269 1.25246 22.1106L1.25315 22.1136C1.6703 23.9471 2.27688 25.704 3.07295 27.3835L3.07397 27.3857C3.88105 29.0679 4.85085 30.5749 5.98462 31.9041Z" stroke="#ACACAC" />
                          </svg>
                          996
                          <svg width="11" height="33" viewBox="0 0 11 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.97436 31.9041L4.67302 32.2574L4.29844 31.983L1.41535 29.8706L0.986889 29.5567L1.32611 29.148C2.46472 27.776 3.34888 26.4173 3.98458 25.0724C4.62423 23.7095 5.07678 22.3367 5.3444 20.9533C5.60484 19.5482 5.74006 18.1045 5.74957 16.6218C5.74006 15.139 5.6048 13.7001 5.34439 12.3046C5.07673 10.9115 4.62418 9.53895 3.98488 8.18624L3.98432 8.18505C3.34862 6.83071 2.46451 5.46743 1.32611 4.09574L0.986889 3.68701L1.41535 3.37309L4.29843 1.26073L4.67302 0.986288L4.97436 1.33959C6.10813 2.66884 7.07793 4.17582 7.88501 5.85804L7.88554 5.85916C8.6821 7.52998 9.28881 9.28744 9.70596 11.1307L9.70597 11.1307L9.70651 11.1331C10.1136 12.9747 10.2988 14.8046 10.2608 16.6218C10.2988 18.4391 10.1136 20.269 9.70652 22.1106L9.70584 22.1136C9.28869 23.9471 8.6821 25.704 7.88603 27.3835L7.88501 27.3857C7.07793 29.0679 6.10813 30.5749 4.97436 31.9041Z" stroke="#ACACAC" />
                          </svg>
                          99 47 46
                        </h6>
                        <h6 className="text-[#2A2A3C] font-monrope font-[500] text-[32px] leading-[43px] flex items-center 600px:gap-[5px] 600px:text-[18px] gap-[10px] 1200px:text-[26px] 1200px:leading-[32px]">
                          <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.74064 15.4364V15.9364H6.24064H9.42137H9.92137V15.4364V10.6958H14.6317H15.1317V10.1958V7.01503V6.51503H14.6317H9.92137V1.80469V1.30469H9.42137H6.24064H5.74064V1.80469V6.51503H1H0.5V7.01503V10.1958V10.6958H1H5.74064V15.4364Z" stroke="#ACACAC" />
                          </svg>
                          996
                          <svg width="11" height="33" viewBox="0 0 11 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.98462 31.9041L6.28597 32.2574L6.66055 31.983L9.54363 29.8706L9.9721 29.5567L9.63288 29.148C8.49426 27.776 7.6101 26.4173 6.97441 25.0724C6.33476 23.7095 5.8822 22.3367 5.61458 20.9533C5.35414 19.5482 5.21892 18.1045 5.20942 16.6218C5.21892 15.139 5.35418 13.7001 5.61459 12.3046C5.88225 10.9115 6.33481 9.53895 6.9741 8.18624L6.97466 8.18505C7.61037 6.83071 8.49447 5.46743 9.63288 4.09574L9.9721 3.68701L9.54363 3.37309L6.66055 1.26073L6.28597 0.986288L5.98462 1.33959C4.85085 2.66884 3.88105 4.17582 3.07397 5.85804L3.07344 5.85916C2.27688 7.52998 1.67017 9.28744 1.25302 11.1307L1.25301 11.1307L1.25247 11.1331C0.845377 12.9747 0.660217 14.8046 0.698212 16.6218C0.660217 18.4391 0.845377 20.269 1.25246 22.1106L1.25315 22.1136C1.6703 23.9471 2.27688 25.704 3.07295 27.3835L3.07397 27.3857C3.88105 29.0679 4.85085 30.5749 5.98462 31.9041Z" stroke="#ACACAC" />
                          </svg>
                          999
                          <svg width="11" height="33" viewBox="0 0 11 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.97436 31.9041L4.67302 32.2574L4.29844 31.983L1.41535 29.8706L0.986889 29.5567L1.32611 29.148C2.46472 27.776 3.34888 26.4173 3.98458 25.0724C4.62423 23.7095 5.07678 22.3367 5.3444 20.9533C5.60484 19.5482 5.74006 18.1045 5.74957 16.6218C5.74006 15.139 5.6048 13.7001 5.34439 12.3046C5.07673 10.9115 4.62418 9.53895 3.98488 8.18624L3.98432 8.18505C3.34862 6.83071 2.46451 5.46743 1.32611 4.09574L0.986889 3.68701L1.41535 3.37309L4.29843 1.26073L4.67302 0.986288L4.97436 1.33959C6.10813 2.66884 7.07793 4.17582 7.88501 5.85804L7.88554 5.85916C8.6821 7.52998 9.28881 9.28744 9.70596 11.1307L9.70597 11.1307L9.70651 11.1331C10.1136 12.9747 10.2988 14.8046 10.2608 16.6218C10.2988 18.4391 10.1136 20.269 9.70652 22.1106L9.70584 22.1136C9.28869 23.9471 8.6821 25.704 7.88603 27.3835L7.88501 27.3857C7.07793 29.0679 6.10813 30.5749 4.97436 31.9041Z" stroke="#ACACAC" />
                          </svg>
                          99 47 46
                        </h6>
                        <h6 className="text-[#2A2A3C] font-monrope font-[500] text-[32px] leading-[43px] 1200px:text-[26px] 600px:text-[18px] 1200px:leading-[32px]">hello@az-creativite.com</h6>
                      </>
                    }
                  />
                </div>
              </div>
              <div className="flex justify-between py-[52px] 800px:py-[32px] 600px:py-[22px] px-[150px] 1024px:px-[50px] 600px:flex-wrap 600px:justify-center 600px:gap-[10px]">
                <svg width="1920" height="378" className="absolute left-[0] bottom-[0]" viewBox="0 0 1920 378" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_f_820_313)">
                    <path d="M1344.28 487.965L1565.93 405.434C1866.53 293.508 2186.51 515.812 2186.51 836.568C2186.52 1090.65 1980.54 1296.62 1726.46 1296.62H-242.789C-517.81 1296.62 -740.759 1073.67 -740.759 798.651C-740.759 478.951 -443.791 242.071 -132.091 313.14L503.311 458.014C543.108 467.088 581.631 481.049 618 499.581C701.156 541.951 794.597 559.95 887.542 551.5L1182.94 524.646C1238.11 519.631 1292.36 507.296 1344.28 487.965Z" fill="#F0632C" />
                  </g>
                  <defs>
                    <filter id="filter0_f_820_313" x="-1040.76" y="0.46875" width="3527.28" height="1596.15" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                      <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_820_313" />
                    </filter>
                  </defs>
                </svg>
                <p className="text-[#2A2A3C] font-[400] font-monrope text-[12px] leading-[16px] 800px:text-[10px] 600px:text-[8px] relative z-[1]">© 2024, A-Z CREATIVE STUDIO</p>
                <p className="text-[#2A2A3C] font-[400] font-monrope text-[12px] leading-[16px] 800px:text-[10px] 600px:text-[8px] relative z-[1]">Диджитал новой школы </p>
                <p className="text-[#2A2A3C] font-[400] font-monrope text-[12px] leading-[16px] 800px:text-[10px] 600px:text-[8px] relative z-[1]">Политика конфиденциальности</p>
              </div>
            </footer>
          </section>
        </main>
      </div>
    </>
  )
}

function Employes({ imgSrc, title, subTitle }: { imgSrc: string, title: string, subTitle: string }) {
  return (
    <div>
      <div className="max-w-[245px] min-w-[245px] w-[100%] h-[510px] bg-[#D9D9D9] rounded-[20px] 1200px:min-w-[200px] 800px:h-[204px] 800px:max-w-[110px] 800px:min-w-[110px] 1200px:h-[343px] 1200px:max-w-[200px] 1024px:rounded-[20px] overflow-hidden">
        <img src={imgSrc} className="w-[130%] h-[130%] object-cover" />
      </div>
      <div className="max-w-[100px] w-[100%] flex flex-col gap-[12px] mt-[32px] 1200px:mt-[12px] 1200px:gap-[8px] 800px:gap-0">
        <p className="text-[#2A2A3C] font-[800] font-monrope text-[20px] leading-[25px] 1200px:text-[14px] 800px:text-[10px] 1200px:leading-[15px]">{title}</p>
        <p className="text-[#ACACAC] font-[400] font-monrope text-[14px] leading-[22px] 1200px:text-[10px] 1200px:leading-[12px]">{subTitle}</p>
      </div>
    </div>
  )
}

function CardBlock() {
  const [state, setState] = useState(false)

  return (
    <div className="flex">
      <div className="bg-[#FFFFFF] p-[30px] rounded-[20px] max-w-[296px] min-w-[296px] w-[296px] w-[100%] relative overflow-hidden">
        <svg width="279" height="188" className="absolute top-[-28px] right-[-60px] z-[0]" viewBox="0 0 279 188" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M143.343 -26.6158C142.733 -26.9556 142.428 -27.1256 142.097 -27.2454C141.803 -27.3519 141.494 -27.4288 141.175 -27.4751C140.815 -27.5273 140.438 -27.5273 139.684 -27.5273H122.923C121.072 -27.5273 120.146 -27.5273 119.278 -27.2521C118.51 -27.0087 117.778 -26.6114 117.134 -26.0883C116.406 -25.4968 115.838 -24.6864 114.704 -23.0658L60.9107 53.7773C59.9622 55.1323 59.4879 55.8098 59.2189 56.5226C58.9807 57.1539 58.8609 57.8028 58.8657 58.4357C58.8711 59.1504 59.0943 59.8325 59.5408 61.1967L63.6694 73.8125C64.9572 77.7477 65.6012 79.7154 65.0744 81.3143C64.6144 82.7105 63.6065 83.9594 62.2873 84.7677C60.7766 85.6934 58.5447 85.6934 54.0809 85.6934H43.6636C41.8127 85.6934 40.8872 85.6934 40.019 85.9685C39.2512 86.2119 38.5193 86.6092 37.8751 87.1324C37.1468 87.7239 36.5795 88.5342 35.445 90.1549L8.71842 128.333C5.9461 132.294 4.55994 134.274 4.50203 135.886C4.45148 137.294 5.00993 138.557 6.04459 139.376C7.22973 140.313 9.49119 140.313 14.0141 140.313H45.3639C47.1514 140.313 48.0451 140.313 48.8884 140.054C49.6344 139.825 50.3484 139.45 50.9827 138.955C51.6998 138.395 52.2708 137.626 53.4128 136.087L70.99 112.414C72.1321 110.876 72.7031 110.107 73.4201 109.547C74.0544 109.051 74.7685 108.676 75.5145 108.447C76.3577 108.188 77.2514 108.188 79.0389 108.188H122.38C125.179 108.188 126.579 108.188 127.574 108.715C128.45 109.179 129.109 109.921 129.462 110.841C129.862 111.887 129.684 113.263 129.329 116.016L127.2 132.485C126.844 135.238 126.667 136.614 127.067 137.66C127.42 138.58 128.079 139.322 128.955 139.786C129.95 140.313 131.35 140.313 134.149 140.313H300.388C303.311 140.313 304.772 140.313 305.988 139.753C307.058 139.261 307.996 138.475 308.668 137.508C309.432 136.409 309.688 134.97 310.199 132.093L313.812 111.771C314.324 108.894 314.579 107.455 314.206 106.356C313.878 105.389 313.219 104.603 312.325 104.11C311.308 103.55 309.847 103.55 306.924 103.55H251.616C246.244 103.55 243.558 103.55 242.335 102.458C241.271 101.508 240.794 100.063 241.034 98.521C241.311 96.7497 243.298 94.6333 247.272 90.4005L332.398 -0.280319C333.162 -1.09334 333.543 -1.49985 333.842 -1.94744C334.108 -2.34461 334.325 -2.76484 334.488 -3.19777C334.671 -3.68565 334.762 -4.1936 334.942 -5.20949L337.487 -19.5254C337.999 -22.4029 338.254 -23.8417 337.881 -24.9407C337.553 -25.9075 336.894 -26.6935 336 -27.1861C334.983 -27.7461 333.522 -27.7461 330.599 -27.7461H207.942C205.019 -27.7461 203.558 -27.7461 202.342 -27.1861C201.273 -26.6935 200.335 -25.9075 199.662 -24.9407C198.898 -23.8417 198.643 -22.4029 198.131 -19.5254L194.518 0.796207C194.007 3.67373 193.751 5.1125 194.124 6.21156C194.453 7.17833 195.111 7.96434 196.006 8.45693C197.022 9.01693 198.484 9.01693 201.406 9.01693H256.714C262.086 9.01693 264.772 9.01693 265.995 10.109C267.059 11.0594 267.537 12.5048 267.296 14.0463C267.019 15.8177 265.032 17.9341 261.059 22.1668L191.832 95.9098C187.17 100.876 184.839 103.36 182.889 103.776C181.197 104.137 179.568 103.71 178.506 102.627C177.281 101.379 177.372 98.3089 177.553 92.1679L180.327 -1.76196C180.373 -3.29498 180.395 -4.06149 180.202 -4.73187C180.031 -5.32551 179.738 -5.86179 179.337 -6.31198C178.885 -6.82037 178.248 -7.17489 176.975 -7.88393L143.343 -26.6158ZM141.083 18.6945C141.544 18.6945 141.86 19.051 141.802 19.5045L135.86 65.4819C135.472 68.4826 135.278 69.9829 134.525 71.1354C133.863 72.1485 132.911 72.9791 131.814 73.5012C130.565 74.095 129.04 74.095 125.988 74.095H113.636C108.967 74.095 106.632 74.095 105.438 73.1284C104.397 72.285 103.852 70.9868 103.937 69.552C104.035 67.9074 105.527 65.8982 108.511 61.8796L140.25 19.1318C140.45 18.8619 140.769 18.6945 141.083 18.6945Z" fill="#F7F7F7" />
          <path d="M0.00195312 142.079L186.462 181.95C189.114 182.517 190.976 178.648 188.538 177.635C186.133 176.637 187.908 172.825 190.552 173.308L267.216 187.319C267.482 187.368 267.615 187.392 267.75 187.409C267.87 187.424 267.992 187.435 268.114 187.441C268.252 187.449 268.392 187.449 268.671 187.449H292.519C296.158 187.449 297.978 187.449 298.643 187.288C303.082 186.218 305.143 180.778 302.089 178.194C301.631 177.807 300.07 177.124 296.948 175.759L268.925 163.503C267.493 162.877 265.92 164.896 267.036 165.927C268.025 166.84 266.883 168.664 265.462 168.442L138.447 148.653C134.878 148.097 132.047 152.716 134.59 154.946C137.121 157.167 134.326 161.766 130.763 161.244L0.00195312 142.079Z" fill="#F7F7F7" />
        </svg>
        <p className="text-[#30424A] font-monrope font-[800] text-[20px] leading-[24px] relative z-[1] tracking-[-0.04em] mb-[15px] uppercase">Уникальный продающий одностраничный сайт</p>
        <p className="text-[#2A2A3C] font-monrope font-[400] text-[12px] leading-[12px] relative z-[1] tracking-[-0.01em]">Индивидуальный дизайн под ваш проект. Подходит для тех, кто уверен в нише и хочет больше заявок с сайта</p>
        <div className="mt-[26px] flex-col gap-[20px] hiddMinBlock hidden">
          <div className="flex items-center gap-[12px]">
            <div className="bg-[#D9D9D9] w-[25px] h-[25px] rounded-[50%]"></div>
            <p className="text-[#30424A] font-monrope font-[400] text-[14px] leading-[20px] tracking-[-0.01em] max-w-[120px] w-[100%]">до 12 экранов</p>
          </div>
          <div className="flex items-start gap-[12px]">
            <div className="bg-[#D9D9D9] w-[25px] h-[25px] rounded-[50%]"></div>
            <p className="text-[#30424A] font-monrope font-[400] text-[14px] leading-[20px] tracking-[-0.01em] max-w-[120px] w-[100%]">Срок создания: под ключ 25 дней</p>
          </div>
          <div className="flex items-start gap-[12px]">
            <div className="bg-[#D9D9D9] w-[25px] h-[25px] rounded-[50%]"></div>
            <p className="text-[#30424A] font-monrope font-[400] text-[14px] leading-[20px] tracking-[-0.01em] max-w-[120px] w-[100%]">Подходит, если у вас нет сильных конкурентов</p>
          </div>
        </div>
      </div>
      <div className="max-w-[262px] min-w-[262px] w-[100%] hidd_Block hidden">
        <div className="bg-[linear-gradient(0deg,_#EF4D3C,_#EF4D3C),_linear-gradient(193.1deg,_#E13E3E_-28.03%,_#F1632B_97.83%)] py-[34px] px-[18px] flex flex-col gap-[16px] h-[320px] max-h-[320px] min-h-[320px] rounded-[20px] rounded-bl-[0] overflow-hidden relative before:content-[''] before:absolute before:top-[0] before:left-[0] before:w-[100%] before:h-[100%] before:bg-[linear-gradient(0deg,_#EF4D3C,_#EF4D3C),_linear-gradient(193.1deg,_#E13E3E_-28.03%,_#F1632B_97.83%)] before:z-[-1] z-[9] before:shadow-[7.22px_7.22px_28.89px_0px_#FFFFFF4D_inset,_-7.22px_-7.22px_28.89px_0px_#FFFFFF0F_inset] after:content-[''] after:absolute after:top-[50%] after:left-[50%] after:translate-x-[-50%] after:translate-y-[-50%] after:rounded-[20px] after:rounded-bl-[0] after:w-[calc(100%_-_10px)] after:h-[calc(100%_-_10px)] after:border after:border-solid after:border-[#B93E1E8F]">
          <div className="flex items-center gap-[10px]">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.9031 10.8432C20.9031 16.1451 16.6051 20.4432 11.3031 20.4432C6.00119 20.4432 1.70312 16.1451 1.70312 10.8432C1.70312 5.54123 6.00119 1.24316 11.3031 1.24316C12.8093 1.24316 14.2345 1.59003 15.5031 2.20824M19.1031 4.84316L10.7031 13.2432L8.30312 10.8432" stroke="white" stroke-width="2" stroke-linejoin="round" />
            </svg>
            <p className="text-[#FFFFFF] font-monrope font-[400] text-[14px] leading-[20px] tracking-[-0.01em]">Базовый анализ конкурентов</p>
          </div>
          <div className="flex items-center gap-[10px]">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.9031 10.8432C20.9031 16.1451 16.6051 20.4432 11.3031 20.4432C6.00119 20.4432 1.70312 16.1451 1.70312 10.8432C1.70312 5.54123 6.00119 1.24316 11.3031 1.24316C12.8093 1.24316 14.2345 1.59003 15.5031 2.20824M19.1031 4.84316L10.7031 13.2432L8.30312 10.8432" stroke="white" stroke-width="2" stroke-linejoin="round" />
            </svg>
            <p className="text-[#FFFFFF] font-monrope font-[400] text-[14px] leading-[20px] tracking-[-0.01em]">Базовый анализ конкурентов</p>
          </div>
          <div className="flex items-center gap-[10px]">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.9031 10.8432C20.9031 16.1451 16.6051 20.4432 11.3031 20.4432C6.00119 20.4432 1.70312 16.1451 1.70312 10.8432C1.70312 5.54123 6.00119 1.24316 11.3031 1.24316C12.8093 1.24316 14.2345 1.59003 15.5031 2.20824M19.1031 4.84316L10.7031 13.2432L8.30312 10.8432" stroke="white" stroke-width="2" stroke-linejoin="round" />
            </svg>
            <p className="text-[#FFFFFF] font-monrope font-[400] text-[14px] leading-[20px] tracking-[-0.01em]">Базовый анализ конкурентов</p>
          </div>
          <div className="flex items-center gap-[10px]">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.9031 10.8432C20.9031 16.1451 16.6051 20.4432 11.3031 20.4432C6.00119 20.4432 1.70312 16.1451 1.70312 10.8432C1.70312 5.54123 6.00119 1.24316 11.3031 1.24316C12.8093 1.24316 14.2345 1.59003 15.5031 2.20824M19.1031 4.84316L10.7031 13.2432L8.30312 10.8432" stroke="white" stroke-width="2" stroke-linejoin="round" />
            </svg>
            <p className="text-[#FFFFFF] font-monrope font-[400] text-[14px] leading-[20px] tracking-[-0.01em]">Базовый анализ конкурентов</p>
          </div>
          <div className="flex items-center gap-[10px]">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.9031 10.8432C20.9031 16.1451 16.6051 20.4432 11.3031 20.4432C6.00119 20.4432 1.70312 16.1451 1.70312 10.8432C1.70312 5.54123 6.00119 1.24316 11.3031 1.24316C12.8093 1.24316 14.2345 1.59003 15.5031 2.20824M19.1031 4.84316L10.7031 13.2432L8.30312 10.8432" stroke="white" stroke-width="2" stroke-linejoin="round" />
            </svg>
            <p className="text-[#FFFFFF] font-monrope font-[400] text-[14px] leading-[20px] tracking-[-0.01em]">Базовый анализ конкурентов</p>
          </div>
          <div className="flex items-center gap-[10px]">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.9031 10.8432C20.9031 16.1451 16.6051 20.4432 11.3031 20.4432C6.00119 20.4432 1.70312 16.1451 1.70312 10.8432C1.70312 5.54123 6.00119 1.24316 11.3031 1.24316C12.8093 1.24316 14.2345 1.59003 15.5031 2.20824M19.1031 4.84316L10.7031 13.2432L8.30312 10.8432" stroke="white" stroke-width="2" stroke-linejoin="round" />
            </svg>
            <p className="text-[#FFFFFF] font-monrope font-[400] text-[14px] leading-[20px] tracking-[-0.01em]">Базовый анализ конкурентов</p>
          </div>
        </div>
        <div className="rounded-[20px] rounded-tl-[0] w-[100%] flex items-center justify-center overflow-hidden h-[78px] relative before:content-[''] before:absolute before:top-[50%] before:translate-x-[-50%] before:translate-y-[-50%] before:rounded-[20px] before:rounded-tl-[0] before:left-[50%] before:w-[calc(100%_-_10px)] before:h-[calc(100%_-_10px)] before:border before:border-solid before:border-[#E58D3D] bg-[linear-gradient(0deg,_#FEA655,_#FEA655),_linear-gradient(25.21deg,_rgba(254,_166,_85,_0)_45.13%,_#FFBF84_103.49%),_linear-gradient(216.8deg,_rgba(181,_87,_26,_0)_63.17%,_#B5571A_122.73%)]">
          <p className="text-[#FFFFFF] font-monrope font-[400] text-[14px] leading-[20px] tracking-[-0.01em]">Цена: от <span className="font-[800] text-[40px]">59 000</span> руб.</p>
        </div>
      </div>
    </div>
  )
}

function Logo({ logoMove }: { logoMove?: string }) {
  return (
    <div className="flex gap-[2px] z-[2] min-w-[max-content]">
      <img src="/assets/svg/logo.svg" className={`w-[85px] 1440px:w-[80px] h-[54px] 1440px:h-[49px] object-contain ${!!logoMove ? logoMove : ""}`} alt="logo image" />
      <div className="max-w-[119px] 1440px:max-w-[89px] min-w-[119px] 1440px:min-w-[89px] w-[100%] mt-[9px]">
        <h3 className="text-[#2A2A3C] font-inter font-[900] text-[16px] 1440px:text-[14px] leading-[19px] 800px:leading-[15px] mb-[2px]">CREATIVITY STUDIO</h3>
        <p className="text-[#2A2A3C] font-inter font-[400] text-[12px] 1440px:text-[10px] leading-[15px] 800px:leading-[11px]">cайты, презентации, фирменный стиль</p>
      </div>
    </div>
  )
}

function FooterBlock({ title, links, content }: { title: JSX.Element, links?: { href: string, text: string }[], content?: any }) {
  return (
    <div>
      <h6 className="text-[#B1B6B8] font-monrope font-[400] text-[14px] 1024px:text-[12px] leading-[19px] h-[38px] 1024px:h-[30px] flex items-end">{title}</h6>
      <div className="flex flex-col gap-[10px] 1200px:gap-[8px] 1200px:mt-[15px] 1024px:gap-[5px] mt-[20px]">
        {
          !!links
            ?
            links.map((item, index: number) => (
              <Link to={item.href} key={index} className="text-[#2A2A3C] font-monrope font-[500] text-[16px] 1200px:text-[14px] leading-[21px] 1024px:leading-[17px] capitalize">{item.text}</Link>
            ))
            :
            content
        }
      </div>
    </div>
  )
}

function Fuck({ left, top }: { left: string, top: string }) {
  const [state, setState] = useState(false)

  return (
    <div className={`absolute ${left} ${top}`}>
      <div className={`rounded-[61.33px_61.33px_0px_61.33px] p-[3px] shadow-[0px_4px_16.7px_0px_#00000040] bg-[#FFFFFF] flex items-center justify-center w-[44px] 1024px:w-[24px] 1024px:h-[24px] h-[44px] 600px:w-[14px] 600px:h-[14px] 600px:p-[1.5px] 600px:left-[-15px] 600px:top-[-15px] absolute top-[-45px] 1024px:top-[-25px] 1024px:left-[-25px] left-[-45px] ${!!state ? "!w-[88px] 1024px:!w-[54px] 600px:!w-[24px] 600px:!h-[24px] 600px:!left-[-13px] 600px:!top-[-13px] 1024px:!h-[54px] !h-[88px] 1024px!left-[-27px] 1024px:!top-[-27px] translate-x-[-50%] translate-y-[-50%]" : ""}`} onMouseEnter={() => setState(true)} onMouseLeave={() => setState(false)}>
        <div className="w-[100%] h-[100%] rounded-[50%] bg-[#ACACAC]"></div>
      </div>
      <div className="bg-[#F1632B] w-[6px] h-[6px] 1024px:w-[3px] 600px:w-[2px] 600px:h-[2px] 1024px:h-[3px] rounded-[50%]"></div>
    </div>
  )
}

