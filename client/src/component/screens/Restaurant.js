import {Box, Card, Container,Typography,Grid} from "@mui/material";
import React from "react";
import CardContent from "@mui/material/CardContent";
import Fab from "@mui/material/Fab";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";

function Restaurant() {
  return (
    <div>
      <Box>
        <Box
          sx={{
            backgroundImage: `url(https://res.cloudinary.com/dwn9amt1o/image/upload/v1664791115/New%20waycool/kitchen_zsctc6.jpg)`,
            height: "90vh",
            backgroundSize: "cover",
          }}
        >
          <Grid container justifyContent={"flex-end"}>
            <Grid
              item
              md={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "90vh",
                width: "100%",
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontWeight: "700",
                  color: "ButtonHighlight",
                  fontStyle: "oblique",
                }}
              >
                Biggest Sale of the Year is LIVE!
              </Typography>
              <Typography
                variant="h5"
                sx={{ fontWeight: "600", color: "crimson" }}
              >
                Buying that can help you reach your B2B purchase goals
              </Typography>
              <Typography variant="h6" sx={{ color: "orange" }}>
                Explore our menu page to know more offers
              </Typography>

              <Box>
                <Fab
                  variant="extended"
                  color="primary"
                  sx={{ fontWeight: "700" }}
                >
                  <NavLink
                    to={"/menu"}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Menu
                  </NavLink>
                </Fab>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box pt={3}>
          <Grid
            container
            spacing={5}
            alignContent="center"
            justifyContent="center"
            pt={4}
          >
            <Grid
              item
              lg={4}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <img
                src="https://res.cloudinary.com/dwn9amt1o/image/upload/v1664791115/New%20waycool/truckk_npzrps.png"
                width={150}
              />
              <Typography variant="h5">Delivered on buzz</Typography>
              <Typography sx={{ textAlign: "center" }}>
                Anytime, anywhere and on time, this is what our service means.
              </Typography>
            </Grid>
            <Grid
              item
              lg={4}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <img
                src="https://res.cloudinary.com/dwn9amt1o/image/upload/v1664791114/New%20waycool/pack_bn9fi5.png"
                width={150}
              />
              <Typography variant="h5">Fresh and packed</Typography>
              <Typography sx={{ textAlign: "center" }}>
                brought freshly from farm and packed in hygiene method.
              </Typography>
            </Grid>
            <Grid
              item
              lg={4}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <img
                src="https://res.cloudinary.com/dwn9amt1o/image/upload/v1664791113/New%20waycool/cus_s8x0lw.png"
                width={150}
              />
              <Typography variant="h5">Always in touch</Typography>
              <Typography sx={{ textAlign: "center" }}>
                Get in touch with our 24/7 service line for any help and queries
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Grid container spacing={3} sx={{ backgroundColor: "cornsilk", mt: 3 }}>
          <Grid item md={6}>
            <Container>
              <Typography
                variant="h4"
                sx={{ fontWeight: "600", color: "darkgoldenrod" }}
              >
                More business tools, greater value for your B2B buying process
              </Typography>
              <Box mt={3}>
                <Typography variant="body " sx={{ fontWeight: "600" }}>
                  Business purchasing solutions like advanced analytics and
                  spend management tools that work for you and simplify your B2B
                  purchase processes.
                </Typography>
              </Box>
            </Container>
          </Grid>
          <Grid item lg={6} sx={{ mt: { xs: 3, md: 0 } }}>
            <Grid container spacing={3} justifyContent={"center"}>
              <Grid xs={12} sm={6} p={1}>
                <img
                  src="https://res.cloudinary.com/dwn9amt1o/image/upload/v1664791114/New%20waycool/cold_pvgtij.jpg"
                  height={230}
                  width={"100%"}
                />
              </Grid>
              <Grid xs={12} sm={6} p={1}>
                <img
                  src="https://res.cloudinary.com/dwn9amt1o/image/upload/v1664791113/New%20waycool/crat_o6yal2.jpg"
                  height={230}
                  width={"100%"}
                />
              </Grid>
              <Grid xs={12} sm={6} p={1}>
                <img
                  src="https://res.cloudinary.com/dwn9amt1o/image/upload/v1664791114/New%20waycool/dock_fmgxbi.jpg"
                  height={230}
                  width={"100%"}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Container sx={{ pb: 5 }}>
          <Box mb={2}>
            <Typography variant="h4" mt={3} mb={3}>
              Select your category for bulk orders
            </Typography>
            <div>
              <Grid container spacing={4} sx={{ display: "flex" }}>
                <Grid item xs={12} sm={4} lg={4}>
                  <Card className="img-wrapper">
                    <NavLink to={"/menu"}>
                      <img
                        src="https://res.cloudinary.com/dwn9amt1o/image/upload/v1664791119/New%20waycool/vege_i56beh.jpg"
                        alt=""
                        className="hover-zoom"
                        height={200}
                      />
                    </NavLink>

                    <CardContent>
                      <Typography
                        variant="h5"
                        color="lightseagreen"
                        sx={{ fontFamily: "fantasy" }}
                      >
                        Vegetables
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={4} lg={4}>
                  <Card className="img-wrapper">
                    <NavLink to={"/menu"}>
                      <img
                        src="https://res.cloudinary.com/dwn9amt1o/image/upload/v1664791119/New%20waycool/milky_q6evqi.jpg"
                        alt=""
                        className="hover-zoom"
                        height={200}
                      />
                    </NavLink>

                    <CardContent>
                      <Typography
                        variant="h5"
                        color="lightseagreen"
                        sx={{ fontFamily: "fantasy" }}
                      >
                        Dairy products
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={4} lg={4}>
                  <Card className="img-wrapper">
                    <NavLink to={"/menu"}>
                      <img
                        src="https://res.cloudinary.com/dwn9amt1o/image/upload/v1664791115/New%20waycool/spices_leqimk.jpg"
                        alt=""
                        className="hover-zoom"
                        height={200}
                      />
                    </NavLink>

                    <CardContent>
                      <Typography
                        variant="h5"
                        color="lightseagreen"
                        sx={{ fontFamily: "fantasy" }}
                      >
                        Spices and more
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </div>
          </Box>
        </Container>
        <Footer />
      </Box>
    </div>
  );
}

export default Restaurant;