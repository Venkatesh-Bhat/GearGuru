import {
  Box,
  Collapse,
  Fab,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import CheckIcon from "@mui/icons-material/Check";
import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";

import Parts from "../../assets/parts.jpg";
import Part2 from "../../assets/part2.jpg";
import { categorizeData, filteredData } from "../../API/SpareParts";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

function PartShop(props) {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const [cart, setCart] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const [open, setOpen] = useState(true);
  const handleClick = () => {
    setOpen(!open);
  };

  const [partName, setPartName] = useState(null);
  const [data, setData] = useState(null);
  const handleSelect = (name) => {
    setPartName(name);
    try {
      const partData = filteredData(name);
      setData(partData);
      setOpen(!open);
    } catch (err) {
      console.log("PartData initialization error: ", err);
    }
  };

  const handleCartItems = (item) => {
    const existingItemIndex = cart.findIndex((i) => i.name === item.name);
    if (existingItemIndex !== -1) {
      console.log("Item Quantity:" + item.quantity);
      // Item exists in cart, update its quantity
      if (item.quantity === 0) {
        console.log("Removing item from cart");
        const newCart = cart.filter((i) => i.name !== item.name);
        setCart([...newCart]);
      } else {
        const updatedCart = [...cart];
        updatedCart[existingItemIndex].quantity = item.quantity;
        updatedCart[existingItemIndex].price = item.price;
        setCart(updatedCart);
      }
    } else {
      // Item doesn't exist in cart, add it
      setCart((prevCart) => [...prevCart, item]);
    }
  };

  const sendRequest = async () => {
    try {
      await axios
        .post("http://localhost:8000/api/users/cart", cart, {
          headers: {
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem("user")).accessToken
            }`,
          },
        })
        .then((res) => {
          navigate("/cart");
        });
    } catch (err) {
      console.log("Error: " + err);
    }
  };

  const handleCartSubmit = () => {
    sendRequest();
  };

  return (
    <Box m={3} position={"relative"}>
      {partName && isLoggedIn && (
        <Fab
          variant="extended"
          color="warning"
          onClick={handleCartSubmit}
          sx={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
          }}
        >
          Add to cart
        </Fab>
      )}
      <List sx={{ border: "1px solid black" }}>
        <ListItemButton
          onClick={handleClick}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyItems: "left",
            alignItems: "start",
          }}
        >
          <ListItemText
            primary={partName || "Select Part Type"}
            sx={{ color: "#ffa900" }}
          />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Box
              display={"flex"}
              flexDirection={"row"}
              justifyContent="space-evenly"
              flexWrap={"wrap"}
              mb={4}
            >
              {categorizeData.map((name) => (
                <ListItemButton
                  sx={{ pl: 4 }}
                  key={name}
                  onClick={() => handleSelect(name)}
                >
                  {partName === name && (
                    <ListItemIcon
                      style={{ minWidth: "auto", marginRight: "8px" }}
                    >
                      <CheckIcon color="warning" />
                    </ListItemIcon>
                  )}
                  <ListItemText
                    primary={name}
                    sx={{ color: partName === name && "#ff9a00" }}
                  />
                </ListItemButton>
              ))}
            </Box>
          </List>
        </Collapse>
      </List>

      <Box
        display={"flex"}
        flexDirection={"row"}
        flexWrap={"wrap"}
        justifyContent={"space-evenly"}
        gap={4}
      >
        {data &&
          data.map((part, i) => (
            <ItemCard
              type="parts"
              item={part}
              key={part.id}
              img={i % 2 === 0 ? Parts : Part2}
              addItems={handleCartItems}
            />
          ))}
      </Box>
    </Box>
  );
}

export default PartShop;
