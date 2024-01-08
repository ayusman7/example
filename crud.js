const fs=require('fs');
const readline = require('readline');

let name,age;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (answer) => {
    name=answer;
  console.log(`Hello, ${answer}!`);
  fs.appendFile("./name.txt",name+" ",(err)=>{
    console.log("Your name Inserted into the file");
   console.log("After fetching whole data from the file");
   fs.readFile('./name.txt','utf8',(err,data)=>{
 
   })
})
 rl.close();
});





