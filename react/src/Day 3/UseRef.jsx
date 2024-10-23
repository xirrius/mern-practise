// does not cause re-renders
// can preserve a value between re-renders 
// can be attached to DOM elements

import { useEffect, useRef, useState } from "react";

const UseRef = () => {

  const [value, setValue] = useState(0)
  const item = 'Aman' // value preserve nhi h between re-renders
  const refContainer = useRef('Aman');

  useEffect(() => {
    // Set the initial value when the component mounts
    // refContainer.current.value = "initial value";
    console.log(refContainer);  
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault()
    refContainer.current.focus()
    console.log(refContainer.current);
    console.log(refContainer.current.value);
  }

  return (
    <>
      <div className="container">
        <p>{value}</p>
        <button onClick={() => setValue(value + 1)}>Increase</button>
      </div>
      <form className="container form" onSubmit={(e) => handleSubmit(e)}>
        <div className="input">
          <input type="text" defaultValue={refContainer.current} ref={refContainer} onChange={() => console.log(refContainer.current.value) 
          }/>
        </div>
        <button type="submit" className="btn">Submit</button>
      </form>
    </>
  );
};

export default UseRef;
