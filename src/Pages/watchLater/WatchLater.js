
import React from 'react'
import WHL from '../../Components/WHL/WHL';
import { useSelector } from 'react-redux';

function WatchLater() {
  const watchLater = useSelector(state=>state.watchLaterReducer)
 return (
    <WHL Page={"Watch Later"} VideoList={watchLater}/>
  )
}

export default WatchLater