const widgetDiv = document.querySelector(".widget");
const containerDiv = document.createElement("div");
containerDiv.className = "container";
while (widgetDiv.firstChild) {
  containerDiv.appendChild(widgetDiv.firstChild);
}
widgetDiv.appendChild(containerDiv);

widgetDiv.style.margin = "0 auto";
widgetDiv.style.width = "345px";
widgetDiv.style.height = "280px";
widgetDiv.style.display = "flex";
widgetDiv.style.flexDirection = "column";
widgetDiv.style.alignItems = "center";
widgetDiv.style.justifyContent = "center";

const button = document.querySelector(".change-color");
button.style.borderRadius = "8px";
button.style.padding = "8px 16px";
button.style.width = "148px";
button.style.height = "40px";
button.style.backgroundColor = "#4e75ff";
button.style.outline = "none";
button.style.border = "none";

const span = document.querySelector(".color");
button.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  span.textContent = randomColor;
  document.body.style.backgroundColor = randomColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
