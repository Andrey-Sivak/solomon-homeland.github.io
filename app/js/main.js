import { Slider } from "./slider";
import { SliderInvestPlan } from "./slider-example-invest-plan";
import { MobMenu } from './menu.js';
import { Programs as InvestPrograms } from './mobile-ivest-programms.js';
import { Modal } from "./modal";
import { ToTopButton } from "./to-top-button";

window.addEventListener('load', function () {

    /* mobile menu */
    (function () {
        const mobMenu = new MobMenu({
            btn: 'menu-burger',
            menuContent: 'header_menu'
        });

        mobMenu.init();
    })();

    /* to top button */
    (function () {
        const btn = document.getElementsByClassName('toTopBtn')[0];
        if( !btn ) {
            return;
        }
        const  toTopBtn = new ToTopButton({
            buttonSelector: '.toTopBtn'
        });

        toTopBtn.init();
    })();

    /* modal window */
    (function () {
        const modal = new Modal();
        let buttons = document.getElementsByClassName('button');
        buttons = Array.prototype.slice.call( buttons );
        buttons = buttons.filter( (button) => {
           return !button.classList.contains('toTopBtn');
        });

        for( const btn of buttons ) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                modal.init();
            });
        }
    })();

    /* gallery page show more info about deal */
    (function () {
        const dealsList = document.getElementsByClassName('deal');
        if( !dealsList[0] ) {
            return;
        }

        const dealsListArr = [];

        for (let i = 0; i < dealsList.length; i++) {
            dealsListArr.push(dealsList[i]);
        }

        dealsListArr.forEach( function (item) {
            item.addEventListener('click', function (e) {
                e.preventDefault();
                const showMoreBtn = item.getElementsByClassName('deal_more-btn')[0];
                if (e.target === showMoreBtn) {
                    const showContent = item.getElementsByClassName('deal_more')[0];
                    if (showContent.classList.contains('deal_more-active')) {
                        showContent.classList.remove('deal_more-active');
                        showMoreBtn.classList.remove('deal_more-btn-active');
                    } else  {
                        showContent.classList.add('deal_more-active');
                        showMoreBtn.classList.add('deal_more-btn-active');
                    }
                }
            })
        })
    })();

    /* house sliders */
    (function () {
        const slidersWrap = document.getElementsByClassName('deal_slider-wrap');
        for (let k = 0; k < slidersWrap.length; k++) {

            const wrapName = `#slider${k + 1}`;
            const prev = `#prev${k + 1}`;
            const next = `#next${k + 1}`;

            const slider = new Slider({
                wrap: wrapName,
                autoplay: false,
                dots: false,
                nextArrow: next,
                prevArrow: prev
            });
            slider.init();
        }
    })();

    /* index page. invest programs mobile version */
    (function () {
        const wrap = document.getElementsByClassName('programs')[0];
        if( !wrap ) {
            return;
        }

        const programs = new InvestPrograms({
            items: '.program',
            className: 'program-active'
        });

        programs.init();
    })();

    /* business plan page. slider */
    (function () {
        const sliderWrap = document.getElementsByClassName('business-plan-examples')[0];
        if( !sliderWrap ) {
            return;
        }
        const slider = new SliderInvestPlan({
            wrap: '.business-plan-examples',
            autoplay: false,
            dots: false,
            nextArrow: '.business-plan-examples_rt-arrow',
            prevArrow: '.business-plan-examples_lt-arrow'
        });

        slider.init();
    })();

 });