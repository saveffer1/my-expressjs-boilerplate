const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const morgan = require("morgan");

const page_routes = require("./routes/page_routes");
const api_routes = require("./routes/api_routes");
const logger = require("./config/morgan_log_config");

const pubdir = path.join(__dirname, "public");

const logStream = fs.createWriteStream(
    path.join(__dirname, "../log", "access.log"), { 
        flags: "a" 
    }
);

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(pubdir));

if (process.env.NODE_ENV === 'production') {
    app.use(morgan('combined', { stream: logStream }));
  } else {
    app.use(morgan(logger.morgan_dev));
  }

app.use("/", page_routes);
app.use("/api", api_routes);

module.exports = app;