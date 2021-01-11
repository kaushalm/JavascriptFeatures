// let name = {
//   firstName: "kaushal",
//   lastName: "Mehra",
//   printFullName: function() {
//     console.log(this.firstName + this.lastName);
//   }
// };

// let printfulldetails = function(hometown, state) {
//   console.log(this.firstName + this.lastName + hometown + state);
// };

// name.printFullName();

// let name2 = {
//   firstName: "Sachin",
//   lastName: "Tendulkar"
// };

// name.printFullName.call(name2);

// printfulldetails.call(name2, "delhi");

// printfulldetails.apply(name, ["delhi", "India"]);

// let newfun = printfulldetails.bind(name2, "bangalore", "karnataka");

// newfun();

//************************POLYFILL OF BIND***********************************

// let name = {
//   firstname: "kaushal",
//   lastname: "mehra"
// };

// let printname = function(hometown, state) {
//   console.log(
//     this.firstname + " " + this.lastname + " " + hometown + " " + state
//   );
// };

// let printMyName = printname.bind(name, "Delhi");
// printMyName("Delhi");

// Function.prototype.mybind = function(...args) {
//   let obj = this;
//   params = args.slice(1);
//   return function(...args2) {
//     obj.apply(args[0], [...params, ...args2]);
//   };
// };

// let printMyName2 = printname.mybind(name, "Blr");
// printMyName2("Kar");

//*******************************CURRYING****************************************

let multiply = function(x, y) {
  console.log(x * y);
};

let multiplybytwo = multiply.bind(this, 2);
multiplybytwo(3);

let multiblycurry = function(x) {
  return function(y) {
    console.log(x * y);
  };
};

let mult = multiblycurry(2)(4);

// let sum = function(a) {
//   return function(b) {
//     if (b) {
//       return sum(a + b);
//     } else {
//       return a;
//     }
//   };
// };

// let summ = sum(1)(2)(3)(4)();
// console.log(summ);

let sum2 = a => b => (b ? sum2(a + b) : a);
let summm = sum2(1)(2)(3)(4)(5)();
console.log(summm);

let sum = a => b => (b ? sum(a + b) : a);
console.log(sum(10)(20)(3)(4)());
