$(document).ready(function(){




    $('.team_slide').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 500,
        arrows:false
      });


      $('.counter').counterUp({
        delay: 100,
        time: 500
    });


      $('.about_slide').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows:false
      });



})

