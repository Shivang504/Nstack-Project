import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

function NavbarLogo() {
  return (
    <Typography
      variant="h6"
      noWrap
      component="a"
      href="#app-bar-with-responsive-menu"
      sx={{
        mr: 2,
        display: { xs: "none", md: "flex" },
        fontFamily: "monospace",
        fontWeight: 800,
        letterSpacing: ".2rem",
        color: "inherit",
        textDecoration: "none",
      }}
    >
      <Link to="/Home">
        <h3 className="logo">APNA Hi He</h3>
      </Link>
    </Typography>
  );
}

export default NavbarLogo;
