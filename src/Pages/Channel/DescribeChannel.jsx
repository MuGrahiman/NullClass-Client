import React from "react";
import { FaEdit, FaUpload } from "react-icons/fa";
import "./DescribeChannel.css";
import { useSelector } from "react-redux";
const DescribeChannel = ({ setCreateEditChannelBtn, cid ,setVidUploadPage}) => {
 
  const chanels = useSelector((state) => state?.channelReducers);
  const currentchanels = chanels?.filter((c) => c._id === cid)[0];

  const CurrentUser = useSelector((state) => state?.currentUserReducer);

  return (
    <div className="container3_channel">
      <div className="channel_logo_channel">
        <b>{currentchanels?.name.charAt(0).toUpperCase()}</b>
      </div>
      <div className="description_Channel">
        <b>{currentchanels?.name}</b>
        <p>{currentchanels?.desc}</p>
      </div>
      {CurrentUser?.result._id === currentchanels?._id && (
        <>
          <p
            className="editbtn_channel"
            onClick={() => setCreateEditChannelBtn(true)}
          >
            <FaEdit />
            <b>Edit Channel</b>
          </p>
          <p className="uploadbtn_channel" onClick={()=>setVidUploadPage(true)}>
            <FaUpload />
            <b>Upload video</b>
          </p>
        </>
      )}
    </div>
  );
};

export default DescribeChannel;
