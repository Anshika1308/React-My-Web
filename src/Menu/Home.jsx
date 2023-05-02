import React from "react";
import img from "../images/img1.svg";
import Common from "./Common";
//import "./index.css";

const Home = () => {
    return(
        <>
           <Common
            name="Grow Your business with "
            imgsrc={img}
            visit="/contact"
            btname="Get Started"
             />     
                     
                     
            
        </>
    );
};

export default Home;