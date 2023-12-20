function multiply(n1,n2) {
    return n1 * n2;
}

let x= multiply(10 , 200);
console.log(x);

const sum = (n1 , n2)=> n1 + n2;

console.log(sum(20,100)); 
 
area = (function(){
    return Math.PI * 5 * 5
})();
console.log(area);

const myBuffer = Buffer.from('hello, world');

const slice = myBuffer.slice(0,5);

console.log(slice.toString());