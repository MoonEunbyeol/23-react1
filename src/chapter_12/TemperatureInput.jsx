const scaleNames = {
  c: "섭씨",
  f: "화씨",
};

function TemperatureInput(props) {
  const handleChange = (event) => {
    props.onTemperatureChange(event.target.value);
  };

  return ( // 16행 state를 상위 컴포넌트로 올림. State 끌어올리기. props를 통해서 온도 값을 가져옴. 
    <fieldset>
      <legend>
        온도를 입력해주세요 (단위:{scaleNames[props.scale]});
      </legend>
      <input value={props.temperature} onChange={handleChange} /> 
    </fieldset>
  );
}

export default TemperatureInput;