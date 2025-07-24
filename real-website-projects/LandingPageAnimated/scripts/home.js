import { Carousel } from '../components/carousel.js';

const productsCarousel = new Carousel({ container: '.product-container', itemHtmlClass: '.product-item' });
productsCarousel.createSlideButtons({ btnContainerClass: '.arrows-container' });