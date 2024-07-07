const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const morgan = require("morgan");

const config = require("./src/config/config");
const page_routes = require("./src/routes/page_routes");
const api_routes = require("./src/routes/api_routes");
const logger = require("./src/config/morgan_log_config");

const host = config.HOST;
const port = config.PORT;

const pubdir = path.join(__dirname, "public");

const logStream = fs.createWriteStream(
    path.join(__dirname, "log", "access.log"), { 
        flags: "a" 
    }
);

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(pubdir));

app.use(morgan(process.env.NODE_ENV === "production" ? ("combined", {stream: logStream}) : (logger.morgan_dev)));

app.use("/", page_routes);
app.use("/api", api_routes);

app.listen(port, host, () => {
    console.log(`Environment: ${process.env.NODE_ENV === "production" ? "Production" : "Development"}`)
    console.log(`Server is running on http://${host}:${port}`);
});