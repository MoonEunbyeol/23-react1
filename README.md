# 202130114 문은별
<br>

## 05.04 10주차
### 📚 리스트와 키
**리스트** : 목록. 컴퓨터 프로그래밍에서는 같은 아이템을 순서대로 모아놓은 것. 자바스크립트의 변수나 객체를 하나의 변수로 묶어 놓은 배열과 같은 것

**배열** : 리스트를 위해 사용하는 자료구조

**키** : 각 객체나 아이템을 구분할 수 있는 고유한 값

<br>

### 📚 여러 개의 컴포넌트 렌더링

**여러 개의 컴포넌트 렌더링** : 배열에 들어있는 엘리먼트를 map() 함수를 이용하여 렌더링. 

\* 매핑 : 배열에 들어있는 각 변수에 어떤 처리를 한 뒤 리턴하는 것

<img src="https://github.com/MoonEunbyeol/23-react1/blob/master/src/image/3week/airbnb_02.png" width="300"/>

**리액트에서 map() 함수 사용 예제** : numbers의 요소에 <li> 태그를 결합해서 리턴
```js
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((namber) => 
  <li>{number}</li>
);
```
```js
ReactDOM.render(
  <ul>
    <li>{1}</li>
    <li>{2}</li>
    <li>{3}</li>
    <li>{4}</li>
    <li>{5}</li>
  </ul>,
  document.getElementById('root')
);
```
\* 리턴된 listItems는 \<ul>태그와 결합하여 렌더링

<br>

### 📚 기본적인 리스트 컴포넌트
```js
function NumberList(props) {
  const { numbers } = props;

  const listItems = numbers.map((number) => 
    <li>{number}</li>
  );

  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
```
**기본적인 리스트 컴포넌트** : 상단 코드 실행 시 "리스트 아이템에 무조건 키가 있어야 한다"는 경고 문구 출력. key props가 없기 때문 

<br>

### 📚 리스트의 키
**리스트에서의 키** : 
- 리스트에서 아이템을 구분하기 위한 고유한 문자열
- 리스트에서 어떤 아이템이 변경, 추가 또는 제거되었는지 구분하기 위해 사용
- 키는 같은 리스트에 있는 엘리먼트 사이에서만 고유한 값이면 됨

**키값 사용** :
1. 숫자의 값을 사용: 배열에 중복된 숫자가 들어있다면 키값도 중복 => 고유해야 한다는 키값의 조건 미충족
1. id를 사용 : id의 의미 자체가 고유한 키값으로 사용하기 적합
1. 인덱스를 사용 : 인덱스 값도 고유한 값이기 때문에 사용 가능하나 배열에서 아이템의 순서가 바뀔 수 있는 경우에는 권장하지 않음

\* 리액트에서는 키를 명시적으로 넣어 주지 않으면 기본적으로 이 인덱스 값을 키값으로 사용

<br>

### 💻 10.5 실습 : 출석부 출력하기
**AttendanceBook.jsx (id값 X)**
```js
import React from "react";

const students = [
  {
    name: "Inje",
  }, 
  {
    name: "Steve",
  }, 
  {
    name: "Bill",
  }, 
  {
    name: "Jeff",
  },
];

function AttendanceBook(props) {
  return (
    <ul>
      {students.map((student) => {
        return <li>{student.name}</li>
      })}
    </ul>
  );
}

export default AttendanceBook;
```

**결과** : key props가 없기 때문에 에러 발생

<img src="https://github.com/MoonEunbyeol/23-react1/blob/master/src/image/10week/10.5_error_result.PNG" width="400"/>

**AttendanceBook.jsx (id 및 key 추가)**
```js
import React from "react";

const students = [
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
      {students.map((student) => {
        return <li key={student.id}>{student.name}</li>
      })}
    </ul>
  );
}

export default AttendanceBook;
```

**결과** : 

<img src="https://github.com/MoonEunbyeol/23-react1/blob/master/src/image/10week/10.5_result.PNG" width="400"/>

<br>

### 📚 폼
**폼** : 일반적으로 사용자로부터 입력을 받기위한 양식에서 많이 사용. 사용자로부터 입력을 받기 위해 사용하는 것

<br>

### 📚 제어 컴포넌트
**제어 컴포넌트** : 사용자가 입력한 값에 접근하고 제어할 수 있도록 해주는 컴포넌트. 그 값이 리액트의 통제를 받는 입력 폼 엘리먼트를 의미

```js
function NameForm(props) {
  const [ value, setValue ] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const handleSubmit = (event) => {
    alert('입력한 이름: ' + value);
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        이름: 
        <input type="text" value={value} onChange={handleChange} />
      </label>
      <button type="submit">제출</button>
    </form>
  )
}
```

<br>

### 📚 textarea 태그
**\<textarea>** : 여러 줄에 걸쳐서 나올 정도로 긴 텍스트를 입력받기 위한 HTML 태그

```HTML
<textarea>
  안녕하세요. 여기에 이렇게 텍스트가 들어가게 됩니다.
</textarea>
```

**리액트에서 텍스트 표시** : state를 통해 value라는 attribute를 변경하여 텍스트 표시
```js
function RequestForm(props) {
  const [ value, setValue ] = useState('요청사항을 입력하세요.');

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const handleSubmit = (event) => {
    alert('입력한 요청사항: ' + value);
    event.preventDefault();
  }

  return (
    <form onSubmit={hanleSubmit}>
      <label>
        요청사항: 
        <textarea value={value} onChange={handleChange} />
      </label>
      <button type="submit">제출</button>
    </form>
  );
}
```

<br>

### 📚 select 태그
**\<select>** : 드롭다운 목록을 보여주기 위한 HTML 태그

```HTML
<select>
  <option value="apple">사과</option>
  <option value="banana">바나나</option>
  <option selected value="grape">포도</option>
  <option value="watermelon">수박</option>
</select>
```

**리액트에서 select 속성 사용** : \<select> 태그에 value라는 attribute 를 사용하여 값을 표시

```js
function FruitSelect(props) {
  const [ value, setValue ] = useState('grape');

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const handleSubmit = (event) => {
    alert('선택한 과일: ' + value);
    event.preventDefault();
  }

  return (
    <form onSubmit={hanleSubmit}>
      <label>
        과일을 선택하세요: 
        <select value={value} onChange={handleChange}>
          <option value="apple">사과</option>
          <option value="banana">바나나</option>
          <option value="grape">포도</option>
          <option value="watermelon">수박</option>
        </select>
      </label>
      <button type="submit">제출</button>
    </form>
  );
}
```

