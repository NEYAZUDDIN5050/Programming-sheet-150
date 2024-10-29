//Determining Even/Odd Numbers:
/*
function oddEven(num){
    for(let i=0;i<num.length;i++){
        if(num[i]%2 === 0){
            return true;
        }else{
            return false;
        }
    }
}
let num=[12356543574];
console.log(oddEven(num));
*/

//Checking prime number;
/*
function isPrime(num){
    for(let i=2;i<num.lemgth;i++){
        if(num % [i] === 0){
            return false;
        }
    }
    return true;
}
console.log(isPrime(88));
*/

// Validating[checking] Leap Years;
/*
function leapYear(year){
    let divisibleby4=(year %4 ===0);
    let divisibleby100=(year %100 ===0);
    let divisibleby400=(year %400 ===0);
    if(divisibleby4 && !divisibleby100||divisibleby400){
        return "leap Year";
    }else{
        return "not leap Year";
    }
}
let year=2025;
console.log(leapYear(year))
*/
//calculate the notes
/*
function calculateNotesAndAmount(note2000, note500, note200, note100) {
    const totalNotes = note2000 + note500 + note200 + note100; 
    const totalAmount = (note2000 * 2000) + (note500 * 500) + (note200 * 200) + (note100 * 100); 
    return { totalNotes, totalAmount };
  }

  
  // Taking input from the user for each denomination
  let note2000 = prompt("Enter the number of ₹2000 notes:");
  let note500 = prompt("Enter the number of ₹500 notes:");
  let note200 = prompt("Enter the number of ₹200 notes:");
  let note100 = prompt("Enter the number of ₹100 notes:");
  
  // Convert the inputs to integers
  note2000 = parseInt(note2000);
  note500 = parseInt(note500);
  note200 = parseInt(note200);
  note100 = parseInt(note100);
  
  // Check if the inputs are valid
  if (!isNaN(note2000) && !isNaN(note500) && !isNaN(note200) && !isNaN(note100)) {
    // Calculate the total number of notes and the total amount
    const result = calculateNotesAndAmount(note2000, note500, note200, note100);
    
    // Display the result
    console.log(`Total number of notes: ${result.totalNotes}`);
    console.log(`Total amount of money: ₹${result.totalAmount}`);
  } else {
    console.log("Please enter valid numbers for all denominations.");
  }
    */

