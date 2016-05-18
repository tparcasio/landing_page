$(document).ready(function(){

  //WOW animations
  new WOW().init();

  //Swap out the class "affix-top" on the nav for "affix" when the scroll distance reaches past 50 pixels
  $(window).on("scroll", function() {
      var scrollDistance = $(window).scrollTop();

      if (scrollDistance > 50) {
          $("#mainNav")
            .removeClass("affix-top")
            .addClass("affix");
      } else {
          $("#mainNav")
            .removeClass("affix")
            .addClass("affix-top");
      }
  });

  //When the navbar links are clicked, animate a page scroll down to that anchor
  $(document).on("click", ".page-scroll", function() {
      event.preventDefault(); //Elimiates flashing

      var href = $(this).attr("href");

      $("body").animate({
          scrollTop: $(href).offset().top
      }, 1000);
  });

  //Use Bootstrap scrollspy to change the navbar links on scroll
  $('body').scrollspy({ target: '#mainNav' });

});
