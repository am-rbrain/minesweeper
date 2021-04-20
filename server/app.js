const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();

app.use(cors());
app.use(express.json());
dotenv.config();

const routes = require("./routes");
app.use(routes);

(async () => {
  try {
    const db = require("./config/db");
    const relations = require("./config/relations");
    await db.authenticate();
    await relations();
    const port = process.env.port || 8000;
    app.listen(port, () => console.log(`Server started in port: ${port}`));
  } catch (error) {
    console.log(error);
  }
})();
