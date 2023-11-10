import React, { useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { MdPlaylistAddCheck } from "react-icons/md";
import {
  RiHeartAddFill,
  RiPlayListAddFill,
  RiShareForwardLine,
} from "react-icons/ri";
import "./LikeWatchLaterSaveBtns.css";
import {
  AiFillDislike,
  AiFillLike,
  AiOutlineDislike,
  AiOutlineLike,
} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { likeVideo } from "../../Actions/video";
import { addToLikedVideo, deleteLikeVideo } from "../../Actions/likedVideo";
import { addToWatchLater, deleteWatchLater } from "../../Actions/watchLater";
const LikeWatchLaterSaveBtns = ({ vv, vid }) => {
  const currentUser = useSelector((state) => state?.currentUserReducer);
  const dispatch = useDispatch();
  const [saveVideo, setSaveVideo] = useState(false);
  const [disLikeBtn, setDisLikeBtn] = useState(false);
  const [likeBtn, setLikeBtn] = useState(false);

  const likedVideoList = useSelector((state) => state.likeVideoReducer);
  const watchLaterList = useSelector((state) => state.watchLaterReducer);

  console.log(likedVideoList);
  useEffect(() => {
    likedVideoList?.data
      ?.filter(
        (q) => q?.videoId === vid && q?.Viewer === currentUser?.result._id
      )
      .map((m) => setLikeBtn(true));
    watchLaterList?.data
      ?.filter(
        (q) => q?.videoId === vid && q?.Viewer === currentUser?.result._id
      )
      .map((m) => setSaveVideo(true));
  }, []);

  const toggleSaveVideo = () => {
    if (currentUser) {
      if (saveVideo) {
        setSaveVideo(false);
        dispatch(
          deleteWatchLater({ videoId: vid, Viewer: currentUser?.result?._id })
        );
      } else {
        console.log("save watch later");
        dispatch(
          addToWatchLater({ videoId: vid, Viewer: currentUser?.result?._id })
        );
        setSaveVideo(true);
      }
    } else alert("Please Login");
  };

  const toggleLikeBtn = (e, k) => {
    if (currentUser) {
      if (likeBtn) {
        setLikeBtn(false);
        dispatch(likeVideo({ id: vid, Like: k - 1 }));
        dispatch(
          deleteLikeVideo({ videoId: vid, Viewer: currentUser?.result?._id })
        );
      } else {
        setLikeBtn(true);
        dispatch(likeVideo({ id: vid, Like: k + 1 }));
        dispatch(
          addToLikedVideo({ videoId: vid, Viewer: currentUser?.result?._id })
        );
        setDisLikeBtn(false);
      }
    } else alert("Please Login");
  };
  const toggleDisLikeBtn = (e, k) => {
    if (currentUser) {
      if (disLikeBtn) setDisLikeBtn(false);
      else {
        setDisLikeBtn(true);
        if (likeBtn) {
          dispatch(likeVideo({ id: vid, Like: k - 1 }));
          dispatch(
            deleteLikeVideo({ videoId: vid, Viewer: currentUser?.result?._id })
          );
        }

        setLikeBtn(false);
      }
    } else alert("Please Login");
  };
  return (
    <div className="btns_cont_videoPage">
      <div className="btn_videoPage">
        <BsThreeDots />
      </div>

      <div className="btn_videoPage">
        <div
          className="like_videoPage"
          onClick={(e) => toggleLikeBtn(e, vv.Like)}
        >
          {likeBtn ? (
            <>
              <AiFillLike size={22} className="btns_videoPage" />
            </>
          ) : (
            <>
              <AiOutlineLike size={22} className="btns_videoPage" />
            </>
          )}
          <b>{vv?.Like}</b>
        </div>

        <div
          className="like_videoPage"
          onClick={(e) => toggleDisLikeBtn(e, vv.Like)}
        >
          {disLikeBtn ? (
            <>
              <AiFillDislike size={22} className="btns_videoPage" />
            </>
          ) : (
            <>
              <AiOutlineDislike size={22} className="btns_videoPage" />
            </>
          )}
          <b>Dislike</b>
        </div>

        <div className="like_videoPage" onClick={() => toggleSaveVideo()}>
          {saveVideo ? (
            <>
              <MdPlaylistAddCheck size={22} className="btns_videoPage" />
              <b>Saved</b>
            </>
          ) : (
            <>
              <RiPlayListAddFill size={22} className="btns_videoPage" />
              <b>Save</b>
            </>
          )}
        </div>

        <div className="like_videoPage">
          <>
            <RiHeartAddFill size={22} className="btns_videoPage" />
            <b>Thanks</b>
          </>
        </div>

        <div className="like_videoPage">
          <>
            <RiShareForwardLine size={22} className="btns_videoPage" />
            <b>Share</b>
          </>
        </div>
      </div>
    </div>
  );
};

export default LikeWatchLaterSaveBtns;
