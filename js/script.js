(function($) {

$headElement = $('.main-element');

  function headElementHover() {

    $headElement.on('mouseover', function() {
      if ($(this).hasClass('main-eleement--hover')) {
      } else {
        $(this).addClass('main-element--hover');
      }
    })
    $headElement.on('mouseleave', function() {
      if ($(this).hasClass('main-element--hover')) {
        $(this).removeClass('main-element--hover');
      }
    })
  }

  function headElementClick() {
    $headElement.on('click', function() {
        $headElement.removeClass('main-element--click');
      if ($(this).hasClass('main-eleement--click')) {
      } else {
        $(this).addClass('main-element--click');
      }
    })
  }



headElementHover();
headElementClick();



})(window.$);
