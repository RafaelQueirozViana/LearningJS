export class Carousel {

    constructor({ container, itemHtmlClass, indicatorContainer }) {
        this.currentItem = 0;

        this.carouselContainer = document.querySelector(container);
        this.carouselItems = this.carouselContainer.querySelectorAll(itemHtmlClass); // it's a node array
        this.itemsLength = this.carouselItems.length - 1;


        this.indicatorContainer = document.querySelector(indicatorContainer);
        this.indicatorsGroup = this.indicatorContainer.querySelectorAll('.dot');
        this.textIndicator = this.indicatorContainer.querySelector('.current-item');
    };

    #updateItem(direction) {
        this.#removeWithAnim(this.carouselItems[this.currentItem]);

        setTimeout(() => {
            this.currentItem += direction;
            if (this.currentItem > this.itemsLength) {
                this.currentItem = 0;
            }

            else if (this.currentItem < 0) {
                this.currentItem = this.itemsLength;
            }

            this.#showWithAnim(this.carouselItems[this.currentItem]);

            this.updateIndicators();


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
            this.#updateItem(1)
        }, 4000);
    };

    createSlideButtons({ btnContainerClass }) {
        this.buttonsContainer = this.carouselContainer.querySelector(btnContainerClass) || this.carouselContainer.parentElement.querySelector(btnContainerClass);
        this.prevButton = this.buttonsContainer.querySelector('.prev');
        this.nextButton = this.buttonsContainer.querySelector('.next');

        this.prevButton.addEventListener('click', () => {
            this.#updateItem(-1);

        });

        this.nextButton.addEventListener('click', () => {

            this.#updateItem(1);
        });
    };

    updateIndicators(indicatorContainer) {
        if (this.currentItem < 10) {
            this.textIndicator.textContent = `0${this.currentItem + 1}`;

        }

        else {
            this.textIndicator.textContent = this.currentItem + 1
        };

        this.indicatorsGroup.forEach(btn => btn.classList.remove('active'));

        this.indicatorsGroup[this.currentItem].classList.add('active');

    }



};

