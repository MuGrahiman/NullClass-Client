import * as api from "../API";

export const addToWatchLater = (WatchLaterData) => async (dispatch) => {
  try {
    const { data } = await api.addToWatchLater(WatchLaterData);
    dispatch({ type: "POST_WATCHLATER", data });
    dispatch(getAllWatchLater());
  } catch (error) {
    console.log(error);
  }
};

export const getAllWatchLater = () => async (dispatch) => {
    try {
      const { data } = await api.getAllWatchLater();
      dispatch({ type: "FETCH_ALL_WATCHLATER_VIDEOS", payload: data });
    } catch (error) {
      console.log(error);
    }
  };
  
  export const deleteWatchLater = (WatchLaterData) => async (dispatch) => {
    const {videoId, Viewer} = WatchLaterData
    console.log(videoId, Viewer)
    try {
       await api.deleteWatchLater(videoId, Viewer);
      dispatch(getAllWatchLater());
    } catch (error) {
      console.log(error);
    }
  };
  