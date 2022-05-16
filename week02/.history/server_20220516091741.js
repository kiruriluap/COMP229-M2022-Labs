const http=require ('http');
const fs=require('fs');

const port=3000;

const sever= http.createServer(function(req, res)
{
    console.log(__)
fs.readFile(__dirname+ req.url)
});