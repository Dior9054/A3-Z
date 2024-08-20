
export default function Swiper_Info({ imgSrc, title, name, surname }: { imgSrc: string, title: string, name: string, surname: string }) {
    return (
        <div className="flex items-center flex-col gap-[26px] 1024px:gap-[11px] max-w-[806px] 1024px:max-w-[384px] 1024px:min-w-[384px] 1200px:max-w-[575px] 1200px:min-w-[575px] min-w-[806px] w-[100%] 600px:max-w-[273px] 600px:min-w-[273px]">
            <img src={imgSrc} className="w-[108px] 1200px:w-[90px] 1200px:h-[90px] h-[108px] rounded-[50%] border-[4.13px] 1024px:w-[60px] 1024px:h-[60px] border-solid border-[#E13F3E] shadow-[-6px_11px_28px_0px_#841F1F8A,_-22px_46px_51px_0px_#841F1F78,_-50px_103px_69px_0px_#841F1F47,_-89px_183px_81px_0px_#841F1F14,_-140px_285px_89px_0px_#841F1F03]" />
            <p className="text-[#FFA1A1] text-center font-monrope font-[800] text-[24px] 1200px:text-[18px] uppercase 1024px:text-[12px] 1024px:leading-[15px] 1200px:leading-[24px] leading-[34px] tracking-[-0.04em] 800px:text-[10px] 600px:text-[8px]">{title}</p>
            <div className="flex items-center flex-col gap-[10px] 1024px:gap-[0]">
                <p className="text-[#FFFFFF] font-monrope font-[700] text-[16px] 1024px:text-[12px] leading-[21px] 600px:text-[10px] 600px:leading-[10px]">{name}</p>
                <p className="text-[#FFA1A1] font-monrope font-[700] text-[12px] 1024px:text-[10px] leading-[18px] 600px:text-[8px] 600px:leading-[8px]">{surname}</p>
            </div>
        </div>
    )
}