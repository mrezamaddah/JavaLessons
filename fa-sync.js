// structure right away the methods
const {readFileSync, writeFileSync, fstat}=require('fs');


const first= readFileSync('./content/first.txt','utf8');
const second=readFileSync('./content/second.txt','utf8');

console.log(first, second);


writeFileSync('./content/result-sync.txt',`Hello this is the result: 
${first} ${second}`,{flag:'a'});