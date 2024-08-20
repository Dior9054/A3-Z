
import { useState } from "react"

export default function MapDotes({ left, top }: { left: string, top: string }) {
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