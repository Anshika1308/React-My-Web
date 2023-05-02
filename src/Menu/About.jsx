import React from "react";

import img from "../images/img2.svg"
import Common from "./Common";
import "../index.css";

const About = () => {
    return(
        <>
            <Common
            name="Welcome to About Page"
             imgsrc={img}
            visit="/contact"
            btname="Contact Us"
             />     
                      
        </>
    );
};

export default About;