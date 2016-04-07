/**
 * Created by eric on 2016/4/7.
 */
var http =require('http');
var server=http.createServer();
server.on('request',function (req, res) {
    res.writeHead(200,{'Content-Type':'text/html ;charset:utf-8'});
    res.write('<head><meta charset="utf-8"/></head>');
    res.write('Hello World');
    res.end("启动");
});
server.listen(7777);
console.log("starting")

