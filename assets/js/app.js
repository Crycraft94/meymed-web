let $box = $(".isotope-box").isotope({
	itemSelector: ".isotope-item"

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

let countDownDate = new Date("April 9, 2023").getTime();
let x = setInterval(function() {
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



