const fs = require ("fs");

const filename = "sample.txt";

fs.readFile(filename,"utf8",(err,data)=>{
    if(err){
        console.error("Error reading file:", err);
        return;
    }
    
    console.log("The connection was esatablished, the file can now be accessed");
    
    const words = data.split(/\s+/).filter(word => word.length > 0);
    console.log(`The number of words in the file is ${words.length}`);
});