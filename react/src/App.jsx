import { useState } from "react";

export default function App() {
  let nextId = 0;
  const [name, setName] = useState("");
  const [artists, setArtists] = useState([]);

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button
        onClick={() => {
          setArtists([...artists, { name }]);
        }}
      >
        Add
      </button>
      <ul>
        {artists.map((artist, idx) => (
          <li key={idx}>
            {idx}
            {artist.name}
          </li>
        ))}
      </ul>
    </>
  );
}
