import { useCallback, useEffect, useState } from "react";
let url = "https://dummyjson.com/users";

// memoization - function ko ek baar create krke store kr lena
// useCallback(function, [])
// performance


const UseEffect = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
        const fetchData =
          async () => {
            try {
              console.log("Fetching data...");
              const response = await fetch(url);
              const users = await response.json();
              setUsers(users.users);
              console.log(users);
            } catch (error) {
              console.log(error);
            }
          };
    fetchData();
  }, []);

  return (
    <div
      className="container"
      style={{
        "flex-direction": "row",
        "flex-wrap": "wrap",
        gap: "2rem",
      }}
    >
      {users &&
        users.map((user, idx) => (
          <div
            key={idx}
            style={{
              display: "flex",
              "flex-direction": "column",
              "background-color": "pink",
              "border-radius": "20px",
              padding: "1rem",
            }}
          >
            <div>
              <img src={user.image} alt="" />
            </div>
            <div>
              <p>
                <span>
                  {user.firstName} {user.lastName}
                </span>
              </p>
              <p>{user.role}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default UseEffect;
