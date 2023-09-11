import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../GlobalContext";
import axios from "axios";
import { toast } from "react-toastify";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextareaAutosize,
  Typography,
} from "@mui/material";

function Checkout() {
  const navigate = useNavigate();

  const context = useContext(GlobalContext);
  const [token] = context.token;
  const [order, setOrder] = context.authApi.order;
  const [finalTotal] = context.authApi.finalTotal;
  const [cart, setCart] = context.authApi.cart;

  const [data, setData] = useState({
    address: "",
    paymentMode: "",
  });

  const readValue = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const res = await axios.post(
      `/api/v1/order/newOrder`,
      {
        cart: cart,
        address: data.address,
        finalTotal: finalTotal,
        paymentMode: data.paymentMode,
        paymentId: Math.floor(Math.random() * 12345689),
        paymentStatus: "unpaid",
      },
      {
        headers: { Authorization: token },
      }
    );
    toast.success(`Order updated successfully`);
    setCart([]);
    navigate("/");
  };

  return (
    <Box sx={{ marginTop: "80px" }}>
      <Container>
        <Typography align="center" variant="h4">
          Check out
        </Typography>
        <Grid
          container
          sx={{ display: "flex", justifyContent: "center", mt: 2 }}
        >
          <Grid item lg={5} sm={7} xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h5" align="center">
                  Cart Total = &#8377; {finalTotal ? finalTotal : null}
                </Typography>
                <Box
                  component={"form"}
                  onSubmit={submitHandler}
                  sx={{ display: "flex", flexDirection: "column", mt: 2 }}
                >
                  <TextareaAutosize
                    minRows={5}
                    style={{ width: "100%" }}
                    placeholder="Address.."
                    name="address"
                    value={data.address}
                    onChange={readValue}
                  />
                  <FormControl sx={{ mt: 2 }}>
                    <FormLabel
                      id="demo-controlled-radio-buttons-group"
                      style={{ color: "#000" }}
                    >
                      Payment mode
                    </FormLabel>
                    <RadioGroup
                      aria-labelledby="demo-controlled-radio-buttons-group"
                      sx={{ display: "flex", flexDirection: "row" }}
                    >
                      <FormControlLabel
                        value="cod"
                        name="paymentMode"
                        control={<Radio />}
                        checked={data.paymentMode === "cod"}
                        onChange={readValue}
                        label="Cash On Delivery"
                      />
                      <FormControlLabel
                        control={<Radio />}
                        name="paymentMode"
                        id="paymentMode"
                        checked={data.paymentMode === "card"}
                        value="card"
                        onChange={readValue}
                        label="Card"
                      />
                    </RadioGroup>
                  </FormControl>
                  <Button sx={{ mt: 2 }} variant="outlined" type="submit">
                    Check Out
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Checkout;
