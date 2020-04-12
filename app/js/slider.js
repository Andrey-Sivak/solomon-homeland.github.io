'use strict';

import { Timer } from "./timer";

class Slider {

    constructor( options ) {
        this.isAnimationEnd = true;
        this.selectors = {
            wrap: document.querySelector(options.wrap),
            slides: document.querySelector(options.wrap).children,
            prevArrow: document.querySelector(options.prevArrow),
            nextArrow: document.querySelector(options.nextArrow),
            dotsWrap: document.getElementById('dots')
        };
        this.default = {
            'autoplay': true,
            'autoplayDelay': 3000,
            'touch': true,
            'pauseOnFocus': true,
            'pauseOnHover': true,
            'dots': false
        };
        this.settings = Object.assign( this.default, options );
        this.position = 0;
        this.maxPosition = this.selectors.slides.length;
        this.timer;
        this.nextSlide = this.nextSlide.bind(this);
        this.startTouchPosition = this.startTouchPosition.bind(this);
        this.touchMoveTo = this.touchMoveTo.bind(this);
        this.touchCoordinates = {
            'xDown': 0,
            'yDown': 0,
            'xUp': 0,
            'yUp': 0,
            'xDiff': 0,
            'yDiff': 0,
        }
    }

    prevSlide() {

        if( !this.isAnimationEnd ) {
            return;
        }
        this.isAnimationEnd = false;

        --this.position;

        if( this.position < 0 ) {
            this.selectors.wrap.classList.add('s-notransition');
            this.selectors.wrap.style['transform'] = `translateX(-${this.maxPosition}00%)`;
            this.position = this.maxPosition - 1;
        }

        setTimeout( () => {
            this.selectors.wrap.classList.remove('s-notransition');
            this.selectors.wrap.style['transform'] = `translateX(-${this.position}00%)`;
        }, 10);

        this.selectors.wrap.addEventListener('transitionend', () => {
            this.isAnimationEnd = true;
        });

        this.switchDotsList();
    }

    nextSlide() {

        if( !this.isAnimationEnd ) {
            return;
        }
        this.isAnimationEnd = false;

        if( this.position < this.maxPosition ) {
            ++this.position;
        }

        this.selectors.wrap.classList.remove('s-notransition');
        this.selectors.wrap.style['transform'] = `translateX(-${this.position}00%)`;

        this.selectors.wrap.addEventListener('transitionend', () => {
            if( this.position >= this.maxPosition ) {
                this.selectors.wrap.style['transform'] = 'translateX(0)';
                this.selectors.wrap.classList.add('s-notransition');
                this.position = 0;
            }

            this.isAnimationEnd = true;
        });

        this.switchDotsList();
    }

    startTouchPosition(e) {
        this.touchCoordinates['xDown'] = e.touches[0].clientX;
        this.touchCoordinates['yDown'] = e.touches[0].clientY;
    }

    touchMoveTo(e) {
        if( !this.touchCoordinates['xDown'] || !this.touchCoordinates['yDown'] ) {
            return;
        }

        this.touchCoordinates['xUp'] = e.touches[0].clientX;
        this.touchCoordinates['yUp'] = e.touches[0].clientY;

        this.touchCoordinates['xDiff'] = this.touchCoordinates['xDown'] - this.touchCoordinates['xUp'];
        this.touchCoordinates['yDiff'] = this.touchCoordinates['yDown'] - this.touchCoordinates['yUp'];
        if( Math.abs( this.touchCoordinates['xDiff'] ) > Math.abs(this.touchCoordinates['yDiff'] ) ) {
            if( this.touchCoordinates['xDiff'] > 0 ) {
                this.nextSlide();
            } else {
                this.prevSlide();
            }
        }

        this.touchCoordinates['xDown'] = 0;
        this.touchCoordinates['yDown'] = 0;
    }

    // create switch arrows
    createArrows() {
        if( !this.selectors.prevArrow || !this.selectors.nextArrow ) {

            const prevArr = document.createElement('a');
            prevArr.className = 'prev';
            prevArr.setAttribute('id', 'prev');
            prevArr.innerHTML = '&#10094;';
            this.selectors.prevArrow = prevArr;

            const nextArr = document.createElement('a');
            nextArr.className = 'next';
            nextArr.setAttribute('id', 'next');
            nextArr.innerHTML = '&#10095;';
            this.selectors.nextArrow = nextArr;

            this.selectors.wrap.append(this.selectors.nextArrow, this.selectors.prevArrow);
        }
    }

    showSwitchDots() {
        if( this.settings.dots ) {
            for( let i = 0, len = this.selectors.wrap.children.length; i < len; i++ ) {
                const dot = document.createElement('span');
                dot.className = 'dot';
                dot.dataset.number = i;

                this.selectors.dotsWrap.appendChild(dot);
                dot.addEventListener('click', () => {
                    if( i > this.position ) {
                        let j = i;
                        while( j > this.position ) {
                            this.position = j - 1;
                            this.nextSlide();
                            j--;
                        }
                    }
                    if( i < this.position ) {
                        let j = i;
                        while( j < this.position ) {
                            this.position = j + 1;
                            this.prevSlide();
                            j++;
                        }
                    }
                })
            }
        }
    }

    addDataAttributeToSlides() {
        for( let i = 0, len = this.selectors.wrap.children.length; i < len; i++ ) {
            this.selectors.wrap.children[i].dataset.slide = i;
        }

        this.switchDotsList();
    }

    switchDotsList() {
        if ( !this.settings.dots ) {
            return;
        }
        for( let i = 0, len = this.selectors.dotsWrap.children.length; i < len; i++ ) {
            if( this.selectors.dotsWrap.children[i].dataset !== this.position ) {
                this.selectors.dotsWrap.children[i].classList.remove('active');
            }
        }

        if( this.position >= this.maxPosition ) {
            this.selectors.dotsWrap.children[0].classList.add('active');
        } else {
            this.selectors.dotsWrap.children[this.position].classList.add('active');
        }
    }

    build() {
        if( this.settings.autoplay === true ) {
            this.timer = new Timer( this.nextSlide, this.settings.autoplayDelay );
            this.timer.begin();
        }

        this.selectors.prevArrow.addEventListener('click', (e) => {
            e.preventDefault();
            this.prevSlide();
        });
        this.selectors.nextArrow.addEventListener('click', (e) => {
            e.preventDefault();
            this.nextSlide();
        });

        if( this.settings.autoplay && this.settings.pauseOnHover ) {
            this.selectors.wrap.addEventListener('mouseenter', () => {
                this.timer.pause();
            });

            this.selectors.wrap.addEventListener('mouseleave', () => {
               this.timer.become();
            })
        }

        if( this.settings.touch ) {
            this.selectors.wrap.addEventListener('touchstart', this.startTouchPosition, false);
            this.selectors.wrap.addEventListener('touchmove', this.touchMoveTo, false);
        }
    }

    init() {
        this.showSwitchDots();
        this.addDataAttributeToSlides();
        this.selectors.wrap.appendChild(this.selectors.wrap.children[0].cloneNode(true));
        this.build();
        this.createArrows();
    }

}

export { Slider };

