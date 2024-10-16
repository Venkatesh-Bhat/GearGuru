import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  CardActionArea,
  CardActions,
} from "@mui/material";
import React from "react";
import SlideShow from "./SlideShow";

const Dashboard = () => {
  return (
    <Box>
      <SlideShow />
      <Box mt={8}>
        <Typography variant="h4" textAlign={"center"} color={"tomato"}>
          Exclusive Partners
        </Typography>
        <Box
          mt={6}
          sx={{
            display: "flex",
            flexDirection: "row",
            alignSelf: "center",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={require("../assets/f1.jpg")}
                alt="f1"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Formula 1
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <q>Aerodynamics are for people who can't build engines.</q>
                </Typography>
                <Typography textAlign={"right"} variant="subtitle2">
                  - Enzo Ferrari
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Do something
              </Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={require("../assets/pagani.png")}
                alt="pagani"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Pagani
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <q>I want to build cars that people will remember forever.</q>
                </Typography>
                <Typography textAlign={"right"} variant="subtitle2">
                  - Horacio Pagani
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Do something
              </Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={require("../assets/lamborghini.webp")}
                alt="lambo"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  color={""}
                >
                  Lamborghini
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <q>
                    I've always thought that my competitors made a mistake in
                    trying to go faster than we did.
                  </q>
                </Typography>
                <Typography textAlign={"right"} variant="subtitle2">
                  - Ferruccio Lamborghini
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Do something
              </Button>
            </CardActions>
          </Card>
        </Box>
      </Box>
      <Box
        mt={8}
        display="flex"
        justifyContent="center"
        padding={4}
        sx={{
          backgroundColor: "rgba(255, 154, 0, 0.6)",
          marginLeft: "3rem",
          marginRight: "3rem",
        }}
      >
        <Typography variant="h5" textAlign={"center"} color={"whitesmoke"}>
          Where automotive dreams meet reality. From purchasing your dream ride
          to sourcing the perfect spare parts and ensuring top-notch servicing,
          we're your one-stop destination for all things automotive.
        </Typography>
      </Box>
    </Box>
  );
};

export default Dashboard;
