// ============ メイン３用 =================
$('.l-main3__slick__items').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: true,
  
  responsive: [{
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 600,
    }
  }]
});

// ============ フッター用 =================
$("#pagetop").click(function () {
  $('html, body').animate({ scrollTop: 0 }, 500);
});