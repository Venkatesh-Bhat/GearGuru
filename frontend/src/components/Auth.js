import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  Modal,
  OutlinedInput,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import React from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import { authActions } from "../store";
import { useDispatch } from "react-redux";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  // bgcolor: "background.paper",
  // bgcolor: "rgba(246, 100, 2, 0.9)",
  bgcolor: "black",
  border: "1px solid #ff9a00",
  boxShadow: 24,
  p: 4,
};

const theme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: "whitesmoke",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "white",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#ff9a00",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#ff9a00", // Border color when hovered
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "whitesmoke",
          "&.Mui-focused": {
            color: "#ff9a00",
          },
        },
      },
    },
  },
});

const tabTheme = createTheme({
  components: {
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: "#ff9a00", // replace 'desiredColor' with your color
        },
      },
    },
  },
});

function Auth({ open, handleClose }) {
  const dispatch = useDispatch();

  //User Details
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  //Notify error
  const [error, setError] = React.useState(null);

  //Tab value
  const [value, setValue] = React.useState(0);
  const handleTabChange = (e, val) => {
    setValue(val);
    setError(null);
    setUser({
      email: "",
      password: "",
    });
  };

  //Password fields
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  //Confirm Password Fields
  const [showConfirm, setShowConfirm] = React.useState(false);
  const handleClickShowConfirm = () => setShowConfirm((show) => !show);
  const handleMouseDownConfirm = (event) => {
    event.preventDefault();
  };

  const sendRequest = async (type) => {
    try {
      console.log(user);
      // const res = await axios.post(`http://localhost:8000/api/users/${type}`, {
      await axios
        .post(`http://localhost:8000/api/users/${type}`, {
          ...user,
        })
        .then((data) => localStorage.setItem("user", JSON.stringify(data.data)))
        .then(() => dispatch(authActions.login()))
        .then((data) => console.log(data))
        .then(() => handleClose())
        .then(() =>
          setUser({
            email: "",
            password: "",
          })
        );
      // return res.data;
    } catch (err) {
      if (err.response.status === 400 || err.response.status === 401) {
        setError(err.response.data.message);
      } else {
        setError("An error occurred. Please try again later.");
      }
      console.log(err);
      return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    if (value === 0) {
      sendRequest("login");
      // .then((data) => localStorage.setItem("user", JSON.stringify(data)))
      // .then(() => dispatch(authActions.login()))
      // .then((data) => console.log(data))
      // .then(() => handleClose());
    } else if (value === 1) {
      if (user.password === user.confirmPass) {
        sendRequest("signup");
        // .then((data) => localStorage.setItem("user", JSON.stringify(data)))
        // .then(() => dispatch(authActions.login()))
        // .then((data) => console.log(data))
        // .then(() => handleClose());
      } else {
        setError("Passwords do not match!");
      }
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <form onSubmit={handleSubmit}>
        <Box
          sx={style}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={2}
          color={"whitesmoke"}
        >
          <ThemeProvider theme={tabTheme}>
            <Box>
              <Tabs
                value={value}
                onChange={handleTabChange}
                aria-label="basic tabs example"
              >
                <Tab
                  label={
                    <Typography
                      variant="subtitle2"
                      color={value === 0 ? "#ff9a00" : "#fff"}
                    >
                      Login
                    </Typography>
                  }
                />
                <Tab
                  label={
                    <Typography
                      variant="subtitle2"
                      color={value === 1 ? "#ff9a00" : "#fff"}
                    >
                      Signup
                    </Typography>
                  }
                />
              </Tabs>
            </Box>
          </ThemeProvider>

          {value === 0 ? (
            <ThemeProvider theme={theme}>
              {/* Email */}
              <TextField
                // id="outlined-basic"
                required={true}
                name="email"
                value={user.email}
                onChange={handleInputChange}
                label="Email"
                type="email"
                variant="outlined"
                sx={{ width: "100%" }}
              />
              {/* Password */}
              <FormControl
                sx={{
                  width: "100%",
                }}
                variant="outlined"
                required={true}
              >
                <InputLabel
                  htmlFor="outlined-adornment-password"
                  sx={{ color: "whitesmoke" }}
                >
                  Password
                </InputLabel>
                <OutlinedInput
                  name="password"
                  value={user.password}
                  onChange={handleInputChange}
                  // id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  inputProps={{
                    style: {
                      color: "whitesmoke",
                    },
                  }}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? (
                          <VisibilityOff sx={{ color: "whitesmoke" }} />
                        ) : (
                          <Visibility sx={{ color: "whitesmoke" }} />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
            </ThemeProvider>
          ) : (
            <ThemeProvider theme={theme}>
              <Box
                display={"flex"}
                flexDirection={"row"}
                justifyContent={"space-between"}
                gap={2}
              >
                {/* Name */}
                <TextField
                  // id="outlined-basic"
                  required={true}
                  label="Name"
                  name="name"
                  value={user.name || ""}
                  onChange={handleInputChange}
                  variant="outlined"
                  sx={{ width: "100%" }}
                />
                {/* Phone No. */}
                <TextField
                  // id="outlined-basic"
                  required={true}
                  label="Phone No."
                  name="phone"
                  value={user.phone || ""}
                  onChange={handleInputChange}
                  variant="outlined"
                  sx={{ width: "100%" }}
                />
              </Box>
              {/* Address */}
              <TextField
                // id="outlined-multiline-static"
                required={true}
                label="Address"
                name="address"
                value={user.address || ""}
                onChange={handleInputChange}
                multiline
                rows={4}
                sx={{ width: "100%" }}
              />
              {/* Email */}
              <TextField
                // id="outlined-basic"
                required={true}
                label="Email"
                name="email"
                type="email"
                value={user.email}
                onChange={handleInputChange}
                variant="outlined"
                sx={{ width: "100%" }}
              />
              {/* Password */}
              <FormControl
                sx={{
                  width: "100%",
                }}
                variant="outlined"
                required={true}
              >
                <InputLabel
                  htmlFor="outlined-adornment-password"
                  sx={{ color: "whitesmoke" }}
                >
                  Password
                </InputLabel>
                <OutlinedInput
                  name="password"
                  value={user.password}
                  onChange={handleInputChange}
                  // id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? (
                          <VisibilityOff sx={{ color: "whitesmoke" }} />
                        ) : (
                          <Visibility sx={{ color: "whitesmoke" }} />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
              {/* Confirm Password */}
              <FormControl
                sx={{
                  width: "100%",
                }}
                variant="outlined"
                required={true}
              >
                <InputLabel
                  htmlFor="outlined-adornment-password"
                  sx={{ color: "whitesmoke" }}
                >
                  Confirm Password
                </InputLabel>
                <OutlinedInput
                  // id="outlined-adornment-password"
                  name="confirmPass"
                  value={user.confirmPass || ""}
                  onChange={handleInputChange}
                  type={showConfirm ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowConfirm}
                        onMouseDown={handleMouseDownConfirm}
                        edge="end"
                      >
                        {showConfirm ? (
                          <VisibilityOff sx={{ color: "whitesmoke" }} />
                        ) : (
                          <Visibility sx={{ color: "whitesmoke" }} />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Confirm Password"
                />
              </FormControl>
            </ThemeProvider>
          )}
          {error && (
            <Typography variant="body2" color="error">
              {error}
            </Typography>
          )}
          <Button
            type="submit"
            variant="contained"
            sx={{ background: "#ed3204", ":hover": { background: "#ff9a00" } }}
          >
            Submit
          </Button>
        </Box>
      </form>
    </Modal>
  );
}

export default Auth;
