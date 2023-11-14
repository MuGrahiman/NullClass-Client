import React from "react";
import "./Home.css";
import LeftSideBar from "../../Components/LeftSideBar/LeftSideBar";
import ShowVideoGrid from "../../Components/ShowVideoGrid/ShowVideoGrid";
import { useSelector } from "react-redux";

const Home = () => {
  const vids = useSelector((state) => state.videoReducer)
    ?.data?.filter((q) => q)
    .reverse();

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
