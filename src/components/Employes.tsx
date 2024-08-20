
export default function Employes({ imgSrc, title, subTitle }: { imgSrc: string, title: string, subTitle: string }) {
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