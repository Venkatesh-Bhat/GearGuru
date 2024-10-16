import {
  Box,
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import CheckIcon from "@mui/icons-material/Check";
import React, { useState } from "react";
import { MakeNames, searchCars } from "../../API/Car";
import ItemCard from "./ItemCard";

import KaChow from "../../assets/ka-chow.jpg";
import Mater from "../../assets/Mater.png";

function CarShop(props) {
  const [open, setOpen] = useState(true);
  const handleClick = () => {
    setOpen(!open);
  };

  const [carName, setCarName] = useState(null);
  const handleSelect = async (name) => {
    setCarName(name);
    try {
      const carData = await searchCars(name);
      setData(
        carData.filter((item, index, array) => {
          return array.findIndex((obj) => obj.model === item.model) === index;
        })
      );
      setOpen(!open);
    } catch (err) {
      console.log("CarData fetch error: ", err);
    }
  };

  const [data, setData] = useState(null);

  return (
    <Box m={3}>
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
            primary={carName || "Search Cars"}
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
              {MakeNames.map((name) => (
                <ListItemButton
                  sx={{ pl: 4 }}
                  key={name}
                  onClick={() => handleSelect(name)}
                >
                  {carName === name && (
                    <ListItemIcon
                      style={{ minWidth: "auto", marginRight: "8px" }}
                    >
                      <CheckIcon color="warning" />
                    </ListItemIcon>
                  )}
                  <ListItemText
                    primary={name}
                    sx={{ color: carName === name && "#ff9a00" }}
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
        mt={4}
      >
        {data &&
          data.map((car, i) => (
            <ItemCard
              type="car"
              item={car}
              key={car.model}
              img={i % 2 === 0 ? KaChow : Mater}
            />
          ))}
      </Box>
    </Box>
  );
}

export default CarShop;