<br>

### 📚 File input 태그
**File input 태그** : 
- 디바이스의 저장 장치로부터 사용자가 하나 또는 여러 개의 파일을 선택할 수 있게 해주는 HTML 태그
- File input 태그는 그 값이 읽기 전용이기 때문에 리액트에서는 비제어 컴포넌트가 됨

```js
<input type="file" />
```

<br>

### 📚 여러 개의 입력 다루기
**하나의 컴포넌트에서 여러 개의 입력 다루기** : 여러 개의 state를 선언하여 각각의 입력에 대해 사용

```js
function Reservation(props) {
  const [haveBreakfast, setHaveBreakfast] = useState(true);
  const [numberOfGuest, setNumberOfGuest] = useState(2);

  const handleSubmit = (event) => {
    alert(`아침식사 여부: ${haveBreakfast}, 방문객 수: ${numberOfGuest}`);
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        아침식사 여부:
        <input
          type="checkbox"
          checked={haveBreakfast}
          onChange={(event)=>{
            setHaveBreakFast(event.target.checked);
          }}
        />
      </label>
      <br />
      <label>
        방문객 수:
        <input
          type="number"
          value={numberOfGuest}
          onChange={(event) => {
            setNumberOfGuest(event.target.value);
          }}
        />
      </label>
      <button type="submit">제출</button>
    </form>
  );
}
```
\* 함수 컴포넌트에서는 각 state의 변수마다 set 함수가 따로 존재하기 때문에 위와 같은 형태로 각각의 set 함수를 사용해서 구현

<br>

### 📚 Input Null Value
**Input Null Value** : 제어 컴포넌트에 value prop을 정해진 값으로 넣으면 코드를 수정하지 않는 한 입력값 변경 불가능. 만약 value porp을 넣되 자유롭게 입력할 수 있게 만들고 싶다면 값에 undefined 또는 null을 넣어주면 됨

```js
ReactDOM.render(<input value="hi" />, rootNode);

setTimeout(function() {
  ReactDOM.render(<input value={null} />, rootNode);
}, 1000);
```

<br>

### 💻 11.8 실습 : 사용자 정보 입력받기
**AttendanceBook.jsx (id값 X)**
```js
import React, { useState } from "react";

function SignUp(props) {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("남자");

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };

  const handleSubmit = (event) => {
    alert(`이름 : ${name}, 성별 : ${gender}`);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        이름 :
        <input type="text" value={name} onChange={handleChangeName} />
      </label> <br/>
        성별 : 
        <select value={gender} onChange={handleChangeGender}>
          <option value="남자">남자</option>
          <option value="여자">여자</option>
        </select>
      <button type="submit">제출</button>
    </form>
  );
}

export default SignUp;
```

**결과** : 

<img src="https://github.com/MoonEunbyeol/23-react1/blob/master/src/image/10week/11.8_result.PNG" width="400"/>

<br><hr><br>



## 04.27 9주차
### 📚 이벤트 처리
**DOM에서 클릭 이벤트 처리** :
```js
<button onclick="activate()">
  Activate
</button>
```

**React에서 클릭 이벤트 처리** :
```js
<button onClick={activate}>
  Activate
</button>
```
**DOM과 React에서의 클릭 이벤트 처리 차이점** :
1. 이벤트 이름이 onclick → onClick으로 변경 (Camel case)
1. 전달하려는 함수는 문자열에서 함수 그대로 전달 

**이벤트 핸들러 (Event Handler)** : 이벤트가 발생했을 때 해당 이벤트를 처리하는 함수. 이벤트가 발생하는 것을 계속 듣고 있다는 의미로 '이벤트 리스너 (Event Listener)'라고도 함

**이벤트 핸들러 추가** : 
```js
class Toggle extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isToggleOn: true };

    // callback에서 'this'를 사용하기 위해서 바인딩 필수
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }))
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? '켜짐' : '꺼짐'}
      </button>
    );
  }
}
```
\* bind 미사용 시 this.handleClick은 글로벌 스코프에서 호출되어 undefined으로 사용 불가능

**함수형에서 이벤트 핸들러 정의** : bind, 클래스 필드 문법 미사용 시
```js
function Toggle(props) {
  const [isToggleOn, setIsToggleOn] = useState(true);

  // 함수 안에 함수로 정의
  function handleClick() {
    setIsToggleOn((isToggleOn) => !isToggleOn);
  }

  // arrow function을 사용하여 정의
  const handleClick = () => {
    setIsToggleOn((isToggleOn) => !isToggleOn);
  }

  return (
    <button onClick={handleClick}>
      {isToggleOn ? "켜짐" : "꺼짐"}
    </button>
  );
}
```

<br>

### 📚 Arguments 전달
**Parameter** : 매개변수. 함수를 정의할 때
**Argument** : 인자. 함수를 사용할 때
\* 같은 의미로 봐도 됨

```js
// 명시적으로 event를 매개변수로 넣어 줌
<button onCLick={(event) => this.deleteItem(id, event)}>삭제하기</button>
// id 이후 두번째 매개변수로 event가 자동 전달 (클래스형에서 사용하는 방법)
<button onCLick={this.deleteItem.bind(this, id)}>삭제하기</button>
```
- 모두 동일한 역할을 하는 코드이나 하나는 화살표 함수, 하나는 bind를 사용
- event라는 매개변수는 리액트의 이벤트 객체를 의미
- 두 방법 모두 첫 번째 매개변수 : id, 두 번째 매개변수 : event

**함수형 컴포넌트에서 이벤트 핸들러에 매개변수 전달** :
```js
function MyButton(props) {
  const handleDelete = (id, event) => {
    console.log(id, event);
  }

  return (
    <button onClick={(event) => this.handleDelete(1, event)}>삭제하기</button>
  );
}
```
\* 이벤트 핸들러 호출 시 원하는 순서대로 매개변수를 넣어서 사용

<br>

### 💻 8.3 실습 : 클릭 이벤트 처리하기
**ConfirmButton.jsx**
```js
import React from "react";
import { useState } from "react";

function ConfirmButton(props) {
  const [isConfirmed, setIsConfirmed] = useState(false);

    const handleConfirm = () => {
      setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
    };

    return (
      <button onClick={handleConfirm} disabled={isConfirmed}>
        {isConfirmed ? "확인됨" : "확인하기"}
      </button>
    );
}

export default ConfirmButton;
```

