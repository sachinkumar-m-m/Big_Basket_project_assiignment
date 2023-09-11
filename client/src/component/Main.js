import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GlobalContext } from "../GlobalContext";

/* react toast */
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/* component */
import AdminDashboard from "./Admin/AdminDashboard";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import About from "./screens/About";
import Home from "./screens/Home";
import Pnf from "./Util/Pnf";
import ProtectedRoute from "../middleware/ProtectedRoute";
import Profile from "./screens/Profile";
import Order from "./screens/Order";
import ProductDetails from "./Product/ProductDetails";
import CreateProduct from "./Admin/CreateProduct";
import Menu_Item from "./screens/MenuItem";
import Appbar from "./screens/Appbar";
import Cart from "./Product/Cart";
import Checkout from "./Product/Checkout";
import UsersDetails from "./Admin/UsersDetails";
import OrderList from "./Admin/OrderList";
import UpdateProduct from "./Admin/UpdateProduct";
import ProductList from "./Admin/ProductList";
import UpdateProfile from "./screens/UpdateProfile.js";
import Restaurant from "./screens/Restaurant";
import SuperMarket from "./screens/SuperMart";

function Main(props) {
  const context = useContext(GlobalContext);

  const [isLogged, setIsLogged] = context.authApi.isLogged;
  const [isAdmin, setIsAdmin] = context.authApi.isAdmin;
  const [isUser, setIsUser] = context.authApi.isUser;
  const [isHotel, setIsHotel] = context.authApi.isHotel;
  const [isMart, setIsMart] = context.authApi.isMart;

  return (
    <Router>
      <Appbar />
      <ToastContainer autoClose={1000} position="top-center" />
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/home`} element={<Home />} />
        <Route path={`/about`} element={<About />} />
        <Route path={`/menu`} element={<Menu_Item />} />
        <Route path={`/login`} element={isLogged ? <Pnf /> : <Login />} />
        <Route path={`/register`} element={isLogged ? <Pnf /> : <Register />} />
        <Route
          path={`/restaurent`}
          element={
            <ProtectedRoute auth={isLogged}>
              <Restaurant />
            </ProtectedRoute>
          }
        />
        <Route
          path={`/superMart`}
          element={
            <ProtectedRoute auth={isLogged}>
              <SuperMarket />
            </ProtectedRoute>
          }
        />
        <Route
          path={`/admin/dashboard`}
          element={
            <ProtectedRoute auth={isLogged}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path={`/admin/allOrders`}
          element={
            <ProtectedRoute auth={isLogged}>
              <OrderList />
            </ProtectedRoute>
          }
        />
        <Route
          path={`/admin/productList`}
          element={
            <ProtectedRoute auth={isLogged}>
              <ProductList />
            </ProtectedRoute>
          }
        />
        <Route
          path={`/profile`}
          element={
            <ProtectedRoute auth={isLogged}>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path={`/orders`}
          element={
            <ProtectedRoute auth={isLogged}>
              <Order />
            </ProtectedRoute>
          }
        />
        <Route path={`/product/details/:id`} element={<ProductDetails />} />
        <Route
          path={`/product/create`}
          element={
            <ProtectedRoute auth={isLogged}>
              <CreateProduct />
            </ProtectedRoute>
          }
        />
        <Route
          path={`/product/update/:id`}
          element={
            <ProtectedRoute auth={isLogged}>
              <UpdateProduct />
            </ProtectedRoute>
          }
        />
        <Route
          path={`/profile/update/:id`}
          element={
            <ProtectedRoute auth={isLogged}>
              <UpdateProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path={`/admin/allUsers`}
          element={
            <ProtectedRoute auth={isLogged}>
              <UsersDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path={`/product/cart`}
          element={
            <ProtectedRoute auth={isLogged}>
              <Cart />
            </ProtectedRoute>
          }
        />
        <Route
          path={`/checkout/:final`}
          element={
            <ProtectedRoute auth={isLogged}>
              <Checkout />
            </ProtectedRoute>
          }
        />
        <Route path={`/*`} element={<Pnf />} />
      </Routes>
    </Router>
  );
}

export default Main;
