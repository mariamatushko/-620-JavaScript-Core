//task 2
lastName = "Matushko";
console.log(lastName);

//task 3
let age = 25;
let myCountry = "Ukraine";
console.log(age, myCountry);
age = myCountry;
alert(age, myCountry)

//task 4
const John = {
  lastName: "Morris",
  ageJohn: 40,
  isTeacher: true,
  age: null,
  city: undefined,
};
console.log(John);

//task 5
let isAdult = confirm("Are you over 18 years old?", "Yes");
console.log(isAdult);

//task 6
const myName = "Maria";
console.log(typeof myName);
const myLastName = "Matushko";
console.log(typeof myLastName);
const groupNumber = 620;
console.log(typeof groupNumber);
const birthYear = 1995;
console.log(typeof birthYear);
const married = true;
console.log(typeof married);
console.log(groupNumber, birthYear, married, myName, myLastName);
let city;
console.log(typeof city);
let job = null;
console.log(typeof job);

//ask 7
const username = prompt("Dear User, please enter your username");
const loginEmail = prompt("Enter your email address");
const pass = prompt("Enter your password");
alert(
  "Dear " +
    username +
    " your email is " +
    loginEmail +
    " and your password is " +
    pass
);

//task 8
const oneHour = 60 * 60;
alert("There are " + oneHour + " seconds in one hour");
const oneDay = oneHour * 24;
alert("There are " + oneDay + " seconds in 24 hours");
const oneMonth = oneDay * 31;
alert("There are " + oneMonth + " seconds in one month");
