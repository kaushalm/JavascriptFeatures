// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>JS Starter</h1>`;

let name = {
  firstName: "kaushal",
  lastName: "Mehra",
  printFullName: function() {
    console.log(this.firstName + this.lastName);
  }
};

let printfulldetails = function(hometown, state) {
  console.log(this.firstName + this.lastName + hometown + state);
};

name.printFullName();

let name2 = {
  firstName: "Sachin",
  lastName: "Tendulkar"
};

name.printFullName.call(name2);

printfulldetails.call(name2, "delhi");

printfulldetails.apply(name, ["delhi", "India"]);

let newfun = printfulldetails.bind(name2, "bangalore", "karnataka");

newfun();
