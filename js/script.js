(function($) {

function ElementHover(element) {

  element.on('mouseover', function() {
    if ($(this).hasClass('element--hover')) {
    } else {
      $(this).addClass('element--hover');
    }
  })
  element.on('mouseleave', function() {
    if ($(this).hasClass('element--hover')) {
      $(this).removeClass('element--hover');
    }
  })
}

function ElementClick(element) {

  element.on('click', function() {
      element.removeClass('element--click');
    if ($(this).hasClass('element--click')) {
    } else {
      $(this).addClass('element--click');
    }
  })
}

function scrollButtonClick() {
  var $button = $('.scroll-button');

  $button.on('click', function() {
    $(this).removeClass('infinite flash');
    if ($(this).hasClass('pulse')) {
      $(this).removeClass('pulse')
      .addClass('flash');
    } else {
      $(this).addClass('flash');
    }
  })
}

function fadeMe() {
  var time = 0;
  var $element = $('.fadeMe');
	$element.each(function() {
	    $(this).delay(time).fadeIn(1000);
	    time += 1000;
	});
}

function jbControl() {
  $headElement = $('.main-element');

  ElementHover($headElement);
  ElementClick($headElement);
}

jbControl();
scrollButtonClick();
fadeMe();



})(window.$);
