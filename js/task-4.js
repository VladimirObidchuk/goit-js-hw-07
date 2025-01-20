const loginForm = document.querySelector(".login-form");
const loginItems = loginForm.querySelectorAll("label");
const loginInput = loginForm.querySelectorAll("input");
const loginButton = loginForm.querySelector("button");

const emailInput = loginForm.elements.email;
const passwordInput = loginForm.elements.password;
const emailErrorSpan = addErrorSpan(emailInput);
const passwordErrorSpan = addErrorSpan(passwordInput);

loginForm.style.display = "flex";
loginForm.style.flexDirection = "column";
loginItems.forEach((item) => {
  item.style.display = "flex";
  item.style.flexDirection = "column";
  item.style.width = "360px";
  item.style.marginBottom = "20px";
  item.style.position = "relative";
});

loginInput.forEach((input) => {
  input.style.width = "360px";
  input.style.padding = "8px 16px";
  input.style.borderRadius = "4px";
  input.style.outline = "none";
  input.style.marginTop = "8px";
});

loginButton.style.width = "80px";
loginButton.style.borderRadius = "8px";
loginButton.style.border = "none";
loginButton.style.color = "white";
loginButton.style.padding = "8px 16px";
loginButton.style.cursor = "pointer";

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const login = emailInput.value.trim();
  const password = passwordInput.value.trim();
  let isValid = true;

  if (!login) {
    alert("All form fields must be filled in");
    emailErrorSpan.textContent = "Email is required";
    isValid = false;
  } else {
    emailErrorSpan.textContent = "";
  }
  if (!password) {
    passwordErrorSpan.textContent = "Password is required";
    isValid = false;
  } else {
    passwordErrorSpan.textContent = "";
  }

  if (login && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(login)) {
    emailErrorSpan.textContent = "Invalid email format";
    isValid = false;
  }
  if (password && password.length < 8) {
    passwordErrorSpan.textContent =
      "Password must be at least 8 characters long";
    isValid = false;
  }
  if (!isValid) {
    return;
  }

  const formData = {
    email: login,
    password: password,
  };
  console.log(formData);
  loginForm.reset();
});

function addErrorSpan(inputElement) {
  const errorSpan = document.createElement("span");
  errorSpan.className = "error-message";
  errorSpan.style.color = "red";
  errorSpan.style.fontSize = "12px";
  errorSpan.style.position = "absolute";
  errorSpan.style.bottom = "-16px";

  inputElement.parentNode.insertBefore(errorSpan, inputElement.nextSibling);
  return errorSpan;
}

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
