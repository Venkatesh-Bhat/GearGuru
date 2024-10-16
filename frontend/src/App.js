import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Auth from "./components/Auth";
import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Box } from "@mui/material";
import CardDetail from "./components/Shop/CarDetails";
// import { store } from "./store";
import { useDispatch } from "react-redux";
import { authActions } from "./store";
import axios from "axios";
import Cart from "./components/Cart";
import CarShop from "./components/Shop/CarShop";
import PartShop from "./components/Shop/PartShop";
import PartDetails from "./components/Shop/PartDetails";
import Profile from "./components/Profile";

function App() {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const refresh = async (userData) => {
      console.log("Inside Refresh");
      try {
        const res = await axios.post("http://localhost:8000/api/users/token", {
          token: userData.refreshToken,
        });
        localStorage.setItem(
          "user",
          JSON.stringify({
            ...userData,
            accessToken: res.data.accessToken,
            currentTime: new Date().getTime(),
          })
        );
        // return false;
        dispatch(authActions.login());
      } catch (err) {
        // isExpired = true;
        console.log("Token refresh failed:\n", err);
        dispatch(authActions.logout());
        // return true;
      }
    };
    const checkTokenIsExpired = () => {
      const userData = JSON.parse(localStorage.getItem("user"));
      if (userData) {
        const time =
          (new Date().getTime() - userData.currentTime) / (1000 * 60 * 60);
        // isExpired = time >= 24 && time >= 24 * 7;
        if (time >= 1) {
          console.log("Calling refresh");
          refresh(userData);
        } else {
          console.log("Calling Dispatch to login in checkTokenExipred");
          dispatch(authActions.login()); // Dispatch action to update Redux state
          // return false;
        }
      }
    };
    checkTokenIsExpired();
  }, [dispatch]);

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        background: "#f4f4f4",
      }}
    >
      <header>
        <Navbar handleClick={handleOpen} />
      </header>
      <main>
        <Auth open={open} handleClose={handleClose} />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/shop/cars" element={<CarShop />} />
          <Route path="/shop/car/details" element={<CardDetail />} />
          <Route path="/shop/parts" element={<PartShop />} />
          <Route path="/shop/parts/details" element={<PartDetails />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
      <footer style={{ marginTop: "auto" }}>
        <Footer />
      </footer>
    </Box>
  );
}

export default App;
