// Import the http and fs modules
const http = require('http');
const fs = require('fs');
const path = require('path');

// Create the server and define the response
const server = http.createServer((req, res) => {
    // If the request is for the home page
    if (req.url === '/') {
        // Serve the HTML file
        fs.readFile(path.join(__dirname, 'index.html'), 'utf-8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error loading the HTML file');
                return;
            }

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page not found');
    }
});

// Define the port and host
const port = 3000;
const host = 'localhost';

// Start the server
server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);
});
if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`API listening on port ${port}`);
  });
}
