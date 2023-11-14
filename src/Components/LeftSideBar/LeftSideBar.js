import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import {
  MdOutlineExplore,
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
} from "react-icons/md";
import "./LeftSideBar.css";
import short from "./youtube-shorts-white-icon.webp";
import { NavLink } from "react-router-dom";
function LeftSideBar() {
  return (
    <div className="Container_leftSideBar">
      <NavLink to={"/"} className="icon_sideBar_div">
        <AiOutlineHome size={22} className="icon_sideBar" />
        <div className="text_sideBar_icon">Home</div>
      </NavLink>
      <div className="icon_sideBar_div">
        <MdOutlineExplore size={22} className="icon_sideBar" />

        <div className="text_sideBar_icon">Explore</div>
      </div>
      <div className="icon_sideBar_div">
        <img
          src={short}
          width={22}
          alt="shorts"
          className="icon_sideBar"
        />{" "}
        <div className="text_sideBar_icon" style={{ fontSize: "10px" }}>
          Shorts
        </div>
      </div>
      <div className="icon_sideBar_div">
        <MdOutlineSubscriptions size={22} className="icon_sideBar" />
        <div className="text_sideBar_icon" style={{ fontSize: "10px" }}>
          Subscriptions
        </div>
      </div>

      
      <NavLink to={"/library"} className="icon_sideBar_div">
        <MdOutlineVideoLibrary size={22} className="icon_sideBar" />
        <div className="text_sideBar_icon">Library</div>
      </NavLink>
    </div>
  );
}

export default LeftSideBar;
