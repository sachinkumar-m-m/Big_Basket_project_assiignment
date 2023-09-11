import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  MenuItem,
  MenuList,
  Typography,
} from "@mui/material";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import "../../style/CssStyle/index.css";
import { NavLink } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import {
  FooterFlag,
  FooterGrid,
  FooterHeader,
  FooterHeaderText,
  FooterMain,
  FooterMenuAlign,
} from "../../style/Footer";

function Footer() {
  return (
    <FooterMain pt={2} style={{ backgroundColor: "#000" }}>
      <Container sx={{ paddingTop: 6 }}>
        <FooterHeader sx={{ display: "flex", justifyContent: "space-between" }}>
          <FooterHeaderText color={"#fff"} variant="h4" fontWeight={500}>
            Coolway
          </FooterHeaderText>
          <FooterFlag>
            <Button
              variant="outlined"
              startIcon={
                <img
                  src="https://res.cloudinary.com/dhina/image/upload/v1661316292/ProjectImage/Flag_of_India_dfah0c.png"
                  height={20}
                />
              }
              endIcon={<KeyboardArrowDownIcon style={{ color: "#fff" }} />}
              className="FooterButton"
            >
              <Typography color={"#fff"}>india</Typography>
            </Button>
            <Button
              variant="outlined"
              startIcon={<LanguageOutlinedIcon style={{ color: "#fff" }} />}
              endIcon={<KeyboardArrowDownIcon style={{ color: "#fff" }} />}
              sx={{ ml: 3 }}
              className="FooterButton"
            >
              <Typography color={"#fff"}>English</Typography>
            </Button>
          </FooterFlag>
        </FooterHeader>
        <Grid container sx={{ mt: "20px" }}>
          <FooterGrid item lg={3} xs={12} sm={3}>
            <FooterMenuAlign>
              <Typography fontWeight={500} color={"#fff"}>
                ABOUT US
              </Typography>
              <MenuList
                sx={{
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <MenuItem
                  sx={{
                    padding: 0,
                    display: "inline-block",
                    mt: "20px",
                    ":hover": { backgroundColor: "transparent" },
                  }}
                >
                  <NavLink to={`/`} className="FooterLink">
                    Who we are
                  </NavLink>
                </MenuItem>
                <MenuItem
                  sx={{
                    padding: 0,
                    display: "inline-block",
                    mt: "8px",
                    ":hover": { backgroundColor: "transparent" },
                  }}
                >
                  <NavLink to={`/`} className="FooterLink">
                    Blog
                  </NavLink>
                </MenuItem>
                <MenuItem
                  sx={{
                    padding: 0,
                    display: "inline-block",
                    mt: "8px",
                    ":hover": { backgroundColor: "transparent" },
                  }}
                >
                  <NavLink to={`/`} className="FooterLink">
                    Work With Us
                  </NavLink>
                </MenuItem>
                <MenuItem
                  sx={{
                    padding: 0,
                    display: "inline-block",
                    mt: "8px",
                    ":hover": { backgroundColor: "transparent" },
                  }}
                >
                  <NavLink to={`/`} className="FooterLink">
                    Report Fraud
                  </NavLink>
                </MenuItem>
              </MenuList>
            </FooterMenuAlign>
          </FooterGrid>
          <FooterGrid item lg={3} xs={12} sm={3}>
            <Box>
              <Typography fontWeight={500} color={"#fff"}>
                CONTACT US
              </Typography>
              <MenuList
                sx={{
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <MenuItem
                  sx={{
                    padding: 0,
                    display: "inline-block",
                    mt: "20px",
                    ":hover": { backgroundColor: "transparent" },
                  }}
                >
                  <NavLink to={`/`} className="FooterLink">
                    TamilNadu,india
                  </NavLink>
                </MenuItem>
                <MenuItem
                  sx={{
                    padding: 0,
                    display: "inline-block",
                    mt: "8px",
                    ":hover": { backgroundColor: "transparent" },
                  }}
                >
                  <NavLink to={`/`} className="FooterLink">
                    +91 000000****
                  </NavLink>
                </MenuItem>
                <MenuItem
                  sx={{
                    padding: 0,
                    display: "inline-block",
                    mt: "8px",
                    ":hover": { backgroundColor: "transparent" },
                  }}
                >
                  <NavLink to={`/`} className="FooterLink">
                   sachindwd1999@gmail.com
                  </NavLink>
                </MenuItem>
              </MenuList>
            </Box>
          </FooterGrid>
          <FooterGrid item lg={3} xs={12} sm={3}>
            <Box>
              <Typography fontWeight={500} color={"#fff"}>
                FOR RESTAURANTS
              </Typography>
              <MenuList
                sx={{
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <MenuItem
                  sx={{
                    padding: 0,
                    display: "inline-block",
                    mt: "20px",
                    ":hover": { backgroundColor: "transparent" },
                  }}
                >
                  <NavLink to={`/`} className="FooterLink">
                    Partner With Us
                  </NavLink>
                </MenuItem>
                <MenuItem
                  sx={{
                    padding: 0,
                    display: "inline-block",
                    mt: "10px",
                    ":hover": { backgroundColor: "transparent" },
                  }}
                >
                  <NavLink to={`/`} className="FooterLink">
                    App for you
                  </NavLink>
                </MenuItem>
              </MenuList>
            </Box>
          </FooterGrid>
          <FooterGrid item lg={3} xs={12} sm={3}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography fontWeight={500} color={"#fff"}>
                SOCIAL LINKS
              </Typography>
              <MenuList
                sx={{
                  padding: 0,
                  display: "flex",
                }}
              >
                <MenuItem
                  sx={{
                    padding: 0,
                    display: "inline-block",
                    mt: "20px",
                    mr: "8px",
                    ":hover": { backgroundColor: "transparent" },
                  }}
                >
                  <NavLink to={`/`} className="FooterLink">
                    <LinkedInIcon
                      style={{
                        fontSize: "1.7rem",
                        color: "#fff",
                        margin: "2px 2px 2px 0px",
                      }}
                    />
                  </NavLink>
                </MenuItem>
                <MenuItem
                  sx={{
                    padding: 0,
                    display: "inline-block",
                    mt: "20px",
                    mr: "8px",
                    ":hover": { backgroundColor: "transparent" },
                  }}
                >
                  <NavLink to={`/`} className="FooterLink">
                    <InstagramIcon
                      style={{
                        fontSize: "1.7rem",
                        color: "#fff",
                        margin: 2,
                      }}
                    />
                  </NavLink>
                </MenuItem>
                <MenuItem
                  sx={{
                    padding: 0,
                    display: "inline-block",
                    mt: "20px",
                    mr: "8px",
                    ":hover": { backgroundColor: "transparent" },
                  }}
                >
                  <NavLink to={`/`} className="FooterLink">
                    <TwitterIcon
                      style={{
                        fontSize: "1.7rem",
                        color: "#fff",
                        margin: 2,
                      }}
                    />
                  </NavLink>
                </MenuItem>
                <MenuItem
                  sx={{
                    padding: 0,
                    display: "inline-block",
                    mt: "20px",
                    mr: "8px",
                    ":hover": { backgroundColor: "transparent" },
                  }}
                >
                  <NavLink to={`/`} className="FooterLink">
                    <YouTubeIcon
                      style={{
                        fontSize: "1.7rem",
                        color: "#fff",
                        margin: 2,
                      }}
                    />
                  </NavLink>
                </MenuItem>
              </MenuList>
              <img
                src="https://res.cloudinary.com/dhina/image/upload/v1661316264/ProjectImage/apple_app_kcflj6.webp"
                alt=""
                height={41}
                width={135}
                style={{ paddingRight: "10px", marginTop: "10px" }}
              />
              <img
                src="https://res.cloudinary.com/dhina/image/upload/v1661316319/ProjectImage/google_app_eygftf.webp"
                alt=""
                height={42}
                width={134}
                style={{ paddingTop: 10 }}
              />
            </Box>
          </FooterGrid>
        </Grid>
        <Divider color="#fff" sx={{ mt: 5 }} />
        <Typography
          color={"#ccc"}
          sx={{ mt: 3, fontSize: "0.9rem", fontWeight: "lighter" }}
        >
          By continuing past this page, you agree to our Terms of Service,
          Cookie Policy, Privacy Policy and Content Policies. All trademarks are
          properties of their respective owners. 2022-2023 © PizzaWorld™ Ltd.
          All rights reserved.
        </Typography>
      </Container>
    </FooterMain>
  );
}

export default Footer;
