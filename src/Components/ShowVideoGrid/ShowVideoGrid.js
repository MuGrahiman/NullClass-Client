import React from "react";
import ShowVideo from "../ShowVideo/ShowVideo";
import './ShowVideoGrid.css'
const ShowVideoGrid = ({ vids }) => {
  return (
    <div className="Container_ShowvideoGrid">
      {vids?.map((vi,i) => {
        return (
          <div key={i} className="video_box_app">
            <ShowVideo vid={vi} />
          </div>
        );
      })}
    </div>
  );
};

export default ShowVideoGrid;
