import {
  Button,
  Container,
  Typography,
  Box,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  TableBody,
} from "@mui/material";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../GlobalContext";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

function Order() {
  const context = useContext(GlobalContext);
  const [token] = context.token;
  const [userData] = context.authApi.userData;

  const [orders, setOrders] = useState([]);
  const [filteredCart, setFilteredCart] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      let res = await axios.get(`/api/v1/auth/orders`, {
        headers: { Authorization: token },
      });
      setOrders(res.data.orders);
    };
    getOrders();
  }, []);

  if (orders.length === 0) {
    return (
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Box>
          <Typography align="center" variant="h4">
            Hi {userData.name}
          </Typography>
          <img
            src="https://res.cloudinary.com/dhina/image/upload/v1661510552/ProjectImage/Order_Empty_bvix6k.png"
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
      </Container>
    );
  }

  return (
    <Container sx={{ paddingTop: "80px" }}>
      <Typography align="center" variant="h4">
        My Orders
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">OrderId</TableCell>
              <TableCell align="center">Date</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Quantity</TableCell>
              <TableCell align="center">Total</TableCell>
              <TableCell align="center">Pay Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders &&
              orders.map((item, index) => (
                <TableRow key={index}>
                  <TableCell align="center">{item.orderId}</TableCell>
                  <TableCell align="center">
                    {new Date(item.createdAt).toLocaleString()}
                  </TableCell>
                  <TableCell align="center">{item.orderStatus}</TableCell>
                  <TableCell align="center">
                    <details>
                      <summary>View</summary>
                      <Box
                        sx={{
                          height: 158,
                          overflow: "auto",
                        }}
                      >
                        {item.cart.map((item, index) => {
                          return (
                            <Box key={index}>
                              <Box sx={{ height: 100 }}>
                                <img src={item.image.url} height="100%" />
                              </Box>
                              <Box>
                                <Typography fontSize="0.8rem">
                                  {item.title}
                                </Typography>
                                <Typography fontSize="0.8rem">
                                  &#8377; {item.price}
                                </Typography>
                                <Typography fontSize="0.8rem">
                                  Quantity - {item.quantity}
                                </Typography>
                              </Box>
                            </Box>
                          );
                        })}
                      </Box>
                    </details>
                  </TableCell>
                  <TableCell align="center">&#8377;{item.finalTotal}</TableCell>
                  <TableCell align="center">{item.paymentStatus}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default Order;
