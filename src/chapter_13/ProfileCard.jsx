import Card from "./Card";

function ProfileCard(props) { // 범용적 재사용 가능한 컴포넌트
  return (
    <Card title="Inje Lee" backgroundColor="#4ea04e"> 
      <p>안녕하세요. 소플입니다.</p>
      <p>저는 리액트를 사용해서 개발하고 있습니다.</p>
    </Card>
  );
}

export default ProfileCard;

// Card 컴포넌트 사용. title엔 이름. backgroundColor 컬러 설정. children은 소개 글 (<p>태그 부분)