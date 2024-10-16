import { Box, Button, Link, Typography } from "@mui/material";
import React from "react";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import XIcon from "@mui/icons-material/X";
import CallIcon from "@mui/icons-material/Call";
import HouseIcon from "@mui/icons-material/House";
import MailIcon from "@mui/icons-material/Mail";

function Footer() {
  return (
    <Box
      mt={8}
      p={4}
      sx={{
        background: "rgba(246, 100, 2, 97)",
      }}
      display={"flex"}
      flexDirection={"row"}
    >
      <Box>
        <Typography variant="h5" color={"HighlightText"}>
          Connect with us
        </Typography>
        <Box display="flex" flexDirection={"row"} gap={3} mt={2}>
          <Link href="" underline="none">
            <FacebookTwoToneIcon fontSize="large" />
          </Link>
          <Link href="#" underline="none">
            <InstagramIcon fontSize="large" color="error" />
          </Link>
          <Link href="#" underline="none">
            <YouTubeIcon fontSize="large" sx={{ color: "red" }} />
          </Link>
          <Link href="#" underline="none">
            <XIcon fontSize="large" sx={{ color: "black" }} />
          </Link>
        </Box>
        <Button variant="contained" sx={{ mt: 4, backgroundColor: "red" }}>
          Give Feedback
        </Button>
      </Box>
      <Box
        ml={"auto"}
        width={"45%"}
        display={"flex"}
        flexDirection={"column"}
        gap={2}
      >
        <Typography variant="h3" color={"HighlightText"} fontWeight={"bold"}>
          Need our support?
        </Typography>
        <Typography
          variant="h6"
          color={"HighlightText"}
          display={"flex"}
          flexDirection={"row"}
          justifyItems={"center"}
          alignItems={"center"}
          gap={1}
        >
          <CallIcon sx={{ color: "crimson" }} /> +919087654321
        </Typography>
        <Typography
          variant="h6"
          color={"HighlightText"}
          display={"flex"}
          flexDirection={"row"}
          justifyItems={"center"}
          gap={1}
          width={"75%"}
        >
          <HouseIcon sx={{ color: "crimson" }} />
          77/azy Brooklyn Street, Sam Witwicky Towers, New York City. USA
        </Typography>
        <Typography
          variant="h6"
          color={"HighlightText"}
          display={"flex"}
          flexDirection={"row"}
          justifyItems={"center"}
          alignItems={"center"}
          gap={1}
        >
          <MailIcon sx={{ color: "crimson" }} />
          gearguru@gmail.com
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
