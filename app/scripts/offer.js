(function($,_) {

// ============================================================::||:>
// ======================== O F F E R =========================::||:>
// ============================================================::||:>

  function toggleNav() {
    var $btn = $('.offer-nav-icn');

    $btn.on('click', function(){
      var $that = $(this);
      var $btns = $('.offer-nav-icn');
      var $content = $('.offer-content-el');
      var btnData = $that.data('type');

      $btns.each(function(){
        var $th = $(this);

        if ($th.hasClass('active')) {
          $th.removeClass('active');
        };

        if ($that.hasClass('active')) {

        } else {
          $that.addClass('active');
        }
      });

      $content.each(function() {
          var $th = $(this);
          var thData = $th.data('type');

          $th.removeClass('active');

          if ($th.hasClass('active')) {
            $th.removeClass('active')
          } else if (thData == btnData) {
              $th.addClass('active');
          }
      });
    });
  }

toggleNav();

})(window.$, window._);
