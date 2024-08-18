import React, { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const changeTextHandker = () => {
    setChangedText(true);
  };
  return (
    <div>
      <h2>Hello world!</h2>
      {!changedText && <Output>Its good to see you!</Output>}
      {changedText && <Output>Changed!</Output>}
      <button onClick={changeTextHandker}>Change Text</button>
    </div>
  );
};

export default Greeting;
