import { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout";
import AboutUs from "./pages/AboutUs";

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
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/AboutUs" element={<AboutUs />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
