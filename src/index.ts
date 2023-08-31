import http from "http";

// import controller
import { getTasks } from "./controller";

// create the http server
const server = http.createServer((req, res) => {
    // get tasks
    if (req.method == "GET" && req.url == "/api/tasks") {
        return getTasks(req, res);
    }
});

// set up the server port and listen for connections
server.listen(3000, () => {
    console.log("Server is running on port 3000");
});