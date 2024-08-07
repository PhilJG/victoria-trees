import Database from "better-sqlite3";

const db = new Database("app.db");

// const query = `
// CREATE TABLE users (
// id INTEGER PRIMARY KEY,
// name STRING NOT NULL,
// username STRING NOT NULL UNIQUE
// )
// `;

//** exec used for create table statements */

// db.exec(query);

// const data = [
//   { name: "Caleb", username: "Calcur" },
//   { name: "Phil", username: "Gray" },
//   { name: "Byron", username: "Alley" },
// ];

// const insertData = db.prepare(
//   "INSERT INTO users (name, username) VAlUES (?, ?)"
// );

//** run() is used when you don't expect a return value for example when using INSERT */

// data.forEach((user) => {
//   insertData.run(user.name, user.username);
// });

//Reading all users
// const query = "SELECT * FROM users";
// const users = db.prepare(query).all();

// console.log(users);

//Reading one user
//** prepare() is used to prevent SQL injection using get() or all()**
// const user = db.prepare("SELECT * FROM users WHERE id = ?").get(2);

// console.log(user);

// db.close();

import express from "express";
const app = express();
const port = 3000;

//Reading all users
app.get("/", (req, res) => {
  const query = "SELECT * FROM users";
  const users = db.prepare(query).all();
  res.json({ user: users });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
