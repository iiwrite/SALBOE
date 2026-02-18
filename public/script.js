// =======================
// NAVIGATION LOGIC
// =======================

document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".header");

  if (!nav) return;

  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && currentScroll > 50) {
      // Scrolling down → hide
      nav.classList.add("hidden");
    } else {
      // Scrolling up → show
      nav.classList.remove("hidden");
    }

    lastScroll = currentScroll;
  });
});


document.addEventListener("DOMContentLoaded", () => {
  fetch("/footer.html")
    .then(response => response.text())
    .then(data => {
      // Create a div to hold the footer
      const footerWrapper = document.createElement("div");
      footerWrapper.innerHTML = data;

      // Append it to the end of body
      document.body.appendChild(footerWrapper);
    })
    .catch(err => console.error("Failed to load footer:", err));
});



/*  slick Caraousel

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
  */
 $('.post-wrapper').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  nextArrow: $('.next'),
  prevArrow: $('.prev'),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// =======================
// COMMENTS LOGIC
// =======================






