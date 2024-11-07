import HeaderText from "../shared/HeaderText";
import HeaderParagraph from "../shared/HeaderParagraph";
import Wallet from "../assets/wallet.png"

const BuildingBusinesses = () => {
   return(
       <div className="w-[90%] mx-auto md:w-[90%] xl:w-[80%]">
           <HeaderText>
               Building businesses with Mono
           </HeaderText>
           <HeaderParagraph>
               Here are some of the interesting features and experiences powered by Mono.
           </HeaderParagraph>
           <div className="w-full  bg-[#F5F5F5] rounded-xl">

                <img src={Wallet} alt="mono thumbnail" width={390} height={534} />
           </div>
       </div>
   )
}

export default BuildingBusinesses