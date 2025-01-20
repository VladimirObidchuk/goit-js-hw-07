const inputNumber = document.querySelector("input[type='number']");
console.log(inputNumber.value);
const controlsBox = document.getElementById("controls");
const renderButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
const buttons = document.querySelectorAll("button");
const boxes = document.getElementById("boxes");

function addStyleControls() {
  const containerDiv = document.createElement("div");
  containerDiv.className = "container";
  while (controlsBox.firstChild) {
    containerDiv.appendChild(controlsBox.firstChild);
  }
  controlsBox.appendChild(containerDiv);
  controlsBox.style.margin = "0 auto";
  controlsBox.style.display = "flex";
  controlsBox.style.flexDirection = "row";
  controlsBox.style.alignItems = "center";
  controlsBox.style.marginBottom = "16px";

  controlsBox.style.padding = "32px";
  controlsBox.style.borderRadius = "8px";
  controlsBox.style.width = "486px";
  controlsBox.style.height = "104px";
  controlsBox.style.backgroundColor = "#f6f6fe";

  containerDiv.style.display = "flex";
  containerDiv.style.justifyContent = "space-between";
  containerDiv.style.gap = "16px";

  buttons.forEach((button) => {
    button.style.borderRadius = "8px";
    button.style.padding = "8px 16px";
    button.style.width = "120px";
    button.style.height = "40px";
    button.style.outline = "none";
    button.style.border = "none";
    button.style.color = "#fff";
  });

  inputNumber.style.border = "1px solid #808080";
  inputNumber.style.borderRadius = "8px";
  inputNumber.style.textAlign = "center";
  inputNumber.style.width = "150px";
  inputNumber.style.height = "40px";
  inputNumber.style.outline = "none";
}
addStyleControls();

const style = document.createElement("style");
style.innerHTML = `
button[data-create]{
  background-color: #4e75ff;
}
button[data-create]:hover{
  background-color: #6c8cff;
}
  button[data-destroy]{
  background-color: #ff4e4e;
}
button[data-destroy]:hover{
  background-color: #ff7070;
}`;
document.head.appendChild(style);

renderButton.addEventListener("click", createBoxes);
destroyButton.addEventListener("click", destroyBoxes);

function addStyleBoxes() {
  boxes.style.width = "486px";
  boxes.style.margin = "0 auto";
  boxes.style.display = "flex";
  boxes.style.flexDirection = "row";
  boxes.style.flexWrap = "wrap";
  boxes.style.gap = "16px";
  boxes.style.alignItems = "flex-start";
  boxes.style.backgroundColor = "#f6f6fe";
}

function createBoxes(amount) {
  amount = inputNumber.value;
  boxes.innerHTML = "";
  addStyleBoxes();
  if (amount > 100) {
    alert("The maximum number of boxes is 100");
    return;
  } else {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < amount; i++) {
      const div = document.createElement("div");
      div.style.width = `${30 + i * 10}px`;
      div.style.height = `${30 + i * 10}px`;
      div.style.backgroundColor = getRandomHexColor();
      div.style.marginRight = "44px";
      fragment.appendChild(div);
    }
    boxes.appendChild(fragment);
    inputNumber.value = "";
  }
}

function destroyBoxes() {
  inputNumber.value = "";
  boxes.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
