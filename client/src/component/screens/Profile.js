import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../GlobalContext";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Box,
  Divider,
  CardActions,
  IconButton,
} from "@mui/material";
import SideDrawer from "../Drawer/SideDrawer";
import axios from "axios";
import { NavLink } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";

function Profile() {
  const data = useContext(GlobalContext);
  const [user] = data.authApi.userData;
  const [isAdmin] = data.authApi.isAdmin;
  const [isUser] = data.authApi.isUser;
  const [allUsers] = data.authApi.allUsers;
  const [orders, setOrders] = useState([]);
  const [token] = data.token;
  const [editableUser, setEditableUser] = useState(false);

  const [isEdit, setIsEdit] = useState(false);

  const toggleEdit = (userId) => {
    let user = allUsers.find((item) => item._id === userId);
    setEditableUser(user);
  };
  const cancelEdit = () => {
    setIsEdit(false);
  };

  useEffect(() => {
    const getOrders = async () => {
      let res = await axios.get(`/api/v1/auth/orders`, {
        headers: { Authorization: token },
      });
      setOrders(res.data.orders);
    };
    getOrders();
  }, []);

  return (
    <Box sx={{ paddingTop: "80px", display: "flex" }}>
      {isAdmin ? <SideDrawer /> : null}
      <Box component="main" sx={{ flexGrow: 1, p: { xs: 0.5, lg: 3, sm: 3 } }}>
        {isUser ? (
          <Typography variant="h4" align="center" sx={{ paddingTop: 3 }}>
            Profile Info
          </Typography>
        ) : (
          <Box>
            <Typography variant="h4" sx={{ paddingTop: 3, paddingBottom: 1.5 }}>
              Profile Info
            </Typography>
            <Divider color="grey" />
          </Box>
        )}
        <Grid container spacing={3} sx={{ mt: 2 }}>
          <Grid item lg={4} xs={12}>
            {isAdmin ? (
              <Box
                sx={{ height: 300, display: "flex", justifyContent: "center" }}
              >
                {user.image ? (
                  <img src={user.image.url} alt={user.name} height="100%" />
                ) : (
                  <Typography variant="h5">No Image</Typography>
                )}
              </Box>
            ) : (
              <Box
                sx={{ height: 350, display: "flex", justifyContent: "center" }}
              >
                {user.image ? (
                  <img src={user.image.url} alt={user.name} height="100%" />
                ) : (
                  <Typography variant="h5">No Image</Typography>
                )}
              </Box>
            )}
          </Grid>
          <Grid item lg={8} xs={12}>
            <Card>
              <CardHeader align="center" title={user.name} />
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: 2,
                  }}
                >
                  <Typography variant="h6">Email</Typography>
                  <Typography sx={{ display: "flex" }}>{user.email}</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: 2,
                  }}
                >
                  <Typography variant="h6">Mobile</Typography>
                  <Typography>{user.mobile}</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: 2,
                  }}
                >
                  <Typography variant="h6">Role</Typography>
                  <Typography>{user.role}</Typography>
                </Box>
                {isUser ? (
                  <Box>
                    {orders && orders ? (
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          mt: 2,
                        }}
                      >
                        <Typography variant="h6">Orders</Typography>
                        <Typography>{orders.length}</Typography>
                      </Box>
                    ) : null}
                  </Box>
                ) : null}
              </CardContent>
              <CardActions>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flexStart",
                    alignItems: "center",
                  }}
                >
                  <NavLink to={`/profile/update/${user._id}`}>
                    <IconButton color="secondary">
                      <EditIcon />
                    </IconButton>
                  </NavLink>
                </Box>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Profile;
