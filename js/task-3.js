const input = document.getElementById("name-input");
const output = document.getElementById("name-output");

input.addEventListener("input", (event) => {
  const inpuValue = event.target.value.trim();

  if (event.target.value === "" || event.target.value === " ") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = inpuValue;
  }
});
