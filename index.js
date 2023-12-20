const express = require('express');
const fs = require('fs');
const jsonData = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const products = jsonData.products;
const server = express();
// API --- end point --- route!!!
server.get('/',(req,res)=>{
    res.json({type:'GET'});
})

server.post('/',(req,res)=>{
    res.json({type:'POST'});
})

server.put('/',(req,res)=>{
    res.json({type:'PUT'});
})  
server.delete('/',(req,res)=>{
    res.json({type:'DELETE'});
})
server.patch('/',(req,res)=>{
    res.json({type:'PATCH'});
})

// server.get('/',(req,res)=>{
//     // res.send('<h1>HELLO BHAI LOG</h1>');
//     res.json(products)
//     // res.sendStatus(404)
// })

server.listen(5001 ,()=>{
    console.log("server started!!");
});