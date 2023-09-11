import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../GlobalContext";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  CardMedia,
  Box,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

function ProductDetails() {
  const data = useContext(GlobalContext);
  const [isAdmin] = data.authApi.isAdmin;
  const [isHotel]=data.authApi.isHotel;
  const [isMart]=data.authApi.isMart;


  const params = useParams();
  const [product, setProduct] = useState("");
  const addToCart = data.authApi.addToCart;

  const getSingle = async (id) => {
    let res = await axios.get(`/api/v1/product/get/${id}`);
    setProduct(res.data.product);
  };

  useEffect(() => {
    getSingle(params.id);
  }, []);

  return (
    <Container sx={{ paddingTop: "80px" }}>
      <Typography variant="h4" align="center" sx={{ paddingTop: 3 }}>
        Product Details
      </Typography>
      <Grid container sx={{ mt: 2 }}>
        <Grid item lg={5} xs={12}>
          {!product ? null : (
            <Box
              sx={{
                height: { xs: 350, sm: 400 },
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                component="img"
                height={"100%"}
                src={product.image.url}
                alt={product.title}
              />
            </Box>
          )}
        </Grid>
        <Grid item lg={7} xs={12}>
          <Card sx={{ paddingBottom: 1.5 }}>
            <Typography
              variant="h5"
              fontWeight={600}
              sx={{ paddingLeft: "16px" }}
            >
              {product.title}
            </Typography>
            <CardContent>
              <Typography variant="h5">Price</Typography>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}
              >
                <Typography variant="h6" component={"div"}>
                  &#8377; {product.price}
                  <Typography component={"del"} sx={{ paddingLeft: 2 }}>
                    &#8377; {product.price + product.price * (10 / 100)}
                  </Typography>
                  <Typography>(inclusive GST)</Typography>
                </Typography>
                <Box>
                  <StarIcon style={{ color: "#ffd965" }} />
                  <StarIcon style={{ color: "#ffd965" }} />
                  <StarIcon style={{ color: "#ffd965" }} />
                  <StarIcon style={{ color: "#ffd965" }} />
                  <StarIcon style={{ color: "#ffd965" }} />
                </Box>
              </Box>
              <Box sx={{ mt: 2 }}>
                <Typography component={"strong"} variant="h5">
                  Quantity
                </Typography>

                <Typography variant="h6" sx={{ paddingLeft: 0.5 }}>
                  {product.qnty} {isHotel ? "X 10kg":isMart ? "X 50Kg":"Kg"}
                </Typography>
              </Box>
              <Box sx={{ mt: 2 }}>
                <Typography variant="h5">Description</Typography>
                <Typography>{product.desc}</Typography>
              </Box>
            </CardContent>
            <CardActions sx={{ display: "felx", justifyContent: "center" }}>
              {isAdmin ? null : (
                <Grid item lg={8}>
                  <Button
                    onClick={() => addToCart(product)}
                    variant="contained"
                    fullWidth
                    sx={{
                      background: `linear-gradient(to right, #f12711, #f5af19)`,
                      color: "white",
                    }}
                  >
                    Add To Cart
                  </Button>
                </Grid>
              )}
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ProductDetails;
