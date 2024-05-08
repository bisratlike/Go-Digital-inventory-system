import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
  HomeIcon,
} from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon,ShoppingCartIcon   } from "@heroicons/react/24/outline";
// import { MenuIcon } from '@heroicons/react/24/outline';

import { Link } from "react-router-dom";
import { useState } from "react";
 
 function SideBar() {
  const [open, setOpen] = React.useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <aside className="w-64 absolute inset-y-0 left-0">
   <div className=" hidden md:block fixed top-14  ">
    <Card className=" h-[100vh] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 bg-background-color flex flex-col">
      <div className="mt-[44.6px]">
        <Typography variant="h6" color="blue-gray">
          General
        </Typography>
      </div>
      <List>
     <Link to='/'>
      <ListItem>
          <ListItemPrefix>
            <HomeIcon className="h-8 w-8" />
          </ListItemPrefix>
          <Typography color="blue-gray" className="mr-auto font-bold text-[25px]">
                Home
              </Typography>
        </ListItem>
        </Link>
        <Accordion
          open={open === 1}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 1}>
            <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
              <ListItemPrefix>
                <ShoppingCartIcon  className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
                Sales
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            {open==1 && (
            <List className="p-0">
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Customer
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Sales Order
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Invoices
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Recieved payments
              </ListItem>
            </List>
            )}
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 2}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 2}>
            <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3">
              <ListItemPrefix>
                <ShoppingBagIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
                Purchase
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody>
            {open === 2 && (
              <List className="p-0">
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  Vendors
                </ListItem>
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  Purchase Orders
                </ListItem>
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  Purchase Recieves
                </ListItem>
              </List>
            )}
          </AccordionBody>
        </Accordion>

        <Accordion
          open={open === 3}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${open === 3 ? "rotate-180" : ""}`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 3}>
            <AccordionHeader onClick={() => handleOpen(3)} className="border-b-0 p-3">
              <ListItemPrefix>
                <PresentationChartBarIcon  className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
                Report
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody>
            {open === 3 && (
              <List className="p-0">
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  Orders
                </ListItem>
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  Products
                </ListItem>
              </List>
            )}
          </AccordionBody>
        </Accordion>
        <hr className="my-2 border-blue-gray-50" />

        <div className="">
        <Typography variant="h6" color="blue-gray">
          Support
        </Typography>
      </div>
        {/* <ListItem>
          <ListItemPrefix>
            <InboxIcon className="h-5 w-5" />
          </ListItemPrefix>
          Inbox
          <ListItemSuffix>
            <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
          </ListItemSuffix>
        </ListItem> */}
        <ListItem>
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          Profile
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Settings
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
    </Card>
    </div>

    <div className="lg:hidden fixed top-6 right-14 z-100">
        <button onClick={toggleSidebar} className="text-white">
        <FontAwesomeIcon icon={faBars} size="lg" />
        </button>
    </div>

    {
      isSidebarOpen && (
        <Card className="fixed top-12 right-6 h-[50vh] w-[70%] bg-gray-100 shadow-xl z-50 p-4 md:hidden"> {/* Responsive sidebar */}
          <Typography variant="h6" color="blue-gray">
            General
          </Typography>
          <List>
            <ListItem>
              <ListItemPrefix>
                <HomeIcon className="h-7 w-7" />
              </ListItemPrefix>
              <Typography className="mr-auto font-bold text-[25px]">Home</Typography>
            </ListItem>
            {/* Add other list items or accordions here */}
            <ListItem>
              <ListItemPrefix>
                <UserCircleIcon className="h-7 w-7" />
              </ListItemPrefix>
              Profile
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <Cog6ToothIcon className="h-7 w-7" />
              </ListItemPrefix>
              Settings
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <PowerIcon className="h-7 w-7" />
              </ListItemPrefix>
              Log Out
            </ListItem>
          </List>
        </Card>
      )
    }
</aside>
  );
}

export default SideBar