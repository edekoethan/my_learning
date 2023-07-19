//JSON JavaScript Object Notation
/*
*JSON stands for JavaScript Object Notation.
*he JSON syntax is derived from JavaScript object notation syntax
*but the JSON format is text or string only
*JSON is a light weight data format for storing and transporting. JSON is mostly used when data is sent from a server to a client. JSON is an easier-to-use alternative to XML.
*/

//Example:

  //converting JSON to object
console.clear()
/*google interview easy
//let n = [2, 5, 7, 9]
//let static = 9
function findArrStaticIndexes(n, static){
    indexes = []
 for (i = 0 ; i < n.length ; i++){
    for (j = i + 1; j < n.length ; j++){

         if (n[i] + n[j] === static){
            indexes.push(i, j)
         }
    }
 }
 return indexes
}

let n = [2, 5, 7, 9]
let static = 14

console.log(findArrStaticIndexes(n, static)) */


//write a function that produces a random matrix based on the arguments given
//eg console.log(myRandomMatrix(3, 4))
/*
[2, 4, 8, 7]
[5, 7, 9, 3]
[2, 9, 6, 7]
*/
//quick test
/*
function myRandomMatrix(rows, columns) {
    const matrix = [];
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < columns; j++) {
        row.push(Math.floor(Math.random() * 10));
      }
      matrix.push(row);
    }
    return matrix;
  }
  
  // Example usage:
  const randomMatrix = myRandomMatrix(3, 4);
  randomMatrix.forEach(row => {
    console.log(row);
  });
  */