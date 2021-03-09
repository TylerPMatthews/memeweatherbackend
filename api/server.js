const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const coldRoute = require("./routes/cold/coldRoute");
const coverRoute = require("./routes/cover/coverRoute");
const niceRoute = require("./routes/nice/niceRoute");
const rainRoute = require("./routes/rain/rainRoute");
const snowRoute = require("./routes/snow/snowRoute");
const usersRoute = require("./routes/users/userRoute");

const server = express();
server.use(express.json());
server.use(helmet());
server.use(cors());

//User Routes
server.use("/api/users", usersRoute);

//Weather Routes
server.use("/api/coldweather", coldRoute); 
server.use("/api/niceweather", niceRoute);
server.use("/api/rainweather", rainRoute);
server.use("/api/snoweather", snowRoute);
server.use("/api/coverweather", coverRoute);

//Base API Route
server.get("/", (req, res) => {
  res.json({ Meme_Weather_Backend: "Online" });
});

module.exports = server;
