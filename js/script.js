(function($) {

function ElementHover(a, b) {

  a.on('mouseover', function() {
    // console.log(b, this);
    if ($(this).hasClass(b)) {

    } else {
      $(this).addClass(b);
    }
  })
  a.on('mouseleave', function() {
    if ($(this).hasClass(b)) {
      $(this).removeClass(b);
    }
  })
}

function ElementClick(a, b) {

  a.on('click', function() {
      a.removeClass(b);
    if ($(this).hasClass(b)) {
    } else {
      $(this).addClass(b);
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

function fadeMe(element, effect) {
  var time = 0;
  var $element = $('.' + element);
	$element.each(function() {
	    $(this).delay(time).fadeIn(1000).addClass(effect);
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

function onScrollEffect(offsetElement, effectElement, effect) {

  // get current distance from top of viewport
  currentTop = $(window).scrollTop();

  $(window).scroll({
      previousTop: 0
    },

  function() {
    // define the header height here
    var headerHeight = offsetElement.offset().top - 20;
    // if user has scrolled past header, initiate the scroll up/scroll down hide show effect
    if ($(window).scrollTop() > headerHeight) {
      if (currentTop < this.previousTop) {
      } else {
        $(effectElement).addClass(effect);
      }
    }
    this.previousTop = currentTop;
    console.log(this.previousTop);
  });
}

function onScrollFunction(offsetElement, effectFunction) {

  // get current distance from top of viewport
  currentTop = $(window).scrollTop();

  $(window).scroll({
      previousTop: 0
    },

  function() {
    // define the header height here
    var headerHeight = offsetElement.offset().top;
    // if user has scrolled past header, initiate the scroll up/scroll down hide show effect
    if ($(window).scrollTop() > headerHeight) {
      if (currentTop < this.previousTop) {
      } else {
        effectFunction
      }
    }
    this.previousTop = currentTop;
    console.log(this.previousTop);
  });
}

function showOverview() {
  var offsetElement    =  $('#scroll-overview');
  var effectElement    =  $('.showOverview');
  var effect           =  'animated fadeIn'

  onScrollEffect(offsetElement, effectElement, effect);
}

function showSkills() {
  var offsetElement    =  $('#scroll-skills');
  var effectElement    =  $('.skills-container');
  var effect           =  'animated fadeIn'

  onScrollEffect(offsetElement, effectElement, effect);
}

function toTopBtn() {
  var offsetElement    =  $('.header-quote');
  var effectElement    =  $('.to-top-btn');
  var effect           =  'to-top-btn--scroll'

  onScrollEffect(offsetElement, effectElement, effect);
}

function jbControl() {
  // config
  $element = $('.main-element');
  $effectHover = 'animated fadeIn element--hover'
  $effectClick = 'animated fadeOut element--click'

  fadeMe("main-element");
  ElementHover($element, $effectHover);
  ElementClick($element, $effectClick);
}

function showQuote() {
  fadeMe('quote-fade', 'animated fadeInDown')
}

function showSkillName() {
  // var $el = $('.el--bar');
  //
  // $el.each(function() {
  //   var $icn = $(this).find('.el--bar-icn');
  //
  //   $(this).on('mouseover', function() {
  //     $icn.addClass('el--bar-icn-active');
  //     console.log('Mousing over ' + $icn);
  //     // $(this).on('mouseleave', function() {
  //     //   $icn.removeClass('el--bar-icn-active');
  //     // })
  //   })
  // })
  function popIcons() {
    var time = 0;
    var $element = $('.el--bar-icn');
  	$element.each(function() {
  	    $(this).delay(time).addClass('el--bar-icn-active');
  	    time += 500;
  	});
  }


  var el = $('.skills-container');
  var fun = popIcons();
  onScrollFunction(el, fun);


}

showSkillName();

showQuote();
jbControl();
scrollButtonClick();
scrollToElement();
showSkills();
showOverview();
toTopBtn();

})(window.$);
