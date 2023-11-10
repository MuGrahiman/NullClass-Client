import React from "react";
import "./LeftSideBar.css";
import {
  MdOutlineExplore,
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
  MdOutlineWatchLater,
} from "react-icons/md";
import { AiFillLike, AiFillPlaySquare, AiOutlineHome } from "react-icons/ai";
import short from "./youtube-shorts-white-icon.webp";
import { FaHistory } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const DrawerSideBar = ({toggleDrawer,toggleDrawerSidebar}) => {
  return (
    <div className="Container_DrawerLeftSideBar" style={toggleDrawerSidebar}>
      <div className="Container2_DrawerLeftSideBar">
        <div className="Drawer_leftSideBar">
          <NavLink to={'/'} className="icon_sideBar_div">
            <p>
              <AiOutlineHome
                size={22}
                className="icon_sideBar"
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sideBar_Icon">Home</div>
            </p>
          </NavLink>
          <div className="icon_sideBar_div">
            <p>
              <MdOutlineExplore
                size={22}
                className="icon_sideBar"
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sideBar_Icon">Explore</div>
            </p>
          </div>
          <div className="icon_sideBar_div">
            <p>
              <img
                src={short}
                width={22}
                alt="shorts"
                className="icon_sideBar"
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sideBar_Icon">Shorts</div>
            </p>
          </div>
          <div className="icon_sideBar_div">
            <p>
              <MdOutlineSubscriptions
                size={22}
                className="icon_sideBar"
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sideBar_Icon">Subsciptions</div>
            </p>
          </div>
        </div>

        <div className="LibraryBtn_DrawerleftSideBar">
          <NavLink to={'/library'} className="icon_sideBar_div">
            <p>
              <MdOutlineVideoLibrary
                size={22}
                className="icon_sideBar"
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sideBar_Icon">Library</div>
            </p>
          </NavLink>

          <NavLink to={'/history'} className="icon_sideBar_div">
            <p>
              <FaHistory
                size={22}
                className="icon_sideBar"
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sideBar_Icon">History</div>
            </p>
          </NavLink>
          <NavLink to={'/yourvideos'} className="icon_sideBar_div">
            <p>
              <AiFillPlaySquare
                size={22}
                className="icon_sideBar"
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sideBar_Icon">Your videos</div>
            </p>
          </NavLink>
          <NavLink to={'/watchlater'} className="icon_sideBar_div">
            <p>
              <MdOutlineWatchLater
                size={22}
                className="icon_sideBar"
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sideBar_Icon">Watch Later</div>
            </p>
          </NavLink>
          <NavLink to={'/likedvideos'} className="icon_sideBar_div">
            <p>
              <AiFillLike
                size={22}
                className="icon_sideBar"
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sideBar_Icon">Liked videos</div>
            </p>
          </NavLink>
        </div>
        <div className="Subscriptions_lsdbar">
          <h3>Your Subscribtions</h3>
          <div className="Channel_lsdbar">
            <p>c</p>
            <div>Channel</div>
          </div>
          <div className="Channel_lsdbar">
            <p>c</p>
            <div>Channel</div>
          </div>
          <div className="Channel_lsdbar">
            <p>c</p>
            <div>Channel</div>
          </div>
          <div className="Channel_lsdbar">
            <p>c</p>
            <div>Channel</div>
          </div>
          <div className="Channel_lsdbar">
            <p>c</p>
            <div>Channel</div>
          </div>
        </div>
      </div>
      <div className="Container3_DrawerLeftSidebar" onClick={()=>toggleDrawer()}></div>
    </div>
  );
};

export default DrawerSideBar;
