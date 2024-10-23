import { UserAppContext } from "./Head";

const Profile = (
    // { user, marks } // Getting the values from the props instead
) => {
    const { user, marks } = UserAppContext(); // destructuring the value from our context function

    // const {user, marks} = useContext(UserContext);  // We can also do this manually

  return (
    <div>
      <h1>This is profile section</h1>
      <h1>{user}</h1>
      <h1>{marks}</h1>
    </div>
  );
};

export default Profile;
