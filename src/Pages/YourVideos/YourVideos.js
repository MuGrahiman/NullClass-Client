import React from "react";
import { useSelector } from "react-redux";
import LeftSideBar from "../../Components/LeftSideBar/LeftSideBar";
import ShowVideoGrid from "../../Components/ShowVideoGrid/ShowVideoGrid";
import "./YourVideos.css";
function YourVideos() {

  const currentUser = useSelector((state) => state?.currentUserReducer);

  const vids = useSelector((state) => state.videoReducer)
  ?.data?.filter((q) => q?.videoChannel === currentUser?.result?._id)
  .reverse();

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