**결과** : 

<img src="https://github.com/MoonEunbyeol/23-react1/blob/master/src/image/9week/8.3_result_01.PNG" width="400"/>
<img src="https://github.com/MoonEunbyeol/23-react1/blob/master/src/image/9week/8.3_result_02.PNG" width="400"/>

<br>

### 📚 조건부 렌더링
**조건 (Condition)** : 컴퓨터 프로그래밍에서의 컨디션은 우리가 알고 있는 조건문의 조건

**조건부 렌더링 (Conditional Rendering)** : 조건에 따른 렌더링. 어떠한 조건에 따라서 렌더링이 달라지는 것을 의미

<br>

### 📚 엘리먼트 변수
**엘리먼트 변수 (Element Variables)** : 렌더링해야 될 컴포넌트를 변수처럼 사용하는 방법. 리액트 앨리먼트를 변수처럼 다루는 방법

```js
let button;
is (isLoggedIn) {
  button = <LogoutButton onClick={handleLogoutClick} />;
} else {
  button = <LoginButton onClick={handleLoginClick} />;
}

return (
  <div>
    <Greeting isLoggedIn={isLoggedIn} />
    {button}
  </div>
);
```
\* state에 따라 button 변수에 컴포넌트의 객체를 저장하여 return문에 사용

<br>

### 📚 인라인 조건
**인라인 (Inline)** : Line의 In. 말 그대로 코드를 별도로 분리된 곳에 작성하지 않고 해당 코드가 필요한 곳 안에 직접 집어넣는다는 뜻

**인라인 조건 (Inline Conditions)** : 조건문을 코드 안에 집어넣는 것

**인라인 If** : if문을 필요한 곳에 직접 집어 넣어서 사용하는 방법. if문과 동일한 효과를 내기 위해 &&라는 논리 연산자를 사용

\* && 연산자 : AND 연산. 조건문이 모두 true인 경우에만 전체 결과가 true. 

**단축 평가 (Short-circuit evalutaion)** : && 연산자 사용 시 첫 번째 조건문이 false이면 어차피 전체 결과는 false가 되므로 두 번째 조건문은 평가하지 않음. 결과가 정해져 있는 논리 연산에서 불필요한 연산은 하지 않도록 하기 위해 사용하는 방법

```js
true && expression -> expression
false && expression -> false
```

**인라인 If-Else** : 
- If-Else문을 필요한 곳에 직접 넣어서 사용하는 방법
- 삼항 연산자 사용 (조건문 ? 참일 경우 : 거짓일 경우)
- 앞에 나오는 조건문이 true면 첫 번째 항목을 리턴. false면 두 번째 항목을 리턴
- 문자열이나 엘리먼트를 넣어서 사용 가능

```js
function UserStatus(props) {
  return (
    <div>
      이 사용자는 현재 <b>{props.isLoggedIn ? '로그인' : '로그인하지 않은'}</b> 상태입니다.
    </div>
  )
}
```

<br>

### 📚 컴포넌트 렌더링 막기
**컴포넌트 렌더링 막기** : 특정 컴포넌트를 렌더링하고 싶지 않을 경우 null을 리턴
```js
function WarningBanner(props) {
  if (!props.warning) {
    return null;
  }

  return (
    <div>경고!</div>
  );
}
```

<br>

### 💻 9.5 실습 : 로그인 여부를 나타내는 툴바 만들기
**Toolbar.jsx**
```js
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
  const { isLoggedIn, onClickLogin, onClickLogout } = props;

  return (
    <div style={styles.wrapper}>
      {isLoggedIn && <span style={styles.greeting}>환영합니다!</span>}
      
      {isLoggedIn ? (
        <button onClick={onClickLogout}>로그아웃</button>
      ) : (
        <button onClick={onClickLogin}>로그인</button>
      )}
    </div>
  );
}

export default Toolbar;
```

**LandingPage.jsx**
```js
import React, {useState} from "react";
import Toolbar from "./Toolbar";

function LandingPage(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onClickLogin = () => {
    setIsLoggedIn(true);
  };

  const onClickLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <Toolbar
        isLoggedIn={isLoggedIn}
        onClickLogin={onClickLogin}
        onClickLogout={onClickLogout}
      />
      <div style={{padding : 16}}>소플과 함께하는 리액트 공부!</div>
    </div>
  );
}

export default LandingPage;
```

**결과** : 

<img src="https://github.com/MoonEunbyeol/23-react1/blob/master/src/image/9week/9.5_result_01.PNG" width="400"/>
<img src="https://github.com/MoonEunbyeol/23-react1/blob/master/src/image/9week/9.5_result_02.PNG" width="400"/>

<br><hr><br>



## 04.13 7주차
### 📚 훅
**훅 (Hook)** : 
- 함수형 컴포넌트에서도 state나 생명주기 함수의 기능을 사용하게 해주기 위해 추가된 기능
- 함수형 컴포넌트도 훅을 사용하여 클래스형 컴포넌트의 기능을 모두 동일하게 구현할 수 있게 됨
- 훅의 이름은 모두 'use'로 시작

\* 예전에 사용하던 함수형 컴포넌트는 별도로 state를 정의하거나, 컴포넌트의 생명주기에 맞춰서 어떤 코드가 실행되도록 할 수 없었음 

<br>

### 📚 useState
**useState** : 
- 함수형 컴포넌트에서 state를 사용하기 위한 Hook
- const [변수명, set함수명] = useState(초깃값);
- 함수의 리턴 값은 배열의 형태
\* set함수명은 state를 업데이트 하는 함수

```js
import React, { useState } from "react";

function Counter(props) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>총 {count}번 클릭했습니다.</p>
      <button onClick={() => setCount(count + 1)}>
        클릭
      </button>
    </div>
  );
}
```

<br>

### 📚 useEffect
**useEffect** : 
- 사이트 이펙트를 수행하기 위한 훅
- useEffect() 훅만으로 생명주기 함수와 동일한 기능을 수행 할 수 있음
- useEffect(이펙트 함수, 의존성 배열);
- 의존성 배열은 이펙트가 의존하고 있는 배열로, 배열 안에 있는 변수 중에 하나라도 값이 변경되었을 때 이펙트 함수가 실행됨
- 처음 컴포넌트가 렌더링 된 이후, 그리고 재 렌더링 이후에 실행
- 만약 이펙트 함수가 마운트와 언마운트 될 때만 한 번씩 실행되게 하고 싶으면 빈 배열을 넣으면 됨 = 의존성 배열 생략

