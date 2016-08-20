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
	    time += 500;
	});
}

function scrollToElement() {
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
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
scrollToElement();



})(window.$);
