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

// Game Info Read More

// function toggleVisibility(dotsId, moreId, btnId) {
//   let dots = document.getElementById(dotsId);
//   let moreText = document.getElementById(moreId);
//   let btnText = document.getElementById(btnId);

//   if (dots.style.display === "none") {
//     dots.style.display = "inline";
//     btnText.innerHTML = "See Game Info";
//     moreText.style.display = "none";
//   } else {
//     dots.style.display = "none";
//     btnText.innerHTML = "Hide";
//     moreText.style.display = "inline";
//   }
// }
