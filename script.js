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

//

// task 19

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter(number => number%2===0);
// const oddNumbers = numbers.filter(number => number%2!==0);;

// console.log(evenNumbers);
// console.log(oddNumbers);
// console.log(numbers);

// task 20


// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       genres: ["adventure", "history"],
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       genres: ["fiction", "mysticism"],
//     },
//     {
//       title: "Redder Than Blood",
//       author: "Tanith Lee",
//       genres: ["horror", "mysticism", "adventure"],
//     },
//   ];
//   // Change code below this line
//   const allGenres = books.flatMap(book => book.genres);
//   const uniqueGenres = allGenres.filter(
//     (book, index, array) => array.indexOf(book) === index
//   );

//   console.log(allGenres);
// console.log(uniqueGenres);

// task 25

// const user = [
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       gender: "male",
//       age: 37
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       gender: "female",
//       age: 34
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       gender: "male",
//       age: 24
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       gender: "female",
//       age: 21
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       isActive: true,
//       balance: 3951,
//       gender: "male",
//       age: 27
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       isActive: false,
//       balance: 1498,
//       gender: "male",
//       age: 38
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       gender: "female",
//       age: 39
//     }
//   ]

//   const getFriends = (users) => {
//     const allFriends = users.flatMap(user => user.friends);
// //    const uniqueFriends = allFriends.filter(
// //      (user, index, array) => array.indexOf(user) === index
// //    );
// //    return allFriends;
//    console.log(allFriends);
  
//  };



//   console.log(getFriends);


// task 28

// const books = [
//     {
//       title: 'The Last Kingdom',
//       author: 'Bernard Cornwell',
//       rating: 8.38,
//     },
//     {
//       title: 'Beside Still Waters',
//       author: 'Robert Sheckley',
//       rating: 8.51,
//     },
//     {
//       title: 'The Dream of a Ridiculous Man',
//       author: 'Fyodor Dostoevsky',
//       rating: 7.75,
//     },
//     { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   ];
//   const BOOK_TITLE = 'The Dream of a Ridiculous Man';
//   const AUTHOR = 'Robert Sheckley';
//   // Change code below this line
  
//   const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
//   const bookByAuthor = books.find((book) => book.author === AUTHOR);
   
//   console.log(bookWithTitle);
//   console.log(bookByAuthor);


// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every((value) => value %2 === 0);
// const eachElementInFirstIsOdd = firstArray.every((value) => value %2 !== 0);

// const eachElementInSecondIsEven = secondArray.every((value) => value %2 === 0);
// const eachElementInSecondIsOdd = secondArray.every((value) => value %2 !== 0);

// const eachElementInThirdIsEven = thirdArray.every((value) => value %2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every((value) => value %2 !== 0);

//   console.log(eachElementInFirstIsEven);
//   console.log(eachElementInFirstIsOdd);

//   console.log(eachElementInSecondIsEven);
//   console.log(eachElementInSecondIsOdd);

//   console.log(eachElementInThirdIsEven);
//   console.log(eachElementInThirdIsOdd);

// task 32
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change below this line

// const anyElementInFirstIsEven = firstArray.some(Array => Array%2 === 0);
// const anyElementInFirstIsOdd = firstArray.some(Array => Array%2 !== 0);

// const anyElementInSecondIsEven = secondArray.some(Array => Array%2 === 0);
// const anyElementInSecondIsOdd = secondArray.some(Array => Array%2 !== 0);

// const anyElementInThirdIsEven = thirdArray.some(Array => Array%2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some(Array => Array%2 !== 0);

//   console.log(anyElementInFirstIsEven);
//   console.log(anyElementInFirstIsOdd);

//   console.log(anyElementInSecondIsEven);
//   console.log(anyElementInSecondIsOdd);

//   console.log(anyElementInThirdIsEven);
//   console.log(anyElementInThirdIsOdd);


// task 34

// const players = {
//     mango: 1270,
//     poly: 468,
//     ajax: 710,
//     kiwi: 244
//   };
//   const playtimes = Object.values(players); // [1270, 468, 710, 244]
//   // Change code below this line
  
//   const totalPlayTime = playtimes.reduce((previousValue, number) => {
//     return previousValue + number;
//   }, 0);;
  
//   // Change code above this line
//   const averagePlayTime = totalPlayTime / playtimes.length;

//   console.log(totalPlayTime);

//     console.log(playtimes);
//     console.log(averagePlayTime);

// task 35

// const players = [
//     { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//     { name: "Poly", playtime: 469, gamesPlayed: 2 },
//     { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//     { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
//   ];
//   // Change code below this line
//   const totalAveragePlaytimePerGame = players.reduce((total, player) => {
   
//      console.log (total+(player.playtime / player.gamesPlayed));
    
      
//     },0);
    
  


// const users = [
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       gender: "male"
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       gender: "female"
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       gender: "male"
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       gender: "female"
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       isActive: true,
//       balance: 3951,
//       gender: "male"
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       isActive: false,
//       balance: 1498,
//       gender: "male"
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       gender: "female"
//     }
//   ]

//   const calculateTotalBalance = users => {
//    const a = users.reduce((totalBalance, user) => totalBalance + user.balance, 0);
//    return a;
// };
  
// console.log(calculateTotalBalance(users));

// task 37

// const getTotalFriendCount = users =>
//     users.reduce((totalFriend, user) => {totalFriend.push(...user.friends);
      
//       return totalFriend;
    
//     }, []
      
// );

// const friends = getTotalFriendCount(users);

// const getFriendStats = (acc, friend) => {
//   if (!acc.hasOwnProperty(friend)) {
//     acc[friend] = 0
//       ;
//   }

//   acc[friend] += 1;

//   return acc

// };

// const countFriends = friends => friends.reduce(getFriendStats, {});

// const friendCount = countFriends(friends);



// console.log(friendCount);

// gpt ------>

// const getTotalFriendCount = users => {
//   return users.reduce((totalFriends, user) => totalFriends + user.friends.length, 0);
// };

// console.log(getTotalFriendCount(users));


// task 45

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = books
//   .filter(books => books.rating >= MIN_BOOK_RATING)
//   .map(books => books.author)
// .sort((a, b) => a.localeCompare(b));

// console.log(names);

// task 47

