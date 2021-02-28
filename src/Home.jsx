import React from "react";
import web from "../src/images/narut.png";
import { NavLink } from "react-router-dom";
import Commom from "./Commom";

const Home = () => {
  return (
    <>
      <Commom
        name="Get your website designed by"
        imgsrc={web}
        visit="/Projects"
        btname="My works"
      />
    </>
  );
};

export default Home;
