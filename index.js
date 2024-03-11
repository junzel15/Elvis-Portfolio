const hide = document.querySelector("#hide");
const container = document.querySelector(".container");
const navcontainer = document.querySelector("#navcontainer");
const show = document.querySelector("#show");
const aboutheading = document.querySelector("#aboutheading");
const aboutcontainer = document.querySelector(".aboutcontainer");
const skillheading = document.querySelector(".skillheading");
const skillcontent = document.querySelectorAll(".skillcontent");
const up = document.querySelector(".up");
const body = document.querySelector("body");
const home = document.querySelector("#home");
const portfolio = document.querySelector(".portfolio");
const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");
const fourth = document.querySelector(".fourth");
const fifth = document.querySelector(".fifth");
const sixth = document.querySelector(".sixth");
const contact = document.querySelector(".contact");

show.addEventListener("click", function () {
  container.style.left = "0";
  show.style.display = "none";
});

hide.addEventListener("click", function () {
  container.style.left = "-50%";
  show.style.display = "block";
});

navcontainer.addEventListener("click", function () {
  container.style.left = "-70%";
  show.style.display = "block";
});

window.addEventListener("scroll", function () {
  if (window.scrollY >= 250) {
    up.style.opacity = "1";
    up.style.visibility = "visible";
    up.style.transition = "1s ease";
  } else {
    up.style.opacity = "0";
    up.style.transition = "1s ease";
  }
  if (window.scrollY >= 700) {
    skillheading.style.opacity = "1";
    skillheading.style.transition = "1s ease-in-out";
    skillheading.style.transform = "scale(1)";
  } else {
    skillheading.style.opacity = "0";
    skillheading.style.transition = "1s ease-in-out";
    skillheading.style.transform = "scale(0)";
  }

  if (window.scrollY >= 900) {
    skillcontent[0].style.opacity = "1";
    skillcontent[0].style.transition = "1s ease-in-out";
    skillcontent[0].style.transform = "translateX(0px)";
    skillcontent[1].style.opacity = "1";
    skillcontent[1].style.transition = "1s ease-in-out";
    skillcontent[1].style.transform = "translateX(0px)";
    skillcontent[2].style.opacity = "1";
    skillcontent[2].style.transition = "1s ease-in-out";
    skillcontent[2].style.transform = "translateX(0px)";
    skillcontent[3].style.opacity = "1";
    skillcontent[3].style.transition = "1s ease-in-out";
    skillcontent[3].style.transform = "translateX(0px)";
    skillcontent[4].style.opacity = "1";
    skillcontent[4].style.transition = "1s ease-in-out";
    skillcontent[4].style.transform = "translateX(0px)";
    skillcontent[5].style.opacity = "1";
    skillcontent[5].style.transition = "1s ease-in-out";
    skillcontent[5].style.transform = "translateX(0px)";
  } else {
    skillcontent[0].style.opacity = "0";
    skillcontent[0].style.transition = "1s ease-in-out";
    skillcontent[0].style.transform = "translateX(-100px)";
    skillcontent[1].style.opacity = "0";
    skillcontent[1].style.transition = "1s ease-in-out";
    skillcontent[1].style.transform = "translateX(100px)";
    skillcontent[2].style.opacity = "0";
    skillcontent[2].style.transition = "1s ease-in-out";
    skillcontent[2].style.transform = "translateX(-100px)";
    skillcontent[3].style.opacity = "1";
    skillcontent[3].style.opacity = "0";
    skillcontent[3].style.transition = "1s ease-in-out";
    skillcontent[3].style.transform = "translateX(100px)";
    skillcontent[4].style.opacity = "0";
    skillcontent[4].style.transition = "1s ease-in-out";
    skillcontent[4].style.transform = "translateX(-100px)";
    skillcontent[5].style.opacity = "0";
    skillcontent[5].style.transition = "1s ease-in-out";
    skillcontent[5].style.transform = "translateX(100px)";
    skillcontent[6].style.opacity = "0";
    skillcontent[6].style.transition = "1s ease-in-out";
    skillcontent[6].style.transform = "translateX(100px)";
  }

  if (window.scrollY >= 1350) {
    portfolio.style.opacity = "1";
    portfolio.style.transition = "2s ease-in-out";
  } else {
    portfolio.style.opacity = "0";
    portfolio.style.transition = "2s ease-in-out";
  }

  if (window.scrollY >= 1470) {
    first.style.opacity = "1";
    first.style.transition = "1s ease-in-out";
    first.style.transform = "translateX(0px)";
    second.style.opacity = "1";
    second.style.transition = "1s ease-in-out";
    second.style.transform = "translateX(0px)";
    third.style.opacity = "1";
    third.style.transition = "1s ease-in-out";
    third.style.transform = "translateX(0px)";
    fourth.style.opacity = "1";
    fourth.style.transition = "1s ease-in-out";
    fourth.style.transform = "translateX(0px)";
    fifth.style.opacity = "1";
    fifth.style.transition = "1s ease-in-out";
    fifth.style.transform = "translateX(0px)";
    sixth.style.opacity = "1";
    sixth.style.transition = "1s ease-in-out";
    sixth.style.transform = "translateX(0px)";
  } else {
    first.style.opacity = "0";
    first.style.transition = "1s ease-in-out";
    first.style.transform = "translateX(100px)";
    second.style.opacity = "0";
    second.style.transition = "1s ease-in-out";
    second.style.transform = "translateX(-100px)";
    third.style.opacity = "0";
    third.style.transition = "1s ease-in-out";
    third.style.transform = "translateX(100px)";
    fourth.style.opacity = "0";
    fourth.style.transition = "1s ease-in-out";
    fourth.style.transform = "translateX(-100px)";
    fifth.style.opacity = "0";
    fifth.style.transition = "1s ease-in-out";
    fifth.style.transform = "translateX(100px)";
    sixth.style.opacity = "0";
    sixth.style.transition = "1s ease-in-out";
    sixth.style.transform = "translateX(-100px)";
  }

  if (window.scrollY >= 1975) {
    contact.style.opacity = "1";
    contact.style.transition = "1.5s ease-in-out";
  } else {
    contact.style.opacity = "0";
    contact.style.transition = "1.5s ease-in-out";
  }
});
