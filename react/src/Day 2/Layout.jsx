import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div
        style={{
          "background-color": "grey",
          padding: "2rem",
          display: "flex",
          gap: "1rem",
          marginBottom: '2rem'
        }}
      >
        <Link
          to={"/"}
          style={{
            "text-decoration": "none",
            color: "black",
            "font-size": "1.5rem",
          }}
        >
          Home
        </Link>
        <Link
          to={"/project"}
          style={{
            "text-decoration": "none",
            color: "black",
            "font-size": "1.5rem",
          }}
        >
          Projects
        </Link>
        <Link
          to={"/profile"}
          style={{
            "text-decoration": "none",
            color: "black",
            "font-size": "1.5rem",
          }}
        >
          Profile
        </Link>
        <Link
          to={"/movies"}
          style={{
            "text-decoration": "none",
            color: "black",
            "font-size": "1.5rem",
          }}
        >
          Movies
        </Link>
      </div>
      <Outlet ></Outlet>
    </div>
  );
};

export default Layout;
