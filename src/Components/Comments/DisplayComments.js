import React, { useState } from "react";
import "./Comments.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteComment, editComment } from "../../Actions/comment";
import moment from "moment";

const DisplayComments = ({
  cId,
  commentBody,
  userId,
  commentOn,
  userCommented,
}) => {
  // console.log(cId,'cId', commentBody,'commentBody', userId,'userId', commentOn,'commentOn', userCommented,'userCommented');

  const currentUser = useSelector((state) => state?.currentUserReducer);
  const [commentBdy, setCommentBdy] = useState("");
  const [edit, setEdit] = useState(false);
  const [commentId, setCommentId] = useState("");
  const dispatch = useDispatch();
  const handleEdit = (ctId, ctBody) => {
    setEdit(true);
    setCommentBdy(ctBody);
    setCommentId(ctId);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!commentBdy) alert("Type your comment");
    else {
      dispatch(
        editComment({
          id: commentId,
          commentBody: commentBdy,
          // userId: currentUser?.result?._id,
          // userCommented: currentUser?.result?.name,
        })
      );
      setCommentBdy("");
    }
    setEdit(false);
  };
  const handleDel = (id) => {
    dispatch(deleteComment(id));
  };
  return (
    <>
      {edit ? (
        <>
          <form
            action=""
            className="Comments_Sub_Form_Comments"
            onSubmit={handleOnSubmit}
          >
            <input
              type="text"
              onChange={(e) => setCommentBdy(e.target.value)}
              placeholder="Edit Comments ..."
              className="comment_ibox"
              value={commentBdy}
            />
            <input
              type="submit"
              value="Edit"
              className="Comments_Add_Btn_Comments"
            />
          </form>
        </>
      ) : (
        <>
          <p className="Comment_Body">{commentBody}</p>
        </>
      )}
      <p className="UserCommented">
        - {userCommented} commented {moment(commentOn).fromNow()}
      </p>
      {currentUser?.result?._id === userId && (
        <p className="EditDel_DisplayComment">
          <i onClick={() => handleEdit(cId, commentBody)}>Edit</i>
          <i onClick={() => handleDel(cId)}>Delete</i>
        </p>
      )}
    </>
  );
};

export default DisplayComments;
