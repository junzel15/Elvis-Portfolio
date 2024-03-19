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

document.addEventListener("DOMContentLoaded", function () {
  const hide = document.querySelector("#hide");
  const container = document.querySelector(".container");
  const navcontainer = document.querySelector(".navbar");
  const show = document.querySelector(".menu-btn");
  const up = document.querySelector(".up");
  const skillheading = document.querySelector(".skills-section h3");
  const skillcontent = document.querySelectorAll(".skills-list .skill");
  const portfolio = document.querySelector("#portfolio");
  const contact = document.querySelector(".contact-form");
  const sections = document.querySelectorAll("section");
  const imagewrappers = document.querySelectorAll(".imagewrapper1");

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
      skillcontent.forEach((content) => {
        content.style.opacity = "1";
        content.style.transform = "translateX(0)";
      });
    } else {
      skillheading.style.opacity = "0";
      skillheading.style.transition = "1s ease-in-out";
      skillheading.style.transform = "scale(0)";
      skillcontent.forEach((content) => {
        content.style.opacity = "0";
        content.style.transform = "translateX(-100px)";
      });
    }

    if (window.scrollY >= 1350) {
      portfolio.style.opacity = "1";
      portfolio.style.transition = "2s ease-in-out";
    } else {
      portfolio.style.opacity = "0";
      portfolio.style.transition = "2s ease-in-out";
    }

    if (window.scrollY >= 1470) {
      imagewrappers.forEach((wrapper) => {
        wrapper.style.opacity = "1";
        wrapper.style.transition = "1s ease-in-out";
        wrapper.style.transform = "translateX(0)";
      });
    } else {
      imagewrappers.forEach((wrapper) => {
        wrapper.style.opacity = "0";
        wrapper.style.transition = "1s ease-in-out";
        wrapper.style.transform = "translateX(100px)";
      });
    }

    if (window.scrollY >= 1975) {
      contact.style.opacity = "1";
      contact.style.transition = "1.5s ease-in-out";
    } else {
      contact.style.opacity = "0";
      contact.style.transition = "1.5s ease-in-out";
    }

    sections.forEach((section) => {
      const top = window.scrollY;
      const offset = section.offsetTop - 60;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");

      if (top >= offset && top < offset + height) {
        const navLinks = document.querySelectorAll(".nav-links a");
        navLinks.forEach((link) => {
          link.classList.remove("active");
        });
        const activeNavLink = document.querySelector(
          "nav a[href*='" + id + "']"
        );
        if (activeNavLink) {
          activeNavLink.classList.add("active");
        }
      }
    });
  });
});
