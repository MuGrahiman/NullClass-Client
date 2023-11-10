const authReducers = (state = { data: null }, action) => {
  switch (action.type) {
    case "AUTH":
      localStorage.setItem(
        "Profile",
        JSON.stringify({
          ...action?.data,
        })
      );
      return { ...state, data: action?.data };
    // break;npm

    default:
      return state;
  }
};
export default authReducers;
