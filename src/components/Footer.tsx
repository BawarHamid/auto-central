import AnchorLink from "react-anchor-link-smooth-scroll";
import logo from "../assets/public/logo.svg";
import { footerLinks } from "../constants";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <img
            src={logo}
            alt="logo-Auto"
            width={118}
            height={18}
            className="object-contain"
          />
          <p className="text-base text-gray-700">
            CarHub 2023 <br />
            All rights reserved &copy;
          </p>
        </div>
        <div className="flex-1 w-full flex md:justify-end flex-wrap max-md:mt-10 gap-20">
          {footerLinks.map((link) => (
            <div
              key={link.title}
              className="flex flex-col gap-6 text-base min-w-[170px]"
            >
              <h3 className="font-bold">{link.title}</h3>

              {link.links.map((item) => (
                <AnchorLink key={item.title} href={item.url}>
                  {item.title}
                </AnchorLink>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        <p>@2023 AutoHub. All Rights Reserved</p>
        <div className="flex-1 flex sm:justify-end justify-center max-sm:mt-4 gap-10">
          <AnchorLink href="/" className="text-gray-500">
            Priavcy Policy
          </AnchorLink>
          <AnchorLink href="/" className="text-gray-500">
            Terms of Use
          </AnchorLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
