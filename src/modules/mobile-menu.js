import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";

export const mobileMenu = () => {
  const btn = document.querySelector(".header__navbar_button");
  const mobileMenu = document.querySelector(".header-menu .-mobile");

  if (mobileMenu) {
    const close = mobileMenu.querySelector(".header-menu__close");

    btn.addEventListener("click", () => {
      mobileMenu.style.display = "block";
      setTimeout(() => mobileMenu.classList.add("-active"));
      disableBodyScroll(document.body);
    });

    close.addEventListener("click", () => {
      mobileMenu.classList.remove("-active");
      setTimeout(() => (mobileMenu.style.display = null), 200);
      clearAllBodyScrollLocks(document.body);
    });
  }
  
};
