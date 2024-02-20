// Drop Login

let loginBtn = document.querySelector(".login-btn");
let dropLogin = document.querySelector(".drop-login");

loginBtn.onclick = () => {
  dropLogin.classList.toggle("drop-login-open");
};
// Burger Open Close
const burger = document.querySelector(".burgerbar");
const navMenu = document.querySelector(".navbar");
burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  navMenu.classList.toggle("active");
});


