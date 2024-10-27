import { FaArrowRight } from "react-icons/fa6";

function Notification() {
  return (
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
  );
}

export default Notification;
