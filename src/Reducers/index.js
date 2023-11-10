import { combineReducers } from "redux";
import authReducers from "./auth";
import currentUserReducer from "./currentUser";
import channelReducers from "./channel";
import videoReducer from "./video";
import likeVideoReducer from "./likedVideo";
import watchLaterReducer from "./watchLater";
import HistoryReducer from "./history";
import commentReducer from "./comment";

export default combineReducers({
  authReducers,
  currentUserReducer,
  channelReducers,
  videoReducer,
  likeVideoReducer,
  watchLaterReducer,
  HistoryReducer,
  commentReducer,
});
