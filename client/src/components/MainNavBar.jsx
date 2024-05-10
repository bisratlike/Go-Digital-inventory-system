import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
import { ChevronRightIcon, ChevronDownIcon, PlusIcon   } from "@heroicons/react/24/outline";
import { useState } from "react";
 function MainNavBar() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const [open, setOpen] = React.useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
 
  const navList = (

    
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Accordion
          open={open === 1}
          className="relative"
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""} text-secondary-color`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 1}>
            <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
              
              <Typography color="blue-gray" className="mr-auto font-normal text-secondary-color">
                GoDigital
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="absolute">
            {open === 1 && (
              <List className="p-0 bg-background-color">
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  Company
                </ListItem>
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  Company
                </ListItem>
              </List>
            )}
          </AccordionBody>
        </Accordion>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Button className="bg-primary-color rounded-[5px] border p-3"><PlusIcon className="h-5 w-5 "/></Button>
      </Typography>
      
      
    </ul>
  );
 
  return (
    <div className=" max-h-[768px] z-1000  w-full ">

      <Navbar className=" w-full top-0 z-10 h-max  rounded-none px-4 py-2 lg:px-8 lg:py-4">

        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer px-4 py-3 font-medium text-white bg-primary-color"
          >
            GoDigital Inventory
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            {/* <div className="flex items-center gap-x-1">
              <Button
                variant="text"
                size="sm"
                className="hidden lg:inline-block"
              >
                <span>Log In</span>
              </Button>
              <Button
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block text-secondary-color"
              >
                <span>Sign in</span>
              </Button>
            </div> */}
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit text-secondary-color hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1">
            <Button fullWidth variant="text" size="sm" className="">
              <span>Log In</span>
            </Button>
            <Button fullWidth variant="gradient" size="sm" className="">
              <span>Sign in</span>
            </Button>
          </div>
        </MobileNav>
      </Navbar>
      
    </div>
  );
}

export default MainNavBar