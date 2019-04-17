const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors);

app.use(express.json());
app.use(require("./routes"));

server.listen(process.env.PORT || 3333);
