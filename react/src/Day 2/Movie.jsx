import { useParams } from "react-router-dom";

const Movie = () => {
  const {
    id,
    // id2
  } = useParams();

  return (
    <div className="container">
      <h1>Movie</h1>
      <div style={{'display': 'flex', 'gap': '2rem'}}>
        <div
          style={{
            "background-color": "pink",
            "border-radius": "20px",
            padding: " 1rem",
            width: "300px",
            height: "300px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flex: 1
          }}
        >
          {id}
        </div>
        <div style={{ 'flex': '1'}}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum,
            dignissimos natus quibusdam totam odio dolorum, eveniet ullam sequi
            facilis obcaecati laborum harum error quisquam. Reprehenderit earum
            necessitatibus incidunt beatae non!
          </p>
        </div>
      </div>
      {/* <div>{id2}</div> */}
    </div>
  );
};
export default Movie;
