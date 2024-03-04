export const languageSelect = () => {
  const select = document.querySelector(".header__navbar_select");
  const listItems = select.querySelectorAll("li");

  if (select) {
    select.addEventListener("click", () => {
      select.classList.toggle("open");
    });
  }

  listItems.forEach((item) => {
    item.addEventListener("click", () => {
      const language = item.dataset.language;

      listItems.forEach((i) => {
        i.classList.remove("active");

        if (i.dataset.language === language) {
          i.classList.add("active");
        }
      });
    });
  });
};
