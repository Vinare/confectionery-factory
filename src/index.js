import { languageSelect } from "./modules/language-select";
import { searchInput } from "./modules/search-input";
import { heroSlider } from "./modules/hero-slider";
import { productsSlider } from "./modules/products-slider";
import { ourTime } from "./modules/our-time";
import { buttonCatalog } from "./modules/button-catalog";
import { smoothScroll } from "./modules/smooth-scroll";
import { toTopButton } from "./modules/to-top-button";
import { catalogSlider } from "./modules/catalog-slider";
import { searchDecl } from "./modules/search-decl";
import { yandexMap } from "./modules/yandex-map";
import { timeline } from "./modules/timeline";
import { modal } from "./modules/modal";
import { formValidator } from "./modules/form-validator";
import { tabContent } from "./modules/tab-content";
import { scaleImages } from "./modules/scale-images";
import { mobileMenu } from "./modules/mobile-menu";

// Подключение функций bootstrap
import {Collapse} from 'bootstrap'

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
searchDecl();
yandexMap();
timeline();
modal();
formValidator();
tabContent();
scaleImages();
mobileMenu();
