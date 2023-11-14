import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import moment from "moment";
import "./VideoPage.css";
import LikeWatchLaterSaveBtns from "./LikeWatchLaterSaveBtns";
import Comments from "../../Components/Comments/Comments";
import { addToHistory } from "../../Actions/history";
import { viewVideo } from "../../Actions/video";

const VideoPage = () => {
  const { vid } = useParams();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state?.currentUserReducer);
  const vids = useSelector((state) => state.videoReducer);
  const vv = vids?.data?.filter((q) => q._id === vid)[0];
   const handleHistory = () => {
    dispatch(addToHistory({ videoId: vid, Viewer: currentUser?.result?._id }));
  };
  const handleViews = () => {
    dispatch(viewVideo({ id: vid }));
  };
  useEffect(() => {
    if (currentUser) {
      handleHistory();
    }
    handleViews();
  }, []);

  return (
    <>
      <div className="container_videoPage">
        <div className="container2_videoPage">
          <div className="video_display_screen_videoPage">
            <video
              src={`https://youtube-clone-mug-de178feea9da.herokuapp.com/${vv?.filePath}`}
              controls
              className="video_ShowVideo_videoPage"
            ></video>
            <div className="video_details_videoPage">
              <div className="video_btns_title_VideoPage_cont">
                <p className="video_title_VideoPage">{vv?.videoTitle}</p>
                <div className="views_date_btns_VideoPage">
                  <div className="views_videoPage">
                    {vv?.Views} views<div className="dot"></div>uploaded{" "}
                    {moment(vv?.createdAt).fromNow()}
                  </div>
                  <LikeWatchLaterSaveBtns vv={vv} vid={vid} />
                </div>
              </div>

              <Link
                to={`/channel/${vv?.videoChannel}`}
                className="Channel_details_videoPage"
              >
                <b className="channel_logo_video_page">
                  <p>{vv?.Uploader.charAt(0).toUpperCase()}</p>
                </b>
                <p className="channel_name_videoPage">{vv?.Uploader}</p>
              </Link>
              <div className="Comments_videoPage">
                <h2>
                  <u>Comments</u>
                </h2>
                <Comments videoId={vv._id} />
              </div>
            </div>
          </div>
          <div className="moreVideoBar">More Videos</div>
        </div>
      </div>
    </>
  );
};

export default VideoPage;
