import Typography from "@mui/material/Typography";

function NavbarLogoCenter() {
  return (
    <Typography
      variant="h5"
      noWrap
      component="a"
      href="#app-bar-with-responsive-menu"
      sx={{
        mr: 2,
        display: { xs: "flex", md: "none" },
        flexGrow: 1,
        fontFamily: "monospace",
        fontWeight: 700,
        letterSpacing: ".2rem",
        color: "inherit",
        textDecoration: "none",
      }}
    >
      APNA SHOP
    </Typography>
  );
}

export default NavbarLogoCenter;
