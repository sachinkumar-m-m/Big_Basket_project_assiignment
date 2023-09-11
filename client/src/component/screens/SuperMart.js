import React, { useEffect } from "react";
import {
  Box,
  Stack,
  Typography,
  MenuList,
  MenuItem,
  Grid,
  Container,
} from "@mui/material";
import { Toolbar } from "@mui/material";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
// import SwipeableViews from "react-swipeable-views";
import Carousel from "react-material-ui-carousel"


import { useTheme } from "@mui/material/styles";

// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    imgPath:
      "https://res.cloudinary.com/dkz3uzlnp/image/upload/v1664621099/food-multi/ITCStore_Fabelle_Rorator_Desktop_1_nyy2ma.jpg",
  },
  {
    imgPath:
      "https://res.cloudinary.com/dkz3uzlnp/image/upload/v1664621086/food-multi/Desktop-Discount-Banner_bc12e8d1-3238-4ada-9720-3693dbd0697f_t1pruz.webp",
  },
  {
    imgPath:
      "https://res.cloudinary.com/dkz3uzlnp/image/upload/v1664621086/food-multi/Generic1-Header-Banner2-1500X375_05cae457-24a1-4ff5-a73b-da34258b08dd_q7q21a.webp",
  },
];



function SuperMarket() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Stack>
      <Box>
        <Toolbar sx={{ mt: 2 }} />
        <Grid container sx={{ display: 'block' }}>
          <Grid item md={12} lg={12} sm={12}>
            <Carousel
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
              {images.map((step, index) => {
                return (
                  <div key={index}>
                    {Math.abs(activeStep - index) <= 2 ? (
                      <Box
                        key={index}
                        component="img"
                        sx={{
                          height: { xs: "180px", sm: "100%" },
                          display: "block",
                          width: "100%",
                          overflow: "hidden",
                          width: "100%",
                        }}
                        src={step.imgPath}
                        alt={step.label}
                      />
                    ) : null}
                  </div>
                )
              })}
            </Carousel>

          </Grid>
        </Grid>
      </Box>
      <Stack pt={2} pb={5}>
        <Box className="lineContainer" data-aos="fade-up">
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
            Your
          </Typography>
        </Box>
        <Typography
          data-aos="fade-down"
          variant="h4"
          align="center"
          sx={{ fontWeight: "600" }}
        >
          Favourites
        </Typography>
        <Container>
          <Box mt={5}>
            <Grid container spacing={3}>
              <Grid item md={3} lg={3} sm={3} xs={12}>
                <img
                  src="https://res.cloudinary.com/dkz3uzlnp/image/upload/v1664641596/food-multi/Ur_favourites_Yippie_a8e6f065-9d8c-4927-9fc4-cf6e1ff2706b_fftvqu.avif"
                  alt=""
                  height={"100%"}
                  width={"100%"}
                />
              </Grid>
              <Grid item md={3} lg={3} sm={3} xs={12}>
                <img
                  src="https://res.cloudinary.com/dkz3uzlnp/image/upload/v1664641594/food-multi/Goodness_of_Protein_568cbd82-4b32-4f47-bfd4-e00fbf172471_pvbfcy.avif"
                  alt=""
                  height={"100%"}
                  width={"100%"}
                />
              </Grid>
              <Grid item md={3} lg={3} sm={3} xs={12}>
                <img
                  src="https://res.cloudinary.com/dkz3uzlnp/image/upload/v1664641989/food-multi/New-On-ITCStore-Bingo_263b66fd-ab45-4a17-bcac-8578323eae81_j4auwb.avif"
                  alt=""
                  height={"100%"}
                  width={"100%"}
                />
              </Grid>
              <Grid item md={3} lg={3} sm={3} xs={12}>
                <img
                  src="https://res.cloudinary.com/dkz3uzlnp/image/upload/v1664642051/food-multi/Nutrients_that_support_Immunity_b20b8772-f28e-456a-809a-cabf41156b78_d7q4nn.avif"
                  alt=""
                  height={"100%"}
                  width={"100%"}
                />
              </Grid>
            </Grid>
          </Box>
        </Container>
        <Box pt={2} pb={5}>
          <Box className="lineContainer" data-aos="fade-up">
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
              Fruits
            </Typography>
          </Box>
          <Typography
            data-aos="fade-down"
            variant="h4"
            align="center"
            sx={{ fontWeight: "600" }}
          >
            Vegetables
          </Typography>
        </Box>
        <Container>
          <Grid container>
            <Grid item md={6} lg={6} sm={12} xs={12}>
              <img
                src="https://res.cloudinary.com/dkz3uzlnp/image/upload/v1664642345/food-multi/hp_organic-fruits-fnvStorefront_m_250922_560x378_01_vpvhfm.webp"
                alt=""
                height={"100%"}
                width={"100%"}
              />
            </Grid>
            <Grid item md={6} lg={6} sm={12} xs={12}>
              <Grid container>
                <Grid item md={6} lg={6} sm={6} xs={12}>
                  <img
                    src="https://res.cloudinary.com/dkz3uzlnp/image/upload/v1664642345/food-multi/hp_fresh-fruits-fnvStorefront_m_250922_275x184_02_jxwupa.webp"
                    alt=""
                    height={"100%"}
                    width={"100%"}
                  />
                </Grid>
                <Grid item md={6} lg={6} sm={6} xs={12}>
                  <img
                    src="https://res.cloudinary.com/dkz3uzlnp/image/upload/v1664642345/food-multi/hp_fresh-veggs-fnvStorefront_m_250922_275x184_03_haf2x3.webp"
                    alt=""
                    height={"100%"}
                    width={"100%"}
                  />
                </Grid>
                <Grid item md={6} lg={6} sm={6} xs={12}>
                  <img
                    src="https://res.cloudinary.com/dkz3uzlnp/image/upload/v1664642377/food-multi/hp_exotic-fruits-fnvStorefront_m_250922_275x184_05_jtcegz.webp"
                    alt=""
                    height={"100%"}
                    width={"100%"}
                  />
                </Grid>
                <Grid item md={6} lg={6} sm={6} xs={12}>
                  <img
                    src="https://res.cloudinary.com/dkz3uzlnp/image/upload/v1664642377/food-multi/hp_exotic-fruits-fnvStorefront_m_250922_275x184_05_jtcegz.webp"
                    alt=""
                    height={"100%"}
                    width={"100%"}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Stack>
      <Footer />
    </Stack>
  );
}

export default SuperMarket;
