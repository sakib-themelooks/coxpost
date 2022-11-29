/*---------------------------------------------
Template name :  CoxPost
Version       :  1.0
Author        :  ThemeLooks
Author url    :  http://themelooks.com

NOTE:
------
Please DO NOT EDIT THIS JS, you may need to use "custom.js" file for writing your custom js.
We may release future updates so it will overwrite this file. it's better and safer to use "custom.js".

[Table of Content]

    01: Venobox
    02: Schedule Post Slider
    03: Price Dropdown
    04: Testimonial Slider
    05: Back To Top 

----------------------------------------------*/

(function ($) {
  "use strict";

  /* 01: Venobox */
  new VenoBox({
    selector: ".video-play",
    selector: ".video-play-2",
  });

  /* 02: Schedule Post Slider */
  const sliderChildren = $("#slider-item").children();
  if (sliderChildren.length > 1) {
    const slider = $(".slider-item");
    slider.slick({
      arrows: false,
      vertical: true,
      draggable: true,
      autoplay: true,
      autoplaySpeed: 2000,
    });
    slider.on("wheel", function (e) {
      if (e.originalEvent.deltaY < 0) {
        $(this).slick("slickPrev");
      } else {
        $(this).slick("slickNext");
      }
    });
  }

  /* 03: Price Dropdown */
  $(function () {
    let list = $(".plan-details-list");
    let link = $(".plan-collaps-btn");
    link.click(function (e) {
      list.slideToggle();
      $(".plan-collaps-btn h2").toggle();
    });
  });

  /* 04: Testimonial Slider */
  $(".testi-slider").slick({
    slidesToShow: 3,
    arrows: false,
    dots: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  /* 05: Signup Package Btn */
  $(".toggleBtn h2").click(function () {
    $(".item-group div").slideToggle(100);
    $(".toggleBtn h2").toggle();
  });


  /* 06: Section Name Highlight */
  const sections = document.querySelectorAll("section");
  const navLi = document.querySelectorAll(".side-bar-list li");
  window.onscroll = () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (scrollY >= sectionTop - 220) {
        current = section.getAttribute("id");
      }
    });

    navLi.forEach((li) => {
      li.classList.remove("active");
      if (li.classList.contains(current)) {
        li.classList.add("active");
      }
    });
  };

  /* 10:Back To Top */
  let $backToTopBtn = $(".back-to-top");
  if ($backToTopBtn.length) {
    let scrollTrigger = 400, // px
      backToTop = function () {
        let scrollTop = $(window).scrollTop();
        if (scrollTop > scrollTrigger) {
          $backToTopBtn.addClass("show");
        } else {
          $backToTopBtn.removeClass("show");
        }
      };

    backToTop();

    $(window).on("scroll", function () {
      backToTop();
    });

    $backToTopBtn.on("click", function (e) {
      e.preventDefault();
      $("html,body").animate(
        {
          scrollTop: 0,
        },
        700
      );
    });
  }
})(jQuery);
