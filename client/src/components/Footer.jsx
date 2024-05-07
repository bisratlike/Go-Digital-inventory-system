import { Typography } from "@material-tailwind/react";
import Logo from "../assets/GoDigital-Logo.png"
 
 function Footer() {
  return (
    <footer className="w-full bg-white p-8 ">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
        <img src={Logo} alt="GoDigital Logo" className="w-[150px]" />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Dashboard
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Sales
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Banking
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Records
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <div className="flex items-center justify-between">
      <Typography color="blue-gray" className="text-center font-normal">
        Privacy Policy
      </Typography>
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; 2023  Go Digital Technologies, Inc.
      </Typography>
      <Typography color="blue-gray" className="text-center font-normal">
        Terms and Conditions
      </Typography>
      </div>
    </footer>
  );
}

export default Footer;