import { Typography } from '@mui/material'
import React from 'react'

const ContactCard = ({iconUrl, text}) => {
  return (
      <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#130f2a",
          borderRadius: "0.65rem",
          border: "0.5rem solid #6751b9",
          padding: "1.5rem",
          marginBottom: "2rem",
      }}>
          <div style={{
              width: "4rem",
              height: "4rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "0.5rem",
              background: "#3d3072",
              marginBottom: "0.8rem",
          }}>
              <img src={iconUrl} alt={text} style={{
                  width: "2.8rem",
                  height: "auto",
                  objectFit: "contain",
              }} />
          </div>
          <Typography style={{
              fontSize: "0.9rem",
              fontWeight: 400,
          }}>{text }</Typography>
    </div>
  )
}

export default ContactCard