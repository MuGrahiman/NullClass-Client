import React from "react";
import ShowVideoGrid from "../../Components/ShowVideoGrid/ShowVideoGrid";
import LeftSideBar from "../../Components/LeftSideBar/LeftSideBar";
import DescribeChannel from "./DescribeChannel";
import vid from "../../Components/Video/mov_bbb.mp4";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Channel = ({ setCreateEditChannelBtn, setVidUploadPage }) => {
  const { Cid } = useParams();
  const vids = useSelector((state) => state.videoReducer)
    ?.data?.filter((q) => q?.videoChannel === Cid)
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
        <DescribeChannel
          setVidUploadPage={setVidUploadPage}
          cid={Cid}
          setCreateEditChannelBtn={setCreateEditChannelBtn}
        />
        <ShowVideoGrid vids={vids} />
      </div>
    </div>
  );
};

export default Channel;
