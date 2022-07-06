const obj2 = {
  again: {
    po: 44,
    ui: {
      do: 3,
      eo: {
        f: 4,
        g: 5,
        h: {
          i: 6,
          j: 7,
          k: 8,
          l: {
            m: 9,
            n: {
              o: 10,
              p: {
                q: 100,
                r: 23,
                chad: {
                  s: 8,
                  t: {
                    u: 9,
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

const obj3 = {
  a: {
    b: {
      c: {
        d: {
          e: {
            f: {
              g: {
                h: 5,
              },
              l: {
                m: 9,
                n: {
                  o: 10,
                  p: {
                    q: 100,
                    r: 23,
                    chad: {
                      s: true,
                      t: {
                        u: false,
                        rt: {
                          df: true,
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

const obj = {
  a: 1,
  b: 2,
  c: {
    d: 3,
    e: {
      f: 4,
      g: 5,
      h: {
        i: 6,
        j: 7,
        k: 8,
        l: {
          m: 9,
          n: {
            o: 10,
            p: {
              q: 100,
              y: {
                z: 90,
              },
            },
          },
        },
        check: 420,
        again: {
          po: 44,
          ui: {
            do: 3,
            eo: {
              f: 4,
              g: 5,

              h: {
                i: 6,
                j: 7,
                k: 8,
                l: {
                  m: 9,
                  n: {
                    o: 10,
                    p: {
                      q: 100,
                      r: 23,
                      chad: {
                        s: 90,
                        t: {
                          u: 88,
                          check: {
                            one: 44,
                            two: {
                              three: {
                                foe: function () {
                                  console.log(this.a);
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

let maxDepth = 0;
let depth = 0;
function findObjectDepth(object, count) {
  Object.keys(object).forEach((key, index, arr) => {
    if (typeof object[key] === "string" || Array.isArray(object[key])) return;
    if (depth > count) depth = count;
    if (Object.keys(object[key]).length > 0) {
      ++depth;
      maxDepth = depth > maxDepth ? depth : maxDepth;

      findObjectDepth(object[key], count + 1);
    }
    if (Object.keys(object[key]).length === 0 && index === arr.length - 1) {
      count--;
    }
  });
}

findObjectDepth(arr, 0);
console.log("MaxDepth of Object: " + maxDepth);
// const arr = [
//   1,
//   [2, [3, 4, [5, 6, 7, 8, 8], 12, 3, 45, 4], 45, 5, 56],
//   55,
//   [1, [2, [3, [4, 5, [6]]]]],
// ];
// function findObjectDepth(object, depth, maxDepth) {
//   for (key in object) {
//     console.log(key);
//     console.log(Object.keys(object[key]));
//     console.log("depth" + depth);
//     console.log("maxDepth: " + maxDepth);
//     if (Object.keys(object[key]).length > 0) {
//       depth++;
//       console.log("Going one level down");
//       return findObjectDepth(
//         object[key],
//         depth,
//         depth > maxDepth ? depth : maxDepth
//       );
//     } else {
//       if (Object.keys(object).indexOf(key) == Object.keys(object).length - 1) {
//         console.log(object);
//         depth--;
//         console.log("going one level up");
//       }
//     }
//   }
//   return maxDepth;
// }

// console.log("Depth of the provided object: " + findObjectDepth(obj, 0, 0));
// const end = Date.now();
// // console.log((end - start) / 1000);
// function findObjectDepth(object) {
//   const str = JSON.stringify(object);
//   let inQuotes = false;
//   let depth = 0;
//   let maxDepth = 0;
//   for (char of str) {
//     if (char === '"') {
//       inQuotes = !inQuotes;
//     }
//     if (!inQuotes && char === "{") {
//       depth++;
//     }
//     if (!inQuotes && char === "}") {
//       depth--;
//     }
//     maxDepth = depth > maxDepth ? depth : maxDepth;
//   }
//   return maxDepth - 1;
// }
// const start = Date.now();
// console.log("Depth of the required object: " + findObjectDepth(obj3));
// const end = Date.now();
// console.log(
//   "Time taken to find the max-depth: " + (end - start) / 1000 + " seconds"
// );

// const start = Date.now();
// console.log("Depth of the required array: " + findArrayDepth(arr));
// const end = Date.now();
// console.log(
//   "Time taken to find the max-depth: " + (end - start) / 1000 + " seconds"
// );
// function findArrayDepth(array) {
//   let str = JSON.stringify(array);
//   let depth = 0,
//     maxDepth = 0;
//   for (char of str) {
//     if (char == "[") depth++;
//     if (char == "]") depth--;
//     maxDepth = depth > maxDepth ? depth : maxDepth;
//   }
//   return maxDepth;
// }

// function findArrayDepth(arr, depth, maxDepth) {
//   arr.forEach((element, index, array) => {
//     console.log("Depth: " + depth);
//     console.log("Max depth: " + maxDepth);
//     if (Array.isArray(element)) {
//       depth++;
//       console.log("Gooing one level down");
//       if (depth > maxDepth) {
//         maxDepth = depth;
//       }
//       return findArrayDepth(element, depth, maxDepth);
//     } else {
//       if (index == array.length - 1) {
//         depth -= 1;
//         console.log("Going one level up");
//       }
//     }
//   });
//   return maxDepth;
// }
// console.log("Depth of the provided array: " + findArrayDepth(arr, 0, 0));
// // arr.forEach((element, index, arr) => {
// //   console.log(element);
// //   console.log(index);
// //   console.log(arr);
// // });
