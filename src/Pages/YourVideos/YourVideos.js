import React from "react";
import { useSelector } from "react-redux";
import LeftSideBar from "../../Components/LeftSideBar/LeftSideBar";
import ShowVideoGrid from "../../Components/ShowVideoGrid/ShowVideoGrid";
import vid from "../../Components/Video/mov_bbb.mp4";
import "./YourVideos.css";
function YourVideos() {

  const currentUser = useSelector((state) => state?.currentUserReducer);

  const vids = useSelector((state) => state.videoReducer)
  ?.data?.filter((q) => q?.videoChannel === currentUser?.result?._id)
  .reverse();


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
    <div className="Container_Pages_App">
      <LeftSideBar />
      <div className="Container2_Pages_App">
        <div className="Container_YourVideos">
          <h1>Your Videos</h1>
          {currentUser?<>
          <ShowVideoGrid vids={vids} />
          
          </>:<>
          <h3>please Login</h3></>}
        </div>
      </div>
    </div>
  );
}

export default YourVideos;
