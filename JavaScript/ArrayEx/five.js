let char = ["a", "b", "c"];

let newChar = char.map((value) => {
  if (value === "b") {
    break;
    return value.toLocaleUpperCase();
  }
});
console.log(newChar);
// In Array, Can we use break in  callback functions or not?


