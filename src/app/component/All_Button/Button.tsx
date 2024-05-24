import React from "react";
// import { ButtonProps } from "@mui/material";
type ButtonProps = {
  type: "button" | "sumbit";
  title: string;
  variant: "green";
};

const Button = ({ type, title, variant }: ButtonProps) => {
  return (
    <button
      type="button"
      className={`flex-centner gap-3 rounded-full border ${variant}`}
      style={{
        gap: 20,
        borderWidth: "1px",
        borderRadius: "10px",
        padding: 10,
      }}
    >
      <label
        className="bold-16 whitespace-nowrap"
        style={{
          fontWeight: "bold",
          whiteSpace: "nowrap",
        }}
      >
        {title}
      </label>
    </button>
  );
};

export default Button;
