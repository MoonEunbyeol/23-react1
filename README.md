# 202130114 문은별
<br>

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
- 컴포넌트는 자바스크립트 함수와 입력과 출력이 있다는 면에서 유사하나 입력은 Prps가 담당하고, 출력은 리액트 엘리먼트의 형태로 출력
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

<u>DOM은 동기식, Virtual DOM은 비동기식 방법으로 렌더링</u>

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
