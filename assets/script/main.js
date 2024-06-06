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
      speed: 600,
    }
  }]
});