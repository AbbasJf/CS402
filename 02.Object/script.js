// const obj2 = {
//   id: 2,
//   name: 'Isa',
//   surname: 'Yusifli',
//   age: 18,
//   position : 'Manager',
//   info: {
//     uni : 'UNEC',
//     qualification: 'Finance',
//     isAdmin: false,
//   } ,
//   address : {
//     street : 'Nevskaya',
//     city : 'Sankt-Peterburg',
//   }
// }

// console.log(obj2.name);
// console.log(obj2.surname);
// console.log(obj2.age);
// console.log(obj2.position);

// console.log(obj2.address.street);
// console.log(obj2.address.city);

// console.log(obj2.info.uni);
// console.log(obj2.info.qualification);
// console.log(obj2.info.isAdmin);

// console.log(obj2.age * obj2.id)
// console.log(obj2.age + obj2.id)

// delete obj2.info.isAdmin
// console.log(obj2.info.isAdmin)

// console.log("")



// const arr1 = [17, true, "Abbas", "Jafarov", "1"]

// console.log(arr1[1]);
// console.log(arr1[2]);
// console.log(arr1.at(1));

//  const students = [
//      { 
//          age : 10,
//          id : 4,
//          name: 'Yusif', 
//          surname: 'Yusifli',
//      }, 
//      { 
//          age : 11,
//          id : 5,
//          name: 'Nihad',
//          surname: 'Jafarov',
//      },
//      { 
//          age : 23,
//          id : 6,
//          name: 'Xeyale',
//          surname: 'Safarova'
//      },
//      { 
//          age : 11,
//          id : 5,
//          name: 'Nihad',
//          surname: 'Farzaliyev',
//      }
//  ]

// const result1 = students.findLast(item => item.name == 'Nihad')
// const result = students.find(item => item.name == 'Nihad')

// console.log(result1)
// console.log(result)

// const result = students.filter(item => item.age > 22 & item.age < 25)
// console.log(result)
// students.map((item, index) => console.log(item.name))
// students.map((item, index) => console.log(item.age))
//const numbers = [1, 2, 3, 4, 5]

// numbers.push(6)
// console.log(numbers);

// const data = [2, false, 'Abbas', null]
// data.push(2);
// data.push("Salam");
// data.push(undefined);
// data.pop(undefined);
// data.unshift('Jafarov');
// console.log(data); 

// const data = [
//     {
//         id : 1,
//         age : 15
//     },
//     {
//         id : 2, 
//         age : 25
//     },
//     {
//         id : 3,
//         age : 40
//     },
// ]

// let idFergi = 0
// let indexHasil = 0

// const result = data.map((item) => idFergi-= item.id)
// console.log(result);
// console.log(idFergi)

// const result1 = data.map((item, index) => indexHasil*= index)
// console.log(result1);
// console.log(indexHasil)
// //console.log(sum);

// const firstName = "Abbas"
// const lastName = "Jafarov"
// const age = 17

// console.log(firstName);
// console.log(lastName);
// console.log(age);

let username = "AbbasIj"
let userAge = 17
let idAdmin = true
let salary = null 
let  date = undefined