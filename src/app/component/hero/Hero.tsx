"use client"
import { Typography } from "@mui/material";
import React from "react";
import { useIsMobile } from "../hooks/UseMobile";


const Hero = () => {
  const mobile = useIsMobile();
  return (
    <section
      className=""
      style={{
        display: "flex",
        flexDirection: mobile ? "column" : "row",

        alignItems: mobile ? "center" : "center",
        position: "relative",
        color: "white",

        borderWidth: 3,
        gap: 30,
      }}
    >
      <div
        style={{
          alignItems: mobile ? "center" : "",

          flex: 1,
          marginTop: 45,
        }}
      >
        <Typography
          variant="h2"
          style={{
            fontSize: "3.8rem",
            fontWeight: 600,
            lineHeight: "5rem",
            marginBottom: "1rem",
          }}
        >
          Building Digital Experience That Inspire
        </Typography>
        <Typography
          style={{
            width: "80%",
            fontSize: "1rem",
            fontWeight: 400,
            lineHeight: "2rem",
          }}
        >
          Passsionate Frontend Developer | Transforming Ideas into Seamless and
          Visually Stunning Web Solutions
        </Typography>
      </div>
      <div
        className="hi"
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem",
          marginBottom: "5rem",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            gap: 2,
          }}
        >
          <div
            className="ti"
            style={{
              width: "5rem",
              height: "5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              borderRadius: "0.65rem",
              border: "1.5px solid #6852ba",
            }}
          >
            <img
              src="./react.png"
              style={{
                width: "3rem",
                height: "auto",
                transition: "all 0.3s ease",
              }}
            />
          </div>
          <img
            src="./first.png"
            alt=""
            style={{
              width: "25rem",
              transition: "all 0.3s ease",
            }}
          />
        </div>
        <div
          style={{
            width: "5rem",
            height: "5rem",
            display: "flex",
            alignItems: "center",

            textAlign: "center",
            borderRadius: "0.65rem",
            // border: "1.5px solid #6852ba",
            gap: 50,
          }}
        >
          <div
            className="ti"
            style={{
              alignItems: "center",
              border: "2.5px solid #6852ba",
              borderRadius: "20px",
              padding: "0.5rem",
            }}
          >
            <img
              src="./html.png"
              style={{
                width: "3rem",
                height: "auto",
                transition: "all 0.3s ease",
              }}
            />
          </div>
          <div
            className="ti"
            style={{
              alignItems: "center",
              border: "2.5px solid #6852ba",
              borderRadius: "20px",
              padding: "0.5rem",
            }}
          >
            <img
              src=" ./css.png"
              alt=""
              style={{
                width: "3rem",
                height: "auto",
                transition: "all 0.3s ease",
              }}
            />
          </div>
          <div
            className="ti"
            style={{
              alignItems: "center",
              border: "2.5px solid #6852ba",
              borderRadius: "20px",
              padding: "0.5rem",
            }}
          >
            <img
              src=" ./js.png"
              alt=""
              style={{
                width: "3rem",
                height: "auto",
                transition: "all 0.3s ease",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
