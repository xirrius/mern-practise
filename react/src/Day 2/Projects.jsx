import { Link, useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      This is Projects section
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione est at
        suscipit nisi officiis tenetur architecto quos ut minima ab, voluptate
        similique hic laboriosam! Tempore enim quae officia alias cupiditate.
      </p>
      <Link to={"/profile"}>Profile</Link>
      <br />
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};
export default Projects;
