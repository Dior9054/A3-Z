
export default function Logo({ logoMove }: { logoMove?: string }) {
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