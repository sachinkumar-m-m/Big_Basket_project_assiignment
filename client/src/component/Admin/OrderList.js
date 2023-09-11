import {
  Container,
  Typography,
  Divider,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  TableBody,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../GlobalContext";
import SideDrawer from "../Drawer/SideDrawer";

function OrderList() {
  const context = useContext(GlobalContext);
  const [token] = context.token;
  const [userData] = context.authApi.userData;

  const [orders, setOrders] = useState([]);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const getOrders = async () => {
      let res = await axios.get(`/api/v1/order/allOrders`, {
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
        </Box>
      </Container>
    );
  }

  return (
    <Container sx={{ paddingTop: "80px", display: "flex" }}>
      <SideDrawer />
      <Box component="main" sx={{ flexGrow: 1, p: { xs: 0, lg: 3, sm: 3 } }}>
        <Typography variant="h4" sx={{ paddingTop: 3 }}>
          My Orders
        </Typography>
        <Divider color="grey" sx={{ marginY: 1.5 }} />
        <TableContainer component={Paper} sx={{ maxWidth: "100vw" }}>
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
                    <TableCell align="center">
                      &#8377;{item.finalTotal}
                    </TableCell>
                    <TableCell align="center">{item.paymentStatus}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
}

export default OrderList;
