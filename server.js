var http = require('http');
var fs = require('fs');

http.createServer(function(request, response) {

    if (request.url === '/game') {
        sendFileContent(response, 'game.html', 'text/html');
    }

    handleFileTypeRequest('css', 'css');
    handleFileTypeRequest('js', 'javascript');

    function handleFileTypeRequest(fileExtension, fileType) {
        var regex = new RegExp('^\/[A-Za-z0-9\/_]*.' + fileExtension + '$');
        if (regex.test(request.url.toString())) {
            sendFileContent(response, request.url.toString().substring(1), 'text/' + fileType);
        }
    }

    function sendFileContent(response, fileName, contentType) {
        fs.readFile(fileName, function(err, data) {
            if (err) {
                response.writeHead(404);
                response.write('Not Found!');
            } else {
                response.writeHead(200, {'Content-Type': contentType});
                response.write(data);
            }
            response.end();
        });
    }

}).listen(3000);

console.log('Go to localhost:3000 to start the game! \nPress ctrl+c to stop.');