import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const url = "http://localhost:3000";

  useEffect(() => {
    fetch(`${url}/getMovies`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>Movies</h1>
      <ul>
        {data.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
