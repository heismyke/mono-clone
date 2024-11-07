import React from "react";

type HeaderParagraphProps = {
   children : React.ReactNode,
    tailwindclass? : string
}
const HeaderParagraph = ({children, tailwindclass}: HeaderParagraphProps) => {
    return (
       <div className="font-DMsans pt-5 max-w-[90%] md:max-w-[90%] lg:w-[50%] leading-10 md:leading-[55px] md:text-[30px] font-normal text-left text-[20px]">
           {children}
       </div>
    )
}

export default HeaderParagraph