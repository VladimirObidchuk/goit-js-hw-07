const loginForm = document.querySelector(".login-form");
const loginItems = loginForm.querySelectorAll("label");
const loginInput = loginForm.querySelectorAll("input");
const loginButton = loginForm.querySelector("button");

loginForm.style.display = "flex";
loginForm.style.flexDirection = "column";
loginItems.forEach((item) => {
  item.style.display = "flex";
  item.style.flexDirection = "column";
  item.style.width = "360px";
  item.style.marginBottom = "8px";
});

loginInput.forEach((input) => {
  input.style.width = "360px";
  input.style.padding = "8px 16px";
  input.style.marginTop = "8px";
  input.style.borderRadius = "4px";
  input.style.outline = "none";
});

loginButton.style.width = "80px";
loginButton.style.borderRadius = "8px";
loginButton.style.border = "none";
loginButton.style.color = "white";
loginButton.style.padding = "8px 16px";
loginButton.style.cursor = "pointer";

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const login = loginForm.elements.email.value.trim();
  const password = loginForm.elements.password.value.trim();
  if (!login || !password) {
    alert("All form fields must be filled in");
    return;
  }
  const formData = {
    email: login,
    password: password,
  };
  console.log(formData);
  loginForm.reset();
});

const style = document.createElement("style");
style.innerHTML = `
input{
border : 1px solid #808080;
}
input:hover{
border : 2px solid black;
}
button{
  background-color: #4e75ff;
}
button:hover{
  background-color: #6c8cff;
}`;
document.head.appendChild(style);
