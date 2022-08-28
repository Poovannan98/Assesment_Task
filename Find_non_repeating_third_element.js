const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
  inp.on("line", (data) => {
  userInput.push(data);
});
inp.on("close", () => {
  const inputString = userInput.toString();
  const inputArray = inputString.split(',');
  console.log(inputArray);// array of given inputs
// your code goes here
var n = inputArray.length;
var result = [];
var result1 =[];

function nonrep() {
  for (var i = 0; i < n; i++) {
    var j;
    for (j = 0; j < n; j++)
      if (i != j && inputArray[i] == inputArray[j]) {
        result.push(inputArray[i]);
        break;
      }
    // if (j == n)
    //   return arr[i];
    if(i != j && inputArray[i] != inputArray[j])
    result1.push(inputArray[i]);
  }
  return [result, result1, result1[2]];

}
console.log(nonrep());
