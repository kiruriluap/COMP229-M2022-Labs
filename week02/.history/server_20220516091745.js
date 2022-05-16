const http=require ('http');
const fs=require('fs');

const port=3000;

const sever= http.createServer(function(req, res)
{
    console.log(__dirname);
fs.readFile(__dirname+ req.url)
});