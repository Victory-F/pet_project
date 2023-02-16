//packages
const express = require("express");
const corsMiddleWare = require("cors");
require("dotenv").config();
//routers
const authRouter = require("./routers/auth");
const vocabularyRouter = require("./routers/vocabulary");

const { PORT } = require("./config/constants");
const app = express();

app.use(corsMiddleWare());
app.use(express.json());

//routes
app.use("/auth", authRouter);
app.use("/vocabularies", vocabularyRouter);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
