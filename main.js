// let userTypedCharacters = prompt("Tweet: ");
// let maxCharacter = 300;
// let typedCharacter = userTypedCharacters.length;
// let remainingCharacters;

// remainingCharacters = maxCharacter - typedCharacter;
// console.log("You have " + remainingCharacters + " left.");

// function findOutRemainingCharacters() {
//   remainingCharacters = maxCharacter - typedCharacter;
//   console.log(remainingCharacters);
// }

// findOutRemainingCharacters();
// how much money avaible?
// function getMilk(money) {
//   let maxMilkCount = money / 1.5;
//   let roundedMaxMilkCount = Math.floor(maxMilkCount, 0);
//   console.log(
//     "With that money you could buy: " + roundedMaxMilkCount + " milk bottle"
//   );
//   let change = money % 1.5;
//   return console.log(change + "$ is your change.");
// }
// M
// console.log(getMilk(17));

// function lifeInWeeks(age) {
//   let months = (90 - age) * 12;
//   let weeks = (90 - age) * 52;
//   let days = (90 - age) * 365;
//   console.log(
//     "You have: " +
//       days +
//       " days, " +
//       weeks +
//       " weeks, " +
//       months +
//       " months left."
//   );
// }

// lifeInWeeks(56

// const firstName = prompt("Enter name: ");
// const secondName = prompt("Enter second name: ");

// let randomNumber = Math.random();
// randomNumber = randomNumber * 100;
// randomNumber = Math.floor(randomNumber) + 1;
// console.log(randomNumber);

// let loveScore;

// loveScore = Math.floor(Math.random() * (101 - 1) + 1);
// console.log(loveScore);

// if (loveScore >= 90) {
//   console.log(
//     "Your love score is " + loveScore + "% You love each other cmuk :))"
//   );
// } else {
//   console.log("Your love score is: " + loveScore + "%");
// // }

// function isLeap(year) {
//   let checkingYear = year;
//   const disivibleBy4 = checkingYear % 4;
//   const disivibleBy100 = checkingYear % 100;
//   const disivibleBy400 = checkingYear % 400;

//   if (disivibleBy4 != 0) {
//     return "Not leap year.";
//   } else if (disivibleBy100 != 0) {
//     return "Leap year.";
//   } else if ((disivibleBy400 = 0)) {
//     return "Leap year";
//   } else "Not leap year";
// }

// fizzbuzz
let fizzbuzzArray = [];
let count = 1;

function fizzbuzzAdder() {
  if (count % 3 === 0) {
    fizzbuzzArray.push("fizz");
    count++;
    console.log(fizzbuzzArray);
  } else if (count % 5 === 0) {
    fizzbuzzArray.push("buzz");
    count++;
    console.log(fizzbuzzArray);
  } else {
    fizzbuzzArray.push(count);
    count++;
    console.log(fizzbuzzArray);
  }
}

fizzbuzzAdder();
