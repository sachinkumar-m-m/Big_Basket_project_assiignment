import React, { useContext, useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "../../style/CssStyle/index.css";
import { GlobalContext } from "../../GlobalContext";
import axios from "axios";
import { toast } from "react-toastify";
import Product from "../Product/Product";
import { Chip, Grid, Tab, Tabs, Stack, Container, Pagination } from "@mui/material";
import Aos from "aos";
import pagination from 'react-js-pagination'
import Paginate from "../../middleware/Paginate";
import Filter from "../../middleware/Filter";




function MenuName(props) {
  // const [value, setValue] = useState(0);
  // const [curItems, setCurItems] = useState([]);

  const data = useContext(GlobalContext);
  const [products, setProducts] = data.productApi.products;
  const [isUser] = data.authApi.isUser;
  const [isAdmin] = data.authApi.isAdmin;

  //pagination//

  // const [cureItem, setCureItem] = useState(null);
  const [pCount, setPCount] = useState(0);
  const [itemOff, setItemOff] = useState(0);
  const [page, setPage] = useState(0);

  const [token] = data.token;

  // useEffect(() => {
  //   const endOff = itemOff + props.itemsPerPage;
  //   console.log(`offset=${itemOff}-${endOff}`);
  //   setCureItem(products.slice(itemOff, endOff));
  //   setPCount(Math.ceil(products.length / props.itemsPerPage))
  // }, [itemOff, props.itemsPerPage]);


  // useEffect(() => {
  //   Aos.init({ duration: 2000 });
  //   filterResult("All");
  // }, [products]);

  const delHandler = async (id) => {
    if (window.confirm(`Are you sure to delete product?`)) {
      try {
        let product = await axios.get(`/api/v1/product/get/${id}`);
        if (!product) {
          toast.error("no product found");
        } else {
          // delete image
          axios.post(
            `/api/v1/image/product/destroy`,
            { public_id: product.public_id },
            {
              headers: { Authorization: token },
            }
          );
          await axios
            .delete(`/api/v1/product/delete/${id}`, {
              headers: { Authorization: token },
            })
            .then((res) => {
              toast.success("Product deleted succssfully");
              window.location.reload();
            })
            .catch((err) => toast.error(err.message));
        }
      } catch (err) {
        toast.error(err.message);
      }
    } else {
      toast.warning("delete terminated");
    }
  };

  if (products.length === 0) {
    return (
      <Container>
        <Box className="lineContainer">
        <Typography
          align="center"
          sx={{
            fontSize: "1.5rem",
            fontWeight: "600",
            color: "#f4474a",
            fontFamily: "Dancing Script, cursive",
          }}
          className="line"
        >
          Menu
        </Typography>
      </Box>
      <Typography
        data-aos="fade-up"
        variant="h4"
        align="center"
        mt={1}
        sx={{ fontWeight: "600" }}
      >
        Our Products
      </Typography>


      {/* <Grid container sx={{ mt: 2 }}>
        <Grid item xs={12} sm={8} md={6} lg={12}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="secondary"
              variant="scrollable"
              scrollButtons
              allowScrollButtonsMobile
            >
              <Tab
                label={
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                    onClick={() => filterResult("All")}
                  >
                    <Chip
                      label="All"
                      variant="outlined"
                      sx={{
                        "&:hover": {
                          background: "#f4474a",
                          color: "white",
                        },
                        fontWeight: "bold",
                      }}
                    />
                  </Box>
                }
              />
              <Tab
                label={
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                    onClick={() => filterResult("Veg_Pizza")}
                  >
                    <Chip
                      label="veg Pizza"
                      variant="outlined"
                      sx={{
                        "&:hover": {
                          background: "#f4474a",
                          color: "white",
                        },
                        fontWeight: "bold",
                      }}
                    />
                  </Box>
                }
              />
              <Tab
                label={
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                    onClick={() => filterResult("Non-Veg_Pizza")}
                  >
                    <Chip
                      label="Non-veg pizza"
                      variant="outlined"
                      sx={{
                        "&:hover": {
                          background: "#f4474a",
                          color: "white",
                        },
                        fontWeight: "bold",
                      }}
                    />
                  </Box>
                }
              />
              <Tab
                label={
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                    onClick={() => filterResult("Soft-Drink")}
                  >
                    <Chip
                      label="Soft Drink"
                      variant="outlined"
                      sx={{
                        "&:hover": {
                          background: "#f4474a",
                          color: "white",
                        },
                        fontWeight: "bold",
                      }}
                    />
                  </Box>
                }
              />
            </Tabs>
          </Box>
        </Grid>
      </Grid> */}

      <Filter />
        <Grid item md={12}>
          <Typography variant='h2' align="center" color="error">
            No Products is Found
          </Typography>
        </Grid>
      </Container>
    )
  }

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  // const handleClick = (e, value) => {
  //   //  console.log('selected', value);
  //   setPage(value);
  //   const newOff = (value * props.itemsPerPage) % products.length;
  //   setItemOff(newOff);
  //   // console.log(`newOff = ${page}-${newOff}`);
  // }

  // const filterResult = (catItem) => {
  //   // console.log('cate item =', catItem)

  //   if (catItem === "All") {
  //     setCurItems(products);
  //   } else {
  //     let result = products.filter((curData) => {
  //       return curData.category === catItem;
  //     });
  //     console.log("filtered result =", result);
  //     setCurItems(result);
  //   }
  // };


  return (
    <Box pt={5} pb={5}>
      <Box className="lineContainer">
        <Typography
          align="center"
          sx={{
            fontSize: "1.5rem",
            fontWeight: "600",
            color: "#f4474a",
            fontFamily: "Dancing Script, cursive",
          }}
          className="line"
        >
          Menu
        </Typography>
      </Box>
      <Typography
        data-aos="fade-up"
        variant="h4"
        align="center"
        mt={1}
        sx={{ fontWeight: "600" }}
      >
        Our Products
      </Typography>
      {/* <Grid container sx={{ mt: 2 }}>
        <Grid item xs={12} sm={8} md={6} lg={12}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="secondary"
              variant="scrollable"
              scrollButtons
              allowScrollButtonsMobile
            >
              <Tab
                label={
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                    onClick={() => filterResult("All")}
                  >
                    <Chip
                      label="All"
                      variant="outlined"
                      sx={{
                        "&:hover": {
                          background: "#f4474a",
                          color: "white",
                        },
                        fontWeight: "bold",
                      }}
                    />
                  </Box>
                }
              />
              <Tab
                label={
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                    onClick={() => filterResult("Veg_Pizza")}
                  >
                    <Chip
                      label="veg Pizza"
                      variant="outlined"
                      sx={{
                        "&:hover": {
                          background: "#f4474a",
                          color: "white",
                        },
                        fontWeight: "bold",
                      }}
                    />
                  </Box>
                }
              />
              <Tab
                label={
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                    onClick={() => filterResult("Non-Veg_Pizza")}
                  >
                    <Chip
                      label="Non-veg pizza"
                      variant="outlined"
                      sx={{
                        "&:hover": {
                          background: "#f4474a",
                          color: "white",
                        },
                        fontWeight: "bold",
                      }}
                    />
                  </Box>
                }
              />
              <Tab
                label={
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                    onClick={() => filterResult("Soft-Drink")}
                  >
                    <Chip
                      label="Soft Drink"
                      variant="outlined"
                      sx={{
                        "&:hover": {
                          background: "#f4474a",
                          color: "white",
                        },
                        fontWeight: "bold",
                      }}
                    />
                  </Box>
                }
              />
            </Tabs>
          </Box>
        </Grid>
      </Grid> */}

      <Filter />

      <Grid container spacing={3} sx={{ mt: 1 }}>
        {products &&
          products.map((item, index) => {
            return (
              <Product
                key={index}
                {...item}
                isUser={isUser}
                isAdmin={isAdmin}
                del={delHandler}
              />
            );
          })}
      </Grid>
      <Grid item md={12} align={"center"} sx={{mt: 5}}>
        <Paginate />
        
      </Grid>
    </Box>
  );
}

export default MenuName;
