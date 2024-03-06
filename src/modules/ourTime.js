import Splide from "@splidejs/splide";

export const ourTime = () => {
  const initSlider = () => {
    new Splide(".our-time__slider", {
      arrows: false,
      pagination: false,
      clones: 0,
      type: "loop",
      focus: "center",
      gap: 24,
      breakpoints: {
        767: {
          destroy: true
        },
      },
    }).mount();
  };

  if (document.querySelector('.our-time__slider')) {
    initSlider();
  }
};