//Calculating Armstrong Numbers[123]=[1*3,2*3,3*3];
/*
function isArmstrong(num){
    let numStr=num.toString();
    let numDigit=numStr.length;
    let sum=0;

    for(let digit of numStr){
        sum += digit ** numDigit;
    }
    return sum === num? "Armstrong Number":"Not an Armstrong Number"
}
console.log(isArmstrong(153));
*/
//***********************Generating the Fibonacci Series */
/*
function fibonacci(num){
   let fibonacciSeries=[0,1];
    for(let i=2;i<num;i++){
     fibonacciSeries[i] = fibonacciSeries[i-1]+fibonacciSeries[i-2];
    }
    return fibonacciSeries;
}
let num=10;
let result=fibonacci(num);
console.log(result);
*/
//Identifying Palindromes
/*
function palindrome(str){
    str=str.toLowerCase();
    let cleanedStr ="";
    for(let char of str){
        if((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')){
            cleanedStr += char;
        }
    }
    let reversedStr =  cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}
let str="radar";
console.log(palindrome(str));
*/
//Crafting Star Patterns;
/*
function pyramid(height){
    for(let i=1;i<=height;i++){
        let stars='*'.repeat(2 * i - 1);
        let space=''.repeat(height - i);
        console.log(space + stars);
    }
}
let patternType="pyramid";
let height=5;

if (patternType === "pyramid") {
    pyramid(height);
} 
*/
//Find the factorial;/
/*
function factorial(nums){
    let start= 1;
    for(let i=nums; i > 0; i--){
        start *= i;
    }
return start;
}
let nums = 5;  // Example input
console.log(factorial(nums));
*/
//Sum of digit number
/*
function sumAll(arr){
    number=0;
    for(let i=0;i<arr.length;i++){
        number += arr[i];
    }
    return number;
}
let arr=[2,3,4];
console.log(sumAll(arr))
*/
//
/*
let num = [1234];
let sum = 0;
while (num > 0) {
  sum += num % 10;
  num = Math.floor(num / 10);
}
console.log(sum);
*/
//Greatest common divisore[GCD]
/*
function gcd(a,b){
    if(b === 0)return a;
    
    return gcd(b, a % b);
}
console.log(gcd(20,10));
*/
//Finding the Least Common Multiple (LCM)
/*
function GCD(a,b){
    while(b !== 0){
        let temp=b;
        b= a % b;
        a = temp;
    }
    return a;
}
function LCM(a,b){
    return (a*b)/GCD(a,b);
}
let a=2;
let b=4
console.log(LCM(a,b));
*/
//find the vowel and consonent;
/*
function countVowelandConsonent(str){
    let vowel="aeiouAEIOU";
    let countVowel=0;
    let countConsonent=0;
    for(let char of str){
        if(vowel.includes(char)){
            countVowel ++;
        }else if(char >='a' && char <='z'|| char >= 'A' && char <= 'Z'){
            countConsonent ++;
        }
    }
    return `Vowels: ${countVowel}, Consonants: ${countConsonent}`;
}
console.log(countVowelandConsonent("neyaz uddin"));
*/
//Reversing a string:-
/*
let str="neyaz";
let reverseStr=str.split('').reverse().join('');
console.log(reverseStr);
*/
//Find the largest and the smallest and largest number in an array
/*
function largeAndSmallNum(array){
    let largeNum=array[0];
    let smallNum=array[0];
    for(let i=0;i<array.length;i++){
        if(array[i]>largeNum){
            largeNum=array[i];
        }
        if(array[i]<smallNum){
            smallNum=array[i];
        }
    }
    return {largeNum,smallNum};
}
let array=[4,3,2,5,6,7,1];
let result=largeAndSmallNum(array);
console.log(`largeNum: ${result.largeNum}, smallNum: ${result.smallNum}`);
*/
//sorting;
/*
function sorting(array){
    return array.sort((a,b) => (a-b))
}
let array=[3,5,67,8,9];
let result=sorting(array);
console.log(result);
*/
//bubbleSort
/*
function bubblesort(array){
    let n= array.length;
    for(let i=0;i<n-1;i++){
        for(let j=0; j<n-i-1;j++){
            if (array[j] > array[j + 1]) {
            
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}
let array=[1,3,4,5,7,9,3];
let result=bubblesort(array);
console.log(result);
*/
//SUM OF ARRAY;
/*
function Sumarray(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum +=arr[i];
    }
        return sum;
}
let arr=[2,34,4,345];
let result=Sumarray(arr);
console.log(result);
*/

//Generating Multiplication Tables
/*
function generateTable(num){
    for(let i=1;i<=10;i++){
        const result=num * i;
        console.log(`${num} x ${i} = ${result}`); 
    }
}
let num=4;
generateTable(num);
*/
//Finding Prime Numbers in a Range;
/*
function generateTable(num){  
    for(let i=1;i<=10;i++){
        const result=num * i;
        console.log(`${num} X ${i} = ${result}`);
    }
}
let num=4;
generateTable(num);
*/
//
/*
let basicSalary=("Enter the basic salary:");
let hra, da;

if(basicSalary <= 10000){
    hra = basicSalary *0.20;
    da = basicSalary * 0.80;
} else if(basicSalary<=2000){
    hra = basicSalary *0.25;
    da = basicSalary *0.90;
}else{
    hra=basicSalary * 0.30;
    da = basicSalary *0.95;
}
let grossSalary = parseFloat(basicSalary) + hra + da;
console.log(`Gross salary: ${grossSalary}`);
*/
//Find perfect Number;
/*
function primeNumber(number){
    let num=0;
    for(let i=2;i<number/2;i++){
        if(num %i===0){
            num +=1; 
        }

    }
    if(num === number){
        return "perfect Number";
    }else {
        return "Not a perfect Number";
    }
}
let number=28;
console.log(primeNumber(number))
*/
//
// Function to calculate the sum of digits of a number
