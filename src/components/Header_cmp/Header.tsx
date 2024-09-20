import Notification from "./components/notification";
import HeaderText from "./components/Header_text";
import CTA_button from "../../shared/components/CTA_button.tsx"
function Header() {
  return (
    <div className="p-5 md:p-5">
      <Notification />
      <div className="  my-10">
        <HeaderText />
       <CTA_button /> 
      </div>
    </div>
  );
}

export default Header;
