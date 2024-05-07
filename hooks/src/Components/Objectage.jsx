import React, { useState } from "react";

const Objectage = () => {

    const [state, setstate] = useState({
        age:19,siblings:1
    })

    let handleState=(val)=>{
setstate({
    ...state, [val]:state[val]+1
})
    }

const {age,siblings} = state


  return (
    <div>
      {" "}
      <h3>My Current Age is {age} </h3>
      <h4>My siblings {siblings}</h4>
      <button onClick={()=>handleState("age")}>Get Older</button>
      <button onClick={()=>handleState("siblings")}>Get more Sib</button>
    </div>
  );
};

export default Objectage;
