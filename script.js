// Задача 1
// // Change code below this line
// const productName="Droid";
// console.log(productName);
// // 'Droid'
// const pricePerItem=2000;
//  console.log(pricePerItem);
// // 2000


// Задача 2
// let productName = "Droid";
// let pricePerItem = 2000;
// console.log(productName);
// console.log(pricePerItem);
// // Change code below this line
// productName = "Repair droid";
// pricePerItem = 3500;
// console.log(productName);
// console.log(pricePerItem);

// Задача 5
// const productName = "Droid";
// const pricePerItem = 3500;

// // Change code below this line
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;
// console.log (message);

//  Задача 6
// const pricePerDroid = 800;
// const orderedQuantity = prompt("Скільки дронів ви хочете придбати?");
// const deliveryFee = 50;
// const totalPrice =  pricePerDroid*orderedQuantity+deliveryFee;
// const message =`You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

// console.log (message);

//  Задача 7
// function sayHi() {
//     console.log("Hello, this is my first function!");
//   }
//   sayHi()


// Задача 8
// function add(a, b, c) {

//     console.log(`Addition result equals ${a+b+c}`);
//     // Change code above this line
//   }
  
//   add(15, 27, 10);
//   add(10, 20, 30);
//   add(5, 10, 15);

// Задача 10

//   function makeMessage(name, price) {

    //  const message =`You picked ${name}, price per item is ${price} credits`;

//     console.log(message);
//   };

//   makeMessage('Radar', 6150);
//   makeMessage('Scanner', 3500);
//   makeMessage('Reactor', 8000);
//   makeMessage('Engine', 4070);

// задача 12
// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {

//     const message = `You ordered droids worth ${orderedQuantity*pricePerDroid+deliveryFee} credits. Delivery (${deliveryFee} credits) is included in total price.`;
//     console.log(message);
//   }

//   makeOrderMessage(2, 100, 50);
//   makeOrderMessage(4, 300, 100);
//   makeOrderMessage(10, 70, 200);

// Задача 13

// function isAdult(age) {
//     // Change code below this line
//     const passed = age>=18;
  
//     // Change code above this line
//     console.log (passed);
//   }
//   isAdult(14);
//  isAdult(8)  ;
//  isAdult(37);

// задача 14

// function isValidPassword(password) {
//     const SAVED_PASSWORD = 'jqueryismyjam';
//     // Change code below this line
//     const isMatch = password===SAVED_PASSWORD;
  
//     // Change code above this line
//    return isMatch;
//   }
 

//   isValidPassword("mangodab3st");
//   isValidPassword("kiwirul3z");
//   isValidPassword("jqueryismyjam");

//   const x = isValidPassword(prompt("ddtlbnt gfhjkm"));
//   console.log(x);

// задача 15

// function checkAge(age) {
//     let message;
  
//     if (age>=18) { // Change this line
//       message = 'You are an adult';
//     } else {
//       message = 'You are a minor';
//     }
  
//     // return message;
//     console.log (message);
//   }
  
//   checkAge(20);
//   checkAge(8);
//   checkAge(14) ;
//   checkAge(38);


// задача 18
//   function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//     let message;

//   const totalPrice = pricePerDroid * orderedQuantity;
//     if (totalPrice>customerCredits) {
//       message = "Insufficient funds!";
//     } else {
//       message = `You ordered ${orderedQuantity} droids, you have ${customerCredits-totalPrice} credits left`
//     }

//     console.log(message);
//   }
  
//  makeTransaction(3000, 5, 23000);
// makeTransaction(1000, 3, 15000);
// makeTransaction(5000, 10, 8000);
// makeTransaction(2000, 8, 10000);
// makeTransaction(500, 10, 5000);

// задача 24
// function getDiscount(totalSpent) {
//     const BASE_DISCOUNT = 0;
//     const BRONZE_DISCOUNT = 0.02;
//     const SILVER_DISCOUNT = 0.05;
//     const GOLD_DISCOUNT = 0.1;
//     let discount;

//   if (totalSpent>=50000) {
//     discount = GOLD_DISCOUNT;
//   } else if (totalSpent>=20000 && totalSpent<50000) {
//     discount = SILVER_DISCOUNT;
//   } else if (totalSpent>=5000 && totalSpent<30000) {
//      discount = BRONZE_DISCOUNT;
//   } else {
//     discount = BASE_DISCOUNT;
//   }{
    
//   } {
    
//   }

//     // return discount;
// console.log(discount);
//   }
  
// getDiscount(137000); //повертає 0.1
// getDiscount(46900); //повертає 0.05
// getDiscount(8250); //повертає 0.02
// getDiscount(1300); //повертає 0
// getDiscount(5000) ;//повертає 0.02
// getDiscount(20000); //повертає 0.05
// getDiscount(50000) ; //повертає 0.1

// задача 27

// function getSubscriptionPrice(type) {
//     let price;
//     // Change code below this line
  
//    switch (type) { // Change this line
//       case "starter":// Change this line
//         price = 0; // Change this line
//         break;
  
//       case "professional":// Change this line
//         price = 20 ; // Change this line
//         break;
  
//       case "organization":// Change this line
//         price = 50; // Change this line
//         break;
//     }
  
//     // Change code above this line
//     // return price;
//     console.log(price);
//   }

// getSubscriptionPrice("professional");
// getSubscriptionPrice("organization");
// getSubscriptionPrice("starter");

// задача 29

// function getShippingCost(country) {
//     let message;
//     // Change code below this line
//   switch (country) {
//     case "China":
//     message="Shipping to China will cost 100 credits";
//       break;
  
//       case "Chile":
//     message='Shipping to Chile will cost 250 credits';
//       break;
  
//        case "Australia":
//       message="Shipping to Australia will cost 170 credits";
//       break;
  
//       case "Jamaica":
//       message="Shipping to Jamaica will cost 120 credits";
//       break;
  
//     default:
//       message="Sorry, there is no delivery to your country";
//   }
//     // Change code above this line
//     // return message;
//     console.log(message);
//   }
  

//   getShippingCost("Australia") 
// getShippingCost("Germany") 
// getShippingCost("China") 
// getShippingCost("Chile")
// getShippingCost("Jamaica") 
// getShippingCost("Sweden") 

// задача 36

function checkForSpam(message) {
    let result;
    // Change code below this line
  const messageUp = message.toLowerCase();  
  result = messageUp.includes("spam") || messageUp.includes("sale");
  
    // Change code above this line
    // return result;
    console.log(result);
  }
checkForSpam("Latest technology news") 
checkForSpam("JavaScript weekly newsletter")
checkForSpam("Get best sale offers now!") 
checkForSpam("Amazing SalE, only tonight!") 
checkForSpam("Trust me, this is not a spam message") 
checkForSpam("Get rid of sPaM emails. Our book in on sale!") 
checkForSpam("[SPAM] How to earn fast money?")