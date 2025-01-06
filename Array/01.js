Array.fromAsync(
    new Map([
      [1, 2],
      [3, 4, 5, 6],
    ]),
  ).then((array) => console.log(array));
  // [[1, 2], [3, 4]]
  
 