import { Box, Button, Typography } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import Slide from "@mui/material/Slide";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}

function PartDetails(props) {
  const location = useLocation();
  const part = location.state.item;
  const price = location.state.price;

  const [inCart, setInCart] = React.useState(false);

  //Snackbar
  const [state, setState] = React.useState({
    open: false,
    Transition: Slide,
    message: "",
    id: "",
    // inCart: false,
  });

  const handleClose = () => {
    setState((state) => ({
      ...state,
      open: false,
    }));
  };

  useEffect(() => {
    async function getCartItems() {
      // console.log(JSON.parse(localStorage.getItem("user")));
      console.log("Use effect executing");
      try {
        const res = await axios
          .get("http://localhost:8000/api/users/cart/all", {
            headers: {
              Authorization: `Bearer ${
                JSON.parse(localStorage.getItem("user")).accessToken
              }`,
            },
          })
          .catch((err) => console.log(err));
        const isInCart = res.data.parts.find(
          (item) =>
            item.name === part.name &&
            item.category === part.categories[0].category_name
        );
        if (isInCart) {
          console.log("Setting true to inCart from useEffect");
          setInCart(true);
          setState((state) => ({
            ...state,
            id: isInCart._id,
          }));
        }
      } catch (err) {
        console.log(err);
      }
    }
    getCartItems();
  }, [part.name, part.categories[0].category_name]);

  const sendRequest = async () => {
    if (!inCart) {
      try {
        await axios
          .post(
            "http://localhost:8000/api/users/cart",
            {
              name: part.name,
              category: part.categories[0].category_name,
              quantity: {},
              price: "$" + price,
            },
            {
              headers: {
                Authorization: `Bearer ${
                  JSON.parse(localStorage.getItem("user")).accessToken
                }`,
              },
            }
          )
          .then((res) => {
            console.log("Setting true from  Send Request Function");
            setState({
              open: true,
              SlideTransition,
              message: "Added to cart!",
              id: res.data._id,
            });
            setInCart(true);
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
    } else {
      try {
        await axios
          .delete(`http://localhost:8000/api/users/cart/${state.id}`, {
            headers: {
              Authorization: `Bearer ${
                JSON.parse(localStorage.getItem("user")).accessToken
              }`,
            },
          })
          .then(() => {
            console.log(
              "Setting false from else part of Send Request Function"
            );
            setState({
              open: true,
              SlideTransition,
              message: "Removed from cart!",
              id: "",
            });
            setInCart(false);
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
    }
  };

  const handleAddToCart = () => {
    //TODO Remember to check store, as I don't think localStorage is getting updated with new token
    sendRequest();
  };

  return (
    <Box
      sx={{
        mt: 2,
        display: "flex",
        flexDirection: "row",
        justifyItems: "space-between",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          p: 1,
          display: "flex",
          flexDirection: "column",
          flex: 0.3,
          alignItems: "center",
        }}
      >
        <Typography variant="h4">{part.name}</Typography>
        <Typography variant="h5" sx={{ color: "gray" }}>
          {part.categories[0].category_name}
        </Typography>
      </Box>
      <Box
        sx={{
          p: 1,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          gap: 2,
        }}
      >
        <Box
          display={"flex"}
          flexDirection={"row"}
          mt={3}
          mb={4}
          // gap={2}
          alignSelf={"end"}
        >
          <Button
            color={inCart ? "warning" : "success"}
            variant="contained"
            onClick={handleAddToCart}
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 1,
            }}
          >
            {inCart ? "Remove from cart " : "Add to cart "}
            {inCart ? <RemoveShoppingCartIcon /> : <AddShoppingCartIcon />}
          </Button>
          <Snackbar
            open={state.open}
            onClose={handleClose}
            TransitionComponent={state.Transition}
            message={state.message}
            // key={state.Transition.name}
            autoHideDuration={1500}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            // sx={{ backgroundColor: "#689F38" }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default PartDetails;
