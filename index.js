const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');

http.createServer((req, res) => {
  let filename = url.parse(req.url, true).pathname;
  switch(filename) {
    case '/contact':
      filename = 'contact-me.html';
      break;
    case '/about':
      filename = 'about-me.html';
      break;
    case '/':
      filename = 'index.html';
      break;
    default:
      filename = '404.html';
      break;
  }
  fs.readFile(path.resolve(__dirname, filename), (err, data) => {
    if(err) {
      console.error(err);
      res.end();
    }
    else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    }
  });
}).listen(8080)