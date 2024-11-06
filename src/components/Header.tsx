import HeaderImageMono from '../assets/headerMono.png'
import { FaArrowRight } from 'react-icons/fa6'
import CtaButton from '../shared/CtaButton'

function Header() {
  return (
    <div className="p-5 flex md:p-5 lg:p-10  xl:justify-between xl:items-center xl:p-0 xl:m-0 xl:mx-auto  xl:w-[90%]">
      <div className="xl:w-[55%]  xl:pl-16">
        <div>
          <div className="w-[100%]  sm:w-[100%] md:w-[50%] lg:w-[60%] xl:w-[45%] h-[56px] flex justify-around items-center rounded-full bg-[#F5F5F5]">
            <div className="w-[20%] h-[32px] flex items-center justify-center bg-[#0055BA] rounded-full">
              <p className="text-white">NEW</p>
            </div>
            <h2>Mono is live in Kenya</h2>
            <button>
              <FaArrowRight />
            </button>
          </div>
        </div>
        <div className="py-16">
          <h1 className="font-suse  xl:text-[85px] lg:max-w-[80%] md:w-[80%] w-[100%] lg:text-[70px] text-left md:text-[80px] text-[45px] sm:text-[50px] font-semibold leading-tight">
            Reliably access bank accounts
          </h1>
          <p className="font-DMsans pt-5 max-w-[95%] md:max-w-[90%] leading-10 md:leading-[55px] md:text-[30px] font-normal text-left text-[20px]">
            Mono helps businesses to access high-quality financial data and direct bank payments.
          </p>
        </div>
        <div className="w-[100%]  gap-5 flex flex-col  sm:flex sm:flex-row">
          <CtaButton
            text="Get started for free"
            bgColor="bg-[#0055BA]"
            textColor="text-white"
            iconColor="text-white"
          />
          <CtaButton
            text="Contact Sales"
            bgColor="bg-[#F5F5F5]"
            textColor="text-black"
            iconColor="text-black"
          />
        </div>
      </div>
      <div className="lg:h-[400px] lg:w-[72%] xl:h-[650px] xl:w-[50%]  relative hidden lg:block">
        <img
          src={HeaderImageMono}
          className="bg-cover w-full absolute h-full"
          width={0}
          height={0}
          alt="mono thumbnail"
        />
      </div>
    </div>
  )
}

export default Header