\* side effect : 부작용. 일반적으로 프로그래밍에서는 '개발자가 의도하지 않은 코드가 실행되면서 버그가 발생하는 것'을 말하나 리액트에서는 그냥 *효과 혹은 영향*을 뜻함. 서버에서 데이터를 받아오거나 수동으로 DOM을 변경하는 등의 작업

<br>

### 📚 useMemo
**useMemo** : 
- Memoized value를 리턴하는 훅
- 이전 계산값을 갖고 있기 때문에 컴포넌트가 다시 렌더링될 때마다 연산량이 높은 작업을 반복하는 것을 피할 수 있음
- 렌더링이 일어나는 동안 실행 = 렌더링이 일어나는 동안 실행되서는 안되는 작업을 넣으면 안됨 (ex. useEffect에서 실행되어야 할 사이드 이펙트)
- 빈 배열을 넣게 되면 컴포넌트 마운트 시에만 함수가 실행

```js
const memoizedValue = useMemo(
  () => {
    // 연산량이 높은 작업을 수행하여 결과를 반환
    return computeExpensiveValue(의존성 변수1, 의존성 변수2);
  }, [의존성 변수1, 의존성 변수2]
);
```

<br>

### 📚 useCallback
**useCallback** : 
- useMemo()와 유사한 역할이나 값이 아닌 함수를 반환
- 의존성 배열에 따라 Memoized 값을 반환하는 것은 useMemo와 동일
- 파라미터로 받은 함수를 콜백이라 부름
- useMemo와 마찬가지로 의존성 배열 중 하나라도 변경되면 콜백함수를 반환

```js
const memoizedCallback = useCallback(
  () => {
    doSomething(의존성 변수1, 의존성 변수2);
  }, [의존성 변수1, 의존성 변수2]
);
```

<br>

### 📚 useRef
**useRef** : 
- 레퍼런스를 사용하기 위한 훅으로 레퍼런스 객체를 반환
- const refContainer = useRef(초깃값);
- 반환된 레퍼런스 객체는 컴포넌트의 라이프타임 전체에 걸쳐서 유지 = 컴포넌트 마운트 해제 전까지는 계속 유지
- 매번 렌더링될 때마다 항상 같은 ref 객체를 반환

\* 레퍼런스 : 특정 컴포넌트에 접근할 수 있는 객체를 의미. 레퍼런스 객체에는 .current라는 속성이 있는데 이것은 현재 레퍼런스(참조)하고 있는 엘리먼트를 의미

<br>

### 📚 훅의 규칙
1. **훅은 무조건 최상위 레벨에서만 호출** = 반복문이나 조건문 또는 중첩된 함수들 안에서 훅을 호출하면 안됨. 이 규칙에 따라서 훅은 컴포넌트가 렌더링 될 때마다 같은 순서로 호출되어야 함
1. **리액트 함수 컴포넌트에서만 훅을 호출해야 함**. 일반 자바스크립트 함수에서 훅을 호출하면 안됨

<br>

### 📚 커스텀 훅
**커스텀 훅** : 이름이 use로 시작하고 내부에서 다른 훅을 호출하는 단순한 자바스크립트 함수. 파라미터로 무엇을 받을지, 어떤 것을 리턴해야 할지를 개발자가 직접 정할 수 있음

<br>

### 💻 7.9 실습 : 훅을 사용한 컴포넌트 개발
**useCounter.jsx**
```js
import React, { useState } from "react";

function useCounter(initialValue) {
  const [count, setCount] = useState(initialValue);

  const increaseCount = () => setCount((count) => count + 1);
  const decreaseCount = () => setCount((count) => Math.max(count - 1, 0));

  return [count, increaseCount, decreaseCount];
}

export default useCounter;
```

**Accommodate.jsx**
```js
import React, { useEffect, useState } from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY = 10;

function Accommodate(props) {
  const [isFull, setIsFull] = useState(false);
  const [count, increaseCount, decreaseCount] = useCounter(0);

  useEffect(() => {
    console.log("======================");
    console.log("useEffect() is called.");
    console.log(`isFull : ${isFull}`);
  });

  useEffect(() => {
    setIsFull(count >= MAX_CAPACITY);
    console.log(`Current count value : ${count}`);
  }, [count]);

  return (
    <div style={{padding: 16}}>
      <p>{`총 ${count}명 수용했습니다.`}</p>

      <button onClick={increaseCount} disabled={isFull}>입장</button>
      <button onClick={decreaseCount}>퇴장</button>

      {isFull && <p style={{color: "red"}}>정원이 가득찼습니다.</p>}
    </div>
  );
}

export default Accommodate;
```

**결과** : 

<img src="https://github.com/MoonEunbyeol/23-react1/blob/master/src/image/7week/7.9_index.js_result_01.PNG" width="400"/>
<img src="https://github.com/MoonEunbyeol/23-react1/blob/master/src/image/7week/7.9_index.js_result_02.PNG" width="400"/>

\* useCounter() 훅에서 Math.max() 함수를 사용하여 카운트 값이 0 아래로 내려갈 수 없게 함 -> 값이 0이 되면 더 이상 useEffect() 훅도 호출되지 않음

<br><hr><br>



## 04.07 6주차
### 📚 컴포넌트 추출
**컴포넌트 추출** : 복잡한 컴포넌트를 쪼개서 여러 개의 컴포넌트로 나누는 과정 = 큰 컴포넌트에서 일부를 추출해서 새로운 컴포넌트를 만드는 것

\* 기능 단위로 구분한 것이 좋고, 나중에 곧바로 재사용이 가능한 형태로 추출하는 것이 좋음

<br>

### 💻 5.6 실습 : 댓글 컴포넌트 만들기
**Comment.jsx (CSS 미적용)**
```jsx
import React from "react";

function Comment(props) {
  return (
    <div>
      <h1>제가 만든 첫 컴포넌트입니다. (5.6 실습)</h1>
    </div>
  );
}

export default Comment;
```

**CommentList.jsx**
```jsx
import React form "react";
import Comment from "./Comment";

function CommentList(props) {
  return (
    <div>
      <Comment />
    </div>
  );
}

export default CommentList;
```

