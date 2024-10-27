import React from "react";

const HeaderText: React.FC = () => {

  return (
    <div className="py-16">
      <h1 className="font-suse  xl:text-[85px] lg:max-w-[80%] md:w-[80%] w-[100%] lg:text-[70px] text-left md:text-[80px] text-[45px] sm:text-[50px] font-semibold leading-tight">
        Reliably access bank accounts
      </h1>
      <p className="font-DMsans pt-5 max-w-[95%] md:max-w-[90%] leading-10 md:leading-[55px] md:text-[30px] font-normal text-left text-[20px]">
        Mono helps businesses to access high-quality financial data and direct
        bank payments.
      </p>
    </div>
  );
};

export default HeaderText;
