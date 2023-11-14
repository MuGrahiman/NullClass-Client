
import React from 'react'
import WHL from '../../Components/WHL/WHL';
import { useSelector } from 'react-redux';

function LikedVideos() { 
  const likedVideo = useSelector(state=>state.likeVideoReducer)
return (
    <WHL Page={"Liked Videos"} VideoList={likedVideo}/>
  )
}

export default LikedVideos