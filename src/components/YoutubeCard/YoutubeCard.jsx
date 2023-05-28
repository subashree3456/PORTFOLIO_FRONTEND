import React from 'react'
import "./YoutubeCard.css";
import { Button, Typography } from "@mui/material";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";

import { deleteYoutube, getUser } from "../../actions/user";

import prof1 from "../Img/proff.jpg"



const YoutubeCard = ({
    url = "https://youtube.com/6packprogrammer",
    title = "Title Here",
    image,
    isAdmin = false,
    id,
  }) => {


    const dispatch = useDispatch();

    const deleteHandler = async (id) => {
      await dispatch(deleteYoutube(id));
      dispatch(getUser());
    };


  return (
    <div className="youtubeCard">        
        <a href="https://github.com/subashree3456/" target="blank">
        <img src={prof1} alt="Video" />
        <Typography>MERN </Typography>
        </a>


        {isAdmin && (
        <Button
          style={{
            margin: "auto",
            display: "block",
            color: "rgba(40,40,40,0.7)",
          }}
          onClick={() => deleteHandler(id)}
        >
          <FaTrash />
        </Button>
      )}



        </div>
  );
};

export default YoutubeCard