import React from "react";

const students = [ // 각 객체에 고유한 값을 가진 id 추가 및 26행에 key 추가. 없으면 Key props 에러 발생
  {
    id: 1,
    name: "Inje",
  }, 
  {
    id: 2,
    name: "Steve",
  }, 
  {
    id: 3,
    name: "Bill",
  }, 
  {
    id: 4,
    name: "Jeff",
  },
];

function AttendanceBook(props) {
  return (
    <ul>
      {students.map((student) => { // students 배열에 들어있는 각각 요소를 map() 이용하여 하나씩 추출
        return <li key={student.id}>{student.name}</li> // 추출한 각각 요소를 <li> 태그 결합하여 출력/리턴
      })}
    </ul>
  );
}

export default AttendanceBook;