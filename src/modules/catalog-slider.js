import Splide from "@splidejs/splide";

export const catalogSlider = () => {
    const tabWrapper = document.querySelector('.catalog__slider_tabs');
    let tabSlider;

    if (tabWrapper) {
      
      tabSlider = new Splide(".catalog__slider_tabs--slider", {
        arrows: false,
        pagination: false,
        // clones: 0,
        type: "loop",
        focus: "center",
        autoWidth: true,
        mediaQuery: "min",
        gap: 12,
        breakpoints: {
          992: { destroy: true },
        },
      }).mount();
    }
}
