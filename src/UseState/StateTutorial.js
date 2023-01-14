import React, { useState } from "react";

const StateTutorial = () => {
  const [inputValue, setInputValue] = useState("Pedro");

  let onChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
  };

  return (
    <div>
      <input placeholder="enter something..." onChange={onChange} />
      {/* <input placeholder="enter something..." onChange={(e) => { setInputValue(e.target.value) }} /> */}
      {inputValue}
    </div>
  );
};

export default StateTutorial;
