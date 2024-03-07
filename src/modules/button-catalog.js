export const buttonCatalog = () => {
let timeoutId;
let buttonWidth;

const initialButtonWidth = '0';
const buttonSmall = '-36px';
const buttonLarge = '-50px';
const buttonCatalog = document.querySelector(".btn-catalog");

const hide = () => {
  if (buttonCatalog) {
    buttonCatalog.classList.remove("animate-opacity");
    buttonWidth = window.innerWidth <= 1500 ? buttonSmall : buttonLarge;
    buttonCatalog.style.right = buttonWidth;
    console.log(buttonCatalog.style.right);
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
