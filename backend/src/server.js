const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { Pool } = require("pg");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const pool = new Pool({
  host:     process.env.DB_HOST     || "localhost",
  user:     process.env.DB_USER     || "postgres",
  password: process.env.DB_PASSWORD || "postgres",
  database: process.env.DB_NAME     || "usersdb",
  port:     5432,
});

app.get("/health", (_req, res) => res.json({ status: "ok" }));

app.get("/users", async (_req, res) => {
  const result = await pool.query("SELECT * FROM users");
  res.json(result.rows);
});

app.post("/users", async (req, res) => {
  const { name, email } = req.body;
  await pool.query("INSERT INTO users(name,email) VALUES($1,$2)", [name, email]);
  res.send("User added");
});

app.listen(5000, () => console.log("Backend running on port 5000"));
