(function($, _) {

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
  // console.log('fadeMe fired un :: Element: ' + $element + ' with Effect: ' + effect);
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
    // console.log(this.previousTop);
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
    // console.log(this.previousTop);
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

function showHeader() {
  var $img             = $('.header-top--left-avatar');
  var $name            = $('.header-top--left-name');
  var $occupation      = $('.header-top--left-occupation');
  var $dummy           = $('.header-top--right--dummy');
  var $btn             = $('.header-top--right--dummy-button');
  var $bar             = $('.header-bar');

  setTimeout(function() {
    $img.addClass('animated bounceIn');
    setTimeout(function() {
      $name.addClass('animated fadeIn');
      setTimeout(function() {
        $occupation.addClass('animated fadeInUp');
        setTimeout(function() {
          $dummy.addClass('animated fadeInRight');
          setTimeout(function() {
            $btn.addClass('animated fadeInRight');
            setTimeout(function() {
              $bar.addClass('animated fadeInDown');
            }, 100);
          }, 150);
        }, 200);
      }, 250);
    }, 250);
  }, 500);
}


function showOverview() {
  var currentTop = $(window).scrollTop();
  var offsetElement = $('#overview');

  $(window).scroll( {previousTop: 0},
    function() {
      var offset = offsetElement.offset().top - 20;

      if ($(window).scrollTop() > offset) {
        if (currentTop < this.previousTop) {
        } else {

          loop(
            function() {
              var $el    =  $('.showOverview');

              $el.each(function(i) {
                var element = $(this);

                setTimeout(function() {
                  element.addClass('animated bounceIn');
                }, 200*i);
              });
            },
            function() {
              var $elDesc = $('.showOverviewText');

              $elDesc.each(function(i) {
                var element = $(this);

                setTimeout(function() {
                  element.addClass('animated fadeInUp');
                }, 200*i);
              });
            }
          )

        }
      }
      this.previousTop = currentTop;

      // LOG CURRENT POSITION
      // console.log(this.previousTop);
    }
  );
}



function toTopBtn() {
  var offsetElement    =  $('#overview');
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



// ============================================================::||:>
// ======================= S K I L L S ========================::||:>
// ============================================================::||:>

  function injectSkills() {
    var $skills;

    // Function parsing data into Underscore.js template
    // ==========================================================::||:>
    function render(data) {
      var $template        = _.template($('#skillsTemp').html());
      var $webdev          = $('#webdev');
      var $design          = $('#design');
      var $objects         = Array.prototype.slice.call(data.skills);
      var $fragmentWebdev  = $(document.createDocumentFragment());
      var $fragmentDesign  = $(document.createDocumentFragment());

      console.log($objects);
      $objects.forEach(function(element) {

        if (element.category == 'webdev') {

          $fragmentWebdev.append($template({
            id: element.id,
            name: element.name,
            cat: element.category,
            level: element.level,
            imgSrc: element.imgSrc
          }));

        } else if (element.category == 'design') {

          $fragmentDesign.append($template({
            id: element.id,
            name: element.name,
            cat: element.category,
            level: element.level,
            imgSrc: element.imgSrc
          }));

        } else {

          console.log('sad element without a category screaaaams to You! @_@!!');

        }
      });

      $webdev.append($fragmentWebdev);
      $design.append($fragmentDesign);
      $skills = $('.el');
    };

    function setElementWidth() {
      var $webdevSkills = $(".el[data-cat='webdev']");
      var $designSkills = $(".el[data-cat='design']");
      var $webNum       = $webdevSkills.length;
      var $desNum       = $designSkills.length;

      $webdevSkills.each(function() {
        var width = 100 / $webNum + "%"
        var $th = $(this);

        console.log(width);
        $th.css('width', width)
      })
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

    // AJAX deprecated call
    // ==========================================================::||:>
    $.when($.ajax('skills.json')).then(success, failure);

    // Callback function called when objects are successfully loaded
    // ==========================================================::||:>
    function success(success) {
      console.log('Yes! Success!');
      render(success);
      showSkills();
      showSkillName();
      setElementWidth();
    }

    // Callback function called when objects fail to be loaded
    // ==========================================================::||:>
    function failure() {
      console.log('Whooops! Something went wrong with loading the JSON file data for S K I L L S!');
    }
  }

// ============================================================::||:>
// ====================== G A L L E R Y =======================::||:>
// ============================================================::||:>

  function injectGallery() {
  // Function wide variables
  // ============================================================::||:>
    var $projectElements;
    var $projectBtns;

    // Function parsing projects data into Underscore.js template
    // ==========================================================::||:>
    function renderBtns(data) {
      var $template        = _.template($('#catTemp').html());
      var $wrapper         = $('#navAjax');
      var $objects         = Array.prototype.slice.call(data.projects)
      var $fragment        = $(document.createDocumentFragment());

      var result = $objects.reduce(function(memo, e1){
        var matches = memo.filter(function(e2){
          return e1.category == e2.category
        })
        if (matches.length == 0)
          memo.push(e1)
          return memo;
      }, [])

      result.forEach(function(element) {
        $fragment.append($template({
          category: element.category
        }));
      });

      $wrapper.append($fragment);
      $projectBtns = $('.category-btn');
    };

    // Function parsing projects data into Underscore.js template
    // ==========================================================::||:>
    function render(data) {
      var $template        = _.template($('#projTemp').html());
      var $wrapper         = $('#galleryAjax');
      var $objects         = data.projects;
      var $fragment        = $(document.createDocumentFragment());

      $objects.forEach(function(element) {
        $fragment.append($template({
          id: element.id,
          category: element.category,
          name: element.name,
          desc: element.desc,
          repo: element.repo
        }));
      });

      $wrapper.append($fragment);
      $projectElements = $('.project-el');
    };

    // Animate in thumbnails on scroll
    // ==========================================================::||:>
    function showProjects() {
      var currentTop = $(window).scrollTop();
      var offsetElement = $('#projects');
      var elementGroupOne = $('.project-el');
      var elementGroupTwo = $('.category-btn');

      $(window).scroll( {previousTop: 0},
        function() {
          var offset = offsetElement.offset().top - 20;

          if ($(window).scrollTop() > offset) {
            if (currentTop < this.previousTop) {
            } else {
              elementGroupOne.each(function(i) {
                var element = $(this);
                setTimeout(function() {
                  element.addClass('animated fadeIn');
                }, 150*i);
              });
            }
          }
          if ($(window).scrollTop() > offset) {
            if (currentTop < this.previousTop) {
            } else {
              elementGroupTwo.each(function(i) {
                var element = $(this);
                setTimeout(function() {
                  element.addClass('inactive');
                }, 150*i);
              });
            }
          }
          this.previousTop = currentTop;

          // LOG CURRENT POSITION
          // console.log(this.previousTop);
        }
      );
    }

    // Open lightbox on click
    // ==========================================================::||:>
    function showLightbox() {
      var lightbox = $('.lightbox');
      var lightboxTxt = $('.lightbox-wrapper--text');
      var lightboxImg = $('.lightbox-wrapper--img');
      var spinner = $('.spinner');

      function hideLoader() {
        spinner.css('opacity', '0');
      }

      $projectElements.on('click', function(event) {
        var $th       = $(this);
        var $name     = $th.find('.project-el--thumb-overlay h3').text();
        var $desc     = $th.find('.project-el--thumb-overlay p').text();
        var $imgSrc   = $th.find('.project-el--thumb img').attr('data-bigSrc');
        var $repo     = $th.find('.project-el--thumb img').attr('data-repo');

        lightbox.addClass('animated fadeIn').css('pointer-events', 'all');

        setTimeout(function() {
          hideLoader();

          setTimeout(function() {
            lightboxImg.html('<img src="' + $imgSrc + '" alt="' + $name + '" />');
            lightboxTxt.html('<a href="' + $repo + '" target="_blank"><h3 class="animated flash">' + $name + '</h3></a><p>' + $desc + '</p>');
          }, 300);
        }, 1000);

        $('html').one('click', function() {
          lightbox.removeClass('animated fadeIn').css('pointer-events', 'none');
          lightboxImg.html('');
          lightboxTxt.html('');
          spinner.css('opacity', '1');
          $('body').removeClass('stop-scrolling');
        })

        // disable scrolling on body
        // ======================================================::||:>
        if ($('body').hasClass('stop-scrolling')) {

        } else {
          $('body').addClass('stop-scrolling');
        }

        event.stopPropagation();
      })
    }

    function toggleCategory() {
      var $btn = $('.category-btn');
      var $allBtn = $('.all-btn');
      var $el = $('.project-el');

      $btn.on('click', function() {
        var $btnCat = $(this).attr('data-category');
        if ($(this).hasClass('all-btn')) {
          $el.show();
        } else {
          $el.each(function() {
            var $th = $(this);
            var $elCat = $th.data('category');
            if ($elCat == $btnCat) {
              $th.show();
            } else {
              $th.hide();
            };
          })
        }
        $btn.removeClass('active');
        $(this).addClass('active');
      })
    }

    // AJAX deprecated call
    // ==========================================================::||:>
    $.when($.ajax('projects.json')).then(success, failure);

    // Callback function called when objects are successfully loaded
    // ==========================================================::||:>
    function success(success) {
      render(success);
      renderBtns(success);
      showProjects();
      showLightbox();
      toggleCategory();
    }

    // Callback function called when objects fail to be loaded
    // ==========================================================::||:>
    function failure() {
      console.log('Whooops! Something went wrong with loading the JSON file data for the Projects Gallery!');
    }

  }

// Global callbacks
// ==============================================================::||:>
  injectSkills();
  injectGallery();
  toggleMenu();
  showHeader();
  jbControl();
  scrollButtonClick();
  scrollToElement();
  showOverview();
  toTopBtn();

})(window.$, window._);
