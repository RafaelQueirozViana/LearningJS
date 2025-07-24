import { Carousel } from '../components/carousel.js';

const productsCarousel = new Carousel({
    container: '.product-container',
    itemHtmlClass: '.product-item',
    indicatorContainer: '.products-indicator'
});
productsCarousel.createSlideButtons({
    btnContainerClass: '.arrows-container'
});

productsCarousel.autoSlide(); 