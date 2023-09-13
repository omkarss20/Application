import express from "express";
import mysql2 from "mysql2";
import cors from "cors";

const app = express();

//Connection with database
const db = mysql2.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "Crce@720",
  database: "jobs",
});

//Middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("Hello world");
});

app.get("/jobs", (req, res) => {
  const q = "SELECT * FROM jobs";
  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.json(data);
  });
});

app.get("/applications", (req, res) => {
  const q = "SELECT * FROM applied_people";
  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.json(data);
  });
});

app.listen(7721, () => {
  console.log("Connected to backend");
});
