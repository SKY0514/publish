$(".slide").slick({
  dots: true,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        autoplay: false,
      },
    },
  ],
});

$(".lightbox").lightGallery({});

$(".title_btn").click((e) => {
  e.preventDefault();
  $(".nav").slideToggle();
  $(".title_btn").toggleClass("open");
  const isOpen = $(".title_btn").hasClass("open");
  if (isOpen) {
    $(".title_btn").children("i").attr("class", "fa-solid fa-angle-up");
  } else {
    $(".title_btn > i").children("i").attr("class", "fa-solid fa-angle-down");
  }
});
