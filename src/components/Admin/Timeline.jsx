import React, { useState, useEffect } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { addTimeline, deleteTimeline, getUser } from "../../actions/user";
import { MdKeyboardBackspace } from "react-icons/md";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";


const Timeline = () => {

    const { message, error, loading } = useSelector((state) => state.update);
    const { message: loginMessage } = useSelector((state) => state.login);
    const { user } = useSelector((state) => state.user);

    
    const dispatch = useDispatch();
    const alert = useAlert();


const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
   
  const submitHandler = async (e) => {
    e.preventDefault();
   await  dispatch(addTimeline(title, description, date));
     dispatch(getUser());
  };

  const deleteHandler = async(id) => {
 await dispatch(deleteTimeline(id));
 dispatch(getUser());

    
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch({ type: "CLEAR_ERRORS" });
    }
    if (message) {
      alert.success(message);
      dispatch({ type: "CLEAR_MESSAGE" });
    }    

    if (loginMessage) {
      alert.success(loginMessage);
      dispatch({ type: "CLEAR_MESSAGE" });
    }


  }, [alert, error, message, dispatch, loginMessage]);

  return (
    <div className="adminPanel">
    <div className="adminPanelContainer">
      <Typography variant="h4">
        <p>A</p>
        <p>D</p>
        <p>M</p>
        <p>I</p>
        <p style={{ marginRight: "1vmax" }}>N</p>

        <p>P</p>
        <p>A</p>
        <p>N</p>
        <p>E</p>
        <p>L</p>
      </Typography>

      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="adminPanelInputs"
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="adminPanelInputs"
        />
        <input
          type="date"
          placeholder="Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="adminPanelInputs"
        />

        <Link to="/account">
          BACK <MdKeyboardBackspace />
        </Link>

        <Button type="submit" variant="contained" disabled={loading}>
          Add
        </Button>
      </form>

      <div className="adminPanelYoutubeVideos">
        {user &&
          user.timeline &&
          user.timeline.map((item) => (
            <div className="youtubeCard" key="12">
              <Typography variant="h6">FSD</Typography>
              <Typography variant="body1" style={{ letterSpacing: "2px" }}>
              To develop my skills and my innovation and to work with others to learn different ideas. To build a successful and good profile
                career in the field of Software Development thereby mutually benefitting the organization and myself
              </Typography>
              <Typography variant="body1" style={{ fontWeight: 600 }}>
                2023-05-27
              </Typography>

              <Button
                style={{
                  margin: "auto",
                  display: "block",
                  color: "rgba(40,40,40,0.7)",
                }}
                onClick={() => deleteHandler(item._id)}
              >
                <FaTrash />
              </Button>
            </div>
          ))}
      </div>
    </div>
  </div>
  );
};

export default Timeline
