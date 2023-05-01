console.log("hii");

findMissingLetterIn = (givenLetters) => 
{
  let alpha = "abcdefghijklmnopqrsuvwxyz";
  let start = alpha.indexOf(givenLetters[0]);
  // console.log(start)
  for ( let i = 0 ; i< givenLetters.length; i++){
    // console.log(alpha[start+i])
    if(givenLetters[i] !== alpha[start + i])
    return alpha[start + i]
  }
return "No Missing Letter In Sequence "
}
document.querySelector('h1').style.fontSize = '100px'

console.log(findMissingLetterIn("defgi")); // h
console.log(findMissingLetterIn("abcdeghi")); // f
console.log(findMissingLetterIn("xyz")); // No Missing Letter In Sequence
console.log(findMissingLetterIn("qrsv"))








//function findMissingLetterIn (givenLetters){
//   let alpha = "abcdefghijklmnopqrseuvwxyz";
//   let start = alpha.indexOf(givenLetters[0]);
//   // console.log(start);

//   for ( let i = 0 ; i < givenLetters.length ; i++ ){
//     // console.log(alpha[start + i]);

//     if(givenLetters [i] !== alpha[start + i])
//     return alpha[start + i]
//   }
//   return "no Missing Letter In Sequence"
// }




// function getFirstValue(arr) {
//   // let arr= [1,2,3]
//   let ar =[1, 2, 3];
//   console.log(ar[0])
//   return ar[0]

//   // let start = ar.indexOf(ar[0]);
// 	// for (let i = 0 ; i< ar.length ; i++)
//   // if (ar[i] )
// //  console.log(arr[i])

// }
function getFirstValue(arr) {
let start = arr[0];
console.log(start)
return start
}

getFirstValue([1, 2, 3])// ➞ 1

getFirstValue([80, 5, 100])// ➞ 80

getFirstValue([-500, 0, 50])// ➞ -500





function addition(a, b) {
  let num1 = a
  let num2 = b
	let sum =num1 + num2

  console.log(sum)
  return sum
}
addition(3, 2) //➞ 5

addition(-3, -6) //➞ -9

addition(7, 3)

addition(6, 7)



function calcAge(age) {
	let ageByDay = age*365
  console.log(ageByDay)
	return ageByDay
  
}
calcAge(65)// ➞ 23725

calcAge(0)//➞ 0

calcAge(20)// ➞ 7300
calcAge(27)


// //////////////////////////////////

// a = 100
// b = 200
// a, b = swap(a, b)
// print(a, b)


function swap(a, b) {

	b == a
  a == b

  console.log([b, a])
	return [b, a]
}

swap(100, 200) //➞ [200, 100]

swap(44, 33) //➞ [33, 44]

swap(21, 12)

// ///////////////////////////////////////////////////

function convert(minutes) {
	let suc= minutes*60
  console.log(suc)
  return suc
}

convert(5) //➞ 300

convert(3) //➞ 180

convert(2) //➞ 120
////////////////////////////////////////////
function remainder(x, y) {
	let a = x%y
	return a
}
remainder(1, 3) //➞ 1

remainder(3, 4) //➞ 3

remainder(-9, 45)// ➞ -9

remainder(5, 5) //➞ 0

///////////////////////////////////////////////////
function nextEdge(side1, side2) {
	let a = side1
	let b = side2
	let c = 1
	return a+b-c
}



nextEdge(8, 10) //➞ 17

nextEdge(5, 7) //➞ 11

nextEdge(9, 2) //➞ 10
console.log("##################################")
////////////////////////////////////////////////////
function invertArray(arr) {
	let a = arr
  if (a !== -1 ){
    a * -1
  }
  else{
    a* +1
  }
  console.log(a)
}


invertArray([1, 2, 3, 4, 5]) //➞ [-1, -2, -3, -4, -5]

invertArray([1, -2, 3, -4, 5]) //➞ [-1, 2, -3, 4, -5]

invertArray([])// ➞// []


console.log("a" < "b")

let myArray = ['w',25,'j' , "l", 522 , 't']
console.log(myArray);

myArray.unshift(5)
console.log(myArray);

myArray.shift()
console.log(myArray);

myArray.push(33)

myArray.pop()
console.log(myArray);


let t = myArray.join(" ; ")
console.log(t);

let c =  myArray.slice(1,5)
console.log(c);

myArray.splice(0,2)
console.log(myArray);

// Remove 4 elements starting from index 2, and insert there strings
// "hi","wr" and "ld"; return removed subarray
myArray.splice(2,4,"hi","wr","ld");
console.log(myArray);


const cars = ["BMW", "Volvo", "Saab", "Ford"];
let i = 0;
let text = "";

for (;cars[i];) {
  text += cars[i];
  i++;
}
console.log(cars+[i])

const carss = ["BMW", "Volvo", "Saab", "Ford"];
let ii = 0;
let textt = "";

while (cars[ii]) {
  text += cars[ii];
  ii++;
}
console.log(carss+[ii]);


function getFirstValue(arr) {
	let aa = arr
  console.log(arr [0])
	return arr [1]
}

getFirstValue([1, 2, 3]) //➞ 1

getFirstValue([80, 5, 100]) //➞ 80

getFirstValue([-500, 0, 50]) //➞ -500


function giveMeSomething(a) {
  console.log("something " + a)
	return "something " + a;
  
}

giveMeSomething("is better than nothing") //➞ "something is better than nothing"

giveMeSomething("Bob Jane")//➞ "something Bob Jane"

giveMeSomething("something")// ➞ "something something"



function lessThanOrEqualToZero(num) {
	if( num <= 0){
    console.log(true)
    return true
  }
  else{ 
    console.log(false)
    return false}
}
lessThanOrEqualToZero(5) //➞ false

lessThanOrEqualToZero(0) //➞ true

lessThanOrEqualToZero(-2) //➞ true



console.log(11111111111111111111111111111111111111111)



function lessThan100(a, b) {
	if (a+b < 100)
  {console.log(true)
  return true}
  else{console.log(false)
  return false}
}

lessThan100(22, 15) //➞ true
// 22 + 15 = 37

lessThan100(83, 34) //➞ false
// 83 + 34 = 117

lessThan100(3, 77) //➞ true

///////////////////////////////////////

function addition(a, b) {
  console.log(a+b)
return (a+b)
	
}
addition(3, 2) //➞ 5

addition(-3, -6)// ➞ -9

addition(7, 3) //➞ 10
///////////////////////////////////////

function lessThanOrEqualToZero(num) {
	if(num >0 )
  {console.log(false)
    return false}
  else{ console.log(true)
    return true}
}
lessThanOrEqualToZero(5) //➞ false

lessThanOrEqualToZero(0)//➞ true

lessThanOrEqualToZero(-2) //➞ true





















