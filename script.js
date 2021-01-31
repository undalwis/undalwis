var activator = $('#activator');
var navBg = $('#fade-bg');

activator.on('click', function(){
  $(this).toggleClass('active');
  $('#activate-menu').toggleClass('visible');
  navBg.fadeToggle();
});


navBg.on('click', function(){
  $('#activate-menu').removeClass('visible');
  $(activator).removeClass('active');
  $(this).hide();
});


$('.wrapper').each(function() {
  var $slider = $(this);
  var numberOfSlides = $slider.find('.panel').length;

  $slider.find('.panel:eq(0)').addClass('_active');
  $slider.find('.nav-dot:eq(0)').addClass('active');

  var $activeSlide = $slider.find('.panel._active');
  var $nextBtn = $slider.find('.next-btn');
  var $prevBtn = $slider.find('.prev-btn');

  $('.nav-dot').on('click', function() {
    var slideToGo = $(this).data('slide');
    goToSlide(slideToGo);
  });

  $slider.on('slide.changed', function() {
    console.log('slide changed !');
    $('.nav-dot').removeClass('active');
    var $activeDot = $('.nav-dot[data-slide="' + $('.panel._active').data('slide') + '"]');
    console.log();
    $activeDot.addClass('active');
  });

  $nextBtn.on('click', function(event) {
    nextSlide();
  });

  $prevBtn.on('click', function(event) {
    prevSlide();
  });

  function nextSlide() {
    $activeSlide = $slider.find('.panel._active');
    var $nextSlide = $activeSlide.next('.panel');
    $activeSlide.removeClass('_active');
    $nextSlide.addClass('_active');

    //$activeSlide = $nextSlide;

    var slideIndex = $slider.find('.panel._active').index('.panel');
    console.log(slideIndex);

    if (slideIndex >= numberOfSlides || slideIndex <= -1) {
      firstSlide();
      $slider.trigger('slide.changed');

    } else {
      $slider.trigger('slide.changed');
    }

  }

  function prevSlide() {
    $activeSlide = $slider.find('.panel._active');

    var $prevSlide = $activeSlide.prev('.panel');

    $activeSlide.removeClass('_active');
    $prevSlide.addClass('_active');

    var slideIndex = $slider.find('.panel._active').index();
    console.log(slideIndex);

    if (typeof $prevSlide === 'undefined' || $prevSlide === null || $prevSlide.length == -1 || slideIndex <= -1) {
      lastSlide();
      $slider.trigger('slide.changed');
    } else {
      $slider.trigger('slide.changed');
    }

  }

  function firstSlide() {
    $('.panel._active').removeClass('_active');
    $slider.find('.panel:eq(0)').addClass('_active');
    $activeSlide = $slider.find('.panel:eq(0)');

  }

  function lastSlide() {

    $('.panel._active').removeClass('_active');
    $slider.find('.panel').eq(numberOfSlides - 1).addClass('_active');

  }

  function goToSlide(slideToGo) {
    $('.panel._active').removeClass('_active');
    $slider.find('.panel').eq(slideToGo - 1).addClass('_active');
    $activeSlide = $slider.find('.panel').eq(slideToGo - 1).addClass('_active');
    $slider.trigger('slide.changed');
  }

});


$.fn.jQuerySimpleCounter = function( options ) {
	    var settings = $.extend({
	        start:  0,
	        end:    100.00,
	        easing: 'swing',
	        duration: 400,
	        complete: ''
	    }, options );

	    var thisElement = $(this);

	    $({count: settings.start}).animate({count: settings.end}, {
			duration: settings.duration,
			easing: settings.easing,
			step: function() {
				var mathCount = Math.ceil(this.count);
				thisElement.text(mathCount);
			},
			complete: settings.complete
		});
	};



$('#number2').jQuerySimpleCounter({end: 98,duration: 3000});
$('#number3').jQuerySimpleCounter({end: 37,duration: 2000});
$('#number4').jQuerySimpleCounter({end: 100,duration: 2000});


