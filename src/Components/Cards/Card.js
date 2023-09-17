import React from "react";
import "./Card.css";
import "./Container.css";
import { useState } from "react";
function Card({ data, handleCardClick,count }) {
  

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "40px",
        flexDirection: "column",
      }}
    >
      <h1>{data[count].question}</h1>
      {data[count].options.map((opt) => {
        return (
          <>
            <div
              style={{
                color: "white",
                cursor: "pointer",
                padding: "5px",
                backgroundColor: "black",
                borderRadius: "5px",
                width: "200px",
                textAlign:"center"
              }}
              onClick={() => {
                handleCardClick(opt);
                
              }}
            >
              <h3>{opt.text}</h3>
            </div>
          </>
        );
      })}
     
    </div>
  );
}
export default Card;
