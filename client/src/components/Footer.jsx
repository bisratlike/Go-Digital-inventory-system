import { Typography, List } from "@material-tailwind/react";
import Logo from "../assets/GoDigital-Logo.png";

const Footer = () => (
  <footer className="w-full bg-white bottom-0 p-3">
    <div className="p-[1rem] flex flex-row flex-wrap items-center justify-between lg:justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
      <img src={Logo} alt="GoDigital Logo" className="w-[150px]" />
      <ul className="flex flex-col lg:flex-row lg:items-center gap-y-2 gap-x-8">
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-montserrat text-[.9rem] font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Dashboard
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-montserrat text-[.9rem] font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Sales
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-montserrat text-[.9rem] font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Banking
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-montserrat text-[.9rem] font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Records
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-montserrat text-[.9rem] font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Contact Us
          </Typography>
        </li>
      </ul>
    </div>
    <div className="moto__social-container p-6 font-montserrat flex flex-col lg:flex-row items-center justify-between">
      <div className="moto__container">
        <Typography className="text-[.8rem] text-center lg:text-left leading-relaxed my-[1rem] font-[500] max-w-[400px]">Cultivating Efficiency, Tracking Excellence — 
Your Trusted Inventory Management Partner</Typography>
      </div>
      <div className="socials flex gap-3 items-center">
        <List className="text-[.8rem] font-[500]">social1</List>
        <List className="text-[.8rem] font-[500]">social1</List>
        <List className="text-[.8rem] font-[500]">social1</List>
      </div>
    </div>
    <hr className="my-8 border-blue-gray-50" />
    <div className="flex  items-center justify-between font-montserrat lg:text-[.9rem] text-[.7rem]">
      <Typography color="blue-gray" className="text-center font-montserrat font-normal">
        Privacy Policy
      </Typography>
      <Typography color="blue-gray" className="text-center font-montserrat font-normal">
        &copy; 2023 Go Digital Technologies, Inc.
      </Typography>
      <Typography color="blue-gray" className="text-center font-montserrat font-normal">
        Terms and Conditions
      </Typography>
    </div>
  </footer>
);

export default Footer;
