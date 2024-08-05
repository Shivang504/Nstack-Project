import React from "react";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function NavbarMenu() {
  const getItem = useSelector((state) => state.products.cart);
  const pages = ["Home", "Your Cart", "Order"];

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: {
          xs: "none",
          md: "flex",
          justifyContent: "end",
          gap: "25px",
        },
      }}
    >
      {pages.map((page) => (
        <Button key={page} sx={{ my: 2, color: "inherit" }}>
          <NavLink
            className={(e) => {
              return e.isActive ? "red" : "";
            }}
            to={`/${page.replace(" ", "")}`}
            style={{ textDecoration: "none", color: "white" }}
          >
            {page === "Your Cart" ? `YOUR CART (${getItem.length})` : page}
          </NavLink>
        </Button>
      ))}
    </Box>
  );
}

export default NavbarMenu;
