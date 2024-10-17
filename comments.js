// Create web server
var http = require('http');
var url = require('url');
var fs = require('fs');
var qs = require('querystring');
var comments = [];

http.createServer(function(req, res){
    var pathname = url.parse(req.url).pathname;
    if (pathname == '/') {
        fs.readFile('index.html', function(err, data){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    } else if (pathname == '/comment') {
        var body = '';
        req.on('data', function(chunk){
            body += chunk;
        });
        req.on('end', function(){
            var comment = qs.parse(body).comment;
            comments.push(comment);
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('Comment received: ' + comment);
        });
    } else if (pathname == '/getComments') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(comments));
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Page not found');
    }
}).listen(3000);

console.log('Server running at http://localhost:3000/');