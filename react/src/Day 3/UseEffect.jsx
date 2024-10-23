import { useEffect, useState } from "react";
// let url = "https://dummyjson.com/users";

const UseEffect = () => {
  useEffect(() => {
    return () => {};
  }, []);

  const [count, setCount] = useState(0);
  const [first, setfirst] = useState(false)

//   const sayHello = () => {
//     console.log("Hello from the SayHello function.");
//   };
//   sayHello();

//   useEffect(() => {
//     console.log("Hello from the use Effect hook - initial render");
//   }, []);

//   useEffect(() => {
//     console.log('Hello from the use Effect hook - runs with every state updation');
//   }, [count])

  //Cleanup Function

  return (
    <div className="container">
      <p>Count : {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setfirst(!first)}>
        Toggle
      </button>
      {first && 
      
      <RandomComponent></RandomComponent>
      }
    </div>
  );
};

const RandomComponent = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Hello");
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log('unmounting..');
      
    };
  }, []);

  return <div>RandomComponent</div>;
};

export default UseEffect;
