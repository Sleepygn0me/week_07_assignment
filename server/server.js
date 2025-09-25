//set up server
//imports
import express from "express";
import cors from "cors";
import { db } from "./dbConnections.js";

//initalise express
const app = express();

//config express with json
//config cors in express
app.use(express.json());
app.use(cors());

//set up a port
const PORT = 8080;
app.listen(PORT, () => {
  console.info(`server is running in port ${PORT}`);
});
app.get("/", (_, res) => {
  res.send("Welcome");
});

//TODO: a route to READ data
app.get("/builds", async (req, res) => {
  //error handling
  //try ... catch
  try {
    //query the database to send me the bdata
    //test query in SQL editor first to check syntax
    const data = await db.query(
      `SELECT build_name, src, description, level FROM builds;`
    );
    res.json(data.rows);
  } catch (error) {
    console.error("ERROR", error);
    res.status(500).json({ success: false });
  }
});

app.get("/builds-users", async (_, res) => {
  try {
    const data = await db.query(
      `SELECT builds.build_name As "build name", builds.src AS "Image link", builds.description, builds.level, users.user_name AS"user name" FROM users join builds ON builds.user_id = users.id;`
    );
    res.json(data.rows);
  } catch (error) {
    console.error("Error in the builds-users route", error);
    res.status(500).json({ success: false });
  }
});

app.get("/users", async (req, res) => {
  try {
    const data = await db.query(`SELECT id, user_name FROM users;`);
    res.json(data.rows);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

//TODO: a route to CREATE data
app.post("/add-builds", async (req, res) => {
  const { buildName, src, description, level, userId } = req.body;
  console.log("Incoming data:", { buildName, src, description, level, userId });
  try {
    const query = await db.query(
      `INSERT INTO builds (build_name, src, description, level, user_id) VALUES
      ($1, $2, $3, $4, $5);`,
      [buildName, src, description, Number(level), Number(userId)]
    );
    res
      .status(200)
      .json({ success: true, message: "Build added successfully!" });
  } catch (error) {
    console.error("Error in the add builds route", error);
    res
      .status(500)
      .json({ success: false, error: error.message, stack: error.stack });
  }
});

//?stretch: a route to DELETE data
//?stretch: a route  to UPDATE data
