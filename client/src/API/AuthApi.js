import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function useAuth(token) {
  const [user, setUser] = useState(null);
  const [isLogged, setIsLogged] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isHotel, setIsHotel] = useState(false);
  const [isMart, setIsMart] = useState(false);
  const [allUsers, setAllUsers] = useState([]);

  // card state
  const [cart, setCart] = useState([]);
  const [order, setOrder] = useState({});
  const [finalTotal, setFinalTotal] = useState(0);
  const [history, setHistory] = useState([]);
  const [callback, setCallback] = useState(false);

  useEffect(() => {
    if (token) {
      const getData = async () => {
        const res = await axios.get(`/api/v1/auth/userinfo`, {
          headers: { Authorization: token },
        });
        setUser(res.data.user);
        setCart(res.data.user.cart);
        setOrder(res.data.user.orders);
        setIsLogged(true);
        if (res.data.user.role === "superadmin") {
          setIsAdmin(true);
          getAllUsersData(token);
        }
        if (res.data.user.role === "user") {
          setIsUser(true);
        }
        if (res.data.user.role === "hotel") {
          setIsHotel(true);
        }
        if (res.data.user.role === "supermarket") {
          setIsMart(true);
        }
      };
      getData();
    }
  }, [token]);

  const addToCart = async (product) => {
    if (!isLogged) return toast.warning("Please Login to contine buying");
    const check = cart.every((item) => {
      return item._id !== product._id;
    });

    if (check) {
      toast.success("product added to cart");
      // setCart([...cart, { ...product, quantity: 1 }]);
      {
        isUser ?  (setCart([...cart, { ...product, quantity: 1 }])) : isHotel ?  (setCart([...cart, { ...product, quantity: 10 }])): isMart ?  (setCart([...cart, { ...product, quantity: 50 }])) :  (setCart([...cart, { ...product, quantity: 1 }]))
      }

      // store cart info  in db
      await axios.patch(
        `/api/v1/auth/addToCart`,
        { cart: [...cart, { ...product, quantity: 1 }] },
        {
          headers: {
            Authorization: token,
          },
        }
      );
    } else {
      toast.warning("Product already added to cart");
    }
  };

  const orderUpdate = async (cart, finalTotal) => {
    toast.success("order is ready to check out");
    setOrder({ cart: cart, finalTotal: finalTotal });

    await axios.patch(
      `/api/v1/auth/saveOrder`,
      { orders: { cart, finalTotal } },
      {
        headers: { Authorization: token },
      }
    );
  };

  const getAllUsersData = async (token) => {
    const res = await axios.get(`/api/v1/auth/allUsers`, {
      headers: { Authorization: token },
    });
    setAllUsers(res.data.user);
  };

  return {
    userData: [user, setUser],
    isLogged: [isLogged, setIsLogged],
    isUser: [isUser, setIsUser],
    isAdmin: [isAdmin, setIsAdmin],
    isHotel: [isHotel, setIsHotel],
    isMart: [isMart, setIsMart],
    cart: [cart, setCart],
    order: [order, setOrder],
    finalTotal: [finalTotal, setFinalTotal],
    addToCart: addToCart,
    orderUpdate: orderUpdate,
    callback: [callback, setCallback],
    allUsers: [allUsers, setAllUsers],
  };
}

export default useAuth;
