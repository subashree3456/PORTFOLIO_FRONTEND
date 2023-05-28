import React from 'react'
import "./About.css";
import { Typography } from "@mui/material";
import proff from "../Img/proff.jpg";

const About = ({ about }) => {
  return (
    <div className="about">
<div className="aboutContainer"> 
<Typography>A Full stack developer Programmmer</Typography>
</div>
<div className="aboutContainer2">    
    <div>
<img src={proff} alt="Subi" className="aboutAvatar"/>
<Typography 
variant="h4"  
style={{ margin: "1vmax 0", color: "black" }}>
   SUBA SHREE
    </Typography>

<Typography>
fULL STACK DEVELOPER
    </Typography>

<Typography style={{ margin: "1vmax 0" , textAlign: "center" }} >Full Stack Developers are responsible for designing and developing websites and platforms.</Typography>
    </div>

    <div> 

<Typography
style={{
    wordSpacing: "5px",
    lineHeight: "50px",
    letterSpacing: "5px",
    textAlign: "right",
  }}
> 
To develop my skills and my innovation and to work with others to learn different ideas. To build a successful and good profile
career in the field of Software Development thereby mutually benefitting the organization and myself
</Typography>
    </div>    
     </div>
    </div>
  );
};

export default About