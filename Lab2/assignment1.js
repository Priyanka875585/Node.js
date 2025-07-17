const fs = require('fs'); 
const sourceFile = 'sourse.txt';
const destinationFile = 'destination.txt'; 
 
// Check if source file exists if (fs.existsSync(sourceFile))
{   
fs.readFile(sourceFile, 'utf8', (err, data) => { 
    if (err) { 
      console.error('Error reading source file:', err); 
      return; 
    } 
 
    // Write to the destination file   
fs.writeFile(destinationFile, data, (err) => { 
      if (err) { 
        console.error('Error writing to destination file:', err); 
        return; 
      } 
      console.log('File copied successfully from source.txt to destination.txt.'); 
    }); 
  }); 
} else { 
  console.error('Error: source.txt does not exist.'); 
} 
 
