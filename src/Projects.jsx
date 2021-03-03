import React from "react";
import Sdata from "./Sdata";
import Card from "./Card";
import "./index.css"

const Projects = () => {
  return (
    <>
      <div className="heading_style">
        <h1 className="text-center"> Projects </h1>
      </div>
      
              {Sdata.map((val, ind) => {
                return <Card key={ind} imgsrc={val.imgsrc} title={val.title} link={val.link} />;
              })}
            
    </>
  );
};

export default Projects;
