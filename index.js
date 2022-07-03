require("dotenv").config();
const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: "src/.env" });

const app = express();
require("./src/db/connection");
const routes = require("./src/routes");

app.use(cors());
app.use(express.json({ limit: "25mb" }));

app.use(express.urlencoded({ limit: "25mb", extended: true }));

app.use(express.static("build"));
app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("hi there");
  res.end();
});

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
