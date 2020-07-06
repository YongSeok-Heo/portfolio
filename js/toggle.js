$(document).ready(function () {
  /**
   * 단추
   */
  // '.nav__toggle'를 클릭하면 자신에 'js-open'클래스를 토글화한다.
  $(".nav__toggle").on("click", function () {
    $(this).toggleClass("js-open");
  });
  // '.nav__info'를 클릭하면 자신과 '.nav__toggle'에서 'js-open'클래스를 제거한다.
  $(".nav__info").on("click", function () {
    $(".nav__toggle").removeClass("js-open");
  });

  /**
   * 메뉴
   */
  // '.nav__toggle'를 클릭하면 '.nav__wrapper'에 'js-active'클래스를 토글화한다.
  $(".nav__toggle").on("click", function () {
    $(".nav__wrapper").toggleClass("js-active");
  });
  // '.nav__info'를 클릭하면 '.nav__wrapper'에 'js-active'클래스를 제거한다.
  $(".nav__info").on("click", function () {
    $(".nav__wrapper").removeClass("js-active");
  });

  /**
   * 이동
   */
  $("a[href*='#']").on("click", function () {
    $("html,body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top - 100,
      },
      2000
    );
  });

  /**
   * aos
   */
  AOS.init({
    easing: "ease",
    duration: 1800,
    once: true,
  });
});
