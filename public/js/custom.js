

/*wow animation*/
$(document).ready(function () {
    new WOW().init();
});
/*wow animation end*/

/*navbar active*/
$(".main-nav ul li a").click(function () {
    $(".main-nav ul li a").removeClass("active");
    $(this).addClass("active");
});
/*navbar end*/


/* headar start -----------------------------------------
---------------------------------------------------------*/
$(function () {
    var header = $(".navbarScroll");
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 30) {
            header.removeClass('scrollHeader').addClass("fixedHeader");
        } else {
            header.removeClass("fixedHeader").addClass('scrollHeader');
        }
    });
});
/* header scroll end -----------------------------------
--------------------------------------------------------*/

/*------------------------------------------------------
overlay hide navbar menu start ------------------------*/
function SideMenuClose() {
    $('body').hasClass('mobile-nav-active');
    $('body').removeClass('mobile-nav-active');
    $('.mobile-nav-toggle i').toggleClass('fa-times fa-bars');
    $('.mobile-nav-overly').hide();
}
/* overlay hide navbar menu end -----------------------------------
--------------------------------------------------------*/

/*--------------------------------------------------------
tab speed start------------------------------------------------*/
$(document).ready(function () {
    // $("a.scrollLink").click(function (event) {
    //     event.preventDefault();
    //     $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top - 50 }, 500);
    // });
});



var swiper = new Swiper(".CustomersSaying", {
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
      dynamicMainBullets: 3
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 25,
        },
        992: {
          slidesPerView: 2,
          spaceBetween: 25,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
      },
  });



var swiper = new Swiper(".whySamridhiFramesSlider", {
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
      dynamicMainBullets: 3
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 25,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 25,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
      },
  });




var swiper = new Swiper(".OurProduct_Slider", {
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 3
  },
  breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 25,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 25,
      },
      1200: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
    },
});













  


  var swiper = new Swiper(".BenefitsSlider", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
      dynamicMainBullets: 3
    },

  });


   var swiper = new Swiper(".productSlider", {
      loop: true,
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".productSliderTwo", {
      loop: true,
      spaceBetween: 10,
     
      thumbs: {
        swiper: swiper,
      },
    });




var swiper = new Swiper(".latestBlogs", {
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 3
  },
  breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 25,
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 25,
      },
      1200: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
    },
});



var swiper = new Swiper(".productSlider", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".productSliderTwo", {
  loop: true,
  spaceBetween: 10,
 
  thumbs: {
    swiper: swiper,
  },
});