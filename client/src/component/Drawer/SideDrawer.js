import React from "react";
import {
  Typography,
  MenuList,
  MenuItem,
  Box,
  Drawer,
  Toolbar,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import ListAltIcon from "@mui/icons-material/ListAlt";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import GroupIcon from "@mui/icons-material/Group";
import { NavLink } from "react-router-dom";

const drawerWidth = 170;

function SideDrawer() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: { lg: drawerWidth, sm: 150, xs: 50 },
        flexShrink: 0,
        zIndex: 1,
        [`& .MuiDrawer-paper`]: {
          width: { lg: drawerWidth, sm: 150, xs: 50 },
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto", paddingTop: { xs: 6.2, sm: "20px" } }}>
        <Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <img
              src="https://res.cloudinary.com/dhina/image/upload/v1664773762/waycool/526-paper-bag-vegetables-flat_rcghbe.gif"
              alt=""
              height={45}
            />
          </Box>
          <Typography
            variant="h6"
            component="div"
            sx={{
              display: { lg: "flex", sm: "flex", xs: "none" },
              justifyContent: "center",
              alignItems: "center",
              fontWeight: 500,
              fontSize: { lg: "20px", sm: "16px" },
            }}
          >
            Coolway
          </Typography>
        </Box>
        <Divider variant="middle" color="grey" sx={{ my: 2 }} />
        <MenuList disablePadding>
          <NavLink to={`/admin/dashboard`} style={{ textDecoration: "none" }}>
            <MenuItem sx={{ width: "100%", padding: { xs: 1, sm: 1.7 } }}>
              <ListItemIcon sx={{ paddingLeft: 0.5 }}>
                <SignalCellularAltIcon style={{ color: "#fa7e1e" }} />
              </ListItemIcon>
              <ListItemText
                sx={{
                  paddingLeft: 1.2,
                  color: "black",
                  display: { xs: "none", lg: "block", sm: "block" },
                }}
              >
                Dashboard
              </ListItemText>
            </MenuItem>
          </NavLink>
          <NavLink to={`/profile`} style={{ textDecoration: "none" }}>
            <MenuItem sx={{ width: "100%", padding: { xs: 1, sm: 1.7 } }}>
              <ListItemIcon sx={{ paddingLeft: 0.5 }}>
                <PersonIcon style={{ color: "#fa7e1e" }} />
              </ListItemIcon>
              <ListItemText
                sx={{
                  paddingLeft: 1.2,
                  color: "black",
                  display: { xs: "none", lg: "block", sm: "block" },
                }}
              >
                Profile
              </ListItemText>
            </MenuItem>
          </NavLink>
          <NavLink to={`/admin/productList`} style={{ textDecoration: "none" }}>
            <MenuItem sx={{ width: "100%", padding: { xs: 1, sm: 1.7 } }}>
              <ListItemIcon sx={{ paddingLeft: 0.5 }}>
                <ShoppingBasketIcon style={{ color: "#fa7e1e" }} />
              </ListItemIcon>
              <ListItemText
                sx={{
                  paddingLeft: 1.2,
                  color: "black",
                  display: { xs: "none", lg: "block", sm: "block" },
                }}
              >
                Products
              </ListItemText>
            </MenuItem>
          </NavLink>
          <NavLink to={`/admin/allUsers`} style={{ textDecoration: "none" }}>
            <MenuItem sx={{ width: "100%", padding: { xs: 1, sm: 1.7 } }}>
              <ListItemIcon sx={{ paddingLeft: 0.5 }}>
                <GroupIcon style={{ color: "#fa7e1e" }} />
              </ListItemIcon>
              <ListItemText
                sx={{
                  paddingLeft: 1.2,
                  color: "black",
                  display: { xs: "none", lg: "block", sm: "block" },
                }}
              >
                Users
              </ListItemText>
            </MenuItem>
          </NavLink>
          <NavLink to={`/admin/allOrders`} style={{ textDecoration: "none" }}>
            <MenuItem sx={{ width: "100%", padding: { xs: 1, sm: 1.7 } }}>
              <ListItemIcon sx={{ paddingLeft: 0.5 }}>
                <ListAltIcon style={{ color: "#fa7e1e" }} />
              </ListItemIcon>
              <ListItemText
                sx={{
                  paddingLeft: 1.2,
                  color: "black",
                  display: { xs: "none", lg: "block", sm: "block" },
                }}
              >
                Orders
              </ListItemText>
            </MenuItem>
          </NavLink>
        </MenuList>
      </Box>
    </Drawer>
  );
}

export default SideDrawer;
