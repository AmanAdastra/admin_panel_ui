"use client";
import React from "react";
import Themecomponent from "../ThemeComponent/Themecomponent";
import AvatarComponent from "../AvatarComponent/AvatarComponent";
import { AcmeLogo } from "@/app/Icons/AcmeLogo";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";

const menuItems = [
  "Profile",
  "Dashboard",
  "Activity",
  "Analytics",
  "System",
  "Deployments",
  "My Settings",
  "Team Settings",
  "Help & Feedback",
  "Log Out",
];

const NavComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="flex justify-between items-center h-fit bg-yellow-50 dark:bg-black p-4">
      <div className="">
        <Navbar
          onMenuOpenChange={setIsMenuOpen}
          className="bg-yellow-50 m-0 p-0 h-[10px] dark:bg-black"
        >
          <NavbarContent>
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="sm:hidden"
            />
            <NavbarBrand>
              <div className="flex items-center">

              <AcmeLogo />
              <p className="font-bold text-inherit dark:text-white pl-2 hidden md:block">ACME</p>
              </div>
            </NavbarBrand>
          </NavbarContent>

          <NavbarMenu>
            {menuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  color={
                    index === 2
                      ? "primary"
                      : index === menuItems.length - 1
                      ? "danger"
                      : "foreground"
                  }
                  className="w-full"
                  href="#"
                  size="lg"
                >
                  {item}
                </Link>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        </Navbar>
      </div>
      <div className="flex">
        <Themecomponent />
        <AvatarComponent />
      </div>
    </div>
  );
};

export default NavComponent;
