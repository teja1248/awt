var http=require('http');
var d=require("./time");
var o=d;
//console.log(o);
http.createServer(function(req,res){
  res.writeHead(200,{'Content-Type':'text/html'});
  res.write(`${o.dateTime}`);
}).listen(9000);
