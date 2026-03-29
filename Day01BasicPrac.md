# Day01
## html
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div class="div-1">
      <h2>Hello this is para</h2>
      <p id="name"></p>
      <p id="age"></p>
  </div>

  <div class="swap-div">
     <p id="swap nums1"></p>
     <p id="swap nums2"></p>
  </div>

  <div class="largest-num">
    <p id="large-num"></p>
    <p id="sumN"></p>
    <p id="factorial"></p>
  </div>

  <div class="array-div">
    <p id="print-arr1"></p>
    <p id="reverse-arr1"></p>
    <p id="highest-num"></p>
    <p id="lowest-num"></p>
  </div>

  <div class="vowel-count">
    <p id="v-count"></p>
  </div>
</body>
</html>
```
- above isn't have script tag because of JsFiddle
## js

```
let name = "Piba";
let age = 23;

document.getElementById("name").innerHTML= name;
document.getElementById("age").innerHTML= age;

let a = 2;
let b = 4;

let temp = a;
a = b;
b= temp;

document.getElementById("swap nums1").innerHTML = a;
document.getElementById("swap nums2").innerHTML = b;


//largest number
let c = 67, d = 77, e = 23;

let lar = largestNum(c,d,e);


function largestNum(a, b, c){
  if(a > b && a > c){
    return a;
  }
  else if(b > a && b > c){
    return b;
  }
  else{
  return c;
  }
}

document.getElementById("large-num").innerHTML = lar;

// sum of n terms

let n = 5;
let sum = 0;


for(let i = 0; i <= n ; i++){
  sum += i;
}

document.getElementById("sumN").innerHTML = sum;

//factorial

function factorial(n){
  let result = 1;

  for( let i = 1; i <= n; i++){
    result *= i;
  }
  return result;
}

document.getElementById("factorial").innerHTML = factorial(5);

//printing all element in an array
let arr1 = [1,2,3,4,5];
let text = "";
for(const x of arr1){
text += x + "<br>";
}

let reversed = "";
for(let i = arr1.length - 1; i >= 0; i--){
  reversed += arr1[i] + "<br>" ;
}

//highest
function highestInArr(arr){
  return Math.max.apply(null, arr);
}

function lowestInArr(arr){
  return Math.min.apply(null, arr);
}

document.getElementById("print-arr1").innerHTML= text;
document.getElementById("reverse-arr1").innerHTML= reversed;
document.getElementById("highest-num").innerHTML = highestInArr(arr1);
document.getElementById("lowest-num").innerHTML = lowestInArr(arr1);


//counting vowel
let str = "javascriptui";
let vowel ="aeiou";
let count = 0;

//method 1
// for(let x of str.toLowerCase()){
//   if(vowel.includes(x)){
//     count++;
//   }
// }

//method2
for(let i = 0; i <=str.length -1 ; i++){
let ch = str[i];
if(ch === 'a' ||
   ch === 'e' ||
   ch === 'i' ||
   ch === 'o' ||
   ch === 'u'){
    count++;
   }
}
document.getElementById("v-count").innerHTML = count;

```
