const express = require("express");
const cors = require("cors");
const routes = require("./routes/index");
import { configuration } from "./config/config";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();

app.use(cors());
app.use("/api", routes);
app.use(errorHandler)

const on_port = configuration.port || 3000;

app.listen(on_port, () => {
    console.log("server running at :" + on_port);
})