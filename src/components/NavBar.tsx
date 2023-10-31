import AnchorLink from "react-anchor-link-smooth-scroll";
import logo from "../assets/public/logo.svg";
import CustomButton from "./CustomButton";

const NavBar: React.FC = () => {
  return (
    <header className="w-full  absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent">
        <AnchorLink href="/" className="flex justify-center items-center">
          <img
            src={logo}
            alt="Auto-Central logo"
            className="object-contain"
            width={118}
            height={18}
          />
        </AnchorLink>
        <CustomButton
          title="Sign In"
          btnType="button"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
        />
      </nav>
    </header>
  );
};

export default NavBar;
