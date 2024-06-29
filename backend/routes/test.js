import mysql2 from "mysql2";
import express from "express";
import { database } from "../database.js";

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
