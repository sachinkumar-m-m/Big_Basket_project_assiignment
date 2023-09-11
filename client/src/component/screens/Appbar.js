import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../GlobalContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {
  MenuList,
  Stack,
  Drawer,
  IconButton,
  Badge,
  Avatar,
  SpeedDial,
  SpeedDialAction,
} from "@mui/material";
import { Container } from "@mui/system";
import "../../style/CssStyle/index.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  AppBox,
  CartIcon,
  IconMenu,
  Logo,
  LogoContent,
  LogoContentTwo,
  MyItem,
  MyList,
} from "../../style/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LogoutIcon from "@mui/icons-material/Logout";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import ListAltIcon from "@mui/icons-material/ListAlt";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const drawerWidth = 300;

function Appbar(props) {
  const context = useContext(GlobalContext);
  const [user] = context.authApi.userData;
  const [isLogged, setIsLogged] = context.authApi.isLogged;
  const [isAdmin, setIsAdmin] = context.authApi.isAdmin;
  const [isUser, setIsUser] = context.authApi.isUser;
  const [isHotel, setIsHotel] = context.authApi.isHotel;
  const [isMart, setIsMart] = context.authApi.isMart;
  const [cart] = context.authApi.cart;

  // navbar scrool
  const [scroolPoistion, setScroolPosition] = useState(0);

  // speedDial
  const [direction, setDirection] = useState("down");

  // navigate
  const dashBoarNavigate = () => {
    navigate(`/admin/dashboard`);
  };
  const profileNavigate = () => {
    navigate(`/profile`);
  };
  const orderNavigate = () => {
    navigate(`/orders`);
  };

  const navigate = useNavigate();

  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  const logoutUser = async () => {
    if (window.confirm(`Are you sure to logout?`)) {
      await axios.get(`/api/v1/auth/logout`);
      localStorage.clear();
      if (isAdmin) {
        setIsAdmin(false);
      }
      if (isUser) {
        setIsUser(false);
      }
      setIsLogged(false);
      toast.success("Successfully Logout");
      navigate("/");
      window.location.href = "/";
    } else {
      toast.warning("Logout terminated");
    }
  };

  // navbar scrool
  useEffect(() => {
    const updatePosition = () => {
      setScroolPosition(window.pageYOffset);
    };

    window.addEventListener("scroll", updatePosition);

    updatePosition();

    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  /* common route */
  const commonRoute = () => {
    return (
      <Box sx={{ display: "flex" }}>
        {isAdmin ? null : (
          <CartIcon sx={{ my: "auto", mr: { xs: 0, sm: 2 } }}>
            <Badge
              color="error"
              badgeContent={cart.length > 0 ? cart.length : 0}
            >
              <NavLink to={`/product/cart`}>
                <ShoppingCartIcon
                  sx={{ color: "#fff", fontSize: { xs: "1.8rem", sm: "2rem" } }}
                />
              </NavLink>
            </Badge>
          </CartIcon>
        )}
        <Box>
          {isAdmin ? (
            <Box sx={{ transform: "translateY(63px)", flexGrow: 1 }}>
              <SpeedDial
                icon={
                  <Avatar
                    sx={{ width: "100%", height: "100%" }}
                    src={user.image.url}
                  />
                }
                direction={direction}
                ariaLabel="SpeedDial basic example"
              >
                <SpeedDialAction
                  sx={{
                    background: `linear-gradient(to right, #f12711, #f5af19)`,
                  }}
                  onClick={dashBoarNavigate}
                  tooltipTitle="Dashbord"
                  icon={<DashboardIcon sx={{ color: "#fff" }} />}
                />
                <SpeedDialAction
                  sx={{
                    background: `linear-gradient(to right, #f12711, #f5af19)`,
                  }}
                  onClick={logoutUser}
                  icon={<LogoutIcon sx={{ color: "#fff" }} />}
                  tooltipTitle="Logout"
                />
              </SpeedDial>
            </Box>
          ) : (
            <Box sx={{ transform: "translateY(90px)", flexGrow: 1 }}>
              <SpeedDial
                direction={direction}
                ariaLabel="SpeedDial basic example"
                icon={
                  <Avatar
                    sx={{
                      width: "100%",
                      height: "100%",
                      backgroundColor: "#fff",
                    }}
                    src={user.image.url}
                  />
                }
              >
                <SpeedDialAction
                  sx={{
                    background: `linear-gradient(to right, #f12711, #f5af19)`,
                  }}
                  onClick={profileNavigate}
                  tooltipTitle="Profile"
                  icon={<PersonIcon sx={{ color: "#fff" }} />}
                />
                <SpeedDialAction
                  sx={{
                    background: `linear-gradient(to right, #f12711, #f5af19)`,
                  }}
                  onClick={orderNavigate}
                  tooltipTitle="Orders"
                  icon={<ListAltIcon sx={{ color: "#fff" }} />}
                />
                <SpeedDialAction
                  sx={{
                    background: `linear-gradient(to right, #f12711, #f5af19)`,
                  }}
                  onClick={logoutUser}
                  icon={<LogoutIcon sx={{ color: "#fff" }} />}
                  tooltipTitle="Logout"
                />
              </SpeedDial>
            </Box>
          )}
        </Box>
      </Box>
    );
  };

  return (
    <AppBox>
      <AppBar
        sx={{
          zIndex: 40,
          backgroundColor: "#000",
          height: 80,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container sx={{ padding: "0px" }}>
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <IconMenu
              onClick={handleDrawerOpen}
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <MenuIcon style={{ color: "#fff" }} />
            </IconMenu>

            <Box  sx={{ flexGrow: 1 }}>
              {isAdmin ? (
                <NavLink
                  to={`/home`}
                  style={{ textDecoration: "none", flexGrow: 1 }}
                >
                  <LogoContent
                    variant="h5"
                    component="div"
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      fontWeight: 500,
                      color: "#fff",
                    }}
                  >
                    Admin
                  </LogoContent>
                </NavLink>
              ) : null}
              {isLogged ? null : (
                <NavLink
                  to={`/home`}
                  style={{ textDecoration: "none", flexGrow: 1 }}
                >
                  <Box sx={{ display: "flex" }}>
                    <Logo>
                      <img
                        src="https://res.cloudinary.com/dhina/image/upload/v1664773762/waycool/526-paper-bag-vegetables-flat_rcghbe.gif"
                        alt=""
                        height={50}
                      />
                    </Logo>
                    <LogoContent
                      variant="h6"
                      component="div"
                      color={"#f4474a"}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontWeight: 600,
                        fontSize: "20px",
                      }}
                    >
                      Coolway
                    </LogoContent>
                  </Box>
                </NavLink>
              )}
              {isUser ? (
                <NavLink
                  to={`/home`}
                  style={{ textDecoration: "none", flexGrow: 1 }}
                >
                  <Box sx={{ display: "flex" }}>
                    <Logo>
                      <img
                        src="https://res.cloudinary.com/dhina/image/upload/v1664773762/waycool/526-paper-bag-vegetables-flat_rcghbe.gif"
                        alt=""
                        height={50}
                      />
                    </Logo>
                    <LogoContent
                      variant="h6"
                      component="div"
                      color={"#f4474a"}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontWeight: 600,
                        fontSize: "20px",
                      }}
                    >
                      Coolway
                    </LogoContent>
                  </Box>
                </NavLink>
              ) : null}
              {isHotel ? (
                <NavLink
                  to={`/restaurent`}
                  style={{ textDecoration: "none", flexGrow: 1 }}
                >
                  <Box sx={{ display: "flex" }}>
                    <Logo>
                      <img
                        src="https://res.cloudinary.com/dhina/image/upload/v1664773762/waycool/526-paper-bag-vegetables-flat_rcghbe.gif"
                        alt=""
                        height={50}
                      />
                    </Logo>
                    <LogoContent
                      variant="h6"
                      component="div"
                      color={"#f4474a"}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontWeight: 600,
                        fontSize: "20px",
                      }}
                    >
                      Coolway
                    </LogoContent>
                  </Box>
                </NavLink>
              ) : null}
              {isMart ? (
                <NavLink
                  to={`/superMart`}
                  style={{ textDecoration: "none", flexGrow: 1 }}
                >
                  <Box sx={{ display: "flex" }}>
                    <Logo>
                      <img
                        src="https://res.cloudinary.com/dhina/image/upload/v1664773762/waycool/526-paper-bag-vegetables-flat_rcghbe.gif"
                        alt=""
                        height={50}
                      />
                    </Logo>
                    <LogoContent
                      variant="h6"
                      component="div"
                      color={"#f4474a"}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontWeight: 600,
                        fontSize: "20px",
                      }}
                    >
                      Coolway
                    </LogoContent>
                  </Box>
                </NavLink>
              ) : null}
            </Box>
            {isLogged ? null : (
              <Box
                sx={{ display: { xs: "block", md: "none", marginRight: 4 } }}
              >
                <img
                  src="https://res.cloudinary.com/dhina/image/upload/v1664773762/waycool/526-paper-bag-vegetables-flat_rcghbe.gif"
                  alt=""
                  height={45}
                />
              </Box>
            )}
            <Drawer
              sx={{
                width: drawerWidth,
                zIndex: 100,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                  width: drawerWidth,
                  boxSizing: "border-box",
                },
              }}
              variant="temporary"
              anchor="left"
              onClose={() => {
                handleDrawerClose();
              }}
              open={openDrawer}
            >
              <DrawerHeader>
                <Typography sx={{ flexGrow: 1 }}>Coolway</Typography>
                <IconButton onClick={handleDrawerClose}>
                  <CloseIcon />
                </IconButton>
              </DrawerHeader>

              <MenuList sx={{ display: "flex", flexDirection: "column" }}>
                <NavLink
                  onClick={handleDrawerClose}
                  to={`/`}
                  className="list"
                  style={{ color: "#000" }}
                >
                  <MyItem sx={{ display: "inline-block" }}>Home</MyItem>
                </NavLink>
                {isAdmin ? null : (
                  <NavLink
                    onClick={handleDrawerClose}
                    to={`/about`}
                    className="list"
                    style={{ color: "#000" }}
                  >
                    <MyItem sx={{ display: "inline-block" }}>About us</MyItem>
                  </NavLink>
                )}
                <NavLink
                  onClick={handleDrawerClose}
                  to={`/menu`}
                  className="list"
                  style={{ color: "#000" }}
                >
                  <MyItem sx={{ display: "inline-block" }}>Menu</MyItem>
                </NavLink>
                {isLogged ? null : (
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <NavLink
                      to={`/login`}
                      className="list"
                      onClick={handleDrawerClose}
                      style={{ color: "#000" }}
                    >
                      <MyItem sx={{ display: "inline-block" }}>Log in</MyItem>
                    </NavLink>
                    <NavLink
                      to={`/register`}
                      className="list"
                      onClick={handleDrawerClose}
                      style={{ color: "#000" }}
                    >
                      <MyItem sx={{ display: "inline-block" }}>Sign up</MyItem>
                    </NavLink>
                  </Box>
                )}
              </MenuList>
            </Drawer>

            <MyList sx={{ display: "flex", flexGrow: 1 }}>
              {isLogged ? null : (
                <NavLink to={`/restaurent`} className="list">
                  <MyItem>Home</MyItem>
                </NavLink>
              )}

              {isMart ? (
                <NavLink to={`/superMart`} className="list">
                  <MyItem>Home</MyItem>
                </NavLink>
              ) : null}

              {isHotel ? (
                <NavLink to={`/restaurent`} className="list">
                  <MyItem>Home</MyItem>
                </NavLink>
              ) : null}
              {isUser ? (
                <NavLink to={`/`} className="list">
                  <MyItem>Home</MyItem>
                </NavLink>
              ) : null}
              {isAdmin ? (
                <NavLink to={`/`} className="list">
                  <MyItem>Home</MyItem>
                </NavLink>
              ) : null}
              {isAdmin ? null : (
                <NavLink to={`/about`} className="list">
                  <MyItem>About us</MyItem>
                </NavLink>
              )}
              <NavLink to={`/menu`} className="list">
                <MyItem>Menu</MyItem>
              </NavLink>
            </MyList>
            {isLogged ? (
              commonRoute()
            ) : (
              <MyList sx={{ display: "flex" }}>
                <NavLink to={`/login`} className="list">
                  <MyItem>Log in</MyItem>
                </NavLink>
                <NavLink to={`/register`} className="list">
                  <MyItem>Sign up</MyItem>
                </NavLink>
              </MyList>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </AppBox>
  );
}

export default Appbar;
