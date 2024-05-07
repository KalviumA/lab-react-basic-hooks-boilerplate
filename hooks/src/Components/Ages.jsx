import React, { useState } from 'react'

const Ages = () => {

    const [currAge, setcurrAge] = useState(0);
    const [currSib, setcurrSib] = useState(0);

    let handleAge=()=>{
        setcurrAge(currAge+1)
    }

    let handleSib=()=>{
        setcurrSib(currSib+1);
    }
    
  return (
    <div>
          <h3>My Current Age is {currAge}</h3>
      <h4>My siblings {currSib}</h4>

      <button onClick={handleAge}>Get Older</button>
      <button onClick={handleSib}>Get more Sib</button>
    </div>
  )
}

export default Ages;