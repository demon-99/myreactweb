import React from "react";
import web from "../src/images/s1.jpg";
import { NavLink } from "react-router-dom";
import "./index.css"

/*const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-12 mx-auto">
        <div className="card">
          <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
          <div className="card-body">
            <h5 className="card-title font-weight-bold">{props.title}</h5>
            <p className="card-text">
             
            </p>
            <a href={props.link} className="btn btn-primary">
              Check Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
};*/

function Card(props){
  return(
    <>
  <div className="cards">
    <div className="carditems">
      <img src={props.imgsrc} alt="myPic" className="card_img" />
      <div className="card_info">
        <span className="card_category">
           {props.title}
        </span>
        <h3 className="card_title"></h3>
        <a href={props.link} target="_blank">
          <button>Check now</button>
        </a>
      </div>
    </div>
  </div>
</>
  )
}

export default Card;
