import React from "react";
import MainButton from "./Button";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import Logo from "../logo";

const MainNavBar = () => {
  return (
    <>
      <Navbar>
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
        <MainButton title={"LOGOUT"} />
      </Navbar>
    </>
  );
};

export default MainNavBar;
