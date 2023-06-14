import React from "react";
import { useState } from "react";
import TemperatureInput from "./TemperatureInput";

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>물이 끓습니다.</p>;
  }
  return <p>물이 끓지 않습니다.</p>;
}

function toCelsius(fahrenheit) { // 화씨 -> 섭씨
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) { // 섭씨 -> 화씨
  return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature); // 실수로 변환
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert(input); // function(매개변수)
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

function Calculator(props) {
  const [temperature, setTemperature] = useState(""); // 입력받기 전 값. ""
  const [scale, setScale] = useState("c"); // "c"는 초깃값

  const handleCelsiusChange = (temperature) => {
    setTemperature(temperature);
    setScale("c");
  };

  const handleFahrenheitChange = (temperature) => {
    setTemperature(temperature);
    setScale("f");
  };

  const celsius = scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit = scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

  return (
    <div>
      <TemperatureInput 
        scale = "c" // 섭씨
        temperature = {celsius}
        onTemperatureChange={handleCelsiusChange} // props를 통해 변환된 온도 넘김
      />
      <TemperatureInput 
        scale = "f" // 화씨
        temperature = {fahrenheit}
        onTemperatureChange={handleFahrenheitChange}
      />
      <BoilingVerdict celsius={parseFloat(celsius)} />
    </div>
  );
}

export default Calculator;