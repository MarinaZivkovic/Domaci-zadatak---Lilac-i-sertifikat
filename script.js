$(function(){
	$(window).scroll(function() {
    var scrollPos = $(window).scrollTop(),
        navbar = $('.navbar-default');

    if (scrollPos > 50) {
      navbar.addClass('change-color');
    } else {
      navbar.removeClass('change-color');
    }
  });

	$('.map-container').click(function(){
		$(this).find('iframe').addClass('clicked')
  }).mouseleave(function(){
		$(this).find('iframe').removeClass('clicked')
  });
});

