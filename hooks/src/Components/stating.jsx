import React, { useState } from "react";

const stating = () => {
  const [currage, setcurrage] = useState(10);
  const [currsib, setcurrsib] = useState(1);

  return (
    <div>
      <h3>My Current Age is {currage}</h3>
      <h4>My siblings {currsib}</h4>

      <button onClick={() => setcurrage(currage + 1)}>Get Older</button>
      <button onClick={() => setcurrsib(currsib + 1)}>Get more Sib</button>
    </div>
  );
};

export default stating;
