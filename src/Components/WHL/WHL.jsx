import React from "react";
import LeftSideBar from "../LeftSideBar/LeftSideBar";
import "./WHL.css";
import WHLVideoList from "../../Components/WHL/WHLVideoList";
import { useDispatch, useSelector } from "react-redux";
import { clearHistory } from "../../Actions/history";
const WHL = ({ Page, VideoList,Remover }) => {
  const dispatch = useDispatch();
  const CurrentUser = useSelector((state) => state?.currentUserReducer);
  const handleClearHistory = ()=>{
    dispatch(clearHistory({ userId:CurrentUser?.result?._id }));

  }
  return (
    <div className="Container_Pages_App">
      <LeftSideBar />
      <div className="Container2_Pages_App">
        <p className="container_whl ">
          <div className="box_WHL leftSide_whl">
            <b>Your {Page} show here</b>
            <div className="clear_history_btn" onClick={()=>handleClearHistory()}>Clear History</div>
          </div>
          <div className=" rightSide_whl">
            <h1>{Page}</h1>
            <div className="whl_list">
              <WHLVideoList
              Remover={Remover}
                CurrentUser={CurrentUser?.result?._id}
                Page={Page}
                VideoList={VideoList}
              />
            </div>
          </div>
        </p>
      </div>
    </div>
  );
};

export default WHL;
