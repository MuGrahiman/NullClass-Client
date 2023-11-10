import * as api from "../API";

export const uploadVideo = (videoData) => async (dispatch) => {
  try {
    const { fileData, fileOptions } = videoData;
    const { data } = await api.uploadVideo(fileData, fileOptions);
    dispatch({ type: "POST_VIDEO", data });
    dispatch(getALLVideos());
  } catch (error) {
    alert(error?.response?.data?.message);
  }
};

export const getALLVideos = () => async (dispatch) => {
  try {
    const { data } = await api.getVideos();
    console.log(data);
    dispatch({ type: "FETCH_ALL_VIDEOS", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const likeVideo = (LikeDate) => async (dispatch) => {
  try {
    const { id, Like } = LikeDate;
    const { data } = await api.likeVideo(id, Like);
    dispatch({ type: "POST_LIKE", payload: data });
    dispatch(getALLVideos());
  } catch (error) {
    console.log(error);
  }
};

export const viewVideo = (viewData) => async (dispatch) => {
  try {
    const { id } = viewData;
    const { data } = await api.viewVideo(id);
    dispatch({ type: "POST_VIEWS", data });
    dispatch(getALLVideos());
  } catch (error) {
    alert(error?.response?.data?.message);
  }
};