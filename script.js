let input= prompt("Enter a float number:");
let integer= Number(parseInt(input));
let float= input - integer;
console.log("The integer number:"+integer);
console.log("The float number:"+float.toFixed(4));