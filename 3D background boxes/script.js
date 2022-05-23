(() => {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      square = document.createElement("div");
      square.classList += " blocks three-d";
      square.style.backgroundPosition = `${-j * 70}px ${-i * 70}px`;
      document.querySelector(".container").appendChild(square);
    }
  }
})();
const blocks = document.getElementsByClassName("blocks");
const container = document.querySelector(".container");
function magic() {
  if (!container.classList.contains("ctd")) {
    setTimeout(() => {
      for (let i = 0; i < blocks.length; i++) {
        blocks[i].classList.remove("three-d");
      }
    }, 400);
    setTimeout(() => {
      container.classList += " ctd";
    }, 800);
    for (let i = 0; i < blocks.length; i++) {
      blocks[i].classList.remove("e-rotate");

      blocks[i].classList += " r-rotate";
    }
    container.classList.remove("expand");
    container.classList += " reduce";
  } else {
    container.classList.remove("ctd");
    container.classList.remove("reduce");
    container.classList += " expand";

    setTimeout(() => {
      for (let i = 0; i < blocks.length; i++) {
        blocks[i].classList += " three-d";
      }
    }, 100);
    for (let i = 0; i < blocks.length; i++) {
      blocks[i].classList.remove("r-rotate");
      blocks[i].classList += " e-rotate";
    }
  }
}
