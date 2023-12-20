const http = require('http');
const fs = require('fs');
// const { json } = require('stream/consumers');


const index = fs.readFileSync('index.html', 'utf-8');
const jsonData = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const demo = fs.readFileSync('demo.txt', 'utf-8');
const about = fs.readFileSync('about.html', 'utf-8');
const file = fs.readFileSync('file.txt', 'utf-8');
const products = jsonData.products[0];

const data = { age: 5 };
const server = http.createServer((req, res) => {
    const t1 = performance.now();
    console.log(req.url);

    switch (req.url) {
        case '/':
            res.setHeader('cotent-type', 'text/html');
            res.end(index);
            break;

        case '/api':
            res.setHeader('content-type', 'application/JSON');
            res.end(JSON.stringify(jsonData));
            break;
        case '/demo':
            res.setHeader('content-type', 'demo-txt');
            res.end(demo);
            break;
        case '/about':
            res.setHeader('content-type', 'text/html');
            res.end();
            break;
        case '/product':
            res.setHeader('content-type', 'text/html');
            let modifiedindex = index.replace('TITLE',products.title);
            res.end(modifiedindex);
            break;
        //  case '/file':
        //             res.setHeader('content-type','text/html');
        //             res.end(file);  
        //             break;  
        default:
            res.writeHead(404, 'NOT FOUND');
            res.end();
    }

    console.log("server started!!");
    const t2 = performance.now();
    console.log(t2 - t1);
    // res.setHeader('heading', 'info');

    // res.setHeader('content-type','application/JSON');

    // res.setHeader('content-type','text/html');

    // res.end(JSON.stringify(data));
    // res.end(index);
});


server.listen(5000);