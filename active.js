let $pagetop = $('.curtain');

$(window).on( 'scroll', function () {
  //スクロール位置を取得
  if ( $(this).scrollTop() < 500 ) {
    $pagetop.removeClass('isActive');
  } else {
    $pagetop.addClass('isActive');
  }
});