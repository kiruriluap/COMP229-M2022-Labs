const http=require ('http');
const fs=require('fs');

const port

const sever= http.createServer(function(req, res)
{
fs.readFile(__dirname+ req.url)
});