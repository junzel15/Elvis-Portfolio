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
  const form = document.getElementById("fcf-form-id");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("Name").value;
    const email = document.getElementById("Email").value;
    const message = document.getElementById("Message").value;

    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      alert("Please fill in all fields.");
      return;
    }

    console.log("Name: ", name);
    console.log("Email: ", email);
    console.log("Message: ", message);

    document.getElementById("Name").value = "";
    document.getElementById("Email").value = "";
    document.getElementById("Message").value = "";

    alert("Message sent successfully!");
  });
});
