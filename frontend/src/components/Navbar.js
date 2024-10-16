import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { Box, Tabs, Tab, Button, Menu, MenuItem } from "@mui/material";
import DirectionsCarFilledSharpIcon from "@mui/icons-material/DirectionsCarFilledSharp";
import BuildCircleSharpIcon from "@mui/icons-material/BuildCircleSharp";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store";

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

//Custom theme for active tabs
const theme = createTheme({
  components: {
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: "crimson", // replace 'desiredColor' with your color
        },
      },
    },
  },
});

export default function Navbar(props) {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const [value, setValue] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (index) => {
    setValue(index); // Change the active tab when a menu item is clicked
    handleClose(); // Close the dropdown menu
  };

  useEffect(() => {
    const pathToTabIndex = {
      "/": 0,
      "/shop/cars": 1,
      "/shop/parts": 1,
      "/shop/car/details": 1,
      "/shop/parts/details": 1,
      "/profile": 2,
      "/cart": 3,
    };
    if (location.pathname in pathToTabIndex) {
      setValue(pathToTabIndex[location.pathname]);
    } else setValue(null);
  }, [location.pathname]);

  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar
          sx={{
            background:
              "linear-gradient(90deg, rgba(237,50,4,1) 0%, rgba(255,154,0,1) 100%)",
            paddingTop: "8px",
            paddingBottom: "8px",
          }}
        >
          <Toolbar>
            <Box
              marginRight={"auto"}
              display={"flex"}
              flexDirection={"row"}
              alignItems="center"
              gap={1}
              onClick={() => navigate("/")}
              sx={{ ":hover": { cursor: "pointer" } }}
            >
              <img
                src={require("../assets/logo.png")}
                alt="logo"
                style={{ height: "3em" }}
              />
              <Typography variant="h6" component="div">
                GEARGURU
              </Typography>
            </Box>
            <ThemeProvider theme={theme}>
              <Box marginLeft={"auto"} mr={2}>
                <Tabs
                  value={value}
                  onChange={(e, val) => setValue(val)}
                  aria-label="basic tabs example"
                >
                  <Tab
                    label={
                      <Typography
                        variant="subtitle2"
                        color={value === 0 ? "crimson" : "#fff"}
                      >
                        Dashboard
                      </Typography>
                    }
                    LinkComponent={Link}
                    to="/"
                  />
                  {/* <Tab
                    label={
                      <Typography
                        variant="subtitle2"
                        color={value === 1 ? "crimson" : "#fff"}
                      >
                        Shop
                      </Typography>
                    }
                    LinkComponent={Link}
                    to="/shop"
                  /> */}
                  <Tab
                    label={
                      <Typography
                        variant="subtitle2"
                        color={value === 1 ? "crimson" : "#fff"}
                      >
                        Shop
                      </Typography>
                    }
                    aria-controls="shop-menu"
                    aria-haspopup="true"
                    onMouseOver={handleClick}
                  />
                  {isLoggedIn && (
                    <Tab
                      label={
                        <Typography
                          variant="subtitle2"
                          color={value === 2 ? "crimson" : "#fff"}
                        >
                          <AccountCircleIcon />
                        </Typography>
                      }
                      LinkComponent={Link}
                      to="/profile"
                    />
                  )}
                  {isLoggedIn && (
                    <Tab
                      label={
                        <Typography
                          variant="subtitle2"
                          color={value === 3 ? "crimson" : "#fff"}
                        >
                          <ShoppingCartIcon />
                        </Typography>
                      }
                      LinkComponent={Link}
                      to="/cart"
                    />
                  )}
                </Tabs>
                <Menu
                  id="shop-menu"
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  MenuListProps={{ onMouseLeave: handleClose }} // Close menu when mouse leaves
                  sx={{
                    p: 1,
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                  }}
                >
                  <MenuItem
                    onClick={() => handleMenuItemClick(1)}
                    component={Link}
                    to="/shop/cars"
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      gap: 1,
                    }}
                  >
                    <DirectionsCarFilledSharpIcon />
                    Cars
                  </MenuItem>
                  <MenuItem
                    onClick={() => handleMenuItemClick(1)}
                    component={Link}
                    to="/shop/parts"
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      gap: 1,
                    }}
                  >
                    <BuildCircleSharpIcon />
                    Parts
                  </MenuItem>
                </Menu>
              </Box>
            </ThemeProvider>
            <Box>
              {!isLoggedIn ? (
                <Button
                  variant="contained"
                  // href="/auth"
                  onClick={props.handleClick}
                  sx={{
                    backgroundColor: "#ed3204",
                    ":hover": { backgroundColor: "#ff9a00" },
                  }}
                >
                  Signin
                </Button>
              ) : (
                <Button
                  variant="contained"
                  // href="/auth"
                  onClick={() => {
                    dispatch(authActions.logout());
                    navigate("/");
                  }}
                  sx={{
                    backgroundColor: "#ed3204",
                    ":hover": { backgroundColor: "#ff9a00" },
                  }}
                >
                  Logout
                </Button>
              )}
            </Box>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  );
}
