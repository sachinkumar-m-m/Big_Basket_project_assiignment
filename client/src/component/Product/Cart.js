import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../GlobalContext";
import axios from "axios";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

function Cart() {
  const data = useContext(GlobalContext);
  const [cart, setCart] = data.authApi.cart;
  const orderUpdate = data.authApi.orderUpdate;
  const [token] = data.token;
  const [finalTotal, setFinalTotal] = data.authApi.finalTotal;
  const [order, setOrder] = data.authApi.order;

  const [total, setTotal] = useState(0); // total price
  const [gst, setGst] = useState(5); // gst -> cgst & sgst
  const [dc, setDC] = useState(30); // delivery charge

  useEffect(() => {
    const getTotal = () => {
      const total = cart.reduce((prev, item) => {
        return prev + item.price * item.quantity;
      }, 0);

      setTotal(total);
      let gstTotal = Math.round(total * (5 / 100));
      let final = total + gstTotal + dc;
      setFinalTotal(final);
    };
    getTotal();
  }, [cart]);

  // inc count of items
  const incCount = (id) => {
    cart.forEach((item) => {
      if (item._id === id) {
        item.quantity += 1;
      }

      // {
      //   isUser
      //     ? (item.quantity += 1)
      //     : isHotel
      //     ? (item.quantity += 10)
      //     : isMart
      //     ? (item.quantity += 50)
      //     : (item.quantity += 1);
      // }
    });
    setCart([...cart]);
    updateCart(cart);

    setOrder(cart, finalTotal);
    storeOrder(cart, finalTotal);
  };

  // to dec count of items
  const decCount = (id) => {
    cart.forEach((item) => {
      if (item._id === id) {
        item.quantity === 1 ? (item.quantity = 1) : (item.quantity -= 1);
        // {
        //   isUser
        //     ? item.quantity === 1
        //       ? (item.quantity = 1)
        //       : (item.quantity -= 1)
        //     : isHotel
        //     ? item.quantity === 10
        //       ? (item.quantity = 10)
        //       : (item.quantity -= 1)
        //     : isMart
        //     ? item.quantity === 50
        //       ? (item.quantity = 50)
        //       : (item.quantity -= 1)
        //     : item.quantity === 1
        //     ? (item.quantity = 1)
        //     : (item.quantity -= 1);
        // }
      }
    });
    setCart([...cart]);
    updateCart(cart);

    setOrder(cart, finalTotal);
    storeOrder(cart, finalTotal);
  };

  // to update cart
  const updateCart = async (cart) => {
    await axios.patch(
      `/api/v1/auth/addToCart`,
      { cart },
      {
        headers: { Authorization: token },
      }
    );
  };

  // delete item from cart
  const delItem = (id) => {
    if (window.confirm(`Do you want to remove product?`)) {
      cart.forEach((item, index) => {
        if (item._id === id) {
          cart.splice(index, 1);
        }
      });
      setCart([...cart]);
      updateCart(cart);

      // setOrder(cart,finalTotal)
      // storeOrder(cart,finalTotal)
    }
  };

  const storeOrder = async (cart, finalTotal) => {
    await orderUpdate(cart, finalTotal);
  };

  if (cart.length === 0) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Box>
          <img
            src="https://res.cloudinary.com/dhina/image/upload/v1661316263/ProjectImage/cart-Emty_ossxmd.png"
            alt=""
          />
          <NavLink
            to={`/menu`}
            style={{
              textDecoration: "none",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <Button variant="outlined" startIcon={<KeyboardArrowLeftIcon />}>
              Keep Shopping
            </Button>
          </NavLink>
        </Box>
      </Box>
    );
  }

  return (
    <Box sx={{ paddingTop: "80px" }}>
      <Typography variant="h4" align="center">
        Cart
      </Typography>

      <Grid container sx={{ mt: 2, padding: "0px 10px" }} spacing={2}>
        <Grid item lg={8} xs={12}>
          <Grid container spacing={2}>
            {cart &&
              cart.map((item, index) => {
                const { _id, title, image, price, qnty, quantity } = item;
                return (
                  <Grid key={index} item lg={6} xs={12} sm={6}>
                    <Card sx={{ display: "flex" }}>
                      <Box sx={{ height: 140, my: "auto" }}>
                        <img src={image.url} alt="" height={"100%"} />
                      </Box>
                      <CardContent sx={{ width: "100%" }}>
                        <Typography>{title}</Typography>
                        <Typography>&#8377; {price}</Typography>
                        <Box
                          sx={{
                            display: "flex",
                          }}
                        >
                          <Typography>{qnty}</Typography>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              marginX: "auto",
                            }}
                          >
                            <Button
                              variant="outlined"
                              color="error"
                              size="small"
                              sx={{ padding: 0, minWidth: "30px" }}
                              onClick={() => decCount(_id)}
                            >
                              <RemoveIcon
                                sx={{
                                  display: "inline-block",
                                  fontSize: "1rem",
                                }}
                              />
                            </Button>
                            <Typography
                              fontWeight={600}
                              sx={{ padding: "0px 8.9px" }}
                            >
                              {quantity}
                            </Typography>
                            <Button
                              variant="outlined"
                              size="small"
                              sx={{ padding: 0, minWidth: "30px" }}
                              onClick={() => incCount(_id)}
                            >
                              <AddIcon
                                sx={{
                                  display: "inline-block",
                                  fontSize: "1rem",
                                }}
                              />
                            </Button>
                          </Box>
                        </Box>
                        <Button
                          color="error"
                          size="small"
                          variant="contained"
                          onClick={() => delItem(_id)}
                          sx={{
                            mt: 1,
                            fontSize: "0.6rem",
                            fontWeight: 600,
                            background: `linear-gradient(to right, #f12711, #f5af19)`,
                            color: "white",
                          }}
                        >
                          delete
                        </Button>
                      </CardContent>
                    </Card>
                  </Grid>
                );
              })}
          </Grid>
        </Grid>
        <Grid item lg={4} xs={12}>
          <Card>
            <CardHeader align="center" title="Cart info" />
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  mt: 1.5,
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="h6" fontWeight={600}>
                  Sub Total
                </Typography>
                <Typography variant="h6">&#8377;{total}</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  mt: 1.5,
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="h6" fontWeight={600}>
                  Gst (cgst+sgst)
                </Typography>
                <Typography variant="h6">{gst} %</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  mt: 1.5,
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="h6" fontWeight={600}>
                  Delivery Charges
                </Typography>
                <Typography variant="h6">&#8377;{dc}</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  mt: 1.5,
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="h6" fontWeight={600}>
                  Total
                </Typography>
                <Typography variant="h6">&#8377; {finalTotal}</Typography>
              </Box>
            </CardContent>
            <CardActions
              sx={{ display: "flex", mt: 1.5, justifyContent: "center" }}
            >
              <NavLink
                to={`/checkout/${finalTotal}`}
                style={{ textDecoration: "none" }}
              >
                <Button
                  variant="contained"
                  sx={{
                    background: `linear-gradient(to right, #f12711, #f5af19)`,
                    color: "white",
                  }}
                >
                  Continue
                </Button>
              </NavLink>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Cart;