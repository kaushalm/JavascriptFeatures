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

//POLYFILL OF BIND

let name = {
  firstname: "kaushal",
  lastname: "mehra"
};

let printname = function(hometown, state) {
  console.log(
    this.firstname + " " + this.lastname + " " + hometown + " " + state
  );
};

let printMyName = printname.bind(name, "Delhi");
printMyName("Delhi");

Function.prototype.mybind = function(...args) {
  let obj = this;
  params = args.slice(1);
  return function(...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};

let printMyName2 = printname.mybind(name, "Blr");
printMyName2("Kar");
