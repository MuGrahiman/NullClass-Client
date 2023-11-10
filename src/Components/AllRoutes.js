import React from "react";
import Home from "../Pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Library from "../Pages/Library/Library";
import YourVideos from "../Pages/YourVideos/YourVideos";
import WatchLater from "../Pages/watchLater/WatchLater";
import History from "../Pages/History/History";
import LikedVideos from "../Pages/LikedVideos/LikedVideos";
import VideoPage from "../Pages/VideoPage/VideoPage";
import Channel from "../Pages/Channel/Channel";
import Search from "../Pages/Search/Search";

function AllRoutes({ setCreateEditChannelBtn, setVidUploadPage }) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/library" element={<Library />} />
      <Route path="/history" element={<History />} />
      <Route path="/watchlater" element={<WatchLater />} />
      <Route path="/likedvideos" element={<LikedVideos />} />
      <Route path="/yourvideos" element={<YourVideos />} />
      <Route path="/videopage/:vid" element={<VideoPage />} />
      <Route path="/search/:searchQuery" element={<Search />} />
      <Route
        path="/channel/:Cid"
        element={
          <Channel
            setVidUploadPage={setVidUploadPage}
            setCreateEditChannelBtn={setCreateEditChannelBtn}
          />
        }
      />
    </Routes>
  );
}

export default AllRoutes;
