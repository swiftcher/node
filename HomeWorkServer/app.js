const http = require('http'); /// import node.js core modle
const fs = require('fs'); // import fs as module

//read html file as string 

let html = fs.readFileSync(__dirname + '/templates/page.html','utf8');
const headnig = 'hello world';
//html = html.replace('{h1-heading}',headnig);
console.log(typeof html);
// creating a server
const server = http.createServer(function(req,res){
    //write header
    res.writeHead(200,{'Content-Type': 'text/html'});
    // write html file to the client 
    res.end(html);
});
server.listen(3000); // listen for any incoming requests

// before sending json to server we make it a string but be careful if we have fs.readfilesync(dirname....'json') 
// so the readfilesync will already make it as string 