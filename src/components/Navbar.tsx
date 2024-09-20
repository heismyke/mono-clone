import React from "react";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";

interface SignupButtonProps {
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

interface Logo {
  src: string;
  alt: string;
}
interface Links {
  name: string;
  href: string;
}
interface SignupButton {
  text: string;
  href: string;
}
interface NavbarData {
  logo: Logo;
  links: Links[];
  signupButton: SignupButton;
}
const navbarData: NavbarData = {
  logo: {
    src: "/images/logo/mono.png",
    alt: "logo",
  },
  links: [
    { name: "Why Mono", href: "/why" },
    { name: "Products", href: "/products" },
    { name: "Learn", href: "/learn" },
    { name: "Developers", href: "/developers" },
  ],
  signupButton: {
    text: "Sign Up",
    href: "/signup",
  },
};

const Navbar: React.FC<SignupButtonProps> = ({
  disabled = false,
  type = "button",
}) => {
  const [menu, setMenu] = useState(false);
  const [isDisabled, setIsDisabled] = useState(disabled);
  const handleButtonClick = () => {
    setMenu(!menu);
  };
  return (
    <div>
      <nav className="w-[100%] p-2 md:p-5 relative flex items-center justify-between lg:justify-around">
        <a href="/">
          <div className="px-4 flex justify-center gap-2 items-center">
            <img
              src={navbarData.logo.src}
              width={35}
              height={35}
              className="pt-1"
              alt={navbarData.logo.alt}
            />
            <h1 className="font-semibold text-[30px]">mono</h1>
          </div>
        </a>
        <ul
          className={`${menu ? "flex" : "hidden lg:flex lg:items-center lg:justify-center"} w-[100%] lg:w-[60%] z-50 bg-white shadow-lg lg:shadow-none top-[80px] lg:top-0  flex-col lg:flex-row gap-10 pl-10 py-5 left-0  lg:right-0 absolute lg:relative`}
        >
          {navbarData.links.map((nav_item, index) => (
            <a href={nav_item.href} key={index}>
              <li>{nav_item.name}</li>
            </a>
          ))}
        </ul>
        <button
          className="block lg:hidden"
          onClick={handleButtonClick}
          disabled={isDisabled}
          type={type}
        >
          <CiMenuFries size={30} />
        </button>
        <a className="hidden lg:block" href={navbarData.signupButton.href}>
          <button className="bg-[#0055BA] text-white py-3 px-5 rounded-xl">
            <p>{navbarData.signupButton.text}</p>
          </button>
        </a>
      </nav>
    </div>
  );
};
export default Navbar;
