import React from "react";
import ShowVideo from "../ShowVideo/ShowVideo";
import vid from "../../Components/Video/mov_bbb.mp4";
import { useSelector } from "react-redux";

const ShowVideoList = ({ videoId }) => {
  const vids = useSelector((state) => state.videoReducer);
  console.log(vids.data);
  // const vids = [
  //   {
  //     _id: 1,
  //     video_src: vid,
  //     uploader: "abc",
  //     Channel: "62bafe6752cea35a6c30685f",
  //     title: "video 1",
  //     discription: "discription of video 1",
  //   },
  //   {
  //     _id: 2,
  //     video_src: vid,
  //     Channel: "cdd",
  //     title: "video 2",
  //     discription: "discription of video 2",
  //   },
  //   {
  //     _id: 3,
  //     video_src: vid,
  //     Channel: "add",
  //     title: "video 3",
  //     discription: "discription of video 3",
  //   },
  //   {
  //     _id: 4,
  //     video_src: vid,
  //     Channel: "add",
  //     title: "video 3",
  //     discription: "discription of video 3",
  //   },
  // ];
  return (
    <div className="Container_ShowvideoGrid">
      {vids?.data
        ?.filter((q) => q._id === videoId)
        .map((vi) => {
          return (
            <div key={vi._id} className="video_box_app">
              <ShowVideo vid={vi} />
            </div>
          );
        })}
    </div>
  );
};

export default ShowVideoList;
