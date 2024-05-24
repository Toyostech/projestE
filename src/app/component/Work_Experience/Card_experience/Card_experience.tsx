import { Typography } from '@mui/material'
import React from 'react'

const Card_experience = ({details}) => {
  return (
    <div style={{
      background: "#130f2a",
      borderRadius: "0.65",
      border: "1.5px solid #6751b9",
      padding: "1.5rem",
      margin: "0 1rem",
    }}>
      <Typography variant="h6" style={{
        fontSize: "1.05rem",
        fontWeight: 400,
        marginBottom: "0.7rem"
      }}>{details.title}</Typography>
      <div style={{
        display: "inline-block",
        fontSize: "1.07rem",
        fontWeight: 400,
        background: "rgba(103, 81, 185, 0.5 )",
        padding: "10px",
        borderRadius: "0.4rem 0.6rem",
        marginBottom: "1.3rem"
        
      }}>{details.date}</div>
      <ul>
        {details.responsibilitties.map((item) => (
          <li key={item} style={{
            listStyle: "none",
            fontSize: "1rem",
            fontWeight: 400,
            marginBottom: "0.5rem",
            position: "relative",

          }} >{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Card_experience