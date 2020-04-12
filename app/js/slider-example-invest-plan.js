'use strict';

import { Slider } from "./slider";

class SliderInvestPlan extends Slider {

    constructor(options) {
        super(options);
        this.itemWidth = 0;
        this.sidesWidth = 0;
        this.leftOffset = 0;
        this.offset = 0;
    }

    prevSlide() {
        if( !this.isAnimationEnd ) {
            return;
        }
        this.isAnimationEnd = false;

        --this.position;

        if( this.position <= 0 ) {
            const helpNode = this.selectors.wrap.children[1].cloneNode(true);
            helpNode.classList.add('help-slider-node');
            if( !this.selectors.wrap.getElementsByClassName('help-slider-node')[0] ) {
                this.selectors.wrap.appendChild( helpNode );
            }
        }

        if( this.position < 0 ) {
            this.selectors.wrap.classList.add('s-notransition');
            this.offset = this.itemWidth * this.maxPosition + this.leftOffset;
            this.selectors.wrap.style['transform'] = `translateX(-${this.offset}px)`;
            this.position = this.maxPosition - 1;
        }

        this.offset -= this.itemWidth;

        setTimeout( () => {
            this.selectors.wrap.classList.remove('s-notransition');
            this.selectors.wrap.style['transform'] = `translateX(-${this.offset}px)`;
        }, 10);

        this.selectors.wrap.addEventListener('transitionend', () => {
            this.isAnimationEnd = true;
        });

        super.switchDotsList();
    }

    nextSlide() {
        if( !this.isAnimationEnd ) {
            return;
        }

        this.isAnimationEnd = false;

        if( this.position === 0 ) {
            this.offset = this.itemWidth + this.leftOffset;
        } else {
            this.offset += this.itemWidth;
        }

        if( this.position < this.maxPosition ) {
            ++this.position;
        }

        if( this.position === this.maxPosition - 1 ) {
            const helpNode = this.selectors.wrap.children[1].cloneNode(true);
            helpNode.classList.add('help-slider-node');
            if( !this.selectors.wrap.getElementsByClassName('help-slider-node')[0] ) {
                this.selectors.wrap.appendChild( helpNode );
            }
        }

        this.selectors.wrap.classList.remove('s-notransition');

        this.selectors.wrap.style['transform'] = `translateX(-${this.offset}px)`;
        this.selectors.wrap.addEventListener('transitionend', () => {
            if( this.position >= this.maxPosition ) {
                this.selectors.wrap.style['transform'] = `translateX(-${this.leftOffset}px)`;
                this.selectors.wrap.classList.add('s-notransition');
                this.position = 0;
            }

            this.isAnimationEnd = true;
        });
    }

    itemPosition() {
        this.itemWidth = this.selectors.slides[1].clientWidth;
        this.sidesWidth = ( this.selectors.wrap.parentElement.clientWidth - this.itemWidth ) / 2;
        this.leftOffset = this.itemWidth - this.sidesWidth;
        this.selectors.wrap.style.transform = `translateX(-${this.leftOffset}px)`;
    }

    build() {
        super.build();
        window.addEventListener('resize', (e) => {
            this.itemPosition();
        })
    }

    init() {
        this.itemPosition();
        super.init();
    }
}

export { SliderInvestPlan };