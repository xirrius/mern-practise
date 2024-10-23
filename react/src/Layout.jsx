import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      This is navbar
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/project"}>Projects</Link>
        <Link to={"/profile"}>Profile</Link>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Layout;
