"use client";
import React from "react";
import "./skillscar.css";
import { useIsMobile } from "../hooks/UseMobile";

const SkillsCard = ({ title, iconUrl, isActive, onClick }) => {
  const mobile = useIsMobile()
 
  return (
    <div
      className={`skills_card ${isActive ? "active" : ""}`}
      onClick={() => onClick()}
    >
      <div
        className="skill_icon"
        style={{
          width: mobile ? "3.5rem" : "5rem",
          height: mobile ? "3.5rem" : "5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "white",
          borderRadius: "0.65rem",
          border: "1.5px solid #6852ba",
          position: "absolute",
          top: "-1rem",
          left: "-1rem",
        }}
      >
        <img
          src={iconUrl}
          alt={title}
          style={{
            color: "white",
            width: mobile ? "3rem" : "4rem",
            height: "auto",
            objectFit: "contain",
          }}
        />
      </div>
      <span
        style={{
          fontSize: mobile ? "0.9rem" : "1.3rem",
          fontWeight: 500,
        }}
      >
        {title}
      </span>
    </div>
  );
};

export default SkillsCard;
