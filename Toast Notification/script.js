const tc = document.querySelector("#toast-notification-container");
console.log(tc);
let div;
let n = 0;
let v;
const notifications = {
  one: {
    color: "red",
    width: 100,
    message: "Message One",
  },
  two: {
    color: "green",
    width: 110,
    message: "Message Two",
  },
  three: {
    color: "yellow",
    width: 120,
    message: "Message Three",
  },
  four: {
    color: "blue",
    width: 100,
    message: "Message Four",
  },
};
function toast() {
  n = Math.floor(Math.random() * 4);
  v = Object.values(notifications)[n];
  div = document.createElement("div");
  div.style.width = `${v.width}px`;
  div.style.color = v.color;
  div.innerText = v.message;
  div.classList += " toast";
  tc.appendChild(div);
  console.log(tc);
  setTimeout(() => {
    tc.removeChild(tc.firstChild);
  }, 1000);
}
