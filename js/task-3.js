const input = document.getElementById("name-input");
const output = document.getElementById("name-output");

function addStyleInput() {
  input.style.width = "360px";
  input.style.height = "40px";
  input.style.fontSize = "16px";
  input.style.fontWeight = "400";
  input.style.lineHeight = "1.5";
  input.style.letterSpacing = "0.04em";
  input.style.color = "#2e2f42";
}
addStyleInput();

input.addEventListener("input", (event) => {
  const inpuValue = event.target.value.trim();

  if (event.target.value === "" || event.target.value === " ") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = inpuValue;
  }
});
