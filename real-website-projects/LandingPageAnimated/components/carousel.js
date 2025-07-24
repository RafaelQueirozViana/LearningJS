export class Carousel {
    constructor({ container, itemHtmlClass }) {
        this.carouselContainer = document.querySelector(container);
        this.currentItem = 0;
        this.carouselItems = this.carouselContainer.querySelectorAll(itemHtmlClass); // it's a node array
        this.itemsLength = this.carouselItems.length - 1;
    };


    update(direction) {
        this.#removeWithAnim(this.carouselItems[this.currentItem]);

        setTimeout(() => {
            this.carouselItems.forEach(item => item.classList.remove('active'));
            this.currentItem += direction;
            if (this.currentItem > this.itemsLength) {
                this.currentItem = 0;
            }

            else if (this.currentItem < 0) {
                this.currentItem = this.itemsLength;
            }

            this.#showWithAnim(this.carouselItems[this.currentItem]);
        }, 300);



    };

    #showWithAnim(itemDefined) {
        itemDefined.classList.remove('hidden');
        setTimeout(() => {
            itemDefined.classList.add('active');

        }, 100);
    }



    #removeWithAnim(itemDefined) {
        itemDefined.classList.remove('active');
        setTimeout(() => {
            itemDefined.classList.add('hidden');
        }, 300);

    }

    autoSlide() {
        setInterval(() => {
            this.#removeWithAnim(this.carouselItems[this.currentItem]);
            this.currentItem++;
            this.update(1)
        }, 4000);
    };

    createSlideButtons({ btnContainerClass }) {
        this.buttonsContainer = this.carouselContainer.querySelector(btnContainerClass) || this.carouselContainer.parentElement.querySelector(btnContainerClass);
        this.prevButton = this.buttonsContainer.querySelector('.prev');
        this.nextButton = this.buttonsContainer.querySelector('.next');

        this.prevButton.addEventListener('click', () => {
            this.update(1);
        });

        this.nextButton.addEventListener('click', () => {
            this.update(1);
        });



    };


};

