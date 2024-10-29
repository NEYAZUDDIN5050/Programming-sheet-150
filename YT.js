/*function sum(a,b){
    let sum=a+b;
  
    console.log(sum);
}
sum(1,2);
*/
//Are Rectangle
/*
function rectangle(length,width){
    if(length<0){
        throw new Error("length is positive");
    }
    if(width<0){
        throw new Error("length is positive");
    }
    let  area= length*width;
    console.log(area);
}
rectangle(5,5)
rectangle(-3,3)
*/
//Write a function that tells if a given number is even or odd
/*function evenOdd(a){
    let num =a%2;
    if(num === 0){
        return "even";
    }else{
        return "odd";
    }
}
console.log(evenOdd(4));
console.log(evenOdd(-999))
console.log("0 is",evenOdd(0))
*/
//One line code;
/*
function evenOdd(a){
    return a % 2 === 0 ? "even" : "odd";
}
console.log(evenOdd(4));
console.log(evenOdd(-999))
console.log("0 is",evenOdd(0))
*/
//write a function that finds and prints the smallest number among three given number

/*function smallestOfThree(a,b,c){
  if(a<b && a<c){
    return a;
  }
  else if(b<a && b<c){
    return b;
  }
  else if(c<a && c<b){
    return c;
  }
}
console.log(smallestOfThree(2,1,4))
*/
/*
function smallestNum(a,b,c){
    let smallest=a;
    if(b<smallest){
        smallest=b;
    }
    if(c<smallest){
        smallest=c;
    }
    return smallest;
}
console.log(smallestNum(4,32,1));
*/
//reverse a string;
/*
function reverse(str){
    let result="";
    for(let i=str.length-1;i>=0;i--){
        result= result+str[i];
    }
    return result;
}
console.log(reverse("Neyaz"))
*/
//reverse string
/*
function reverse(str){
    if(typeof str !=='string'){
        throw new Error("Only string are Allowed");
    }
    return str.split('').reverse().join('');
}
let inputString="1245"
let reversed = reverse(inputString);
console.log(`The reversed string is: ${reversed}`);
*/

