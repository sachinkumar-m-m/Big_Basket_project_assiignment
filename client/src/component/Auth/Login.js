import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import UserInputLogin from "./UserInputLogin";
import Fade from "react-reveal/Fade";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const { errors, validate } = UserInputLogin();

  const readValue = (e) => {
    const { name, value } = e.target;
    validate(name, value);
    setUser({ ...user, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(`/api/v1/auth/login`, user)
        .then((res) => {
          toast.success("User Login successful");
          localStorage.setItem("loginToken", true);
          navigate("/");
          window.location.reload();
        })
        .catch((err) => toast.error(err.response.data.msg));
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  };
  return (
    <Container>
      <Fade left>
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Grid
            item
            lg={4}
            sm={7}
            md={6}
            xs={12}
            sx={{
              paddingTop: 3,
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            }}
          >
            <Card sx={{ padding: "20px" }}>
              <Typography variant="h5">Login</Typography>
              <Box component={"form"} onSubmit={submitHandler}>
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <PersonOutlineOutlinedIcon
                    sx={{ color: "action.active", mr: 1, my: 0.5 }}
                  />
                  <TextField
                    label="Email*"
                    type="email"
                    name="email"
                    id="email"
                    value={user.email}
                    onChange={readValue}
                    variant="standard"
                    sx={{ mt: 3, width: "100%" }}
                  />
                </Box>
                {errors && errors.email ? (
                  <Typography ml={4} fontSize={"0.8rem"} color="red">
                    {errors.email}
                  </Typography>
                ) : null}
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <LockOutlinedIcon
                    sx={{ color: "action.active", mr: 1, my: 0.5 }}
                  />
                  <TextField
                    label="Password*"
                    type="password"
                    name="password"
                    id="password"
                    value={user.password}
                    onChange={readValue}
                    variant="standard"
                    sx={{ mt: 3, width: "100%" }}
                  />
                </Box>
                {errors && errors.password ? (
                  <Typography ml={4} fontSize={"0.8rem"} color="red">
                    {errors.password}
                  </Typography>
                ) : null}
                <Button
                  variant="contained"
                  type="submit"
                  style={{
                    marginTop: "38px",
                    width: "100%",
                    background: `linear-gradient(to right, #f12711, #f5af19)`,
                  }}
                >
                  Login
                </Button>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
                <Typography color={"#551A8B"}>New user?</Typography>
                <NavLink
                  to={`/register`}
                  style={{ marginLeft: "10px" }}
                  className="LoginLink"
                >
                  SignUp
                </NavLink>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Fade>
    </Container>
  );
}

export default Login;
