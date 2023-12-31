import React from "react";
import ShowVideoList from "../../Components/ShowVideoList/ShowVideoList";

const WHLVideoList = ({ Page,Remover, CurrentUser, VideoList }) => {
  return (
    <>
      {CurrentUser ? (
        <>
          {VideoList?.data
            ?.filter((q) => q?.Viewer === CurrentUser)
            .reverse()
            .map((m) => {
              return (
                <>
                  <ShowVideoList CurrentUser={CurrentUser} Remover={Remover} key={m._id} videoId={m.videoId} />
                </>
              );
            })}
        </>
      ) : (
        <>
          <h2 style={{color:'white'}}>please Login To Watch Your {Page}</h2>
        </>
      )}
    </>
  );
};

export default WHLVideoList;
