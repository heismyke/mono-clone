import React from "react";

type HeaderProps = {
    children : React.ReactNode
    tailwindClass? : string

}

const HeaderText = ({children, tailwindClass}: HeaderProps) => {
    return(
        <div  className="text-[40px] xl:text-[65px] w-[100%] md:w-[70%] lg:w-[60%] xl:w-[50%] font-DMsans font-semibold leading-[70px] md:leading-[73.6px] lg:leading-[73.6px] xl:leading-[100px]">{children}</div>
    )
}

export default  HeaderText