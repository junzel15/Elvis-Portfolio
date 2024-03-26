// JavaScript for hover effect
document.addEventListener("DOMContentLoaded", function () {
  // Skill section
  const skillImages = document.querySelectorAll(".skills-list .skill img");
  skillImages.forEach((image) => {
    image.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.1)";
      this.style.transition = "transform 0.3s ease";
    });
    image.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)";
    });
  });

  // Portfolio section
  const portfolioImages = document.querySelectorAll(".imagecontent img");
  portfolioImages.forEach((image) => {
    image.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.1)";
      this.style.transition = "transform 0.3s ease";
    });
    image.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)";
    });
  });
});

console.log("app has started.");

var menuBtn = document.querySelector(".menu-btn");
var navBar = document.querySelector(".navbar");

menuBtn.addEventListener("click", function () {
  navBar.classList.toggle("menu-active");
});

var navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function (navLink) {
  navLink.addEventListener("click", function () {
    document.querySelector(".navbar").classList.toggle("menu-active");
  });
});

var sec = document.querySelectorAll("section");

window.onscroll = function () {
  sec.forEach(function (section) {
    var top = window.scrollY;
    var offset = section.offsetTop - 60;
    var height = section.offsetHeight;
    var id = section.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach(function (link) {
        link.classList.remove("active");
        document
          .querySelector("nav a[href*='" + id + "']")
          .classList.add("active");
      });
    }
  });
};
