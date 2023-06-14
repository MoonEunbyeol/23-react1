import React, { useState } from "react";

function SignUp(props) {
  const [name, setName] = useState(""); // 이름
  const [gender, setGender] = useState("남자"); // 성별. 초깃값은 남자

  const handleChangeName = (event) => {
    setName(event.target.value); // 값이 변할 때마다 인풋 값을 set
  };

  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };

  const handleSubmit = (event) => {
    alert(`이름 : ${name}, 성별 : ${gender}`);
    event.preventDefault(); // 이벤트의 기본동작은 동작하지 않게 되고 console.log만 수행
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        이름 :
        <input type="text" value={name} onChange={handleChangeName} />
      </label> <br/>
        성별 : 
        <select value={gender} onChange={handleChangeGender}> // value라는 attribute를 변경하여 텍스트 표시
          <option value="남자">남자</option> // 각각 value값이 
          <option value="여자">여자</option>
        </select>
      <button type="submit">제출</button>
    </form>
  );
}

export default SignUp;
