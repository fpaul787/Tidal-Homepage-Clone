// responsive nav
$(function () {
  menu = $("header a");

  $("#openup").on("click", function (e) {
    e.preventDefault();
    menu.slideToggle();
  });

  $(window).resize(function () {
    var w = $(this).width();
    if (w > 480 && menu.is(":hidden")) {
      console.log("removed");
      menu.removeAttr("style");
    }
  });

  $("header a").on("click", function (e) {
    console.log("slide");
    var w = $(window).width();
    if (w < 480) {
      menu.slideToggle();
    }
  });
  $(".open-menu").height($(window).height());
});
