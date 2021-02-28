import React from "react";
import web from "../src/images/naru.png";
import { NavLink } from "react-router-dom";
import Commom from "./Commom";

const About = () => {
  return (
    <>
      <Commom
        name="About "
        detail="Hey! I am Nikhil. I am a pre-final year undergraduate in Computer Science and Engineering Department at BIT Patna. I will be completing my degree in May 2022. I enjoy spending time over tough problems, especially in the field of data structures and algorithms. As a result, I have been quite active in doing Web development as well as in the Competitive Programming world. The former requires designing while the latter, fast thinking, and I find myself learning the best of both worlds."
        imgsrc={web}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};

export default About;
