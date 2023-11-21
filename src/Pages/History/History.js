import React from "react";
import WHL from "../../Components/WHL/WHL";
import { useDispatch, useSelector } from "react-redux";
import { deleteHistory } from "../../Actions/history";

function History() {
  const historyList = useSelector((state) => state.HistoryReducer);
  const dispatch = useDispatch();
  const handleRemover = (videoId, Viewer) => {
    console.log(videoId,Viewer)
    dispatch(deleteHistory({ videoId, Viewer }));
  };
  return (
    <WHL Page={"History"} Remover={handleRemover} VideoList={historyList} />
  );
}

export default History;
