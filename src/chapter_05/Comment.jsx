import React from "react";

const styles = {
  wrapper: {
      margin: 8,
      padding: 8,
      display: "flex",
      flexDirection: "row",
      border: "1px solid grey",
      borderRadius: 16,
  },
  imageContainer: {},
  image: {
      width: 50,
      height: 50,
      borderRadius: 25,
  },
  contentContainer: {
      marginLeft: 8,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
  },
  nameText: {
      color: "black",
      fontSize: 16,
      fontWeight: "bold",
  },
  commentText: {
      color: "black",
      fontSize: 16,
  },
};

function Comment(props) {
  return (
    <div style={styles.wrapper}>
      <div style={styles.imageContainer}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
          // src="./image/picture.png" 이런 식으로도 추가 가능. index 기준으로 작성
          alt="프로필 이미지"
          style={styles.image}
        />
      </div>
      <div style={styles.contentContainer}>
        {/* <span style={styles.nameText}>문은별</span>
        <span style={styles.commentText}>제가 만든 첫 컴포넌트입니다. (5.6 실습)</span> */}
        <span style={styles.nameText}> {props.name} </span>
        <span style={styles.commentText}> {props.comment} </span> {/*props로 전달받는 경우*/}
      </div>
    </div>
  );
}

// function Comment(props) {
//   return (
//     <div>
//       <h1>제가 만든 첫 컴포넌트입니다. (5.6 실습)</h1>
//     </div>
//   );
// }

export default Comment;