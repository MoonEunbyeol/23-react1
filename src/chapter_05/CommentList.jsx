import React from "react";
import Comment from "./Comment";

const comments = [
  {
    name: "문은별",
    comment: "안녕하세요. 문은별입니다."
  },
  {
    name: "홍길동",
    comment: "안녕하세요. 홍길동입니다."
  },
  {
    name: "테스트",
    comment: "안녕하세요. 테스트입니다."
  },
]

function CommentList(props) {
  return (
    <div>
      {comments.map((foo) => {
        return (
          <Comment name={foo.name} comment={foo.comment} />
        )
      })}
    </div>
  )
}

// function CommentList(props) {
//   return (
//     <div>
//       {/* <Comment /> */}
//       <Comment name={"문은별"} comment={"안녕하세요. 문은별입니다."} />
//       <Comment name={"홍길동"} comment={"안녕하세요. 홍길동입니다."} />
//       <Comment name={"성이름"} comment={"안녕하세요. 성이름입니다."} />
//     </div>
//   );
// }

export default CommentList; //세미콜론 없어도 오류 미발생