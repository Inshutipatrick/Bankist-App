'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data
// Data
// const account1 = {
//   owner: 'Inshuti Abed Patrick',
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,
//   locale: 'en-US',
//   currency: 'RWF',
// };

// const account2 = {
//   owner: 'Ntwali Marley Arnauld',
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
//   locale: 'de-DE',
//   currency: 'EUR',
// };

// const accounts = [account1, account2, account3, account4];

// // Elements
// const labelWelcome = document.querySelector('.welcome');
// const labelDate = document.querySelector('.date');
// const labelBalance = document.querySelector('.balance__value');
// const labelSumIn = document.querySelector('.summary__value--in');
// const labelSumOut = document.querySelector('.summary__value--out');
// const labelSumInterest = document.querySelector('.summary__value--interest');
// const labelTimer = document.querySelector('.timer');

// const containerApp = document.querySelector('.app');
// const containerMovements = document.querySelector('.movements');

// const btnLogin = document.querySelector('.login__btn');
// const btnTransfer = document.querySelector('.form__btn--transfer');
// const btnLoan = document.querySelector('.form__btn--loan');
// const btnClose = document.querySelector('.form__btn--close');
// const btnSort = document.querySelector('.btn--sort');

// const inputLoginUsername = document.querySelector('.login__input--user');
// const inputLoginPin = document.querySelector('.login__input--pin');
// const inputTransferTo = document.querySelector('.form__input--to');
// const inputTransferAmount = document.querySelector('.form__input--amount');
// const inputLoanAmount = document.querySelector('.form__input--loan-amount');
// const inputCloseUsername = document.querySelector('.form__input--user');
// const inputClosePin = document.querySelector('.form__input--pin');

//usind reduce method

// const calcDisplayBalance = function (acc) {
//   acc.balance = acc.movements.reduce(function (acc, mov) {
//     return acc + mov;
//   }, 0);

//   labelBalance.textContent = `${acc.balance}€`;
//   // console.log(balance);
// };

// const calcDisplaySummary = function (acc) {
//   const income = acc.movements
//     .filter(function (move) {
//       return move > 0;
//     })
//     .reduce(function (acc, move) {
//       return acc + move;
//     }, 0);
//   labelSumIn.textContent = `${income}€`;

//   const outPut = acc.movements
//     .filter(move => move < 0)
//     .reduce((acc, move) => acc + move, 0);
//   labelSumOut.textContent = `${Math.abs(outPut)}€`;

//   const interest = acc.movements
//     .filter(mov => mov > 0)
//     .map(deposit => (deposit * acc.interestRate) / 100)
//     .filter(int => int > 1)
//     .reduce((acc, int) => acc + int, 0);
//   labelSumInterest.textContent = `${interest}€`;
// };

///using mapa and forecah method to create username
// const createUsernames = function (accs) {
//   //side effect it doesn't need to return anything
//   accs.forEach(function (acc) {
//     acc.userName = acc.owner
//       .toLowerCase()
//       .split(' ')
//       .map(function (name) {
//         return name[0];
//       })
//       .join('');
//   });
// };
// createUsernames(accounts);

// const updateUi = function (currentAccount) {
//   // display movemment
//   displayMovement(currentAccount.movements);

//   // display balance
//   calcDisplayBalance(currentAccount);

//   //display summary
//   calcDisplaySummary(currentAccount);
// };
//implementing timer
// const startLogoutTimer = function () {
//   const tricky = function () {
//     //print the time
//     const min = `${Math.trunc(time / 60)}`.padStart(2, 0);
//     const sec = `${time % 60}`.padStart(2, 0);
//     labelTimer.textContent = `${min}:${sec}`;
//     //check if time is 0 then clear the timer and logout
//     if (time === 0) {
//       clearInterval(timer);
//       labelWelcome.textContent = 'Log in to Start';
//       containerApp.style.opacity = 100;
//     }
//     //decrease time
//     time--;
//   };
//   //set time
//   let time = 120;
//   //call it immediately
//   tricky();
//   //print the time
//   const timer = setInterval(tricky, 1000);

