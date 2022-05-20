const left = document.getElementById("left-cont");
const right = document.getElementById("right-cont");
const length = left.children.length;
let count = 0;

function slide(direction) {
  // if (direction == "up") {
  //   if (count <= 3) {
  //     right.style.transform = `translateY(${-100 * count}vh)`;
  //     left.style.transform = `translateY(${100 * count - 300}vh)`;
  //     count++;
  //   } else {
  //     right.style.transform = "translateY(0vh)";
  //     left.style.transform = "translateY(-300vh)";
  //     count = 1;
  //   }
  //   console.log(count);
  // } else {
  //   console.log(count);
  //   if (count <= 3) {
  //     right.style.transform = `translateY(${(count + 1) * -100 + 100}vh)`;
  //     left.style.transform = `translateY(${-100 * (3 - count)}vh)`;
  //     count++;
  //   } else {
  //     right.style.transform = "translateY(0vh)";
  //     left.style.transform = "translateY(-300vh)";
  //     count = 1;
  //   }
  // }
  if (direction == "up") {
    if (count == length - 1) {
      count = 0;
    } else {
      count++;
    }
  } else {
    if (count == 0) {
      count = length - 1;
    } else {
      count--;
    }
  }
  right.style.transform = `translateY(-${count * 100}vh)`;
  left.style.transform = `translateY(${-300 + count * 100}vh)`;
}
