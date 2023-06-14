import React from "react";

const styles = {
  wrapper: {
    padding: 16,
    display: "flex",
    flexDirection: "row",
    borderBottom: "1px solid grey",
  },
  greeting: {
    marginRight: 8,
  },
};

function Toolbar(props) { 
  const { isLoggedIn, onClickLogin, onClickLogout } = props; // props로 넘어옴. 이름 동일해야 함

  return (
    <div style={styles.wrapper}>
      {isLoggedIn && <span style={styles.greeting}>환영합니다!</span>}
      
      {isLoggedIn ? ( // 삼항 연산자 = 조건부 렌더링 
        <button onClick={onClickLogout}>로그아웃</button> // isLoggedIn이 true이면 로그아웃 버튼 출력
      ) : (
        <button onClick={onClickLogin}>로그인</button> // flase이면 로그인 버튼 출력
      )}
    </div>
  );
}

export default Toolbar;