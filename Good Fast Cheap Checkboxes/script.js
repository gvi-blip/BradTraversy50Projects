const labels = document.getElementsByTagName("label");
const balls = document.getElementsByClassName("ball");

let checked = 0;
let switchindex = 0;
let timerId = true;
let gg = true;
const i = document.querySelectorAll("input[name='check']");
i.forEach((e, index) => {
  e.addEventListener("click", () => {
    checked = 0;
    gg = true;
    i.forEach((q, ind) => {
      if (q.checked) {
        checked++;
      }
    });
    if (checked == 3) {
      gg = false;
    }
    if (gg) {
      if (!labels[index].classList.contains("label-active")) {
        labels[index].classList.remove("label-inactive");
        balls[index].classList.remove("move-ball-left");
        labels[index].classList += " label-active";
        balls[index].classList += " move-ball-right";
      } else {
        labels[index].classList.remove("label-active");
        balls[index].classList.remove("move-ball-right");
        labels[index].classList += " label-inactive";
        balls[index].classList += " move-ball-left";
      }
    } else {
      labels[index].classList.remove("label-inactive");
      balls[index].classList.remove("move-ball-left");
      labels[index].classList += " label-active";
      balls[index].classList += " move-ball-right";
      let random = selectRandomIndex(index);
      labels[random].classList.remove("label-active");
      balls[random].classList.remove("move-ball-right");
      labels[random].classList += " label-inactive";
      balls[random].classList += " move-ball-left";
      //   e.checked = false;

      i[random].checked = false;

      console.log(i[random]);
    }
    console.log(e.checked);
  });
});
let num = 0;
function selectRandomIndex(index) {
  num = Math.floor(Math.random() * 3);
  while (num == index) {
    num = Math.floor(Math.random() * 3);
  }
  return num;
}