**index.js**
```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import CommentList from './chapter05/CommentList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CommentList />
  </React.StrictMode>
);

reportWebVitals();
```

**결과** : 

<img src="https://github.com/MoonEunbyeol/23-react1/blob/master/src/image/6week/5.6_index.js_result.PNG" width="400"/>

<br><br>

**Comment.jsx (CSS 적용 및 컴포넌트 추가)**
```jsx
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
        <span style={styles.nameText}> {props.name} </span>
        <span style={styles.commentText}> {props.comment} </span> {/*props로 전달받는 경우*/}
      </div>
    </div>
  );
}

export default Comment;
```

**CommentList.jsx**
```jsx
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

export default CommentList; //세미콜론 없어도 오류 미발생
```

\* 스타일도 객체를 만들어 사용이 가능. 코드처럼 별도의 객체로 받아 컴포넌트에서는 이것을 분리하여 출력하도록 해야 잘 작성된 코드


**결과** : (index.js는 변경 X)

<img src="https://github.com/MoonEunbyeol/23-react1/blob/master/src/image/6week/5.6_index.js_component_result.PNG" width="400"/>

<br>

### 📚 State
**State** : 
- 리액트 컴포넌트의 상태를 의미
- 정상 비정상 여부가 아닌 리액트 컴포넌트의 데이터를 의미
- 리액트 컴포넌트의 변경 가능한 데이터
- state가 변하면 다시 렌더링이 되기 때문에 렌더링이나 데이터 흐름에 사용되는 값만 state에 포함시켜야 함

**State의 특징** : 따로 복잡한 형태가 있는 것이 아니라, 그냥 하나의 자바스크립트 객체

**setState()** : 리액트에서의 state는 컴포넌트의 렌더링과 관련 있기 때문에 마음대로 수정하게 되면 개발자가 의도한 대로 작동하지 않을 가능성 -> state를 변경하고자 할 때에는 setState() 함수 사용

```js
//state를 직접 수정 (리액트가 수정된 것을 제대로 인지하지 못할 수 있기 때문에 잘못된 사용법)
this.state = {
  name: 'Inje'
};

//setState 함수를 통한 수정 (정상적인 사용법)
this.setState({
  name: 'Inje'
});
```

\* component : 빵 틀 / element : 재료 / instance : 재료를 빵 틀에 넣고 만든 빵으로 비교하면 쉬움

<br>

### 📚 생명주기
**생명주기** : 컴포넌트의 생성 시점(출생), 사용 시점(인생), 종료 시점(사망)을 나타내는 것으로 constructor(생성자)가 실행되면서 컴포넌트가 생성
\* 컴포넌트가 계속 존재하는 것이 아니라 시간에 흐름에 따라 생성되고 업데이트되다가 사라짐

**마운트 (Mount)** : 컴포넌틑가 생성되는 시점으로 이 과정을 마운트라 부름. 생성 직후 *componentDidMount()* 함수가 호출

**업데이트 (Update)** : 리액트 컴포넌트도 생애 동안 변화를 겪으면서 여러 번 렌더링 되는데 이를 업데이트 되는 과정이라 할 수 있음. 렌더링은 props, setState(), forceUpdate()에 의해 상태가 변경되면 이루어짐. 렌더링 이후에 *componentDidUpdate()* 함수가 호출

**언마운트 (Unmount)** : 상위 컴포넌트에서 현재 컴포넌트를 더 이상 화면에 표시하지 않게 될 때 언마운트된다 볼 수 있음. 이 때 언마운트 직전에 *componentWillUnmount()* 함수가 호출

<br>

### 💻 6.3 실습 : State와 생명주기 함수 사용
**Notification.jsx**
```js
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
  messageText: {
    color: "black",
    fontSize: 16,
  },
};

class Notification extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}; //초기화
  }

  componentDidMount() {
    console.log(`${this.props.id} this.componentDidMount() called.`);
  }

  componentDidUpdate() {
    console.log(`${this.props.id} this.componentDidUpdate() called.`);
  }

  componentWillUnmount() {
    console.log(`${this.props.id} this.componentWillUnmount() called.`)
  }

  render() {
    return (
      <div style={styles.wrapper}>
        <span style={styles.messageText}>{this.props.message}</span>
      </div>
    );
  }
}

export default Notification;
```

**NotificationList.jsx** : Notification 컴포넌트를 목록 형태로 보여주기 위한 컴포넌트
```js
import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
  {
    id: 1,
    message: "안녕하세요. 오늘 일정을 알려드립니다.",
  },
  {
    id: 2,
    message: "점심 식사 시간입니다.",
  },
  {
    id: 3,
    message: "이제 곧 미팅이 시작됩니다",
  },
];

var timer;

class NotificationList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notifications: [],
    };
  }

  componentDidMount() {
    const { notifications } = this.state;
    timer = setInterval(() => {
      if (notifications.length < reservedNotifications.length) { 
        //json에 데이터의 개수를 확인 후 개수만큼 setState에 하나씩 넣어줌
        const index = notifications.length;
        notifications.push(reservedNotifications[index]);
        this.setState({
          notifications: notifications,
        });
      } else {
        clearInterval(timer);
      }
    }, 1000); //comment를 1초에 한 번씩 출력을 위해 인터벌 사용
  }

  render() {
    return (
      <div>
        {this.state.notifications.map((notification) => {
          return (
            <Notification
              key={notification.id}
              id={notification.id}
              message={notification.message}
            />
          );
        })}
      </div>
    );
  }
}

export default NotificationList;
```

**index.js**
```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import NotificationList from './chapter_06/NotificationList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NotificationList />
  </React.StrictMode>
);

reportWebVitals();
```

**결과** : 

<img src="https://github.com/MoonEunbyeol/23-react1/blob/master/src/image/6week/6.3_index.js_result.PNG" width="400"/>

<br>

**React Developer Tools** : 리액트를 위해서 별도로 개발된 리액트 개발자 도구

<br><hr><br>



## 03.30 5주차
### 📚 엘리먼트
> Elements are the smallest building blocks of React apps. <br>
엘리먼트는 리액트 앱의 가장 작은 빌딩 블록들

**Element** : 리액트 앱을 구성하는 요소. 웹사이트의 경우 DOM 엘리먼트이며 HTML 요소를 의미