//   return timer;
// };

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Inshuti Abed Patrick',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2023-11-18T21:31:17.178Z',
    '2023-12-23T07:42:02.383Z',
    '2024-01-28T09:15:04.904Z',
    '2024-04-01T10:17:24.185Z',
    '2024-05-19T14:11:59.604Z',
    '2024-05-27T17:01:17.194Z',
    '2024-06-22T23:36:17.929Z',
    '2024-06-25T10:51:36.790Z',
  ],
  currency: 'RWF',
  locale: 'af', // de-DE
};

const account2 = {
  owner: 'Uhorakeye Yvette',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2023-11-01T13:15:33.035Z',
    '2023-11-30T09:48:16.867Z',
    '2023-12-25T06:04:23.907Z',
    '2024-01-25T14:18:46.235Z',
    '2024-03-05T16:33:06.386Z',
    '2024-05-19T14:43:26.374Z',
    '2024-06-20T18:49:59.371Z',
    '2024-06-24T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'da-DK',
};

const account3 = {
  owner: 'Uwineza Josiane',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,

  movementsDates: [
    '2023-09-01T13:15:33.035Z',
    '2023-12-30T09:48:16.867Z',
    '2024-02-25T06:04:23.907Z',
    '2024-03-25T14:18:46.235Z',
    '2024-04-05T16:33:06.386Z',
    '2024-05-19T14:43:26.374Z',
    '2024-07-20T18:49:59.371Z',
    '2024-08-18T12:01:20.894Z',
  ],
  locale: 'af',
  currency: 'RWF',
};

const account4 = {
  owner: 'Bagirihirwe Dative',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,

  movementsDates: [
    '2023-08-01T13:15:33.035Z',
    '2023-08-30T09:48:16.867Z',
    '2023-12-25T06:04:23.907Z',
    '2024-01-25T14:18:46.235Z',
    '2024-02-05T16:33:06.386Z',
    '2024-07-19T14:43:26.374Z',
    '2024-07-20T18:49:59.371Z',
    '2024-07-24T12:01:20.894Z',
  ],
  locale: 'en-GB',
  currency: 'USD',
};

const accounts = [account1, account2, account3, account4];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions

// const fomatedmov = function (params) {};

// const displayMovement = function (movements, sort = false) {
//   containerMovements.innerHTML = '';
//   const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

//   movs.forEach(function (mov, i) {
//     const type = mov > 0 ? 'deposit' : 'withdrawal';

//     const html = `
//       <div class="movements__row">
//         <div class="movements__type movements__type--${type}">${
//       i + 1
//     } ${type}</div>
//         <div class="movements__value">${mov}€</div>
//       </div>`;

//     containerMovements.insertAdjacentHTML('afterbegin', html);
//   });
// };

const formetMovement = function (date, locale) {
  const calcDayspassed = (date1, date2) =>
    Math.round(Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)));

  const dayspassed = calcDayspassed(date, new Date());

  if (dayspassed === 0) return `Today`;
  if (dayspassed === 1) return `Yesterday`;
  if (dayspassed <= 7) return `${dayspassed} days ago`;

  return new Intl.DateTimeFormat(locale).format(date);

  // const day = `${date.getDate()}`.padStart(2, 0);
  // const month = `${date.getMonth() + 1}`.padStart(2, 0);
  // const year = date.getFullYear();

  // return `${day}/${month}/${year}`;
};
const formatedcur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};
const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);

    const displayDate = formetMovement(date, acc.locale);

    const formatedmov = formatedcur(mov, acc.locale, currentAccount.currency);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formatedmov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = formatedcur(
    acc.balance,
    acc.locale,
    currentAccount.currency
  );
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatedcur(
    incomes,
    acc.locale,
    currentAccount.currency
  );

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatedcur(
    Math.abs(out),
    acc.locale,
    currentAccount.currency
  );

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatedcur(
    interest,
    acc.locale,
    currentAccount.currency
  );
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///implementing counterdown timer
const startLogoutTimer = function () {
  const tick = function () {
    const min = `${Math.trunc(time / 60)}`.padStart(2, 0);
    const sec = `${time % 60}`.padStart(2, 0);
    labelTimer.textContent = `${min}:${sec}`;
    //check if time is 0 clear the timer and logout user
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = 'Log in to get started';
      containerApp.style.opacity = 0;
    }
    //reduce time
    time = time - 1;
  };
  //set time
  let time = 120;

  //print the time
  tick();
  const timer = setInterval(tick, 1000);

  return timer;
};

