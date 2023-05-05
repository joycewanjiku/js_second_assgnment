// write a function that takes an array of numbers
// as input and returns as the sum of all numbers
 function sumArray(numbers){
    let sum=0;

 for(let i=0;i<numbers.length; i++){
    sum+=numbers[i];
   

}
return sum
}
const numbers=[2,4,6,89,9]
const total=sumArray(numbers);
console.log(total);

// Write a function that takes two numbers as input and returns true if their sum is greater than 100,
// And false otherwise
function addNum(a,b){
    result = a+b
    if((result>100)){
        return true
    }
    else{
        return false
    }
}
console.log(addNum(200,5))
// Write a function that takes a string as input and returns the number of vowels in the string

function countvoels(word){

    let voels=["a","e","i","o","u"]
    let voel=0;
    for (let char of word){
        if(voels.includes(char)){
            voel++
        }
    }
    return voel  

}
let word = "joyce"
console.log(countvoels(word));
// // Write a function that takes in a array of numbers as a parameter and returns the second largest
// //  number in the array
function getsecondlargest(nums){
    let first=nums[0];
    let second =-1
    for(let i=0;i<nums.length;i++){
        if(nums[i]>first){
            second=first;
            first=nums[i];
        }
        if (nums[i]>second && nums[i]<first){
            second=nums[i]
        }
    }
}
return second;
let


// // Write a function that takes a string as a parameter and returns true if the string is
// //  a palindrome and false otherwise
function ceckpalindrome(string){
    const len=string.length;
    for(let i=0; i < len /2; i++){
        if(string[i]!== string[len -1-i]){
            return'it is not a palindrome';
        }
    }
    return'it is a palindrome'
}
const string=prompt('enter a string');
const value=checkpalindrome(string);
console.log(value);
