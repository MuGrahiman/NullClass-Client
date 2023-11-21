import React from "react";
import ShowVideo from "../ShowVideo/ShowVideo";
import { useSelector } from "react-redux";

const ShowVideoList = ({ videoId ,Remover,CurrentUser}) => {
  const vids = useSelector((state) => state.videoReducer); 
  return (
    <div className="Container_ShowvideoGrid">
      {vids?.data
        ?.filter((q) => q._id === videoId)
        .map((vi) => {
          return (
            <div key={vi._id} className="video_box_app">
              <ShowVideo CurrentUser={CurrentUser} Remover={Remover} vid={vi} />
            </div>
          );
        })}
    </div>
  );
};

export default ShowVideoList;
