// from Exercise1 Instead of use if...else, can you use ternary operator.
let dayNumber = 4;

let dayName =
  dayNumber === 0
    ? "Sunday"
    : dayNumber === 1
    ? "Monday"
    : dayNumber === 2
    ? "Tuesday"
    : dayNumber === 3
    ? "Wednesday"
    : dayNumber === 4
    ? "Thursday"
    : dayNumber === 5
    ? "Friday"
    : dayNumber === 6
    ? "Sunday"
    : "Invalid day number";

console.log(dayName);
