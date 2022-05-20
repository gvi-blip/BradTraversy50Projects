let square;
(() => {
  let count = 0,
    x = 25,
    y = 25;

  for (let i = 0; i < 16; i++) {
    square = document.createElement("div");
    square.classList += " blocks";
    if (count == 4) {
      count = 0;
      y += 25;
      x = 25;
    } else {
      if (count != 0) {
        x += 25;
      }
    }
    count++;
    square.style.backgroundPosition = `${x}% ${y}%`;
    document.querySelector(".container").appendChild(square);
  }
})();
