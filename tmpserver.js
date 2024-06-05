const http = require('http');
const url = require('url');

function handler(req, res) {
    const parsedUrl =url.parse(req.url, true);
    if (parsedUrl.pathname === '/contactme'){
        res.writeHead(
          200,
          {
            'Content-type':'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Access-Control-Allow-Methods': 'POST',
            'Access-Control-Allow-Headers': 'Content-Type'
          }
        );
        res.end(JSON.stringify({ success: true }));
    } else {
        res.writeHead(404, {'Content-type':'application/json'});
        res.end(JSON.stringify({ success: false }));
        res.end();
    };
}

const server = http.createServer(handler);

server.listen(3001);
