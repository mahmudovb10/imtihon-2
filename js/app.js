const showBtn = document.querySelector("#showBtn");
const hiddenNav = document.querySelector(".header__hidden");

showBtn.addEventListener("click", () => {
  hiddenNav.classList.toggle("show");
  document.body.style.overflowY = "hidden";
});
