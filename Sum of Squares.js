const input = require("readline-sync");
let n = input.questionInt("enter the value :");
let s = 0;
let c;
let i = 0; 
while (i<=n)
 {
   c = i**2;
   s = s+c; 
   i++;   
} 
console.log(s);

