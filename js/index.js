$(".owl-carousel").owlCarousel({
  loop: true,
  nav: true,
  autoplay: true,
  autoplayTimeout: 2000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    2000: {
      items: 1,
    },
  },
});

$(document).ready(function () {
  $(".list").click(function () {
    const name = $(this).attr("data-filter");
    if (name == "all") {
      $(".itembox").show("100");
    } else {
      $(".itembox")
        .not("." + name)
        .hide("100");
      $(".itembox")
        .filter("." + name)
        .show("100");
    }
  });
  AOS.init();
  $("#hamburger").click(function () {
    $("ul").toggleClass("show");
  });
});
$("li").click(function () {
  $(this).addClass("active").siblings().removeClass("active");
});

$(".list-item a").on("click", function (e) {
  if (this.hash !== "") {
    e.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 60,
      },
      1500
    );
  }
});

$(".move-up").click(function () {
  $("html,body").animate(
    {
      scrollTop: 0,
    },
    1000
  );
});

$(document).ready(function () {
  $("#divshow").click(function () {
    $(".mydiv").css({ display: "flex", flexWrap: "wrap", overflow: "hidden" });
  });
});
