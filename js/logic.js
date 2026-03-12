//btn scroll to top
const btnTop = document.querySelector(".btn-top");

window.addEventListener("scroll", function () {
  if (window.scrollY > 250) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
});
btnTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
//btn scroll to top
//start show and hidden links
const ul = document.querySelector(".header .ul");
const listIcon = document.querySelector(".header .icon");
listIcon.onclick = function () {
  ul.classList.toggle("show");
};
ul.addEventListener("click", function (e) {
  e.currentTarget.classList.remove("show");
});
//end show and hidden links
//typing

function typewriter(words, ele, time) {
  let index = 0;
  function typing() {
    if (words.length > index) {
      ele.innerHTML += words[index];
      index++;
      setTimeout(typing, time);
    }
  }
  typing();
}
const headerLanding = document.querySelector(".header-landing");
typewriter("Hello There", headerLanding, 150);
const textlanding = document.querySelector(".text-landing");
setTimeout(
  typewriter,
  1800,
  "Super Creative & Minimal Agency Web Template",
  textlanding,
  100,
);
//typing
//start discriptio in card
const buttons = document.querySelectorAll(".more");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".card");
    const description = card.querySelector(".card-description");

    description.classList.toggle("show");

    btn.textContent = description.classList.contains("show") ? "Less" : "More";
  });
});
// end  discriptio in card
