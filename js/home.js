$(document).ready(function () {
  $("#hero-slider").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    smartSpeed: 1000,
    nav: true,
    dots: true,
    // الأسهم هتكون شفافة ومن غير بوكس
    navText: ["<span>&#10094;</span>", "<span>&#10095;</span>"],
  });
});

// updateCountdown watch
let targetTime = new Date();
targetTime.setHours(targetTime.getHours() + 5); // 5 ساعات من دلوقتي

function updateCountdown() {
  let now = new Date().getTime();
  let distance = targetTime - now;

  let hours = Math.floor(distance / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("hours").innerText = String(hours).padStart(2, "0");
  document.getElementById("minutes").innerText = String(minutes).padStart(
    2,
    "0",
  );
  document.getElementById("seconds").innerText = String(seconds).padStart(
    2,
    "0",
  );
}

setInterval(updateCountdown, 1000);
updateCountdown();
// Slider logic for blog
$(".blog-carousel").owlCarousel({
  loop: true,
  margin: 20,
  nav: true,
  dots: false,

  responsive: {
    0: {
      items: 1,
    },

    768: {
      items: 2,
    },

    1000: {
      items: 3,
    },
  },
});

// Slider logic for autoplay slider circle
$(document).ready(function () {
  $("#category-slider").owlCarousel({
    loop: true,
    margin: 1,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 4000,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 4,
      },
      1000: {
        items: 7,
      },
    },
  });
});

// hoodie section
$(document).ready(function () {
  var slider = $("#mainCarousel");

  slider.owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 4500,
    smartSpeed: 1200,
    nav: true,
    dots: false,
    navText: [
      '<i class="fa-solid fa-chevron-left"></i>',
      '<i class="fa-solid fa-chevron-right"></i>',
    ],
  });
});

function changeSlide(index) {
  $("#mainCarousel").trigger("to.owl.carousel", [index, 500]);
}

// Slider logic for best selling
$(".product-slider").owlCarousel({
  loop: true,
  margin: 0,
  nav: true,
  dots: false,

  responsive: {
    0: {
      items: 1,
    },

    768: {
      items: 2,
    },

    1000: {
      items: 3,
    },

    1200: {
      items: 5,
    },
  },
});
