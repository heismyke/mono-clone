import React from "react";
import CallToActionButtons from "./CTA";

const HeaderText: React.FC = () => {
  return (
    <div className="py-5">
      <h1 className="font-suse text-[60px] font-[500]">
        Reliably access bank accounts
      </h1>
      <p className="font-DMsans pt-3 font-[400] text-[20px]">
        Mono helps businesses to access high-quality financial data and direct
        bank payments.
      </p>
      <CallToActionButtons />
    </div>
  );
};

export default HeaderText;
