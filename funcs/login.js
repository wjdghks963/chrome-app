const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("#nameInput");
const loginBtn = loginForm.querySelector("#submit");
const greeting = document.querySelector("#greeting");

const loginBtnClick = (e) => {
  e.preventDefault();
  loginForm.classList.add("hidden");
  const username = loginInput.value;
  localStorage.setItem("KEY", username);
  greeting.innerText = `안녕하세요 ${username}님`;
  loginForm.remove(loginInput);
};

const getI = localStorage.getItem("KEY");
if (getI === null) {
  loginForm.classList.remove("hidden");
  loginForm.addEventListener("submit", loginBtnClick);
} else {
  greeting.innerText = `안녕하세요 ${getI}님`;
  loginForm.remove(loginInput);
}
