const app = require("./src/app");
const config = require("./src/config/config");

const HOST = config.HOST;
const PORT = config.PORT;

app.listen(PORT, HOST, () => {
    console.log(`Environment: ${process.env.NODE_ENV === "production" ? "Production" : "Development"}`)
    console.log(`Server is running on http://${HOST}:${PORT}`);
});