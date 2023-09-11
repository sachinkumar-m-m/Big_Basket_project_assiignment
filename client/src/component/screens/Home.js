import {
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Box,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import "../../style/CssStyle/index.css";
import { NavLink } from "react-router-dom";
// import SwipeableViews from "react-swipeable-views";
import Carousel from "react-material-ui-carousel"
import {
  HeaderBox,
  HeaderContent,
  HeaderImage,
  HeaderSmallText,
  HeaderText,
} from "../../style/HomeStyle";
import Footer from "./Footer";
import Aos from "aos";
import { useTheme } from "@emotion/react";
import { GlobalContext } from "../../GlobalContext";
import Restaurant from "./Restaurant";
import SuperMarket from "./SuperMart";

const mainCard = [
  {
    img: "https://res.cloudinary.com/dkz3uzlnp/image/upload/v1664775424/food-multi/pexels-carlo-martin-alcordo-2449665_pjjlcn.jpg",
    name: "Bulk Orders",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae optio consequuntur ut sit facilis ab accusantium culpa.",
  },
  {
    img: "https://res.cloudinary.com/dhina/image/upload/v1664781127/waycool/pexels-pixabay-264537_cfc8o5.jpg",
    name: "Online order",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae optio consequuntur ut sit facilis ab accusantium culpa.",
  },
  {
    img: "https://res.cloudinary.com/dkz3uzlnp/image/upload/v1664775684/food-multi/packaged-food-brands_rc0fzl.png",
    name: "Delivery",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae optio consequuntur ut sit facilis ab accusantium culpa.",
  },
];

const service = [
  {
    img: "https://res.cloudinary.com/dhina/image/upload/v1661316293/ProjectImage/easy-del_bhwjjr.jpg",
    name: "Easy To Order",
  },
  {
    img: "https://res.cloudinary.com/dhina/image/upload/v1661316292/ProjectImage/fast-del_yyried.jpg",
    name: "Fast Delivery",
  },
  {
    img: "https://res.cloudinary.com/dhina/image/upload/v1661316318/ProjectImage/Quality-del_kcizk7.jpg",
    name: "Best Quality",
  },
];

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

function Home() {
  const context = useContext(GlobalContext);
  const [user] = context.authApi.userData;
  const [isLogged, setIsLogged] = context.authApi.isLogged;
  const [isAdmin, setIsAdmin] = context.authApi.isAdmin;
  const [isUser, setIsUser] = context.authApi.isUser;
  const [isHotel, setIsHotel] = context.authApi.isHotel;
  const [isMart, setIsMart] = context.authApi.isMart;
  const theme = useTheme();
  // carousel
  const [activeStep, setActiveStep] = useState(0);
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

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      {isLogged ? null : (
        <Box sx={{ paddingTop: "80px" }}>
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
                          component="img"
                          key={index}
                          sx={{
                            height: { xs: "180px", sm: "100%" },
                            overflow: "hidden",
                            width: "100vw",
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
          <Box>
            <Container>
              <Box pt={5} pb={3}>
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
                    Available
                  </Typography>
                </Box>
                <Typography
                  data-aos="fade-down"
                  variant="h4"
                  align="center"
                  mt={1}
                  sx={{ fontWeight: "600" }}
                >
                  What We Provide
                </Typography>
                <Grid container spacing={3} mt={1}>
                  {mainCard.map((item, index) => {
                    return (
                      <Grid item sm={4} md={4} xs={12} key={index}>
                        <NavLink
                          to={`/menu`}
                          style={{ textDecoration: "none" }}
                        >
                          <Card
                            className="mainCard"
                            sx={{ transition: "all 0.5s" }}
                          >
                            <CardActionArea>
                              <CardMedia
                                component="img"
                                height="170"
                                image={item.img}
                                alt="main card image"
                              />
                              <CardContent>
                                <Typography gutterBottom variant="h5">
                                  {item.name}
                                </Typography>
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                >
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Beatae optio consequuntur ut
                                  sit facilis ab accusantium culpa.
                                </Typography>
                              </CardContent>
                            </CardActionArea>
                          </Card>
                        </NavLink>
                      </Grid>
                    );
                  })}
                </Grid>
              </Box>
            </Container>
          </Box>
          <Box>
            <Container>
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
                    Features
                  </Typography>
                </Box>
                <Typography
                  data-aos="fade-down"
                  variant="h4"
                  align="center"
                  sx={{ fontWeight: "600" }}
                >
                  Our Awesome Service
                </Typography>
                <Grid container justifyContent={"center"} mt={2}>
                  {service.map((item, index) => {
                    return (
                      <Grid
                        item
                        xs={12}
                        sm={4}
                        md={4}
                        lg={4}
                        align="center"
                        key={index}
                      >
                        <img src={item.img} alt="..." height={210} />
                        <Typography sx={{ fontWeight: "600" }}>
                          {item.name}
                        </Typography>
                      </Grid>
                    );
                  })}
                </Grid>
              </Stack>
            </Container>
          </Box>
          <Footer />
        </Box>
      )}
      {isUser ? (
        <Box sx={{ paddingTop: "80px" }}>
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
                          component="img"
                          key={index}
                          sx={{
                            height: { xs: "180px", sm: "100%" },
                            overflow: "hidden",
                            width: "100vw",
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
          <Box>
            <Container>
              <Box pt={5} pb={3}>
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
                    Available
                  </Typography>
                </Box>
                <Typography
                  data-aos="fade-down"
                  variant="h4"
                  align="center"
                  mt={1}
                  sx={{ fontWeight: "600" }}
                >
                  What We Provide
                </Typography>
                <Grid container spacing={3} mt={1}>
                  {mainCard.map((item, index) => {
                    return (
                      <Grid item sm={4} md={4} xs={12} key={index}>
                        <NavLink
                          to={`/menu`}
                          style={{ textDecoration: "none" }}
                        >
                          <Card
                            className="mainCard"
                            sx={{ transition: "all 0.5s" }}
                          >
                            <CardActionArea>
                              <CardMedia
                                component="img"
                                height="170"
                                image={item.img}
                                alt="main card image"
                              />
                              <CardContent>
                                <Typography gutterBottom variant="h5">
                                  {item.name}
                                </Typography>
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                >
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Beatae optio consequuntur ut
                                  sit facilis ab accusantium culpa.
                                </Typography>
                              </CardContent>
                            </CardActionArea>
                          </Card>
                        </NavLink>
                      </Grid>
                    );
                  })}
                </Grid>
              </Box>
            </Container>
          </Box>
          <Box>
            <Container>
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
                    Features
                  </Typography>
                </Box>
                <Typography
                  data-aos="fade-down"
                  variant="h4"
                  align="center"
                  sx={{ fontWeight: "600" }}
                >
                  Our Awesome Service
                </Typography>
                <Grid container justifyContent={"center"} mt={2}>
                  {service.map((item, index) => {
                    return (
                      <Grid
                        item
                        xs={12}
                        sm={4}
                        md={4}
                        lg={4}
                        align="center"
                        key={index}
                      >
                        <img src={item.img} alt="..." height={210} />
                        <Typography sx={{ fontWeight: "600" }}>
                          {item.name}
                        </Typography>
                      </Grid>
                    );
                  })}
                </Grid>
              </Stack>
            </Container>
          </Box>
          <Footer />
        </Box>
      ) : null}
      {isAdmin ? (
        <Box sx={{ paddingTop: "80px" }}>
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
                          component="img"
                          key={index}
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
          <Box>
            <Container>
              <Box pt={5} pb={3}>
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
                    Available
                  </Typography>
                </Box>
                <Typography
                  data-aos="fade-down"
                  variant="h4"
                  align="center"
                  mt={1}
                  sx={{ fontWeight: "600" }}
                >
                  What We Provide
                </Typography>
                <Grid container spacing={3} mt={1}>
                  {mainCard.map((item, index) => {
                    return (
                      <Grid item sm={4} md={4} xs={12} key={index}>
                        <NavLink
                          to={`/menu`}
                          style={{ textDecoration: "none" }}
                        >
                          <Card
                            className="mainCard"
                            sx={{ transition: "all 0.5s" }}
                          >
                            <CardActionArea>
                              <CardMedia
                                component="img"
                                height="170"
                                image={item.img}
                                alt="main card image"
                              />
                              <CardContent>
                                <Typography gutterBottom variant="h5">
                                  {item.name}
                                </Typography>
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                >
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Beatae optio consequuntur ut
                                  sit facilis ab accusantium culpa.
                                </Typography>
                              </CardContent>
                            </CardActionArea>
                          </Card>
                        </NavLink>
                      </Grid>
                    );
                  })}
                </Grid>
              </Box>
            </Container>
          </Box>
          <Box>
            <Container>
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
                    Features
                  </Typography>
                </Box>
                <Typography
                  data-aos="fade-down"
                  variant="h4"
                  align="center"
                  sx={{ fontWeight: "600" }}
                >
                  Our Awesome Service
                </Typography>
                <Grid container justifyContent={"center"} mt={2}>
                  {service.map((item, index) => {
                    return (
                      <Grid
                        item
                        xs={12}
                        sm={4}
                        md={4}
                        lg={4}
                        align="center"
                        key={index}
                      >
                        <img src={item.img} alt="..." height={210} />
                        <Typography sx={{ fontWeight: "600" }}>
                          {item.name}
                        </Typography>
                      </Grid>
                    );
                  })}
                </Grid>
              </Stack>
            </Container>
          </Box>
          <Footer />
        </Box>
      ) : null}
      {isHotel ? <Restaurant /> : null}
      {isMart ? <SuperMarket /> : null}
    </>
  );
}

export default Home;
