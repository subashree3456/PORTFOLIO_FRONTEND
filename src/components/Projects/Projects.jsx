import React from 'react'
import "./Projects.css"
import { AiOutlineProject } from "react-icons/ai";
import { Button, Typography } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { FaRegSmileWink } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteProject, getUser } from "../../actions/user";
import img8 from '../Img/proff.jpg';

export const ProjectCard = ({
    url,
    projectImage,
    projectTitle,
    description,
    technologies,
    isAdmin = false,
    id,
  })=>{


    const dispatch = useDispatch();

    const deleteHandler = async (id) => {
      await dispatch(deleteProject(id));
      dispatch(getUser());
    };


    return (
        <>
        <a href="https://github.com/subashree3456/" className="projectCard"  target="black">
            
            <div>
            <img src={img8} alt="Project" />
            <Typography variant="h5">FSD</Typography>
            </div>
            <div>
            <Typography variant="h4"> About Project</Typography>
          <Typography>To develop my skills and my innovation and to work with others to learn different ideas. To build a successful and good profile
career in the field of Software Development thereby mutually benefitting the organization and myself</Typography>
          <Typography variant="h6">Tech Stack: MONGO DB , SQL ,REACT, NODE</Typography>
            </div>            
             </a>

             {isAdmin && (
        <Button style={{ color: "rgba(40,40,40,0.7)" }}   onClick={() => deleteHandler(id)}
        >
          <Delete />
        </Button>
      )}

        </>
    );
};




const Projects = ({ projects }) => {
   

  return (
    <div className="projects">        
        <Typography variant="h3">
        Projects <AiOutlineProject />
      </Typography>
 
      <div className="projectsWrapper">
{projects.map((item)=>(
    <ProjectCard    
    />
))}
        </div> 


        <Typography variant="h3" style={{ font: "100 1.2rem 'Ubuntu Mono'" }}>
        All The Projects Shown Above Are Made By Me <FaRegSmileWink />
      </Typography>
        </div>
  );
};

export default Projects
