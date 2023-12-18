import axios from "axios";

const API = axios.create({
  baseURL: `https://youtube-clone-mug-de178feea9da.herokuapp.com/`,
  // baseURL:'http://localhost:5500'
});
API.interceptors.request.use((req) => {
  if (localStorage.getItem("Profile"))
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("Profile")).token
    }`;

  return req;
});
export const login = (authData) => API.post("/user/login", authData);

export const updateChanelData = (id, updateData) =>
  API.patch(`/user/update/${id}`, updateData);
export const fetchAllChanel = () => API.get("/user/getAllChanels");

export const uploadVideo = (fileData, fileOptions) =>
  API.post("/video/uploadVideo", fileData, fileOptions);
export const getVideos = () => API.get("/video/getVideos");
export const likeVideo = (id, Like) => API.patch(`/video/like/${id}`, { Like });
export const viewVideo = (id) => API.patch(`/video/view/${id}`);

export const addToLikedVideo = (likedVideoData) =>
  API.post(`/video/likeVideo`, likedVideoData);
export const getAllLikeVideo = () => API.get("/video/getAllLikedVideo");
export const deleteLikeVideo = (videoId, Viewer) =>
  API.delete(`/video/deleteLikedVideo/${videoId}/${Viewer}`);

export const addToWatchLater = (WatchLaterData) =>
  API.post(`/video/watchLater`, WatchLaterData);
export const getAllWatchLater = () => API.get("/video/getAllWatchLater");
export const deleteWatchLater = (videoId, Viewer) =>
  API.delete(`/video/deleteWatchlater/${videoId}/${Viewer}`);

export const addToHistory = (HistoryData) =>
  API.post(`/video/History`, HistoryData);
export const getAllHistory = () => API.get("/video/getAllHistory");
export const deleteHistory = (videoId, Viewer) =>
  API.delete(`/video/deleteHistory/${videoId}/${Viewer}`);
export const clearHistory = (userId) =>
  API.delete(`/video/deleteAllHistory/${userId}`);

export const postComment = (CommentData) =>
  API.post(`/comment/post`, CommentData);
export const getAllComment = () => API.get("/comment/get");
export const editComment = (id, commentBody) =>
  API.patch(`/comment/edit/${id}`, { commentBody });
export const deleteComment = (id) => API.delete(`/comment/delete/${id}`);
