const express = require('express');

const server = express();

server.get('/',(req,res)=>{
    res.send('<h1>HELLO BHAI LOG</h1>');
})

server.listen(5001 ,()=>{
    console.log("server started!!");
});