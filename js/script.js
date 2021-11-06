// const { post } = require("jquery");

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

$(document).ready(function() {
  $('.reviews__slider').slick({

  })
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

$(document).ready(function() {

  $('.js-specialist-btn').click(function() {
    if (!$('.js-specialist-btn').hasClass('card__title_btnActive')) {
      $('.js-specialist-btn').addClass('card__title_btnActive');
      $('.js-specialist-btn-active').removeClass('card__title_btnActive');
    } else {
      $('.js-specialist-btn').removeClass('card__title_btnActive')
    }
  });

  $('.js-specialist-btn-active').click(function() {
    if (!$('.js-specialist-btn-active').hasClass('card__title_btnActive')) {
      $('.js-specialist-btn-active').addClass('card__title_btnActive');
      $('.js-specialist-btn').removeClass('card__title_btnActive');
    } else {
      $('.js-specialist-btn-active').removeClass('card__title_btnActive')
    }
  });

  $('.js-specialist-btn').click(function() {
    if (!$('.slider__block').hasClass('active__card')){
      $('.slider__block').addClass('active__card');
      $('slider__block_active').addClass('notActive__card')
    } else {
      $('.slider__block').removeClass('active__card');
      $('.slider__block_active').addClass('notActive__card')
    }
  });

  $('.js-specialist-btn-active').click(function() {
    $('.slider__block_active').removeClass('active__card, notActive__card');
    $('slider__block').removeClass('active__card');
  })

});

$(document).ready(function(){

  $('.js-card-btn').click(function() {
    if (!$('.js-card-btn').hasClass('card__title_btnActive')) {
      $('.js-card-btn').addClass('card__title_btnActive');
      $('.js-card-btn-active').removeClass('card__title_btnActive');
    } else {
      $('.js-card-btn').removeClass('card__title_btnActive')
    }
  });

  $('.js-card-btn-active').click(function() {
    if (!$('.js-card-btn-active').hasClass('card__title_btnActive')) {
      $('.js-card-btn-active').addClass('card__title_btnActive');
      $('.js-card-btn').removeClass('card__title_btnActive');
    } else {
      $('.js-card-btn-active').removeClass('card__title_btnActive')
    }
  });


  $('.js-card-btn').click(function() {
    if (!$('.services__visited').hasClass('active__card')) {
      $('.services__visited').addClass('active__card');
      $('.services__visited_active').addClass('notActive__card')
    } else {
      $('.services__visited').removeClass('active__card');
      $('.services__visited_active').addClass('notActive__card')
    }
  });

  $('.js-card-btn-active').click(function(){
    $('.services__visited_active').removeClass('active__card, notActive__card');
    $('.services__visited').removeClass('active__card');
  })
});

$(document).ready(function(){
  $('.telJs').mask("+7(999) 999-99-99");

  $('.error').hide();
  $('.form__btn_js').click(function(){
    $('.error').hide();
      var name = $('input#name').val();
        if( name == "") {
      $('input#name').focus();
          return false;
      }

      var tel = $('input#tel').val();
        if(tel == "") {
      $('input#tel').focus();
          return false;
      }

      var email = $('input#email').val();
        if(email == "") {
      $('input#email').focus();
          return false;
      }
    var dataString = 'name=' + name + '&tel=' + tel +'&email=' + email;
    // alert(dataString); return false;

    $.ajax({
      type: "POST",
      url: "/ajax/fos.php",
      data: dataString,
      success: function() {
        $('.section__form').css('display', 'none');
        $('.modelWindow__bg').css('display', 'block');
      }
    });
    return false;
  });

  // footer form

  $('.telJs2').mask("+7(999) 999-99-99");

  $('.error').hide();
  $('.form__btn_js2').click(function(){
    $('.error').hide();
      var name = $('input#name2').val();
        if( name == "") {
      $('input#name2').focus();
          return false;
      }

      var tel = $('input#tel2').val();
        if(tel == "") {
      $('input#tel2').focus();
          return false;
      }

      var email = $('input#email2').val();
        if(email == "") {
      $('input#email2').focus();
          return false;
      }
    var dataString = 'name2=' + name + '&tel2=' + tel +'&email2=' + email;

    $.ajax({
      type: "POST",
      url: "/ajax/fos.php",
      data: dataString,
      success: function() {
        $('.section__form_discount').css('display', 'none');
        $('.modelWindow__bg_discount').css('display', 'block');
      }
    });
    return false;
  });

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
  });  

  // Pop up form

  $('.telPopUp-js').mask("+7(999) 999-99-99");

  $('.error').hide();
  $('.form-popup-sent-js').click(function(){
    $('.error').hide();
      var name = $('input#namePopUp').val();
        if( name == "") {
      $('input#namePopUp').focus();
          return false;
      }

      var tel = $('input#telPopUp').val();
        if(tel == "") {
      $('input#telPopUp').focus();
          return false;
      }

      var email = $('input#emailPopUp').val();
        if(email == "") {
      $('input#emailPopUp').focus();
          return false;
      }
    var dataString = 'namePopUp=' + name + '&telPopUp=' + tel +'&emailPopUp=' + email;
    // alert(dataString); return false;

    $.ajax({
      type: "POST",
      url: "/ajax/fos.php",
      data: dataString,
      success: function() {

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
      }
    });
    return false;  
  });
});  
