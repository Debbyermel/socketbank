const userWelcome = document.querySelector('.salute');
const transactions = [200, 450, -600, 8765, -3481, 70, -5432];
const currencies = new Map([
  ['USD', 'American dolar'],
  ['CAD', 'Canadian dolar'],
  ['MX', 'Mexican peso'],
]);


//Lecture

// transactions.forEach(function(transaction, idx, arr) {
//   if(transaction > 0) {
//     console.log( `Transaction ${idx + 1}: You deposited ${transaction}`);
//   }
//   else {
//     console.log( `Transaction ${idx + 1}: You withdrew ${Math.abs(transaction)}`);
//   }
// })


// currencies.forEach(function(value, key, map) {
//   console.log(`${key}: ${value}`);
// })

