import * as api from "../API";

export const fetchAllChanel = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAllChanel();
    console.log(data)
    dispatch({ type: "FETCH_CHANELS", payload: data });
  } catch (error) {
    console.log(error);
  }
};


export const updateChanelData = (id, updateData) => async (dispatch) => {
  try {
    const { data } = await api.updateChanelData(id, updateData);
    dispatch({ type: "UPDATE_DATA", payload: data });
  } catch (error) {
    console.log(error);
  }
};
