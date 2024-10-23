import { useNavigate } from "react-router-dom";

const data = ["Spiderman", "Joker", "Dunkey", "Thor", "Zombie"];

const Movies = () => {

    const navigate = useNavigate();

    const handleMovie = (item) => {
      navigate(`/movies/${item}`);
    };


  return (
    <div className="container">
      Movies
      <div style={{
        'display': 'flex',
        gap: '1rem',
        'flex-direction': 'column'
      }}>
        {data.map((item, idx) => {
          return (
            <div
              key={idx}
              onClick={() => handleMovie(item)}
              style={{ 'cursor': 'pointer', 'background-color': 'gold', 'border-radius': '20px', 'padding': ' 1rem'}}
            >
              <h4>{item}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Movies