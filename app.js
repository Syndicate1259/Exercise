var http = require('http'); //Used for HTTP
const port = 80 //port number web app is hosted


var app = http.createServer(function(req,res){  //HTTP implementation
    var unix_epoch = Math.floor(new Date().getTime() / 1000) //unix epoch in seconds
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      message: "My name is Jose Sanchez" ,
      timestamp: unix_epoch
    }));
});

app.listen(port); //used to bind and listen the connections on the specified host and port
