import { Box, Button, Container } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

function Pnf() {
  return (
    <Container
      align="center"
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box>
        <img
          src="https://res.cloudinary.com/dhina/image/upload/v1661316318/ProjectImage/page_not_found_kyw8nr.png"
          alt=""
        />
      </Box>
      <NavLink to={`/`} style={{ textDecoration: "none" }}>
        <Button variant="outlined" startIcon={<KeyboardArrowLeftIcon />}>Return Home</Button>
      </NavLink>
    </Container>
  );
}

export default Pnf;
