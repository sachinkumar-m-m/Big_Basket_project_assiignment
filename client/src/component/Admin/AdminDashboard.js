import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../GlobalContext";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Divider,
} from "@mui/material";
import ListAltIcon from "@mui/icons-material/ListAlt";
import GroupIcon from "@mui/icons-material/Group";
import SideDrawer from "../Drawer/SideDrawer";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import axios from "axios";

function AdminDashboard() {
  const data = useContext(GlobalContext);
  const [products] = data.productApi.products;
  const [allUsers] = data.authApi.allUsers;

  const [token] = data.token;
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      let res = await axios.get(`/api/v1/order/allOrders`, {
        headers: { Authorization: token },
      });
      setOrders(res.data.orders);
    };
    getOrders();
  }, []);

  return (
    <Box sx={{ paddingTop: "80px", display: "flex" }}>
      <SideDrawer />

      <Box component="main" sx={{ flexGrow: 1, p: { xs: 1.5, lg: 3, sm: 3 } }}>
        <Typography variant="h4" sx={{ paddingTop: 3 }}>
          Admin Dashboard
        </Typography>
        <Divider color="grey" sx={{ my: 1.6 }} />
        <Grid container spacing={3} sx={{ mt: 3 }}>
          <Grid item lg={4} xs={12} sm={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" color={"#636363"}>
                  Total Product
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ mb: 2.5, mt: 1 }}
                  fontWeight={600}
                >
                  {products.length}
                </Typography>
                <ShoppingBasketIcon
                  sx={{
                    clipPath: "circle()",
                    backgroundColor: "#2196f3",
                    fontSize: "2.4rem",
                    padding: 2,
                    color: "#fff",
                  }}
                />
                <Box sx={{ mt: 2, display: "flex" }}>
                  <ArrowUpwardIcon sx={{ color: "#2196f3" }} />
                  <Typography sx={{ ml: 0.2 }}>3+</Typography>
                  <Typography sx={{ ml: 0.5 }} color="#919191">
                    Since last month
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={4} xs={12} sm={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" color={"#636363"}>
                  Total Customer
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ mb: 2.5, mt: 1 }}
                  fontWeight={600}
                >
                  {allUsers.length}
                </Typography>
                <GroupIcon
                  sx={{
                    clipPath: "circle()",
                    backgroundColor: "#14b8a6",
                    fontSize: "2.4rem",
                    padding: 2,
                    color: "#fff",
                  }}
                />
                <Box sx={{ mt: 2, display: "flex" }}>
                  <ArrowUpwardIcon sx={{ color: "#14b8a6" }} />
                  <Typography sx={{ ml: 0.2 }}>1%</Typography>
                  <Typography sx={{ ml: 0.5 }} color="#919191">
                    Since last month
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={4} xs={12} sm={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" color={"#636363"}>
                  Total Order
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ mb: 2.5, mt: 1 }}
                  fontWeight={600}
                >
                  {orders.length}
                </Typography>
                <ListAltIcon
                  sx={{
                    clipPath: "circle()",
                    backgroundColor: "#ffb020",
                    fontSize: "2.4rem",
                    padding: 2,
                    color: "#fff",
                  }}
                />
                <Box sx={{ mt: 2, display: "flex" }}>
                  <ArrowUpwardIcon sx={{ color: "#ffb020" }} />
                  <Typography sx={{ ml: 0.2 }}>8%</Typography>
                  <Typography sx={{ ml: 0.5 }} color="#919191">
                    Since last month
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default AdminDashboard;
