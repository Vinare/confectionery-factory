export const heroSlider = (delay = 4000) => {
  const heroWrapper = document.querySelector(".hero-wrapper");
  const images = heroWrapper.querySelectorAll(".hero__image");
  const tabs = heroWrapper.querySelectorAll(".hero-tab");
  const breakpoint = window.matchMedia("(min-width: 992px)");
  let activeIndex = 0;
  let interval;
  let tabSlider;

  const breakpointChecker = function () {
    if (breakpoint.matches === true) {
      if (tabSlider !== undefined) {
        tabSlider.destroy(true, true);
      }
      return;
    } else if (breakpoint.matches === false) {
      return initTabs();
    }
  };

  const initTabs = () => {
    tabSlider = new Swiper(".tabs-slider", {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 12,
      initialSlide: activeIndex
    //   loop: true,
    });
  };

  const changeSlide = (idx) => {
    images.forEach((image, imageIndex) => {
      image.classList.remove("active");

      if (imageIndex === idx) {
        image.classList.add("active");
      }
    });

    tabs.forEach((tab, tabIndex) => {
      tab.classList.remove("active");

      if (tabIndex === idx) {
        tab.classList.add("active");
      }
    });
    
    if (tabSlider && !tabSlider.destroyed) {
        tabSlider.slideTo(idx)
    }
  };

  const autoplay = () => {
    interval = setInterval(() => {
      if (activeIndex === tabs.length - 1) {
        activeIndex = 0;
      } else {
        activeIndex++;
      }

      changeSlide(activeIndex);
    }, delay);
  };

  const startAutoplay = () => {
    autoplay()
  };

  const stopAutoplay = () => {
    clearInterval(interval)
  };

  tabs.forEach((tab, tabIndex) => {
    tab.addEventListener("click", () => {
      activeIndex = tabIndex;

      changeSlide(tabIndex);
    });

    tab.addEventListener("mouseover", () => {
        stopAutoplay()
    });

    tab.addEventListener("mouseleave", () => {
        startAutoplay()
    });
  });

  changeSlide(activeIndex);
  autoplay();

  breakpoint.addEventListener("change", breakpointChecker);
  breakpointChecker();
};
