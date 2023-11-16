import { createServer } from "http";
import { readFile } from "fs";

const PORT = 8080;

createServer((request, response) => {
  readFile(`.${request.url}`, (err, data) => {
    if (err) {
      response.writeHead(404, {
        "Content-Type": "text/plain",
      });
      response.write(`404 .${request.url} Not Found`);
      response.end();
      return;
    }

    if (request.url.endsWith(".html")) {
      response.writeHead(200, {
        "Content-Type": "text/html",
      });
    }

    if (request.url.endsWith(".js")) {
      response.writeHead(200, {
        "Content-Type": "application/javascript",
      });
    }

    response.write(data);
    response.end();
  });
}).listen(PORT);
