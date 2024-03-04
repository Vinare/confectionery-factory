export const productsSlider = (sliderSelector) => {
  const initSlider = () => {
    new Swiper(sliderSelector, {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 12,
      loop: true,
      breakpoints: {
        768: {
          centeredSlides: false,
          loop: false,
          slidesPerView: 2,
          spaceBetween: 24,
        },
        991: {
          centeredSlides: false,
          loop: false,
          slidesPerView: 3,
          spaceBetween: 24,
        },
        1400: {
          centeredSlides: false,
          loop: false,
          slidesPerView: 4,
          spaceBetween: 24,
        },
      },
    });
  };

  initSlider();
};
