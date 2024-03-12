import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

export const modal = () => {
  const btns = document.querySelectorAll(".feedback-btn");
  const modal = document.querySelector('.feedback-modal-overlay')

  if (modal) {
    const close = modal.querySelector('.feedback-modal__close')

    btns.forEach((btn) => {
      btn.addEventListener("click", () => {
          modal.style.display = 'flex'
          setTimeout(() => modal.classList.add('-active'))
          disableBodyScroll(document.body)
      });
    });
  
    close.addEventListener('click', () => {
      modal.classList.remove('-active')
      setTimeout(() => modal.style.display = null, 200)
      clearAllBodyScrollLocks(document.body)
    })
  }
};
