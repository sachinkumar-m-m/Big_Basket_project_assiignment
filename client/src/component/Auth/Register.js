import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import {
  Box,
  Button,
  Card,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import UserInputReg from "./UserInputReg";
import Fade from "react-reveal/Fade";

function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    role: "",
  });
  const navigate = useNavigate();

  const { errors, validate } = UserInputReg();

  const readValue = (e) => {
    const { name, value } = e.target;
    validate(name, value);
    setUser({ ...user, [name]: value });
  };

  // validation
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(`/api/v1/auth/register`, user)
        .then((res) => {
          toast.success("User registerted successfully");
          navigate("/login");
        })
        .catch((err) => toast.error(err.response.data.msg));
    } catch (err) {
      toast.error(err.response.data.msg);
    }
  };
  return (
    <Container>
      <Fade right>
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            paddingTop: 9,
          }}
        >
          <Grid
            item
            lg={4}
            xs={12}
            sm={7}
            md={6}
            sx={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
          >
            <Card sx={{ padding: "20px" }}>
              <Typography variant="h5">Sign up</Typography>
              <Box component={"form"} onSubmit={submitHandler}>
                <TextField
                  label="Name*"
                  type="text"
                  name="name"
                  id="name"
                  value={user.name}
                  onChange={readValue}
                  variant="standard"
                  sx={{ mt: 2, width: "100%" }}
                />
                {errors && errors.name ? (
                  <Typography fontSize={"0.8rem"} color="red">
                    {errors.name}
                  </Typography>
                ) : null}
                <TextField
                  label="Email*"
                  type="email"
                  name="email"
                  id="email"
                  value={user.email}
                  onChange={readValue}
                  // onBlur={(e) => setUser(e.target.email)}
                  variant="standard"
                  sx={{ mt: 2, width: "100%" }}
                />
                {errors && errors.email ? (
                  <Typography fontSize={"0.8rem"} color="red">
                    {errors.email}
                  </Typography>
                ) : null}
                <TextField
                  label="Mobile Number*"
                  type="number"
                  name="mobile"
                  id="mobile"
                  value={user.mobile}
                  onChange={readValue}
                  // onBlur={(e) => setUser(e.target.mobile)}
                  variant="standard"
                  sx={{ mt: 2, width: "100%" }}
                />
                {errors && errors.mobile ? (
                  <Typography fontSize={"0.8rem"} color="red">
                    {errors.mobile}
                  </Typography>
                ) : null}
                <TextField
                  label="Password*"
                  type="password"
                  name="password"
                  id="password"
                  value={user.password}
                  onChange={readValue}
                  // onBlur={(e) => setUser(e.target.password)}
                  variant="standard"
                  sx={{ mt: 2, width: "100%" }}
                />
                {errors && errors.password ? (
                  <Typography fontSize={"0.8rem"} color="red">
                    {errors.password}
                  </Typography>
                ) : null}
                {/* DropDown Options for selecting user */}

                <FormControl
                  fullWidth
                  sx={{ marginTop: 2, color: "red" }}
                  required
                  label="Product title"
                  color="secondary"
                >
                  <InputLabel>What You are</InputLabel>
                  <Select
                    name="role"
                    id="role"
                    value={user.role}
                    label="What you are"
                    onChange={readValue}
                  >
                    <MenuItem value={"user"}>User</MenuItem>
                    <MenuItem value={"supermarket"}>Supermarket</MenuItem>
                    <MenuItem value={"hotel"}>Hotel</MenuItem>
                  </Select>
                </FormControl>

                {/* DropDown Options for selecting user */}
                <Button
                  variant="contained"
                  type="submit"
                  style={{
                    marginTop: "38px",
                    width: "100%",
                    background: `linear-gradient(to right, #f12711, #f5af19)`,
                  }}
                >
                  Signup
                </Button>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
                <Typography color={"#551A8B"}>Already have account?</Typography>
                <NavLink
                  to={`/login`}
                  style={{ marginLeft: "10px" }}
                  className="LoginLink"
                >
                  LogIn
                </NavLink>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Fade>
    </Container>
  );
}

export default Register;
