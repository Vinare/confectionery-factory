import { languageSelect } from "./modules/language-select";
import { searchInput } from "./modules/search-input";
import { heroSlider } from "./modules/hero-slider";
import { productsSlider } from "./modules/products-slider";
import { ourTime } from "./modules/our-time";
import { buttonCatalog } from "./modules/button-catalog";
import { smoothScroll } from "./modules/smoothScroll";
import { toTopButton } from "./modules/to-top-button";
import { catalogSlider } from "./modules/catalog-slider";
import { searchDecl } from "./modules/search-decl";

languageSelect();
searchInput();
heroSlider();
productsSlider(".products-slider");
productsSlider(".new-products-slider");
ourTime();
buttonCatalog();
smoothScroll();
toTopButton();
catalogSlider();
searchDecl()

