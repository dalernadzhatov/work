let nums = [1,2,5,6,22,44,66,3,4,17,22,444];
let sum = 0;

nums.forEach(num => {
    sum += num;
});

console.log(sum);


let arr = ["hello", 1234, "", false, NaN, 123, true, " ", null, "29.01.1992"]

   let string = []
    let number = []
    let object = []
    let boolean = []

arr.forEach(item => {
  if (typeof item === "number") {
    number.push(item)
  } else if (typeof item === "string") {
    string.push(item)
  } else  if (typeof item === "object") {
    object.push(item)
  }  else if (typeof item === "boolean") {
    boolean.push(item)
  }
})

console.log("Numbers:", number);   // [1, 42, 3.14]
console.log("Strings:", string);   // ["hello", "world", "JavaScript"]
console.log("Booleans:", boolean);
console.log("Objects:", object);


