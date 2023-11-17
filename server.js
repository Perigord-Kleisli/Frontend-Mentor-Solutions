/* eslint-disable object-curly-spacing */
import { createServer } from 'http';
import { lstatSync, readFile } from 'fs';
import open from 'open';

const PORT = 8080;
createServer((request, response) => {
  let requestUrl = request.url.replace(/\?.*/, '');

  try {
    if (lstatSync('.' + requestUrl).isDirectory()) {
      if (!requestUrl.endsWith('/')) {
        requestUrl += '/';
      }
      requestUrl += 'index.html';
    }
  } catch { }

  readFile(`.${requestUrl}`, (err, data) => {
    if (err) {
      response.writeHead(404, {
        'Content-Type': 'text/plain',
      });
      response.write(`404 .${requestUrl} Not Found`);
      response.end();
      return;
    }

    if (request.url.endsWith('.html')) {
      response.writeHead(200, {
        'Content-Type': 'text/html',
      });
    }

    if (request.url.endsWith('.js')) {
      response.writeHead(200, {
        'Content-Type': 'application/javascript',
      });
    }

    response.write(data);
    response.end();
  });
}).listen(PORT);

(async () => {
  await open(`http://127.0.0.1:${PORT}/index.html`);
})();
