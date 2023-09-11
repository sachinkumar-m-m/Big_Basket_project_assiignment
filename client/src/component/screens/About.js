import { Box, Stack, Typography, Grid, Container } from "@mui/material";
import "../../style/CssStyle/index.css";
import React, { useEffect } from "react";
import Link from "@mui/material/Link";
import Footer from "./Footer";
import Aos from "aos";

function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Box sx={{ mt: "70px" }}>
      <Stack
        sx={{
          background: `url(${"https://res.cloudinary.com/dhina/image/upload/v1664783553/waycool/pexels-karolina-grabowska-5202203_z5qqhp.jpg"})no-repeat center`,
          backgroundSize: "cover",
          height: "54vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></Stack>
      <Box pt={5} pb={6}>
        <Box className="lineContainer">
          <Typography
            data-aos="fade-up"
            align="center"
            sx={{
              fontSize: "1.5rem",
              fontWeight: "600",
              color: "#f4474a",
              fontFamily: "Dancing Script, cursive",
            }}
            className="line"
          >
            About us
          </Typography>
        </Box>
        <Typography
          data-aos="fade-down"
          variant="h4"
          align="center"
          mt={1}
          sx={{ fontWeight: "600" }}
        >
          Welcome to CoolWay
        </Typography>
        <Container>
          <Grid container mt={3}>
            <Grid
              item
              lg={5}
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box>
                <Typography variant="h4" fontSize={"2.25rem"} fontWeight={600}>
                  We Serve The Fresh fruits &#38; vegtables Of The Country
                </Typography>
                <Typography mt={4}>
                  We are the country's no.1 Fast food retailer. Country's Fresh
                  fruits &#38; vegtables are delivered by us. Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Consequatur est fuga
                  corrupti saepe eius excepturi deleniti cum corporis magnam,
                  tempora ad harum accusantium cupiditate eum ullam tenetur
                  similique vitae minus. We gain the satisfaction of our
                  customers with our delicate service and extreme high food
                  quality.
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={7} xs={12}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <img
                  src="https://res.cloudinary.com/dhina/image/upload/v1664781794/waycool/Untitled-1_rrms1p.jpg"
                  alt=""
                  width={"100%"}
                  height={"100%"}
                />
              </Box>
            </Grid>
          </Grid>
          <Box
            className="lineContainer"
            data-aos="fade-up"
            data-aos-duration="2000"
            sx={{ mt: 3 }}
          >
            <Typography
              align="center"
              sx={{
                fontSize: "1.5rem",
                fontWeight: "600",
                color: "#f4474a",
                fontFamily: "Dancing Script, cursive",
              }}
              className="line"
            >
              Team
            </Typography>
          </Box>
          <Typography
            data-aos="fade-down"
            data-aos-duration="2000"
            variant="h4"
            align="center"
            mt={1}
            sx={{ fontWeight: "600" }}
          >
            Peoples you may work with
          </Typography>

        </Container>
      </Box>
      <Footer />
    </Box>
  );
}

export default About;
