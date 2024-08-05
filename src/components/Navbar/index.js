import React from "react";
import "../../Style/Navbar.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import NavbarLogoCenter from "./LogoCenter";
import NavbarMenu from "./Menu";
import NavbarMenuRes from "./MenuResponsive";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import NavbarLogo from "./Logo";

const Navbar = () => {
  return (
    <>
      <AppBar style={{ backgroundColor: "#232f3e" }}>
        <Container maxWidth="xl">
          <Toolbar>
            <LocalMallIcon
              sx={{ display: { xs: "none", md: "flex" }, mr: 2 }}
            />
            <NavbarLogo />
            <NavbarMenuRes />
            <NavbarLogoCenter />
            <NavbarMenu />
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;
