import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { Box, Button, CardActions } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useSelector } from "react-redux";

export default function ItemCard({ item, img, type, addItems }) {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const [curPrice] = React.useState(
    Math.floor(Math.random() * (5000 - 1000) + 1000)
  );

  const [quantity, setQuantity] = useState(0);
  const [checkItemRemoved, setRemoved] = useState(false);

  // const [cart, setCart] = React.useState(null);

  React.useEffect(() => {
    if (quantity > 0 || checkItemRemoved) {
      console.log("Removed: " + checkItemRemoved);
      console.log("Quantity: " + quantity);
      addItems({
        name: item.name,
        category: item.categories[0].category_name,
        quantity: quantity,
        price: Math.floor((curPrice / 15) * parseInt(quantity)),
      });
    }
  }, [quantity, checkItemRemoved]);

  const incrementQty = (item) => {
    setQuantity((qty) => qty + 1);
  };
  const decrementQty = (item) => {
    if (quantity > 1) setQuantity((qty) => qty - 1);
    else if (quantity === 1) {
      setQuantity(0);
      setRemoved(true);
    }
  };

  const navigate = useNavigate();
  const handleClick = () => {
    console.log("ItemCard: ", item);
    navigate(`/shop/${type}/details`, {
      state: { item, price: curPrice, img },
    });
  };

  if (type === "car") {
    return (
      <Card sx={{ maxWidth: 345 }} onClick={handleClick}>
        <CardHeader title={item.model} subheader={item.year} />
        <CardMedia component="img" height="194" image={img} alt="Car Images" />
        <CardContent>
          <Typography
            variant="caption"
            color="text.secondary"
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            gap={1}
          >
            Mileage:{" "}
            <Typography variant="subtitle2" color={"black"}>
              {" "}
              {item.combination_mpg}mpg
            </Typography>
          </Typography>
          <Typography
            variant="caption"
            color="text.secondary"
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            gap={1}
          >
            Fuel Type: {"  "}
            <Typography variant="subtitle2" color={"black"}>
              {" "}
              {item.fuel_type}
            </Typography>
          </Typography>
        </CardContent>
      </Card>
    );
  } else {
    return (
      <Card
        sx={{ maxWidth: 345 }}
        // onClick={handleClick}
      >
        <CardHeader
          title={item.name}
          subheader={`$${Math.floor(curPrice / 15)}`}
        />
        <CardMedia component="img" height="194" image={img} alt="Parts" />
        {isLoggedIn && (
          <CardActions sx={{ mt: "auto" }}>
            <Box
              sx={{
                ml: "auto",
                display: "flex",
                flexDirection: "row",
                gap: 1,
              }}
            >
              <Button
                variant="contained"
                size="small"
                color="inherit"
                onClick={() => decrementQty(item)}
              >
                <RemoveIcon />
              </Button>
              <Typography>{quantity}</Typography>
              <Button
                variant="contained"
                size="small"
                color="inherit"
                onClick={() => incrementQty(item)}
              >
                <AddIcon />
              </Button>
            </Box>
          </CardActions>
        )}
      </Card>
    );
  }
}
