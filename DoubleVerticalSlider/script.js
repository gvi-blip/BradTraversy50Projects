const left = document.getElementById("left-cont");
const right = document.getElementById("right-cont");
let count = 1;

function slide(direction) {
  if (direction == "up") {
    if (count <= 3) {
      right.style.transform = `translateY(${-100 * count}vh)`;
      left.style.transform = `translateY(${100 * count - 300}vh)`;
      count++;
    } else {
      right.style.transform = "translateY(0vh)";
      left.style.transform = "translateY(-300vh)";
      count = 1;
    }
    console.log(count);
  } else {
    console.log(count);
    if (count < 4) {
      right.style.transform = `translateY(${(count + 1) * -100 + 100}vh)`;
      left.style.transform = `translateY(${-100 * (3 - count)}vh)`;
      count++;
    } else {
      right.style.transform = "translateY(0vh)";
      left.style.transform = "translateY(-300vh)";
      count = 1;
    }
  }
}
