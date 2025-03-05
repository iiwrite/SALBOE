// =======================
// NAVIGATION LOGIC
// =======================

document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".header");

  if (!nav) {
    console.error("Navigation element not found");
    return;
  }

  function showNav() {
    nav.style.transform = "translateY(0)";
  }

  function hideNav() {
    nav.style.transform = "translateY(-100%)";
  }

  window.addEventListener("scroll", () => {
    if (window.scrollY === 0) {
      showNav();
    } else {
      hideNav();
    }
  });

  document.addEventListener("dblclick", (event) => {
    if (!window.getSelection().toString().length) {
      showNav();
    }
  });

  // Ensure nav is always fixed
  nav.style.position = "fixed";
  nav.style.top = "0";
  nav.style.width = "100%";
  nav.style.transition = "transform 0.3s ease-in-out";
});

/*  slick Caraousel*/

$('.post-wrapper').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  nextArrow: $('.next'),
  prevArrow: $('.prev'),

});

responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true,
      dots: true
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
]

// =======================
// COMMENTS LOGIC
// =======================


