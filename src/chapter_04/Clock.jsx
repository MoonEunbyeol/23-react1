import React from "react";

function Clock(props) {
  return (
    <div>
      <h1>안녕, 리액트! (4.4 실습)</h1>
      <h2>현재 시간 : {new Date().toLocaleTimeString()}</h2>
    </div>
  );
}

export default Clock;