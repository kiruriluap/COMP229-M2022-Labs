// require built-in modules
const http = require('http'); // CommonJS Module pattern (CJS)
const fs = require('fs'); 

const port = 3000;

const server = http.createServer(function(req, res)   
{
   fs.readFile(__dirname + req.url, function(err, data)
   {
        if(err)
        {
            res.writeHead(404); // status - file not found
            console.log(err.message)
            res.end(err.message); // output the error message to the page
        }
        // no error
        res.writeHead(200); // status - all ok
        res.end(data);//output the file that was read to the page
   });
});

server.listen(port, function() 
{
    console.log(`Server running at Port: ${port}`);
});
