import React, { useState } from "react";
import "./Comments.css";
import DisplayComments from "./DisplayComments";
import { useDispatch, useSelector } from "react-redux";
import { postComment } from "../../Actions/comment";
const Comments = ({ videoId }) => {
  const currentUser = useSelector((state) => state?.currentUserReducer);
  const CommentList = useSelector((state) => state?.commentReducer);
  const [commentText, setCommentText] = useState("");
  const dispatch = useDispatch();
  // const CommentList = [
  //   { _id: 1, CommentBody: "hi", UserCommented: "adf" },
  //   {
  //     _id: 2,
  //     CommentBody: "hi",
  //     UserCommented: "adf",
  //   },
  //   {
  //     _id: 3,
  //     CommentBody: "hi",
  //     UserCommented: "adf",
  //   },
  // ];
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (currentUser) {
      if (!commentText) alert("Type your comment");
      else {
        dispatch(
          postComment({
            videoId: videoId,
            userId: currentUser?.result?._id,
            commentBody: commentText,
            userCommented: currentUser?.result?.name,
          })
        );
        setCommentText("");
      }
    } else alert("please Login to post your comment");
  };
  
  return (
    <>
      <form
        action=""
        className="Comments_Sub_Form_Comments"
        onSubmit={handleOnSubmit}
      >
        <input
          type="text"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="add Comments ..."
          className="comment_ibox"
        />
        <input
          type="submit"
          value="add"
          className="Comments_Add_Btn_Comments"
        />
      </form>
      <div className="display_Comment_Container">
        {CommentList?.data
          ?.filter((q) => videoId === q?.videoId)
          .reverse()
          .map((m) => {
            return (
              <DisplayComments
                userId={m.userId}
                cId={m._id}
                commentOn={m?.CommentOn}
                commentBody={m.commentBody}
                userCommented={m.userCommented}
              />
            );
          })}
      </div>
    </>
  );
};

export default Comments;
