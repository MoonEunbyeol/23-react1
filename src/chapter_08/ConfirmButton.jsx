import React from "react";
import { useState } from "react";

function ConfirmButton(props) { // 함수 컴포넌트로 구현
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