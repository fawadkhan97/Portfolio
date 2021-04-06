var typed = new Typed("#typed", {
  stringsElement: "#typed-strings",
  typeSpeed: 60,
  backSpeed: 40,
  smartBackspace: true, // this is a default
  cursorChar: "|",
  autoInsertCss: true,
});

var navbar = document.getElementById("myNav");

window.onscroll = () => {
  if (window.pageYOffset > 20) {
    navbar.classList.add("nav-colored");
  } else {
    navbar.classList.remove("nav-colored");
  }
};
