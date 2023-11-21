import React from "react";
import WHL from "../../Components/WHL/WHL";
import { useDispatch, useSelector } from "react-redux";
import { deleteLikeVideo } from "../../Actions/likedVideo";

function LikedVideos() {
  const likedVideo = useSelector((state) => state.likeVideoReducer);
  const dispatch = useDispatch();
  const handleRemover = (videoId, Viewer) => {
    console.log(videoId,Viewer)

    dispatch(deleteLikeVideo({ videoId, Viewer }));
  };
  return (
    <WHL Page={"Liked Videos"} Remover={handleRemover} VideoList={likedVideo} />
  );
}

export default LikedVideos;
