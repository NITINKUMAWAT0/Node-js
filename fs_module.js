const fs = require('fs');
const t1 = performance.now();
// const txt = fs.readFileSync('demo.txt','utf-8');
// console.log(txt);
fs.readFile('demo.txt', 'utf-8', (err, txt) => {
    if (err) {
        console.log("error!!");
    }
    else{
        console.log(txt);
    }
  
}); 

const t2 = performance.now();
console.log(t2 - t1);

fs.writeFile('file.txt', 'wertyuikjhgfdfghuyfdsdcfghjuytfrdvbnjhgfdcvbnjkiutrdcvbhjuytredxcvbhjuytrdcvbhjiuytredcfghui8', (err) => {});

// 1.2822999954223633 - callbacks are faster then promises...!!
// 18.05469998717308 - promises are slower then callbacks...!!
fs.appendFile('file.txt',' hehehehehehehhehehehehhehehheheh',(err)=>{});