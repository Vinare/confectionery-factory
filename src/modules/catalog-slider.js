import Splide from "@splidejs/splide";

export const catalogSlider = () => {
    const tabWrapper = document.querySelector('.catalog__slider_tabs');
  
    if (tabWrapper) {
      let tabs = tabWrapper.querySelectorAll(".catalog-tab");
  
      let activeIndex = 0;
      let tabSlider;

      tabSlider = new Splide(".catalog__slider_tabs--slider", {
        arrows: false,
        pagination: false,
        autoWidth: true,
        mediaQuery: "min",
        start: activeIndex + 1,
        padding: {left: 12, right: 12},
        gap: 12,
        breakpoints: {
          992: { destroy: true },
        },
      }).mount();

      const changeSlide = (idx) => {
        tabs = tabWrapper.querySelectorAll(".catalog-tab");
    
        tabs.forEach((tab, tabIndex) => {
          tab.classList.remove("active");
    
          if (tabIndex === idx) {
            tab.classList.add("active");
          }
        });
    
        if (tabSlider && !tabSlider.options.destroy) {
            tabSlider.go(idx)
        }
      };

      tabs.forEach((tab, tabIndex) => {
        tab.addEventListener('click', () => {
          activeIndex = tabIndex;

          changeSlide(activeIndex)
        })
      })

      changeSlide(activeIndex)
    }
}
