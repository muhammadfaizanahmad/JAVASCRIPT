// Conditional Sttaements

// if statement

var a = 100;

if (a === 100) {
  console.log("statement is true");
}

// if else statement

var a = 10;

if (a > 100) {
  console.log("Yes");
} else {
  console.log("No");
}

// Ternary Operator

var a = 10;
a >= 10 ? console.log("Yes") : console.log("No");

// if else if statement

var a = 20;

if (a === "Hello World") {
  console.log("This is equal to string");
} else if (a === 20) {
  console.log("This is true");
} else {
  console.log("This is false");
}

// Switch Case

var day = 1;

switch (day) {
  case 1:
    console.log("Today is Monday");
    break;
  case 2:
    console.log("Today is Tuesday");
    break;
  case 3:
    console.log("Today is Wednesday");
    break;
  case 4:
    console.log("Today is Thursday");
    break;
  case 5:
    console.log("Today is Friday");
    break;
  case 6:
    console.log("Today is Saturday");
    break;
  case 7:
    console.log("Today is Sunday");
    break;
  default:
    console.log("Enter correct day");
}
