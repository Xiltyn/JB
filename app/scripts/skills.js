(function($, _) {


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

      // console.log($objects);
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
      var $webdevSkills = $('.el[data-cat=\'webdev\']');
      var $designSkills = $('.el[data-cat=\'design\']');
      var $webNum       = $webdevSkills.length;
      var $desNum       = $designSkills.length;

      $webdevSkills.each(function() {
        var width = 100 / $webNum + '%'
        var $th = $(this);

        // console.log(width);
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
        // console.log(this.previousTop);
      });
    }

    function showSkillName() {
      var $el = $('.el--bar');

      $el.each(function() {
        var $icn = $(this).find('.el--bar-icn');

        $(this).on('mouseover', function() {
          $icn.addClass('el--bar-icn-active');
          // console.log('Mousing over ' + $icn);
        })
      })
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

  injectSkills();

})(window.$, window._);
