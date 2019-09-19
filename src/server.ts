import * as http from "http";
import * as normalizePort from "normalize-port";

import app from "./components/app";
import logger from "./helpers/logger";

const port = normalizePort(process.env.PORT || "3000");
const server = http.createServer(app);

server.listen(port, () => logger.info(`Server listening on port ${port}.`));
