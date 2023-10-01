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

function filterArray(numbers, value) {
  const filteredNumbers = [];
  // Change code below this line

  numbers.forEach((numbers, index) => {
    
    number>value ? filteredNumbers.push(numbers[i]) : break 

  });
  
  





// function filterArray(numbers, value) {
//   // const filteredNumbers = [];
// this.forEach((function (number, index){
//   filteredNumbers.push(numbers[i]));






  
  // Change code below this line

  // for (let i = 0; i < numbers.length; i += 1) {
  //   if (numbers[i] > value) {
  //     filteredNumbers.push(numbers[i]);
  //   }
  // }

  // Change code above this line
  console.log(filteredNumbers) ;
}


filterArray([1, 2, 3, 4, 5], 3)
filterArray([1, 2, 3, 4, 5], 4) 
 filterArray([1, 2, 3, 4, 5], 5) 
 filterArray([12, 24, 8, 41, 76], 38) 
 filterArray([12, 24, 8, 41, 76], 20) 