/*
function findFactorial(num){
    let number=1;
    for(let i=1;i<=num;i++){
        number=number*i;
    }
    return number;
}
console.log(findFactorial(5))
*/
/*
function factorial(number){
    if(number < 0){
        throw new Error("number should be");
    }
    let result=1;
    for(let i=1;i<=number;i++){
    result=result*i; 
    }
    return result;
}
console.log(factorial(5));
console.log(factorial(10));
console.log(factorial(-1));
*/
/*
function recurssionFactorial(num){
    console.log('num is', num)
    if(num === 0 || num === 1){
        return 1;
    }
    return num*recurssionFactorial(num-1);
    
}
console.log(recurssionFactorial(5))
*/
//leap year;
/*
function isleapYear(year){
    let divisibleBy4=(year%4);
    let divisibleBy100=(year%100);
    let divisibleby400=(year%400);
  if(divisibleBy4&&(!divisibleBy100||divisibleby400)){
    return true;
  }
  else{
    return false;
  }
}
console.log(isleapYear(2022))
*/
//Sum of all number
/*
function sumNumber(num){
    if(num<1){
        throw new Error("input must be a positive")

    }
    let numToString=num.toString();
    let splitString=numToString.split('');
    console.log(splitString);
    let sumOfDigits= 0;
    splitString.forEach( num => {
        sumOfDigits=sumNumber+parseInt(num);
        
    })
    return sumOfDigits;
}
console.log(sumNumber(1234))
*/
//find the vowel and consonent;
/*
function findVowelAndConsonent(str){
   console.log(str)
   let vowelStr="aeiou";
   let consonentStr="bcdfghjklmnpqrstvwxyz";
   
   let vowel=0;
   let consonent=0;
   for(let i=0;i<str.length;i++){
    if(vowelStr.includes(str[i])){
        vowel++;
    }
    else if(consonentStr.includes(str[i])){
        consonent++;
    }
    console.log(str[i])
   }
   return {vowel,consonent};
}

console.log(findVowelAndConsonent("neyaz"));
*/
//Write table;
/*
function table(num,result){
    for(let i=1;i<=result;i++){
        console.log(i*num);
    }
}
table(5,10);
*/
//Average of set of number;
/*
  function average(num){
    let sumOfElement =0;
   for(let i=0;i<num.length;i++){
    console.log(num[i]);
    sumOfElement=sumOfElement+ num[i];
           }    
           console.log(sumOfElement/num.length);                  
           }
           console.log("[1,2,4]",average([1,2,4]));
*/
//Max number in an array;
/*
function maxNum(array) {
  console.log(array);
  let biggestNumber = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > biggestNumber) {
      biggestNumber = array[i];
    }
  }
  return biggestNumber;
}
console.log(maxNum([1, 3, 4, 5, 6, 7]));
console.log(maxNum([8, 9, 4, 5, 6, 7]));
console.log(maxNum([]));
*/
//write Palindrome
/*
function isPalindrome(str){

    for(let i=0;i<=str.length-1;i++){
        if(str[i] !== str[str.length-1-i]){
            return false;
        }else{
            return true;
        }
       
    }
        //console.log(str)
    }
console.log(isPalindrome("madam"))
*/
//Given number to a specified power;
/*
function numPower(num,power){
    let number=1
    for(let i=1;i<=power;i++){
        console.log(number)
        number=number*num;
    }
    return number;
}
console.log(numPower(2,3))
console.log(numPower(2,"rbgrt  "))
*/
//simple intrest
/*
function calculateSimpleInterest(principalAmount,interestRateYearly,durationInYear){
    let result=principalAmount*interestRateYearly*durationInYear;
    let simpleInterest=result/100;
   
    return simpleInterest
}
console.log(calculateSimpleInterest(1000,5,1));
*/
//Find prime number
/*
function isPrimeNum(num){
    let result =true;
  for(let i=2;i<num;i++){
    console.log(num%i);
    if(num%i===0){
        result =false;
        break;
    }
  }
  return result;
}
console.log(isPrimeNum(8));
console.log(isPrimeNum(12));
console.log(isPrimeNum(11));
*/
//sentence word output;
/*
function CountWord(str){
    let splittedSentence=str.split(' ');
        console.log(splittedSentence);
        return splittedSentence.length;
    }

console.log(CountWord("neyaz is the best"));
*/
//write function change Celsius to fahrenheit
/*
function celsiustofahrenheit(celsius){
    let result=(celsius*9/5)+32;
      result=Math.round(result);
    return result;
} 
console.log(celsiustofahrenheit(27))
*/
//Swap number;
/*
let a=4;
let b=5;
console.log(a,b);
let c=b;

b=a;
a=c;
console.log(a,b)
*/
//Number is Armstrong or not //Problem
/*
function isArmstrong(num){

    for
    console.log(num);
}

console.log(isArmstrong(153));
*/
//Fizz Buzz Problem;
/*
function writeFizzBuzz(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
writeFizzBuzz(1000);
*/
//Number pyramids
/*
function numPyramid(num) {
  //validate that input num is a positive number
  console.log(num);
  for (let i = 1; i <= num; i++) {
    let lineContent = "";
    for (let space = 1; space <= num - i; space++) {
      lineContent = lineContent + " ";
    }
    for (let count = 1; count <= i; count++) {
      lineContent = lineContent + count;
    }
    for (let reverseCount = i - 1; reverseCount >= 1; reverseCount--) {
      lineContent = lineContent + reverseCount;
    }
    console.log(lineContent);
  }
}
numPyramid(5);
*/
//write a number of word on it;
//We use here the  object to count the number;
function countNum(str) {
  let number = {};
  for (let i = 0; i < str.length; i++) {
    if (!number[str[i]]) {
      number[str[i]] = 0;
    }
    number[str[i]] = number[str[i]] + 1;
  }
  console.log(str);
}
countNum("num");

/*
function findNumWord(str) {
  const result = {};
  str = str.toLowerCase();
  console.log("result ", result);
  for (let i = 0; i < str.length; i++) {
    if (!result[str[i]]) {
      result[str[i]] = 0;
    }
    result[str[i]] = result[str[i]] + 1;
  }
  console.log("result after", result);
}
findNumWord("Sayara Amin");
*/
//find alphabetic order;
/*
function isAlphabetic(str) {
  str = str.replace(/ /g, "");
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] > str[i + 1]) {
      return false;
    }
  }
  return true;
}
console.log(isAlphabetic("abcdefghu"));
*/
