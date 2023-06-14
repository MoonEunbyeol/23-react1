import { useState, useCallback } from "react";
import ThemeContext from "./ThemeContext";
import MainContent from "./MainContent";

function DarkOrLight(props) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = useCallback(() => {
    if (theme == "light") {
      setTheme("dark");
    } else if (theme == "dark") {
      setTheme("light");
    }
  }, [theme]);

  return ( 
    <ThemeContext.Provider value={{ theme, toggleTheme }}> 
      <MainContent />
    </ThemeContext.Provider>
  );
}

export default DarkOrLight;

// 17행 Context.Provider 컴포넌트로 하위 컴포넌트들을 감싸주면 하위 컴포넌트들이 해당 컨텍스트 데이터에 접근 가능
// ThemeContext의 값을 하위 컴포넌트인 MainContent가 사용(접근)할 수 있도록 함 