**리액트 엘리먼트와 DOM엘리먼트의 차이** : 리액트 엘리먼트는 Virtual DOM의 형태. DOM 엘리먼트는 페이지의 모든 정보를 가지고 있어 무거우나 리액트 엘리먼트는 변화한 부분만 갖고 있어 가벼움

|구분|DOM|Virtual DOM|
|:---:|:---|:---|
|업데이트 속도|느림|빠름|
|element 업데이트 방식|DOM 전체를 업데이트|변화 부분을 가상 DOM으로 만든 후 DOM과 비교하여 다른 부분만 업데이트|
|메모리|낭비가 심함|효율적|

**엘리먼트의 생김새** : 리액트 엘리먼트는 자바스크립트 객체 형태로 존재. 컴포넌트, 속성 및 내부의 모든 자식(children)에 대한 정보를 포함하고 있는 일반적인 자바스크립트 객체. 이 객체는 마음대로 변경할 수 없는 불변성을 갖고 있음.

```js
{
  type: Button, //컴포넌트 이름
  props: {
    color: 'green',
    children: 'Hello, element!'
  }
}
```
\* 리액트 엘리먼트는 JS 객체 형태로 존재. 이 객체를 만드는 역할을 하는 것이 createElement() 함수

**createElement()** : 내부적으로 자바스크립트 객체를 만드는 역할을 하는 함수
1. 첫 번째 매개변수 : type. 이 곳에 태그가 들어가면 그대로 표현, 만일 리액트 컴포넌트가 들어가면 이 것을 분해해 태그로 만들게 됨.
1. 두 번째 매개변수 : props. 속성
1. 세 번째 매개변수 : children. 자식 태그

```js
React.createElement(
  type,
  [props],
  [...children]
)
```

**엘리먼트의 특징** : 불변성. 즉 한 번 생성된 엘리먼트의 children이나 attributes(속성)을 바꿀 수 없음.

* 만일 내용이 바뀌면 : 컴포넌트를 통해 새로운 엘리먼트를 생성 -> 이전 엘리먼트와 교체를 하는 방법으로 내용을 바꿈. 이렇게 교체하는 작업을 위해 Virtual DOM을 사용

<br>

### 📚 엘리먼트 렌더링하기
**root DOM node** : id값이 root인 div태그로 단순하지만 리액트에 필수로 들어가는 중요한 코드. 이 div태그 안에 있는 모든 것이 리액트 DOM에 의해서 관리. 
```html
<div id="root"></div>
```

**엘리먼트 렌더링** : render() 함수를 사용. Virtual DOM에서 실제 DOM으로 이동하는 과정
1. 첫 번째 파라미터 : 출력할 리액트 엘리먼트
1. 두 번째 파라미터 : 출력할 타겟
```js
const element = <h1>안녕, 리액트!</h1>;
ReactDOM.render(element, document.getElementById('root));
```

<br>

### 📚 렌더링된 엘리먼트 업데이트하기
**엘리먼트 업데이트** : 기존 엘리먼트를 변경하는 것이 아니라 새로운 엘리먼트를 생성해서 바꿔치기하는 것

**실습 코드** : 교재와는 상이. CDN 링크 및 babel 사용
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
  <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
  <!--8~10행 스크립트 추가. 헤드나 바디에 넣어도 상관 X / Babel-->
</head>
<body>
  <div id="root"></div>

  <!--실행 스크립트-->
  <script type="text/babel">
    function tick() {
      const element = (
        <div>
          <h1>안녕, 리액트!</h1>
          <h2>현재 시간 : {new Date().toLocaleTimeString()}</h2>
        </div>
      );
      ReactDOM.render(element, document.getElementById("root"));
    }
    setInterval(tick, 1000);
  </script>
</body>
</html>
```

**결과** : 

<img src="https://github.com/MoonEunbyeol/23-react1/blob/master/src/image/5week/clock.html_result.PNG" width="300"/>

<br>

### 💻 실습 : 시계 만들기
**Clock.jsx**
```jsx
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
```
**Index.js**
```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Clock from './chapter_04/Clock';

setInterval(() => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
    <Clock />
  </React.StrictMode>
  );
}, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```

**결과** : 

<img src="https://github.com/MoonEunbyeol/23-react1/blob/master/src/image/5week/4.4_index.js_result.PNG" width="300"/>

<br>

### 📚 컴포넌트
**컴포넌트** : 
- 컴포넌트 기반 : 작은 컴포넌트가 모여 큰 컴포넌트를 구성하고, 다시 이런 컴포넌트들이 모여서 구성한다는 것을 의미
- 컴포넌트 재사용이 가능하기 때문에 전체 코드의 양을 줄일 수 있어 개발 시간과 유지 보수 비용 절감 가능
- 컴포넌트는 자바스크립트 함수와 입력과 출력이 있다는 면에서 유사하나 입력은 Props가 담당하고, 출력은 리액트 엘리먼트의 형태로 출력
- 엘리먼트를 필요한 만큼 만들어 사용한다는 면에서는 객체 지향의 개념과 비슷

**리액트 컴포넌트 역할** : 어떠한 속성들을 입력으로 받아서 그에 맞는 리액트 엘리먼트를 생성하여 리턴해주는 것

<br>

### 📚 Props
**Props의 개념** : 
- prop(property : 속성, 특성)의 준말로 컴포넌트의 속성을 의미
- 컴포넌트에 어떤 속성, props를 넣느냐에 따라서 속성이 다른 엘리먼트가 출력
- 컴포넌트에 전달 할 다양한 정보를 담고 있는 자바스크립트 객체

**Props의 특징** : 읽기 전용으로 변경할 수 없음. 속성이 다른 엘리먼트를 생성하려면 새로운 props를 컴포넌트에 전달

\* Pure함수 : 인수로 받은 정보가 함수 내부에서도 변하지 않는 함수<br> 　Impure함수 : 인수로 받은 정보가 함수 내부에서 변하는 함수

> 모든 리액트 컴포넌트는 그들의 props에 관해서는 Pure 함수 같은 역할을 해야 한다.

**Props 사용법** : JSX에서는 key-value(키-값)쌍의 형태로 컴포넌트에 props를 넣을 수 있음
```jsx
function App(props) {
  return (
    <Profile
      name="홍길동"
      introduction="안녕하세요, 홍길동입니다."
      viewCount={1500}
    />
  );
}
```
\* App 컴포넌트에서 props를 인자로 받아 내부의 Profile 컴포넌트로 전달해서 name, introduction, viewCount에 각각 속성을 할당. 이때 전달되는 props는 아래 코드와 같은 자바스크립트 객채
```js
{
  name: "홍길동",
  introduction: "안녕하세요, 홍길동입니다.",
  viewCount: 1500
}
```

**JSX를 사용하지 않는 경우 props의 전달 방법** : createElement() 함수 사용
```js
React.createElement(
  Profile,
  {
    name: "홍길동",
    iintroduction: "안녕하세요, 홍길동입니다.".
    viewCount: 1500
  },
  null
);
```

<br>

### 📚 컴포넌트 생성
**컴포넌트의 종류** :
- 리액트 초기 버전에서는 클래스 컴포넌트를 주로 사용
- 이후 Hook이라는 개념이 나오면서 최근에는 함수형 컴포넌트를 주로 사용

**함수형 컴포넌트** : Welcome 함수의 경우 하나의 props 객체를 받아서 인사말이 담긴 리액트 엘리먼트를 리턴
```js
function Welcome(props) {
  return <h1>안녕, {props.name}</h1>
}
```

**클래스형 컴포넌트** : 리액트의 모든 클래스 컴포넌트는 React.Component를 상속받아서 만듦
```js
class Welcom extends React.Component {
  render() {
    return <h1>안녕, {this.props.name}</h1>;
  }
}
```

**컴포넌트 이름 짓기** : 컴포넌트 이름은 항상 대문자로 시작. 리액트는 소문자로 시작하는 컴포넌트를 DOM 태그로 인식하기 때문
\* 컴포넌트 파일 이름과 컴포넌트 이름은 같게 함.

**컴포넌트의 렌더링** : 최종적으로 React DOM을 통해 실제 DOM에 효과적으로 업데이트 = 실제 브라우저를 통해서 볼 수 있음
```js
function Welcome(props) {
  return <h1>안녕, {props.name}</h1>
}

