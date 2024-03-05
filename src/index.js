import { languageSelect } from "./modules/language-select";
import { searchInput } from "./modules/search-input";
import { heroSlider } from "./modules/hero-slider";
import { productsSlider } from "./modules/products-slider";
import { ourTime } from "./modules/ourTime";

languageSelect();
searchInput();
heroSlider();
productsSlider(".products-slider");
productsSlider(".new-products-slider");
ourTime()

