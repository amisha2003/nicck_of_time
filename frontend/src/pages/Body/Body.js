import React from "react";
import classes from "./Body.module.css";
import mainImage from "./img/videoon.mp4";
import { NavLink } from "react-router-dom";

function Body(props) {
  console.log(props.art);
  return (
    <div className={classes.mainBody}>
      <div className={classes.leftBody}>
        <div className={classes.lefttop}>
          <h1 ><bold>Welcome to Nick Of Time</bold></h1>
        </div>
        <div className={classes.middle}>
          <p>
              
          </p>
        </div >
        <div className={classes.leftbottom}>
          <NavLink to="/groups" className={classes.button10}>
            View Groups
          </NavLink>
          <NavLink to="/tests" className={classes.button10}>
           View Tests
          </NavLink>
        </div>
      </div>
      <div className={classes.rightBody}>
         <video loop autoPlay className={classes.frontimg} src={mainImage}  alt="fireSpot" />
         {/* <div>
       
      <video loop autoPlay>
        <source
          src="./"
          //type="video/mp4"
        />
       
      </video>
    </div> */}
      </div>
    </div>
  );
}

export default Body;
