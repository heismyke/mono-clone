import CTA_button from "../shared/components/CTA_button"

function CTAButton() {
  return(
    <div className="w-[100%]  gap-5 flex flex-col  sm:flex sm:flex-row">
       <CTA_button 
        text="Get started for free" 
        bgColor="bg-[#0055BA]" 
        textColor="text-white" 
        iconColor="text-white"/>
        <CTA_button 
        text="Contact Sales" 
        bgColor="bg-[#F5F5F5]" 
        textColor="text-black" 
        iconColor="text-black"/>

    </div> 
  )
}

export default CTAButton;
