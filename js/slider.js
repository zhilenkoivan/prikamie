var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 70,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 80
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 3,
        spaceBetween: 80
      },
      768: {
        slidesPerView: 5,
        spaceBetween: 70
      }
    }
  });
  var swiper = new Swiper(".mySwiper-2", {
    pagination: {
      el: ".swiper-pagination",
    },
    loop: true,
    speed: 500,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });