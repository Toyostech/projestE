import React from 'react'
import { useIsMobile } from '../../hooks/UseMobile';


const ContactForm = () => {
  const mobile = useIsMobile()
  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gridGap: "1.5rem",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gridGap: "1.5rem",
          }}
        >
          <input
            type="text"
            name="firstname"
            placeholder="FirstName"
            required
            style={{
              flex: "1",
              width: "100%",
              fontSize: "0.9rem",
              color: "#fff",
              background: "#130f2a",
              borderRadius: "0.6rem",
              border: "1.5px solid #6751b9",
              padding: mobile ? "0.7rem" :  "1rem",
            }}
          />
          <input
            type="text"
            name="LastName"
            placeholder="LastNAme"
            required
            style={{
              flex: "1",
              width: "100%",
              fontSize: "0.9rem",
              color: "#fff",
              background: "#130f2a",
              borderRadius: "0.6rem",
              border: "1.5px solid #6751b9",
              padding: "1rem",
            }}
          />
        </div>

        <input
          type="email"
          name="email"
          placeholder='Enter mail'
          style={{
            flex: "1",
            width: "95.5%",
            fontSize: "0.9rem",
            color: "#fff",
            background: "#130f2a",
            borderRadius: "0.6rem",
            border: "1.5px solid #6751b9",
            padding: "1rem",
          }}
        />
        <textarea
          type="text"
          name="message"
          placeholder='Comment'
          style={{
            flex: 1,
            width: "95.5%",
            fontSize: "0.9rem",
            color: "#fff",
            background: "#130f2a",
            borderRadius: "0.6rem",
            border: "1.5px solid #6751b9",
            padding: "1rem",
          }}
        ></textarea>
        <button style={{
          fontSize: "1rem",
          fontWeight: 500,
          color: "white",
          border: "1.5px solid #a892fe",
          borderRadius: "0.6rem",
          background: "linear-gradient(90deg, #a892fe 0, #8064e8 100%)",
          padding: "0.7rem",
          transition: "all 0.3s ease",
          cursor: "pointer",
        }}>SEND</button>
      </form>
    </div>
  );
}

export default ContactForm