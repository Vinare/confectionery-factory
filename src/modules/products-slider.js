import Splide from "@splidejs/splide";

export const productsSlider = (sliderSelector) => {
  if (document.querySelector(sliderSelector)) {
    const initSlider = () => {
      new Splide(sliderSelector, {
        arrows: false,
        pagination: false,
        type: "loop",
        focus: "center",
        fixedWidth: 140,
        fixedHeight: 260,
        mediaQuery: "min",
        gap: 12,
        breakpoints: {
          532: {
            fixedWidth: null,
            fixedHeight: null,
            perPage: 3,
            focus: 1,
          },
          768: {
            fixedWidth: null,
            perPage: 2,
            gap: 24,
            focus: 1,
          },
          992: {
            perPage: 3,
            gap: 24,
            focus: 1,
          },
          1400: {
            perPage: 4,
            gap: 24,
            focus: 1,
          },
        },
      }).mount();
    };

    initSlider();
  }
};
