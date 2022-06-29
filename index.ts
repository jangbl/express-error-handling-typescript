import "express-async-errors";
import express from "express";
import { errorHandler } from "./errors/error-handler";

import router from "./routes";

const app = express();
app.use(express.json());
app.use(router)

app.use(errorHandler);
app.listen(8080, () => console.log("server running on port 8080"));