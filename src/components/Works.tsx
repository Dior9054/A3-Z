
export default function Works({ blockClass, className, title }: { blockClass: string, className: string, title: string }) {
    return (
        <div className={className}>
            <div className={blockClass}></div>
            <div>
                <h6 className="text-[#FFFFFF] font-monrope font-[700] text-[18px] leading-[24px] max-w-[275px] w-[100%] mb-[12px] mt-[24px] 1440px:text-[16px] 1200px:text-[14px] 600px:text-[12px]">{title}</h6>
                <div className="flex flex-wrap gap-[6px] mb-[64px] 1024px:mb-[28px]">
                    <button className="text-[#FFFFFF] font-monrope font-[300] text-[14px] leading-[19px] rounded-[20px] border border-solid border-[#FFFFFF40] px-[14px] h-[35px] 600px:text-[12px] 600px:h-[30px] 600px:px-[11px]">Сайт</button>
                    <button className="text-[#FFFFFF] font-monrope font-[300] text-[14px] leading-[19px] rounded-[20px] border border-solid border-[#FFFFFF40] px-[14px] h-[35px] 600px:text-[12px] 600px:h-[30px] 600px:px-[11px]">Дизайн</button>
                    <button className="text-[#FFFFFF] font-monrope font-[300] text-[14px] leading-[19px] rounded-[20px] border border-solid border-[#FFFFFF40] px-[14px] h-[35px] 600px:text-[12px] 600px:h-[30px] 600px:px-[11px]">Промышленность</button>
                </div>
            </div>
        </div>
    )
}