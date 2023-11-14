import React from "react";
import "./Library.css";
import LeftSideBar from "../../Components/LeftSideBar/LeftSideBar";
import { FaHistory } from "react-icons/fa";
import WHLVideoList from "../../Components/WHL/WHLVideoList";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { useSelector } from "react-redux";
const Library = () => {
  const CurrentUser = useSelector((state) => state?.currentUserReducer);
  const watchLater = useSelector(state=>state.watchLaterReducer)
  const historyList = useSelector((state) => state.HistoryReducer);
  const likedVideo = useSelector(state=>state.likeVideoReducer)

  return (
    <div className="Container_Pages_App">
      <LeftSideBar />
      <div className="Container2_Pages_App">
        {/* History */}
        <div className="Container_libraryPage">
          <h1 className="title_Container_LibraryPage">
            <b>
              <FaHistory />
            </b>
            <b>History</b>
          </h1>
          <div className="Container_VideoList_LibraryPage">
            <WHLVideoList Page={"History"} 
                CurrentUser={CurrentUser?.result?._id}
                VideoList={historyList} />
          </div>
        </div>
        {/* Watch Later */}
        <div className="Container_libraryPage">
          <h1 className="title_Container_LibraryPage">
            <b>
              <MdOutlineWatchLater />
            </b>
            <b>Watch Later</b>
          </h1>
          <div className="Container_VideoList_LibraryPage">
            <WHLVideoList Page={"Watch Later"}
                CurrentUser={CurrentUser?.result?._id}
                VideoList={watchLater} />
          </div>
        </div>
        {/* Liked Videos */}
        <div className="Container_libraryPage">
          <h1 className="title_Container_LibraryPage">
            <b>
              <AiOutlineLike />
            </b>
            <b>Liked Videos</b>
          </h1>
          <div className="Container_VideoList_LibraryPage">
            <WHLVideoList Page={"Liked Videos"}
                CurrentUser={CurrentUser?.result?._id}
                VideoList={likedVideo} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Library;
