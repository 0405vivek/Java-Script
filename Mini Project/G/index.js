const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Read input
rl.question('', (input) => {
  const value = parseInt(input); // Convert the input to an integer
  console.log(value); // Print the integer value
  rl.close(); // Close the interface
});
