import React from "react";

const ThemeContext = React.createContext(); // useState를 사용하는 경우 초기값 안넣어줘도 됨
ThemeContext.displayName = "ThemeContext";

export default ThemeContext;

// 전역적으로 사용하고 싶을때 컨텍스트 사용