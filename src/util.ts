
const fs = require("fs");

export const read = fs.readFile("src/data.json", function(err: string, data: string) { 
      
    // Check for errors 
    if (err) throw err; 
   
    // Converting to JSON 
    const users = JSON.parse(data); 
      
    console.log(users); // Print users  
    return users;

}); 

export const write = fs.writeFile("src/data.json", function(err, data){
    if (err) throw err;

});
 