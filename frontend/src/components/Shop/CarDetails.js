import { Box, Button, Typography } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import Slide from "@mui/material/Slide";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}

function CardDetail(props) {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const location = useLocation();
  const car = location.state.item;
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
        const isInCart = res.data.car.find(
          (item) => item.model === car.model && item.name === car.make
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
  }, [car.model, car.make]);

  const sendRequest = async () => {
    if (!inCart) {
      try {
        await axios
          .post(
            "http://localhost:8000/api/users/cart",
            {
              name: car.make,
              model: car.model,
              mileage: car.combination_mpg + "mpg",
              price: price,
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
            console.log("inside try");
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
        <Typography variant="h4">{car.model}</Typography>
        <Typography variant="h5" sx={{ color: "gray" }}>
          {car.make}
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
        <Typography variant="h5">Specifications</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            borderTop: "1px solid black",
          }}
        >
          <Typography variant="h6">Type</Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              pl: 2,
              pr: 2,
              alignItems: "center",
            }}
          >
            <Typography variant="body1">Class </Typography>
            <Typography>{car.class}</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              pl: 2,
              pr: 2,
              alignItems: "center",
            }}
          >
            <Typography variant="body1" sx={{ textAlign: "left" }}>
              Fuel Type
            </Typography>
            <Typography> {car.fuel_type}</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            borderTop: "1px solid black",
          }}
        >
          <Typography variant="h6">Mileage</Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              pl: 2,
              pr: 2,
              alignItems: "center",
            }}
          >
            <Typography variant="body1">City Mileage</Typography>
            <Typography> {car.city_mpg}mpg</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              pl: 2,
              pr: 2,
              alignItems: "center",
            }}
          >
            <Typography variant="body1">Highway Mileage </Typography>
            <Typography>{car.highway_mpg}mpg</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              pl: 2,
              pr: 2,
              alignItems: "center",
            }}
          >
            <Typography variant="body1">Average Milage</Typography>
            <Typography>{car.combination_mpg}mpg</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            borderTop: "1px solid black",
          }}
        >
          <Typography variant="h6">Other Features</Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              pl: 2,
              pr: 2,
              alignItems: "center",
            }}
          >
            <Typography variant="body1">Displacement</Typography>
            <Typography>{car.displacement * 1000}cc</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              pl: 2,
              pr: 2,
              alignItems: "center",
            }}
          >
            <Typography variant="body1">Drive</Typography>
            <Typography>{car.drive}</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              pl: 2,
              pr: 2,
              alignItems: "center",
            }}
          >
            <Typography variant="body1">Cylinders</Typography>
            <Typography>{car.cylinders}</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              pl: 2,
              pr: 2,
              alignItems: "center",
            }}
          >
            <Typography variant="body1">Transmission</Typography>
            <Typography>{car.transmission}</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              pl: 2,
              pr: 2,
              alignItems: "center",
            }}
          >
            <Typography variant="body1">Year Produced</Typography>
            <Typography>{car.year}</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              pl: 2,
              pr: 2,
              alignItems: "center",
            }}
          >
            <Typography variant="body1">Cost</Typography>
            <Typography>${price}</Typography>
          </Box>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"row"}
          mt={3}
          mb={4}
          // gap={2}
          alignSelf={"end"}
        >
          {isLoggedIn && (
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
          )}
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

export default CardDetail;
