import React from "react";
import "./ShowVideo.css";
import { Link } from "react-router-dom";
import moment from "moment";
import { IoMdClose } from "react-icons/io";
function ShowVideo({ Remover, vid ,CurrentUser}) {
  // const currentUser = useSelector((state) => state?.currentUserReducer);

  return (
    <>
      {Remover && (
        <div className="video_dot">
          <IoMdClose  onClick={() => Remover(vid._id,CurrentUser)} />
        </div>
      )}

      <Link to={`/videopage/${vid._id}`}>
        <video
          src={`https://youtube-clone-mug-de178feea9da.herokuapp.com/${vid?.filePath}`}
          className="video_ShowVideo"
        ></video>
      </Link>
      <div className="video_discription">
        <div className="Chanel_logo_App">
          <div className="fstChar_logo_App">
            <>{vid?.uploader?.charAt(0).toUpperCase()}</>
          </div>
        </div>
        <div className="video_details">
          <p className="title_Vid_ShowVideo">{vid?.videoTitle}</p>
          <pre className="vid_View_UploadTime">{vid?.Uploader}</pre>
          <pre className="vid_View_UploadTime">
            {vid?.Views} views<div className="dot"></div> uploaded{" "}
            {moment(vid?.createdAt).fromNow()}
          </pre>
        </div>
      </div>
    </>
  );
}

export default ShowVideo;
