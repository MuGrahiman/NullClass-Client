import * as api from "../API";

export const addToLikedVideo = (likedVideoData) => async (dispatch) => {
  try {
    const { data } = await api.addToLikedVideo(likedVideoData);
    dispatch({ type: "POST_LIKEDVIDEO", data });
    dispatch(getAllLikeVideo());
  } catch (error) {
    console.log(error);
  }
};

export const getAllLikeVideo = () => async (dispatch) => {
  try {
    const { data } = await api.getAllLikeVideo();
    dispatch({ type: "FETCH_ALL_LIKED_VIDEOS", payload: data });
  } catch (error) {
    console.log(error);
  }
};

  
export const deleteLikeVideo = (LikeVideoData) => async (dispatch) => {
  const {videoId, Viewer} = LikeVideoData
  console.log(videoId, Viewer)
  try {
     await api.deleteLikeVideo(videoId, Viewer);
    dispatch(getAllLikeVideo());
  } catch (error) {
    console.log(error);
  }
};
