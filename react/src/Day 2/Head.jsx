import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from './SignIn'
import Layout from './Layout'
import Home from './Home'
import Profile from './Profile'
import Projects from './Projects'
import Movies from './Movies'
import Movie from './Movie'

const Head = () => {
 
  let isSignedIn = true;

  return (
    <>
     
      <BrowserRouter>
        <Routes>

          {!isSignedIn ? (
            <Route path="/" element={<SignIn></SignIn>}></Route>
          ) : (
            <Route path="/" element={<Layout></Layout>}>
              <Route index element={<Home></Home>}></Route>
              <Route path="/profile" element={<Profile></Profile>}></Route>
              <Route path="/project" element={<Projects></Projects>}></Route>
              <Route path="/movies" element={<Movies></Movies>}></Route>
              <Route path="/movies/:id" element={<Movie></Movie>}></Route>
            </Route>
          )}

        </Routes>
      </BrowserRouter>

    </>
  );
};

export default Head;
