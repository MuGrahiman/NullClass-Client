
import React from 'react'
import vid from "../../Components/Video/mov_bbb.mp4";
import WHL from '../../Components/WHL/WHL';
import { useSelector } from 'react-redux';

function WatchLater() {
  const watchLater = useSelector(state=>state.watchLaterReducer)

  // const watchLater = [
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
  return (
    <WHL Page={"Watch Later"} VideoList={watchLater}/>
  )
}

export default WatchLater