///////////////////////////////////////
// Event handlers(parent scope)
let currentAccount, timer;

//fake login
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  // console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    //create present date using internalization api
    const now = new Date();
    //when we need to have time we have to specify the option object
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      weekday: 'long',
    };

    //it better to have locale from user's browers than define it manually
    // const locale = navigator.language;
    // console.log(locale);

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    // // display in this formart day/month/year
    // const minute = `${now.getMinutes()}`.padStart(2, 0);
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const day = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const year = now.getFullYear();

    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${minute}`;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    //calling timer
    if (timer) {
      clearInterval(timer);
    }
    timer = startLogoutTimer();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    //create transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());
    // Update UI
    updateUI(currentAccount);
    //rest timer
    clearInterval(timer);
    timer = startLogoutTimer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(function () {
      // Add movement
      currentAccount.movements.push(amount);

      //create loan date
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);

      //rest timer
      clearInterval(timer);
      timer = startLogoutTimer();
    }, 4000);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LEVCTURES

/*
///numbers

//here we have to keep in mind that all numbers presented as decimal
console.log(23);

console.log(23 === 23.0);

//we have base 10 means numbers from 0 to 9

console.log(1 / 10 === 0.1); //but 3/10 is 3.333 infinity

//we also have 64 binary base 2 which is zeros and ones

console.log(3 / 10 === 0.333); //here also we get that weird result of infinity of 1/10

//we can't use javaScript to do scientific or financial calculation
console.log(0.1 + 0.2); //you find that it isn't equal to 0.3

//here is how we convert string to number

//first way using number function
console.log(Number('42'));

//second way is using plus operator
console.log(+'242');

//parsing which is to parse(change) a number from string and that string can even contain symbols

//1.we have parseint for intergers numbers and iit has the second argument as regex which is the base of the numbers
console.log(Number.parseInt('23px', 10)); //we mostly work with base 10 numbers
console.log(Number.parseInt('23px', 2)); //you see we are using base 10 but if we put base 2 it will give differnt result
console.log(Number.parseInt('2.56 rem', 10)); // it will remove .56 cause it ain't intergers
console.log(Number.parseInt('e45', 10)); //this one can't work usually string should to start with number

//2.wee have parsefloat for decimals numbers
console.log(Number.parseFloat('2.36 rem'));
console.log(Number.parseFloat('18px'));

//isNaN this method used to check if our value is not a number

console.log(Number.isNaN(20)); //here we have a number not a NaN
console.log(Number.isNaN('20')); //it consider this as another value not a NaN
console.log(Number.isNaN(+'10px')); //this is NaN
console.log(Number.isNaN(17 / 0)); //this also is not a NaN but is infinity

//isFinite method used to check if our value is a number and canbe decimals

console.log(Number.isFinite(20)); //here we have a number which is true
console.log(Number.isFinite('20')); //it consider this as another value not a number
console.log(Number.isFinite(+'10px')); //this is NaN
console.log(Number.isFinite(17 / 0)); //this also is not a NaN and not finite but is infinity

//isInteger method used to check if our value is a number and can be integers

console.log(Number.isFinite(20)); //here we have an integer number which is true
console.log(Number.isFinite(20.0)); //as here also we have an integer number which is true
console.log(Number.isInteger(3 / 10)); // is not integer


///math function
//1.square root as math function
console.log(Math.sqrt(36));
//the old way we do like
console.log(25 ** (1 / 2));
//when we need cubic root or more
console.log(512 ** (1 / 3));
console.log(8 ** (1 / 3));
console.log(16 ** (1 / 4));

///when we need max or min
console.log(Math.max(1, 4, 5, 84, 14, 25, 36));
console.log(Math.max(1, 4, 5, '84', 14, 25, 36)); //it does the type coerition
console.log(Math.max(1, 4, 5, '84px', 14, 25, 36)); //but not paresing

console.log(Math.min(3, 4, 5, 84, 14, 1, 25, 36));

//we also have math object on constants
console.log(Math.PI);
console.log(Math.PI * Number.parseInt('10px') ** 2); //we are calculating the area of the circle which pi* radius ** 2

//math object or math namepace for random number

console.log(Math.random()); //which return number between 0 and 1
//a real exmpale fo dice
console.log(Math.trunc(Math.random() * 6) + 1); //which will return number between 1 and 6

const ourNumber = function (min, max) {
  return Math.trunc(Math.random() * (max - min) + 1) + min; //o...1 return 0... (max-min) return min+0 ....(max-min+min)
};
console.log(ourNumber(5, 10)); //min...max

/// rounding interger(math.roundInt) similara to parsing integer(number.parseINt)
//before we used trunc method
console.log(Math.trunc(23.3));
console.log(Math.trunc('26.6')); //note that it usually do type coercion

//for round method it rounding to the nearest interger
console.log(Math.round('24.3')); //note that it usually do type coercion
console.log(Math.round(24.8));

//for ceil method it usually round up
console.log(Math.ceil(27.3));
console.log(Math.ceil('27.8')); //note that it usually do type coercion

//for floor method it round down
console.log(Math.floor('22.3')); //note that it usually do type coercion
console.log(Math.floor(22.8));

///as you see trunc and floor method are similar so let see the difference
console.log(Math.trunc(-24.8));
console.log(Math.floor(-24.8)); //you se this one keep rounding down even for negative value

//rounding decimals number
//the number we pas in the Tofixed method is the numbers we need after the .
//note that toFixed method usually return the string
console.log((23.5).toFixed(0));
console.log((23.3).toFixed(0));
console.log((23.5).toFixed(3));
console.log(+(4.526).toFixed(2));


//reminder operator

console.log(8 % 3); ///it is like division and checking the remain value
console.log(8 / 3); //similar to thiss 8 = 3 * 2 + 1

//mostly we usually use reminder operator to check if or number is even or odd
console.log(5 % 2); //if our remind give a number means it is odd
console.log(5 / 2); // 5 = 2 * 2 + 1

console.log(6 % 2); //unless the result of our reminder operator is zero means it is even
console.log(6 / 2); //6 = 2 * 3

//some real example
//1.checking if our function is odd

const isOdd = function (n) {
  return n % 2 !== 0;
};
console.log(isOdd(9));
console.log(isOdd(8));
console.log(isOdd(289));

//2.changing the color of our movement at Nth number
labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    if (i % 2 === 0) row.style.backgroundColor = 'violet'; //for even movements

    if (i % 2 !== 0) row.style.backgroundColor = 'green'; //for odd movements
  });
});


//bigint
//as we have seem there only 53bits to store the numbers which lead us to limitation

console.log(2 ** 53 - 1); //boyh ES2020 this was the biggest numbe in javascript
console.log(Number.MAX_SAFE_INTEGER); //similar to this one
//note that javaScript can't represnet the nmber after this accurate
console.log(2 ** 53 + 0);
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);

//after Es2020 we have other big number kwonn as bigint
console.log(5438333333333742879845454546n); //bigint=big integers
console.log(BigInt(5438333333333742879845454546)); //there aren't the same to above because of bigint function
console.log(BigInt(5438333)); //here can look the same

//for big we can also do math operation
console.log(1000n + 1000n); //addition
console.log(165645685n * 154252n); //multiplication
console.log(4000n / 20n); //division for integers
console.log(10n / 3n); //this one it usually do the round up and took only the integers
console.log(151656256n - 153512n); //substraction

//but there are limit
//1. we can mix bigint with regular number
// console.log(10000n + 1885); //can't work even for most of math operator

//2.there exceptions  that bigint can work with reular number(logical operator and string concatenation)
console.log(20n === 20); //the triple signs doesn't do type coreotion which end flase
console.log(20n == 20); // the regular equal operator does type coreotion it gives reult as true
console.log(20n == '20'); //similar to the obove one

console.log(20n > 150653); //comparision also can work
console.log(20n > 15);

console.log(163524n + ' is Really big Number'); //by adding bigint to the string also work


///date////

///i.four ways of creating date
///1.by using date constructor function
const tommorrow = new Date();
console.log(tommorrow);

//2.by parsing the string into date constructor fiunction

console.log(new Date(tommorrow));
console.log(new Date('4 july 2011 19:20'));
console.log(new Date('Jun 25 2024 11:45:16'));
console.log(new Date(account2.movementsDates[0]));

//3. by passing number into date constructor function
console.log(new Date(2050, 4, 4, 11, 50, 20)); //note here that month are zero based

//4.passing the timestamp: millisecond from the unix time(1,1,1970) into date constructor function
console.log(new Date(0));
console.log(new Date(450 * 24 * 60 * 60 * 1000)); //to check date on 450 days after unix time

///ii. method use on date function
//1.to get on value from date variable
const now = new Date('2020-07-11T23:36:17.929Z');
console.log(now);
console.log(now.getFullYear()); //when we need to know the year
console.log(now.getMonth()); //when we need to know the month keep that are zero based
console.log(now.getDate()); //when we need to know the day on date
console.log(now.getDay()); //when we need to know the day of week
console.log(now.getHours()); //when we need to know the hour
console.log(now.getMinutes()); //when we need to know the minute

//to get the timestamp we use gettime method
console.log(now.getTime());

//to change the date object into string use ToISOstring
console.log(tommorrow.toISOString());

// to get the present time we use
console.log(Date.now());
console.log(new Date()); //or this one

//2. to set any value in our date
const yesterday = new Date('March 18 2050 11:45:16');
console.log(yesterday);

yesterday.setFullYear(2024);
console.log(yesterday);
yesterday.setMonth(3); //April
console.log(yesterday);
yesterday.setDate(5);
console.log(yesterday);
console.log(yesterday.setHours(10)); //when we log directly means we gonna get the timestamp


//we can also do the mathemetical operation on date
const pastDay = new Date(2050, 2, 15, 12, 3);
//when we try to convert into number it wil always return timestamp in millisecond
console.log(Number(pastDay));
console.log(+pastDay); //similar

//as we have timestamp in millsecond we can do the calculation by comparing date

const dayspass = function (date1, date2) {
  return (date2 - date1) / (1000 * 60 * 60 * 24);
};

console.log(Math.round(Math.abs(dayspass(pastDay, new Date()))));


//internalization API of numbers

const num = 25664.3;
//we also have the options  object and the style property has three value:unit,perecent,currency
const options = {
  style: 'currency',
  unit: 'mile-per-hour',
  currency: 'RWF',
};
console.log(new Intl.NumberFormat(navigator.language, options).format(num));
console.log(new Intl.NumberFormat('da-DK', options).format(num));
console.log(new Intl.NumberFormat('de-DE', options).format(num));
console.log(new Intl.NumberFormat('af', options).format(num));
*/

//there are two types of timer
//1.steTimeOut when our callback function excuted just once
const ingridient = ['patatoes', 'spinach'];
const pizzaTimer = setTimeout(
  function (ing1, ing2) {
    console.log(`Here is your order of Pizza made of ${ing1} and ${ing2}`);
  },
  3000,
  ...ingridient
); //first argument is callback function the second is the delay
//the other argument that came afte the delay will be consider as callback function argument
console.log('waiting...');

//and we can cancle the command of our settimout
if (ingridient.includes('spinach')) clearTimeout(pizzaTimer);

//2.setInterval when callack function has to keep excuted after a specified timer
setInterval(function () {
  const now = new Date();
  // console.log(now);
  //challenge
  // console.log(`at ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`);
}, 1000);
