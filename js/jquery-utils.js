$(document).ready(() => {
  // Navbar
  $(".content, #closeMenu").click(() => {
    $("body").removeClass("overflow-y-hidden");
    $(".sidebar").addClass("translate-x-72").removeClass("translate-x-0");
    $(".overlay").removeClass("min-w-screen").addClass("w-0 -left-40");
  });

  $("#openMenu").click(() => {
    $("body").addClass("overflow-y-hidden");
    $(".sidebar").addClass("translate-x-0").removeClass("translate-x-72");
    $(".overlay").addClass("min-w-screen").removeClass("w-0 -left-40");
  });

  $(window).resize(() => {
    $(window).width() >= 639
      ? $(".overlay").addClass("w-0 -left-40") &&
        $("body").removeClass("overflow-y-hidden") &&
        $(".sidebar").addClass("translate-x-72").removeClass("translate-x-0") &&
        $(".slick-slide").addClass("mr-[33px]").removeClass("mx-5")
      : $(".slick-slide").removeClass("mr-[33px]").addClass("mx-5");
  });

  // Slick Carousel
  $(() => {
    $(".slick-slide").addClass("mr-[33px]");
  });

  $(".carousel").slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    prevArrow: `
                <button type="button" class="w-8 h-8  rounded-full absolute -bottom-14 right-1/2 me-4 transition-all border-gray-cst border-solid border hover:bg-green-cst hover:text-white hover:border-none">
                    <i class="fa-solid fa-chevron-left"></i>
                </button>
                `,
    nextArrow: `
                <button type="button" class="w-8 h-8 rounded-full absolute -bottom-14 left-1/2 ms-4 transition-all border-gray-cst border-solid border hover:bg-green-cst hover:text-white hover:border-none">
                    <i class="fa-solid fa-chevron-right"></i>
                </button>
                `,
    responsive: [
      {
        breakpoint: 639,
        settings: {
          variableWidth: false,
          centerMode: false,
        },
      },
    ],
  });
});
