import React from 'react'
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Event } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

const TimeLine = ({ timelines = [] }) => {
  return (
    <div>       
       <Timeline position="alternate">
{
    timelines.map((item,index)=>(

        <TimelineItem key={index}>
 <TimelineOppositeContent
 sx={{ m: "auto 0" }}
 align="right"
 variant="body2"
 color="text.secondary" 
 >
2023-05-27
 </TimelineOppositeContent>

 <TimelineSeparator>
 <TimelineConnector />
 <TimelineDot>

 <Event />
 </TimelineDot>
 <TimelineConnector />
 </TimelineSeparator>


 <TimelineContent  sx={{ py: "12px", px: 2 }}>
 <Typography variant="h6">FSD</Typography>
 <Typography>To develop my skills and my innovation and to work with others to learn different ideas. To build a successful and good profile
career in the field of Software Development thereby mutually benefitting the organization and myself</Typography>
 </TimelineContent>

        </TimelineItem>
    ))
}
        </Timeline>           
        </div>
  );
};

export default TimeLine