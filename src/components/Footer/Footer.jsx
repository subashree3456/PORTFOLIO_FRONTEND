import React from 'react'
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./Footer.css";
import { BsGithub, BsYoutube, BsInstagram, BsLinkedin } from "react-icons/bs";


const Footer = () => {
  return (
    <div className="footer">        
      <div>
      <Typography variant="h5">About Me</Typography>
      <Typography>
          Hey, my name is Suba Shree. I am a Full-Stack Developer and learning many 
          tutorial videos for this FSD on Youtube  from <b> all youtube channels </b>
        </Typography>
        <Link to="/contact" className="footerContactBtn">
          <Typography>Contact Us</Typography>
        </Link>
        </div>   



     <div>        
     <Typography variant="h6">Social Media</Typography>
     <a href="https://github.com/subashree3456/" target="black">
          <BsGithub />
        </a>
        <a href="https://youtube.com/fullstackdeveloper/" target="black">
          <BsYoutube />
        </a>

        <a href="https://instagram.com/subashree/" target="black">
          <BsInstagram />
        </a>
        <a href="https://www.linkedin.com/in/subashree/" target="black">
          <BsLinkedin />
        </a>

        </div>   
        </div>
  );
};

export default Footer