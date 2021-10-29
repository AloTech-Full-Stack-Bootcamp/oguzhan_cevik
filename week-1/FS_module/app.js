const fs = require('fs');
const prompt = require("prompt-sync")();
const jsonFile = {"name": "Oguz", "salary": 3000}

const number=parseInt(prompt("1-writeFile , 2-readfile, 3-updatefile, 4-deletefile"))
console.log(number)
switch (number) {
    case 1:
        // writes  employee.json 
fs.writeFile('employees.json', JSON.stringify(jsonFile, null, 2), 'utf8', (error, data) => {
    if (error === true) {
        console.log(`error: ${error}`);
    }
    console.log('done!');
});
        
        
        break;
    case 2:
        // reads employee.json
fs.readFile('employees.json', 'utf8', (error, data) => {
    if (error === true) {
        console.log(`Error: ${error}`);
    }
    console.log(data);
    console.log('Done!');
});

        break
    case 3:
        
jsonFile.name= 'Oguzhan CEVIK'; 
jsonFile.salary = 8000;

// updates file
fs.writeFile('employees.json', JSON.stringify(jsonFile, null, 2) , (error) => {
    if (error === true) {
        console.log(`Error: ${error}`);
    }
    console.log('update completed');
});

        break
    case 4:
        // deletes employee.json
fs.unlink('employees.json', (error) => {
    if (error === true) {
        console.log(`Error: ${error}`);
    }
    console.log("Done!");
});

        break        
    default:
        console.log("enter number to choose")
        break;
}









