'use strict';

class ToTopButton {

    constructor(options){
        this.scroll = document.documentElement.scrollTop;
        this.SCROLL_TO_SHOW_BTN = 300;
        this.btn = document.querySelector(options.buttonSelector);
    }

    showBtn() {
        window.addEventListener('scroll', (e) => {
            this.scroll = document.documentElement.scrollTop;

            if( this.scroll >= this.SCROLL_TO_SHOW_BTN ) {
                this.btn.classList.add('show');
            }

            if( this.scroll <= this.SCROLL_TO_SHOW_BTN ) {
                this.btn.classList.remove('show');
            }
        })
    }

    toTop() {
        this.btn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        })
    }

    init() {
        this.showBtn();
        this.toTop();
    }

}

export { ToTopButton };