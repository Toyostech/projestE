"use client"
import { Typography } from "@mui/material";
import React from "react";
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import { useTheme } from '@mui/material/styles';
// import MobileStepper from '@mui/material/MobileStepper';
// import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

const SkillsCardInfor = ({ heading, skills }) => {
  return (
    <div
      style={{
        minHeight: "23rem",
        borderRadius: "0.65rem",
        border: "1.5px solid #6751b9",
        background: "rgba(22, 17, 47, 0.398)",
        backdropFilter: "blur(1rem)",
      }}
    >
      <Typography
        variant="h6"
        style={{
          fontSize: "1.2rem",
          fontWeight: 600,
          padding: "0.8rem 2rem",
          background: "linear-gradient(180deg, #ac96fc 0, #7c5fe6 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          borderBottom: "1.5px solid #6751b9",
        }}
      >
        {heading}
      </Typography>
      <div
        style={{
          padding: "2rem",
        }}
      >
        {skills.map((item, index) => (
          <React.Fragment key={` skill_${index}`}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                style={{
                  fontSize: "1rem",
                  fontWeight: 500,
                }}
              >
                {item.skill}
              </Typography>
              <Typography style={{
                color: "#dd8cfa"
              }}>{item.percentage}</Typography>
            </div>
            <div
              className="spi"
              style={{
                width: "100%",
                height: "0.5rem",
                background: "#382e68",
                borderRadius: "0.5rem",
                margin: "1rem 0",
                overflow: "hidden",
              }}
            >
              <div
                className="sp"
                style={{
                  width: item.percentage,
              
                  height: "0.5rem",
                  background: "linear-gradient(90deg, #aa94fe -50%, #7d60e6 50%)",
                  borderRadius: "0.5rem",
                  transition: "all 0.5s ease-in-out"

                }}
              />
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SkillsCardInfor;
