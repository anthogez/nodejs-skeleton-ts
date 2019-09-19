import * as express from "express";
import * as cors from "cors";

import routes from "./routes";

const app: express.Application = express();

app.use(cors()).use("/api", routes);
app.get("/", function(req, res) {
  res.send("NodeJS - TypeScript Server Skeleton");
});

app.get("/user", function(req, res) {
  res.status(200).json({ name: "john doe" });
});

export default app;
