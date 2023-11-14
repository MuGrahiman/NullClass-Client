import React from 'react'
import WHL from '../../Components/WHL/WHL';
import { useSelector } from 'react-redux';

function History() {
  const historyList = useSelector((state) => state.HistoryReducer);

  return (
    <WHL Page={"History"} VideoList={historyList}/>
  )
}

export default History