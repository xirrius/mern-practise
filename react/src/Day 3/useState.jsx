import { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0); 

  // will cause re-renders on updation
  // value retain between re-renders
  
  console.log('re-render');
  
  const handleClick = () => {
    setCount((prev) => {
      return prev + 1;
    });
  };
  return (
    <div className="container">
      <h1>Hooks</h1>
      <p>Count : {count}</p>
      <button onClick={handleClick}>Increase</button>
    </div>
  );
};
export default UseState;

