import { Typography } from "@mui/material";
import React from "react";
import ContactCard from "./ContactCard/ContactCard";
import ContactForm from "./Contactform/ContactForm";
import { useIsMobile } from "../hooks/UseMobile";

const Contact_me = () => {
  cons


  return (
    <section
      style={{
        margin: "4rem 0",
        position: "relative",
      }}
    >
      <Typography
        style={{
          fontSize: "1.5rem",
          fontWeight: "600",
          marginBottom: "3rem",
        }}
      >
        Contact me
      </Typography>
      <div
        style={{
          display: "flex",
          gap: "2rem",
        
        }}
      >
        <div
          style={{
            flex: 1,
          }}
        >
          <ContactCard iconUrl="./game-4.png" text="toyoimnnn" />
          <ContactCard iconUrl="./game-2.png" text="toyoimnnn" />
        </div>
        <div
          style={{
            flex: 1,
          }}
        >
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact_me;
