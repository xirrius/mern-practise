import { createContext, useContext, useState } from "react";
import Home from "./Home";

// Context API
export const UserContext = createContext();
// Provider - context provide krta h
// Consumer - useContext - context ki value consume krta h

export const UserAppContext = () => useContext(UserContext);
// UserAppContext is a function in which useContext extracts context and fetches context values.


const Head = () => {

  const [user, setUser] = useState("Aman");
  const [marks, setMarks] = useState(100);

  return (
    <>

      <UserContext.Provider value={{ user, marks }}>
        <div>
          {/* How to include Styling in JSX */}
          <h1 style={{ "background-color": "red" }}>HELLO</h1> 
        </div>
        {/* How to include JS in JSX */}
        <div>{2 + 3}</div>
        <div>
          <Home 
        //   user={user}
        //   marks={marks}
        // passing props to the child component
        // this contributes to prop drilling
          />
        </div>
      </UserContext.Provider>

    </>
  );
};

export default Head;
