// const _ = require("lodash");
// const a = {
//   name: "GVI",
//   age: 23,
// };

// const b = {
//   name: "GVI",
//   age: 23,
// };

// console.log(_.isEqual(a, b));

// let a = "abv__ad";
// console.log(a);
// const b = a.replace("ad", "yui");
// console.log(b);
// console.log(Date.now());

// let a = undefined;
// let b = null;
// console.log(typeof a);
// console.log(typeof b);
// console.log(a == b);
// console.log(a === b);
// console.log(b == 0);
// console.log(b <= 0);

// (async () => {
//   try {
//     const res = await fetch("https://randomuser.me/api/?results=10");
//     const users = await res.json();
//     console.log(users);
//   } catch (e) {
//     console.log(e.message);
//   }
// })();

// function abc(a) {
//   return Array.from(a.toString());
// }

// console.log(abc(108));

// let obj1 = {
//   a: 10,
//   b: "yolo",
//   c: function () {
//     console.log("Inside obj1");
//   },
// };

// let obj2 = Object.assign({}, obj1);

// obj2.c = null;
// console.log(typeof obj1.c);
// console.log(obj1.c);
// console.log(obj2.c);
console.log("a");
setTimeout(function () {
  console.log("set Timeout");
}, 0);

let i;
function f() {
  console.log("f");
}

console.log("b");

let myPromise = new Promise(function (myResolve, myReject) {
  // "Producing Code" (May take some time)

  myResolve(); // when successful
  myReject(); // when error
});

myPromise.then(
  function (value) {
    console.log("Resolved");
  },
  function (error) {
    console.log("Rejected");
  }
);

// const a = async () => {
//   await console.log("async IIFE function");
// };
f();

(async function () {
  await console.log("async IIFE function");
})();
// a();

console.log(i);

// function sum(a) {
//   return (b) => {
//     if (b) return sum(a + b);
//     return a;
//   };
// }

// console.log(sum(10)(10)(10)());
