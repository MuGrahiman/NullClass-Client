import React, { useState } from "react";
import "./CreateEditChannel.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Actions/auth";
import { updateChanelData } from "../../Actions/channelUser";
const CreateEditChannel = ({ setCreateEditChannelBtn }) => {

  const CurrentUser = useSelector((state) => state.currentUserReducer);
  const dispatch = useDispatch();
  const [name, setname] = useState(CurrentUser?.result?.name);
  const [desc, setdesc] = useState(CurrentUser?.result?.desc);
  const handleSubmit = () => {
    if (!name) alert("Name Must be Required!...");
    else if (!desc) alert("Description Must be Required!....");
    else {
      dispatch(updateChanelData(CurrentUser?.result?._id, { name, desc }));
      setCreateEditChannelBtn(false);
      setTimeout(() => {
        console.log(CurrentUser?.result);
        let Email = CurrentUser?.result.email;
        console.log(Email);
        dispatch(login({ email: Email }));
      }, 5000);
    }
  };
  return (
    <div className="container_CreateEditChannel">
      <input
        type="submit"
        name="text"
        className="ibtn_x"
        value="x"
        onClick={() => setCreateEditChannelBtn(false)}
      />
      <div className="container2_CreateEditChannel">
        <h1>
          {CurrentUser?.result.name ? <>Create</> : <>Edit</>}
          your Channel
        </h1>
        <input
          type="text"
          name="text"
          className="ibox"
          placeholder="Enter your /channel name "
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
        <textarea
          rows={15}
          type="text"
          name="text"
          className="ibox"
          placeholder="Enter your Description"
          value={desc}
          onChange={(e) => setdesc(e.target.value)}
        />
        <input
          type="submit"
          onClick={handleSubmit}
          className="ibtn"
          value="submit"
        />
      </div>
    </div>
  );
};

export default CreateEditChannel;
