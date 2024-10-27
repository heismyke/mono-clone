import GettingStartedBackground from "./assets/getstarted.png"
import Plug from "./assets/icon_plug.png"
import LiveCode from "./assets/livecode.png"
import BriefCase from "./assets/briefcase.png"
import UiUX from "./assets/ui.png"
import Slack from "./assets/slack.png"
import { FiArrowUpRight } from "react-icons/fi";


type GettingStartedlinks = {
  title: string,
  link: string,
  linkIcon: React.ComponentType,
  icon: string
}

const GettingStarted = () => {
  const gettingStartedLinks: GettingStartedlinks[] = [
    {
      title: "Plug-and-play SDKs",
      link: "Explore our SDKs",
      linkIcon: FiArrowUpRight,
      icon: BriefCase
    },
    {
      title: "Beautiful seamless UX",
      link: "See a demo",
      linkIcon: FiArrowUpRight,
      icon: UiUX
    },
    {
      title: "Always-on support",
      link: "Join us on Slack",
      linkIcon: FiArrowUpRight,
      icon: Slack
    }



  ]
  return (
    <div className="w-[100%] bg-blue-300 flex flex-col py-16 items-center justify-center">
      <div className="w-full p-5 md:pl-9 lg:pl-14 xl:pl-16 my-10">
        <h1 className="text-[45px] font-DMsans text-white xl:text-[65px] font-semibold ">Getting started</h1>
      </div>
      <div className="w-[90%] rounded-xl bg-white lg:pt-16 flex flex-col lg:flex-row">
        <div className="p-5 flex flex-col gap-4 xl:pl-16">
          <img src={Plug} width={70} height={70} alt="mono thumbnail" />
          <h2 className="font-medium font-DMsans text-[35px] max-w-[70%] md:text-[45px] lg:max-w-[97%] xl:max-w-[66%] md:max-w-[40%]">Powerful APIs and easy-to-use resources</h2>
          <a href="" className="flex items-center gap-3 text-blue-600">Read our API docs <FiArrowUpRight className="text-blue-800" /></a>
        </div>
        <div className="px-5 lg:pt-6 lg:pr-10 xl:pr-16 mt-5">
          <img src={LiveCode} alt="mono thumbnail" />
        </div>
      </div>
      <div className="w-[90%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 gap-5">
        {gettingStartedLinks.map((link, index) => (
            <div key={index} className="rounded-xl p-5 bg-white flex flex-col gap-3">
              <img src={link.icon} alt="mono thumbnail" width={70} height={70} />
              <h3 className="font-DMsans font-medium text-[25px] lg:max-w-[70%]">{link.title}</h3>
              <a href="" className="flex items-center gap-3 text-blue-600">{link.link} <FiArrowUpRight /> </a>
            </div>
          ))}
      </div>
    </div>
  )
}

export default GettingStarted
