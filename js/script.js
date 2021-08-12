const currencies = new Map([
  ['USD', 'American dolar'],
  ['CAD', 'Canadian dolar'],
  ['MX', 'Mexican peso'],
]);

//DATA
const user1 = {
  name: 'Luke skywalker',
  transactions: [234, 65456, -987, 234, -6543, 78],
  interestRate: 1.1,
  pin: 9090
};

const user2 = {
  name: 'Anakin skywalker',
  transactions: [734, -5459, 487, 9834, 43, 81],
  interestRate: 1.8,
  pin: 6666
};

const user3 = {
  name: 'Han Solo',
  transactions: [-999, -765, -1987, 23, -6543, 18],
  interestRate: 2.1,
  pin: 6677
};

const user4 = {
  name: 'Leia organa',
  transactions: [2222, 4709, -87, -24, 6598, 65],
  interestRate: 1.0,
  pin: 5312
};

const user5 = {
  name: 'Rey Skywalker',
  transactions: [34, 9888, -127, 134, -63, 708],
  interestRate: 1.4,
  pin: 8760
};

let accounts = [user1, user2, user3, user4, user5];

//DOM ELEMENTS
const userWelcome = document.querySelector('.salute');
const main = document.querySelector('.main');
const containerTransactions = document.querySelector('.transactions');
const labelBalance = document.querySelector('.label--balance');

function createUserName(accounts) {
  accounts.forEach(function(accs) {
    accs.username = accs.name
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  })
};

createUserName(accounts);

const displayTransactions = function(transactions) {
  containerTransactions.innerHTML = '';

  transactions.forEach(function(tran, idx) {
    const type = tran > 0 ? 'deposit' : 'withdrawal'
    const html = `
    <div class="transaction-row">
    <div class="transaction-date"> 2 days ago</div>
      <div class="transaction-place">${idx + 1}</div>
      <div class="transaction-value value--${type}">$ ${tran}</div>
    </div>
    `;
    containerTransactions.insertAdjacentHTML('afterbegin', html);
  });
}

const calcDisplayBalance = function(transactions) {
  const balance = transactions.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} CAD`
}

displayTransactions(user1.transactions);
calcDisplayBalance(user1.transactions);