import Splide from "@splidejs/splide";

export const heroSlider = (delay = 4000) => {
  const heroWrapper = document.querySelector(".hero-wrapper");
  const tabWrapper = document.querySelector('.hero__slider_tabs')
  const images = heroWrapper.querySelectorAll(".hero__image");
  let tabs = heroWrapper.querySelectorAll(".hero-tab");

  let activeIndex = 0;
  let interval;
  let tabSlider;

  tabSlider = new Splide(".splide", {
    arrows: false,
    pagination: false,
    // clones: 0,
    type: "loop",
    focus: "center",
    autoWidth: true,
    mediaQuery: "min",
    gap: 10,
    breakpoints: {
      991: { destroy: true },
    },
  }).mount();

  const changeSlide = (idx) => {
    tabs = heroWrapper.querySelectorAll(".hero-tab");

    images.forEach((image, imageIndex) => {
      image.classList.remove("active");

      if (imageIndex === idx) {
        image.classList.add("active");
      }
    });

    tabs.forEach((tab, tabIndex) => {
      tab.classList.remove("active");

      if (Number(tab.dataset.slideIdx) === idx) {
        tab.classList.add("active");
      }
    });

    if (tabSlider && !tabSlider.options.destroy) {
        tabSlider.go(idx)
    }
  };

  const autoplay = () => {
    interval = setInterval(() => {
      console.log(activeIndex);
      if (activeIndex === 4) {
        activeIndex = 0;
      } else {
        activeIndex++;
      }

      changeSlide(activeIndex);
    }, delay);
  };

  const startAutoplay = () => {
    autoplay();
  };

  const stopAutoplay = () => {
    clearInterval(interval);
  };

  tabWrapper.addEventListener('click', (e) => {
    if (e.target.closest('.hero-tab')) {
      const tab = e.target.closest('.hero-tab')
      const tabIndex = Number(tab.dataset.slideIdx)

      activeIndex = tabIndex;

      changeSlide(tabIndex);
      stopAutoplay()
      startAutoplay()
    }
  })

  changeSlide(activeIndex);
  autoplay();
};
