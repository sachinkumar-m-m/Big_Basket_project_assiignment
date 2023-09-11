import {
  Box,
  Button,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../GlobalContext";
import SideDrawer from "../Drawer/SideDrawer";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function ProductList() {
  const data = useContext(GlobalContext);

  const [products] = data.productApi.products;

  return (
    <Box sx={{ paddingTop: "80px", display: "flex" }}>
      <SideDrawer />
      <Box component="main" sx={{ flexGrow: 1, p: { xs: 1.5, lg: 3, sm: 3 } }}>
        <Typography variant="h4" sx={{ paddingTop: 3.5, paddingBottom: 0.9 }}>
          Produts
        </Typography>
        <Divider color="grey" />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <NavLink to={`/product/create`} style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              sx={{
                mt: 1,
                background: "linear-gradient(to right, #f12711, #f5af19)",
              }}
              endIcon={<KeyboardArrowRightIcon />}
            >
              Add products
            </Button>
          </NavLink>
        </Box>
        <Grid container sx={{ padding: 1.5 }}>
          {products &&
            products.map((item, index) => {
              return (
                <Grid
                  key={index}
                  item
                  lg={6}
                  sm={6}
                  xs={12}
                  sx={{ display: "flex", justifyContent: "center", mt: 2 }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", sm: "row" },
                    }}
                  >
                    <Box
                      sx={{
                        height: 225,
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <img src={item.image.url} alt="" height={"100%"} />
                    </Box>

                    <CardContent sx={{ width: 250 }}>
                      <Box>
                        <Typography fontSize={"1.1rem"} align={"left"}>
                          {item.title}
                        </Typography>
                      </Box>
                      <Box sx={{ mt: 1 }}>
                        <Typography fontSize={"1.1rem"} align={"left"}>
                          &#8377;{item.price}
                        </Typography>
                        <Typography
                          component={"del"}
                          fontSize={"0.9rem"}
                          align={"left"}
                        >
                          &#8377; {item.price + item.price * (10 / 100)}
                        </Typography>
                      </Box>
                      <Box sx={{ mt: 1 }}>
                        <Typography fontSize={"1.1rem"} align={"left"}>
                          {item.qnty}
                        </Typography>
                      </Box>
                      <Box sx={{ mt: 1 }}>
                        <Typography fontSize={"1.1rem"} align={"left"}>
                          Stock - {item.stock}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Box>
                </Grid>
              );
            })}
        </Grid>
      </Box>
    </Box>
  );
}

export default ProductList;
