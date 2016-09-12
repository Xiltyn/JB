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
  $('a').on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== '') {
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

function onScrollEffect(offsetElement, effectElement, effect, callback) {

  // get current distance from top of viewport
  var currentTop = $(window).scrollTop();

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
  if(typeof callback == 'function')
  callback();
}

function onScrollFunction(offsetElement, effectFunction) {

  // get current distance from top of viewport
  var currentTop = $(window).scrollTop();

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

function loop() {
    var args = arguments;
    if (args.length <= 0)
        return;
    (function chain(i) {
        if (i >= args.length || typeof args[i] !== 'function')
            return;
        window.setTimeout(function() {
            args[i]();
            chain(i + 1);
        }, 500);
    })(0);
}

function toggleMenu() {
  var $menuBtn = $('.header-bar--menu-btn');

  $menuBtn.on('click', function(event) {
    var element = 'nav-el';
    var effect = 'nav-el--active';
    fadeMe(element, effect);

    $('html').one('click', function() {
      $('.' + element).removeClass('nav-el--active');
    })

    event.stopPropagation();

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

  // get current distance from top of viewport
  var currentTop = $(window).scrollTop();

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
      loop(
        function() {
          var fillLevel

          $('.el--bar').each(function(i) {
            var $el = $(this);
            var defaultLevel = 100;
            var fillLevel  = +$(this).find('.el--bar-fill').attr('data-skillLevel');
            var setTo = defaultLevel - fillLevel;

            setTimeout(function() {
              $el.find('.el--bar-fill').css('transform', 'translateY(' + setTo.toString() + '%)');
            }, 250*i);
          })
        },
        function() {
          var $element = $('.el--bar-icn');

          $element.each(function(i) {
            var $el = $(this);
            setTimeout(function() {
              $el.addClass('el--bar-icn-active');
              // console.log($(this));
            }, 250*i);
          });
        });
      }
    }
    this.previousTop = currentTop;
    console.log(this.previousTop);
  });
}





function toTopBtn() {
  var offsetElement    =  $('.header-quote');
  var effectElement    =  $('.to-top-btn');
  var effect           =  'to-top-btn--scroll'

  onScrollEffect(offsetElement, effectElement, effect);
}

function jbControl() {
  // config
  var $element = $('.main-element');
  var $effectHover = 'animated fadeIn element--hover'
  var $effectClick = 'animated fadeOut element--click'

  fadeMe('main-element');
  ElementHover($element, $effectHover);
  ElementClick($element, $effectClick);
}

function showQuote() {
  fadeMe('quote-fade', 'animated fadeInDown')
}

function showSkillName() {
  var $el = $('.el--bar');

  $el.each(function() {
    var $icn = $(this).find('.el--bar-icn');

    $(this).on('mouseover', function() {
      $icn.addClass('el--bar-icn-active');
      console.log('Mousing over ' + $icn);
      // $(this).on('mouseleave', function() {
      //   $icn.removeClass('el--bar-icn-active');
      // })
    })
  })
}





toggleMenu();
showQuote();
jbControl();
scrollButtonClick();
scrollToElement();
showSkills();
showOverview();
toTopBtn();

})(window.$);
