import { languageSelect } from "./modules/language-select";
import { tabSliders } from "./modules/tab-sliders";
import { searchInput } from "./modules/search-input";
import { heroSlider } from "./modules/hero-slider";
import { productsSlider } from "./modules/products-slider";

languageSelect();
tabSliders();
searchInput();
heroSlider();
productsSlider('.products-slider');
productsSlider('.new-products-slider');