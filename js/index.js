let typed = new Typed("#typed", {
  stringsElement: "#typed-strings",
  typeSpeed: 60,
  backSpeed: 40,
  smartBackspace: true, // this is a default
  cursorChar: "|",
  autoInsertCss: true,
});

const navbarStyling = () => {
  let navbar = document.getElementById("myNav");
  window.onscroll = () => {
    if (window.pageYOffset > 20) {
      navbar.classList.add("nav-colored");
    } else {
      navbar.classList.remove("nav-colored");
    }
  };

  let hamburger = document.getElementById("nav-hamburger");
  let navbarul = document.getElementById("nav-ul");
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    navbarul.classList.toggle("toggle-content");
  });
};

navbarStyling();

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

  // Add smooth scrolling to all links
  $("a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        1200,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});
