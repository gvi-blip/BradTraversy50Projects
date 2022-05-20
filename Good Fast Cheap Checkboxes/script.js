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
        // labels[index].classList.remove("label-inactive");
        // balls[index].classList.remove("move-ball-left");
        addRemoveClass("remove", index, "inactive");

        // labels[index].classList += " label-active";
        // balls[index].classList += " move-ball-right";
        addRemoveClass("add", index, "active");
      } else {
        // labels[index].classList.remove("label-active");
        // balls[index].classList.remove("move-ball-right");
        addRemoveClass("remove", index, "active");
        // labels[index].classList += " label-inactive";
        // balls[index].classList += " move-ball-left";
        addRemoveClass("add", index, "inactive");
      }
    } else {
      // labels[index].classList.remove("label-inactive");
      // balls[index].classList.remove("move-ball-left");
      addRemoveClass("remove", index, "inactive");
      // labels[index].classList += " label-active";
      // balls[index].classList += " move-ball-right";
      addRemoveClass("add", index, "active");
      let random = selectRandomIndex(index);
      // labels[random].classList.remove("label-active");
      // balls[random].classList.remove("move-ball-right");
      addRemoveClass("remove", random, "active");
      // labels[random].classList += " label-inactive";
      // balls[random].classList += " move-ball-left";
      addRemoveClass("add", random, "inactive");

      i[random].checked = false;

      console.log(i[random]);
    }
    console.log(e.checked);
  });
});
function addRemoveClass(action, index, status) {
  if (action == "remove") {
    labels[index].classList.remove(
      `${status == "active" ? "label-active" : "label-inactive"}`
    );
    balls[index].classList.remove(
      `${status == "active" ? "move-ball-right" : "move-ball-left"}`
    );
  } else {
    labels[index].classList += `${
      status == "active" ? " label-active" : " label-inactive"
    }`;
    balls[index].classList += `${
      status == "active" ? " move-ball-right" : " move-ball-left"
    }`;
  }
}
let num = 0;
function selectRandomIndex(index) {
  num = Math.floor(Math.random() * 3);
  while (num == index) {
    num = Math.floor(Math.random() * 3);
  }
  return num;
}
