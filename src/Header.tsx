import Notification from "./components/notification";
import HeaderText from "./components/Header_text";
import CTAButton from "./components/CTAButton";
import HeaderImageMono from "./assets/headerMono.png";
function Header() {
  return (
    <div className="p-5 flex md:p-5 lg:p-10  xl:justify-between xl:items-center xl:p-0 xl:m-0 xl:mx-auto  xl:w-[90%]">
      <div className="xl:w-[55%]  xl:pl-16">
        <Notification />
        <HeaderText />
        <CTAButton />
      </div>
      <div className="lg:h-[500px] lg:w-[72%] xl:h-[650px] xl:w-[50%] bg-green-500 relative hidden lg:block">
        <img src={HeaderImageMono} className="bg-cover w-full absolute h-full" width={0} height={0} alt="mono thumbnail" />
      </div>
    </div>
  );
}

export default Header;
