// Given an array of strings, use a function to reverse all the elements in the
//  string in ascending order and the specific elements in descending order
function reverseSort(array){
  array=array.map(string=>string.splint("").reverse().join(""))
  array.sort((a,b)=> b.length-a.length);
return array
}
// Given an array of objects, each object representing a person with a name and
//  age property, write a function that returns the sum of all people who are less than 18 years.
functionsumUnderagePersonAges(person)
{
    const underageperson=
    people.filter(person=>person.age<18);
    constsumOfAges=
    underageperson.reduce((sum,person)=> sum+person.age0);
    return sumOfAges;
}
 const people = [
  { name: 'Alice', age: 17 },
  { name: 'Eunice', age: 22 },
   { name: 'Charlie', age: 14 },
  { name: 'Max', age: 19 },
];
console.log(sumUnderagesPersonages(person));
// Using JS functions and an array of numbers, return positive if an element
//  within the array is positive, negative if an element is negative, else zero
function numbers(Arry){
  for(i=o;i<Arry.lenght; i++){
  if(Arry[i]<0){
    return positive
    }
    else if (Arry[i]>0){
      return "negative"
    }
    else{
      return "zero"
    }
  }
    }
    console.log(numbers[-5,6,8,-43]);
  

// Given an array of objects, where each object represents an employee with 
// an id, name, and salary property, write a function that returns a new array of employee
//  objects sorted by their salary in ascending order.
Employees=[
  {
    firstName:'Joyce',
    LastName:'Mumbi',
    age:43,
    joinedDate:'December 15, 2010'
  },
  {
    firstName:'Ann',
    LastName:'Mary',
    age:45,
    joinedDate:'January 15,2012'
  },
  {
    firstName:'Susan',
    LastName:'Warimu',
    age:21,
    joinedDate:'March 15 2013'
  }
]
Employees.sort((a,b)=>{
  return a.age-b.age;
})
console.log({age});