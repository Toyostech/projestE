"use client";
import { Button, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import { Nav_Link } from "../constant";
import "./MobileNav.css";

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div
        className={`mobile_menu ${isOpen ? "active " : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile_menu_container">
          <Typography
            style={{
              width: "12rem",
              height: "auto",
              fontWeight: "bold",
            }}
          >
            TOYOSTECH
          </Typography>
          <ul
            style={{
              display: "flex",

              alignItems: "center",
              gap: "2.5rem",
              listStyle: "none",
            }}
          >
            {Nav_Link.map((link) => (
              <li
                style={{
                  margin: "0 1.5rem",
                }}
              >
                <Link
                  href={link.href}
                  key={link.key}
                  style={{
                    textDecoration: "none",
                    fontSize: "1.5rem",
                    fontWeight: 900,
                    color: "red",
                    position: "relative",
                    cursor: "pointer",
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <Button variant="contained">Hire me</Button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
