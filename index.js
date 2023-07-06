const express = require("express");
const cors = require("cors");
const path = require("path");
let app = express();
require("dotenv").config();
require("./dbConfig/dbConfig");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

// ROUTER

// ADMIN
let UserRouter = require("./router/LOGIN/loginRouter");
app.use("/api/v1", UserRouter);
// OUR TEAM MEMBER
let teamRoute = require("./router/OUR_TEAM/ourTeamRouter");
app.use("/api/v1", teamRoute);
let aboutRouter = require("./router/ABOUT/aboutRouter");
app.use("/api/v1", aboutRouter);

app.use('/',express.static(path.join(__dirname, "./frontend/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./frontend/dist/index.html"));
});
let PORT = process.env.PORT || 9090;
app.listen(PORT, () => {
  console.log(`This server is running on port ${PORT}`);
});
