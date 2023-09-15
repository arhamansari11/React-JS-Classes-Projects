import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        marginTop: "30px",
      }}
    >
      <Link to="/about">
        <button style={{ cursor: "pointer" , background : "black" , border : "none" , color : "white" , width : "100px" , height : "40px"}}>About</button>
      </Link>

      <Link to="/footer">
        <button style={{ cursor: "pointer" , background : "black" , border : "none" , color : "white" , width : "100px" , height : "40px"}}>Footer</button>
      </Link>

      <Link to="/contact">
        <button style={{ cursor: "pointer" , background : "black" , border : "none" , color : "white" , width : "100px" , height : "40px"}}>Contact</button>
      </Link>
    </div>
  );
};

export default Home;
