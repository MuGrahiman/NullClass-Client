import React from "react";
import ShowVideoGrid from "../../Components/ShowVideoGrid/ShowVideoGrid";
import LeftSideBar from "../../Components/LeftSideBar/LeftSideBar";
import DescribeChannel from "./DescribeChannel";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Channel = ({ setCreateEditChannelBtn, setVidUploadPage }) => {
  const { Cid } = useParams();
  const vids = useSelector((state) => state.videoReducer)
    ?.data?.filter((q) => q?.videoChannel === Cid)
    .reverse();


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
