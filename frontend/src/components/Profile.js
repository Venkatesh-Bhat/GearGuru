import {
  Box,
  Typography,
  CircularProgress,
  Paper,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Button,
  Fab,
  TextField,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import PhoneIcon from "@mui/icons-material/Phone";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { authActions } from "../store";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Warning from "./Warning";

function Profile(props) {
  const [user, setUser] = useState(null);
  const [buy, setBuy] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editingAddress, setEditingAddress] = useState(false);
  const [newData, setNewData] = useState({
    address: "",
    phone: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //For Dialog Box
  const [open, setOpen] = useState(false);
  const handleDialogOpen = () => {
    setOpen(true);
  };
  const handleDialogClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    async function getBuy() {
      try {
        const res = await axios.get("http://localhost:8000/api/users/buy/all", {
          headers: {
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem("user")).accessToken
            }`,
          },
        });
        console.log(res.data);
        setBuy(res.data.bought);
        setUser(res.data.user);

        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    }
    getBuy();
  }, []);

  const handleDelete = async () => {
    try {
      await axios
        .delete("http://localhost:8000/api/users/del", {
          headers: {
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem("user")).accessToken
            }`,
          },
        })
        .then(() => dispatch(authActions.logout()))
        .then(() => navigate("/"));
    } catch (err) {
      console.log(err);
    }
  };

  const handleEditAddress = () => {
    setEditingAddress(true);
  };

  const handleCancelEdit = () => {
    setEditingAddress(false);
  };

  const handleUpdateAddress = async () => {
    console.log(newData);
    try {
      await axios.put(
        "http://localhost:8000/api/users/editMe",
        {
          address: newData.address,
          phone: newData.phone,
        },
        {
          headers: {
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem("user")).accessToken
            }`,
          },
        }
      );
      // Update user state or refresh data if necessary
      if (newData.phone.trim() !== "")
        setUser({ ...user, phone: newData.phone });
      if (newData.address.trim() !== "")
        setUser((prevUser) => ({
          ...prevUser,
          address: newData.address,
        }));
      setEditingAddress(false);
    } catch (err) {
      console.log(err);
    }
  };

  const renderItemsBought = (items) => {
    return Object.entries(items).map(([category, itemsArray]) => (
      <Box key={category} sx={{ mb: 2 }}>
        <Typography variant="subtitle1" gutterBottom>
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </Typography>
        {itemsArray.length > 0 ? (
          <List>
            {itemsArray.map((item, index) => (
              <ListItem key={index}>
                {item.model ? (
                  <ListItemText
                    primary={`${item.name} - ${item.model}`}
                    secondary={`Mileage: ${item.mileage}, Price: $${item.price}`}
                  />
                ) : (
                  <ListItemText
                    primary={`${item.name} - ${item.category}`}
                    secondary={`Price: $${item.price} / (${item.quantity} Qty)`}
                  />
                )}
              </ListItem>
            ))}
          </List>
        ) : (
          <Typography variant="body2">No items</Typography>
        )}
      </Box>
    ));
  };

  return (
    <Box mt={2} p={2} display="flex" justifyContent="center">
      {loading ? (
        <CircularProgress color="primary" size={60} />
      ) : (
        <Paper
          elevation={3}
          sx={{
            width: "80%",
            // maxWidth: 500,
            p: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            sx={{ bgcolor: "primary.main", width: 56, height: 56, mb: 2 }}
          >
            <AccountCircleIcon fontSize="large" />
          </Avatar>
          <Typography variant="h5" gutterBottom>
            {user && user.name}
          </Typography>
          <Divider sx={{ width: "100%", my: 2 }} />
          <List sx={{ width: "100%" }}>
            <ListItem>
              <ListItemIcon>
                <EmailIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Email" secondary={user && user.email} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <PhoneIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary={editingAddress ? "" : "Phone No."}
                secondary={
                  editingAddress ? (
                    <TextField
                      id="new-phone"
                      label="New Phone No."
                      variant="outlined"
                      value={newData.phone}
                      onChange={(e) =>
                        setNewData((prev) => ({
                          ...prev,
                          phone: e.target.value,
                        }))
                      }
                    />
                  ) : (
                    user && user.phone
                  )
                }
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <HomeIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary={editingAddress ? "" : "Address"}
                secondary={
                  editingAddress ? (
                    <TextField
                      id="new-address"
                      label="New Address"
                      variant="outlined"
                      value={newData.address}
                      onChange={(e) =>
                        setNewData((prev) => ({
                          ...prev,
                          address: e.target.value,
                        }))
                      }
                    />
                  ) : (
                    user && user.address
                  )
                }
              />
              {editingAddress ? (
                <Box display={"flex"} flexDirection={"row"} gap={1}>
                  <Button
                    color="primary"
                    variant="contained"
                    onClick={handleUpdateAddress}
                  >
                    Update
                  </Button>
                  <Button
                    color="error"
                    variant="contained"
                    onClick={handleCancelEdit}
                  >
                    Cancel
                  </Button>
                </Box>
              ) : (
                <Fab
                  color="warning"
                  aria-label="edit"
                  size="small"
                  onClick={handleEditAddress}
                >
                  <EditIcon />
                </Fab>
              )}
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ShoppingBasketIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="Items Bought"
                // secondary={buy.car.map((item) => item.name)}
              />
              {user && buy && renderItemsBought(buy)}
            </ListItem>
          </List>
          <Button color="error" variant="contained" onClick={handleDialogOpen}>
            Delete Account
          </Button>
          <Warning
            open={open}
            handleClose={handleDialogClose}
            handleRemove={handleDelete}
            title={"Delete account permanently?"}
            content={
              "Warning!! This action will permanently delete your account. Are you sure you want to proceed?"
            }
            itemId={""}
          />
        </Paper>
      )}
    </Box>
  );
}

export default Profile;
