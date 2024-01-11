////////////// TASK 1 //////////////

// 1.Multiply 12 with 8, and console the result:

// console.log(12 * 8);

// 2.Divide 10 by 2 add result to variables x, and console x:

// const x = 10 / 2;
// console.log(x);

// 3.Create two variables called num1 and num2, assign the value 20 to num1 and value 17 to num2 then addition(+) them in console.

// const num1 = 20;
// const num2 = 17; 

// console.log(num1 + num2);

/* 4.Create variables called name, surname and year assign values to them ('your name', 'your surname', ' your birth of year'),
  then add them to varibale name (info) and console info. */

//   var name = "Abbas";
//   var surname = "Jafarov";
//   var year = "2006";

//   var info = name + ' ' + surname + ' ' + year;
//   console.log(info)


// 5.Console the remainder(%) when 17 is divided by 12.

// const remaninder = 17 % 12;
// console.log(remaninder)

// 6.Create a varibale called "city name" (camelCase). Assign value Baku, then call variable again
//  and reassign value Gence,console result.

// let cityName = "Baku";
// cityName = "Ganja";
// console.log(cityName)



////// TASK 2 //////////////

// let a = 1 
// let b = 1;
// let c = ++a;
// let d = b++;

// console.log(c); //2
// console.log(d); //1
// console.log(b); //2


////////////// TASK 3 //////////////

//  let a1 = 2;
//  let x1 = 1 + (a1 *= 2);
//  console.log(x1); //5


////////////// TASK 4 //////////////

 //console.log('test1', test); // Error verecek, cunki test kimi variable yoxdur.
 //{
 //    let test = "something"
 //    console.log('test2', test); // test2 something
 //}
 //console.log('test3', test);  // Error verecek, cunki test variable-si scope-da deil, ve burda mueyyen olmuyub.


// console.log('test1', test);  // Error verecek, cunki test kimi variable yoxdur.
// {
//     var test = "something"
//     console.log('test2', test); // test2 something
// }
// console.log('test3', test); // test3 something, burda VAR variable-si olduguna gore, scope-da olmasada global kimi verir o "something" value-ni.


////////////// TASK 5 //////////////

//Find the type of all the following cases

//  let name1 = "Ulfat"
//  let surname1 = "Zakirli" // Burda Zakirli-ni "" vermishdiz, ona gore error verir, ozum add eledim.
//  let year1 = 2000
//  year1 = "2000"
//  let city1;
//  let qualification1 = null
//  let obj1 = { name: 'ulfat' }
//  let arr = ['a', 'b', 'c']

//  console.log(typeof name1)
//  console.log(typeof surname1)
//  console.log(typeof year1)
//  console.log(typeof city1)
//  console.log(typeof qualification1)
//  console.log(typeof obj1)
//  console.log(typeof arr)

////////////// TASK 6 //////////////
// const arr1 = [9, 1, 5, 8, 9, 9, 3, 22, 11, 12, 32, 8]
// 1.Sum all the numbers in 'arr1'
// let result = arr1.reduce((a, b) => {
//     return a + b;
//   });
  
//   console.log(result);
// 2.Add two numbers (10,88) to end of arr1 (push methods)
// arr1.push(10, 88)
// 3.Remove first two numbers from arr1
// arr1.shift()
// arr1.shift()
// 4.Add three numbers (0,9,11) in front of arr1(unshift)
// arr1.unshift(0,9,11)
// 5.Remove four numbers in front of arr1(shift)
// arr1.shift()
// arr1.shift()
// arr1.shift()
// arr1.shift()

// console.log(arr1);


////////////// TASK 7 //////////////

// Burda kecmediylerimiz var, chalishacam yadda saxlamagi nece eliyirik.

//const arr2 = ["Murad", "Anar", "Rufet", 'Anar', 'Gulshen', 'Nermin', "Ilkin", "Fuad", "Anar"]
// 1.Console values from "Rufet" to "Fuad"
// console.log(arr2.slice(arr2.indexOf("Rufet"), arr2.indexOf("Fuad") + 1));
// 2.Change Gulshen to Rovshen 
// arr2[arr2.indexOf("Gulshen")] = "Rovshen";
// 3.Console each name with map
// arr2.map(name => console.log(name));
// 4.Console only names which is Anar
//console.log(arr2.filter(name => name === "Anar"));
// 5.Console all names where name is Anar change it to "Perviz"
// arr2.forEach((name, index) => {
//   if (name === "Anar") {
//     arr2[index] = "Perviz";
//   }
// });
// console.log(arr2);
// 6.Console second to last value of arr2
// console.log(arr2[arr2.length - 2]);
// 7.Console length of arr2
// console.log(arr2.length);



////////////// TASK 8 //////////////
// const arr3 = ["9", 10, 100, 11, 'true', 'undefined', true, null, 'something', false]
// (use typeof), like this: filter((item) => typeof item === 'string')

// 1.Show only numbers
// console.log(arr3.filter(item => typeof item === 'number'))
// 2.Show only true values
// const trueValues = arr3.filter(value => value === true);
// console.log(trueValues);
// 3.Show only false values
// const falseValues = arr3.filter(value => value === false);
// console.log(falseValues);
// 4.Show only strings
// console.log(arr3.filter(item => typeof item === 'string'))

////////////// TASK 8 //////////////
// const numbers = [1, 2, 4, 5, 3, 2, 5, 7, 8, 9, 11, 12, 22, 24, 25]
// 1.Console (only even numbers)
// console.log(numbers.filter(numbers => numbers % 2 == 0))
// 2.Console (only odd numbers)
//console.log(numbers.filter(numbers => numbers % 2 == 1))

////////////// TASK 9 //////////////
// const arr4 = [10, "29", 10, 100, 11, 'true', false, 'undefined', true, null, 'something', false]

// 1. Console all values of arr4 with modifications
// const modifiedArr = arr4.map(value => {
//   if (typeof value === 'number') {
//     return value + 10;
//   } else if (typeof value === 'string') {
//     return `${value} is string`;
//   } else {
//     return `${value} is falsy value`;
//   }
// });
// console.log(modifiedArr);

// 2. Sum all numbers of arr4
// const sumOfNumbers = arr4.reduce((accumulator, currentValue) => {
//   if (typeof currentValue === 'number') {
//     return accumulator + currentValue;
//   } else {
//     return accumulator;
//   }
// }, 0);
// console.log(sumOfNumbers);

// 3. Count only the values that are true
// const countTrueValues = arr4.filter(value => value === true).length;
// console.log(countTrueValues);

// 4. Count only the values that are string
// const countStringValues = arr4.filter(value => typeof value === 'string').length;
// console.log(countStringValues);

// 5. Count only the values that are false
// const countFalseValues = arr4.filter(value => value === false).length;
// console.log(countFalseValues);


////////////// TASK 10 //////////////
// 1.Create a object add your name, surname, age and city.
// 2.Then change name to "Jhon"

// const obj = {
//     email: 'ulfat@gmail.com',
//     info: {
//         gender: 'Male',
//         loc: {
//             city: "Baku",
//             street: 'Nizami 22',
//             education: {
//                 "uni name": "ADNSU",
//             }
//         }
//     }
// }

//  3.Console gender
// console.log(obj.info.gender);
//  4.Console city
// console.log(obj.info.loc.city);
//  5.Console uni name
// console.log(obj.info.loc.education["uni name"]);