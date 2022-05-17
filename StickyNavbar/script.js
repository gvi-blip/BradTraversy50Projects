const nav = document.getElementsByTagName("nav")[0];
let timerId = true;
document.addEventListener(
  "scroll",
  () => {
    if (timerId) {
      timerId = false;

      if (scrollY > 170) {
        console.log("Y" + scrollY);

        if (!nav.classList.contains("change")) {
          nav.classList += " change";
        }
      } else {
        console.log("Y" + scrollY);
        if (nav.classList.contains("change")) {
          nav.classList.remove("change");
        }
      }
      setTimeout(() => {
        timerId = true;
      }, 20);
    }
  },
  { passive: true }
);
