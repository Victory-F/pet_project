//packages
const express = require("express");
const corsMiddleWare = require("cors");

const PORT = process.env.PORT || 4000;
const app = express();

app.use(corsMiddleWare());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
