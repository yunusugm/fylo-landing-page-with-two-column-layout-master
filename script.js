const navLinks = document.querySelectorAll(".nav-link");
const navItem = document.querySelector(".nav-item");
const buttons = document.querySelectorAll(".btn");

navItem.addEventListener("click", function (e) {
  if (e.target.className === "nav-link") {
    navLinks.forEach(el => {
      el.classList.contains("active");
      el.classList.remove("active");
    });
    e.target.classList.add("active");
  }
});

buttons.forEach(btn => {
  btn.addEventListener("click", function (e) {
    console.log("ok");
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    let ripples = document.createElement("span");
    ripples.style.left = x + "px";
    ripples.style.top = y + "px";
    this.appendChild(ripples);

    setTimeout(() => {
      ripples.remove();
    }, 750);
  });
});