const element = <Welcome name="인제" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);
```

<br>

### 📚 컴포넌트 합성
**컴포넌트 합성** : 
- 여러 개의 컴포넌트를 합쳐서 하나의 컴포넌트를 만드는 것
- 리액트에서는 컴포넌트 안에 또 다른 컴포넌트를 사용할 수 있기 때문에, 복잡한 화면을 여러 개의 컴포넌트로 나누어 구현 가능
```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>
}

function App(props) {
  return (
    <div>
      <Welcome name="Mike" />
      <Welcome name="Steve" />
      <Welcome name="Jane" />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```
\* App 컴포넌트 안에 3개의 Welcome 컴포넌트가 있고, 각각의 Welcome 컴포넌트는 각기 다른 props를 가지고 있음 = App 컴포넌트를 root로 해서 하위 컴포넌트들이 존재하는 형태로 리액트로만 구성된 앱의 기본적인 구조

<br><hr><br>



## 03.23 4주차
### 📚 JSX
**JSX (JavaScript XML)** : JavaScript의 확장 문법으로 JavaScript와 XML/HTML을 합친 것

<br>

### 📚 JSX의 역할
* JSX는 내부적으로 XML/HTML 코드를 자바스크립트로 변환
* React가 createElement 함수를 사용하여 자동으로 자바스크립트로 변환
* 만일 JS로 작업할 경우 직접 createElement 함수를 사용
> JSX를 사용했을 때 코드가 더욱 간결해지고 생산성과 가독성이 올라감

<br>

### 📚 JSX의 장점
* 코드가 간결해짐
* 가독성 향상
* Injection Attack이라 불리는 해킹 방법을 방어함 -> 보안성이 올라감

<br>

### 📚 JSX 사용법
* 모든 자바스크립트 문법을 지원 (추가로 XML과 HTML을 섞어서 사용)
<br>\* XML/HTML 코드를 사용하다가 중간에 자바스크립트 코드를 사용하고 싶으면 중괄호를 써서 묶어주면 됨
```js
const name = "이름";
const element = <h1>안녕, {name}</h1>l

ReactDOM.render(
  element,
  document.getElementById('root')
);
)
``` 
* 태그의 속성값을 넣고 싶을 때는 큰따옴표 사이에 문자열을 넣거나 중괄호 사이에 JS 코드를 넣으면 됨
```js
const element = <div tabIndex="0"></div>
const element = <img src={user.avatarUrl}></img>
```

<br>

### 💻 실습
**Book.jsx**
```js
import React from "react"

function Book(props) {
  return (
    <div>
      <h1>{`이 책의 이름은 ${props.name}입니다.`}</h1>
      <h2>{`이 책은 총 ${props.numOfPage}페이지로 이뤄져 있습니다.`}</h2>
    </div>
  )
}

export default Book;
```
**Library.jsx**
```js
import React from "react";
import Book from "./Book";

function Library(props) {
  return (
    <div>
      <Book name="처음 만난 파이썬" numOfPage={300}></Book>
      <Book name="처음 만난 AWS" numOfPage={400}></Book>
      <Book name="처음 만난 리액트" numOfPage={500}></Book>
    </div>
  )
}

export default Library;
```
**Index.js**
```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Library from './chapter_03/Library';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Library />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```

**결과** : 

<img src="https://github.com/MoonEunbyeol/23-react1/blob/master/src/image/4week/index.js_result.PNG" width="300"/>

<br><hr><br>



## 03.16 3주차
### 📚 개발 환경 설정
**Windows 환경 설정** : PowerShell 프로그램 사용. VS Code에는 터미널 내장

**Node.js** : 자바스크립트로 네트워크 애플리케이션을 개발할 수 있게 해주는 환경

**npm (node package manager)** : Node.js를 위한 패키지 매니저

\* 패키지 매니저 : 프로젝트에서 필요로 하는 다양한 외부 패키지들의 버전과 의존성을 관리하고 편하게 설치 및 삭제할 수 있게 도와주는 역할

\* Node.js 설치 후 node -v 또는 node --version으로 버전 확인

**IDE (Integrated Development Environment)** : 통합 개발 환경. 코드 자동 정렬, 함수 참조 찾기 등의 부가적인 기능 제공 프로그램 -> 수월하게 코딩 가능

\* 강의에서는 VS Code 사용 

<br>

### 📚 리액트
> A JavaScript library for building user interfaces.

**React** : 
1. 사용자 인터페이스를 만들기 위한 자바스크립트 라이브러리
1. 복잡한 사이트를 쉽고 빠르게 만들고 관리하기 위해 만들어진 것
1. SPA를 쉽고 빠르게 만들수 있도록 해주는 도구

**대표적인 자바스크립트 UI 프레임워크** : 앵귤러JS, 리액트, Vue.js

<br>

### 📚 리액트의 장점
**빠른 업데이트와 렌더링 속도** : 빠른 업데이트를 위해 내부적으로 Virtual DOM 사용

\* DOM (Document Object Model) : 페이지를 정의하는 하나의 객체<br>Virtual DOM : 가상의 DOM

*DOM은 동기식, Virtual DOM은 비동기식 방법으로 렌더링*

**동기식** : 요청하는 페이지를 데이터베이스에서 받아와서 페이지를 생성해서 통째로 전달. 기존의 방식으로 화면 업데이트 시 DOM 직접 수정 = 성능에 영향을 크게 미치고 비용도 굉장히 많이 드는 작업. 즉 조작이 비효율적

**비동기식** : 페이지에서 일부 내용이 바뀔 때 바꾼 페이지를 통째로 주는게 아니라 바뀐 부분만 전달. 나머지는 로컬이 가지고 있음 -> 더 빠름 (ex. 페이지 내에 시계. 동기식이면 1초에 한번씩 통째로 받아와야 함)

**컴포넌트 기반 구조** : 리액트에서는 모든 페이지가 컴포넌트로 구성. 하나의 컴포넌트는 다른 여러 개의 컴포넌트의 조합으로 구성 가능 -> 리액트로 개발 시 레고 블럭 조립처럼 컴포넌트를 조합해서 웹사이트 개발

\* 리액트 컴포넌트 예시 : 에어비앤비

<img src="https://github.com/MoonEunbyeol/23-react1/blob/master/src/image/3week/airbnb_01.png" width="300"/> <img src="https://github.com/MoonEunbyeol/23-react1/blob/master/src/image/3week/airbnb_02.png" width="300"/>

**재사용성** : 다시 사용이 가능한 성질. 리액트는 컴포넌트 기반의 구조 => 각 컴포넌트들은 웹사이트의 여러 곳에서 반복적으로 사용. 재사용이 가능하려면 해당 모듈의 의존성이 없어야 함.
1. 전체 소프트웨어 개발 기간 단축
1. 유지보수가 용이

**메타가 만든 오픈소스 프로젝트** : 세계 최대 IT기업 중 하나인 메타에서 시작한 프로젝트로 꾸준히 버전 업데이트가 이뤄지며 발전

**활발한 지식 공유 & 커뮤니티**

**모바일 앱 개발 가능** : 리액트 네이티브라는 모바일 환경 UI 프레임워크를 사용하여 크로스 플랫폼 모바일 앱 개발 가능

<br>

### 📚 리액트의 장점
**방대한 학습량** : 자바스크립트를 베이스로 빠르게 학습 가능

**높은 상태 관리 복잡도** : state, component life cycle 등의 개념이 있으나 충분히 학습 가능

<br>

### 💻 실습

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Add React in One Minute</title>
  </head>
  <body>

    <h2>Add React in One Minute</h2>
    <p>This page demonstrates using React with no build tooling.</p>
    <p>React is loaded as a script tag.</p>

    <div id="like_button_container"></div>
    
    <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>

    <script src="like_button.js"></script>

  </body>
</html>
```
```js
'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

const domContainer = document.querySelector('#like_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));
```

**결과** : 

<img src="https://github.com/MoonEunbyeol/23-react1/blob/master/src/image/3week/practiceResult.png" width="300"/>



<br><hr><br>

## 03.09 2주차
### 📚 HTML
**HTML (Hyper Text Markup Language)** : 웹사이트의 뼈대를 구성하기 위해서 사용하는 마크업 언어

**SPA (Single Page Application)** : 하나의 페이지만 존재하는 웹사이트. 다른 html을 가져오는게 아닌 한 페이지에 모두 표현

\* 실제로 각 페이지별로 html 파일이 따로 존재. 페이지 이동 시 브라우저에서는 해당 페이지의 html 파일을 받아와서 화면에 표시

<br>

### 📚 CSS
**CSS (Cascading Style Sheets)** : 웹사이트의 레이아웃과 글꼴, 색상 등의 디자인을 입히는 역할을 하는 언어

<br>

### 📚 자바스크립트
**JavaScript** : 웹사이트가 살아 움직이도록 생명을 불어넣는 역할 = 동적인 사이트 제작

**ES6** : 자바스크립트 표준화의 발판

|자료형|중복 선언|재할당|
|:---:|:---:|:---:|
|var|O|O|
|let|X|O|
|const|X|X|

\* Undefined : 값이 아직 정의되지 않은 상태<br>　Null : 값이 정의되긴 했으나 정의된 그 값이 null인 것
<br><br>

**대입 연산자** : 변수에 값을 대입하기 위해 사용하는 연산자. 항상 오른쪽에서 왼쪽 방향으로 흐름

**산술 연산자** : 사칙 연산 (-, +, *, /, %, **)

**증감 연산자** : 변수의 값을 증가, 감소시키기 위한 연산자

postfix 방식 : 증감 연산자를 변수의 뒤에 붙이는 방식 (ex. a++;)<br>prefix 방식 : 변수의 앞에 붙이는 방식

**관계 연산자** : 변수들 사이 관계 비교를 위해 사용. 크고 작음을 비교. 비교 연산자라고도 함 (<. >, <=, >= 등)

**동등 연산자** : 변수의 값이 같은지 다른지를 비교 (==, !=)

**일치 연산자** : 변수의 자료형까지 같은지 엄격하게 비교 (===, !==)

**이진 논리 연산자** : boolean 값을 비교할 때 사용 (&&, ||)

**조건부 연산자** : 조건에 따라서 결과가 두 개로 나눠짐. 삼항 연산자라고도 함 (조건식 ? true일 경우 : false일 경우 형태)

<br>

\* 프로그래밍에서의 함수 : 입력을 받아서 정해진 출력을 하는 것

**function statement 사용** : 
```js
function sum(a, b) {
    return a + b;
}
```

**arrow function expression (화살표 함수)** :
```js
const multiply = (a, b) => {
    return a * b;
}
```
