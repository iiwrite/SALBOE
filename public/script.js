document.addEventListener("DOMContentLoaded", function () {

  /* =====================
     HEADER HIDE / SHOW
  ===================== */
  const header = document.querySelector(".header");
  let lastScroll = 0;

  if (header) {
    window.addEventListener("scroll", function () {
      const currentScroll = window.pageYOffset;

      if (currentScroll > lastScroll && currentScroll > 80) {
        header.classList.add("hidden");
      } else {
        header.classList.remove("hidden");
      }

      lastScroll = currentScroll;
    });
  }

  /* =====================
     LOAD FOOTER
  ===================== */
  fetch("/footer.html")
    .then(response => response.text())
    .then(data => {
      const wrapper = document.createElement("div");
      wrapper.innerHTML = data;
      document.body.appendChild(wrapper);
    })
    .catch(error => console.error("Footer load error:", error));

  /* =====================
     SLICK SLIDER
  ===================== */
  if ($(".post-wrapper").length) {
    $(".post-wrapper").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      nextArrow: $(".next"),
      prevArrow: $(".prev"),
      responsive: [
        {
          breakpoint: 1024,
          settings: { slidesToShow: 2 }
        },
        {
          breakpoint: 768,
          settings: { slidesToShow: 1 }
        }
      ]
    });
  }

});
