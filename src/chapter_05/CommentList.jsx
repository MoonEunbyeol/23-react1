import React from "react";
import Comment from "./Comment";

function CommentList(props) {
  return (
    <div>
      <Comment />
    </div>
  );
}

export default CommentList; //세미콜론 없어도 오류 미발생