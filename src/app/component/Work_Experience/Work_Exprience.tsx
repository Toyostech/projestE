
import React from "react";
import Card_experience from "./Card_experience/Card_experience";
import { WORK_EXPERIENCE } from "../utils/data";
import { dot } from "node:test/reporters";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/material/KeyboardArrowRight";

const Work_Exprience = () => {
  const theme = useTheme()
  const setttings = {
    dots: false,
    inFinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScrolll: 1,
        },
      },
    ],
  };

  return (
    <section
      style={{
        margin: "4rem 0",
        position: "relative",
      }}
    >
      <Typography variant="h2">work_experience</Typography>
      <div
        style={{
          fontSize: "1.5rem",
          fontWeight: 500,
          marginBottom: "3rem",
        }}
      >
        {WORK_EXPERIENCE.map((item) => (
          <Card_experience key={item.title} details={item} />
        ))}
      </div>
      <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
        <Paper
          square
          elevation={0}
          sx={{
            display: "flex",
            alignItems: "center",
            height: 50,
            pl: 2,
            bgcolor: "background.default",
          }}
        >
          <Typography>{steps[activeStep].label}</Typography>
        </Paper>
        <Box sx={{ height: 255, maxWidth: 400, width: "100%", p: 2 }}>
          {steps[activeStep].description}
        </Box>
        <MobileStepper
          variant="text"
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Box>
    </section>
  );
};

export default Work_Exprience;
