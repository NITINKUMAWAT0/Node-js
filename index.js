const http = require('http');
const fs = require('fs');
// const { json } = require('stream/consumers');

const index = fs.readFileSync('index.html','utf-8');
const jsonData = fs.readFileSync('data.json','utf-8');

const data = { age: 5 };
const server = http.createServer((req, res) => {

    console.log(req.url);

    switch(req.url){
        case '/':
            res.setHeader('cotent-type','text/html');
            res.end(index);
            break;

        case '/api':
            res.setHeader('content-type','application/JSON');
            res.end(JSON.stringify(jsonData));
            break;
        default :
            res.writeHead(404,'NOT FOUND');  
            res.end();  
    }

    console.log("server started!!");
    
    // res.setHeader('heading', 'info');

    // res.setHeader('content-type','application/JSON');

    // res.setHeader('content-type','text/html');

    // res.end(JSON.stringify(data));
    // res.end(index);
});


server.listen(5000);