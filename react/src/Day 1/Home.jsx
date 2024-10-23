import Profile from "./Profile"

const Home = (
    //{ user, marks } // Destructing props from the parent component 
) => {
  return (
    <div>
      This is the Home section.
      <Profile
      // user = {user}
      // marks = {marks}
      // Passing on the props (This contributes to prop drilling)
      ></Profile>
    </div>
  );
}
export default Home