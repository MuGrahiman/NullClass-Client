import React, { useState } from "react";
import "./VideoUpload.css";
import { useDispatch, useSelector } from "react-redux";
import { uploadVideo } from "../../Actions/video";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
const VideoUpload = ({ setVidUploadPage }) => {
  const [title, setTitle] = useState("");
  const [videoFile, setVideoFile] = useState("");
  const [progress, setProgress] = useState(0);

  const dispatch = useDispatch();
  const CurrentUser = useSelector((state) => state.currentUserReducer);

  const fileOptions = {
    onUploadProgress: (ProgressEvent) => {
      const { loaded, total } = ProgressEvent;
      const percentage = Math.floor(((loaded / 1000) * 100) / (total / 1000));
      setProgress(percentage);

      if (percentage === 100) {
        setTimeout(() => {}, 3000);
        setVidUploadPage(false);
      }
    },
  };
  const handleVideoFile = (e) => {
    setVideoFile(e.target.files[0]);
  };

  const uploadVideoFile = () => {
    if (!title) alert("Title Required");
    else if (!videoFile) alert("Video File is required");
    else if (videoFile.size > 1000000)
      alert("video File Must Be less Than 1mb");
    else {
      const fileData = new FormData();
      fileData.append("file", videoFile);
      fileData.append("title", title);
      fileData.append("chanel", CurrentUser?.result._id);
      fileData.append("uploader", CurrentUser?.result.name);
      dispatch(
        uploadVideo({
          fileData: fileData,
          fileOptions: fileOptions,
        })
      );
    }
  };

  return (
    <div className="container_VidUpload">
      <input
        type="submit"
        name="text"
        className="ibtn_x"
        value="x"
        onClick={() => setVidUploadPage(false)}
      />
      <div className="container2_VidUpload">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          className="ibox_vidUpload"
          maxLength={30}
          placeholder="Enter Title of your video"
        />
        <label htmlFor="file" className="ibox_vidUpload btn_vidUpload">
          <input
            type="file"
            name="file"
            onChange={(e) => handleVideoFile(e)}
            className="ibox_vidUpload"
            style={{ fontSize: "1rem" }}
          />
        </label>
        <div className="ibox_div_vidUpload">
          <input
            type="submit"
            onClick={uploadVideoFile}
            value="upload"
            className="ibox_vidUpload btn_vidUpload"
          />
        </div>
        <div className="loader ibox_div_vidUpload">
          <CircularProgressbar
            value={progress}
            text={`${progress}`}
            styles={buildStyles({
              rotation: 0.25,
              strokeLinecap: "butt",
              textSize: "20px",
              pathTransitionDuration: 0.5,
              pathColor: `rgba(255,255,255,${progress / 100}`,
              trailColor: "#adff2f",
              textColor: "#f88",
              backgroundColor: "#3e98c7",
            })}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoUpload;
