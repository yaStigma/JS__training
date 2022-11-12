// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
//   };
  
//   for (const key in book) {
//     // Ключ
//     console.log(key);
//     // Значення властивості з таким ключем
//     console.log(book[key]);
//   }


// const book = {
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         genres: ["historical prose", "adventure"],
//         rating: 8.38,
//       };
    
//       for (const key in book) {
//         // Ключ
//         console.log('key', key);
//         // Значення властивості з таким ключем
//         console.log(book.key)
//         console.log('value', book[key]);
//       }


const apartment = {
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
  };
   const keys = [];
  const values = [];

  for (const key in apartment){
    keys.push(key);
    values.push(apartment[key]);
    //   console.log(key) ;
  }
  console.log(keys) ;
  console.log(values) ;
  
  // Change code below this line
  
  
  