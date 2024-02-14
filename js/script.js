lightGallery(document.getElementById("lightgallery"), {
  speed: 500,
  allowMediaOverlap: true,
  enableSwipe: true,
});

//탭 메뉴
const tab_list = $(".tab_menu");

tab_list.find("ul ul").hide();
tab_list.find("li.active > ul").show();
tab_list.find("ul>li>a").click(changeTabMenu);
function changeTabMenu(e) {
  e.preventDefault();
  const $this = $(this);
  $this
    .focus()
    .next("ul")
    .show()
    .parent("li")
    .addClass("active")
    .siblings("li")
    .removeClass("active")
    .find(">ul")
    .hide();
}
$(".ban").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 1000,
  dots: true,
});

$(".tit .btn").click((e) => {
  e.preventDefault();
  // $("#cont_nav").css("display", "block");
  $("#cont_nav").slideToggle(200);
  $(".tit .btn").toggleClass("on");
});

$(".gallery_img").slick({
  arrows: false,
  autoplay: true,
  autoplaySpeed: 1000,
  fade: true,
  draggable: false,
});
$(".gallery_img")
  .find("a")
  .click((e) => {
    e.preventDefault();
  });
$(".slick-play").click(function () {
  $(".gallery_img").slick("slickPlay");
});

$(".slick-pause").click(function () {
  $(".gallery_img").slick("slickPause");
});

$(".slick-next").click(function () {
  $(".gallery_img").slick("slickNext");
});

$(".slick-prev").click(function () {
  $(".gallery_img").slick("slickPrev");
});

$(".popup")
  .find(".lay_pop")
  .click((e) => {
    e.preventDefault();
    const layer_popup = $("#layer_popup");
    layer_popup.slideDown();
  });
$("#layer_popup")
  .find("a")
  .click((e) => {
    e.preventDefault();
    $("#layer_popup").slideUp();
  });

$(".popup")
  .find(".window_pop")
  .click((e) => {
    e.preventDefault();
    window.open(
      "popup.html",
      "popup02",
      "width=800, height=559, left=50, top=50, scrollbar=0, toolbar=0, menubar=0"
    );
  });
