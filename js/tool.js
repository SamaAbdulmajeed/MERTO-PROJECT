let targetDate = new Date();

targetDate.setDate(targetDate.getDate() + 5);

function updateTimer() {
  let now = new Date();

  let diff = targetDate - now;

  if (diff <= 0) {
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";

    return;
  }
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));

  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;

  document.getElementById("hours").innerHTML = String(hours).padStart(2, "0");

  document.getElementById("minutes").innerHTML = String(minutes).padStart(
    2,
    "0",
  );

  document.getElementById("seconds").innerHTML = String(seconds).padStart(
    2,
    "0",
  );
}
updateTimer();
setInterval(updateTimer, 1000);

function openTab(event, tabName) {
  document.querySelectorAll(".tab-content").forEach((el) => {
    el.classList.remove("active");
  });

  document.querySelectorAll(".tab-link").forEach((el) => {
    el.classList.remove("active");
  });

  document.getElementById(tabName).classList.add("active");
  event.currentTarget.classList.add("active");
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
