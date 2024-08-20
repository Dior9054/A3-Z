import { Link } from "react-router-dom";

export default function FooterBlock({ title, links, content }: { title: JSX.Element, links?: { href: string, text: string }[], content?: any }) {
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