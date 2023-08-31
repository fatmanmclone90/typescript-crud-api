// access the data store (store.json)
import fs from "fs";
import path from "path";

// handle requests and reponses
import { ServerResponse, IncomingMessage } from "http";

// access the task structure
import { Task } from "./ITask";

const getTasks = (req: IncomingMessage, res: ServerResponse) => {
    return fs.readFile(
        path.join(__dirname, "store.json"),
        "utf8",
        (err, data) => {
            if (err) {
            // write 500 response etc
            } else {
                res.writeHead(200, { "Content-Type": "application/json" });
                res.end(
                    JSON.stringify({
                        success: true,
                        message: JSON.parse(data),
                    })
                );
            }
        }
    )
}

export { getTasks };