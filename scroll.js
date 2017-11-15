$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {

        var topVal = 0;
        if( $(window).width() > 970 ){
          topVal = target.offset().top;
        }
        else {
          topVal = target.offset().top - 254;
        }

        $('html, body').animate({
          scrollTop: topVal
        }, 1000);
        return false;
      }
    }
  });
});

var winWidth = $(window).width()