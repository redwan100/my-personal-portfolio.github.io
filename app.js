const form = document.getElementById("form");
const close = document.getElementById("close");
const submit = document.getElementById("submit");

const pop = document.getElementById("popUp");

// login form selection
const login = document.getElementById("login");
const cls = document.getElementById("cls");
const loginForm = document.getElementById("login-form");
const loginBtn = document.getElementById("logSub");
const para = document.getElementById("para");

login.addEventListener("click", () => {
  loginForm.style.display = "block";
});
cls.addEventListener("click", () => {
  loginForm.style.display = "none";
});
loginBtn.addEventListener("click", () => {
  para.innerText = "Login successfully";
});

// submit pop up design
submit.addEventListener("click", (e) => {
  e.preventDefault();
  pop.style.display = "block";
});

close.addEventListener("click", () => {
  pop.style.display = "none";
});

