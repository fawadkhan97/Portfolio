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

new Splide(".splide", {
  type: "loop",
  perPage: 2,
  speed: 1500,
  gap: "50px",
  perMove: 1,
  padding: "10px",
  easing: "ease",
  lazyLoad: "sequential",
  breakpoints: {
    768: {
      perPage: 1,
      padding: "50px",
    },
    500: {
      perPage: 1,
      padding: "20px",
    },
  },
}).mount();

$(document).ready(function () {
  // Add scrollspy to <body>
  $("body").scrollspy({ target: ".nav", offset: 10 });

  // Add smooth scrolling on all links inside the navbar
});
