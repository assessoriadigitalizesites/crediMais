$(document).ready(function() {
  // var height = window.screen.width < 768 ? 30 : 100;
  var height = 80;
  $(window).scroll(function (event) {
    if (window.scrollY > height) {
      $(".header").addClass("header-scrolled");
    } else {
      $(".header").removeClass("header-scrolled");
    }
  });
});

$("body").on("click", ".btn, .blue-box-btn", function() {
  window.open("https://api.whatsapp.com/send?phone=5511980651856", "_blank");
});

$("body").on("click", ".header-menu-item", function() {
  toggleMenu();
  $("html, body").animate({ scrollTop: $($(this).attr("data-href")).offset().top - 80 });
})

$("body").on("click", ".header-menu-btn", function() {
  toggleMenu();
});

function toggleMenu() {
  $(".header-menu-btn").toggleClass("active");
  $(".header-menu").toggleClass("show");
}
