import {
  Box,
  Button,
  Divider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { GlobalContext } from "../../GlobalContext";
import EditIcon from "@mui/icons-material/Edit";
import SideDrawer from "../Drawer/SideDrawer";

function UsersDetails() {
  const data = useContext(GlobalContext);
  const [allUsers] = data.authApi.allUsers;

  const [editableUser, setEditableUser] = useState(false);

  const toggleEdit = (userId) => {
    let user = allUsers.find((item) => item._id === userId);
    setEditableUser(user);
  };

  return (
    <Box sx={{ paddingTop: "80px", display: "flex" }}>
      <SideDrawer />
      <Box component="main" sx={{ flexGrow: 1, p: { xs: 1.5, lg: 3, sm: 3 } }}>
        <Typography variant="h4" sx={{ paddingTop: 3.5, paddingBottom: 0.9 }}>
          All Users
        </Typography>
        <Divider color="grey" />
        <TableContainer
          component={Paper}
          sx={{ marginTop: "30px", maxWidth: "100vw" }}
        >
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 600 }} align="center">
                  Name
                </TableCell>
                <TableCell sx={{ fontWeight: 600 }} align="center">
                  Eamil
                </TableCell>
                <TableCell sx={{ fontWeight: 600 }} align="center">
                  Mobile
                </TableCell>
                <TableCell sx={{ fontWeight: 600 }} align="center">
                  Role
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allUsers &&
                allUsers.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell align="center">{item.name}</TableCell>
                    <TableCell align="center">{item.email}</TableCell>
                    <TableCell align="center">{item.mobile}</TableCell>
                    <TableCell align="center">
                      {item.role}
                      <Button
                        variant="outlined"
                        sx={{ padding: "0px", minWidth: "35px", marginLeft: 2 }}
                        onClick={() => toggleEdit(item._id)}
                      >
                        <EditIcon />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}

export default UsersDetails;
