$(function () {

  $('.header__btn').on('click', function() {
    $('.rightside-menu').removeClass('rightside-menu_close');
  });

  $('.rightside-menu__close').on('click', function() {
    $('.rightside-menu').addClass('rightside-menu_close');  
  });


  $('.top__slider').slick({
    dots: true,
    arrows: false,
    slidesToShow: 1,
    // fade: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
        }
      },
      {
        breakpoint: 600,
        settings: {
        }
      },
      {
        breakpoint: 480,
        settings: {
        }
      }
    ]
  });

  var mixer = mixitup('.gallery__inner', {
    load: {
      filter: '.living'
    }

  });
});


 