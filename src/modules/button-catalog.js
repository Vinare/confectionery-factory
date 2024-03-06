export const buttonCatalog = () => {
let timeoutId;
let initialButtonWidth = '0'
let buttonWidth = '-36px';
let buttonCatalog = document.querySelector(".btn-catalog");

const hide = () => {
  if (buttonCatalog) {
    buttonCatalog.classList.remove("animate-opacity");
    buttonCatalog.style.right = buttonWidth;
  }
};

buttonCatalog.addEventListener('mouseover', () => {
    buttonCatalog.style.right = initialButtonWidth;
});

buttonCatalog.addEventListener("mouseout", () => {
  buttonCatalog.style.right = buttonWidth;
});


window.addEventListener(
  "scroll",
  () => {
    if (buttonCatalog) {
      buttonCatalog.classList.add("animate-opacity");
      timeoutId = setTimeout(hide, 700);
    }
  },
  false
);
}
