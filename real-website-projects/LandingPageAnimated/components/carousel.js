export class Carousel {
    constructor({ itemHtmlClass }) {
        this.currentItem = 0;
        this.carouselItems = document.querySelectorAll(itemHtmlClass); // it's a node array
        this.itemsLength = this.carouselItems.length - 1;
    };


    update(direction) {
        this.carouselItems.forEach(item => item.classList.remove('active'));
        this.currentItem += direction;
        if (this.currentItem > this.itemsLength) {
            this.currentItem = 0;
        }

        else if (this.currentItem < 0) {
            this.currentItem = this.itemsLength;
        }

        this.carouselItems[this.currentItem].classList.add('active');





    };

};

