import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./App.css";
import Navbar from "./Components/NavBar/Navbar";
import AllRoutes from "./Components/AllRoutes";
import DrawerSideBar from "./Components/LeftSideBar/DrawerSideBar";
import CreateEditChannel from "./Pages/Channel/CreateEditChannel";
import VideoUpload from "./Pages/VideoUpload/VideoUpload";
import { fetchAllChanel } from "./Actions/channelUser";
import { getALLVideos } from "./Actions/video";
import { getAllLikeVideo } from "./Actions/likedVideo";
import { getAllWatchLater } from "./Actions/watchLater";
import { getAllHistory } from "./Actions/history";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllChanel());
    dispatch(getALLVideos()); 
    dispatch(getAllLikeVideo());
    dispatch(getAllWatchLater());
    dispatch(getAllHistory());
  }, [dispatch]);
  const [vidUploadPage, setVidUploadPage] = useState(false);
  const [toggleDrawerSidebar, setToggleDrawerSidebar] = useState({
    display: "none",
  });
  const [CreateEditChannelBtn, setCreateEditChannelBtn] = useState(false);
  const toggleDrawer = () => {
    if (toggleDrawerSidebar.display === "none")
      setToggleDrawerSidebar({ display: "flex" });
    else setToggleDrawerSidebar({ display: "none" });
  };
  return (
    <Router>
      {vidUploadPage && <VideoUpload setVidUploadPage={setVidUploadPage} />}
      {CreateEditChannelBtn && (
        <CreateEditChannel setCreateEditChannelBtn={setCreateEditChannelBtn} />
      )}
      <Navbar
        toggleDrawer={toggleDrawer}
        setCreateEditChannelBtn={setCreateEditChannelBtn}
      />
      <DrawerSideBar
        toggleDrawer={toggleDrawer}
        toggleDrawerSidebar={toggleDrawerSidebar}
      />
      <AllRoutes
        setVidUploadPage={setVidUploadPage}
        setCreateEditChannelBtn={setCreateEditChannelBtn}
      />
    </Router>
  );
}

export default App;
