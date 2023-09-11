import { Box, Stack, Typography, MenuList, MenuItem } from "@mui/material";
import { Container } from "@mui/system";
import "../../style/CssStyle/index.css";
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import MenuName from "./MenuName";
import Aos from "aos";

function Menu_Item() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Box sx={{ mt: "75px" }}>
      <Stack
        sx={{
          background: `url(${"https://res.cloudinary.com/dhina/image/upload/v1661316033/ProjectImage/bg-1_wo77vh.jpg"})center`,
          backgroundSize: "cover",
          height: "70vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Typography
          data-aos="zoom-in"
          variant="h2"
          fontWeight={600}
          color="#fff"
        >
          Menu
        </Typography>
        <Box
          data-aos="fade-up"
          sx={{
            position: "absolute",
            bottom: { sm: "-6%", xs: "-10%", md: "-10%" },
            left: "20%",
            height: 150,
            width: 215,
          }}
        >
          <img
            src="https://res.cloudinary.com/dhina/image/upload/v1661422458/ProjectImage/header-shape-4_tqtwrf.png"
            alt=""
            height={"100%"}
            width={"100%"}
          />
        </Box>
        <Box
          data-aos="fade-down"
          sx={{
            position: "absolute",
            top: { sm: "-5%", xs: "-10%", md: "-10%" },
            right: "25%",
            height: 120,
            width: 160,
            display: { xs: "none", md: "block", sm: "block" },
          }}
        >
          <img
            src="https://res.cloudinary.com/dhina/image/upload/v1661422458/ProjectImage/header-shape-4_tqtwrf.png"
            alt=""
            height={"100%"}
            width={"100%"}
          />
        </Box>
        <Box
          data-aos="fade-left"
          sx={{
            position: "absolute",
            top: "10%",
            left: "20%",
            height: 60,
            width: 90,
            display: { xs: "none", md: "block", sm: "block" },
          }}
        >
          <img
            src="https://res.cloudinary.com/dhina/image/upload/v1662029915/ProjectImage/header-shape-2_hwtb5a.png"
            alt=""
            height={"100%"}
            width={"100%"}
          />
        </Box>
        <Box
          data-aos="fade-down"
          sx={{
            position: "absolute",
            top: "-4%",
            left: "6%",
            height: 60,
            width: 90,
            display: { xs: "none", md: "block", sm: "block" },
          }}
        >
          <img
            src="https://res.cloudinary.com/dhina/image/upload/v1662288600/ProjectImage/header-shape-5_rkq51z.png"
            alt=""
            height={"100%"}
            width={"100%"}
          />
        </Box>
        <Box
          data-aos="fade-down"
          sx={{
            position: "absolute",
            bottom: "10%",
            right: "10%",
            height: 60,
            width: 90,
            display: { xs: "none", md: "block", sm: "block" },
          }}
        >
          <img
            src="https://res.cloudinary.com/dhina/image/upload/v1662029915/ProjectImage/header-shape-2_hwtb5a.png"
            alt=""
            height={"100%"}
            width={"100%"}
          />
        </Box>
        <Box
          data-aos="fade-right"
          sx={{
            position: "absolute",
            top: "10%",
            right: "4%",
            height: 40,
            width: 40,
            display: { xs: "none", md: "block", sm: "block" },
          }}
        >
          <img
            src="https://res.cloudinary.com/dhina/image/upload/v1662029915/ProjectImage/header-shape-1_o5xojd.png"
            alt=""
            height={"100%"}
            width={"100%"}
          />
        </Box>
        <Box
          data-aos="fade-left"
          sx={{
            position: "absolute",
            bottom: "6%",
            right: "40%",
            height: 40,
            width: 40,
            display: { xs: "none", md: "block", sm: "block" },
          }}
        >
          <img
            src="https://res.cloudinary.com/dhina/image/upload/v1662029915/ProjectImage/header-shape-1_o5xojd.png"
            alt=""
            height={"100%"}
            width={"100%"}
          />
        </Box>
        <Box
          data-aos="fade-left"
          sx={{
            position: "absolute",
            bottom: "70%",
            right: "6%",
            height: 30,
            width: 30,
            display: { xs: "none", md: "block", sm: "block" },
          }}
        >
          <img
            src="https://res.cloudinary.com/dhina/image/upload/v1662029915/ProjectImage/header-shape-1_o5xojd.png"
            alt=""
            height={"100%"}
            width={"100%"}
          />
        </Box>
        <Box
          data-aos="fade-left"
          sx={{
            position: "absolute",
            top: "50%",
            left: "-1%",
            height: 100,
            width: 100,
            display: { xs: "none", md: "block", sm: "block" },
          }}
        >
          <img
            src="https://res.cloudinary.com/dhina/image/upload/v1662029915/ProjectImage/header-shape-3_sjcmi8.png"
            alt=""
            height={"100%"}
            width={"100%"}
          />
        </Box>
        <Box
          data-aos="fade-left"
          sx={{
            position: "absolute",
            top: "30%",
            right: "37%",
            height: 100,
            width: 100,
            display: { xs: "none", md: "block", sm: "block" },
          }}
        >
          <img
            src="https://res.cloudinary.com/dhina/image/upload/v1662029915/ProjectImage/header-shape-3_sjcmi8.png"
            alt=""
            height={"100%"}
            width={"100%"}
          />
        </Box>
        <MenuList sx={{ display: "flex", position: "relative" }}>
          <MenuItem sx={{ padding: "0px", height: "0px" }}>
            <NavLink
              to={`/`}
              className="Menulist"
              style={{ paddingRight: "20px" }}
            >
              Home
            </NavLink>
            <Typography
              component={"div"}
              color={"#fff"}
              className="dot"
              sx={{ cursor: "default" }}
            >
              Our Menu
            </Typography>
          </MenuItem>
        </MenuList>
      </Stack>
      <Box>
        <Container>
          <MenuName />
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}

export default Menu_Item;
