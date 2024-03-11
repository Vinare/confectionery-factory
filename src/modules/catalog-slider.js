import Splide from "@splidejs/splide";

export const catalogSlider = () => {
    const tabWrapper = document.querySelector('.catalog__slider_tabs');
    const title = document.getElementById('catalog-category__title')
  
    if (tabWrapper) {
      let tabs = tabWrapper.querySelectorAll(".catalog-tab");
  
      let activeIndex = 0;
      let tabSlider;

      tabSlider = new Splide(".catalog__slider_tabs--slider", {
        arrows: false,
        pagination: false,
        clones: 0,
        autoWidth: true,
        mediaQuery: "min",
        start: activeIndex,
        padding: {left: 12, right: 12},
        gap: 12,
        breakpoints: {
          992: { destroy: true },
        },
      }).mount();

      const changeSlide = (idx) => {
        tabs = tabWrapper.querySelectorAll(".catalog-tab");
    
        tabs.forEach((tab, tabIndex) => {
          const datasetIndex = Number(tab.dataset.slideIdx)

          tab.classList.remove("active");
    
          if (datasetIndex === idx) {
            const datasetTitle = tab.dataset.title
            
            tab.classList.add("active");

            if (tabSlider && !tabSlider.options.destroy) {
              tabSlider.go(datasetIndex)
            }

            if (title) {
              title.textContent = datasetTitle
            }
          }
        });
      };

      tabWrapper.addEventListener('click', (e) => {
        if (e.target.closest('.catalog-tab')) {
          const tab = e.target.closest('.catalog-tab')
          const tabIndex = Number(tab.dataset.slideIdx)
      
          activeIndex = tabIndex;
    
          changeSlide(tabIndex);
        }
      })

      changeSlide(activeIndex)
    }
}
