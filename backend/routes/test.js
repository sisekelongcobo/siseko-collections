import mysql2 from "mysql2";
import express from "express";

let databaseConfig;
databaseConfig = {
  host: "127.0.0.1",
  user: "root",
  password: "Umaqondana@12",
  database: "siseko_db",
};

const database = mysql2.createConnection(databaseConfig);
database.connect((error) => {
  if (error) {
    console.log(`Error connecting to the database ${error}`);
    return;
  } else {
    console.log("Connected to the database");
  }
});

const router = express.Router();

router.get("/getMovies", (req, res) => {
  database.query("select * from movies", (error, result) => {
    if (error) {
      console.log(`Error fetching movies ${error}`);
      res.status(500).send("Error fetching movies");
      return;
    } else {
      res.json(result);
    }
  });
});

export default router;
