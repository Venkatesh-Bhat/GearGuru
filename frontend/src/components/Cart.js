import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  TextField,
  Typography,
} from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import Slide from "@mui/material/Slide";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import InventorySharpIcon from "@mui/icons-material/InventorySharp";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Warning from "./Warning";

function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}

function Cart() {
  const [cart, setCart] = useState(null);
  const [user, setUser] = useState(null);
  const [total, setTotal] = useState(0);

  //For Dialog Box
  const [open, setOpen] = useState(false);
  const handleDialogOpen = () => {
    setOpen(true);
  };

  const handleDialogClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          "http://localhost:8000/api/users/cart/all",
          {
            headers: {
              Authorization: `Bearer ${
                JSON.parse(localStorage.getItem("user")).accessToken
              }`,
            },
          }
        );
        setCart(res.data.cart);
        setUser(res.data.address);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [cart]);

  // useEffect(() => {
  //   async function getMe() {
  //     try {
  //       const res = await axios.get("http://localhost:8000/api/users/getMe", {
  //         headers: {
  //           Authorization: `Bearer ${
  //             JSON.parse(localStorage.getItem("user")).accessToken
  //           }`,
  //         },
  //       });
  //       console.log(res.data);
  //       setUser(res.data.address);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  //   getMe();
  // }, []);

  const handleInputChange = (e) => {
    setUser(e.target.value);
  };

  useEffect(() => {
    if (cart) {
      let totalPrice = 0;
      cart.car.forEach((item) => {
        totalPrice += item.price;
      });
      cart.parts.forEach((item) => {
        totalPrice += item.price;
      });
      setTotal(totalPrice);
    }
  }, [cart]);

  //Snackbar
  const [state, setState] = React.useState({
    open: false,
    Transition: SlideTransition,
    message: "",
    // id: "",
    // inCart: false,
  });

  const handleClose = () => {
    setState((state) => ({
      ...state,
      open: false,
    }));
  };

  const sendRequest = async (id) => {
    try {
      await axios
        .delete(`http://localhost:8000/api/users/cart/${id}`, {
          headers: {
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem("user")).accessToken
            }`,
          },
        })
        .then(() => {
          setState({
            open: true,
            SlideTransition,
            message: "Removed from cart!",
            // id: "",
          });
        });
    } catch (err) {
      setState((state) => ({
        ...state,
        open: true,
        SlideTransition,
        message: err.response.data.message,
      }));
      console.log("Error: " + err);
    }
  };

  const handleRemove = async (id) => {
    console.log(id);
    try {
      await sendRequest(id);
      const updatedCart = { ...cart }; // Make a shallow copy of the cart object
      updatedCart.car = updatedCart.car.filter((item) => item._id !== id); // Remove the item from the car array
      updatedCart.parts = updatedCart.parts.filter((item) => item._id !== id); // Remove the item from the parts array
      if (updatedCart.car.length === 0 && updatedCart.parts.length === 0) {
        // If both car and parts arrays are empty, set cart state to null or an empty array
        setCart(null); // or setCart([]);
      } else {
        setCart(updatedCart); // Update the cart state with the modified cart object
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handlePurchase = async () => {
    try {
      const carIds = cart.car.map((item) => item._id);
      const partsIds = cart.parts.map((item) => item._id);
      const allIds = [...carIds, ...partsIds];
      await axios
        .put(
          "http://localhost:8000/api/users/buy",
          { itemIDs: allIds, address: user },
          {
            headers: {
              Authorization: `Bearer ${
                JSON.parse(localStorage.getItem("user")).accessToken
              }`,
            },
          }
        )
        .then(() => {
          setState({
            open: true,
            SlideTransition,
            message: "All items bought!",
            // id: "",
          });
        });
      setCart(null);
    } catch (err) {
      setState((state) => ({
        ...state,
        open: true,
        SlideTransition,
        message: err.response.data.message,
      }));
      console.log(err);
    }
  };

  const handleCheckout = () => {
    handlePurchase();
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mt: 3, p: 2 }}>
      {cart ? (
        <Typography variant="h4">Your Cart</Typography>
      ) : (
        <Typography variant="h4">No items added...</Typography>
      )}
      {cart &&
        cart.car.length !== 0 &&
        cart.car.map((item) => (
          <Card key={item._id} sx={{ ml: 2, mr: 2 }}>
            <CardHeader title={item.model} subheader={item.name} />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <CardContent
                sx={{ display: "flex", flexDirection: "row", mt: 0, pt: 0 }}
              >
                <Typography>Price: </Typography>
                <Typography>${item.price}</Typography>
              </CardContent>
              <CardActions>
                {/* <Button color="error" onClick={() => handleRemove(item._id)}> */}
                <Button color="error" onClick={handleDialogOpen}>
                  <RemoveShoppingCartIcon />
                </Button>
                <Warning
                  open={open}
                  handleClose={handleDialogClose}
                  handleRemove={handleRemove}
                  title={"Remove from Cart?"}
                  content={
                    "Warning!! This action will permanently remove the item from your inventory. Are you sure you want to remove it?"
                  }
                  itemId={item._id}
                />
              </CardActions>
            </Box>
          </Card>
        ))}

      {cart &&
        cart.parts.length !== 0 &&
        cart.parts.map((item) => (
          <Card key={item._id} sx={{ ml: 2, mr: 2 }}>
            <CardHeader title={item.name} subheader={item.category} />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <CardContent>
                <Box
                  sx={{ display: "flex", flexDirection: "row", mt: 0, pt: 0 }}
                >
                  <Typography>Price: </Typography>
                  <Typography>
                    ${`${item.price} / (${item.quantity} Qty)`}
                  </Typography>
                </Box>
              </CardContent>
              <CardActions>
                {/* <Button color="error" onClick={() => handleRemove(item._id)}> */}
                <Button color="error" onClick={handleDialogOpen}>
                  <RemoveShoppingCartIcon />
                </Button>
              </CardActions>
            </Box>
            <Warning
              open={open}
              handleClose={handleDialogClose}
              handleRemove={handleRemove}
              title={"Remove from Cart?"}
              content={
                "Warning!! This action will permanently remove the item from your inventory. Are you sure you want to remove it?"
              }
              itemId={item._id}
            />
          </Card>
        ))}
      {cart && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
            justifyContent: "end",
          }}
        >
          <TextField
            // id="outlined-multiline-static"
            required={true}
            label="Address"
            name="address"
            value={user}
            defaultValue={user}
            onChange={handleInputChange}
            multiline
            rows={4}
            sx={{ width: "100%" }}
          />
          <Typography
            variant="caption"
            fontSize={20}
          >{`Total Price: $${total}`}</Typography>
          <Button
            variant="contained"
            color="success"
            sx={{ display: "flex", flexDirection: "row", gap: 1 }}
            onClick={handleCheckout}
          >
            Buy Now <InventorySharpIcon />
          </Button>
        </Box>
      )}
      <Snackbar
        open={state.open}
        onClose={handleClose}
        TransitionComponent={state.Transition}
        message={state.message}
        autoHideDuration={1500}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      />
    </Box>
  );
}

export default Cart;
