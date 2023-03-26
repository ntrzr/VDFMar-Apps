const http = require('http');
const fs = require('fs');
const PORT = 3000;

const server = http.createServer(function(incoming, response){
    response.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('index.html', function(err, data){
        if (err)
            response.writeHead(404);
        else
            response.write(data);

        response.end();
    });
});

server.listen(PORT, function(err) {
    (err) ? console.log("L bozo", err) : console.log("all ok!");

});