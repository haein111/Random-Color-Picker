const changeColor = document.getElementById("change-button");
const bg = document.querySelector(".bg");

changeColor.onclick = function () {
  const createColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  let print = document.getElementById("print");
  print.innerHTML = "Current Color is " + createColor;

  bg.style.backgroundColor = createColor;
};
