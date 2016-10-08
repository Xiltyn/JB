(function($,_) {

  function offerNavToggle() {
    var $btn = $('.offer-nav-icn');

    $btn.on('click', function(){
      var $that = $(this);
      var all = $('.offer-nav-icn');

      all.each(function(){
        var $th = $(this);
        if ($th.hasClass('active')) {
          $th.removeClass('active');
        };
        if ($that.hasClass('active')) {

        } else {
          $that.addClass('active');
        }
      });
    });
  }



offerNavToggle();

})(window.$, window._);
