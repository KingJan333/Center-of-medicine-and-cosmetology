$(window).scroll(function () {
  var height = $(window).scrollTop();
  if (height > 100) {
    $(".wrapper__header").addClass("wrapper__header_dell");
  } else {
    $(".wrapper__header").removeClass("wrapper__header_dell");
  }
});

$(window).scroll(function () {
  var height = $(window).scrollTop();
  if (height > 93) {
    $(".header__toScroll").addClass("header__toScroll_active");
  } else {
    $(".header__toScroll").removeClass("header__toScroll_active");
  }
});

$(document).ready(function () {
  $(".slider").slick({
    infinite: true,
    fade: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive:[
      {
        breakpoint: 426,
        settings: {
          variableWidth: true,
          slidesToScroll: 1
        }
      }
    ]
  });
});

$(function () {
  $(".button__up").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
    return false;
  });
  // show up button
  $(document).scroll(function(){
    var y = $(this).scrollTop();
    if (y > 500) {
      $(".button__up").fadeIn();
    } else {
      $(".button__up").fadeOut();
    }
  });
});

$(document).ready(function () {
  $('.humburger').click(function(event) {
  $('.humburger, .header__burger_nav').toggleClass('active');    
  });
  $('.header__burger_element').click(function (){
    $('.header__burger_nav').toggleClass('active')
  });
});

$(document).ready(function(){
  // $('.js-card-btn_active').addClass('services__visited_active');
  // // $('.js-card-btn_active').on("click", function(){
  // //   $('.services__visited_active').removeClass('services__visited');
  // // });
  // $('js-card-btn').removeClass('.services__visited_active').addClass('.services__visited_');
  // // $('.js-card-btn').on("click", function(){
  // //   $('.services__visited').removeClass('services__visited_active');  
  // //   // $('services__visited_active').toggle('.services__visited');
  // // })

  $('.js-card-btn').click(function(e){
    e.preventDefault();
    $('.js-card-btn').removeClass
  });
});

$(document).ready(function (){
  $('.form__elements').validate ({
    rules: {
      name: {
        required: true,
        minlength: 3
      },
      email: {
        required: true,
        email:true
      },
      tel: {
        required: true,
        
      }
    },
    messages: {
      name: {
        required: 'Имя обязательно должно быть заполнено'
      }
    },
    submitHandler: function() {
      alert('.modelWindow__bg_discount');
    }
  });
})

$(document).ready(function (){
  $('.js-popup-btn').click(function(e){
    event.preventDefault();
    $('.overLay').fadeIn(297, function(){
      $('.model__wrapper').css('display', 'block').animate({opacity: 1}, 198);
    });
  });

  $('.modelWindow__close, .overLay').click(function(){
    $('.model__wrapper').animate({opacity: 0}, 198,
      function(){
        $(this).css('display', 'none');
        $('.overLay').fadeOut(297);
      });
  });
})

$(document).ready(function (){
  $('.js-popup-sent').click(function(e){
    event.preventDefault();
    $('.overLay').fadeIn(297, function(){
      $('.sent__wrapper').css('display', 'block').animate({opacity: 1}, 198);
      $('.model__wrapper').css('display', 'none').animate({opacity: 1}, 198);
    });
  });

  $('.modelWindow__close, .overLay').click(function(){
    $('.sent__wrapper').animate({opacity: 0}, 198,
      function(){
        $(this).css('display', 'none');
        $('.overLay').fadeOut(297);
      });
  });

  $('.js-popup-sent_close').click(function(e){
    $('.sent__wrapper').animate({opacity: 0}, 198,
      function(){
        $(this).css('display', 'none');
        $('.overLay').fadeOut(297);
      });
  });
})
