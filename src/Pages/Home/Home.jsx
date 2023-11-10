import React from "react";
import "./Home.css";
import LeftSideBar from "../../Components/LeftSideBar/LeftSideBar";
import ShowVideoGrid from "../../Components/ShowVideoGrid/ShowVideoGrid";
import vid from "../../Components/Video/mov_bbb.mp4";
import { useSelector } from "react-redux";

const Home = () => {
  const vids = useSelector((state) => state.videoReducer)
    ?.data?.filter((q) => q)
    .reverse();

  // [
  //   {
  //     _id: 1,
  //     video_src: vid,
  //     uploader: "abc",
  //     Channel: "62bafe6752cea35a6c30685f",
  //     title: "video 1",
  //     discription: "discription of video 1",
  //   },
  //   {
  //     _id: 2,
  //     video_src: vid,
  //     Channel: "cdd",
  //     title: "video 2",
  //     discription: "discription of video 2",
  //   },
  //   {
  //     _id: 3,
  //     video_src: vid,
  //     Channel: "add",
  //     title: "video 3",
  //     discription: "discription of video 3",
  //   },
  //   {
  //     _id: 4,
  //     video_src: vid,
  //     Channel: "add",
  //     title: "video 3",
  //     discription: "discription of video 3",
  //   },
  // ];
  const NavList = [
    "All",
    "Python",
    "Java",
    "c++",
    "Movies",
    "Animation",
    "Science",
    "Gaming",
    "Comedy",
  ];
  return (
    <div className="Container_Pages_App">
      <LeftSideBar />
      <div className="Container2_Pages_App">
        <div className="Navigation_Home">
          {NavList.map((m) => (
            <p key={m} className="btn_nav_home">
              {m}
            </p>
          ))}
        </div>
        <ShowVideoGrid vids={vids} />
      </div>
    </div>
  );
};

export default Home;
