var swiper = new Swiper(".mySwiper-new-collect", {
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: true,
  loop: true,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
var swiper2 = new Swiper(".mySwiper-customers", {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: false,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper4 = new Swiper(".mySwiper-miniNav", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,

  pagination: {
    clickable: true,
  },
});
var swiper5 = new Swiper(" .mySwiper-items", {
  slidesPerView: 3,
  spaceBetween: 10,
  freeMode: true,
  loop: false,
  pagination: {
    clickable: true,
  },
});
var swiper6 = new Swiper(".mySwiper-apply", {
  loop: false,
  spaceBetween: 10,
  slidesPerView: 3,
  freeMode: true,
  autoplay: true,
  watchSlidesProgress: true,
  breakpoints: {
    991: {
      slidesPerView: 5,
      slidesToShow: 5,
      infinite: true,
      dots: false,
    },
  },
});
var swiper7 = new Swiper(".mySwiper-apply-footer", {
  loop: true,
  spaceBetween: 10,
  thumbs: {
    swiper: swiper6,
  },
});

/////////////////////////////////////
let $box = $(".isotope-box").isotope({
  itemSelector: ".isotope-item",
  isOriginLeft: false,
});
$(".isotope-toolbar").on("click", "button", function () {
  let filterValue = $(this).attr("data-type");
  $(".isotope-toolbar").find(".active").removeClass("active");
  $(this).addClass("active");
  if (filterValue !== "*") {
    filterValue = '[data-type="' + filterValue + '"]';
  }
  console.log(filterValue);
  $box.isotope({ filter: filterValue });
});

/////////////////////////////

let countDownDate = new Date("May 9, 2023").getTime();
let x = setInterval(function () {
  let now = new Date().getTime();

  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("time-sec").innerHTML = seconds;
  document.getElementById("time-min").innerHTML = minutes;
  document.getElementById("time-h").innerHTML = hours;
  document.getElementById("time-d").innerHTML = days;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("time-sec").innerHTML = 0;
    document.getElementById("time-min").innerHTML = 0;
    document.getElementById("time-h").innerHTML = 0;
    document.getElementById("time-d").innerHTML = 0;
  }
}, 1000);

////////////////////////////
$(".apply-box-1").on("click", function () {
  $(".slides-title").html("سازمانی");
});
$(".apply-box-2").on("click", function () {
  $(".slides-title").html("قیمت");
});

$(".apply-box-3").on("click", function () {
  $(".slides-title").html("دمو");
});
$(".apply-box-4").on("click", function () {
  $(".slides-title").html("خدمات");
});
$(".apply-box-5").on("click", function () {
  $(".slides-title").html("تعمیرات");
});
