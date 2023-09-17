import React from "react";

const result = ({ score , total , reset}) => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "lightblue",
          height: "400px",
          width: "300px",
          borderRadius: "10px",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection:"column"
        }}
      >
        <h1>Your Score is {score}/{total} </h1>
        <button onClick={reset} style={{ backgroundColor:"black",borderRadius:"5px", padding:"4px", width:"120px", height:"60px", color:"white",cursor:"pointer" }}>Take quiz again </button>
      </div>
    </div>
  );
};

export default result;
