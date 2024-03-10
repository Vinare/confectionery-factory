export const buttonCatalog = () => {
  const heroSection = document.querySelector(".hero");
  const buttonCatalog = document.querySelector(".btn-catalog");

  if (buttonCatalog) {
    let timeoutId;
    let isOpacity = false;

    const createObserver = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              buttonCatalog.classList.remove("animate-opacity");
            } else {
              buttonCatalog.classList.add("animate-opacity");
            }
          });
        },
        {
          threshold: 0,
        }
      );

      observer.observe(heroSection);
    };

    createObserver();

    window.addEventListener("scroll", () => {
      clearTimeout(timeoutId);

      if (!isOpacity) {
        buttonCatalog.style.opacity = 0.5;
        isOpacity = true;
      }

      timeoutId = setTimeout(() => {
        buttonCatalog.style.opacity = 1;
        isOpacity = false;
      }, 500);
    });
  }
};
