export class Carousel {

    constructor({ container, itemHtmlClass }) {
        this.carouselContainer = document.querySelector(container);
        this.currentItem = 0;
        this.carouselItems = this.carouselContainer.querySelectorAll(itemHtmlClass); // it's a node array
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


    autoSlide() {
        setInterval(() => {
            this.currentItem++;
            this.update(1)
        }, 4000);
    };

    createSlideButtons({ btnContainerClass }) {
        this.buttonsContainer = this.carouselContainer.querySelector(btnContainerClass) || this.carouselContainer.parentElement.querySelector(btnContainerClass);
        this.prevButton = this.buttonsContainer.querySelector('.prev');
        this.nextButton = this.buttonsContainer.querySelector('.next');

        this.prevButton.addEventListener('click', () => {
            this.update(-1)
        });

        this.nextButton.addEventListener('click', () => {
            this.update(1);
        });



    };


};

