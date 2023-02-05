//packages
const express = require("express");
const corsMiddleWare = require("cors");

//routers
const authRouter = require("./routers/auth");

const PORT = process.env.PORT || 4000;
const app = express();

app.use(corsMiddleWare());
app.use(express.json());

//routes
app.use("/auth", authRouter);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
