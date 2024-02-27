const http = require('http');

const server = http.createServer((req, res) => {
    const url = require('url');

    // Inside the request handler
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const query = parsedUrl.query;
    if (path === '/users') {
        
    } else if (path === '/products') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('I am a list of products :p');
    } else {

    }
});

server.listen(8000, () => {
    console.log('Server is listening on port 8000');
});
