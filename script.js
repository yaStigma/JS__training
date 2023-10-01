// function greet(name) {
//   console.log(`Ласкаво просимо ${name}.`);
// }

// // Функція вищого порядку
// function registerGuest(name, callback) {
//   console.log(`Реєструємо гостя ${name}.`);
//   callback(name);
// }

// registerGuest("Манго", greet);




// function registerGuest(name, callback) {
//   console.log(`Реєструємо гостя ${name}.`);
//   callback(name);
// }

// // Передаємо інлайн функцію greet у якості колбека
// registerGuest("Манго", function greet(name) {
//   console.log(`Ласкаво просимо ${name}.`);
// });

// // Передаємо інлайн функцію notify у якості колбека
// registerGuest("Полі", function notify(name) {
//   console.log(`Шановний(а) ${name}, ваш номер буде готовий за 30 хвилин.`);
// });

// function repeatLog(n) {
//   for (let i = 0; i < n; i += 1) {
//     console.log(i);
//   }
// }

// repeatLog(5);

// const numbers = [5, 10, 15, 20, 25];

// // // Класичний for
// // for (let i = 0; i < numbers.length; i += 1) {
// //   console.log(`Індекс ${i}, значення ${numbers[i]}`);
// // }

// // Метод перебирання forEach
// numbers.forEach(function (number, index) {
//   console.log(`Індекс ${index}, значення ${number}`);
// });

// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];

// const names = students.map(student => student.name);
// console.log(names); 


// const total = [2, 7, 5, 14, 6].reduce((previousValue, number) => {
//   return previousValue + number;
// }, 0);

// console.log(total);


// Задача 6

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//   numbers.forEach((number, i) => {
    
//     if (numbers[i] > value) {
//           filteredNumbers.push(numbers[i]);
//         }

//   });
  
//   console.log(filteredNumbers) ;
// }



// filterArray([1, 2, 3, 4, 5], 3)
// filterArray([1, 2, 3, 4, 5], 4) 
//  filterArray([1, 2, 3, 4, 5], 5) 
//  filterArray([12, 24, 8, 41, 76], 38) 
//  filterArray([12, 24, 8, 41, 76], 20) 

// TASK 7

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];

//   // for (let i = 0; i < firstArray.length; i += 1) {
    
//   // }
//   firstArray.forEach((Array, i) => {
//     if (secondArray.includes(firstArray[i])) {
//       commonElements.push(firstArray[i]);
//     }
//   });
//   console.log (commonElements)  ;

// }

// getCommonElements([1, 2, 3], [2, 4]); //повертає [2]
// getCommonElements([1, 2, 3], [2, 1, 17, 19]); //повертає [1, 2]
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]); // повертає [12, 27, 3]
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]); //повертає [10, 30, 40]
// getCommonElements([1, 2, 3], [10, 20, 30]); //повертає []

//     TASK 10

// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach((item) => {
//     totalPrice += item;
//   });

// console.log(totalPrice) ;
// }

// calculateTotalPrice([12, 85, 37, 4]) //повертає 138
// calculateTotalPrice([164, 48, 291]) //повертає 503
// calculateTotalPrice([412, 371, 94, 63, 176]) //повертає 1116

//      TASK 11


// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach( (number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });


//   console.log(filteredNumbers);
// }

// filterArray([1, 2, 3, 4, 5], 3) // повертає [4, 5]
// filterArray([1, 2, 3, 4, 5], 4) //повертає [5]
// filterArray([1, 2, 3, 4, 5], 5) //повертає []
// filterArray([12, 24, 8, 41, 76], 38) //повертає [41, 76]
// filterArray([12, 24, 8, 41, 76], 20) //повертає [24, 41, 76]


// function changeEven(numbers, value) {
//   // Change code below this line
//   const newNumbers = [];
 
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       newNumbers.push(numbers[i] + value);
//     } else {newNumbers.push(numbers[i])

//     } 
//   }
//     console.log(numbers);
//     console.log(newNumbers);

//   // Change code above this line
// }


// // function changeEven(numbers, value) {
// //   // Change code below this line
// //   for (let i = 0; i < numbers.length; i += 1) {
// //     if (numbers[i] % 2 === 0) {
// //       numbers[i] = numbers[i] + value;
// //     }
// //    console.log(numbers)
// //   }  
// //    ;
// //   // Change code above this line
// // }


// changeEven([1, 2, 3, 4, 5], 10)
// changeEven([2, 8, 3, 7, 4, 6], 10) 
// changeEven([17, 24, 68, 31, 42], 100) 
// changeEven([44, 13, 81, 92, 36, 54], 100)

//task 14

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];

// // const planetsLengths = planets.map(planet => planet.length());

// const planetsLengths = planets.map(planet => planet.length);

// console.log(planets);
// console.log(planetsLengths);

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];

// const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
// console.log(planetsInUpperCase); // ["EARTH", "MARS", "VENUS", "JUPITER"]

// const planetsInLowerCase = planets.map(planet => planet.toLowerCase());
// console.log(planetsInLowerCase); // ["earth", "mars", "venus", "jupiter"]

// // Оригінальний масив не змінився
// console.log(planets); // ["Earth", "Mars", "Venus", "Jupiter"]